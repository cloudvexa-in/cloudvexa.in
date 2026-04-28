'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Loader } from 'lucide-react'

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
    })
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 2000))

        alert('Thank you! We will get back to you soon.')
        setFormData({ name: '', email: '', phone: '', company: '', message: '' })
        setIsSubmitting(false)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value,
        }))
    }

    return (
        <motion.form
            onSubmit={handleSubmit}
            className="glass-card max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <h2 className="text-3xl font-bold mb-6 gradient-text">Get In Touch</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Full Name *
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full"
                        placeholder="John Doe"
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address *
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full"
                        placeholder="john@example.com"
                    />
                </div>

                <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Phone Number
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full"
                        placeholder="+91 123 456 7890"
                    />
                </div>

                <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">
                        Company Name
                    </label>
                    <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full"
                        placeholder="Your Company"
                    />
                </div>
            </div>

            <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                </label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full resize-none"
                    placeholder="Tell us about your project..."
                />
            </div>

            <motion.button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
            >
                {isSubmitting ? (
                    <>
                        <Loader className="animate-spin" size={20} />
                        Sending...
                    </>
                ) : (
                    <>
                        <Send size={20} />
                        Send Message
                    </>
                )}
            </motion.button>
        </motion.form>
    )
}
