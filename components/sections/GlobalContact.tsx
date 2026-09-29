'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  CheckCircle,
  Loader2,
} from 'lucide-react';

const contactPoints = [
  {
    icon: MapPin,
    label: 'Headquarters',
    value: 'Ahmedabad, Gujarat, India',
    color: '#00F0FF',
  },
  {
    icon: Mail,
    label: 'Enterprise Inquiries',
    value: 'enterprise@cloudvexa.in',
    color: '#0070F3',
  },
  {
    icon: Phone,
    label: 'Direct Line',
    value: '+91 79 XXXX XXXX',
    color: '#7928CA',
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
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '10px',
    padding: '12px 16px',
    color: '#fff',
    fontSize: '0.875rem',
    outline: 'none',
    transition: 'border-color 200ms ease, box-shadow 200ms ease',
    fontFamily: 'inherit',
  };

  const labelStyle = {
    fontSize: '0.75rem',
    fontWeight: 600,
    color: 'rgba(148,163,184,0.8)',
    letterSpacing: '0.04em',
    marginBottom: '6px',
    display: 'block',
    textTransform: 'uppercase' as const,
  };

  return (
    <section
      style={{
        padding: 'clamp(5rem, 10vw, 8rem) clamp(1.5rem, 5vw, 4rem)',
        background: 'var(--bg-black)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Ambient background */}
      <div
        style={{
          position: 'absolute',
          bottom: '-100px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '800px',
          height: '400px',
          background:
            'radial-gradient(ellipse at center, rgba(0,112,243,0.08) 0%, rgba(122,40,202,0.06) 50%, transparent 80%)',
          pointerEvents: 'none',
          filter: 'blur(60px)',
        }}
      />

      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{
            textAlign: 'center',
            marginBottom: '4rem',
          }}
        >
          <p
            style={{
              fontSize: '0.75rem',
              fontFamily: 'var(--font-mono, monospace)',
              color: '#00F0FF',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              marginBottom: '1rem',
            }}
          >
            Enterprise Partnership
          </p>
          <h2
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              color: '#fff',
              lineHeight: 1.15,
              marginBottom: '1rem',
            }}
          >
            Ready to Build the{' '}
            <span
              style={{
                background:
                  'linear-gradient(135deg, #00F0FF 0%, #0070F3 50%, #7928CA 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Future
            </span>
            ?
          </h2>
          <p
            style={{
              fontSize: '1rem',
              color: 'rgba(148,163,184,0.8)',
              maxWidth: '540px',
              margin: '0 auto',
              lineHeight: 1.7,
            }}
          >
            Let&apos;s architect your next-generation digital infrastructure together.
            Our engineering teams are ready to begin.
          </p>
        </motion.div>

        {/* Two-column layout: Contact info + Form */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.5fr',
            gap: '3rem',
            alignItems: 'start',
          }}
        >
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3
              style={{
                fontSize: '1.25rem',
                fontWeight: 700,
                color: '#fff',
                marginBottom: '1.5rem',
              }}
            >
              Reach Our Engineering Team
            </h3>

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
                    gap: '12px',
                    marginBottom: '1.5rem',
                    padding: '1rem',
                    borderRadius: '12px',
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}
                >
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      flexShrink: 0,
                      background: `${point.color}12`,
                      border: `1px solid ${point.color}25`,
                      borderRadius: '9px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Icon size={16} color={point.color} />
                  </div>
                  <div>
                    <p
                      style={{
                        fontSize: '0.7rem',
                        color: 'rgba(148,163,184,0.6)',
                        letterSpacing: '0.05em',
                        textTransform: 'uppercase',
                        fontWeight: 600,
                        marginBottom: '2px',
                      }}
                    >
                      {point.label}
                    </p>
                    <p
                      style={{
                        fontSize: '0.9rem',
                        color: '#fff',
                        fontWeight: 500,
                      }}
                    >
                      {point.value}
                    </p>
                  </div>
                </motion.div>
              );
            })}

            {/* Trust badges */}
            <div
              style={{
                display: 'flex',
                gap: '8px',
                flexWrap: 'wrap',
                marginTop: '1rem',
              }}
            >
              {['SOC2 Ready', 'HIPAA Compliant', 'ISO 27001', 'GDPR'].map(
                (badge) => (
                  <span
                    key={badge}
                    style={{
                      fontSize: '0.65rem',
                      fontFamily: 'var(--font-mono, monospace)',
                      padding: '4px 10px',
                      borderRadius: '999px',
                      background: 'rgba(0,240,255,0.05)',
                      border: '1px solid rgba(0,240,255,0.15)',
                      color: '#67E8F9',
                      fontWeight: 600,
                      letterSpacing: '0.05em',
                    }}
                  >
                    {badge}
                  </span>
                )
              )}
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{
              background: 'rgba(15,23,42,0.6)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '20px',
              padding: '2rem',
            }}
          >
            {formState === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{
                  textAlign: 'center',
                  padding: '3rem 1rem',
                }}
              >
                <CheckCircle
                  size={48}
                  color="#00F0FF"
                  style={{ margin: '0 auto 1rem' }}
                />
                <h3
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: '#fff',
                    marginBottom: '0.5rem',
                  }}
                >
                  Message Received!
                </h3>
                <p style={{ color: 'rgba(148,163,184,0.8)', fontSize: '0.9rem' }}>
                  Our enterprise team will respond within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '1rem',
                    marginBottom: '1rem',
                  }}
                >
                  <div>
                    <label style={labelStyle}>Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="John Smith"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      style={inputStyle}
                      onFocus={(e) => {
                        e.target.style.borderColor = 'rgba(0,240,255,0.4)';
                        e.target.style.boxShadow =
                          '0 0 0 2px rgba(0,240,255,0.08)';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = 'rgba(255,255,255,0.1)';
                        e.target.style.boxShadow = 'none';
                      }}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Work Email</label>
                    <input
                      type="email"
                      required
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      style={inputStyle}
                      onFocus={(e) => {
                        e.target.style.borderColor = 'rgba(0,240,255,0.4)';
                        e.target.style.boxShadow = '0 0 0 2px rgba(0,240,255,0.08)';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = 'rgba(255,255,255,0.1)';
                        e.target.style.boxShadow = 'none';
                      }}
                    />
                  </div>
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <label style={labelStyle}>Company / Organization</label>
                  <input
                    type="text"
                    placeholder="Acme Corp"
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                    style={inputStyle}
                    onFocus={(e) => {
                      e.target.style.borderColor = 'rgba(0,240,255,0.4)';
                      e.target.style.boxShadow = '0 0 0 2px rgba(0,240,255,0.08)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'rgba(255,255,255,0.1)';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <label style={labelStyle}>Service Interest</label>
                  <select
                    value={formData.service}
                    onChange={(e) =>
                      setFormData({ ...formData, service: e.target.value })
                    }
                    style={{
                      ...inputStyle,
                      cursor: 'pointer',
                      appearance: 'none',
                      WebkitAppearance: 'none',
                    }}
                  >
                    <option value="" style={{ background: '#0B0F19' }}>
                      Select a service...
                    </option>
                    <option value="ai" style={{ background: '#0B0F19' }}>
                      AI & LLM Engineering
                    </option>
                    <option value="cloud" style={{ background: '#0B0F19' }}>
                      Cloud Migration & Architecture
                    </option>
                    <option value="rpa" style={{ background: '#0B0F19' }}>
                      Autonomous RPA & Modernization
                    </option>
                    <option value="security" style={{ background: '#0B0F19' }}>
                      Enterprise Security & Compliance
                    </option>
                    <option value="saas" style={{ background: '#0B0F19' }}>
                      SaaS Development
                    </option>
                  </select>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={labelStyle}>Project Details</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe your project requirements, timeline, and scale..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    style={{
                      ...inputStyle,
                      resize: 'vertical',
                      minHeight: '100px',
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = 'rgba(0,240,255,0.4)';
                      e.target.style.boxShadow = '0 0 0 2px rgba(0,240,255,0.08)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'rgba(255,255,255,0.1)';
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
                    width: '100%',
                    padding: '14px',
                    borderRadius: '12px',
                    background:
                      formState === 'loading'
                        ? 'rgba(0,112,243,0.4)'
                        : 'linear-gradient(135deg, #00C2CC, #0070F3)',
                    border: 'none',
                    color: '#fff',
                    fontSize: '0.9rem',
                    fontWeight: 700,
                    cursor: formState === 'loading' ? 'not-allowed' : 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    letterSpacing: '0.02em',
                    boxShadow: '0 0 30px rgba(0,240,255,0.2)',
                    fontFamily: 'inherit',
                    transition: 'background 300ms ease',
                  }}
                >
                  {formState === 'loading' ? (
                    <>
                      <Loader2 size={18} style={{ animation: 'spin 1s linear infinite' }} />
                      Sending...
                    </>
                  ) : (
                    <>
                      Initiate Partnership
                      <ArrowRight size={16} />
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
