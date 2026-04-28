'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface CardProps {
    children: ReactNode
    className?: string
    hover3d?: boolean
    glow?: boolean
}

export default function Card({ children, className = '', hover3d = false, glow = false }: CardProps) {
    return (
        <motion.div
            className={`glass-card ${hover3d ? 'card-3d' : ''} ${glow ? 'animate-glow' : ''} ${className}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={hover3d ? {
                scale: 1.02,
                rotateX: 5,
                rotateY: 5,
            } : { y: -5 }}
        >
            {children}
        </motion.div>
    )
}
