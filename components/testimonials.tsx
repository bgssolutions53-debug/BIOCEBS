"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useLanguage } from "@/lib/language-context"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"
import styles from "./testimonials.module.css"

const testimonials = [
  {
    name: "rofen",
    textEs: "Muy buen servicio, me siento con más energía que antes",
    textEn: "Very good service, I feel more energetic than before",
    source: "Google Maps",
    rating: 5,
  },
  {
    name: "Sami Fernandez",
    textEs: "Excelente Servicio",
    textEn: "Excellent Service",
    source: "Google Maps",
    rating: 5,
  },
  {
    name: "Esther Avila",
    textEs: "Excelentes profesionales y dan un servicio de calidad.",
    textEn: "Excellent professionals and they provide quality service.",
    source: "Facebook",
    rating: 5,
  },
  {
    name: "Ana Luz Ceniceros",
    textEs:
      "Tienen calidad. Es una empresa responsable con la salud, con la calidad de vida y respaldada por profesionales médicos, nutriólogos y psicólogos.",
    textEn:
      "They have quality. It is a company responsible for health, quality of life and backed by medical professionals, nutritionists and psychologists.",
    source: "Facebook",
    rating: 5,
  },
]

export default function Testimonials() {
  const { t, language } = useLanguage()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  const swipeConfidenceThreshold = 10000
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity
  }

  const paginate = (newDirection: number) => {
    setDirection(newDirection)
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection
      if (nextIndex < 0) nextIndex = testimonials.length - 1
      if (nextIndex >= testimonials.length) nextIndex = 0
      return nextIndex
    })
  }

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {t("Testimonios")}
        </motion.h2>
        <div className={styles.carouselContainer}>
          <button className={styles.navButton} onClick={() => paginate(-1)} aria-label="Previous testimonial">
            <ChevronLeft />
          </button>

          <div className={styles.carouselWrapper}>
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x)

                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1)
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1)
                  }
                }}
                className={styles.card}
              >
                <div className={styles.stars}>
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className={styles.star} fill="currentColor" />
                  ))}
                </div>
                <blockquote>
                  {language === "es" ? testimonials[currentIndex].textEs : testimonials[currentIndex].textEn}
                </blockquote>
                <div className={styles.author}>
                  <cite>{testimonials[currentIndex].name}</cite>
                  <span className={styles.source}>{testimonials[currentIndex].source}</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button className={styles.navButton} onClick={() => paginate(1)} aria-label="Next testimonial">
            <ChevronRight />
          </button>
        </div>

        <div className={styles.dotsContainer}>
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${index === currentIndex ? styles.dotActive : ""}`}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1)
                setCurrentIndex(index)
              }}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
