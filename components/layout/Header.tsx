"use client";

import ThemeToggle from "@/components/ui/ThemeToggle";
import { AnimatePresence, motion } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  Monitor,
  Shield,
  Cloud,
  Bot,
  Briefcase,
  Users,
  MapPin,
  Mail,
  Newspaper,
  Terminal,
  Globe
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

// Navigation Structure with Dropdowns and Mega Menus
const navigation = [
  {
    name: "Products & Services",
    type: "mega",
    items: [
      {
        name: "Software & Web Dev",
        href: "/products#software",
        icon: Monitor,
        desc: "Custom enterprise software and high-performance web applications",
      },
      {
        name: "Cloud Architecture",
        href: "/products#cloud",
        icon: Cloud,
        desc: "Secure multi-cloud mesh topologies and zero-downtime migrations",
      },
      {
        name: "AI & LLM Engineering",
        href: "/products#ai",
        icon: Bot,
        desc: "Proprietary LLM fine-tuning, RAG pipelines, and inference APIs",
      },
      {
        name: "Security & SEO",
        href: "/products#security",
        icon: Shield,
        desc: "Zero-trust networks, SOC2 compliance, and search optimization",
      },
    ],
  },
  {
    name: "Company",
    type: "dropdown",
    items: [
      { name: "About Us", href: "/about", icon: Users, desc: "Learn about our mission" },
      { name: "Careers", href: "/career", icon: Briefcase, desc: "Join our engineering team" },
      { name: "News & Updates", href: "/news", icon: Newspaper, desc: "Latest announcements" },
    ],
  },
  {
    name: "Connect",
    type: "dropdown",
    items: [
      { name: "Contact Us", href: "/contact", icon: Mail, desc: "Reach our enterprise team" },
      { name: "Locate Us", href: "/locate", icon: MapPin, desc: "Visit our global offices" },
    ],
  },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 border-b ${
        isScrolled
          ? "bg-white/95 dark:bg-[#05070E]/95 backdrop-blur-md border-gray-200 dark:border-white/10 shadow-sm py-2"
          : "bg-transparent border-transparent py-4"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      onMouseLeave={() => setActiveDropdown(null)}
    >
      <nav className="max-w-[1400px] mx-auto px-6 flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0 z-50">
            <img src="/logo_black.png" alt="Cloudvexa" className="h-6 dark:hidden block" />
            <img src="/logo.png" alt="Cloudvexa" className="h-6 hidden dark:block" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-center flex-1 ml-8">
            {navigation.map((nav) => (
              <div
                key={nav.name}
                className="relative group px-4 py-2"
                onMouseEnter={() => setActiveDropdown(nav.name)}
              >
                <button className="flex items-center gap-1 text-sm font-semibold text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">
                  {nav.name}
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${
                      activeDropdown === nav.name ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Dropdown Panel */}
                <AnimatePresence>
                  {activeDropdown === nav.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 5, scale: 0.98 }}
                      transition={{ duration: 0.15 }}
                      className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white dark:bg-[#0f172a] rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] dark:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] border border-gray-100 dark:border-white/10 overflow-hidden ${
                        nav.type === "mega" ? "w-[600px]" : "w-[300px]"
                      }`}
                    >
                      <div
                        className={`p-4 grid gap-2 ${
                          nav.type === "mega" ? "grid-cols-2" : "grid-cols-1"
                        }`}
                      >
                        {nav.items.map((item) => {
                          const Icon = item.icon;
                          return (
                            <Link
                              key={item.name}
                              href={item.href}
                              onClick={() => setActiveDropdown(null)}
                              className="group flex items-start gap-4 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
                            >
                              <div className="flex-shrink-0 mt-0.5 w-10 h-10 rounded-md bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center text-blue-600 dark:text-cyan-400 group-hover:scale-110 transition-transform">
                                <Icon size={20} />
                              </div>
                              <div>
                                <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-0.5">
                                  {item.name}
                                </h4>
                                <p className="text-xs text-gray-500 dark:text-gray-400 leading-snug">
                                  {item.desc}
                                </p>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                      
                      {nav.type === "mega" && (
                        <div className="bg-gray-50 dark:bg-white/5 p-4 border-t border-gray-100 dark:border-white/10">
                          <Link href="/products" className="flex items-center justify-between text-sm font-semibold text-blue-600 dark:text-cyan-400 hover:underline">
                            <span>Explore all engineering stacks</span>
                            <ArrowRight size={16} />
                          </Link>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Actions & Mobile Menu */}
          <div className="flex items-center gap-4 z-50">
            <ThemeToggle />

            {/* CTA Button */}
            <Link
              href="/contact"
              className="hidden lg:flex items-center gap-2 bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-400 text-white px-5 py-2 rounded-lg text-sm font-bold transition-all"
            >
              Start Project
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-gray-600 dark:text-gray-300 rounded-md hover:bg-gray-100 dark:hover:bg-white/10"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        
        {/* Mobile Navigation Dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-4 overflow-hidden"
            >
              <div className="flex flex-col gap-2 p-4 bg-gray-50 dark:bg-white/5 rounded-xl border border-gray-200 dark:border-white/10">
                {navigation.map((nav) => (
                  <div key={nav.name} className="flex flex-col gap-1">
                    <div className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider px-2 py-2">
                      {nav.name}
                    </div>
                    {nav.items.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-sm font-semibold text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-cyan-400 px-4 py-2 rounded-md hover:bg-white dark:hover:bg-white/10 transition-colors"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}

function ArrowRight({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7"/>
    </svg>
  );
}
