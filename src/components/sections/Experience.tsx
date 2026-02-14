"use client";

import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      title: "Training Certificate VSGA - Digitalent",
      date: "08/2022 - 12/2022",
      description:
        "Collaborated in building responsive web applications using PHP",
    },
    {
      title: "BNSP Software Engineering Certification",
      date: "06/2023 - 06/2026",
      description:
        "Implemented structured and object-oriented programming principles. Built applications using Express.js and React.js with database integration and testing.",
    },
    {
      title: "Independent Study Program - Hacktiv8",
      date: "02/2023 - 06/2023",
      description:
        "Developed predictive machine learning models using Logistic Regression, SVM, and Clustering.",
    },
    {
      title: "Independent Study Program - Ruangguru",
      date: "08/2022 - 12/2022",
      description:
        "Collaborated in building responsive web applications using React.js and Tailwind CSS.",
    },
  ];

  return (
    <section
      id="experience"
      className="container max-w-6xl mx-auto px-6 py-28 relative"
    >
      <div className="absolute left-0 top-0 w-full overflow-hidden pointer-events-none">
        <motion.div
          className="text-7xl font-bold text-muted-foreground/5 uppercase tracking-widest whitespace-nowrap"
          animate={{ x: [-1000, 0] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          Experience
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white/5 dark:bg-white/5 backdrop-blur-3xl border border-white/10 rounded-2xl p-8 shadow-lg space-y-6"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Experience & Training
        </h2>

        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="p-6 bg-white/10 rounded-xl shadow-md hover:scale-[1.02] transition-all"
            >
              <h3 className="font-semibold text-xl">{exp.title}</h3>
              <p className="text-muted-foreground text-sm mb-2">{exp.date}</p>
              <p className="text-muted-foreground">{exp.description}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
