"use client";

import { motion } from "framer-motion";
import { HeartPulse, Building2, ShoppingCart, Truck, GraduationCap, Briefcase } from "lucide-react";
import { fadeUpVariant, staggerContainer } from "@/lib/motion";

const industries = [
  {
    title: "Healthcare",
    icon: HeartPulse,
    description: "HIPAA-compliant software, telemedicine platforms, and EMR system integrations."
  },
  {
    title: "Finance & Fintech",
    icon: Briefcase,
    description: "Secure payment gateways, blockchain solutions, and robust banking applications."
  },
  {
    title: "E-Commerce",
    icon: ShoppingCart,
    description: "Scalable retail platforms, inventory management, and omnichannel experiences."
  },
  {
    title: "Logistics",
    icon: Truck,
    description: "Real-time tracking, fleet management software, and supply chain automation."
  },
  {
    title: "Real Estate",
    icon: Building2,
    description: "Property management portals, virtual tours, and CRM integrations."
  },
  {
    title: "Education",
    icon: GraduationCap,
    description: "LMS platforms, virtual classrooms, and student management systems."
  }
];

export default function Industries() {
  return (
    <section className="py-24 px-6 md:px-12 bg-[#f8f9fa] font-sans border-b border-gray-100">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-[#0d6efd] uppercase tracking-widest mb-3">Industries We Serve</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-[#212529] tracking-tight mb-6">
            Tailored Solutions for Every Sector
          </h3>
          <p className="text-lg text-[#6c757d] leading-relaxed">
            We understand that every industry faces unique technological challenges. Our engineers build custom solutions designed specifically for your domain&apos;s regulatory and operational needs.
          </p>
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {industries.map((ind, idx) => {
            const Icon = ind.icon;
            return (
              <motion.div 
                key={ind.title} 
                variants={fadeUpVariant}
                className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="w-14 h-14 bg-[#e9ecef] rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#0d6efd] group-hover:text-white text-[#0d6efd] transition-colors">
                  <Icon size={28} />
                </div>
                <h4 className="text-xl font-bold text-[#212529] mb-3">{ind.title}</h4>
                <p className="text-[#6c757d] leading-relaxed text-sm">
                  {ind.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
