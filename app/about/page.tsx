'use client'

import React from 'react'
import { motion } from 'framer-motion'

const AboutPage = () => {
  const portfolioImages = [
    { src: '/01.jpg', alt: 'Portrait-Fotografie', category: 'Portrait' },
    { src: '/02.jpg', alt: 'Event-Fotografie', category: 'Event' },
    { src: '/03.jpg', alt: 'Landschafts-Fotografie', category: 'Landschaft' },
    { src: '/04.jpg', alt: 'Business-Fotografie', category: 'Business' },
    { src: '/05.jpg', alt: 'Hochzeits-Fotografie', category: 'Hochzeit' },
    { src: '/06.jpg', alt: 'Kreative Fotografie', category: 'Kreativ' }
  ]

  const testimonials = [
    {
      name: 'Sarah & Michael',
      type: 'Hochzeitspaar',
      text: 'Unsere Hochzeitsfotos sind einfach magisch! Jeder Moment wurde perfekt eingefangen. Wir sind überglücklich mit dem Ergebnis.',
      rating: 5
    },
    {
      name: 'Lisa Weber',
      type: 'Business-Portrait',
      text: 'Professionell, kreativ und sehr geduldig. Das Business-Portrait hat meine Erwartungen übertroffen.',
      rating: 5
    },
    {
      name: 'Familie Müller',
      type: 'Familien-Shooting',
      text: 'Ein wundervolles Erlebnis! Die Kinder hatten Spaß und die Fotos sind natürlich und authentisch.',
      rating: 5
    }
  ]

  const skills = [
    { name: 'Portrait-Fotografie', level: 95 },
    { name: 'Event-Fotografie', level: 90 },
    { name: 'Landschafts-Fotografie', level: 85 },
    { name: 'Business-Fotografie', level: 88 },
    { name: 'Post-Production', level: 92 },
    { name: 'Kundenkommunikation', level: 96 }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-amber-50 to-amber-100">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1
                className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 font-primary"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="bg-gradient-to-r from-amber-700 to-amber-900 bg-clip-text text-transparent">
                  Über mich
                </span>
              </motion.h1>
              
              <motion.p
                className="text-xl text-gray-700 mb-8 font-secondary leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Hallo! Ich bin ein leidenschaftlicher Fotograf mit über 5 Jahren Erfahrung in der professionellen Fotografie. 
                Mein Ziel ist es, authentische Momente einzufangen und unvergessliche Erinnerungen zu schaffen.
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
                  <span className="text-amber-700 font-semibold font-secondary">500+ Shootings</span>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
                  <span className="text-amber-700 font-semibold font-secondary">5 Jahre Erfahrung</span>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
                  <span className="text-amber-700 font-semibold font-secondary">50+ Zufriedene Kunden</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/about.jpg"
                  alt="Fotograf bei der Arbeit"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center shadow-lg"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 10, 0]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <svg className="w-8 h-8 text-amber-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* My Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 font-primary">
              <span className="bg-gradient-to-r from-amber-700 to-amber-900 bg-clip-text text-transparent">
                Meine Geschichte
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-secondary">
              Von der ersten Kamera bis zur professionellen Fotografie - hier ist meine Reise
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-amber-600 font-bold font-primary">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 font-primary text-gray-800">Die Anfänge</h3>
                    <p className="text-gray-600 font-secondary leading-relaxed">
                      Alles begann mit einer einfachen Kamera und der Faszination, Momente für immer festzuhalten. 
                      Was als Hobby begann, entwickelte sich schnell zu einer Leidenschaft.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-amber-600 font-bold font-primary">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 font-primary text-gray-800">Professionelle Ausbildung</h3>
                    <p className="text-gray-600 font-secondary leading-relaxed">
                      Intensive Ausbildung in verschiedenen Bereichen der Fotografie, von Portraits über Events 
                      bis hin zur Landschaftsfotografie. Jede Technik wurde perfektioniert.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-amber-600 font-bold font-primary">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 font-primary text-gray-800">Heute</h3>
                    <p className="text-gray-600 font-secondary leading-relaxed">
                      Über 500 erfolgreiche Shootings und unzählige glückliche Kunden später, 
                      ist die Fotografie nicht nur mein Beruf, sondern meine Berufung.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="aspect-square rounded-xl overflow-hidden shadow-lg">
                    <img src="/01.jpg" alt="Arbeitsprozess 1" className="w-full h-full object-cover" />
                  </div>
                  <div className="aspect-square rounded-xl overflow-hidden shadow-lg">
                    <img src="/02.jpg" alt="Arbeitsprozess 2" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="aspect-square rounded-xl overflow-hidden shadow-lg">
                    <img src="/03.jpg" alt="Arbeitsprozess 3" className="w-full h-full object-cover" />
                  </div>
                  <div className="aspect-square rounded-xl overflow-hidden shadow-lg">
                    <img src="/04.jpg" alt="Arbeitsprozess 4" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 font-primary">
              <span className="bg-gradient-to-r from-amber-700 to-amber-900 bg-clip-text text-transparent">
                Meine Fähigkeiten
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-secondary">
              Jahrelange Erfahrung in verschiedenen Bereichen der Fotografie
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg"
              >
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-lg font-semibold font-primary text-gray-800">{skill.name}</h3>
                  <span className="text-amber-600 font-semibold font-secondary">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <motion.div
                    className="bg-gradient-to-r from-amber-500 to-amber-700 h-2 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 font-primary">
              <span className="bg-gradient-to-r from-amber-700 to-amber-900 bg-clip-text text-transparent">
                Portfolio-Ausschnitt
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-secondary">
              Eine Auswahl meiner besten Arbeiten aus verschiedenen Bereichen
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {portfolioImages.map((image, index) => (
              <motion.div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="absolute bottom-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-medium font-secondary">
                      {image.category}
                    </span>
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-center text-white">
                      <div className="text-2xl font-bold mb-2 font-primary">{image.alt}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 font-primary">
              <span className="bg-gradient-to-r from-amber-700 to-amber-900 bg-clip-text text-transparent">
                Was meine Kunden sagen
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-secondary">
              Authentische Bewertungen von zufriedenen Kunden
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.02,
                  y: -5,
                  transition: { duration: 0.2 }
                }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
                
                <p className="text-gray-600 mb-6 font-secondary leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                
                <div>
                  <h4 className="font-semibold text-gray-800 font-primary">{testimonial.name}</h4>
                  <p className="text-amber-600 font-secondary">{testimonial.type}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage