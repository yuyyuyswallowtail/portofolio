"use client";

import { motion } from "framer-motion";
import GitHubActivityGraph from "./GitHubActivityGraph";
import RepoClient from "./RepoClient";
import { Repo } from "@/types/github";
import { useEffect, useState } from "react";

export default function Projects() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const res = await fetch("/api/github/repos", { cache: 'no-store' });
        const data: Repo[] = await res.json();
        setRepos(data);
      } catch (err) {
        console.error("Failed to fetch repos", err);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);
  return (
    <section
      id="projects"
      className="container max-w-6xl mx-auto px-6 py-28 relative"
    >
      {/* Marquee title */}
      <div className="absolute left-0 top-0 w-full overflow-hidden pointer-events-none">
        <motion.div
          className="text-7xl font-bold text-muted-foreground/5 uppercase tracking-widest whitespace-nowrap"
          animate={{ x: [1000, 0] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          Projects
        </motion.div>
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-12"
      >
        {/* GitHub Activity Graph versi dot green */}
        <GitHubActivityGraph username="yuyyuyswallowtail" />

        {/* Repo Grid with Infinite Pagination */}
        {loading ? (
          <p className="text-muted-foreground text-center py-12">
            Loading repositories...
          </p>
        ) : (
          <div className="bg-white/5 dark:bg-white/5 backdrop-blur-3xl border border-white/10 rounded-2xl p-8 shadow-lg">
            <RepoClient repos={repos} />
          </div>
        )}
      </motion.div>
    </section>
  );
}
