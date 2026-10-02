"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, ArrowRight, Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 font-sans shadow-md">
      {/* Top Bar (Nextwebi style) - Always visible (Frozen) */}
      <div className="bg-[#212529] text-white text-sm py-1.5">
        <div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="bg-[#0d6efd] text-white text-[10px] font-bold px-2 py-0.5 rounded-sm uppercase tracking-wider">New</span>
            <span className="text-xs">AI impact in application development 2026 guide</span>
            <Link href="/news" className="text-[#0d6efd] hover:text-white flex items-center gap-1 transition-colors font-semibold text-xs">
              Explore Now <ArrowRight size={12} />
            </Link>
          </div>
          <div className="flex items-center gap-6 mt-1 md:mt-0 text-xs">
            <a href="mailto:support@cloudvexa.in" className="flex items-center gap-1.5 hover:text-[#0d6efd] transition-colors">
              <Mail size={12} /> support@cloudvexa.in
            </a>
            <a href="tel:+919438466231" className="flex items-center gap-1.5 hover:text-[#0d6efd] transition-colors">
              <Phone size={12} /> +91 9438466231
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation - Very Narrow Height */}
      <nav className="bg-white/95 backdrop-blur-sm py-1.5 border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between">
          
          <Link href="/" className="flex items-center gap-2 flex-shrink-0 z-50">
            <span className="text-3xl font-black tracking-tight text-[#0d6efd]">Cloud<span className="text-[#212529]">vexa</span></span>
          </Link>

          <div className="hidden lg:flex items-center gap-8 h-full">
            {/* AI Mega Menu */}
            <div className="relative group h-full flex items-center" onMouseEnter={() => setActiveMenu('ai')} onMouseLeave={() => setActiveMenu(null)}>
              <button className="flex items-center gap-1 text-[0.95rem] font-bold text-[#212529] hover:text-[#0d6efd] transition-colors py-2">
                AI <ChevronDown size={14} className={`transition-transform ${activeMenu === 'ai' ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {activeMenu === 'ai' && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="absolute top-full -left-20 w-[800px] bg-white shadow-2xl border border-gray-100 rounded-xl overflow-hidden mt-6 flex">
                    <div className="w-2/3 p-8">
                      <h3 className="text-2xl font-bold text-[#212529] mb-2">Explore AI Tech Solutions</h3>
                      <p className="text-gray-500 mb-6">Smart AI Solutions for Modern Businesses.</p>
                      <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                        <Link href="/products#ai" className="text-[0.95rem] font-semibold text-gray-700 hover:text-[#0d6efd] flex items-center justify-between group/link">
                          Generative AI Development <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all text-[#0d6efd]" />
                        </Link>
                        <Link href="/products#ai" className="text-[0.95rem] font-semibold text-gray-700 hover:text-[#0d6efd] flex items-center justify-between group/link">
                          AI Agent Development <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all text-[#0d6efd]" />
                        </Link>
                        <Link href="/products#ai" className="text-[0.95rem] font-semibold text-gray-700 hover:text-[#0d6efd] flex items-center justify-between group/link">
                          AI Chatbot Services <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all text-[#0d6efd]" />
                        </Link>
                        <Link href="/products#ai" className="text-[0.95rem] font-semibold text-gray-700 hover:text-[#0d6efd] flex items-center justify-between group/link">
                          Machine Learning Solutions <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all text-[#0d6efd]" />
                        </Link>
                      </div>
                    </div>
                    <div className="w-1/3 bg-[#f8f9fa] p-8 border-l border-gray-100">
                      <h4 className="text-sm font-bold text-[#0d6efd] uppercase tracking-wider mb-4">Featured Insights</h4>
                      <div className="w-full h-32 bg-gray-200 rounded-lg mb-4 bg-[url('https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500')] bg-cover bg-center"></div>
                      <h5 className="font-bold text-[#212529] mb-2 leading-tight">How AI Can Help Your Business Grow</h5>
                      <Link href="/news" className="text-[#0d6efd] text-sm font-bold hover:underline">Read Full Article</Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Company Mega Menu */}
            <div className="relative group h-full flex items-center" onMouseEnter={() => setActiveMenu('company')} onMouseLeave={() => setActiveMenu(null)}>
              <button className="flex items-center gap-1 text-[0.95rem] font-bold text-[#212529] hover:text-[#0d6efd] transition-colors py-2">
                Company <ChevronDown size={14} className={`transition-transform ${activeMenu === 'company' ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {activeMenu === 'company' && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="absolute top-full -left-48 w-[900px] bg-white shadow-2xl border border-gray-100 rounded-xl overflow-hidden mt-6 flex">
                    <div className="w-1/2 p-8 grid grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-lg font-bold text-[#212529] mb-4 border-b border-gray-100 pb-2">The Company</h4>
                        <ul className="flex flex-col gap-3">
                          <li><Link href="/about" className="text-gray-600 hover:text-[#0d6efd] font-semibold text-sm">About Us</Link></li>
                          <li><Link href="/about#team" className="text-gray-600 hover:text-[#0d6efd] font-semibold text-sm">Leadership Team</Link></li>
                          <li><Link href="/career" className="text-gray-600 hover:text-[#0d6efd] font-semibold text-sm">Careers</Link></li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-[#212529] mb-4 border-b border-gray-100 pb-2">Resources</h4>
                        <ul className="flex flex-col gap-3">
                          <li><Link href="/case-studies" className="text-gray-600 hover:text-[#0d6efd] font-semibold text-sm">Case Studies</Link></li>
                          <li><Link href="/news" className="text-gray-600 hover:text-[#0d6efd] font-semibold text-sm">News & Updates</Link></li>
                        </ul>
                      </div>
                    </div>
                    <div className="w-1/2 bg-[#0d6efd] p-8 text-white">
                      <h3 className="text-3xl font-black mb-8 leading-tight">Imagination Meets, <br/>Implementation</h3>
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <div className="text-3xl font-black mb-1">9+</div>
                          <div className="text-sm opacity-80">Years in Business</div>
                        </div>
                        <div>
                          <div className="text-3xl font-black mb-1">1600+</div>
                          <div className="text-sm opacity-80">Projects Delivered</div>
                        </div>
                        <div>
                          <div className="text-3xl font-black mb-1">600+</div>
                          <div className="text-sm opacity-80">Client Relationships</div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Services Dropdown */}
            <div className="relative group h-full flex items-center" onMouseEnter={() => setActiveMenu('services')} onMouseLeave={() => setActiveMenu(null)}>
              <button className="flex items-center gap-1 text-[0.95rem] font-bold text-[#212529] hover:text-[#0d6efd] transition-colors py-2">
                Services <ChevronDown size={14} className={`transition-transform ${activeMenu === 'services' ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {activeMenu === 'services' && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="absolute top-full -left-64 w-[1000px] bg-white shadow-2xl border border-gray-100 rounded-xl overflow-hidden mt-6 flex">
                    <div className="w-1/3 bg-[#f8f9fa] flex flex-col p-4 border-r border-gray-100">
                       <div className="px-4 py-2 text-sm font-bold text-[#0d6efd] uppercase tracking-wider mb-2">Our Services</div>
                       <button className="text-left px-4 py-3 rounded-md font-bold text-[#212529] bg-white shadow-sm flex items-center justify-between border-l-4 border-[#0d6efd]">
                         Software Development <ArrowRight size={14} className="text-[#0d6efd]" />
                       </button>
                       <button className="text-left px-4 py-3 rounded-md font-bold text-gray-500 hover:text-[#212529] hover:bg-white transition-colors flex items-center justify-between border-l-4 border-transparent">
                         Web Development
                       </button>
                       <button className="text-left px-4 py-3 rounded-md font-bold text-gray-500 hover:text-[#212529] hover:bg-white transition-colors flex items-center justify-between border-l-4 border-transparent">
                         IT Services
                       </button>
                       <button className="text-left px-4 py-3 rounded-md font-bold text-gray-500 hover:text-[#212529] hover:bg-white transition-colors flex items-center justify-between border-l-4 border-transparent">
                         Digital Marketing
                       </button>
                    </div>
                    <div className="w-2/3 p-8">
                       <h3 className="text-2xl font-bold text-[#212529] mb-6">Software Development</h3>
                       <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                          <Link href="/products" className="text-gray-600 hover:text-[#0d6efd] font-semibold text-sm flex items-center gap-2 group/link">
                             <div className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover/link:bg-[#0d6efd]"></div> Enterprise Software Architecture
                          </Link>
                          <Link href="/products" className="text-gray-600 hover:text-[#0d6efd] font-semibold text-sm flex items-center gap-2 group/link">
                             <div className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover/link:bg-[#0d6efd]"></div> Custom CRM Solutions
                          </Link>
                          <Link href="/products" className="text-gray-600 hover:text-[#0d6efd] font-semibold text-sm flex items-center gap-2 group/link">
                             <div className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover/link:bg-[#0d6efd]"></div> SaaS Platform Development
                          </Link>
                          <Link href="/products" className="text-gray-600 hover:text-[#0d6efd] font-semibold text-sm flex items-center gap-2 group/link">
                             <div className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover/link:bg-[#0d6efd]"></div> Legacy System Modernization
                          </Link>
                          <Link href="/products" className="text-gray-600 hover:text-[#0d6efd] font-semibold text-sm flex items-center gap-2 group/link">
                             <div className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover/link:bg-[#0d6efd]"></div> API Integration & Dev
                          </Link>
                          <Link href="/products" className="text-gray-600 hover:text-[#0d6efd] font-semibold text-sm flex items-center gap-2 group/link">
                             <div className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover/link:bg-[#0d6efd]"></div> Microservices Architecture
                          </Link>
                       </div>
                       
                       <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between bg-[#f8f9fa] p-4 rounded-lg">
                         <div>
                           <div className="text-sm font-bold text-[#212529]">Ready to build?</div>
                           <div className="text-xs text-gray-500">Discuss your requirements with our architects.</div>
                         </div>
                         <Link href="/contact" className="bg-[#0d6efd] text-white px-4 py-2 rounded font-bold text-sm hover:bg-[#0b5ed7] transition-colors shadow-sm">
                           Consult Now
                         </Link>
                       </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>

          <div className="flex items-center gap-4 z-50">
            <Link href="/contact" className="hidden lg:flex items-center gap-2 bg-[#0d6efd] hover:bg-[#0b5ed7] text-white px-6 py-2 rounded-md text-[0.9rem] font-bold transition-all shadow-sm">
              Start Project
            </Link>
            <button onClick={() => setIsMobileOpen(!isMobileOpen)} className="lg:hidden p-2 text-[#212529]">
              {isMobileOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
