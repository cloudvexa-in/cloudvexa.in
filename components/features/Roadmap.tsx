'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, Circle } from 'lucide-react'

const roadmapPhases = [
    {
        phase: 'Discovery',
        title: 'Understanding Your Needs',
        description: 'We analyze your requirements and create a comprehensive project roadmap',
        status: 'completed',
    },
    {
        phase: 'Design',
        title: 'Crafting the Solution',
        description: 'Our team designs intuitive and scalable architecture',
        status: 'completed',
    },
    {
        phase: 'Development',
        title: 'Building Excellence',
        description: 'Agile development with continuous integration and testing',
        status: 'in-progress',
    },
    {
        phase: 'Testing',
        title: 'Quality Assurance',
        description: 'Rigorous testing to ensure flawless performance',
        status: 'upcoming',
    },
    {
        phase: 'Deployment',
        title: 'Going Live',
        description: 'Smooth deployment with zero downtime',
        status: 'upcoming',
    },
    {
        phase: 'Support',
        title: 'Ongoing Excellence',
        description: '24/7 support and continuous improvements',
        status: 'upcoming',
    },
]

export default function Roadmap() {
    return (
        <div className="relative">
            {/* Connection Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-cyan via-neon-blue to-transparent" />

            <div className="space-y-8">
                {roadmapPhases.map((item, index) => (
                    <motion.div
                        key={item.phase}
                        className="relative pl-20"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                    >
                        {/* Status Icon */}
                        <motion.div
                            className="absolute left-0 top-0"
                            whileHover={{ scale: 1.2, rotate: 360 }}
                            transition={{ duration: 0.6 }}
                        >
                            {item.status === 'completed' ? (
                                <CheckCircle2 size={32} className="text-neon-cyan" />
                            ) : item.status === 'in-progress' ? (
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                                >
                                    <Circle size={32} className="text-neon-blue" />
                                </motion.div>
                            ) : (
                                <Circle size={32} className="opacity-30" />
                            )}
                        </motion.div>

                        {/* Content */}
                        <motion.div
                            className="glass-card"
                            whileHover={{ scale: 1.02, x: 10 }}
                        >
                            <div className="flex items-center gap-3 mb-2">
                                <span className="text-sm font-bold text-neon-cyan uppercase tracking-wider">
                                    {item.phase}
                                </span>
                                {item.status === 'in-progress' && (
                                    <span className="px-2 py-1 rounded-full bg-neon-blue/20 text-neon-blue text-xs font-semibold">
                                        In Progress
                                    </span>
                                )}
                            </div>
                            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                            <p className="text-sm opacity-80">{item.description}</p>
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}
