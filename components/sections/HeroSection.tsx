'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Terminal, ChevronRight, Monitor, Globe, CheckCircle, Bot, ShieldAlert, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { fadeUpVariant, staggerContainer } from '@/lib/motion';

const showcaseServices = [
  {
    id: 1,
    name: "Software Development",
    description: "Custom enterprise software built for scale.",
    icon: Monitor,
    color: "from-blue-500 to-cyan-400",
    bgColor: "bg-blue-500/10",
    textColor: "text-blue-500",
    visual: (
      <div className="w-full h-full flex flex-col gap-3 p-5 bg-[#0D1117] rounded-xl border border-gray-800 shadow-[0_0_30px_rgba(59,130,246,0.3)]">
        <div className="h-4 w-1/3 bg-gradient-to-r from-blue-400 to-cyan-300 rounded animate-pulse" />
        <div className="h-4 w-2/3 bg-gradient-to-r from-blue-500 to-cyan-400 rounded animate-pulse delay-75" />
        <div className="h-4 w-1/2 bg-gradient-to-r from-blue-600 to-cyan-500 rounded animate-pulse delay-150" />
        <div className="mt-auto h-12 w-full bg-blue-500/20 border border-blue-400/50 rounded-lg flex items-center justify-center">
          <span className="text-blue-300 text-sm font-mono font-bold tracking-wide">System Compiled ✓</span>
        </div>
      </div>
    )
  },
  {
    id: 2,
    name: "Web Applications",
    description: "High-performance, responsive web platforms.",
    icon: Globe,
    color: "from-purple-500 to-pink-400",
    bgColor: "bg-purple-500/10",
    textColor: "text-purple-500",
    visual: (
      <div className="w-full h-full bg-white dark:bg-gray-900 rounded-xl shadow-[0_0_30px_rgba(168,85,247,0.3)] border border-purple-200 dark:border-purple-800 overflow-hidden flex flex-col">
        <div className="h-8 bg-purple-50 dark:bg-gray-800 border-b border-purple-100 dark:border-gray-700 flex items-center px-3 gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400 shadow-sm"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-amber-400 shadow-sm"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-green-400 shadow-sm"></div>
          <div className="ml-4 h-4 w-1/2 bg-white dark:bg-gray-900 rounded-full border border-gray-200 dark:border-gray-700"></div>
        </div>
        <div className="flex-1 p-5 grid grid-cols-2 gap-4">
          <div className="bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg animate-pulse h-full shadow-inner"></div>
          <div className="flex flex-col gap-3">
            <div className="bg-gradient-to-r from-purple-300 to-pink-300 h-6 rounded animate-pulse"></div>
            <div className="bg-gradient-to-r from-purple-400 to-pink-400 h-6 rounded animate-pulse delay-75"></div>
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-6 rounded animate-pulse delay-150"></div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 3,
    name: "QA Automation",
    description: "Automated testing for flawless delivery.",
    icon: CheckCircle,
    color: "from-green-500 to-emerald-400",
    bgColor: "bg-green-500/10",
    textColor: "text-green-500",
    visual: (
      <div className="w-full h-full flex flex-col gap-4 p-6 justify-center bg-green-50/50 dark:bg-green-900/10 rounded-xl border border-green-200 dark:border-green-800 shadow-[0_0_30px_rgba(34,197,94,0.2)]">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="flex items-center gap-4 bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm">
            <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
              <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-ping"></div>
            </div>
            <div className="h-2.5 bg-gradient-to-r from-green-300 to-emerald-400 rounded-full w-full opacity-70"></div>
            <span className="text-xs text-green-600 dark:text-green-400 font-mono font-bold bg-green-100 dark:bg-green-900/40 px-2 py-1 rounded">PASS</span>
          </div>
        ))}
      </div>
    )
  },
  {
    id: 4,
    name: "AI Integrations",
    description: "Intelligent workflows powered by AI.",
    icon: Bot,
    color: "from-indigo-500 to-violet-400",
    bgColor: "bg-indigo-500/10",
    textColor: "text-indigo-500",
    visual: (
      <div className="w-full h-full flex items-center justify-center relative bg-indigo-50/30 dark:bg-indigo-900/10 rounded-xl border border-indigo-200 dark:border-indigo-800 shadow-[0_0_40px_rgba(99,102,241,0.2)]">
        <div className="absolute w-32 h-32 border-4 border-indigo-400/30 rounded-full animate-ping" />
        <div className="absolute w-20 h-20 border-4 border-indigo-500/50 rounded-full animate-ping delay-75" />
        <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-full shadow-[0_0_30px_rgba(99,102,241,0.8)] flex items-center justify-center z-10">
          <Bot className="text-white" size={32} />
        </div>
        <div className="absolute bottom-6 text-sm font-mono font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-100 dark:bg-indigo-900/50 px-4 py-1.5 rounded-full shadow-sm border border-indigo-200 dark:border-indigo-700">
          Processing context...
        </div>
      </div>
    )
  },
  {
    id: 5,
    name: "Network Security",
    description: "Robust zero-trust security architectures.",
    icon: ShieldAlert,
    color: "from-red-500 to-orange-400",
    bgColor: "bg-red-500/10",
    textColor: "text-red-500",
    visual: (
      <div className="w-full h-full flex flex-col items-center justify-center gap-6 bg-red-50/30 dark:bg-red-900/10 rounded-xl border border-red-200 dark:border-red-800 shadow-[0_0_40px_rgba(239,68,68,0.2)]">
        <div className="relative">
          <ShieldAlert size={64} className="text-red-500 relative z-10 drop-shadow-[0_0_15px_rgba(239,68,68,0.8)]" />
          <div className="absolute inset-0 bg-red-500 blur-2xl opacity-40 z-0 animate-pulse"></div>
        </div>
        <div className="text-center bg-white dark:bg-gray-800 px-6 py-3 rounded-xl shadow-md border border-red-100 dark:border-red-900/50">
          <div className="text-xs text-gray-500 dark:text-gray-400 mb-1 uppercase tracking-wider font-bold">Zero-Trust Active</div>
          <div className="text-xl font-mono font-black text-gray-900 dark:text-white">0 Threats Detected</div>
        </div>
      </div>
    )
  },
  {
    id: 6,
    name: "SEO Optimization",
    description: "Data-driven strategies for organic growth.",
    icon: TrendingUp,
    color: "from-amber-500 to-yellow-400",
    bgColor: "bg-amber-500/10",
    textColor: "text-amber-500",
    visual: (
      <div className="w-full h-full p-6 flex items-end gap-3 relative bg-amber-50/30 dark:bg-amber-900/10 rounded-xl border border-amber-200 dark:border-amber-800 shadow-[0_0_40px_rgba(245,158,11,0.2)]">
        <div className="absolute top-6 left-6 flex items-center gap-2">
          <div className="w-3 h-3 bg-green-500 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.8)]"></div>
          <span className="text-sm font-bold text-gray-700 dark:text-gray-300">Live Traffic</span>
        </div>
        <div className="absolute top-6 right-6 text-xl font-black text-amber-500">+340%</div>
        {[30, 45, 40, 60, 55, 80, 95].map((height, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            animate={{ height: `${height}%` }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex-1 bg-gradient-to-t from-amber-400 to-yellow-300 rounded-t-md opacity-90 shadow-sm"
          />
        ))}
      </div>
    )
  }
];

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % showcaseServices.length);
    }, 4000); // Change service every 4 seconds
    return () => clearInterval(interval);
  }, []);

  const activeService = showcaseServices[activeIndex];

  return (
    <section className="relative min-h-[95vh] flex items-center overflow-hidden bg-white dark:bg-[#05070E] transition-colors duration-300">
      
      {/* Background Mesh/Gradient (very subtle) */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-[800px] h-[800px] bg-purple-50 dark:bg-purple-900/10 rounded-full blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-[600px] h-[600px] bg-pink-50 dark:bg-pink-900/10 rounded-full blur-3xl opacity-50 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 w-full relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mt-12">
        
        {/* Left: Text Content */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-2xl"
        >
          {/* Badge */}
          <motion.div variants={fadeUpVariant} className="mb-8">
            <Link href="/products" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 dark:bg-purple-500/10 border border-purple-100 dark:border-purple-500/20 text-purple-600 dark:text-purple-400 text-sm font-semibold hover:bg-purple-100 dark:hover:bg-purple-500/20 transition-colors shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-purple-600 dark:bg-purple-400 animate-pulse"></span>
              Enterprise Engineering Platform
              <ChevronRight size={14} />
            </Link>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUpVariant}
            className="text-5xl lg:text-[4rem] xl:text-[4.5rem] font-extrabold text-gray-900 dark:text-white tracking-tight leading-[1.05] mb-6"
          >
            Engineering the <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 dark:from-purple-400 dark:to-pink-400 drop-shadow-sm">
              Future of Digital
            </span>
            <br/> Infrastructure.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeUpVariant}
            className="text-lg lg:text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-10 max-w-xl"
          >
            Cloudvexa delivers high-velocity custom software, robust cloud architectures, and intelligent AI solutions for scale-focused enterprises.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeUpVariant}
            className="flex flex-wrap items-center gap-4"
          >
            <Link href="/contact" className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white rounded-xl font-bold transition-all shadow-[0_10px_20px_-10px_rgba(168,85,247,0.5)] hover:shadow-[0_10px_20px_-10px_rgba(168,85,247,0.8)] hover:-translate-y-0.5">
              Start a Project
              <ArrowRight size={18} />
            </Link>
            
            <Link href="/products" className="flex items-center gap-2 px-8 py-4 bg-white dark:bg-white/5 hover:bg-gray-50 dark:hover:bg-white/10 text-gray-800 dark:text-white border border-gray-200 dark:border-white/10 rounded-xl font-bold transition-all hover:-translate-y-0.5">
              <Terminal size={18} className="text-purple-500" />
              Explore Services
            </Link>
          </motion.div>
        </motion.div>

        {/* Right: Rotating Services Graphic */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hidden lg:block relative w-full h-[500px]"
        >
          <div className="absolute inset-0 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col">
            
            {/* Header: Service Navigator */}
            <div className="p-4 border-b border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 flex gap-2 overflow-x-auto no-scrollbar">
              {showcaseServices.map((service, idx) => {
                const Icon = service.icon;
                const isActive = idx === activeIndex;
                return (
                  <button
                    key={service.id}
                    onClick={() => setActiveIndex(idx)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-semibold transition-all whitespace-nowrap ${
                      isActive 
                        ? `${service.bgColor} ${service.textColor}` 
                        : 'text-gray-500 hover:bg-gray-100 dark:hover:bg-white/10'
                    }`}
                  >
                    <Icon size={16} />
                    {service.name}
                  </button>
                );
              })}
            </div>

            {/* Dynamic Main Graphic Area */}
            <div className="flex-1 relative bg-white dark:bg-[#0B0F19] p-8 flex items-center justify-center overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService.id}
                  initial={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 1.05, filter: "blur(4px)" }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full max-w-md mx-auto"
                >
                  {activeService.visual}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Active Service Footer / Description */}
            <div className="p-6 bg-gray-50 dark:bg-white/5 border-t border-gray-200 dark:border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${activeService.bgColor}`}>
                  <activeService.icon className={activeService.textColor} size={20} />
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-900 dark:text-white">{activeService.name}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">{activeService.description}</div>
                </div>
              </div>
              <Link href="/products" className="hidden sm:flex items-center gap-1.5 text-xs font-bold text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors">
                Explore Service <ArrowRight size={14} />
              </Link>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
