'use client'

import { motion } from 'framer-motion'
import { Calendar, TrendingUp, Award, Users } from 'lucide-react'

const milestones = [
    {
        year: '2018',
        title: 'Company Founded',
        description: 'Started with a vision to transform digital solutions',
        icon: Calendar,
    },
    {
        year: '2019',
        title: 'First Major Client',
        description: 'Secured enterprise partnership and expanded team',
        icon: Users,
    },
    {
        year: '2021',
        title: 'Industry Recognition',
        description: 'Awarded Best Tech Startup of the Year',
        icon: Award,
    },
    {
        year: '2023',
        title: 'Global Expansion',
        description: 'Opened offices in 5 countries, 100+ team members',
        icon: TrendingUp,
    },
]

export default function Timeline3D() {
    return (
        <div className="relative py-12">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-cyan via-neon-blue to-transparent transform -translate-x-1/2 hidden md:block" />

            <div className="space-y-12">
                {milestones.map((milestone, index) => {
                    const Icon = milestone.icon
                    const isEven = index % 2 === 0

                    return (
                        <motion.div
                            key={milestone.year}
                            className={`flex items-center gap-8 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                                } flex-col`}
                            initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                        >
                            {/* Content */}
                            <motion.div
                                className={`flex-1 ${isEven ? 'md:text-right' : 'md:text-left'} text-center`}
                                whileHover={{ scale: 1.05 }}
                            >
                                <div className="glass-card p-6 max-w-md mx-auto md:mx-0">
                                    <motion.div
                                        className="text-4xl font-black gradient-text mb-2"
                                        whileHover={{ scale: 1.1 }}
                                    >
                                        {milestone.year}
                                    </motion.div>
                                    <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                                    <p className="text-sm opacity-80">{milestone.description}</p>
                                </div>
                            </motion.div>

                            {/* Icon */}
                            <motion.div
                                className="relative z-10"
                                whileHover={{ rotate: 360, scale: 1.2 }}
                                transition={{ duration: 0.6 }}
                            >
                                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-neon-cyan to-neon-blue flex items-center justify-center shadow-glow-cyan">
                                    <Icon size={28} className="text-deep-blue-300" />
                                </div>
                            </motion.div>

                            {/* Spacer for alignment */}
                            <div className="flex-1 hidden md:block" />
                        </motion.div>
                    )
                })}
            </div>
        </div>
    )
}
