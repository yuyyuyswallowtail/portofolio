"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Certifications() {
  const certs = [
    {
      title: "Training Certificate Vocational School Graduaye Academy (VSGA)",
      img: "/certificates/vsga.jpg",
    },
    {
      title: "Independent Study Program - Hacktiv8",
      img: "/certificates/hacktiv8.jpg",
    },
    {
      title: "Independent Study Program - Ruangguru",
      img: "/certificates/ruangguru.jpg",
    },
  ];

  return (
    <section
      id="certifications"
      className="container max-w-6xl mx-auto px-6 py-28 relative"
    >
      <div className="absolute left-0 top-0 w-full overflow-hidden pointer-events-none">
        <motion.div
          className="text-7xl font-bold text-muted-foreground/5 uppercase tracking-widest whitespace-nowrap"
          animate={{ x: [1000, 0] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          Certifications
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white/5 dark:bg-white/5 backdrop-blur-3xl border border-white/10 rounded-2xl p-8 shadow-lg space-y-6"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Certifications</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {certs.map((cert, i) => (
            <div
              key={i}
              className="relative p-4 bg-white/10 rounded-xl shadow-md overflow-hidden hover:scale-[1.02] transition-all text-center"
            >
              <Image
                src={cert.img}
                alt={cert.title}
                width={400}
                height={250}
                className="rounded-lg object-cover mx-auto"
              />
              <h3 className="font-semibold mt-3">{cert.title}</h3>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
