"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { fadeUpVariant, staggerContainer } from "@/lib/motion";

export default function AboutOverview() {
  return (
    <section className="py-20 lg:py-28 bg-white font-sans border-b border-gray-100 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col lg:flex-row items-center gap-16"
        >
          {/* Text Content */}
          <motion.div variants={fadeUpVariant} className="w-full lg:w-1/2">
            <h2 className="text-sm font-bold text-[#0d6efd] uppercase tracking-widest mb-4">About Cloudvexa</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-[#212529] tracking-tight leading-[1.15] mb-6">
              Transforming businesses through innovative technology.
            </h3>
            <p className="text-lg text-[#6c757d] leading-relaxed mb-8">
              We are a premier IT solutions provider specializing in enterprise software development, artificial intelligence, and robust cybersecurity. Our mission is to accelerate your digital transformation and deliver scalable architectures that drive real business growth.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {[
                "Award-Winning IT Agency",
                "Dedicated Engineering Teams",
                "Agile Development Methodology",
                "24/7 Global Support"
              ].map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 size={20} className="text-[#0d6efd] shrink-0" />
                  <span className="font-semibold text-[#495057]">{feature}</span>
                </div>
              ))}
            </div>

            <Link href="/about" className="inline-flex items-center gap-2 bg-[#0d6efd] hover:bg-[#0b5ed7] text-white px-8 py-4 rounded-md font-bold text-[0.95rem] transition-all shadow-md hover:-translate-y-0.5">
              Discover Our Story
              <ArrowRight size={18} />
            </Link>
          </motion.div>

          {/* Visual / Image */}
          <motion.div variants={fadeUpVariant} className="w-full lg:w-1/2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100 aspect-square md:aspect-video lg:aspect-square">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop')" }}
              />
              <div className="absolute inset-0 bg-[#0d6efd]/10" />
            </div>
            
            {/* Floating Experience Badge */}
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-xl border border-gray-100 flex items-center gap-4 hidden md:flex">
               <div className="w-16 h-16 rounded-full bg-[#f8f9fa] flex items-center justify-center border-2 border-[#0d6efd]">
                 <span className="text-2xl font-black text-[#0d6efd]">10+</span>
               </div>
               <div>
                 <div className="font-extrabold text-[#212529] text-xl">Years</div>
                 <div className="text-gray-500 font-semibold text-sm">Of Engineering Excellence</div>
               </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
