"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Image from "next/image"
import { useLanguage } from "@/lib/language-context"
import { motion } from "framer-motion"
import { Users, Target, Heart, Lightbulb, Globe, Shield } from "lucide-react"
import styles from "./nosotros.module.css"

export default function NosotrosClientPage() {
  const { t, language } = useLanguage()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.container}>
            <motion.h1
              className={styles.heroTitle}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {t("about.title")}
            </motion.h1>
            <motion.p
              className={styles.heroSubtitle}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {t("about.subtitle")}
            </motion.p>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.container}>
            <motion.div
              className={styles.missionVisionGrid}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div className={styles.missionVisionCard} variants={itemVariants}>
                <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  {t("about.mission.title")}
                </motion.h2>
                <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  {t("about.mission.text")}
                </motion.p>
              </motion.div>
              <motion.div className={styles.missionVisionCard} variants={itemVariants}>
                <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  {t("about.vision.title")}
                </motion.h2>
                <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  {t("about.vision.text")}
                </motion.p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section className={styles.sectionAlt}>
          <div className={styles.container}>
            <motion.h2
              className={styles.sectionTitle}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {t("about.values.title")}
            </motion.h2>
            <motion.div
              className={styles.valuesGrid}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div className={styles.valueCard} variants={itemVariants}>
                <Shield className={styles.valueIcon} />
                <motion.h3 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  {t("about.values.ethics")}
                </motion.h3>
                <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  {t("about.values.ethics.desc")}
                </motion.p>
              </motion.div>
              <motion.div className={styles.valueCard} variants={itemVariants}>
                <Lightbulb className={styles.valueIcon} />
                <motion.h3 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  {t("about.values.science")}
                </motion.h3>
                <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  {t("about.values.science.desc")}
                </motion.p>
              </motion.div>
              <motion.div className={styles.valueCard} variants={itemVariants}>
                <Target className={styles.valueIcon} />
                <motion.h3 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  {t("about.values.innovation")}
                </motion.h3>
                <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  {t("about.values.innovation.desc")}
                </motion.p>
              </motion.div>
              <motion.div className={styles.valueCard} variants={itemVariants}>
                <Heart className={styles.valueIcon} />
                <motion.h3 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  {t("about.values.humanism")}
                </motion.h3>
                <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  {t("about.values.humanism.desc")}
                </motion.p>
              </motion.div>
              <motion.div className={styles.valueCard} variants={itemVariants}>
                <Users className={styles.valueIcon} />
                <motion.h3 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  {t("about.values.community")}
                </motion.h3>
                <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  {t("about.values.community.desc")}
                </motion.p>
              </motion.div>
              <motion.div className={styles.valueCard} variants={itemVariants}>
                <Globe className={styles.valueIcon} />
                <motion.h3 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  {t("about.values.transparency")}
                </motion.h3>
                <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  {t("about.values.transparency.desc")}
                </motion.p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.container}>
            <motion.h2
              className={styles.sectionTitle}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {language === "es" ? "Nuestra Historia" : "Our History"}
            </motion.h2>
            <motion.div
              className={styles.historyContent}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                {language === "es"
                  ? "BIOCEBS® nace de la visión de transformar el paradigma de salud, pasando de un enfoque reactivo a uno preventivo, regenerativo y funcional. Fundada por profesionales de la salud comprometidos con la medicina funcional y la investigación aplicada, nuestra empresa ha crecido hasta convertirse en un ecosistema completo que integra productos, servicios clínicos y formación académica."
                  : "BIOCEBS® was born from the vision of transforming the health paradigm, moving from a reactive approach to a preventive, regenerative and functional one. Founded by health professionals committed to functional medicine and applied research, our company has grown to become a complete ecosystem that integrates products, clinical services and academic training."}
              </motion.p>
              <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                {language === "es"
                  ? "Desde nuestros inicios, hemos mantenido un compromiso inquebrantable con la ética, la ciencia y la innovación. Cada producto, servicio y programa educativo que desarrollamos está respaldado por evidencia científica actualizada y validada, garantizando resultados reales y sostenibles para nuestros pacientes y profesionales."
                  : "Since our beginnings, we have maintained an unwavering commitment to ethics, science and innovation. Every product, service and educational program we develop is backed by updated and validated scientific evidence, guaranteeing real and sustainable results for our patients and professionals."}
              </motion.p>
            </motion.div>
            <motion.div
              className={styles.teamPhotoContainer}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <motion.div
                className={styles.teamPhotoPlaceholder}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Image
                  src="/equipo.jpg"
                  alt={language === "es" ? "Foto del Equipo Completo de BIOCEBS" : "BIOCEBS Complete Team Photo"}
                  fill={true}
                  style={{ objectFit: 'cover' }}
                />
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section className={styles.sectionAlt}>
          <div className={styles.container}>
            <motion.h2
              className={styles.sectionTitle}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {language === "es" ? "Nuestro Equipo" : "Our Team"}
            </motion.h2>
            <motion.p
              className={styles.teamIntro}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {language === "es"
                ? "BIOCEBS® cuenta con un equipo multidisciplinario de profesionales altamente capacitados en medicina funcional, nutrición, psicología, diseño y gestión empresarial. Cada miembro de nuestro equipo comparte nuestra visión de transformar la salud a través de la ciencia, la innovación y el humanismo."
                : "BIOCEBS® has a multidisciplinary team of highly trained professionals in functional medicine, nutrition, psychology, design and business management. Each member of our team shares our vision of transforming health through science, innovation and humanism."}
            </motion.p>
            <motion.div
              className={styles.teamGrid}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div className={styles.teamCard} variants={itemVariants}>
                <motion.div
                  className={styles.teamImagePlaceholder}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <Image 
                    src="/selene.jpg"
                    alt="Dra. Selene López"
                    width={150} 
                    height={150}
                    className={styles.teamImage}
                  />
                </motion.div>
                <motion.h3 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  Dra. Selene López
                </motion.h3>
                <motion.p
                  className={styles.teamRole}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  {language === "es" ? "Directora Médica - BIOMED" : "Medical Director - BIOMED"}
                </motion.p>
                <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  {language === "es"
                    ? "Coordinación del equipo médico, supervisión de procesos clínicos y validación médica de productos y programas terapéuticos."
                    : "Coordination of the medical team, supervision of clinical processes and medical validation of products and therapeutic programs."}
                </motion.p>
              </motion.div>
              <motion.div className={styles.teamCard} variants={itemVariants}>
                <motion.div
                  className={styles.teamImagePlaceholder}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <Image 
                    src="/samir.jpg"
                    alt="Samir Fernández"
                    width={150} 
                    height={150}
                    className={styles.teamImage}
                  />
                </motion.div>
                <motion.h3 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  Samir Fernández
                </motion.h3>
                <motion.p
                  className={styles.teamRole}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  {language === "es"
                    ? "Director de Comunidad y Propiedad Intelectual"
                    : "Community and Intellectual Property Director"}
                </motion.p>
                <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  {language === "es"
                    ? "Liderazgo de BIOCOMMUNITY y BIOIP, construcción de comunidad profesional y protección de propiedad intelectual."
                    : "Leadership of BIOCOMMUNITY and BIOIP, professional community building and intellectual property protection."}
                </motion.p>
              </motion.div>
              <motion.div className={styles.teamCard} variants={itemVariants}>
                <motion.div
                  className={styles.teamImagePlaceholder}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <Image 
                    src="/arteaga.png"
                    alt="Diego Arteaga"
                    width={150} 
                    height={150}
                    className={styles.teamImage}
                  />
                </motion.div>
                <motion.h3 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  Diego Arteaga
                </motion.h3>
                <motion.p
                  className={styles.teamRole}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  {language === "es" ? "Director de Diseño - BIODESIGN" : "Design Director - BIODESIGN"}
                </motion.p>
                <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  {language === "es"
                    ? "Dirección de identidad visual, diseño gráfico y producción de material digital y físico para marketing y eventos."
                    : "Direction of visual identity, graphic design and production of digital and physical material for marketing and events."}
                </motion.p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.container}>
            <motion.h2
              className={styles.sectionTitle}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {t("about.differentiators.title")}
            </motion.h2>
            <motion.div
              className={styles.differentiatorGrid}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div className={styles.differentiatorCard} variants={itemVariants}>
                <motion.h3 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  {t("about.differentiators.integration")}
                </motion.h3>
                <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  {t("about.differentiators.integration.desc")}
                </motion.p>
              </motion.div>
              <motion.div className={styles.differentiatorCard} variants={itemVariants}>
                <motion.h3 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  {t("about.differentiators.community")}
                </motion.h3>
                <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  {t("about.differentiators.community.desc")}
                </motion.p>
              </motion.div>
              <motion.div className={styles.differentiatorCard} variants={itemVariants}>
                <motion.h3 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  {t("about.differentiators.systemic")}
                </motion.h3>
                <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  {t("about.differentiators.systemic.desc")}
                </motion.p>
              </motion.div>
              <motion.div className={styles.differentiatorCard} variants={itemVariants}>
                <motion.h3 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  {t("about.differentiators.capacity")}
                </motion.h3>
                <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  {t("about.differentiators.capacity.desc")}
                </motion.p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section className={styles.sectionAlt}>
          <div className={styles.container}>
            <motion.h2
              className={styles.sectionTitle}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {t("about.departments.title")}
            </motion.h2>
            <motion.p
              className={styles.teamIntro}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {t("about.departments.subtitle")}
            </motion.p>
            <motion.div
              className={styles.departmentGrid}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div className={styles.departmentCard} variants={itemVariants}>
                <motion.h3 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  BIOCOMMUNITY
                </motion.h3>
                <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  {t("about.departments.biocommunity")}
                </motion.p>
              </motion.div>
              <motion.div className={styles.departmentCard} variants={itemVariants}>
                <motion.h3 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  BIODESIGN
                </motion.h3>
                <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  {t("about.departments.biodesign")}
                </motion.p>
              </motion.div>
              <motion.div className={styles.departmentCard} variants={itemVariants}>
                <motion.h3 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  BIOIP
                </motion.h3>
                <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  {t("about.departments.bioip")}
                </motion.p>
              </motion.div>
              <motion.div className={styles.departmentCard} variants={itemVariants}>
                <motion.h3 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  BIOMED
                </motion.h3>
                <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  {t("about.departments.biomed")}
                </motion.p>
              </motion.div>
              <motion.div className={styles.departmentCard} variants={itemVariants}>
                <motion.h3 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  BIORGANIC
                </motion.h3>
                <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  {t("about.departments.biorganic")}
                </motion.p>
              </motion.div>
              <motion.div className={styles.departmentCard} variants={itemVariants}>
                <motion.h3 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  {t("about.departments.more")}
                </motion.h3>
                <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  {t("about.departments.more.desc")}
                </motion.p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.container}>
            <motion.h2
              className={styles.sectionTitle}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {t("about.worklines.title")}
            </motion.h2>
            <motion.div
              className={styles.worklineGrid}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div className={styles.worklineCard} variants={itemVariants}>
                <motion.h3 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  {t("about.worklines.functional")}
                </motion.h3>
                <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  {t("about.worklines.functional.desc")}
                </motion.p>
              </motion.div>
              <motion.div className={styles.worklineCard} variants={itemVariants}>
                <motion.h3 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  {t("about.worklines.aesthetic")}
                </motion.h3>
                <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  {t("about.worklines.aesthetic.desc")}
                </motion.p>
              </motion.div>
              <motion.div className={styles.worklineCard} variants={itemVariants}>
                <motion.h3 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  {t("about.worklines.serum")}
                </motion.h3>
                <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  {t("about.worklines.serum.desc")}
                </motion.p>
              </motion.div>
              <motion.div className={styles.worklineCard} variants={itemVariants}>
                <motion.h3 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  {t("about.worklines.supplements")}
                </motion.h3>
                <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  {t("about.worklines.supplements.desc")}
                </motion.p>
              </motion.div>
              <motion.div className={styles.worklineCard} variants={itemVariants}>
                <motion.h3 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  {t("about.worklines.cellular")}
                </motion.h3>
                <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  {t("about.worklines.cellular.desc")}
                </motion.p>
              </motion.div>
              <motion.div className={styles.worklineCard} variants={itemVariants}>
                <motion.h3 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  {t("about.worklines.education")}
                </motion.h3>
                <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  {t("about.worklines.education.desc")}
                </motion.p>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}