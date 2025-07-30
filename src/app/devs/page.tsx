"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaGlobe, FaMapMarkerAlt, FaCode } from "react-icons/fa";
import devs from "@/data/devs.json";

export default function Devs() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
            Nasi Deweloperzy
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Meet talented developers from around the world. Share knowledge, collaborate, and grow together in our tech community.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {devs.map((dev) => (
            <motion.div
              key={dev.id}
              variants={item}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-card rounded-xl border border-border/40 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-accent p-0.5">
                      <div className="w-full h-full rounded-full bg-card p-0.5">
                        <img
                          src={dev.avatar}
                          alt={`${dev.name} avatar`}
                          className="w-full h-full rounded-full object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(dev.name)}&background=random`;
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <Link href={`/devs/${dev.username}`}>
                      <h3 className="text-xl font-semibold text-foreground hover:text-primary transition-colors">
                        {dev.name}
                      </h3>
                    </Link>
                    <div className="flex items-center text-muted-foreground text-sm">
                      <FaMapMarkerAlt className="mr-1.5" />
                      <span>{dev.location}</span>
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4 line-clamp-2">{dev.bio}</p>

                <div className="mb-4">
                  <div className="flex items-center text-sm text-muted-foreground mb-2">
                    <FaCode className="mr-2" />
                    <span>Technologies:</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {dev.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4 mt-4">
                  {dev.website && (
                    <a
                      href={dev.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      aria-label={`${dev.name}'s website`}
                    >
                      <FaGlobe className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
              <Link
                href={`/devs/${dev.username}`}
                className="block text-center py-3 bg-muted/50 text-primary font-medium hover:bg-muted/80 transition-colors"
              >
                Check profile
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}