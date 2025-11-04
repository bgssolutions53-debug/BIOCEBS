"use client"

import { motion } from "framer-motion"
import { Leaf, FlaskConical, ShieldCheck } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import styles from "./trust-bar.module.css"

export default function TrustBar() {
  const { t } = useLanguage()

  const trustItems = [
    { icon: Leaf, text: t("trust.natural") },
    { icon: FlaskConical, text: t("trust.science") },
    { icon: ShieldCheck, text: t("trust.quality") },
  ]

  return (
    <section className={styles.trustBar}>
      <div className={styles.container}>
        {trustItems.map((item, index) => (
          <motion.div
            key={index}
            className={styles.trustItem}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <item.icon size={28} />
            <span>{item.text}</span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
