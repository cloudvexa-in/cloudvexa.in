'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Facebook, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const footerLinks = {
  Company: [
    { label: 'About Us', href: '/about' },
    { label: 'Our Team', href: '/about#team' },
    { label: 'Careers', href: '/career' },
    { label: 'News', href: '/news' },
  ],
  Services: [
    { label: 'Software Development', href: '/products#software' },
    { label: 'Web Development', href: '/products#web' },
    { label: 'QA & Testing', href: '/products#qa' },
    { label: 'AI Solutions', href: '/products#ai' },
    { label: 'Network Security', href: '/products#security' },
    { label: 'Search Engine Optimization', href: '/products#seo' },
  ],
  Support: [
    { label: 'Contact Us', href: '/contact' },
    { label: 'Locate Us', href: '/locate' },
    { label: 'FAQ', href: '/contact#faq' },
  ],
};

const actualSocialLinks = [
  {
    name: "Facebook",
    icon: Facebook,
    href: "https://www.facebook.com/people/Cloudvexain/61590050627490/",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/company/cloudvexa-private-limited",
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://www.instagram.com/cloud_vexa/",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#212529] text-white pt-16 pb-8 font-sans border-t border-gray-800">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Newsletter / Stay Updated Block */}
        <div className="bg-[#2c3034] rounded-xl p-8 mb-16 flex flex-col md:flex-row gap-6 justify-between items-center border border-gray-700 shadow-sm">
            <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
                <p className="text-gray-400 text-sm">Subscribe to our newsletter for the latest updates and tech insights.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="px-4 py-3 rounded-md bg-[#343a40] border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-[#0d6efd] focus:ring-1 focus:ring-[#0d6efd] min-w-[250px]"
                />
                <button className="px-6 py-3 rounded-md bg-[#0d6efd] hover:bg-[#0b5ed7] text-white font-semibold transition-colors shadow-sm">
                    Subscribe
                </button>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-2xl font-black tracking-tight text-[#0d6efd]">Cloud<span className="text-white">vexa</span></span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs mb-8">
              Building Intelligent, Secure & Scalable Digital Solutions for the future. Transforming businesses through innovative technology.
            </p>
            
            <div className="flex flex-col gap-4 text-sm text-gray-400">
                <div className="flex items-center gap-3">
                    <Mail size={18} className="text-[#0d6efd] shrink-0" />
                    <a href="mailto:support@cloudvexa.in" className="hover:text-white transition-colors">support@cloudvexa.in</a>
                </div>
                <div className="flex items-center gap-3">
                    <Phone size={18} className="text-[#0d6efd] shrink-0" />
                    <a href="tel:+919438466231" className="hover:text-white transition-colors">+91 9438466231</a>
                </div>
                <div className="flex items-start gap-3">
                    <MapPin size={18} className="text-[#0d6efd] shrink-0 mt-0.5" />
                    <span className="leading-relaxed">
                        Unit 101, Oxford Towers, 139/88, Hal Old Airport, H.A.L II Stage, Bangalore North, Karnataka, India, 560008
                    </span>
                </div>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-lg font-bold text-white mb-6">
                {category}
              </h4>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-[#0d6efd] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Social Icons */}
          <div className="flex gap-4">
            {actualSocialLinks.map((social) => {
                const Icon = social.icon;
                return (
                    <motion.a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -2 }}
                        className="w-10 h-10 flex items-center justify-center bg-[#2c3034] hover:bg-[#0d6efd] rounded-full text-gray-300 hover:text-white transition-colors"
                        aria-label={social.name}
                    >
                        <Icon size={18} />
                    </motion.a>
                );
            })}
          </div>

          <div className="flex flex-col md:items-end items-center gap-2 text-center md:text-right">
              <p className="text-sm text-gray-500">
                © {new Date().getFullYear()} cloudvexa.in. All rights reserved.
              </p>
              <div className="flex gap-6 text-xs text-gray-500">
                {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(
                  (item) => (
                    <Link
                      key={item}
                      href="#"
                      className="hover:text-[#0d6efd] transition-colors"
                    >
                      {item}
                    </Link>
                  )
                )}
              </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
