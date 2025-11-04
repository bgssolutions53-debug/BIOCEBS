"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/lib/language-context"
import styles from "./blog-preview.module.css"

const blogPosts = [
  {
    category: "Medicina Funcional",
    categoryEn: "Functional Medicine",
    title: "Adaptógenos: ¿Qué son y cómo funcionan?",
    titleEn: "Adaptogens: What are they and how do they work?",
    excerpt:
      "Descubre cómo estos compuestos naturales pueden ayudar a tu cuerpo a adaptarse al estrés y mejorar tu bienestar general.",
    excerptEn:
      "Discover how these natural compounds can help your body adapt to stress and improve your overall well-being.",
    image: "/medicinafncional.jpg",
    slug: "adaptogenos-que-son",
    isNew: true,
  },
  {
    category: "Medicina Regenerativa",
    categoryEn: "Regenerative Medicine",
    title: "Células Madre: La medicina del futuro",
    titleEn: "Stem Cells: The medicine of the future",
    excerpt: "Conoce cómo las terapias con células madre están revolucionando el tratamiento de enfermedades crónicas.",
    excerptEn: "Learn how stem cell therapies are revolutionizing the treatment of chronic diseases.",
    image: "/medicinaregenerativa.jpg",
    slug: "celulas-madre-medicina-futuro",
    isNew: false,
  },
  {
    category: "Salud Mental",
    categoryEn: "Mental Health",
    title: "La conexión entre tu intestino y tu estado de ánimo",
    titleEn: "The connection between your gut and your mood",
    excerpt: "Explora la fascinante relación entre el microbioma intestinal y la salud mental.",
    excerptEn: "Explore the fascinating relationship between the gut microbiome and mental health.",
    image: "/saludmental.jpg",
    slug: "conexion-intestino-animo",
    isNew: false,
  },
]

export default function BlogPreview() {
  const { t, language } = useLanguage()

  return (
    <section id="blog" className={styles.section}>
      <div className={styles.container}>
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {t("Blog")}
        </motion.h2>
        <div className={styles.grid}>
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.slug}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className={styles.imageContainer}>
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={language === "es" ? post.title : post.titleEn}
                  fill
                  className={styles.image}
                />
                {post.isNew && <span className={styles.newBadge}>{language === "es" ? "NUEVO" : "NEW"}</span>}
              </div>
              <div className={styles.content}>
                <span className={styles.category}>{language === "es" ? post.category : post.categoryEn}</span>
                <h3>{language === "es" ? post.title : post.titleEn}</h3>
                <p className={styles.excerpt}>{language === "es" ? post.excerpt : post.excerptEn}</p>
                <Link href={`/blog#${post.slug}`} className={styles.readMore}>
                  {t("blog.readmore")}
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
