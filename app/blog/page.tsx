"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { useLanguage } from "@/lib/language-context"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import styles from "./blog.module.css"

const blogArticles = [
  {
    id: 1,
    category: "Medicina Funcional",
    categoryEn: "Functional Medicine",
    title: "¿Qué son los Adaptógenos y cómo pueden transformar tu salud?",
    titleEn: "What are Adaptogens and how can they transform your health?",
    excerpt:
      "Descubre cómo estas plantas medicinales ayudan a tu cuerpo a resistir el estrés físico, químico y biológico.",
    excerptEn: "Discover how these medicinal plants help your body resist physical, chemical and biological stress.",
    image: "/adaptogenic-herbs-natural-medicine.jpg",
    date: "15 Marzo 2025",
    dateEn: "March 15, 2025",
    slug: "adaptogenos-medicina-funcional",
  },
  {
    id: 2,
    category: "Células Madre",
    categoryEn: "Stem Cells",
    title: "Terapia con Células Madre: La medicina regenerativa del futuro",
    titleEn: "Stem Cell Therapy: The regenerative medicine of the future",
    excerpt:
      "Conoce cómo las células madre pueden regenerar tejidos dañados y restaurar funciones deterioradas del organismo.",
    excerptEn: "Learn how stem cells can regenerate damaged tissues and restore deteriorated body functions.",
    image: "/stem-cells-regenerative-medicine.jpg",
    date: "10 Marzo 2025",
    dateEn: "March 10, 2025",
    slug: "celulas-madre-medicina-regenerativa",
  },
  {
    id: 3,
    category: "Nutrición",
    categoryEn: "Nutrition",
    title: "La conexión intestino-cerebro: Por qué tu salud mental depende de tu digestión",
    titleEn: "The gut-brain connection: Why your mental health depends on your digestion",
    excerpt:
      "El 90% de la serotonina se produce en el intestino. Aprende cómo mejorar tu microbiota para mejorar tu ánimo.",
    excerptEn: "90% of serotonin is produced in the gut. Learn how to improve your microbiota to improve your mood.",
    image: "/gut-brain-connection-microbiome.jpg",
    date: "5 Marzo 2025",
    dateEn: "March 5, 2025",
    slug: "conexion-intestino-cerebro",
  },
  {
    id: 4,
    category: "Sueroterapia",
    categoryEn: "IV Therapy",
    title: "Sueroterapia: Nutrición celular directa para resultados inmediatos",
    titleEn: "IV Therapy: Direct cellular nutrition for immediate results",
    excerpt:
      "Descubre cómo la administración intravenosa de vitaminas y minerales puede optimizar tu salud de forma rápida.",
    excerptEn: "Discover how intravenous administration of vitamins and minerals can optimize your health quickly.",
    image: "/iv-therapy-wellness-treatment.jpg",
    date: "28 Febrero 2025",
    dateEn: "February 28, 2025",
    slug: "sueroterapia-nutricion-celular",
  },
  {
    id: 5,
    category: "Estética Funcional",
    categoryEn: "Functional Aesthetics",
    title: "Dermapen: Regeneración cutánea con ciencia y precisión",
    titleEn: "Dermapen: Skin regeneration with science and precision",
    excerpt:
      "El microneedling con activos clínicos estimula colágeno, mejora textura y reduce manchas de forma natural.",
    excerptEn: "Microneedling with clinical actives stimulates collagen, improves texture and reduces spots naturally.",
    image: "/dermapen-microneedling-skin-treatment.jpg",
    date: "20 Febrero 2025",
    dateEn: "February 20, 2025",
    slug: "dermapen-regeneracion-cutanea",
  },
  {
    id: 6,
    category: "Ciencia",
    categoryEn: "Science",
    title: "NAD+: La molécula anti-envejecimiento que tu cuerpo necesita",
    titleEn: "NAD+: The anti-aging molecule your body needs",
    excerpt:
      "Conoce cómo el NAD+ mejora la energía celular, la reparación del ADN y retrasa el envejecimiento biológico.",
    excerptEn: "Learn how NAD+ improves cellular energy, DNA repair and delays biological aging.",
    image: "/nad-molecule-cellular-energy.jpg",
    date: "12 Febrero 2025",
    dateEn: "February 12, 2025",
    slug: "nad-molecula-anti-envejecimiento",
  },
]

export default function BlogPage() {
  const { t, language } = useLanguage()

  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.container}>
            <motion.h1
              className={styles.heroTitle}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {t("blog.title")}
            </motion.h1>
            <motion.p
              className={styles.heroSubtitle}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {t("blog.subtitle")}
            </motion.p>
          </div>
        </section>

        <section className={styles.articlesSection}>
          <div className={styles.container}>
            <div className={styles.grid}>
              {blogArticles.map((article, index) => (
                <motion.article
                  key={article.id}
                  className={styles.card}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className={styles.imageWrapper}>
                    <Image
                      src={article.image || "/placeholder.svg"}
                      alt={language === "es" ? article.title : article.titleEn}
                      fill
                      className={styles.image}
                    />
                    <span className={styles.category}>{language === "es" ? article.category : article.categoryEn}</span>
                  </div>
                  <div className={styles.content}>
                    <time className={styles.date}>{language === "es" ? article.date : article.dateEn}</time>
                    <h2 className={styles.title}>{language === "es" ? article.title : article.titleEn}</h2>
                    <p className={styles.excerpt}>{language === "es" ? article.excerpt : article.excerptEn}</p>
                    <Link href={`/blog/${article.slug}`} className={styles.readMore}>
                      {t("blog.readmore")} →
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.newsletter}>
          <div className={styles.container}>
            <motion.div
              className={styles.newsletterContent}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2>{t("blog.newsletter.title")}</h2>
              <p>{t("blog.newsletter.subtitle")}</p>
              <form className={styles.newsletterForm}>
                <input type="email" placeholder={t("blog.newsletter.placeholder")} />
                <button type="submit">{t("blog.newsletter.button")}</button>
              </form>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
