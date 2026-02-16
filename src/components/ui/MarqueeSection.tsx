"use client";

import Marquee from "react-fast-marquee";

interface MarqueeSectionProps {
  title: string;
  direction?: "left" | "right";
}

export default function MarqueeSection({
  title,
  direction = "left",
}: MarqueeSectionProps) {
  return (
    <div className="py-8 lg:py-12 border-y border-foreground bg-background">
      <Marquee direction={direction} speed={40} gradient={false}>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mx-12 uppercase tracking-widest overflow-hidden">
          {title}
        </h2>
      </Marquee>
    </div>
  );
}
