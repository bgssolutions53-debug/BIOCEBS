"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { useLanguage } from "@/lib/language-context"
import styles from "./servicios.module.css"

export default function ServiciosPage() {
  const { language } = useLanguage()

  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.container}>
            <h1 className={styles.heroTitle}>
              {language === "es" ? "Servicios y Áreas Clínicas" : "Services and Clinical Areas"}
            </h1>
            <p className={styles.heroSubtitle}>
              {language === "es"
                ? "Atención médica integral con enfoque funcional, regenerativo y personalizado"
                : "Comprehensive medical care with functional, regenerative and personalized approach"}
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>{language === "es" ? "Consultas Médicas" : "Medical Consultations"}</h2>
            <div className={styles.servicesGrid}>
              <div className={styles.serviceCard}>
                <h3>{language === "es" ? "Asesoría en Suplementos" : "Supplement Consultation"}</h3>
                <p className={styles.price}>$200 MXN</p>
                <p>
                  {language === "es"
                    ? "Orientación especializada para el uso del suplemento de su elección, adaptógenos y nutracéuticos según tus necesidades."
                    : "Specialized guidance for the use of the supplement of your choice, adaptogens and nutraceuticals according to your needs."}
                </p>
              </div>
              <div className={styles.serviceCard}>
                <h3>{language === "es" ? "Consulta General" : "General Consultation"}</h3>
                <p className={styles.price}>$800 MXN</p>
                <p>
                  {language === "es"
                    ? "Evaluación funcional completa que incluye revisión médica, historial clínico y recomendaciones básicas para mejorar tu bienestar."
                    : "Complete functional evaluation including medical review, clinical history and basic recommendations to improve your well-being."}
                </p>
              </div>
              <div className={styles.serviceCard}>
                <h3>{language === "es" ? "Nutrición Funcional" : "Functional Nutrition"}</h3>
                <p className={styles.price}>$1,000 MXN</p>
                <p>
                  {language === "es"
                    ? "Alimentación personalizada para equilibrar tu cuerpo y promover salud integral."
                    : "Personalized nutrition to balance your body and promote comprehensive health."}
                </p>
              </div>
              <div className={styles.serviceCard}>
                <h3>{language === "es" ? "Nutrición Deportiva" : "Sports Nutrition"}</h3>
                <p className={styles.price}>$1,200 MXN</p>
                <p>
                  {language === "es"
                    ? "Nutrición especializada para mejorar rendimiento y recuperación física."
                    : "Specialized nutrition to improve performance and physical recovery."}
                </p>
              </div>
              <div className={styles.serviceCard}>
                <h3>{language === "es" ? "Consulta con Quantum" : "Quantum Consultation"}</h3>
                <p className={styles.price}>$1,500 MXN</p>
                <p>
                  {language === "es"
                    ? "Diagnóstico avanzado con escáner cuántico que complementa la consulta general para un análisis más profundo de tu salud."
                    : "Advanced diagnosis with quantum scanner that complements the general consultation for a deeper analysis of your health."}
                </p>
              </div>
              <div className={styles.serviceCard}>
                <h3>{language === "es" ? "Consulta Integral" : "Comprehensive Consultation"}</h3>
                <p className={styles.price}>$2,500 MXN</p>
                <p>
                  {language === "es"
                    ? "Incluye consulta general, escáner cuántico y ultrasonido de rastreo para un diagnóstico completo y seguimiento detallado."
                    : "Includes general consultation, quantum scanner and tracking ultrasound for complete diagnosis and detailed follow-up."}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.sectionAlt}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              {language === "es" ? "Diagnóstico por Ultrasonido" : "Ultrasound Diagnosis"}
            </h2>
            <div className={styles.servicesGrid}>
              <div className={styles.serviceCard}>
                <h3>{language === "es" ? "Ultrasonido Basic" : "Basic Ultrasound"}</h3>
                <p className={styles.price}>$800 MXN</p>
                <p>
                  {language === "es"
                    ? "Diagnóstico rápido y accesible para valoraciones clínicas de rutina."
                    : "Quick and accessible diagnosis for routine clinical assessments."}
                </p>
              </div>
              <div className={styles.serviceCard}>
                <h3>{language === "es" ? "Ultrasonido Plus" : "Plus Ultrasound"}</h3>
                <p className={styles.price}>$1,500 MXN</p>
                <p>
                  {language === "es"
                    ? "Estudios detallados con tecnología avanzada para diagnósticos médicos precisos."
                    : "Detailed studies with advanced technology for precise medical diagnoses."}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              {language === "es" ? "Terapias con Células Madre" : "Stem Cell Therapies"}
            </h2>
            <div className={styles.servicesGrid}>
              <div className={styles.serviceCard}>
                <h3>{language === "es" ? "Células Basic" : "Basic Cells"}</h3>
                <p className={styles.price}>$15,000 MXN</p>
                <p>
                  {language === "es"
                    ? "Regeneración dirigida a un órgano, tejido o sistema específico."
                    : "Regeneration targeted to a specific organ, tissue or system."}
                </p>
              </div>
              <div className={styles.serviceCard}>
                <h3>{language === "es" ? "Células Gold" : "Gold Cells"}</h3>
                <p className={styles.price}>$36,000 MXN</p>
                <p>
                  {language === "es"
                    ? "Terapia integral que estimula reparación celular y rejuvenecimiento profundo."
                    : "Comprehensive therapy that stimulates cellular repair and deep rejuvenation."}
                </p>
              </div>
              <div className={styles.serviceCard}>
                <h3>{language === "es" ? "Células Basic Plus" : "Basic Plus Cells"}</h3>
                <p className={styles.price}>$29,000 MXN</p>
                <p>
                  {language === "es"
                    ? "Regeneración dirigida reforzada con tratamiento integral por 4 meses."
                    : "Targeted regeneration reinforced with comprehensive treatment for 4 months."}
                </p>
              </div>
              <div className={styles.serviceCard}>
                <h3>{language === "es" ? "Células VIP Plus" : "VIP Plus Cells"}</h3>
                <p className={styles.price}>$59,000 MXN</p>
                <p>
                  {language === "es"
                    ? "Terapia integral con rejuvenecimiento profundo, reforzado con tratamiento por 6 meses."
                    : "Comprehensive therapy with deep rejuvenation, reinforced with treatment for 6 months."}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.sectionAlt}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              {language === "es" ? "Apoyo Psicológico y Coaching" : "Psychological Support and Coaching"}
            </h2>
            <div className={styles.servicesGrid}>
              <div className={styles.serviceCard}>
                <h3>{language === "es" ? "Psicología" : "Psychology"}</h3>
                <p className={styles.price}>$1,000 MXN</p>
                <p>
                  {language === "es"
                    ? "Acompañamiento emocional profesional para equilibrio mental y bienestar personal."
                    : "Professional emotional support for mental balance and personal well-being."}
                </p>
              </div>
              <div className={styles.serviceCard}>
                <h3>{language === "es" ? "Coaching Personal" : "Personal Coaching"}</h3>
                <p className={styles.price}>$1,500 MXN</p>
                <p>
                  {language === "es"
                    ? "Impulsa tu desarrollo con metas claras y transformación consciente."
                    : "Boost your development with clear goals and conscious transformation."}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>{language === "es" ? "Sueroterapia" : "Serum Therapy"}</h2>
            <div className={styles.servicesGrid}>
              <div className={styles.serviceCard}>
                <h3>{language === "es" ? "Suero Vitaminado" : "Vitamin Serum"}</h3>
                <p className={styles.price}>$1,500 MXN</p>
                <p>
                  {language === "es"
                    ? "Recarga tu cuerpo con micronutrientes esenciales para salud óptima."
                    : "Recharge your body with essential micronutrients for optimal health."}
                </p>
              </div>
              <div className={styles.serviceCard}>
                <h3>{language === "es" ? "Suero Energy" : "Energy Serum"}</h3>
                <p className={styles.price}>$1,500 MXN</p>
                <p>
                  {language === "es"
                    ? "Activa tu mente y cuerpo con potencia natural e inmediata."
                    : "Activate your mind and body with natural and immediate power."}
                </p>
              </div>
              <div className={styles.serviceCard}>
                <h3>{language === "es" ? "Suero Resaca Free" : "Hangover Free Serum"}</h3>
                <p className={styles.price}>$1,500 MXN</p>
                <p>
                  {language === "es"
                    ? "Restaura energía, elimina malestar y equilibra tu sistema rápidamente."
                    : "Restore energy, eliminate discomfort and balance your system quickly."}
                </p>
              </div>
              <div className={styles.serviceCard}>
                <h3>{language === "es" ? "Suero Quelante" : "Chelating Serum"}</h3>
                <p className={styles.price}>$2,500 MXN</p>
                <p>
                  {language === "es"
                    ? "Desintoxica profundamente, liberando metales pesados y revitalizando células."
                    : "Deeply detoxifies, releasing heavy metals and revitalizing cells."}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
