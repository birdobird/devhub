"use client";

import { motion } from "framer-motion";
import { Dev } from "@/types/dev";
import { ArrowRight, Globe } from "lucide-react";

interface DevCardProps {
  dev: Dev;
  index?: number;
}

export default function DevCard({ dev, index = 0 }: DevCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
      className="group relative overflow-hidden rounded-xl border border-border bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 bg-neutral-800"
    >
      <div className="p-6">
        <div className="flex items-start space-x-4">
          <div className="relative">
            <motion.div
              className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-primary/20 group-hover:border-primary/50 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={dev.avatar}
                alt={dev.name}
                className="h-full w-full object-cover"
                width={64}
                height={64}
              />
            </motion.div>
            <motion.div 
              className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full bg-green-500 border-2 border-background"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5 }}
            />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <motion.h3 
                className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors"
                whileHover={{ x: 2 }}
              >
                <a href={`/devs/${dev.username}`} className="flex items-center">
                  {dev.name}
                  <ArrowRight className="ml-1 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </motion.h3>
              <div className="flex space-x-2">
                {dev.website && (
                  <motion.a
                    href={dev.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    title="Website"
                  >
                    <Globe className="h-4 w-4" />
                  </motion.a>
                )}
              </div>
            </div>
            
            <p className="mt-1 text-sm text-muted-foreground">@{dev.username}</p>
            
            <p className="mt-2 text-sm text-foreground/90">{dev.bio}</p>
            
            <div className="mt-3 flex items-center text-sm text-muted-foreground">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-1 h-4 w-4"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              {dev.location}
            </div>
          </div>
        </div>

        {dev.technologies && dev.technologies.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {dev.technologies.slice(0, 4).map((tech, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * i }}
                className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary"
              >
                {tech}
              </motion.span>
            ))}
            {dev.technologies.length > 4 && (
              <span className="inline-flex items-center rounded-full bg-muted px-2.5 py-0.5 text-xs text-muted-foreground">
                +{dev.technologies.length - 4} more
              </span>
            )}
          </div>
        )}

        <div className="mt-4 flex justify-end">
          <a 
          href={`/devs/${dev.username}`} 
          className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors h-9 px-4 border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background group/button"
        >
          View Profile
          <ArrowRight className="ml-1 h-3.5 w-3.5 opacity-0 transition-all group-hover/button:opacity-100 group-hover/button:translate-x-1" />
        </a>
        </div>
      </div>
    </motion.div>
  );
}