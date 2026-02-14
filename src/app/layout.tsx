import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/layout/ScrollToTop";

export const metadata = {
  title: "Bintang Mesir | Software Engineer",
  description:
    "Portfolio of Bintang Mesir, Software Engineer specializing in modern web development using React, TypeScript, and scalable backend systems.",
  keywords: [
    "Bintang Mesir",
    "Software Engineer",
    "React Developer",
    "Next.js Portfolio",
    "TypeScript Developer",
  ],
  authors: [{ name: "Bintang Mesir" }],
  openGraph: {
    title: "Bintang Mesir | Software Engineer",
    description:
      "Modern portfolio showcasing projects, GitHub activity, and professional experience.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-muted text-foreground">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          {children}
          <Footer />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
