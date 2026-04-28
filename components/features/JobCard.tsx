'use client'

import { motion } from 'framer-motion'
import { Briefcase, MapPin, Clock, ArrowRight } from 'lucide-react'

interface JobCardProps {
    title: string
    department: string
    location: string
    type: string
    description: string
    index: number
    onApply: () => void
}

export default function JobCard({
    title,
    department,
    location,
    type,
    description,
    index,
    onApply,
}: JobCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="glass-card group hover:shadow-glow-cyan transition-all duration-300"
        >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                <div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-neon-cyan transition-colors">
                        {title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 text-sm opacity-80">
                        <div className="flex items-center gap-2">
                            <Briefcase size={16} className="text-neon-cyan" />
                            {department}
                        </div>
                        <div className="flex items-center gap-2">
                            <MapPin size={16} className="text-neon-cyan" />
                            {location}
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock size={16} className="text-neon-cyan" />
                            {type}
                        </div>
                    </div>
                </div>

                <motion.button
                    onClick={onApply}
                    className="btn-primary px-6 py-3 whitespace-nowrap"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Apply Now <ArrowRight size={16} />
                </motion.button>
            </div>

            <p className="text-sm opacity-80 leading-relaxed">
                {description}
            </p>
        </motion.div>
    )
}
