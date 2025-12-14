"use client"
import Hero from "@/components/Hero";
import '../app/globals.css';
import Skills from "@/components/Tech_Stack";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="bg-black text-white flex flex-col" role="main" aria-label="Main content">
      <Hero/>
      <Projects/>
      <Skills/>
      <Contact />
    </main>
  );
}
