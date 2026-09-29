'use client';

import { motion } from 'framer-motion';
import { Monitor, Globe, ShieldCheck, Bot, TrendingUp, CheckCircle } from 'lucide-react';
import { fadeUpVariant, staggerContainer } from '@/lib/motion';

const services = [
  {
    title: 'Software Development',
    description: 'Custom enterprise software architecture tailored to your complex business requirements, ensuring scalability and robust performance.',
    icon: Monitor,
  },
  {
    title: 'Web Development',
    description: 'High-performance, responsive web applications built with modern frameworks to deliver seamless user experiences globally.',
    icon: Globe,
  },
  {
    title: 'QA & Testing',
    description: 'Rigorous automated and manual testing pipelines to guarantee zero-defect releases and maintain highest quality standards.',
    icon: CheckCircle,
  },
  {
    title: 'AI Solutions',
    description: 'Intelligent AI integrations, LLM deployments, and machine learning models to automate workflows and unlock data insights.',
    icon: Bot,
  },
  {
    title: 'Network Security',
    description: 'Enterprise-grade zero-trust architectures, real-time threat detection, and comprehensive compliance frameworks.',
    icon: ShieldCheck,
  },
  {
    title: 'Search Engine Optimization',
    description: 'Data-driven SEO strategies and technical optimizations to dominate search rankings and drive sustainable organic traffic.',
    icon: TrendingUp,
  },
];

export default function ServicesGrid() {
  return (
    <section className="py-24 px-6 md:px-12 bg-gray-50 dark:bg-[#020408] transition-colors duration-300">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-6"
          >
            Core Engineering Services
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed"
          >
            We provide end-to-end technology solutions designed for scale, security, and performance. Our specialized teams architect systems that drive real business transformation.
          </motion.p>
        </div>

        {/* Grid */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={fadeUpVariant}
                className="group relative bg-white dark:bg-[#0B0F19] p-8 rounded-2xl border border-gray-200 dark:border-white/10 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-blue-50 dark:bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon size={24} className="text-blue-600 dark:text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {service.description}
                </p>
                
                {/* Subtle bottom accent line */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl" />
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
