"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/lib/language-context"
import styles from "./hero.module.css"

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section id="inicio" className={styles.hero}>
      <div className={styles.heroContent}>
        <motion.div
          className={styles.logoContainer}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image
            src="/logo.png"
            alt="BIOCEBS Logo"
            width={180}
            height={180}
            className={styles.logo}
          />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-balance"
        >
          {t("hero.title")}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {t("hero.subtitle")}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Link href="/tienda" className={styles.ctaButton}>
            {t("hero.cta")}
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
