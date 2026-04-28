'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface ButtonProps {
    children: ReactNode
    variant?: 'primary' | 'secondary' | 'ghost'
    size?: 'sm' | 'md' | 'lg'
    onClick?: () => void
    href?: string
    className?: string
    disabled?: boolean
}

export default function Button({
    children,
    variant = 'primary',
    size = 'md',
    onClick,
    href,
    className = '',
    disabled = false,
}: ButtonProps) {
    const baseClasses = 'inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-300 cursor-pointer'

    const variantClasses = {
        primary: 'bg-gradient-to-r from-neon-cyan to-neon-blue text-deep-blue-300 shadow-glow-cyan hover:shadow-glow-cyan',
        secondary: 'glass border-2 border-neon-cyan text-current hover:bg-neon-cyan hover:text-deep-blue-300',
        ghost: 'bg-transparent border border-current hover:glass',
    }

    const sizeClasses = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-8 py-4 text-base',
        lg: 'px-10 py-5 text-lg',
    }

    const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''
        }`

    const MotionComponent = motion.a

    if (href) {
        return (
            <MotionComponent
                href={href}
                className={classes}
                whileHover={disabled ? {} : { scale: 1.05, y: -2 }}
                whileTap={disabled ? {} : { scale: 0.95 }}
            >
                {children}
            </MotionComponent>
        )
    }

    return (
        <motion.button
            onClick={onClick}
            className={classes}
            disabled={disabled}
            whileHover={disabled ? {} : { scale: 1.05, y: -2 }}
            whileTap={disabled ? {} : { scale: 0.95 }}
        >
            {children}
        </motion.button>
    )
}
