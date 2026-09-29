'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface CounterCardProps {
  value: string;       // e.g. "99.99%", "50M+", "10+"
  numericValue: number;// e.g. 9999, 50, 10
  suffix: string;      // e.g. "%", "M+", "+"
  label: string;
  color: string;       // e.g. "#00F0FF"
  delay?: number;
}

function useCounter(target: number, duration: number, start: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    const step = target / (duration / 16);
    let current = 0;
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [start, target, duration]);
  return count;
}

export default function CounterCard({
  value,
  numericValue,
  suffix,
  label,
  color,
  delay = 0,
}: CounterCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const count = useCounter(numericValue, 1800, inView);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // Format the display value
  const displayValue = value.includes('.')
    ? (count / 100).toFixed(2)
    : count.toString();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: [0.4, 0, 0.2, 1] }}
      style={{
        background: 'rgba(15, 23, 42, 0.5)',
        backdropFilter: 'blur(12px)',
        border: '1px solid rgba(255,255,255,0.07)',
        borderTop: `2px solid ${color}`,
        borderRadius: '16px',
        padding: '2rem 1.5rem',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Ambient glow */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '120px',
          height: '60px',
          background: color,
          filter: 'blur(40px)',
          opacity: 0.12,
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          fontWeight: 800,
          letterSpacing: '-0.03em',
          color,
          lineHeight: 1,
          marginBottom: '0.5rem',
          fontVariantNumeric: 'tabular-nums',
        }}
      >
        {displayValue}
        {suffix}
      </div>
      <p
        style={{
          fontSize: '0.85rem',
          color: 'rgba(148,163,184,0.8)',
          fontWeight: 500,
          letterSpacing: '0.02em',
        }}
      >
        {label}
      </p>
    </motion.div>
  );
}
