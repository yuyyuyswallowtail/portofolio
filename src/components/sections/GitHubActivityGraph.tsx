"use client";

import dynamic from "next/dynamic";

const GitHubCalendar = dynamic(
  () => import("react-github-calendar").then((mod) => mod.GitHubCalendar),
  { ssr: false },
);

interface GitHubActivityGraphProps {
  username?: string;
}

export default function GitHubActivityGraph({
  username = "yuyyuyswallowtail",
}: GitHubActivityGraphProps) {
  return (
    <div className="overflow-x-auto py-6">
      <GitHubCalendar
        username={username}
        blockSize={15}
        blockMargin={5}
        fontSize={14}
        showWeekdayLabels={true}
      />
    </div>
  );
}
