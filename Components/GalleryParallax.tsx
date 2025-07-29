'use client'

import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const GalleryParallax = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const imagesRef = useRef<(HTMLDivElement | null)[]>([])

  const images = [
    { src: '/01.jpg', alt: 'Fotografie 1', category: 'Portrait' },
    { src: '/02.jpg', alt: 'Fotografie 2', category: 'Portrait' },
    { src: '/03.jpg', alt: 'Fotografie 3', category: 'Portrait' },
    { src: '/04.jpg', alt: 'Fotografie 4', category: 'Portrait' },
    { src: '/05.jpg', alt: 'Fotografie 5', category: 'Portrait' },
    { src: '/06.jpg', alt: 'Fotografie 6', category: 'Portrait' }
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(sectionRef.current,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      )

      imagesRef.current.forEach((imageRef, index) => {
        if (!imageRef) return

        gsap.fromTo(imageRef,
          { 
            opacity: 0, 
            y: 100,
            scale: 0.8
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            delay: index * 0.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: imageRef,
              start: "top 85%",
              end: "bottom 15%",
              toggleActions: "play none none reverse"
            }
          }
        )

        gsap.to(imageRef,
          {
            yPercent: -20,
            ease: "none",
            scrollTrigger: {
              trigger: imageRef,
              start: "top bottom",
              end: "bottom top",
              scrub: 1
            }
          }
        )

        imageRef.addEventListener('mouseenter', () => {
          gsap.to(imageRef, {
            scale: 1.05,
            duration: 0.3,
            ease: "power2.out"
          })
        })

        imageRef.addEventListener('mouseleave', () => {
          gsap.to(imageRef, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out"
          })
        })
      })

      gsap.utils.toArray('.category-label').forEach((label: any, index) => {
        gsap.fromTo(label,
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            delay: index * 0.1 + 0.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: label,
              start: "top 90%",
              toggleActions: "play none none reverse"
            }
          }
        )
      })

    }, sectionRef)

    return () => {
      ctx.revert()
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 font-primary"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="bg-gradient-to-r from-amber-700 to-amber-900 bg-clip-text text-transparent">
              Portfolio
            </span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto font-secondary"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Entdecken Sie eine Auswahl meiner besten Portraits - Shootings für Kinder, Teens und Erwachsene
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div
              key={index}
              ref={(el) => { imagesRef.current[index] = el }}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="absolute bottom-4 left-4 category-label">
                  <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-medium font-secondary">
                    {image.category}
                  </span>
                </div>

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="text-center text-white">
                    <div className="text-2xl font-bold mb-2 font-primary">{image.alt}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default GalleryParallax
