'use client'

import { motion } from 'framer-motion'
import {
    Facebook,
    Instagram,
    Linkedin,
    Mail,
    MapPin,
    Phone,
    Twitter,
    Youtube
} from 'lucide-react'
import Link from 'next/link'

const footerLinks = {
    company: [
        { name: 'About Us', href: '/about' },
        { name: 'Our Team', href: '/about#team' },
        { name: 'Careers', href: '/career' },
        { name: 'News', href: '/news' },
    ],
    services: [
        { name: 'Software Development', href: '/products#software' },
        { name: 'Web Development', href: '/products#web' },
        { name: 'QA & Testing', href: '/products#qa' },
        { name: 'AI Solutions', href: '/products#ai' },
        { name: 'Network Security', href: '/products#security' },
    ],
    support: [
        { name: 'Contact Us', href: '/contact' },
        { name: 'Locate Us', href: '/locate' },
        { name: 'Documentation', href: '#' },
        { name: 'FAQ', href: '#' },
    ],
}

const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#', color: '#1877F2' },
    { name: 'Twitter', icon: Twitter, href: '#', color: '#1DA1F2' },
    { name: 'LinkedIn', icon: Linkedin, href: '#', color: '#0A66C2' },
    { name: 'Instagram', icon: Instagram, href: '#', color: '#E4405F' },
    { name: 'YouTube', icon: Youtube, href: '#', color: '#FF0000' },
]

export default function Footer() {
    return (
        <footer className="glass border-t border-white/10 mt-20">
            <div className="container-custom section-padding">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
                    {/* Company Info */}
                    <div className="lg:col-span-2">
                        <motion.div
                            className="text-3xl font-black gradient-text mb-4"
                            whileHover={{ scale: 1.05 }}
                        >
                            Cloudvexa
                        </motion.div>
                        <p className="text-sm mb-6 opacity-80">
                            Building Intelligent, Secure & Scalable Digital Solutions for the future.
                            Transforming businesses through innovative technology.
                        </p>

                        {/* Contact Info */}
                        <div className="space-y-3">
                            <div className="flex items-center gap-3 text-sm">
                                <Mail size={16} className="text-neon-cyan" />
                                <a href="mailto:support@cloudvexa.in" className="hover:text-neon-cyan transition-colors">
                                    support@cloudvexa.in
                                </a>
                            </div>
                            <div className="flex items-center gap-3 text-sm">
                                <Phone size={16} className="text-neon-cyan" />
                                <a href="tel:+919438466231" className="hover:text-neon-cyan transition-colors">
                                    +91 9438466231
                                </a>
                            </div>
                            <div className="flex items-center gap-3 text-sm">
                                <MapPin size={16} className="text-neon-cyan" />
                                <span className="opacity-80">Unit 101, Oxford Towers, 139/88, Hal Old Airport, H.a.l Ii Stage, Bangalore, Bangalore North, Karnataka, India, 560008</span>
                            </div>
                        </div>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h4 className="font-bold text-lg mb-4">Company</h4>
                        <ul className="space-y-2">
                            {footerLinks.company.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-sm opacity-80 hover:opacity-100 hover:text-neon-cyan transition-all duration-300"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services Links */}
                    <div>
                        <h4 className="font-bold text-lg mb-4">Services</h4>
                        <ul className="space-y-2">
                            {footerLinks.services.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-sm opacity-80 hover:opacity-100 hover:text-neon-cyan transition-all duration-300"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support Links */}
                    <div>
                        <h4 className="font-bold text-lg mb-4">Support</h4>
                        <ul className="space-y-2">
                            {footerLinks.support.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-sm opacity-80 hover:opacity-100 hover:text-neon-cyan transition-all duration-300"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Newsletter */}
                <div className="glass rounded-2xl p-8 mb-12">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div>
                            <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
                            <p className="text-sm opacity-80">Subscribe to our newsletter for the latest updates</p>
                        </div>
                        <div className="flex gap-2 w-full md:w-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 md:w-64 px-4 py-3 rounded-lg glass border border-white/20 focus:border-neon-cyan transition-all"
                            />
                            <button className="btn-primary px-6 py-3 whitespace-nowrap">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                {/* Social Links */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-white/10">
                    <div className="flex items-center gap-4">
                        {socialLinks.map((social) => {
                            const Icon = social.icon
                            return (
                                <motion.a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="glass p-3 rounded-full hover:bg-white/10 transition-all duration-300"
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    aria-label={social.name}
                                >
                                    <Icon size={20} />
                                </motion.a>
                            )
                        })}
                    </div>

                    <div className="text-sm opacity-60 text-center md:text-right">
                        <p>&copy; {new Date().getFullYear()} cloudvexa.in All rights reserved.</p>
                        <div className="flex gap-4 mt-2 justify-center md:justify-end">
                            <Link href="#" className="hover:text-neon-cyan transition-colors">Privacy Policy</Link>
                            <Link href="#" className="hover:text-neon-cyan transition-colors">Terms of Service</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
