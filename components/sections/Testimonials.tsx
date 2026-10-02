"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const reviews = [
  {
    id: 1,
    content: "Team Cloudvexa has provided me with website development, application development, and digital marketing services for my company. The team is very profound and prompt and has been very supportive of delivering on-time work. I would recommend them for their exceptional IT services.",
    author: "Marketing and Operations Manager",
    company: "Global Logistics Corp",
    rating: 5
  },
  {
    id: 2,
    content: "I recently contacted Cloudvexa for web app development service, and I must say I am thoroughly impressed and satisfied with their services. Their expertise in web app development was evident as they efficiently transformed our vision into a functional, user-friendly application.",
    author: "Operations Manager",
    company: "FinTech Solutions",
    rating: 5
  },
  {
    id: 3,
    content: "We approached Cloudvexa for digital marketing services. They have a talented team that goes above and beyond to understand their client's needs and tailor strategies accordingly. Working with them significantly boosted our online presence.",
    author: "Marketing Lead",
    company: "E-Commerce Retailer",
    rating: 5
  },
  {
    id: 4,
    content: "We have been working with Cloudvexa for the last 6 years. All our applications and digital assets are managed via them. The team is very knowledgeable and they provide on-time support. I will recommend them for website development and application development work.",
    author: "Project Manager",
    company: "Healthcare Providers Inc",
    rating: 5
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % reviews.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);

  return (
    <section className="py-24 px-6 md:px-12 bg-white font-sans border-b border-gray-100">
      <div className="max-w-[1200px] mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-[#0d6efd] uppercase tracking-widest mb-3">Client Success Stories</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-[#212529] tracking-tight mb-6">
            Trusted by global leaders.
          </h3>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Controls - Desktop */}
          <button 
            onClick={prevSlide}
            className="hidden md:flex absolute -left-16 top-1/2 -translate-y-1/2 w-12 h-12 bg-white hover:bg-[#f8f9fa] border border-gray-200 shadow-sm rounded-full items-center justify-center text-gray-500 hover:text-[#0d6efd] transition-all z-10"
            aria-label="Previous review"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={nextSlide}
            className="hidden md:flex absolute -right-16 top-1/2 -translate-y-1/2 w-12 h-12 bg-white hover:bg-[#f8f9fa] border border-gray-200 shadow-sm rounded-full items-center justify-center text-gray-500 hover:text-[#0d6efd] transition-all z-10"
            aria-label="Next review"
          >
            <ChevronRight size={24} />
          </button>

          {/* Slider Container */}
          <div className="bg-[#f8f9fa] rounded-2xl p-8 md:p-16 border border-gray-100 shadow-sm relative overflow-hidden min-h-[350px] flex items-center justify-center text-center">
            <Quote className="absolute top-8 left-8 text-[#0d6efd] opacity-10" size={80} />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="relative z-10 max-w-2xl"
              >
                <div className="flex justify-center gap-1 mb-8">
                  {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                
                <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-medium mb-10">
                  &quot;{reviews[currentIndex].content}&quot;
                </p>
                
                <div>
                  <h4 className="text-lg font-bold text-[#212529] mb-1">
                    {reviews[currentIndex].author}
                  </h4>
                  <p className="text-sm font-semibold text-[#6c757d]">
                    {reviews[currentIndex].company}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Mobile Controls & Dots */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button onClick={prevSlide} className="md:hidden p-2 text-gray-400 hover:text-[#0d6efd]">
              <ChevronLeft size={24} />
            </button>
            <div className="flex gap-2">
              {reviews.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 transition-all rounded-full ${currentIndex === idx ? 'w-8 bg-[#0d6efd]' : 'w-2 bg-gray-200 hover:bg-gray-300'}`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
            <button onClick={nextSlide} className="md:hidden p-2 text-gray-400 hover:text-[#0d6efd]">
              <ChevronRight size={24} />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
