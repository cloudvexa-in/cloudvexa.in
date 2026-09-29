'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Zap, Facebook, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

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
    color: "#1877F2",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/company/cloudvexa-private-limited",
    color: "#0A66C2",
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://www.instagram.com/cloud_vexa/",
    color: "#E4405F",
  },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: 'var(--bg-subtle)',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        padding: 'clamp(3rem, 6vw, 5rem) clamp(1.5rem, 5vw, 4rem) 2rem',
        color: '#fff',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Newsletter / Stay Updated Block */}
        <div style={{
          background: 'rgba(255,255,255,0.02)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: '16px',
          padding: '2rem',
          marginBottom: '3rem',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1.5rem',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
            <div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>Stay Updated</h3>
                <p style={{ fontSize: '0.875rem', color: 'rgba(148,163,184,0.8)' }}>Subscribe to our newsletter for the latest updates.</p>
            </div>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                <input 
                    type="email" 
                    placeholder="Enter your email" 
                    style={{
                        padding: '12px 16px',
                        borderRadius: '8px',
                        background: 'rgba(255,255,255,0.05)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        color: '#fff',
                        outline: 'none',
                        minWidth: '250px'
                    }}
                />
                <button style={{
                    padding: '12px 24px',
                    borderRadius: '8px',
                    background: '#00F0FF',
                    color: '#000',
                    fontWeight: 600,
                    border: 'none',
                    cursor: 'pointer'
                }}>
                    Subscribe
                </button>
            </div>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '3rem',
            marginBottom: '3rem',
          }}
        >
          {/* Brand column */}
          <div style={{ gridColumn: 'span 2' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginBottom: '1.5rem',
              }}
            >
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  background: 'linear-gradient(135deg, #00F0FF, #0070F3)',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Zap size={18} color="#fff" />
              </div>
              <span
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 800,
                  background: 'linear-gradient(90deg, #fff, #00F0FF)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Cloudvexa
              </span>
            </div>
            <p
              style={{
                fontSize: '0.85rem',
                color: 'rgba(148,163,184,0.8)',
                lineHeight: 1.7,
                maxWidth: '320px',
                marginBottom: '1.5rem',
              }}
            >
              Building Intelligent, Secure & Scalable Digital Solutions for the future.
              Transforming businesses through innovative technology.
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.875rem' }}>
                    <Mail size={16} color="#00F0FF" style={{ flexShrink: 0 }} />
                    <a href="mailto:support@cloudvexa.in" style={{ color: 'rgba(148,163,184,0.8)', textDecoration: 'none' }}>support@cloudvexa.in</a>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.875rem' }}>
                    <Phone size={16} color="#00F0FF" style={{ flexShrink: 0 }} />
                    <a href="tel:+919438466231" style={{ color: 'rgba(148,163,184,0.8)', textDecoration: 'none' }}>+91 9438466231</a>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.875rem' }}>
                    <MapPin size={16} color="#00F0FF" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ color: 'rgba(148,163,184,0.8)', lineHeight: 1.5 }}>
                        Unit 101, Oxford Towers, 139/88, Hal Old Airport, H.a.l Ii Stage, Bangalore, Bangalore North, Karnataka, India, 560008
                    </span>
                </div>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4
                style={{
                  fontSize: '1rem',
                  fontWeight: 700,
                  color: '#fff',
                  marginBottom: '1.25rem',
                }}
              >
                {category}
              </h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {links.map((link) => (
                  <li key={link.label} style={{ marginBottom: '0.75rem' }}>
                    <Link
                      href={link.href}
                      style={{
                        fontSize: '0.875rem',
                        color: 'rgba(148,163,184,0.8)',
                        textDecoration: 'none',
                        transition: 'color 200ms ease',
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = '#00F0FF')
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = 'rgba(148,163,184,0.8)')
                      }
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
        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,0.1)',
            paddingTop: '2rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1.5rem',
          }}
        >
          {/* Social Icons */}
          <div style={{ display: 'flex', gap: '1rem' }}>
            {actualSocialLinks.map((social) => {
                const Icon = social.icon;
                return (
                    <motion.a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        style={{
                            width: '40px',
                            height: '40px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            background: 'rgba(255,255,255,0.05)',
                            borderRadius: '50%',
                            color: '#fff',
                            textDecoration: 'none'
                        }}
                        aria-label={social.name}
                    >
                        <Icon size={18} />
                    </motion.a>
                );
            })}
          </div>

          <div style={{ textAlign: 'right' }}>
              <p style={{ fontSize: '0.875rem', color: 'rgba(148,163,184,0.6)', marginBottom: '0.5rem' }}>
                © {new Date().getFullYear()} cloudvexa.in All rights reserved.
              </p>
              <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'flex-end' }}>
                {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(
                  (item) => (
                    <Link
                      key={item}
                      href="#"
                      style={{
                        fontSize: '0.75rem',
                        color: 'rgba(148,163,184,0.6)',
                        textDecoration: 'none',
                        transition: 'color 200ms ease',
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = '#00F0FF')
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = 'rgba(148,163,184,0.6)')
                      }
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
