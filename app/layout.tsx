import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { LenisProvider } from "@/components/providers";

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
  title: {
    default: "Abhay Parekh | Full-Stack Developer",
    template: "%s | Abhay Parekh",
  },
  description:
    "Portfolio website of Abhay Parekh — full-stack developer crafting modern web experiences.",
  metadataBase: new URL("https://abhayp.tech"),
  openGraph: {
    title: "Abhay Parekh | Full-Stack Developer",
    description:
      "Portfolio website of Abhay Parekh — full-stack developer crafting modern web experiences.",
    url: "https://abhayp.tech",
    siteName: "Abhay Parekh Portfolio",
    images: [
      {
        url: "/og-image.jpg", // add this to /public
        width: 1200,
        height: 630,
        alt: "Abhay Parekh Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhay Parekh | Full-Stack Developer",
    description:
      "Portfolio website of Abhay Parekh — full-stack developer crafting modern web experiences.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/logo.png", // your favicon or logo
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
        {/* Structured data for Google (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Abhay Parekh",
              url: "https://abhayp.tech",
              jobTitle: "Full-Stack Developer",
              sameAs: [
                "https://www.linkedin.com/in/abhay-parekh-80aa5a298",
                "https://x.com/abhxy03",
                "https://github.com/Abhayp2004",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
