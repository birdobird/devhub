"use client";

import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Globe, Mail } from "lucide-react";
import Link from "next/link";
import devs from "@/data/devs.json";

interface DevProfileClientProps {
  params: { username: string };
}

export default function DevProfileClient({ params }: DevProfileClientProps) {
  const dev = devs.find((dev) => dev.username === params.username);
  
  if (!dev) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <Button
          asChild
          variant="ghost"
          className="mb-6 group hover:bg-accent/50 transition-colors"
        >
          <Link href="/devs" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Developers
          </Link>
        </Button>

        <div className="bg-card/50 backdrop-blur-sm rounded-2xl border border-border overflow-hidden shadow-lg">
          {/* Header with avatar and basic info */}
          <div className="relative">
            <div className="h-32 bg-gradient-to-r from-primary/20 to-accent/20" />
            <div className="px-6 pb-6 -mt-16">
              <div className="flex flex-col sm:flex-row sm:items-end gap-6">
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                  className="relative group"
                >
                  <div className="w-32 h-32 rounded-2xl border-4 border-background bg-background overflow-hidden shadow-lg">
                    <img
                      src={dev.avatar}
                      alt={dev.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-6 h-6 rounded-full bg-green-500 border-2 border-background" />
                </motion.div>

                <div className="flex-1">
                  <motion.h1 
                    className="text-3xl font-bold text-foreground"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    {dev.name}
                  </motion.h1>
                  <motion.p 
                    className="text-muted-foreground mt-1"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    @{dev.username}
                  </motion.p>
                  
                  <motion.div 
                    className="flex items-center gap-2 mt-3 flex-wrap"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <div className="flex items-center text-sm text-muted-foreground">
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
                  </motion.div>
                </div>

                <motion.div
                  className="flex gap-2 mt-4 sm:mt-0"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  {dev.website && (
                    <Button asChild variant="outline" size="icon">
                      <a href={dev.website} target="_blank" rel="noopener noreferrer" title="Website">
                        <Globe className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                </motion.div>
              </div>
            </div>
          </div>

          {/* Main content */}
          <div className="px-6 pb-8 space-y-6">
            {/* Bio */}
            <motion.section 
              className="prose prose-invert max-w-none"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-xl font-semibold text-foreground mb-3">About</h2>
              <p className="text-muted-foreground">{dev.bio}</p>
            </motion.section>

            {/* Technologies */}
            <motion.section 
              className="space-y-3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-xl font-semibold text-foreground">Technologies</h2>
              <div className="flex flex-wrap gap-2">
                {dev.technologies.map((tech, i) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + i * 0.05 }}
                    className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.section>

            {/* Contact */}
            <motion.section 
              className="pt-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h2 className="text-xl font-semibold text-foreground mb-3">Get in Touch</h2>
              <div className="flex flex-wrap gap-3">
                {dev.website && (
                  <Button asChild variant="outline" className="gap-2">
                    <a href={dev.website} target="_blank" rel="noopener noreferrer">
                      <Globe className="h-4 w-4" />
                      Website
                      <ExternalLink className="h-3 w-3 opacity-70" />
                    </a>
                  </Button>
                )}
                <Button variant="default" className="gap-2">
                  <Mail className="h-4 w-4" />
                  Contact
                </Button>
              </div>
            </motion.section>
          </div>
        </div>
      </motion.div>
    </div>
  );
}