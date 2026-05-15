'use client'

import Timeline3D from '@/components/3d/Timeline3D'
import { motion } from 'framer-motion'
import { Award, Eye, Heart, Target } from 'lucide-react'

const values = [
    {
        icon: Target,
        title: 'Innovation',
        description: 'Constantly pushing boundaries with cutting-edge technology',
    },
    {
        icon: Eye,
        title: 'Transparency',
        description: 'Open communication and honest relationships with clients',
    },
    {
        icon: Heart,
        title: 'Excellence',
        description: 'Committed to delivering the highest quality solutions',
    },
    {
        icon: Award,
        title: 'Integrity',
        description: 'Building trust through ethical practices and reliability',
    },
]

export default function AboutPage() {
    return (
        <div className="overflow-hidden">
            {/* Hero Section */}
            <section className="section-padding bg-gradient-cyber">
                <div className="container-custom text-center">
                    <motion.h1
                        className="text-5xl md:text-6xl font-black mb-6"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        About <span className="gradient-text">Cloudvexa</span>
                    </motion.h1>
                    <motion.p
                        className="text-xl opacity-90 max-w-3xl mx-auto"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        We are a team of passionate technologists dedicated to transforming
                        businesses through innovative digital solutions
                    </motion.p>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <motion.div
                            className="glass-card"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="text-5xl mb-4">🎯</div>
                            <h2 className="text-3xl font-bold mb-4 gradient-text">Our Mission</h2>
                            <p className="text-lg opacity-80 leading-relaxed">
                                To empower businesses worldwide with intelligent, secure, and
                                scalable digital solutions that drive growth, enhance efficiency,
                                and create lasting value. We strive to be the trusted technology
                                partner that transforms visions into reality.
                            </p>
                        </motion.div>

                        <motion.div
                            className="glass-card"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="text-5xl mb-4">🔭</div>
                            <h2 className="text-3xl font-bold mb-4 gradient-text">Our Vision</h2>
                            <p className="text-lg opacity-80 leading-relaxed">
                                To be the global leader in innovative technology solutions,
                                recognized for our commitment to excellence, customer success,
                                and positive impact on the digital landscape. We envision a future
                                where technology seamlessly enhances every aspect of business.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Company Timeline */}
            <section className="section-padding bg-gradient-to-b from-transparent to-deep-blue-100/50">
                <div className="container-custom">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            Our <span className="gradient-text">Journey</span>
                        </h2>
                        <p className="text-lg opacity-80 max-w-2xl mx-auto">
                            From humble beginnings to global impact
                        </p>
                    </motion.div>

                    <Timeline3D />
                </div>
            </section>

            {/* Core Values */}
            <section className="section-padding">
                <div className="container-custom">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            Our <span className="gradient-text">Values</span>
                        </h2>
                        <p className="text-lg opacity-80 max-w-2xl mx-auto">
                            The principles that guide everything we do
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => {
                            const Icon = value.icon
                            return (
                                <motion.div
                                    key={value.title}
                                    className="glass-card text-center group"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ y: -10, scale: 1.05 }}
                                >
                                    <motion.div
                                        className="w-16 h-16 rounded-2xl bg-gradient-to-br from-neon-cyan to-neon-blue flex items-center justify-center mx-auto mb-4"
                                        whileHover={{ rotate: 360 }}
                                        transition={{ duration: 0.6 }}
                                    >
                                        <Icon size={32} className="text-deep-blue-300" />
                                    </motion.div>
                                    <h3 className="text-xl font-bold mb-2 group-hover:text-neon-cyan transition-colors">
                                        {value.title}
                                    </h3>
                                    <p className="text-sm opacity-80">{value.description}</p>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="section-padding bg-gradient-to-b from-transparent to-deep-blue-100/50">
                <div className="container-custom">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            Meet Our <span className="gradient-text">Team</span>
                        </h2>
                        <p className="text-lg opacity-80 max-w-2xl mx-auto">
                            100+ talented professionals working together to deliver excellence
                        </p>
                    </motion.div>

                    <motion.div
                        className="glass rounded-3xl p-12 text-center"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <div className="text-6xl mb-6">👥</div>
                        <h3 className="text-3xl font-bold mb-4">
                            Passionate. Skilled. Dedicated.
                        </h3>
                        <p className="text-lg opacity-80 max-w-2xl mx-auto mb-8">
                            Our diverse team of developers, designers, and strategists brings
                            together decades of combined experience in delivering world-class
                            digital solutions. We&apos;re united by our passion for technology and
                            commitment to client success.
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
                            <div>
                                <div className="text-3xl font-bold gradient-text">15+</div>
                                <div className="text-sm opacity-70">Developers</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold gradient-text">5+</div>
                                <div className="text-sm opacity-70">Designers</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold gradient-text">10+</div>
                                <div className="text-sm opacity-70">QA Engineers</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold gradient-text">5+</div>
                                <div className="text-sm opacity-70">Consultants</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}
