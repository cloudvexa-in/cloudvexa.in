'use client';

import { useRef, MouseEvent } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

interface MagneticButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
}

export default function MagneticButton({
  children,
  href = '#',
  variant = 'primary',
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 30 });
  const springY = useSpring(y, { stiffness: 300, damping: 30 });

  const onMouseMove = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * 0.35);
    y.set((e.clientY - centerY) * 0.35);
  };

  const onMouseLeave = () => { x.set(0); y.set(0); };

  const isPrimary = variant === 'primary';

  return (
    <motion.a
      ref={ref}
      href={href}
      style={{
        x: springX,
        y: springY,
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        padding: '14px 32px',
        borderRadius: '14px',
        fontSize: '0.875rem',
        fontWeight: 600,
        textDecoration: 'none',
        cursor: 'pointer',
        position: 'relative',
        overflow: 'hidden',
        ...(isPrimary
          ? {
              background: 'linear-gradient(135deg, #00C2CC, #0070F3)',
              color: '#fff',
              boxShadow: '0 0 30px rgba(0,240,255,0.25), 0 4px 20px rgba(0,112,243,0.3)',
            }
          : {
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.12)',
              color: 'rgba(255,255,255,0.85)',
              backdropFilter: 'blur(10px)',
            }),
      }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
    >
      {isPrimary && (
        <motion.span
          animate={{ x: ['-100%', '200%'] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear', repeatDelay: 1.5 }}
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
            pointerEvents: 'none',
          }}
        />
      )}
      {children}
    </motion.a>
  );
}
