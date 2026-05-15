'use client'

import { motion } from 'framer-motion'
import ServiceCard3D from '@/components/3d/ServiceCard3D'
import Roadmap from '@/components/features/Roadmap'
import {
    Code2,
    Globe,
    TestTube,
    Brain,
    Shield,
    ArrowRight,
    Search
} from 'lucide-react'
import Button from '@/components/ui/Button'

const services = [
    {
        icon: Code2,
        title: 'Software Product Development',
        description: 'End-to-end custom software development tailored to your business needs. From concept to deployment, we build scalable and robust applications.',
        features: [
            'Custom application development',
            'Legacy system modernization',
            'Cloud-native architecture',
            'Microservices development',
        ],
    },
    {
        icon: Globe,
        title: 'Web Development',
        description: 'Modern, responsive websites and web applications that deliver exceptional user experiences and drive business growth.',
        features: [
            'Responsive web design',
            'Progressive web apps (PWA)',
            'E-commerce solutions',
            'CMS development',
        ],
    },
    {
        icon: TestTube,
        title: 'QA / Testing Services',
        description: 'Comprehensive quality assurance and testing services to ensure your software is bug-free, secure, and performs flawlessly.',
        features: [
            'Automated testing',
            'Performance testing',
            'Security testing',
            'Manual QA services',
        ],
    },
    {
        icon: Brain,
        title: 'AI Agent Development',
        description: 'Cutting-edge AI solutions and intelligent agents that automate processes, enhance decision-making, and drive innovation.',
        features: [
            'Machine learning models',
            'Natural language processing',
            'Computer vision solutions',
            'Chatbots & virtual assistants',
        ],
    },
    {
        icon: Shield,
        title: 'Network Security & Solutions',
        description: 'Enterprise-grade security solutions to protect your digital assets, ensure compliance, and maintain business continuity.',
        features: [
            'Security audits & assessments',
            'Penetration testing',
            'Network infrastructure security',
            'Compliance & risk management',
        ],
    },
    {
        icon: Search,
        title: 'Search Engine Optimization (SEO)',
        description: 'Data-driven SEO strategies to improve your search rankings, increase organic traffic, and boost your online visibility.',
        features: [
            'On-page & off-page optimization',
            'Technical SEO audits',
            'Keyword research & strategy',
            'Performance tracking & reporting',
        ],
    },
]

export default function ProductsPage() {
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
                        Our <span className="gradient-text">Products & Services</span>
                    </motion.h1>
                    <motion.p
                        className="text-xl opacity-90 max-w-3xl mx-auto"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        Comprehensive technology solutions designed to accelerate your
                        digital transformation journey
                    </motion.p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <ServiceCard3D
                                key={service.title}
                                icon={service.icon}
                                title={service.title}
                                description={service.description}
                                features={service.features}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Development Process */}
            <section className="section-padding bg-gradient-to-b from-transparent to-deep-blue-100/50">
                <div className="container-custom">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            Our <span className="gradient-text">Development Process</span>
                        </h2>
                        <p className="text-lg opacity-80 max-w-2xl mx-auto">
                            A proven methodology that ensures quality, transparency, and timely delivery
                        </p>
                    </motion.div>

                    <div className="max-w-4xl mx-auto">
                        <Roadmap />
                    </div>
                </div>
            </section>

            {/* Technology Stack */}
            <section className="section-padding">
                <div className="container-custom">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            <span className="gradient-text">Technology</span> Stack
                        </h2>
                        <p className="text-lg opacity-80 max-w-2xl mx-auto">
                            We work with the latest and most reliable technologies
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                        {[
                            'React', 'Next.js', 'Node.js', 'Python', 'AWS', 'Azure',
                            'Docker', 'Kubernetes', 'MongoDB', 'PostgreSQL', 'TensorFlow', 'PyTorch'
                        ].map((tech, index) => (
                            <motion.div
                                key={tech}
                                className="glass-card text-center p-6"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                whileHover={{ scale: 1.1, y: -5 }}
                            >
                                <div className="text-2xl font-bold gradient-text">{tech}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding bg-gradient-to-b from-transparent to-deep-blue-100/50">
                <div className="container-custom">
                    <motion.div
                        className="glass rounded-3xl p-12 text-center bg-gradient-cyber"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Ready to Start Your Project?
                        </h2>
                        <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                            Let&apos;s discuss how our services can help you achieve your business goals
                        </p>
                        <Button variant="primary" size="lg" href="/contact">
                            Get a Free Consultation <ArrowRight size={20} />
                        </Button>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}
