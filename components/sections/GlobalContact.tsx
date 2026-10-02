'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  Loader2,
} from 'lucide-react';
import Script from 'next/script';

const contactPoints = [
  {
    icon: MapPin,
    label: 'Headquarters',
    value: 'Ahmedabad, Gujarat, India',
    isAddress: true,
  },
  {
    icon: Mail,
    label: 'Enterprise Inquiries',
    value: 'enterprise@cloudvexa.in',
    href: 'mailto:enterprise@cloudvexa.in',
  },
  {
    icon: Phone,
    label: 'Direct Line',
    value: '+91 79 XXXX XXXX',
    href: 'tel:+917900000000',
  },
];

type FormState = 'idle' | 'loading' | 'success' | 'error';

export default function GlobalContact() {
  const [formState, setFormState] = useState<FormState>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setFormState('loading');
    // Simulate API call — replace with actual endpoint
    await new Promise((r) => setTimeout(r, 1500));
    setFormState('success');
  };

  const inputStyle = {
    width: '100%',
    background: '#ffffff',
    border: '1px solid #ced4da',
    borderRadius: '6px',
    padding: '14px 16px',
    color: '#495057',
    fontSize: '0.95rem',
    outline: 'none',
    transition: 'border-color 200ms ease, box-shadow 200ms ease',
    fontFamily: 'inherit',
  };

  const labelStyle = {
    fontSize: '0.85rem',
    fontWeight: 600,
    color: '#343a40',
    marginBottom: '8px',
    display: 'block',
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Cloudvexa",
    "url": "https://cloudvexa.in",
    "logo": "https://cloudvexa.in/logo.png",
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+91-79-XXXX-XXXX",
        "contactType": "customer service",
        "email": "enterprise@cloudvexa.in",
        "areaServed": "IN",
        "availableLanguage": ["en", "hi"]
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Ahmedabad",
      "addressRegion": "Gujarat",
      "addressCountry": "IN"
    }
  };

  return (
    <section
      id="contact"
      style={{
        padding: 'clamp(4rem, 8vw, 6rem) clamp(1.5rem, 5vw, 4rem)',
        background: '#f8f9fa',
        position: 'relative',
        fontFamily: "'Montserrat', sans-serif",
      }}
    >
      <Script id="organization-structured-data" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(structuredData)}
      </Script>

      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            textAlign: 'center',
            marginBottom: '3rem',
          }}
        >
          <span
            style={{
              fontSize: '0.9rem',
              fontWeight: 700,
              color: '#0d6efd',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              marginBottom: '1rem',
              display: 'inline-block',
            }}
          >
            Get In Touch
          </span>
          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 2.75rem)',
              fontWeight: 800,
              color: '#212529',
              lineHeight: 1.2,
              marginBottom: '1rem',
            }}
          >
            Let&apos;s Discuss Your Project
          </h2>
          <p
            style={{
              fontSize: '1.05rem',
              color: '#6c757d',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: 1.6,
            }}
          >
            Whether you have a question or need a complete digital transformation, our experts are here to help you navigate the future.
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.5fr',
            gap: '3rem',
            alignItems: 'stretch',
          }}
        >
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              background: '#0d6efd',
              borderRadius: '12px',
              padding: '3rem 2rem',
              color: '#ffffff',
              boxShadow: '0 10px 30px rgba(13, 110, 253, 0.15)',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <h3
              style={{
                fontSize: '1.5rem',
                fontWeight: 700,
                marginBottom: '2rem',
              }}
            >
              Contact Information
            </h3>

            <div style={{ flex: 1 }}>
              {contactPoints.map((point, i) => {
                const Icon = point.icon;
                return (
                  <motion.div
                    key={point.label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '16px',
                      marginBottom: '2rem',
                    }}
                  >
                    <div
                      style={{
                        marginTop: '4px',
                      }}
                    >
                      <Icon size={24} color="#ffffff" opacity={0.9} />
                    </div>
                    <div>
                      <h4
                        style={{
                          fontSize: '1.1rem',
                          fontWeight: 600,
                          marginBottom: '4px',
                        }}
                      >
                        {point.label}
                      </h4>
                      {point.href ? (
                        <a
                          href={point.href}
                          style={{
                            fontSize: '0.95rem',
                            opacity: 0.85,
                            lineHeight: 1.5,
                            color: '#ffffff',
                            textDecoration: 'none',
                            transition: 'opacity 0.2s',
                          }}
                          onMouseOver={(e) => (e.currentTarget.style.opacity = '1')}
                          onMouseOut={(e) => (e.currentTarget.style.opacity = '0.85')}
                        >
                          {point.value}
                        </a>
                      ) : point.isAddress ? (
                        <address
                          style={{
                            fontSize: '0.95rem',
                            opacity: 0.85,
                            lineHeight: 1.5,
                            fontStyle: 'normal',
                            margin: 0,
                          }}
                        >
                          {point.value}
                        </address>
                      ) : (
                        <p
                          style={{
                            fontSize: '0.95rem',
                            opacity: 0.85,
                            lineHeight: 1.5,
                            margin: 0,
                          }}
                        >
                          {point.value}
                        </p>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{
              background: '#ffffff',
              boxShadow: '0 10px 40px rgba(0,0,0,0.05)',
              borderRadius: '12px',
              padding: '3rem',
            }}
          >
            {formState === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{
                  textAlign: 'center',
                  padding: '3rem 1rem',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                <CheckCircle
                  size={64}
                  color="#198754"
                  style={{ margin: '0 auto 1.5rem' }}
                />
                <h3
                  style={{
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    color: '#212529',
                    marginBottom: '0.5rem',
                  }}
                >
                  Thank You!
                </h3>
                <p style={{ color: '#6c757d', fontSize: '1.05rem' }}>
                  Your message has been received. Our team will get back to you shortly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '1.5rem',
                    marginBottom: '1.5rem',
                  }}
                >
                  <div>
                    <label style={labelStyle} htmlFor="contact-name">Full Name *</label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      style={inputStyle}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#86b7fe';
                        e.target.style.boxShadow = '0 0 0 0.25rem rgba(13, 110, 253, 0.25)';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = '#ced4da';
                        e.target.style.boxShadow = 'none';
                      }}
                    />
                  </div>
                  <div>
                    <label style={labelStyle} htmlFor="contact-email">Email Address *</label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      style={inputStyle}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#86b7fe';
                        e.target.style.boxShadow = '0 0 0 0.25rem rgba(13, 110, 253, 0.25)';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = '#ced4da';
                        e.target.style.boxShadow = 'none';
                      }}
                    />
                  </div>
                </div>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '1.5rem',
                    marginBottom: '1.5rem',
                  }}
                >
                  <div>
                    <label style={labelStyle} htmlFor="contact-company">Company Name</label>
                    <input
                      id="contact-company"
                      type="text"
                      placeholder="Your Company"
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                      style={inputStyle}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#86b7fe';
                        e.target.style.boxShadow = '0 0 0 0.25rem rgba(13, 110, 253, 0.25)';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = '#ced4da';
                        e.target.style.boxShadow = 'none';
                      }}
                    />
                  </div>
                  <div>
                    <label style={labelStyle} htmlFor="contact-service">Service Required</label>
                    <select
                      id="contact-service"
                      value={formData.service}
                      onChange={(e) =>
                        setFormData({ ...formData, service: e.target.value })
                      }
                      style={{
                        ...inputStyle,
                        cursor: 'pointer',
                        appearance: 'none',
                        WebkitAppearance: 'none',
                        backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\' fill=\'%23343a40\'%3E%3Cpath fill-rule=\'evenodd\' d=\'M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z\'/%3E%3C/svg%3E")',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'right 1rem center',
                        backgroundSize: '16px 12px',
                      }}
                    >
                      <option value="">Select an option</option>
                      <option value="ai">AI & ML Solutions</option>
                      <option value="web">Web Development</option>
                      <option value="mobile">Mobile App Development</option>
                      <option value="cybersecurity">Cybersecurity</option>
                      <option value="marketing">Digital Marketing</option>
                    </select>
                  </div>
                </div>

                <div style={{ marginBottom: '2rem' }}>
                  <label style={labelStyle} htmlFor="contact-message">Your Message *</label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    required
                    placeholder="Tell us about your requirements..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    style={{
                      ...inputStyle,
                      resize: 'vertical',
                      minHeight: '120px',
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#86b7fe';
                      e.target.style.boxShadow = '0 0 0 0.25rem rgba(13, 110, 253, 0.25)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#ced4da';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={formState === 'loading'}
                  whileHover={{ scale: formState === 'loading' ? 1 : 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    padding: '16px 32px',
                    borderRadius: '8px',
                    background: formState === 'loading' ? '#86b7fe' : '#0d6efd',
                    border: 'none',
                    color: '#fff',
                    fontSize: '1rem',
                    fontWeight: 600,
                    cursor: formState === 'loading' ? 'not-allowed' : 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    boxShadow: '0 4px 15px rgba(13, 110, 253, 0.3)',
                    transition: 'background 200ms ease, box-shadow 200ms ease',
                  }}
                >
                  {formState === 'loading' ? (
                    <>
                      <Loader2 size={20} style={{ animation: 'spin 1s linear infinite' }} />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={18} />
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
