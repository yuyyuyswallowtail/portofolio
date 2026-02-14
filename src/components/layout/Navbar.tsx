"use client";

import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import Sidebar from "./Sidebar";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const m = () => {
      setMounted(true);
    };
    m();
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur bg-background/80 border-primary border-b-2">
      <div className="container mx-auto flex items-center justify-between h-16 px-4 border-foreground">
        <Sidebar />

        <h1 className="font-bold text-lg tracking-wide">
          {process.env.NEXT_PUBLIC_OWNER_NAME}
        </h1>

        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
        </Button>
      </div>
    </header>
  );
}
