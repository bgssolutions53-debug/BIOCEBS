"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Calendar, MapPin, Clock } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import styles from "./eventos.module.css"

export default function EventosPage() {
  const { language } = useLanguage()

  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.container}>
            <h1 className={styles.heroTitle}>{language === "es" ? "Eventos y Capacitación" : "Events and Training"}</h1>
            <p className={styles.heroSubtitle}>
              {language === "es"
                ? "Webinars, talleres y giras médicas para profesionales de la salud y público general"
                : "Webinars, workshops and medical tours for health professionals and general public"}
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>{language === "es" ? "Próximos Eventos" : "Upcoming Events"}</h2>
            <div className={styles.eventsGrid}>
              <div className={styles.eventCard}>
                <div className={styles.eventBadge}>{language === "es" ? "Webinar" : "Webinar"}</div>
                <h3>
                  {language === "es" ? "Introducción a la Medicina Funcional" : "Introduction to Functional Medicine"}
                </h3>
                <div className={styles.eventMeta}>
                  <div className={styles.metaItem}>
                    <Calendar size={18} />
                    <span>{language === "es" ? "15 de Febrero, 2025" : "February 15, 2025"}</span>
                  </div>
                  <div className={styles.metaItem}>
                    <Clock size={18} />
                    <span>19:00 hrs (GMT-6)</span>
                  </div>
                  <div className={styles.metaItem}>
                    <MapPin size={18} />
                    <span>Online - Zoom</span>
                  </div>
                </div>
                <p>
                  {language === "es"
                    ? "Descubre los fundamentos de la medicina funcional y cómo puede transformar tu práctica clínica. Dirigido a profesionales de la salud."
                    : "Discover the fundamentals of functional medicine and how it can transform your clinical practice. Aimed at health professionals."}
                </p>
                <button className={styles.eventButton}>{language === "es" ? "Registrarse" : "Register"}</button>
              </div>

              <div className={styles.eventCard}>
                <div className={styles.eventBadge}>
                  {language === "es" ? "Taller Presencial" : "In-Person Workshop"}
                </div>
                <h3>{language === "es" ? "Adaptógenos en la Práctica Clínica" : "Adaptogens in Clinical Practice"}</h3>
                <div className={styles.eventMeta}>
                  <div className={styles.metaItem}>
                    <Calendar size={18} />
                    <span>{language === "es" ? "22 de Febrero, 2025" : "February 22, 2025"}</span>
                  </div>
                  <div className={styles.metaItem}>
                    <Clock size={18} />
                    <span>10:00 - 14:00 hrs</span>
                  </div>
                  <div className={styles.metaItem}>
                    <MapPin size={18} />
                    <span>Torreón, Coahuila</span>
                  </div>
                </div>
                <p>
                  {language === "es"
                    ? "Taller práctico sobre el uso clínico de adaptógenos, dosificación y protocolos terapéuticos. Incluye material didáctico y certificado."
                    : "Practical workshop on clinical use of adaptogens, dosage and therapeutic protocols. Includes teaching materials and certificate."}
                </p>
                <button className={styles.eventButton}>{language === "es" ? "Registrarse" : "Register"}</button>
              </div>

              <div className={styles.eventCard}>
                <div className={styles.eventBadge}>{language === "es" ? "Gira Médica" : "Medical Tour"}</div>
                <h3>
                  {language === "es" ? "Dermapen y Bioestimulación Avanzada" : "Dermapen and Advanced Biostimulation"}
                </h3>
                <div className={styles.eventMeta}>
                  <div className={styles.metaItem}>
                    <Calendar size={18} />
                    <span>{language === "es" ? "5-6 de Marzo, 2025" : "March 5-6, 2025"}</span>
                  </div>
                  <div className={styles.metaItem}>
                    <Clock size={18} />
                    <span>09:00 - 18:00 hrs</span>
                  </div>
                  <div className={styles.metaItem}>
                    <MapPin size={18} />
                    <span>Monterrey, N.L.</span>
                  </div>
                </div>
                <p>
                  {language === "es"
                    ? "Capacitación intensiva en técnicas de Dermapen, protocolos clínicos y manejo de activos regenerativos. Certificación incluida."
                    : "Intensive training in Dermapen techniques, clinical protocols and management of regenerative assets. Certification included."}
                </p>
                <button className={styles.eventButton}>{language === "es" ? "Registrarse" : "Register"}</button>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.sectionAlt}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>{language === "es" ? "Eventos Pasados" : "Past Events"}</h2>
            <div className={styles.pastEventsGrid}>
              <div className={styles.pastEventCard}>
                <h4>{language === "es" ? "Sueroterapia Funcional - Webinar" : "Functional Serum Therapy - Webinar"}</h4>
                <p>{language === "es" ? "Enero 2025" : "January 2025"}</p>
              </div>
              <div className={styles.pastEventCard}>
                <h4>
                  {language === "es" ? "Células Madre en Medicina Regenerativa" : "Stem Cells in Regenerative Medicine"}
                </h4>
                <p>{language === "es" ? "Diciembre 2024" : "December 2024"}</p>
              </div>
              <div className={styles.pastEventCard}>
                <h4>{language === "es" ? "Nutrición Funcional Avanzada" : "Advanced Functional Nutrition"}</h4>
                <p>{language === "es" ? "Noviembre 2024" : "November 2024"}</p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.ctaBox}>
              <h2>
                {language === "es"
                  ? "¿Quieres organizar un evento con nosotros?"
                  : "Want to organize an event with us?"}
              </h2>
              <p>
                {language === "es"
                  ? "Ofrecemos capacitaciones personalizadas para clínicas, hospitales y grupos de profesionales de la salud."
                  : "We offer customized training for clinics, hospitals and groups of health professionals."}
              </p>
              <button className={styles.ctaButton}>{language === "es" ? "Contactar" : "Contact"}</button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
