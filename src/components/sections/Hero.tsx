"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pb-6 pt-20 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-blue-500/10" />

      <div className="relative container max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Hi, {"I'm"} <br />
            <span className="text-primary">Bintang Mesir</span>
          </h1>

          <p className="text-muted-foreground text-lg mb-8 max-w-lg">
            Software Engineer building scalable and modern web applications with
            clean architecture and performance-first mindset.
          </p>

          <div className="flex gap-4">
            <Button
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View Projects
            </Button>

            <Button variant="outline" asChild>
              <a href="/cv.pdf" download>
                Download CV
              </a>
            </Button>
          </div>
        </motion.div>

        {/* PROFILE IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative w-80 h-80 rounded-full p-[3px] bg-gradient-to-tr from-primary to-blue-400 shadow-2xl">
            <div className="relative w-full h-full rounded-full overflow-hidden bg-background">
              <Image
                src="/profile.png"
                alt="Bintang Mesir"
                fill
                loading="eager"
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
