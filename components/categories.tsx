"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Sparkles, Syringe, Droplet, Pill, Stethoscope, CreditCard } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import styles from "./categories.module.css"

export default function Categories() {
  const { t } = useLanguage()

  const categories = [
    {
      id: "dermapen",
      title: t("categories.dermapen.title"),
      subtitle: t("categories.dermapen.subtitle"),
      description: t("categories.dermapen.description"),
      color: "#96A480",
      icon: Sparkles,
    },
    {
      id: "botox",
      title: t("categories.botox.title"),
      subtitle: t("categories.botox.subtitle"),
      description: t("categories.botox.description"),
      color: "#3F4D3D",
      icon: Syringe,
    },
    {
      id: "sueroterapia",
      title: t("categories.sueroterapia.title"),
      subtitle: t("categories.sueroterapia.subtitle"),
      description: t("categories.sueroterapia.description"),
      color: "#B9C5AE",
      icon: Droplet,
    },
    {
      id: "suplementos",
      title: t("categories.suplementos.title"),
      subtitle: t("categories.suplementos.subtitle"),
      description: t("categories.suplementos.description"),
      color: "#6B7A69",
      icon: Pill,
    },
    {
      id: "servicios",
      title: t("categories.servicios.title"),
      subtitle: t("categories.servicios.subtitle"),
      description: t("categories.servicios.description"),
      color: "#D8D9C8",
      icon: Stethoscope,
    },
    {
      id: "membresias",
      title: t("categories.membresias.title"),
      subtitle: t("categories.membresias.subtitle"),
      description: t("categories.membresias.description"),
      color: "#96A480",
      icon: CreditCard,
    },
  ]

  return (
    <section id="tienda" className={styles.section}>
      <div className={styles.container}>
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {t("categories.title")}
        </motion.h2>
        <div className={styles.grid}>
          {categories.map((category, index) => {
            const Icon = category.icon
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link href="/tienda" className={styles.card}>
                  <div className={styles.iconWrapper} style={{ backgroundColor: category.color }}>
                    <Icon size={48} strokeWidth={1.5} />
                  </div>
                  <h3>{category.title}</h3>
                  <p className={styles.subtitle}>{category.subtitle}</p>
                  <p className={styles.description}>{category.description}</p>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
