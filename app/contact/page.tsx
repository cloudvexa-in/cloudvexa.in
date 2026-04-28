'use client'

import ContactForm from '@/components/ui/ContactForm'
import { motion } from 'framer-motion'
import { Clock, Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react'

const contactInfo = [
    {
        icon: Mail,
        title: 'Email Us',
        value: 'support@cloudvexa.in',
        link: 'mailto:support@cloudvexa.in',
        type: '_blank'
    },
    {
        icon: Phone,
        title: 'Call Us',
        value: '+91 123 456 7890',
        link: 'tel:+94384',
    },
    {
        icon: MapPin,
        title: 'Visit Us',
        value: 'Oxford Tower, HAL Old Airport Rd, Kodihalli, Bengaluru, Karnataka 560008',
        link: 'https://share.google/DbHRv7ULI1A9OaDhR',
        type: '_blank'
    },
    {
        icon: Clock,
        title: 'Business Hours',
        value: 'Mon - Fri: 9AM - 6PM IST',
        link: null,
    },
]

const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
]

export default function ContactPage() {
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
                        Get In <span className="gradient-text">Touch</span>
                    </motion.h1>
                    <motion.p
                        className="text-xl opacity-90 max-w-3xl mx-auto"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        Have a project in mind? Let&apos;s discuss how we can help you achieve your goals
                    </motion.p>
                </div>
            </section>

            {/* Contact Info Cards */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                        {contactInfo.map((info, index) => {
                            const Icon = info.icon
                            return (
                                <motion.div
                                    key={info.title}
                                    className="glass-card text-center group"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ y: -5, scale: 1.02 }}
                                >
                                    <motion.div
                                        className="w-16 h-16 rounded-2xl bg-gradient-to-br from-neon-cyan to-neon-blue flex items-center justify-center mx-auto mb-4"
                                        whileHover={{ rotate: 360 }}
                                        transition={{ duration: 0.6 }}
                                    >
                                        <Icon size={28} className="text-deep-blue-300" />
                                    </motion.div>
                                    <h3 className="text-lg font-bold mb-2">{info.title}</h3>
                                    {info.link ? (
                                        <a
                                            href={info.link}
                                            className="text-sm opacity-80 hover:text-neon-cyan hover:opacity-100 transition-all"
                                            target={info.type}
                                        >
                                            {info.value}
                                        </a>
                                    ) : (
                                        <p className="text-sm opacity-80">{info.value}</p>
                                    )}
                                </motion.div>
                            )
                        })}
                    </div>

                    {/* Contact Form */}
                    <ContactForm />
                </div>
            </section>

            {/* Social Media */}
            <section className="section-padding bg-gradient-to-b from-transparent to-deep-blue-100/50">
                <div className="container-custom">
                    <motion.div
                        className="glass rounded-3xl p-12 text-center"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-bold mb-4">
                            Connect With <span className="gradient-text">Us</span>
                        </h2>
                        <p className="text-lg opacity-80 mb-8 max-w-2xl mx-auto">
                            Follow us on social media for the latest updates, insights, and news
                        </p>

                        <div className="flex justify-center gap-4">
                            {socialLinks.map((social, index) => {
                                const Icon = social.icon
                                return (
                                    <motion.a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="glass p-4 rounded-full hover:bg-white/10 transition-all"
                                        initial={{ opacity: 0, scale: 0 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1, type: 'spring' }}
                                        whileHover={{ scale: 1.2, y: -5 }}
                                        whileTap={{ scale: 0.9 }}
                                        aria-label={social.label}
                                    >
                                        <Icon size={24} />
                                    </motion.a>
                                )
                            })}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="section-padding">
                <div className="container-custom">
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-bold mb-4">
                            Frequently Asked <span className="gradient-text">Questions</span>
                        </h2>
                    </motion.div>

                    <div className="max-w-3xl mx-auto space-y-4">
                        {[
                            {
                                q: 'What is your typical project timeline?',
                                a: 'Project timelines vary based on scope and complexity. A typical web application takes 8-12 weeks from kickoff to deployment.',
                            },
                            {
                                q: 'Do you offer ongoing support and maintenance?',
                                a: 'Yes, we provide 24/7 support and maintenance packages to ensure your application runs smoothly.',
                            },
                            {
                                q: 'What technologies do you specialize in?',
                                a: 'We work with modern tech stacks including React, Next.js, Node.js, Python, AWS, Azure, and more.',
                            },
                            {
                                q: 'How do you ensure project quality?',
                                a: 'We follow rigorous QA processes, including automated testing, code reviews, and continuous integration.',
                            },
                        ].map((faq, index) => (
                            <motion.div
                                key={index}
                                className="glass-card"
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <h3 className="text-lg font-bold mb-2 text-neon-cyan">{faq.q}</h3>
                                <p className="opacity-80">{faq.a}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
