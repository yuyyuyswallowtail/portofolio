"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

export default function Education() {
  return (
    <section
      id="education"
      className="container max-w-6xl mx-auto px-6 py-28 relative"
    >
      {/* Marquee title */}
      <div className="absolute left-0 top-0 w-full overflow-hidden pointer-events-none">
        <motion.div
          className="text-7xl font-bold text-muted-foreground/5 uppercase tracking-widest whitespace-nowrap"
          animate={{ x: [1000, 0] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          Education
        </motion.div>
      </div>

      {/* Glass Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white/5 dark:bg-white/5 backdrop-blur-3xl border border-white/10 rounded-2xl p-8 shadow-lg space-y-6"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Education</h2>

        <div className="space-y-4">
          <div className="p-6 bg-white/10 rounded-xl shadow-md">
            <h3 className="font-semibold text-xl">
              Bachelor of Informatics Engineering
            </h3>
            <p className="text-muted-foreground text-sm">
              Universitas Muhammadiyah Jakarta (08/2020 - 08/2024)
            </p>
            <Badge variant="secondary">GPA: 3.67 / 4.00</Badge>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
