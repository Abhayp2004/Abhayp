"use client";

import { useEffect } from "react";

export default function StructuredData() {
  useEffect(() => {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://abhayp.tech";
    
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Abhay Parekh",
      jobTitle: "Full Stack Developer",
      description: "Full Stack Developer specializing in modern web development, React, Next.js, Node.js, and AI/ML solutions",
      url: baseUrl,
      image: `${baseUrl}/profile.jpeg`,
      sameAs: [
        "https://github.com/Abhayp2004",
        "https://www.linkedin.com/in/abhay-parekh-80aa5a298/",
        "https://x.com/a_parekh55",
      ],
      knowsAbout: [
        "Web Development",
        "React",
        "Next.js",
        "Node.js",
        "JavaScript",
        "TypeScript",
        "Python",
        "Machine Learning",
        "AI/ML",
        "Full Stack Development",
      ],
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(structuredData);
    script.id = "structured-data-person";
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById("structured-data-person");
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return null;
}

