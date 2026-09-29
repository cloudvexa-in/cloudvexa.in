'use client';

import { motion } from 'framer-motion';
import { Search, PenTool, Code2, Rocket } from 'lucide-react';
import { fadeUpVariant, staggerContainer } from '@/lib/motion';

const phases = [
  {
    id: '01',
    title: 'Discovery & Strategy',
    description: 'We begin with a deep dive into your business requirements, conducting thorough technical audits, SEO analysis, and strategic planning to ensure alignment with your goals.',
    icon: Search,
    tags: ['Requirement Gathering', 'Technical Audit', 'Roadmap'],
  },
  {
    id: '02',
    title: 'Architecture & Design',
    description: 'Our architects design scalable, secure system topologies. We define the tech stack, plan UI/UX workflows, and establish robust zero-trust security protocols.',
    icon: PenTool,
    tags: ['System Design', 'UI/UX Prototyping', 'Security Planning'],
  },
  {
    id: '03',
    title: 'Development & QA',
    description: 'Agile development sprints bring the design to life. Our QA teams run rigorous automated and manual testing pipelines concurrently to ensure zero-defect delivery.',
    icon: Code2,
    tags: ['Agile Sprints', 'Automated Testing', 'Code Reviews'],
  },
  {
    id: '04',
    title: 'Deployment & Scaling',
    description: 'We execute zero-downtime deployments to production environments. Post-launch, we provide continuous monitoring, SEO scaling, and infrastructure optimization.',
    icon: Rocket,
    tags: ['Zero-downtime Launch', 'Monitoring', 'Optimization'],
  },
];

export default function Pipeline() {
  return (
    <section className="py-24 px-6 md:px-12 bg-white dark:bg-[#05070E] transition-colors duration-300 relative overflow-hidden">
      <div className="max-w-[1000px] mx-auto relative z-10">
        
        {/* Header */}
        <div className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-6"
          >
            Our Delivery Process
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl"
          >
            A standardized, battle-tested methodology ensuring predictability, security, and exceptional quality from concept to production.
          </motion.p>
        </div>

        {/* Stepper */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Vertical Line */}
          <div className="absolute top-0 bottom-0 left-[27px] w-[2px] bg-gray-200 dark:bg-white/10 rounded-full hidden md:block" />

          <div className="flex flex-col gap-8 md:gap-12">
            {phases.map((phase, idx) => {
              const Icon = phase.icon;
              return (
                <motion.div 
                  key={phase.id}
                  variants={fadeUpVariant}
                  className="relative md:pl-20"
                >
                  {/* Step Circle (Hidden on very small screens, integrated differently if needed, but flex layout handles it) */}
                  <div className="hidden md:flex absolute left-0 top-1 w-14 h-14 bg-white dark:bg-[#0B0F19] border-2 border-blue-600 dark:border-cyan-400 rounded-full items-center justify-center shadow-sm z-10">
                    <Icon size={20} className="text-blue-600 dark:text-cyan-400" />
                  </div>

                  {/* Content */}
                  <div className="bg-white dark:bg-[#0B0F19] border border-gray-200 dark:border-white/10 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-sm font-bold text-blue-600 dark:text-cyan-400 tracking-wider">
                        PHASE {phase.id}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                      {phase.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6 text-base">
                      {phase.description}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {phase.tags.map(tag => (
                        <span 
                          key={tag}
                          className="px-3 py-1 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300 text-xs font-semibold rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
