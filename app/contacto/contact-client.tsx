"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import styles from "./contacto.module.css"

export default function ContactClient() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("[v0] Form submitted:", formData)
    alert("Mensaje enviado. Nos pondremos en contacto contigo pronto.")
    setFormData({ name: "", email: "", phone: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <motion.h1
            className={styles.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {t("contact.title")}
          </motion.h1>
          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {t("contact.subtitle")}
          </motion.p>
        </div>
      </section>

      <section className={styles.contactSection}>
        <div className={styles.container}>
          <div className={styles.grid}>
            <motion.div
              className={styles.formWrapper}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">{t("contact.name")}</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="email">{t("contact.email")}</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="phone">{t("contact.phone")}</label>
                  <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="message">{t("contact.message")}</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button type="submit" className={styles.submitButton}>
                  <Send size={20} />
                  {t("contact.send")}
                </button>
              </form>
            </motion.div>

            <motion.div
              className={styles.infoWrapper}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3>{t("contact.info")}</h3>
              <div className={styles.infoCard}>
                <div className={styles.infoItem}>
                  <MapPin className={styles.icon} />
                  <div>
                    <h4>{t("contact.address")}</h4>
                    <p>Periférico Raul Lopez Sanchez 5000, Local 39</p>
                    <p>Colonia el Fresno, Torreón, Coahuila</p>
                    <p>C.P. 27018, México</p>
                  </div>
                </div>
                <div className={styles.infoItem}>
                  <Phone className={styles.icon} />
                  <div>
                    <h4>{t("contact.phone")}</h4>
                    <p>+52 (871) 804 5507</p>
                    <p>+52 (871) 146 7574</p>
                  </div>
                </div>
                <div className={styles.infoItem}>
                  <Mail className={styles.icon} />
                  <div>
                    <h4>{t("contact.email")}</h4>
                    <p>ventasbiocebs@gmail.com</p>
                    <p>samirbiocebs@gmail.com</p>
                  </div>
                </div>
                <div className={styles.infoItem}>
                  <Clock className={styles.icon} />
                  <div>
                    <h4>{t("contact.hours")}</h4>
                    <p>{t("contact.hours.value")}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            className={styles.mapWrapper}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3600.1234567890!2d-103.4567890!3d25.5678901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDM0JzA0LjQiTiAxMDPCsDI3JzI0LjQiVw!5e0!3m2!1sen!2smx!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="BIOCEBS Location"
            />
          </motion.div>
        </div>
      </section>
    </main>
  )
}
