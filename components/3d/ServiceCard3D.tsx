"use client";

import Card from "@/components/ui/Card";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ServiceCard3DProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  index: number;
}

export default function ServiceCard3D({
  icon: Icon,
  title,
  description,
  features,
  index,
}: ServiceCard3DProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="h-full"
    >
      <Card hover3d className="h-full flex flex-col group">
        {/* Icon */}
        <motion.div
          className="w-16 h-16 rounded-2xl bg-gradient-to-br from-neon-cyan to-neon-blue flex items-center justify-center mb-6"
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ duration: 0.6 }}
        >
          <Icon size={32} className="text-deep-blue-300" />
        </motion.div>

        {/* Title */}
        <h3 className="text-2xl font-bold mb-4 group-hover:text-neon-cyan transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm opacity-80 mb-6 flex-grow">{description}</p>

        {/* Features */}
        <ul className="space-y-2 mb-6">
          {features.map((feature, i) => (
            <motion.li
              key={i}
              className="flex items-center gap-2 text-sm"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + i * 0.05 }}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-neon-cyan" />
              {feature}
            </motion.li>
          ))}
        </ul>

        {/* Learn More Button */}
        {/* TODO will add when we have a dedicated page */}
        {/* <motion.button
                    className="w-full py-3 rounded-lg glass border border-neon-cyan text-neon-cyan font-semibold hover:bg-neon-cyan hover:text-deep-blue-300 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                >
                    Learn More →
                </motion.button> */}
      </Card>
    </motion.div>
  );
}
