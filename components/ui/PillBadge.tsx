'use client';

import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';

interface PillBadgeProps {
  text: string;
  href?: string;
}

export default function PillBadge({ text, href = '#' }: PillBadgeProps) {
  return (
    <motion.a
      href={href}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      whileHover={{ scale: 1.04 }}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        padding: '6px 14px',
        borderRadius: '999px',
        border: '1px solid rgba(0,240,255,0.3)',
        background: 'rgba(0,240,255,0.05)',
        backdropFilter: 'blur(12px)',
        color: '#67E8F9',
        textDecoration: 'none',
        fontSize: '0.75rem',
        fontFamily: 'var(--font-mono, monospace)',
        fontWeight: 500,
        letterSpacing: '0.04em',
        cursor: 'pointer',
        marginBottom: '2rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Animated shimmer line */}
      <motion.span
        animate={{ x: ['-100%', '200%'] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'linear', repeatDelay: 1 }}
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(90deg, transparent, rgba(0,240,255,0.15), transparent)',
          pointerEvents: 'none',
        }}
      />
      <Sparkles size={14} style={{ color: '#00F0FF' }} />
      <span>{text}</span>
      <ArrowRight size={12} style={{ color: '#00F0FF' }} />
    </motion.a>
  );
}
