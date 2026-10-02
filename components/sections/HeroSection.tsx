"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, Search, PenTool, Code2, Rocket, Cpu, Network, Database } from "lucide-react";

const techLogos = [
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg",
];

const slides = [
  {
    id: 1,
    title: "Empowering Businesses",
    subtitle: "Through Advanced AI",
    description: "We build scalable, intelligent, and secure digital solutions that drive enterprise growth. Leverage our expertise in Generative AI, Machine Learning, and Web Development.",
    cta1: "Explore AI Solutions",
    cta1Link: "/products#ai",
    cta2: "Contact Us",
    cta2Link: "/contact",
  },
  {
    id: 2,
    title: "Robust Cybersecurity",
    subtitle: "& Zero-Trust Architectures",
    description: "Protect your enterprise data with our state-of-the-art cybersecurity solutions. We implement comprehensive frameworks to ensure continuous compliance and threat detection.",
    cta1: "Secure Your Business",
    cta1Link: "/products#security",
    cta2: "Learn More",
    cta2Link: "/about",
  },
  {
    id: 3,
    title: "High-Performance",
    subtitle: "Custom Web Applications",
    description: "Deliver seamless digital experiences globally. Our engineering teams architect custom software tailored specifically to your complex operational requirements.",
    cta1: "Start a Project",
    cta1Link: "/contact",
    cta2: "Our Services",
    cta2Link: "/products",
  }
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 12000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative h-screen min-h-[800px] w-full overflow-hidden font-sans pt-24 bg-[#05070e] perspective-[2000px]">
      
      {/* BACKGROUND: Matrix Grid & Floating Tech & SaaS Arrow */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        
        {/* Animated 3D Floor Grid */}
        <motion.div 
          animate={{ backgroundPosition: ["0px 0px", "0px 100px"] }}
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          className="absolute bottom-[-20%] left-[-50%] w-[200%] h-[70%] bg-[linear-gradient(to_right,#0d6efd15_1px,transparent_1px),linear-gradient(to_bottom,#0d6efd15_1px,transparent_1px)] bg-[size:50px_50px] [transform:rotateX(60deg)_translateZ(-200px)] opacity-60"
        />

        {/* Growing SaaS Delivery Arrow Background */}
        <div className="absolute inset-0 w-full h-full opacity-40 hidden md:block">
           <svg className="w-full h-full" viewBox="0 0 1000 600" preserveAspectRatio="none">
              <motion.path
                 d="M -100,500 C 200,500 300,100 600,100 C 800,100 900,300 1100,300"
                 fill="none"
                 stroke="#0d6efd"
                 strokeWidth="3"
                 strokeDasharray="10 10"
                 initial={{ pathLength: 0 }}
                 animate={{ pathLength: 1 }}
                 transition={{ duration: 15, ease: "linear", repeat: Infinity }}
              />
              {/* Arrow Head */}
              <motion.polygon 
                 points="1100,300 1080,290 1080,310" 
                 fill="#0d6efd"
                 initial={{ opacity: 0 }}
                 animate={{ opacity: [0, 1, 0] }}
                 transition={{ duration: 15, ease: "linear", repeat: Infinity }}
              />
              
              {/* SaaS Phases along the path */}
              <g className="font-mono text-[12px] font-bold fill-[#00f0ff] uppercase tracking-widest">
                 <text x="50" y="480">1. Ideation & Strategy</text>
                 <text x="300" y="250">2. Architecture</text>
                 <text x="500" y="80">3. Agile Development</text>
                 <text x="700" y="180">4. QA & Security</text>
                 <text x="850" y="280">5. CI/CD Deployment</text>
              </g>
           </svg>
        </div>

        <div className="absolute inset-0 flex flex-wrap gap-12 justify-center items-center p-8 opacity-10">
           {[...techLogos, ...techLogos, ...techLogos].map((src, i) => (
             <motion.img 
                key={i}
                src={src}
                className="w-16 h-16 grayscale"
                initial={{ opacity: 0, y: Math.random() * 100 }}
                animate={{ 
                  opacity: [0.1, 0.4, 0.1],
                  y: [Math.random() * 50, -50, Math.random() * 50]
                }}
                transition={{
                  duration: 10 + Math.random() * 10,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
             />
           ))}
        </div>
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-r from-[#05070e] via-[#05070e]/80 to-transparent z-10 pointer-events-none" />

      <div className="max-w-[1400px] h-full w-full mx-auto px-6 md:px-12 relative z-20 flex flex-col lg:flex-row items-center">
        
        {/* LEFT SIDE: Text Content */}
        <div className="w-full lg:w-1/2 flex-shrink-0 z-30">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ y: 30, opacity: 0, filter: "blur(10px)" }}
              animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
              exit={{ y: -30, opacity: 0, filter: "blur(10px)" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-[5rem] font-black text-white leading-[1.05] mb-4 tracking-tight">
                {slides[currentSlide].title}
              </h1>
              <h2 className="text-3xl md:text-5xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0d6efd] to-[#00f0ff] leading-tight mb-6 tracking-tight">
                {slides[currentSlide].subtitle}
              </h2>
              <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-xl">
                {slides[currentSlide].description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={slides[currentSlide].cta1Link}
                  className="relative group inline-flex items-center justify-center gap-2 bg-[#0d6efd] text-white px-8 py-4 rounded-lg font-bold text-lg transition-all overflow-hidden shadow-[0_0_20px_rgba(13,110,253,0.3)] hover:shadow-[0_0_40px_rgba(13,110,253,0.6)]"
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#0d6efd] to-[#00f0ff] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative flex items-center gap-2">
                    {slides[currentSlide].cta1}
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
                <Link
                  href={slides[currentSlide].cta2Link}
                  className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white/20 hover:border-white hover:bg-white/5 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all"
                >
                  {slides[currentSlide].cta2}
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* RIGHT SIDE: INSANE ANIMATION */}
        <div className="hidden lg:flex w-full lg:w-1/2 h-full items-center justify-center relative z-20">
          
          {/* Intense Glow Background */}
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-[600px] h-[600px] bg-[#0d6efd] rounded-full blur-[180px] pointer-events-none" 
          />

          <div className="relative w-[500px] h-[500px] flex items-center justify-center [transform-style:preserve-3d]">
            
            {/* --- GYROSCOPIC RINGS (Optimized for smoothness) --- */}
            <motion.div 
              animate={{ rotateX: 360, rotateY: 180 }} 
              transition={{ repeat: Infinity, duration: 25, ease: "linear" }} 
              className="absolute w-full h-full rounded-full border-[2px] border-l-[#0d6efd] border-r-[#00f0ff] border-y-transparent opacity-40"
            />
            <motion.div 
              animate={{ rotateY: -360, rotateZ: 180 }} 
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }} 
              className="absolute w-[80%] h-[80%] rounded-full border-[2px] border-t-[#00f0ff] border-b-[#7928ca] border-x-transparent opacity-60"
            />
            <motion.div 
              animate={{ rotateZ: 360, scale: [1, 1.05, 1] }} 
              transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }} 
              className="absolute w-[120%] h-[120%] rounded-full border border-dashed border-[#0d6efd]/30"
            />

            {/* --- CENTRAL CORE (CV) --- */}
            <motion.div 
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 m-auto w-36 h-36 bg-[#05070e] border border-[#0d6efd]/50 rounded-2xl flex items-center justify-center shadow-[0_0_50px_rgba(13,110,253,0.5)] overflow-hidden z-30"
            >
               {/* Core Matrix Scroller Inside */}
               <motion.div 
                 animate={{ y: [0, -100] }} 
                 transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                 className="absolute inset-0 opacity-20 text-[#00f0ff] text-[8px] leading-none text-center break-words font-mono select-none"
               >
                 {Array(50).fill("01001100 01101111 01110110 01100101").join(" ")}
               </motion.div>
               
               <div className="absolute inset-0 bg-gradient-to-tr from-[#0d6efd]/20 to-[#00f0ff]/20 animate-pulse" />
               <span className="relative z-10 text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white via-[#00f0ff] to-white drop-shadow-md">
                 CV
               </span>
            </motion.div>

            {/* --- FLOATING SAAS KEYWORDS --- */}
            {[
              { text: "Multi-Tenant Architecture", delay: 0, top: "10%", left: "10%" },
              { text: "Zero-Trust Security", delay: 2, top: "80%", left: "15%" },
              { text: "Microservices", delay: 1, top: "15%", left: "75%" },
              { text: "API Gateways", delay: 3, top: "75%", left: "80%" },
              { text: "Auto-Scaling", delay: 4, top: "40%", left: "-10%" },
              { text: "Load Balancing", delay: 2.5, top: "50%", left: "100%" }
            ].map((kw, i) => (
               <motion.div
                 key={i}
                 className="absolute text-[10px] font-mono font-bold text-[#00f0ff] uppercase tracking-widest whitespace-nowrap opacity-0"
                 style={{ top: kw.top, left: kw.left }}
                 animate={{ 
                   opacity: [0, 0.4, 0],
                   y: [10, -20]
                 }}
                 transition={{
                   duration: 4,
                   repeat: Infinity,
                   delay: kw.delay,
                   ease: "easeInOut"
                 }}
               >
                 {kw.text}
               </motion.div>
            ))}

            {/* --- FLOATING PROCESS NODES --- */}
            
            {/* Discovery Node */}
            <ProcessNode 
              icon={Search} 
              label="DISCOVERY" 
              color="#00f0ff" 
              delay={0}
              orbitRadius={200}
              duration={25}
              direction={1}
            />

            {/* Architecture Node */}
            <ProcessNode 
              icon={PenTool} 
              label="ARCHITECTURE" 
              color="#7928ca" 
              delay={2}
              orbitRadius={160}
              duration={20}
              direction={-1}
            />

            {/* Development Node */}
            <ProcessNode 
              icon={Code2} 
              label="DEVELOPMENT" 
              color="#0d6efd" 
              delay={4}
              orbitRadius={240}
              duration={30}
              direction={1}
            />

            {/* Deployment Node */}
            <ProcessNode 
              icon={Rocket} 
              label="DEPLOYMENT" 
              color="#10b981" 
              delay={1}
              orbitRadius={280}
              duration={35}
              direction={-1}
            />

            {/* --- DATA STREAMS (Shooting particles) --- */}
            <div className="absolute inset-0 z-10 overflow-hidden rounded-full pointer-events-none">
               {[...Array(6)].map((_, i) => (
                 <motion.div
                   key={i}
                   className="absolute left-1/2 top-1/2 w-[1px] h-32 bg-gradient-to-b from-transparent via-[#00f0ff]/50 to-transparent"
                   style={{ originY: 1, rotate: i * 60 }}
                   animate={{ 
                     opacity: [0, 0.8, 0],
                     scaleY: [0.5, 1.2, 0.5],
                     y: [0, -150]
                   }}
                   transition={{
                     duration: 2,
                     repeat: Infinity,
                     delay: i * 0.4,
                     ease: "easeOut"
                   }}
                 />
               ))}
            </div>

          </div>
        </div>
      </div>

      {/* Slider Controls (Bottom Left) */}
      <div className="absolute bottom-12 left-6 md:left-12 z-40 flex items-center gap-6">
        <div className="flex gap-4">
          <button 
            onClick={prevSlide}
            className="w-14 h-14 flex items-center justify-center bg-white/5 hover:bg-[#0d6efd] text-white rounded-full backdrop-blur-sm transition-all border border-white/10 shadow-lg hover:shadow-[0_0_20px_#0d6efd]"
          >
            <ChevronLeft size={28} />
          </button>
          <button 
            onClick={nextSlide}
            className="w-14 h-14 flex items-center justify-center bg-white/5 hover:bg-[#0d6efd] text-white rounded-full backdrop-blur-sm transition-all border border-white/10 shadow-lg hover:shadow-[0_0_20px_#0d6efd]"
          >
            <ChevronRight size={28} />
          </button>
        </div>
        
        <div className="flex gap-3">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 transition-all rounded-full ${currentSlide === idx ? 'w-12 bg-[#00f0ff] shadow-[0_0_10px_#00f0ff]' : 'w-2 bg-white/30 hover:bg-white/60'}`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
      
    </section>
  );
}

// Helper component for the crazy floating nodes
function ProcessNode({ icon: Icon, label, color, delay, orbitRadius, duration, direction }: any) {
  return (
    <motion.div
      className="absolute top-1/2 left-1/2 -mt-8 -ml-8 w-16 h-16 z-40"
      animate={{
        rotate: direction > 0 ? [0, 360] : [360, 0]
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        ease: "linear"
      }}
    >
      <motion.div 
        className="absolute top-0 left-0"
        style={{ x: orbitRadius }}
        animate={{
          rotate: direction > 0 ? [0, -360] : [-360, 0] // Counter-rotate to keep icon upright
        }}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <motion.div
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: delay }}
          className="relative group cursor-default"
        >
          {/* Hexagon Shape - Optimized for performance */}
          <div 
            className="w-16 h-16 bg-[#0a0f1c] border-2 flex items-center justify-center shadow-lg transition-all duration-300"
            style={{ 
              boxShadow: `0 0 15px ${color}40`, 
              borderColor: color,
              clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
            }}
          >
            <Icon size={22} color={color} />
          </div>

          {/* Hover / Label Effect */}
          <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
             <div className="px-3 py-1 bg-black/90 border border-white/20 rounded text-[10px] font-bold tracking-widest whitespace-nowrap" style={{ color: color }}>
               {label}
             </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
