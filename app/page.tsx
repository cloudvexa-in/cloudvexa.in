"use client";

import Button from "@/components/ui/Button";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Rocket,
  Shield,
  Users,
  Zap,
} from "lucide-react";
import dynamic from "next/dynamic";

// Dynamically import 3D component to avoid SSR issues
const CloudNetwork = dynamic(() => import("@/components/3d/CloudNetwork"), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-gradient-cyber" />,
});

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized performance for seamless user experience",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "Enterprise-grade security for your peace of mind",
  },
  {
    icon: Rocket,
    title: "Scalable Solutions",
    description: "Grow your business without technical limitations",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "100+ skilled professionals at your service",
  },
];

const benefits = [
  "Cutting-edge technology stack",
  "Agile development methodology",
  "24/7 dedicated support",
  "Transparent communication",
  "On-time delivery guarantee",
  "Competitive pricing",
];

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <CloudNetwork />

        <div className="container-custom section-padding relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-5xl md:text-7xl font-black mb-6 leading-tight"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Building <span className="gradient-text">Intelligent</span>,<br />
              <span className="gradient-text">Secure</span> &{" "}
              <span className="gradient-text">Scalable</span>
              <br />
              Digital Solutions
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto opacity-90"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Transform your business with cutting-edge technology solutions
              that drive growth and innovation
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Button variant="primary" size="lg" href="/contact">
                Get Started <ArrowRight size={20} />
              </Button>
              {/* Both are pointing to same contact */}
              {/* <Button variant="secondary" size="lg" href="/contact">
                                Talk to Expert
                            </Button> */}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        {/* Not visible at first screen and felt left out */}
        {/* <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-neon-cyan flex items-start justify-center p-2">
            <motion.div
              className="w-1.5 h-1.5 rounded-full bg-neon-cyan"
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div> */}
      </section>

      {/* Features Section */}
      <section className="section-padding from-transparent to-deep-blue-100/50">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Choose <span className="gradient-text">Cloudvexa</span>
            </h2>
            <p className="text-lg opacity-80 max-w-2xl mx-auto">
              We deliver excellence through innovation, expertise, and
              dedication
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  className="glass-card text-center group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  <motion.div
                    className="w-16 h-16 rounded-2xl bg-gradient-to-br from-neon-cyan to-neon-blue flex items-center justify-center mx-auto mb-4"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon size={32} className="text-deep-blue-300" />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-neon-cyan transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm opacity-80">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding from-transparent to-deep-blue-100/50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Experience the <span className="gradient-text">Cloudvexa</span>{" "}
                Advantage
              </h2>
              <p className="text-lg opacity-80 mb-8">
                Partner with us for a seamless journey from concept to
                deployment and beyond. We&apos;re committed to your success.
              </p>
              <Button variant="primary" href="/about">
                Learn More About Us <ArrowRight size={20} />
              </Button>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  className="flex items-center gap-3 glass-card"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <CheckCircle2
                    size={20}
                    className="text-neon-cyan flex-shrink-0"
                  />
                  <span className="text-sm font-medium">{benefit}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            className="glass rounded-3xl p-12 text-center bg-gradient-cyber"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how we can help you achieve your goals with our
              innovative solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg" href="/contact">
                Start Your Project
              </Button>
              <Button variant="secondary" size="lg" href="/products">
                Explore Services
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
