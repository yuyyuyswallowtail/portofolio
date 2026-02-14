import { Repo } from "@/types/github";

export async function getRepos(): Promise<Repo[]> {
  const res = await fetch(
    `https://api.github.com/users/${process.env.GITHUB_USERNAME}/repos?sort=updated`,
    {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      },
      next: { revalidate: 3600 },
    },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch repos");
  }

  return res.json();
}
