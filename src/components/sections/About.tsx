"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

export default function About() {
  return (
    <section
      id="about"
      className="container max-w-6xl mx-auto px-6 py-28 relative"
    >
      {/* Marquee section title */}
      <div className="absolute left-0 top-0 w-full overflow-hidden pointer-events-none">
        <motion.div
          className="text-7xl font-bold text-muted-foreground/5 uppercase tracking-widest whitespace-nowrap"
          animate={{ x: [-1000, 0] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          About
        </motion.div>
      </div>

      {/* Glassmorphism Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative bg-white/5 dark:bg-white/5 backdrop-blur-3xl border border-white/10 rounded-2xl p-12 shadow-lg space-y-6"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>

        <p className="text-muted-foreground text-lg leading-relaxed">
          I am a{" "}
          <span className="font-semibold">
            Bachelor of Informatics Engineering
          </span>{" "}
          graduate from Universitas Muhammadiyah Jakarta with hands-on
          experience in modern web development through the{" "}
          <span className="font-semibold">
            Kampus Merdeka Independent Study Program
          </span>
          .
        </p>

        <p className="text-muted-foreground text-lg leading-relaxed">
          Certified as a{" "}
          <span className="font-semibold">Software Engineer by BNSP</span>, I
          specialize in building scalable and modern applications using{" "}
          <Badge variant="secondary">React.js</Badge>,{" "}
          <Badge variant="secondary">Next.js</Badge>,{" "}
          <Badge variant="secondary">TypeScript</Badge>, and backend development
          practices.
        </p>

        <p className="text-muted-foreground text-lg leading-relaxed">
          Passionate about continuous learning, writing clean code, and creating
          meaningful digital solutions that solve real-world problems.
        </p>
      </motion.div>
    </section>
  );
}
