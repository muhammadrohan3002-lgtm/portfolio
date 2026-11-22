import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { BackgroundBeams } from "@/components/ui/BackgroundBeams";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rohan Ali | Full-Stack Developer & CSE Student",
  description:
    "Official portfolio of Rohan Ali, Computer Science & Engineering student at City University and aspiring Full-Stack Developer building modern web and mobile applications with Next.js, Flutter, and MongoDB.",
  keywords: [
    "Rohan Ali",
    "Full-Stack Developer",
    "CSE Student",
    "City University",
    "Next.js",
    "React",
    "Flutter",
    "Dart",
    "MongoDB",
    "Portfolio",
    "Software Engineer",
  ],
  authors: [{ name: "Rohan Ali" }],
  creator: "Rohan Ali",
  openGraph: {
    title: "Rohan Ali | Full-Stack Developer & CSE Student",
    description:
      "Building Digital Experiences That Make an Impact. Explore featured projects, technical capabilities, and academic foundation.",
    url: "https://rohanali.dev",
    siteName: "Rohan Ali Developer Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rohan Ali | Full-Stack Developer & CSE Student",
    description:
      "Building Digital Experiences That Make an Impact. Explore featured projects, technical capabilities, and academic foundation.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#060709" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-violet-500/30 selection:text-foreground`}
    >
      <body className="min-h-screen flex flex-col bg-background text-foreground transition-colors duration-300 relative">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          <CustomCursor />
          <BackgroundBeams />
          <div className="relative z-10 flex flex-col min-h-screen">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
