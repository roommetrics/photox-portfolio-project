'use client'

import React, { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import AboutHero from '../Components/AboutHero'
import GalleryParallax from '../Components/GalleryParallax'
import ServicesContact from '../Components/ServicesContact'
import Link from 'next/link'

const Page = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isClient, setIsClient] = useState(false)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  // Client-side detection
  useEffect(() => {
    setIsClient(true)
  }, [])

  const splitText = (text: string) => {
    return text.split('').map((char, index) => (
      <motion.span
        key={index}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          delay: index * 0.03,
          ease: "easeOut"
        }}
        className="inline-block"
      >
        {char === ' ' ? '\u00A0' : char}
      </motion.span>
    ))
  }

  // Generate particles only on client side
  const generateParticles = () => {
    if (!isClient) return []
    
    return [...Array(8)].map((_, i) => ({
      id: i,
      x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
      y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
      delay: Math.random() * 3
    }))
  }

  return (
    <div className="min-h-screen" ref={containerRef}>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/hero-image.webp')",
            y
          }}
        />
        
        <motion.div 
          className="absolute inset-0 bg-black/30"
          style={{ opacity }}
        />
        
        <motion.div 
          className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
        />
        
        {/* Floating Particles - Only render on client */}
        {isClient && (
          <div className="absolute inset-0 overflow-hidden">
            {generateParticles().map((particle) => (
              <motion.div
                key={particle.id}
                className="absolute w-1 h-1 bg-amber-300/20 rounded-full"
                initial={{
                  x: particle.x,
                  y: particle.y,
                  opacity: 0
                }}
                animate={{
                  x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
                  y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration: Math.random() * 8 + 8,
                  repeat: Infinity,
                  ease: "linear",
                  delay: particle.delay
                }}
              />
            ))}
          </div>
        )}

        {/* Content */}
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          {/* Main Heading with Optimized Split Animation */}
          <motion.div
            className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight font-primary"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="mb-2">
              {splitText("Momente")}
            </div>
            <motion.div
              className="bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
            >
              {splitText("für die Ewigkeit")}
            </motion.div>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            className="text-lg sm:text-xl lg:text-2xl mb-8 text-gray-100 font-light max-w-2xl mx-auto leading-relaxed font-secondary"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2, ease: "easeOut" }}
          >
            Professionelle Fotografie, die Ihre schönsten Erinnerungen in atemberaubende Kunstwerke verwandelt
          </motion.p>

          {/* CTA Buttons with Simplified Animation */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.5, ease: "easeOut" }}
          >
            <Link href='/contact/#termin'>
            <motion.button
              className="border-2 cursor-pointer border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-secondary"
              whileHover={{
                scale: 1.03,
                y: -2
              }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 2.9 }}
            >
              Kontakt aufnehmen
            </motion.button>
            </Link>
          </motion.div>

          {/* Stats with Simplified Animation */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 3.2, ease: "easeOut" }}
          >
            {[
              { number: 500, label: "Fotoshootings", suffix: "+" },
              { number: 50, label: "Zufriedene Kunden", suffix: "+" },
              { number: 5, label: "Jahre Erfahrung", suffix: "" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: 3.5 + index * 0.1,
                  ease: "easeOut"
                }}
              >
                <motion.div
                  className="text-3xl sm:text-4xl font-bold mb-2 bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent font-primary"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: 3.8 + index * 0.1
                  }}
                >
                  {stat.number}{stat.suffix}
                </motion.div>
                <div className="text-gray-200 font-medium font-secondary">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Simplified Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 4.5 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.div
              className="w-1 h-3 bg-white rounded-full mt-2"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>

        {/* Simplified Floating Elements */}
        <motion.div
          className="absolute top-20 right-10 hidden lg:block"
          animate={{
            y: [0, -15, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-20 left-10 hidden lg:block"
          animate={{
            y: [0, 15, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        >
          <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <AboutHero />

      {/* Gallery Parallax Section */}
      <GalleryParallax />

      {/* Services & Contact Section */}
      <ServicesContact />
    </div>
  )
}

export default Page