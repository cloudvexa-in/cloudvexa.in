'use client'

import { motion } from 'framer-motion'
import {
    LayoutDashboard,
    Users,
    FileText,
    Settings,
    BarChart3,
    TrendingUp,
    DollarSign,
    Activity
} from 'lucide-react'

const stats = [
    { icon: Users, label: 'Total Users', value: '1,234', change: '+12%', color: 'from-neon-cyan to-neon-blue' },
    { icon: FileText, label: 'Active Projects', value: '56', change: '+8%', color: 'from-neon-blue to-neon-purple' },
    { icon: DollarSign, label: 'Revenue', value: '$125K', change: '+23%', color: 'from-neon-purple to-neon-cyan' },
    { icon: Activity, label: 'System Health', value: '99.9%', change: '+0.1%', color: 'from-green-400 to-green-600' },
]

const quickActions = [
    { icon: Users, label: 'Manage Users', href: '#' },
    { icon: FileText, label: 'View Projects', href: '#' },
    { icon: BarChart3, label: 'Analytics', href: '#' },
    { icon: Settings, label: 'Settings', href: '#' },
]

export default function AdminPage() {
    return (
        <div className="overflow-hidden">
            {/* Hero Section */}
            <section className="section-padding bg-gradient-cyber">
                <div className="container-custom">
                    <motion.div
                        className="flex items-center justify-between"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <div>
                            <h1 className="text-4xl md:text-5xl font-black mb-2">
                                Admin <span className="gradient-text">Dashboard</span>
                            </h1>
                            <p className="text-lg opacity-80">Welcome back! Here&apos;s what&apos;s happening today.</p>
                        </div>
                        <LayoutDashboard size={64} className="text-neon-cyan hidden md:block" />
                    </motion.div>
                </div>
            </section>

            {/* Stats Grid */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                        {stats.map((stat, index) => {
                            const Icon = stat.icon
                            return (
                                <motion.div
                                    key={stat.label}
                                    className="glass-card"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ y: -5, scale: 1.02 }}
                                >
                                    <div className="flex items-center justify-between mb-4">
                                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                                            <Icon size={24} className="text-white" />
                                        </div>
                                        <div className="text-sm font-semibold text-green-400">{stat.change}</div>
                                    </div>
                                    <div className="text-3xl font-bold mb-1">{stat.value}</div>
                                    <div className="text-sm opacity-70">{stat.label}</div>
                                </motion.div>
                            )
                        })}
                    </div>

                    {/* Quick Actions */}
                    <motion.div
                        className="mb-12"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-2xl font-bold mb-6">Quick Actions</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {quickActions.map((action, index) => {
                                const Icon = action.icon
                                return (
                                    <motion.a
                                        key={action.label}
                                        href={action.href}
                                        className="glass-card text-center group"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        whileHover={{ y: -5, scale: 1.05 }}
                                    >
                                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-neon-cyan to-neon-blue flex items-center justify-center mx-auto mb-3">
                                            <Icon size={28} className="text-deep-blue-300" />
                                        </div>
                                        <div className="font-semibold group-hover:text-neon-cyan transition-colors">
                                            {action.label}
                                        </div>
                                    </motion.a>
                                )
                            })}
                        </div>
                    </motion.div>

                    {/* Recent Activity */}
                    <motion.div
                        className="glass-card"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-2xl font-bold mb-6">Recent Activity</h2>
                        <div className="space-y-4">
                            {[
                                { action: 'New user registered', time: '2 minutes ago', type: 'user' },
                                { action: 'Project "AI Dashboard" completed', time: '1 hour ago', type: 'project' },
                                { action: 'System backup completed', time: '3 hours ago', type: 'system' },
                                { action: 'New payment received', time: '5 hours ago', type: 'payment' },
                            ].map((activity, index) => (
                                <motion.div
                                    key={index}
                                    className="flex items-center justify-between p-4 glass rounded-lg"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="w-2 h-2 rounded-full bg-neon-cyan" />
                                        <div>
                                            <div className="font-medium">{activity.action}</div>
                                            <div className="text-sm opacity-60">{activity.time}</div>
                                        </div>
                                    </div>
                                    <TrendingUp size={20} className="text-neon-cyan" />
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Note */}
            <section className="section-padding bg-gradient-to-b from-transparent to-deep-blue-100/50">
                <div className="container-custom">
                    <motion.div
                        className="glass rounded-3xl p-8 text-center"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="text-4xl mb-4">🔒</div>
                        <h3 className="text-2xl font-bold mb-2">Admin Panel Structure</h3>
                        <p className="opacity-80 max-w-2xl mx-auto">
                            This is a UI mockup of the admin dashboard. Full functionality would require
                            backend integration with authentication, database, and API services.
                        </p>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}
