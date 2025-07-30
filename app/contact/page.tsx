'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'

const ContactPage = () => {
  const [selectedDate, setSelectedDate] = useState<string>('')
  const [selectedTime, setSelectedTime] = useState<string>('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Hier würde die Formular-Verarbeitung stattfinden
    console.log('Form submitted:', { ...formData, selectedDate, selectedTime })
    alert('Vielen Dank für Ihre Nachricht! Ich werde mich schnellstmöglich bei Ihnen melden.')
  }

  // Verfügbare Zeiten (Mo-Fr)
  const availableTimes = [
    '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'
  ]

  // Verfügbare Tage (Mo-Fr)
  const getAvailableDates = () => {
    const dates = []
    const today = new Date()
    let currentDate = new Date(today)
    
    // Nächste 4 Wochen
    for (let i = 0; i < 28; i++) {
      currentDate = new Date(today)
      currentDate.setDate(today.getDate() + i)
      
      // Nur Montag bis Freitag (0 = Sonntag, 1 = Montag, ..., 6 = Samstag)
      if (currentDate.getDay() >= 1 && currentDate.getDay() <= 5) {
        dates.push({
          date: currentDate.toISOString().split('T')[0],
          day: currentDate.toLocaleDateString('de-DE', { weekday: 'short' }),
          dayNumber: currentDate.getDate(),
          month: currentDate.toLocaleDateString('de-DE', { month: 'short' })
        })
      }
    }
    return dates
  }

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: 'Telefon',
      value: '+43 123 456 789',
      link: 'tel:+43123456789'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'E-Mail',
      value: 'info@photox.at',
      link: 'mailto:info@photox.at'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Studio',
      value: 'Wien, Österreich ',
      link: '#'
    }
  ]

  const services = [
    'Portrait-Fotografie',
    'Event-Fotografie', 
    'Business-Fotografie',
    'Hochzeitsfotografie',
    'Familien-Shooting',
    'Sonstiges'
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
          <div className="text-center">
            <motion.h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 font-primary"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="bg-gradient-to-r from-amber-700 to-amber-900 bg-clip-text text-transparent">
                Kontakt
              </span>
            </motion.h1>
            
            <motion.p
              className="text-xl sm:text-2xl text-gray-700 mb-8 font-secondary leading-relaxed max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Lassen Sie uns gemeinsam Ihr perfektes Fotoshooting planen. 
              Kontaktieren Sie mich für ein unverbindliches Gespräch und buchen Sie Ihren Wunschtermin.
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
                <span className="text-amber-700 font-semibold font-secondary">Mo-Fr verfügbar</span>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
                <span className="text-amber-700 font-semibold font-secondary">Schnelle Antwort</span>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
                <span className="text-amber-700 font-semibold font-secondary">Unverbindlich</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form & Calendar Section */}
      <section id='termin' className="py-20 bg-white">
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
                Termin buchen
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-secondary">
              Wählen Sie Ihren Wunschtermin und kontaktieren Sie mich für Ihr Fotoshooting
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2 font-secondary">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300 font-secondary"
                      placeholder="Ihr vollständiger Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2 font-secondary">
                      E-Mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300 font-secondary"
                      placeholder="ihre.email@beispiel.de"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2 font-secondary">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300 font-secondary"
                      placeholder="+49 123 456 789"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2 font-secondary">
                      Gewünschter Service *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300 font-secondary"
                    >
                      <option value="">Bitte wählen Sie einen Service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2 font-secondary">
                    Ihre Nachricht *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300 font-secondary resize-none"
                    placeholder="Erzählen Sie mir von Ihrem Projekt, Ihren Wünschen und dem gewünschten Termin..."
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-amber-600 to-amber-800 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all duration-300 font-secondary group"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="flex items-center justify-center gap-2">
                    Nachricht senden
                    <motion.svg
                      className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </motion.svg>
                  </span>
                </motion.button>
              </form>
            </motion.div>

            {/* Calendar */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6 font-primary text-gray-800">
                  Verfügbarkeit
                </h3>
                <p className="text-gray-600 mb-6 font-secondary">
                  Ich bin Montag bis Freitag von 9:00 bis 18:00 Uhr verfügbar. 
                  Wählen Sie Ihren Wunschtermin aus:
                </p>

                {/* Date Selection */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-3 font-secondary">
                    Wunschtermin
                  </label>
                  <div className="grid grid-cols-4 gap-2 max-h-48 overflow-y-auto">
                    {getAvailableDates().map((date, index) => (
                      <motion.button
                        key={index}
                        type="button"
                        onClick={() => setSelectedDate(date.date)}
                        className={`p-3 rounded-lg text-center transition-all duration-300 font-secondary ${
                          selectedDate === date.date
                            ? 'bg-amber-600 text-white shadow-lg'
                            : 'bg-white text-gray-700 hover:bg-amber-50 border border-gray-200'
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <div className="text-xs font-medium">{date.day}</div>
                        <div className="text-lg font-bold">{date.dayNumber}</div>
                        <div className="text-xs">{date.month}</div>
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Time Selection */}
                {selectedDate && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <label className="block text-sm font-medium text-gray-700 mb-3 font-secondary">
                      Wunschzeit
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {availableTimes.map((time, index) => (
                        <motion.button
                          key={index}
                          type="button"
                          onClick={() => setSelectedTime(time)}
                          className={`p-3 rounded-lg text-center transition-all duration-300 font-secondary ${
                            selectedTime === time
                              ? 'bg-amber-600 text-white shadow-lg'
                              : 'bg-white text-gray-700 hover:bg-amber-50 border border-gray-200'
                          }`}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {time}
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Selected Date/Time Display */}
                {(selectedDate || selectedTime) && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mt-6 p-4 bg-amber-50 rounded-lg border border-amber-200"
                  >
                    <h4 className="font-semibold text-amber-800 mb-2 font-primary">Ihr gewählter Termin:</h4>
                    <div className="text-amber-700 font-secondary">
                      {selectedDate && (
                        <div>Datum: {new Date(selectedDate).toLocaleDateString('de-DE', { 
                          weekday: 'long', 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}</div>
                      )}
                      {selectedTime && <div>Zeit: {selectedTime} Uhr</div>}
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
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
                Kontaktinformationen
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-secondary">
              Erreichen Sie mich über verschiedene Kanäle - ich antworte schnellstmöglich
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
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
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="text-amber-600">
                    {info.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 font-primary text-gray-800">{info.title}</h3>
                <a
                  href={info.link}
                  className="text-amber-600 hover:text-amber-700 transition-colors duration-300 font-secondary"
                >
                  {info.value}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 font-primary">
              <span className="bg-gradient-to-r from-amber-700 to-amber-900 bg-clip-text text-transparent">
                Häufige Fragen
              </span>
            </h2>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: 'Wie lange dauert ein Fotoshooting?',
                answer: 'Die Dauer hängt vom gewählten Service ab. Portrait-Shootings dauern 1-2 Stunden, Events werden nach Vereinbarung geplant.'
              },
              {
                question: 'Wann erhalte ich meine Bilder?',
                answer: 'Ich bearbeite Ihre Bilder sorgfältig und liefere sie innerhalb von 5-7 Werktagen in digitaler Form aus.'
              },
              {
                question: 'Kann ich Termine auch am Wochenende buchen?',
                answer: 'Aktuell bin ich Montag bis Freitag verfügbar. Für besondere Anlässe können wir individuelle Lösungen finden.'
              },
              {
                question: 'Was passiert bei schlechtem Wetter?',
                answer: 'Bei Outdoor-Shootings können wir den Termin kostenlos verschieben oder ins Studio verlegen.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-xl p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold mb-3 font-primary text-gray-800">{faq.question}</h3>
                <p className="text-gray-600 font-secondary leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage