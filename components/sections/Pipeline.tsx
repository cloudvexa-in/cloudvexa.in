"use client";

import { motion } from "framer-motion";
import { Search, PenTool, Code2, Bug, Rocket } from "lucide-react";
import { fadeUpVariant, staggerContainer } from "@/lib/motion";

const phases = [
  {
    id: "01",
    title: "Requirement Gathering",
    description: "We initiate every partnership with a deep dive into your core business objectives, identifying operational bottlenecks and defining technical specifications to ensure complete strategic alignment.",
    deliverables: ["Stakeholder Interviews", "Competitor Analysis", "Technical Feasibility Study", "Project Roadmap Creation"],
    icon: Search,
  },
  {
    id: "02",
    title: "UI/UX Architecture",
    description: "Our design team crafts intuitive, conversion-focused wireframes and high-fidelity interactive prototypes that perfectly balance aesthetic appeal with seamless user experience.",
    deliverables: ["Wireframing & Prototyping", "User Journey Mapping", "Design System Creation", "Interactive Mockups"],
    icon: PenTool,
  },
  {
    id: "03",
    title: "Agile Development",
    description: "Our engineering pods bring the designs to life using modern tech stacks, executing code in weekly agile sprints to ensure rapid delivery and continuous stakeholder feedback.",
    deliverables: ["Frontend/Backend Engineering", "Third-party API Integration", "Database Architecture", "Sprint Demos"],
    icon: Code2,
  },
  {
    id: "04",
    title: "Quality Assurance",
    description: "We deploy rigorous testing protocols—both automated and manual—to guarantee your application is highly performant, fully responsive, and impenetrable to security threats.",
    deliverables: ["Automated Testing", "Performance Benchmarking", "Vulnerability Auditing", "User Acceptance Testing (UAT)"],
    icon: Bug,
  },
  {
    id: "05",
    title: "Launch & Support",
    description: "We execute zero-downtime deployments to your cloud infrastructure, followed by 24/7 continuous monitoring, automated backups, and scalable maintenance plans.",
    deliverables: ["CI/CD Pipeline Setup", "Cloud Infrastructure Config", "24/7 Server Monitoring", "Version Upgrades"],
    icon: Rocket,
  },
];

export default function Pipeline() {
  return (
    <section className="py-24 px-6 md:px-12 bg-white font-sans border-b border-gray-100">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-[#0d6efd] uppercase tracking-widest mb-3"
          >
            How We Work
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold text-[#212529] tracking-tight mb-6"
          >
            A Standardized Delivery Framework
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-[#6c757d] leading-relaxed"
          >
            We follow a highly disciplined, enterprise-grade methodology to transform complex requirements into robust, market-ready digital solutions.
          </motion.p>
        </div>

        {/* Process Cards - Detailed Horizontal Flow */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8 relative"
        >
          {/* Background Connecting Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-[40px] left-[10%] right-[10%] h-[2px] bg-gray-100 z-0 border-t-2 border-dashed border-gray-200" />

          {phases.map((phase, idx) => {
            const Icon = phase.icon;
            return (
              <motion.div 
                key={phase.id}
                variants={fadeUpVariant}
                className="relative z-10 flex flex-col group h-full"
              >
                {/* Icon Circle */}
                <div className="w-20 h-20 mx-auto bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-sm mb-6 group-hover:border-[#0d6efd] group-hover:shadow-md transition-all relative">
                   <Icon size={32} className="text-[#0d6efd] group-hover:scale-110 transition-transform" />
                   <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#212529] text-white text-xs font-bold rounded-full flex items-center justify-center border-2 border-white group-hover:bg-[#0d6efd] transition-colors">
                     {phase.id}
                   </div>
                </div>

                {/* Content Box */}
                <div className="bg-[#f8f9fa] border border-gray-100 p-6 rounded-xl flex-grow shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="text-lg font-bold text-[#212529] mb-3 text-center group-hover:text-[#0d6efd] transition-colors">
                    {phase.title}
                  </h4>
                  <p className="text-sm text-[#6c757d] leading-relaxed mb-6 text-center">
                    {phase.description}
                  </p>
                  
                  {/* Detailed Deliverables */}
                  <div className="border-t border-gray-200 pt-4 mt-auto">
                    <span className="text-[10px] font-bold text-[#212529] uppercase tracking-wider block mb-3 text-center">Key Deliverables</span>
                    <ul className="flex flex-col gap-2">
                      {phase.deliverables.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs font-semibold text-gray-600">
                           <div className="w-1.5 h-1.5 rounded-full bg-[#0d6efd] shrink-0 mt-1" />
                           {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
