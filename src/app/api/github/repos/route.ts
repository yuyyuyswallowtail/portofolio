import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch(
      `https://api.github.com/users/${process.env.GITHUB_USERNAME}/repos?sort=updated`,
      {
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        },
        next: { revalidate: 3600 },
      },
    );

    const data = await res.json();

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch repositories" },
      { status: 500 },
    );
  }
}
