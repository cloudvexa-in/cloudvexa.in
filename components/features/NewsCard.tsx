'use client'

import { motion } from 'framer-motion'
import { Calendar, User, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Card from '@/components/ui/Card'

interface NewsCardProps {
    title: string
    excerpt: string
    author: string
    date: string
    category: string
    image?: string
    index: number
}

export default function NewsCard({
    title,
    excerpt,
    author,
    date,
    category,
    image,
    index,
}: NewsCardProps) {
    return (
        <Card hover3d className="overflow-hidden h-full flex flex-col">
            {/* Image Placeholder */}
            <div className="relative w-full h-48 bg-gradient-to-br from-neon-cyan/20 to-neon-blue/20 mb-4 rounded-lg flex items-center justify-center overflow-hidden">
                {image ? (
                    <Image src={image} alt={title} fill className="object-cover" />
                ) : (
                    <div className="text-6xl opacity-20">📰</div>
                )}
            </div>

            {/* Category Badge */}
            <motion.div
                className="inline-block px-3 py-1 rounded-full bg-neon-cyan/20 text-neon-cyan text-xs font-semibold mb-3 w-fit"
                whileHover={{ scale: 1.05 }}
            >
                {category}
            </motion.div>

            {/* Title */}
            <h3 className="text-xl font-bold mb-3 line-clamp-2 hover:text-neon-cyan transition-colors cursor-pointer">
                {title}
            </h3>

            {/* Excerpt */}
            <p className="text-sm opacity-80 mb-4 line-clamp-3 flex-grow">
                {excerpt}
            </p>

            {/* Meta Info */}
            <div className="flex items-center justify-between text-xs opacity-60 mb-4 pt-4 border-t border-white/10">
                <div className="flex items-center gap-2">
                    <User size={14} />
                    {author}
                </div>
                <div className="flex items-center gap-2">
                    <Calendar size={14} />
                    {date}
                </div>
            </div>

            {/* Read More */}
            <motion.button
                className="w-full py-2 rounded-lg glass border border-neon-cyan/50 text-neon-cyan font-semibold hover:bg-neon-cyan hover:text-deep-blue-300 transition-all duration-300 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
            >
                Read More <ArrowRight size={16} />
            </motion.button>
        </Card>
    )
}
