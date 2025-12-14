import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { LenisProvider, GsapProvider } from "@/components/providers";
import { FloatingDockDemo } from "@/components/magicui/Dock";
import StructuredData from "@/components/StructuredData";
import { motion } from "framer-motion";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://abhayp.tech"),
  title: {
    default: "Abhay Parekh - Full Stack Developer & AI/ML Enthusiast",
    template: "%s | Abhay Parekh",
  },
  description: "Portfolio of Abhay Parekh - Full Stack Developer specializing in modern web development, React, Next.js, Node.js, and AI/ML solutions. Explore my projects and technical expertise.",
  keywords: [
    "Abhay Parekh",
    "Full Stack Developer",
    "Web Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "AI/ML Developer",
    "Frontend Developer",
    "Backend Developer",
    "Portfolio",
    "JavaScript",
    "TypeScript",
    "Python",
    "Machine Learning",
  ],
  authors: [{ name: "Abhay Parekh" }],
  creator: "Abhay Parekh",
  publisher: "Abhay Parekh",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://abhayp.tech",
    siteName: "Abhay Parekh Portfolio",
    title: "Abhay Parekh - Full Stack Developer & AI/ML Enthusiast",
    description: "Portfolio of Abhay Parekh - Full Stack Developer specializing in modern web development, React, Next.js, Node.js, and AI/ML solutions.",
    images: [
      {
        url: "/profile.jpeg",
        width: 1200,
        height: 630,
        alt: "Abhay Parekh - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhay Parekh - Full Stack Developer & AI/ML Enthusiast",
    description: "Portfolio of Abhay Parekh - Full Stack Developer specializing in modern web development and AI/ML solutions.",
    images: ["/profile.jpeg"],
    creator: "@a_parekh55",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes here when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL || "https://abhayp.tech",
  },
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LenisProvider>
          <GsapProvider />
          <StructuredData />
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, ease: "easeOut" }}>
            {children}
          </motion.div>
          <div className="relative z-50">
            <FloatingDockDemo />
          </div>
        </LenisProvider>
      </body>
    </html>
  );
}
