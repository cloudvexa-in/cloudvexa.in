"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Monitor, Globe, ShieldCheck, Bot, TrendingUp, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

const categories = [
  { id: "software", label: "Software Development" },
  { id: "web", label: "Web Development" },
  { id: "ai", label: "AI & Automation" },
  { id: "security", label: "Cybersecurity" },
];

const servicesContent = {
  software: {
    title: "Custom Enterprise Software",
    description: "We architect scalable, high-performance software systems tailored to your complex business requirements. Our engineering teams utilize agile methodologies to deliver robust applications that drive operational efficiency.",
    features: ["Microservices Architecture", "API Development & Integration", "Legacy System Modernization", "Automated QA Pipelines"],
    icon: Monitor,
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop"
  },
  web: {
    title: "High-Performance Web Solutions",
    description: "Deliver seamless, responsive user experiences globally. We build dynamic web applications using modern frameworks like React and Next.js, optimized for speed, SEO, and accessibility.",
    features: ["Single Page Applications", "Progressive Web Apps", "E-commerce Platforms", "Content Management Systems"],
    icon: Globe,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop"
  },
  ai: {
    title: "Intelligent AI Integrations",
    description: "Unlock data insights and automate workflows with our advanced AI solutions. From custom LLM deployments to predictive machine learning models, we bring smart automation to your enterprise.",
    features: ["Generative AI Models", "Chatbot & Agent Development", "Predictive Analytics", "Natural Language Processing"],
    icon: Bot,
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop"
  },
  security: {
    title: "Enterprise-Grade Security",
    description: "Protect your critical assets with our comprehensive zero-trust architectures. We implement real-time threat detection, secure cloud infrastructure, and ensure continuous compliance.",
    features: ["Zero-Trust Architecture", "Vulnerability Assessments", "Real-Time Threat Monitoring", "Compliance & Governance"],
    icon: ShieldCheck,
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
  }
};

export default function ServicesGrid() {
  const [activeTab, setActiveTab] = useState("software");

  return (
    <section className="py-24 px-6 md:px-12 bg-white transition-colors duration-300 font-sans border-b border-gray-100">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <h2 className="text-sm font-bold text-[#0d6efd] uppercase tracking-widest mb-3">Our Core Services</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-[#212529] tracking-tight mb-6 leading-tight">
            Comprehensive Technology Solutions for the Modern Enterprise
          </h3>
        </div>

        {/* Tabbed Interface */}
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Tabs Sidebar */}
          <div className="w-full lg:w-1/4 flex flex-col gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`text-left px-6 py-4 rounded-lg font-bold text-lg transition-all border-l-4 ${
                  activeTab === cat.id 
                    ? "bg-[#f8f9fa] border-[#0d6efd] text-[#212529] shadow-sm" 
                    : "border-transparent text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="w-full lg:w-3/4 bg-[#f8f9fa] rounded-2xl p-8 lg:p-12 border border-gray-100 shadow-sm relative overflow-hidden min-h-[500px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col md:flex-row gap-12 items-center h-full"
              >
                {/* Text Content */}
                <div className="w-full md:w-1/2">
                  <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center mb-6 shadow-sm border border-gray-100 text-[#0d6efd]">
                    {(() => {
                      const Icon = servicesContent[activeTab as keyof typeof servicesContent].icon;
                      return <Icon size={28} />;
                    })()}
                  </div>
                  <h4 className="text-2xl md:text-3xl font-bold text-[#212529] mb-4">
                    {servicesContent[activeTab as keyof typeof servicesContent].title}
                  </h4>
                  <p className="text-[#6c757d] leading-relaxed mb-8">
                    {servicesContent[activeTab as keyof typeof servicesContent].description}
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    {servicesContent[activeTab as keyof typeof servicesContent].features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-sm font-semibold text-gray-700">
                        <CheckCircle size={18} className="text-[#0d6efd]" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link href={`/products#${activeTab}`} className="inline-flex items-center gap-2 text-[#0d6efd] font-bold hover:text-[#0b5ed7] transition-colors group">
                    Learn more about this service <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                {/* Image Content */}
                <div className="w-full md:w-1/2 h-64 md:h-full min-h-[300px] rounded-xl overflow-hidden relative">
                   <div 
                     className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
                     style={{ backgroundImage: `url(${servicesContent[activeTab as keyof typeof servicesContent].image})` }}
                   />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
