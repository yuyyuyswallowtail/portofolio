"use client";

import { useMemo, useState } from "react";
import { Repo } from "@/types/github";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface RepoClientProps {
  repos?: Repo[];
}

export default function RepoClient({ repos = [] }: RepoClientProps) {
  const [search, setSearch] = useState("");
  const [visibleCount, setVisibleCount] = useState(6);

  const filteredRepos = useMemo(() => {
    return repos.filter((repo) =>
      repo.name.toLowerCase().includes(search.toLowerCase()),
    );
  }, [search, repos]);
  const visibleRepos = filteredRepos.slice(0, visibleCount);

  if (!repos.length) {
    return (
      <p className="text-muted-foreground text-center py-12">
        No repositories found or loading...
      </p>
    );
  }

  return (
    <div className="space-y-8">
      <div className="max-w-md mx-auto">
        <Input
          placeholder="Search repository..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setVisibleCount(6);
          }}
        />
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {visibleRepos.map((repo) => (
          <Card
            key={repo.id}
            className="p-6 hover:scale-[1.02] transition-all duration-300 hover:shadow-xl bg-white/5 backdrop-blur-sm border border-white/10"
          >
            <CardContent className="space-y-4">
              <h4 className="font-semibold text-lg">{repo.name}</h4>
              {repo.homepage ? (
                <a
                  href={repo.homepage}
                  target="_blank"
                  className="text-primary text-sm hover:underline"
                >
                  &#128279; {repo.homepage}
                </a>
              ) : null}
              <p className="text-sm text-muted-foreground">
                {repo.description || "No description provided."}
              </p>
              <div className="flex justify-between items-center py-2">
                {repo.language && (
                  <Badge variant="secondary">{repo.language}</Badge>
                )}
                <span className="text-sm text-muted-foreground">
                  ⭐ {repo.stargazers_count}
                </span>
              </div>
              <a
                href={repo.html_url}
                target="_blank"
                className="text-primary text-sm"
              >
                View Repository →
              </a>
            </CardContent>
          </Card>
        ))}
      </div>

      {visibleCount < filteredRepos.length && (
        <div className="flex justify-center mt-12">
          <Button onClick={() => setVisibleCount((prev) => prev + 6)}>
            Load More
          </Button>
        </div>
      )}
    </div>
  );
}
