"use client";

import { Mail, Phone, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="container max-w-6xl mx-auto px-6 py-28 relative"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white/5 dark:bg-white/5 backdrop-blur-3xl border border-white/10 rounded-2xl p-12 shadow-lg text-center space-y-6"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          {"Let's"} Work Together
        </h2>
        <p className="text-muted-foreground">Email: bintangmsr@gmail.com</p>
        <p className="text-muted-foreground">Phone: +62 823 2197 3545</p>
        <p className="text-muted-foreground">
          LinkedIn:{" "}
          <a
            href="https://linkedin.com/in/bintang-mesir"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            linkedin.com/in/bintang-mesir
          </a>
        </p>
        <Button asChild>
          <a href="/cv.pdf" download>
            Download CV
          </a>
        </Button>
      </motion.div>
    </section>
  );
}
