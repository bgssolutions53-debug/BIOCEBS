"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { MessageCircle, Package, RefreshCw } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import styles from "./philosophy-steps.module.css"

export default function PhilosophySteps() {
  const { t } = useLanguage()

  const steps = [
    {
      icon: MessageCircle,
      number: "1",
      title: t("philosophy.step1"),
      description: t("philosophy.step1.desc"),
    },
    {
      icon: Package,
      number: "2",
      title: t("philosophy.step2"),
      description: t("philosophy.step2.desc"),
    },
    {
      icon: RefreshCw,
      number: "3",
      title: t("philosophy.step3"),
      description: t("philosophy.step3.desc"),
    },
  ]

  return (
    <section id="filosofia" className={styles.section}>
      <div className={styles.container}>
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {t("philosophy.title")}
        </motion.h2>
        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {t("philosophy.subtitle")}
        </motion.p>
        <div className={styles.steps}>
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className={styles.stepCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className={styles.icon}>
                <step.icon size={48} />
              </div>
              <h3>
                {step.number}. {step.title}
              </h3>
              <p>{step.description}</p>
            </motion.div>
          ))}
        </div>
        <motion.div
          className={styles.ctaWrapper}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link href="#contacto" className={styles.ctaButton}>
            {t("philosophy.cta")}
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
