"use client"
import { useEffect, useRef } from 'react'
import '../app/globals.css';
import { MeteorDemo } from './magicui/meteors';
import { Spotlight } from './ui/spotlight';
import { TypewriterEffectSmoothDemo } from './magicui/TypeWriter';

const Hero = () => {
  const textRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let cleanup: (() => void) | undefined
    ;(async () => {
      const gsapModule = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      const gsap = (gsapModule as any).gsap || gsapModule.default || gsapModule
      gsap.registerPlugin(ScrollTrigger)

      const tl = gsap.timeline()
      if (imageRef.current) {
        tl.from(imageRef.current, { opacity: 0, scale: 0.8, y: 20, duration: 0.8, ease: 'power3.out' })
      }
      if (textRef.current) {
        tl.from(textRef.current, { opacity: 0, y: 20, duration: 0.6, ease: 'power3.out' }, '-=0.4')
      }

      if (textRef.current) {
        gsap.from(textRef.current.querySelectorAll('p, div'), {
          opacity: 0,
          y: 24,
          duration: 0.6,
          ease: 'power3.out',
          stagger: 0.06,
          scrollTrigger: {
            trigger: textRef.current,
            start: 'top 85%',
          },
        })
      }

      cleanup = () => {
        tl.kill()
        ScrollTrigger.getAll().forEach((st) => st.kill())
      }
    })()

    return () => {
      if (cleanup) cleanup()
    }
  }, [])
  return (
    <section id='hero' className="min-h-screen w-full px-4 md:px-16 lg:px-72 py-10 md:py-32" aria-label="Hero section">
      <div className=''>
        <Spotlight className='top-16 left-10 md:left-32 md:top-20 h-screen' fill="white"/>
      </div>
      
      <div className="flex flex-col items-center justify-start">
        <MeteorDemo />
      </div>
      <div className="flex flex-col-reverse md:flex-row justify-center md:gap-10 sm:py-4 items-center mt-8 md:mt-0" data-reveal="up">
        <div ref={textRef} className="text-center md:text-left md:px-10 md:w-1/2">
          <h1 className="sr-only">Abhay Parekh - Full Stack Developer</h1>
          <p className="text-sm px-2 sm:px-0 font-normal text-white dark:text-white pl-[20px] ml-[-20px]">
            Hi, I'm <strong className="text-blue-400">Abhay Parekh</strong>, a Full Stack Developer. I design and code clean and modern websites and explore AI/ML to build intelligent, data-driven solutions. I'm focused on improving my development skills and exploring new technologies.
          </p>
        </div>
        <div ref={imageRef} className="mb-6 md:mb-0 ml-[20px]">
          <img
            className="rounded-full h-32 w-32 md:h-40 md:w-40 lg:h-44 lg:w-44 object-cover border-2 border-blue-500 hover:border-blue-400 transition-colors duration-300"
            src="/profile.jpeg"
            alt="Abhay Parekh - Full Stack Developer and AI/ML Enthusiast"
            width={176}
            height={176}
            loading="eager"
            fetchPriority="high"
          />
        </div>
      </div>

      <div>
        <TypewriterEffectSmoothDemo/>
      </div>
    </section>
  )
}

export default Hero
