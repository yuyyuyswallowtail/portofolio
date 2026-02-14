"use client";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
  Menu,
  User,
  GraduationCap,
  Briefcase,
  Award,
  Code,
  Folder,
  Mail,
} from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const sections = [
  { id: "about", label: "About", icon: User },
  { id: "education", label: "Education", icon: GraduationCap },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "certifications", label: "Certifications", icon: Award },
  { id: "skills", label: "Skills", icon: Code },
  { id: "projects", label: "Projects", icon: Folder },
  { id: "contact", label: "Contact", icon: Mail },
];

export default function Sidebar() {
  const [active, setActive] = useState("about");

  // Auto detect active section while scrolling
  useEffect(() => {
    const handleScroll = () => {
      sections.forEach((section) => {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActive(section.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <Menu size={22} />
        </Button>
      </SheetTrigger>

      <SheetContent side="left" className="w-72 flex flex-col justify-between">
        {/* Header */}
        <div>
          <SheetTitle className="text-center py-4">Portofolio</SheetTitle>
          <SheetDescription></SheetDescription>
          <div className="h-px bg-border mb-6" />
          <nav className="flex flex-col gap-2 px-4">
            {sections.map((section) => {
              const Icon = section.icon;
              const isActive = active === section.id;

              return (
                <SheetClose asChild key={section.id}>
                  <motion.button
                    whileHover={{ x: 5 }}
                    onClick={() => scrollTo(section.id)}
                    className={`cursor-pointer flex items-center gap-3 px-4 py-2 rounded-lg text-sm transition ${
                      isActive
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-muted border-2"
                    }`}
                  >
                    <Icon size={16} />
                    {section.label}
                  </motion.button>
                </SheetClose>
              );
            })}
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
}
