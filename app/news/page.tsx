'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import NewsCard from '@/components/features/NewsCard'
import { Search } from 'lucide-react'

const categories = ['All', 'Technology', 'AI & ML', 'Security', 'Cloud', 'Development']

const newsArticles = [
    {
        title: 'The Future of AI in Enterprise Software Development',
        excerpt: 'Exploring how artificial intelligence is revolutionizing the way we build and deploy enterprise applications, from automated testing to intelligent code generation.',
        author: 'Sarah Johnson',
        date: 'Jan 20, 2026',
        category: 'AI & ML',
    },
    {
        title: 'Cloud Security Best Practices for 2026',
        excerpt: 'A comprehensive guide to securing your cloud infrastructure with the latest tools and methodologies to protect against emerging threats.',
        author: 'Michael Chen',
        date: 'Jan 18, 2026',
        category: 'Security',
    },
    {
        title: 'Microservices Architecture: Lessons from the Field',
        excerpt: 'Real-world insights and best practices for implementing microservices architecture in large-scale applications.',
        author: 'David Kumar',
        date: 'Jan 15, 2026',
        category: 'Development',
    },
    {
        title: 'Serverless Computing: The Next Evolution',
        excerpt: 'How serverless architecture is changing the game for scalable, cost-effective application development.',
        author: 'Emily Rodriguez',
        date: 'Jan 12, 2026',
        category: 'Cloud',
    },
    {
        title: 'Building Accessible Web Applications',
        excerpt: 'Essential guidelines and techniques for creating inclusive digital experiences that work for everyone.',
        author: 'Alex Thompson',
        date: 'Jan 10, 2026',
        category: 'Development',
    },
    {
        title: 'Machine Learning Operations (MLOps) Explained',
        excerpt: 'Understanding the principles and practices of MLOps for deploying and maintaining machine learning models in production.',
        author: 'Priya Sharma',
        date: 'Jan 8, 2026',
        category: 'AI & ML',
    },
]

export default function NewsPage() {
    const [selectedCategory, setSelectedCategory] = useState('All')
    const [searchQuery, setSearchQuery] = useState('')

    const filteredArticles = newsArticles.filter(article => {
        const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory
        const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            article.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
        return matchesCategory && matchesSearch
    })

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
                        Latest <span className="gradient-text">News & Insights</span>
                    </motion.h1>
                    <motion.p
                        className="text-xl opacity-90 max-w-3xl mx-auto"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        Stay updated with the latest trends, insights, and innovations in technology
                    </motion.p>
                </div>
            </section>

            {/* Filters & Search */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="flex flex-col md:flex-row gap-6 mb-12">
                        {/* Search */}
                        <div className="flex-1 relative">
                            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neon-cyan" size={20} />
                            <input
                                type="text"
                                placeholder="Search articles..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 glass rounded-lg"
                            />
                        </div>

                        {/* Category Filter */}
                        <div className="flex gap-2 flex-wrap">
                            {categories.map((category) => (
                                <motion.button
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${selectedCategory === category
                                            ? 'bg-gradient-to-r from-neon-cyan to-neon-blue text-deep-blue-300'
                                            : 'glass hover:bg-white/10'
                                        }`}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {category}
                                </motion.button>
                            ))}
                        </div>
                    </div>

                    {/* Articles Grid */}
                    {filteredArticles.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredArticles.map((article, index) => (
                                <NewsCard key={index} {...article} index={index} />
                            ))}
                        </div>
                    ) : (
                        <motion.div
                            className="text-center py-20"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                        >
                            <div className="text-6xl mb-4">📰</div>
                            <h3 className="text-2xl font-bold mb-2">No articles found</h3>
                            <p className="opacity-80">Try adjusting your search or filter criteria</p>
                        </motion.div>
                    )}
                </div>
            </section>

            {/* Newsletter Subscription */}
            <section className="section-padding bg-gradient-to-b from-transparent to-deep-blue-100/50">
                <div className="container-custom">
                    <motion.div
                        className="glass rounded-3xl p-12 text-center"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="text-5xl mb-6">📬</div>
                        <h2 className="text-4xl font-bold mb-4">
                            Subscribe to Our Newsletter
                        </h2>
                        <p className="text-lg opacity-80 mb-8 max-w-2xl mx-auto">
                            Get the latest articles, insights, and updates delivered directly to your inbox
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-3 glass rounded-lg"
                            />
                            <button className="btn-primary px-8 py-3 whitespace-nowrap">
                                Subscribe
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}
