"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from "framer-motion"
import {
  SiNextdotjs,
  SiTailwindcss,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiVercel,
  SiTypescript,
  SiPython,
  SiFigma,
  SiScikitlearn,
  SiPandas,
  SiMysql,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiPhp
} from "react-icons/si"
import { ExternalLink, Code, Github } from "lucide-react"

interface Project {
  title: string
  imageUrl: string
  github: string
  techStack: string[]
}

// Add this new component for magnetic effect
const MagneticButton = ({ children, className, ...props }: any) => {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e
    const { left, top, width, height } = ref.current!.getBoundingClientRect()
    const centerX = left + width / 2
    const centerY = top + height / 2
    const distance = 50 // Maximum distance for the magnetic effect

    x.set((clientX - centerX) / distance)
    y.set((clientY - centerY) / distance)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  const springConfig = { damping: 15, stiffness: 150 }
  const springX = useSpring(x, springConfig)
  const springY = useSpring(y, springConfig)

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
      style={{
        x: springX,
        y: springY,
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

// Add this new component for particle effect
const ParticleEffect = ({ isHovered }: { isHovered: boolean }) => {
  const particles = Array.from({ length: 20 })
  
  return (
    <AnimatePresence>
      {isHovered && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {particles.map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-500 rounded-full"
              initial={{
                x: "50%",
                y: "50%",
                scale: 0,
                opacity: 0,
              }}
              animate={{
                x: `${Math.random() * 100}%`,
                y: `${Math.random() * 100}%`,
                scale: [0, 1, 0],
                opacity: [0, 0.8, 0],
              }}
              exit={{
                scale: 0,
                opacity: 0,
              }}
              transition={{
                duration: 1.5,
                delay: i * 0.05,
                ease: "easeOut",
              }}
            />
          ))}
        </div>
      )}
    </AnimatePresence>
  )
}

// Remove CustomCursor component and keep only SpotlightEffect
const SpotlightEffect = ({ children }: { children: React.ReactNode }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
    }
  }

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden group"
    >
      <div
        className="pointer-events-none absolute -inset-px z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.1), transparent 40%)`,
        }}
      />
      {children}
    </div>
  )
}

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  // Add mouse position tracking for parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth - 0.5,
        y: e.clientY / window.innerHeight - 0.5,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const projects: Project[] = [
    {
      title: "Maid Ahead",
      imageUrl: "/maid-ahead.png",
      github: "https://github.com/Abhayp2004/Maid-Ahead",
      techStack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    },
    {
      title: "Movie Land",
      imageUrl: "/movie-land.png",
      github: "https://github.com/Abhayp2004/Movie-Land",
      techStack: ["HTML", "CSS", "React", "TypeScript"],
    },
    {
      title: "Sleep Quality Prediction",
      imageUrl: "/sleep-quality.png",
      github: "https://github.com/Abhayp2004/Sleep-Quality-Prediction",
      techStack: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
    },
    {
      title: "Travel Journal",
      imageUrl: "/travel.png",
      github: "https://github.com/Abhayp2004/Travel-Journal",
      techStack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    },
    {
      title: "Cryptonova",
      imageUrl: "/cryptonova.png",
      github: "https://github.com/Abhayp2004/src/images/Cryptonova",
      techStack: ["HTML", "CSS", "JavaScript", "React","Nodejs", "MongoDB"],
    },
  ]

  const getTechIcon = (tech: string) => {
    switch (tech) {
      case "Next.js":
        return <SiNextdotjs className="text-white" />
      case "React":
        return <SiReact className="text-cyan-400" />
      case "Node.js":
        return <SiNodedotjs className="text-green-500" />
      case "Express":
        return <SiExpress className="text-white" />
      case "MongoDB":
        return <SiMongodb className="text-green-700" />
      case "Tailwind CSS":
        return <SiTailwindcss className="text-blue-500" />
      case "TypeScript":
        return <SiTypescript className="text-blue-600" />
      case "Python":
        return <SiPython className="text-blue-500" />
      case "Figma":
        return <SiFigma className="text-pink-500" />
      case "Scikit-learn":
        return <SiScikitlearn className="text-red-500" />
      case "Pandas":
        return <SiPandas className="text-blue-500" />
      case "MySQL":
        return <SiMysql className="text-blue-600" />
      case "HTML":
        return <SiHtml5 className="text-orange-500" />
      case "CSS":
        return <SiCss3 className="text-blue-400" />
      case "JavaScript":
        return <SiJavascript className="text-yellow-400" />
      case "PHP":
        return <SiPhp className="text-purple-500" />
      case "Matplotlib":
        return <SiPython className="text-blue-500" />
      default:
        return <SiVercel className="text-white" />
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const projectCardVariants = {
    hidden: { 
      opacity: 0,
      y: 20,
      rotateX: 10,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      }
    },
    hover: {
      y: -10,
      rotateX: 5,
      rotateY: 5,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      }
    }
  }

  const techStackVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.3
      }
    }
  }

  return (
    <section id="projects" className="py-20 bg-black text-white w-full perspective-1000">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Section Header with enhanced effects */}
        <SpotlightEffect>
        <motion.div
            className="text-center mb-16 relative"
            style={{
              rotateX: useTransform(useMotionValue(mousePosition.y), [-0.5, 0.5], [5, -5]),
              rotateY: useTransform(useMotionValue(mousePosition.x), [-0.5, 0.5], [-5, 5]),
            }}
          >
            <motion.h2 
              className="text-3xl md:text-5xl text-white lg:text-6xl font-bold relative inline-block"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              My <span className="text-blue-500 relative">
                Projects
                <motion.span
                  className="absolute -inset-1 bg-blue-500/20 blur-xl rounded-full"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </span>
            <motion.div 
              className="absolute -bottom-2 left-0 right-0 h-1 bg-blue-500 rounded-full"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
            />
            </motion.h2>
            <motion.p 
              className="text-gray-400 max-w-lg mx-auto text-sm md:text-base mt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              A showcase of my web development journey, featuring full-stack applications and innovative solutions.
            </motion.p>
        </motion.div>
        </SpotlightEffect>

        {/* Projects Grid with enhanced effects */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <SpotlightEffect key={index}>
              <motion.div
                variants={projectCardVariants}
                whileHover="hover"
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="group relative transform-gpu"
                style={{
                  rotateX: useTransform(useMotionValue(mousePosition.y), [-0.5, 0.5], [5, -5]),
                  rotateY: useTransform(useMotionValue(mousePosition.x), [-0.5, 0.5], [-5, 5]),
                }}
              >
                <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800/50 h-full transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 relative">
                  {/* Particle Effect */}
                  <ParticleEffect isHovered={hoveredIndex === index} />

                  {/* Project Image with enhanced effects */}
                <div className="relative aspect-video overflow-hidden">
                    <motion.img
                      src={project.imageUrl}
                    alt={project.title}
                      className="object-cover w-full h-full"
                      whileHover={{ 
                        scale: 1.05,
                        rotateY: 5,
                        filter: "brightness(1.1)",
                      }}
                      transition={{ duration: 0.3 }}
                    loading="lazy"
                  />

                    {/* Enhanced Gradient Overlay */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-80"
                      initial={{ opacity: 0.8 }}
                      whileHover={{ 
                        opacity: 0.9,
                        background: "linear-gradient(to top, rgba(17, 24, 39, 0.9), rgba(17, 24, 39, 0.5), transparent)",
                      }}
                    />

                    {/* Action buttons with magnetic effect and spotlight */}
                    <motion.div 
                      className="absolute bottom-4 right-4 flex gap-2"
                      initial={{ opacity: 0, y: 10 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <MagneticButton>
                        <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                          className="w-10 h-10 bg-gray-800/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-blue-500 transition-colors relative overflow-hidden group"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                      aria-label={`View code for ${project.title}`}
                    >
                          <motion.span
                            className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity"
                            initial={{ x: "-100%" }}
                            whileHover={{ x: "100%" }}
                            transition={{ duration: 1, ease: "easeInOut" }}
                          />
                          <Github className="w-5 h-5 relative z-10" />
                        </motion.a>
                      </MagneticButton>
                    </motion.div>
                </div>

                  {/* Content with enhanced animations */}
                <div className="p-5">
                    <div className="flex justify-between items-start mb-3">
                      <motion.h3 
                        className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors relative"
                        whileHover={{ 
                          x: 5,
                          textShadow: "0 0 8px rgba(59, 130, 246, 0.5)",
                        }}
                      >
                      {project.title}
                        <motion.span
                          className="absolute -inset-x-2 -inset-y-1 bg-blue-500/10 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity"
                          initial={{ scale: 0.8 }}
                          whileHover={{ scale: 1 }}
                        />
                      </motion.h3>
                      <MagneticButton>
                        <motion.a
                          href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                          className="text-gray-500 hover:text-blue-400 transition-colors relative"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          whileTap={{ scale: 0.95 }}
                          aria-label={`GitHub link for ${project.title}`}
                    >
                      <ExternalLink className="w-4 h-4" />
                        </motion.a>
                      </MagneticButton>
                  </div>

                    <motion.div 
                      className="flex flex-wrap gap-1.5"
                      variants={techStackVariants}
                    >
                    {project.techStack.map((tech, i) => (
                        <MagneticButton key={i}>
                          <motion.div
                            className="flex items-center gap-1 bg-gray-800/50 px-2 py-0.5 rounded-md text-xs font-medium text-gray-300 relative overflow-hidden group"
                            whileHover={{ 
                              scale: 1.05,
                              backgroundColor: "rgba(59, 130, 246, 0.1)",
                              color: "rgb(59, 130, 246)",
                              boxShadow: "0 0 10px rgba(59, 130, 246, 0.3)",
                            }}
                            transition={{ duration: 0.2 }}
                          >
                            <motion.span
                              className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity"
                              initial={{ x: "-100%" }}
                              whileHover={{ x: "100%" }}
                              transition={{ duration: 1, ease: "easeInOut" }}
                            />
                            <motion.span 
                              className="text-base relative z-10"
                              whileHover={{ 
                                rotate: 360,
                                scale: 1.2,
                              }}
                              transition={{ duration: 0.5 }}
                            >
                              {getTechIcon(tech)}
                            </motion.span>
                            <span className="relative z-10">{tech}</span>
                          </motion.div>
                        </MagneticButton>
                      ))}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </SpotlightEffect>
          ))}
        </motion.div>

        {/* View all projects button with enhanced effects */}
        <motion.div 
          className="mt-14 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <SpotlightEffect>
            <MagneticButton>
              <motion.a
                href="https://github.com/Abhayp2004"
            target="_blank"
            rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-all shadow-md hover:shadow-lg shadow-blue-500/20 hover:shadow-blue-600/30 text-sm relative overflow-hidden group"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                />
                <span className="relative z-10">View All Projects</span>
                <motion.div
                  className="relative z-10"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
            <ExternalLink className="w-4 h-4" />
                </motion.div>
              </motion.a>
            </MagneticButton>
          </SpotlightEffect>
        </motion.div>
      </div>
    </section>
  )
}
