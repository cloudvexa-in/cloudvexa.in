'use client'

import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Navigation } from 'lucide-react'

const offices = [
    {
        city: 'Bangalore',
        address: 'Tech Park, Whitefield, Bangalore, Karnataka 560066',
        phone: '+91 123 456 7890',
        email: 'bangalore@cloudvexa.in',
    },
    {
        city: 'Mumbai',
        address: 'Business District, Bandra Kurla Complex, Mumbai, Maharashtra 400051',
        phone: '+91 123 456 7891',
        email: 'mumbai@cloudvexa.in',
    },
    {
        city: 'Hyderabad',
        address: 'HITEC City, Madhapur, Hyderabad, Telangana 500081',
        phone: '+91 123 456 7892',
        email: 'hyderabad@cloudvexa.in',
    },
]

export default function LocatePage() {
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
                        Find <span className="gradient-text">Us</span>
                    </motion.h1>
                    <motion.p
                        className="text-xl opacity-90 max-w-3xl mx-auto"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        Visit our offices across India or reach out to us online
                    </motion.p>
                </div>
            </section>

            {/* Map Section */}
            <section className="section-padding">
                <div className="container-custom">
                    <motion.div
                        className="glass rounded-3xl overflow-hidden mb-16"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        {/* Map Placeholder */}
                        <div className="w-full h-96 bg-gradient-to-br from-deep-blue-300 to-deep-blue-100 flex items-center justify-center relative">
                            <div className="text-center z-10">
                                <MapPin size={64} className="mx-auto mb-4 text-neon-cyan" />
                                <h3 className="text-2xl font-bold mb-2">Interactive Map</h3>
                                <p className="opacity-80 mb-4">
                                    Google Maps integration requires an API key
                                </p>
                                <p className="text-sm opacity-60">
                                    Add your Google Maps API key to display the interactive map
                                </p>
                            </div>

                            {/* Decorative elements */}
                            <div className="absolute inset-0 opacity-10">
                                <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-neon-cyan blur-3xl" />
                                <div className="absolute bottom-1/4 right-1/4 w-40 h-40 rounded-full bg-neon-blue blur-3xl" />
                            </div>
                        </div>
                    </motion.div>

                    {/* Office Locations */}
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-bold mb-4">
                            Our <span className="gradient-text">Offices</span>
                        </h2>
                        <p className="text-lg opacity-80">
                            We&apos;re present in major tech hubs across India
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {offices.map((office, index) => (
                            <motion.div
                                key={office.city}
                                className="glass-card group"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -10, scale: 1.02 }}
                            >
                                <motion.div
                                    className="w-16 h-16 rounded-2xl bg-gradient-to-br from-neon-cyan to-neon-blue flex items-center justify-center mb-6"
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <MapPin size={32} className="text-deep-blue-300" />
                                </motion.div>

                                <h3 className="text-2xl font-bold mb-4 group-hover:text-neon-cyan transition-colors">
                                    {office.city}
                                </h3>

                                <div className="space-y-3 text-sm">
                                    <div className="flex items-start gap-3">
                                        <Navigation size={16} className="text-neon-cyan mt-1 flex-shrink-0" />
                                        <p className="opacity-80">{office.address}</p>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <Phone size={16} className="text-neon-cyan flex-shrink-0" />
                                        <a
                                            href={`tel:${office.phone.replace(/\s/g, '')}`}
                                            className="opacity-80 hover:text-neon-cyan hover:opacity-100 transition-all"
                                        >
                                            {office.phone}
                                        </a>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <Mail size={16} className="text-neon-cyan flex-shrink-0" />
                                        <a
                                            href={`mailto:${office.email}`}
                                            className="opacity-80 hover:text-neon-cyan hover:opacity-100 transition-all"
                                        >
                                            {office.email}
                                        </a>
                                    </div>
                                </div>

                                <motion.button
                                    className="w-full mt-6 py-3 rounded-lg glass border border-neon-cyan text-neon-cyan font-semibold hover:bg-neon-cyan hover:text-deep-blue-300 transition-all duration-300"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Get Directions
                                </motion.button>
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
                        <h2 className="text-4xl font-bold mb-4">
                            Can&apos;t Visit in Person?
                        </h2>
                        <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
                            Schedule a virtual meeting or reach out to us online
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <motion.a
                                href="/contact"
                                className="btn-primary px-8 py-4"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Contact Us Online
                            </motion.a>
                            <motion.a
                                href="mailto:info@cloudvexa.in"
                                className="btn-secondary px-8 py-4"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Send an Email
                            </motion.a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}
