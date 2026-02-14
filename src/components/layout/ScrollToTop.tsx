"use client";

import { ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

export default function ScrollToTop() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <motion.button
      onClick={scrollTop}
      className="fixed bottom-6 right-6 p-3 rounded-full text-primary shadow-lg border-2 border-foreground bg-background"
      whileHover={{ scale: 1.1 }}
    >
      <ArrowUp size={18} />
    </motion.button>
  );
}
