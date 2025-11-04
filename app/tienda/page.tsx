"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { useLanguage } from "@/lib/language-context"

const supplements = [
  {
    name: "BIO-BRAIN",
    descriptionES:
      "Aborda múltiples vías fisiológicas para mantener y mejorar la salud cerebral y mejora de la función cognitiva.",
    descriptionEN:
      "Addresses multiple physiological pathways to maintain and improve brain health and cognitive function.",
    price: "$700.00 MXN",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-XSJSIQrdyPIgUQIOqAQ17ANfyJJMWO.png",
    category: "Suplementos",
    categoryEN: "Supplements",
  },
  {
    name: "BIO-CALM",
    descriptionES:
      "La sinergia entre los ingredientes proporciona una combinación equilibrada de reducción del estrés y mejora de la función cognitiva.",
    descriptionEN:
      "The synergy between ingredients provides a balanced combination of stress reduction and improved cognitive function.",
    price: "$600.00 MXN",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-QK3GYl7RHwvRhcDregCkNbzL31lGOM.png",
    category: "Suplementos",
    categoryEN: "Supplements",
  },
  {
    name: "BIO-SKIN",
    descriptionES:
      "Proporciona antioxidantes y colágeno, así como también incorpora Adaptógenos que ayudan a reducir el estrés y mejorar la salud general de la piel.",
    descriptionEN:
      "Provides antioxidants and collagen, and incorporates Adaptogens that help reduce stress and improve overall skin health.",
    price: "$600.00 MXN",
    image: "/bio-skin-supplement-jar.jpg",
    category: "Suplementos",
    categoryEN: "Supplements",
  },
  {
    name: "BIO-GASTRO",
    descriptionES:
      "Ofrece múltiples beneficios adicionales para la salud intestinal al incorporar Adaptógenos como cola de pavo que puede mejorar la flora intestinal.",
    descriptionEN:
      "Offers multiple additional benefits for intestinal health by incorporating Adaptogens like turkey tail that can improve gut flora.",
    price: "$600.00 MXN",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-o004DAuOBB3ryuHFQZrRwqzZn5txjO.png",
    category: "Suplementos",
    categoryEN: "Supplements",
  },
  {
    name: "BIO-SLIM",
    descriptionES:
      "La L-Carnitina facilita la quema de grasa y mejora la resistencia durante el ejercicio. Combinada con más ingredientes, se crea una fórmula eficaz para la pérdida de peso.",
    descriptionEN:
      "L-Carnitine facilitates fat burning and improves endurance during exercise. Combined with more ingredients, it creates an effective formula for weight loss.",
    price: "$600.00 MXN",
    image: "/bio-slim-supplement-jar.jpg",
    category: "Suplementos",
    categoryEN: "Supplements",
  },
  {
    name: "BIO-REN",
    descriptionES:
      "Proporciona apoyo adicional a través de sus propiedades Adaptogénicas, antiinflamatorias y antioxidantes, promoviendo una salud renal óptima.",
    descriptionEN:
      "Provides additional support through its Adaptogenic, anti-inflammatory and antioxidant properties, promoting optimal kidney health.",
    price: "$600.00 MXN",
    image: "/bio-ren-supplement-jar.jpg",
    category: "Suplementos",
    categoryEN: "Supplements",
  },
  {
    name: "BIO-O",
    descriptionES:
      "Usando antioxidantes presentes en el hongo Chaga, Golden Berry, té verde, noni, moringa y kale. Logra neutralizar los radicales libres.",
    descriptionEN:
      "Using antioxidants present in Chaga mushroom, Golden Berry, green tea, noni, moringa and kale. Neutralizes free radicals.",
    price: "$600.00 MXN",
    image: "/bio-o-supplement-jar.jpg",
    category: "Suplementos",
    categoryEN: "Supplements",
  },
  {
    name: "BIO-SPEED",
    descriptionES:
      "Los adaptógenos como Cordyceps, Rhodiola y Ginseng Panax en combinación ayudan al cuerpo a resistir el estrés y mejorar la energía física y mental.",
    descriptionEN:
      "Adaptogens like Cordyceps, Rhodiola and Panax Ginseng in combination help the body resist stress and improve physical and mental energy.",
    price: "$700.00 MXN",
    image: "/bio-speed-supplement-jar.jpg",
    category: "Suplementos",
    categoryEN: "Supplements",
  },
  {
    name: "BIO-FEM",
    descriptionES:
      "Los Adaptógenos como Schizandra, Rhodiola y Shatavari ayudan al cuerpo a resistir el estrés y equilibrar las hormonas creando una fórmula potente para apoyar la salud hormonal en mujeres jóvenes.",
    descriptionEN:
      "Adaptogens like Schizandra, Rhodiola and Shatavari help the body resist stress and balance hormones creating a powerful formula to support hormonal health in young women.",
    price: "$600.00 MXN",
    image: "/bio-fem-supplement-jar.jpg",
    category: "Suplementos",
    categoryEN: "Supplements",
  },
  {
    name: "BIO-CLIM",
    descriptionES:
      "Los fitoestrógenos presentes en el black cohosh ayudan a equilibrar los niveles hormonales, su combinación con más ingredientes resulta en una sinergia potente para apoyar la salud hormonal en la mujer madura.",
    descriptionEN:
      "Phytoestrogens present in black cohosh help balance hormonal levels, their combination with more ingredients results in a powerful synergy to support hormonal health in mature women.",
    price: "$700.00 MXN",
    image: "/bio-clim-supplement-jar.jpg",
    category: "Suplementos",
    categoryEN: "Supplements",
  },
  {
    name: "BIO-H",
    descriptionES:
      "Apoya en aumentar la energía, la resistencia y libido, combinando Adaptógenos, antiinflamatorios, antioxidantes, nutrientes esenciales y potenciadores de testosterona para mejorar la vitalidad masculina.",
    descriptionEN:
      "Supports increased energy, endurance and libido, combining Adaptogens, anti-inflammatories, antioxidants, essential nutrients and testosterone boosters to improve male vitality.",
    price: "$600.00 MXN",
    image: "/bio-h-supplement-jar.jpg",
    category: "Suplementos",
    categoryEN: "Supplements",
  },
]

const treatments = [
  {
    name: "BIO-LIGHT GLOW",
    descriptionES: "Tratamiento con Dermapen + Glutatión. Ilumina tu rostro desde adentro.",
    descriptionEN: "Dermapen + Glutathione treatment. Illuminate your face from within.",
    price: "$2,500.00 MXN",
    category: "Dermapen",
  },
  {
    name: "BIO-CELL NAD+",
    descriptionES: "Tratamiento con Dermapen + NAD+. Redefine la textura de tu piel y potencia su energía celular.",
    descriptionEN: "Dermapen + NAD+ treatment. Redefine your skin texture and boost its cellular energy.",
    price: "$3,200.00 MXN",
    category: "Dermapen",
  },
  {
    name: "BIO-TENSE SILICIUM",
    descriptionES:
      "Tratamiento con Dermapen + Silicio Orgánico. Devuélvele firmeza, elasticidad y vitalidad a tu piel.",
    descriptionEN: "Dermapen + Organic Silicon treatment. Restore firmness, elasticity and vitality to your skin.",
    price: "$2,500.00 MXN",
    category: "Dermapen",
  },
  {
    name: "BIO-CLEAR DERMA",
    descriptionES: "Tratamiento con Dermapen + Clearskin Cell. Despídete del acné y de las marcas que deja.",
    descriptionEN: "Dermapen + Clearskin Cell treatment. Say goodbye to acne and the marks it leaves.",
    price: "$2,500.00 MXN",
    category: "Dermapen",
  },
  {
    name: "Frente - Toxina Botulínica",
    descriptionES: "Suaviza las líneas horizontales de la frente sin alterar tu expresión natural.",
    descriptionEN: "Smooths horizontal forehead lines without altering your natural expression.",
    price: "$1,500.00 MXN",
    category: "Botox",
  },
  {
    name: "Entrecejo - Toxina Botulínica",
    descriptionES: "Relaja las líneas del entrecejo, devolviendo una expresión más armónica y descansada.",
    descriptionEN: "Relaxes frown lines, restoring a more harmonious and rested expression.",
    price: "$2,500.00 MXN",
    category: "Botox",
  },
  {
    name: "Paquete Completo Botox",
    descriptionES: "Rejuvenecimiento integral del tercio superior del rostro (Frente + Entrecejo + Patas de Gallo).",
    descriptionEN: "Comprehensive rejuvenation of the upper third of the face (Forehead + Frown + Crow's Feet).",
    price: "$5,600.00 MXN",
    category: "Botox",
  },
]

const services = [
  {
    name: "Consulta Integral",
    nameEN: "Comprehensive Consultation",
    descriptionES: "Incluye consulta general, escáner cuántico y ultrasonido de rastreo para un diagnóstico completo.",
    descriptionEN: "Includes general consultation, quantum scanner and tracking ultrasound for a complete diagnosis.",
    price: "$2,500.00 MXN",
    category: "Servicios",
    categoryEN: "Services",
  },
  {
    name: "Nutrición Funcional",
    nameEN: "Functional Nutrition",
    descriptionES: "Alimentación personalizada para equilibrar tu cuerpo y promover salud integral.",
    descriptionEN: "Personalized nutrition to balance your body and promote comprehensive health.",
    price: "$1,000.00 MXN",
    category: "Servicios",
    categoryEN: "Services",
  },
  {
    name: "Células VIP Plus",
    nameEN: "VIP Plus Cells",
    descriptionES:
      "Terapia integral que estimula reparación celular y rejuvenecimiento profundo, reforzado con un tratamiento integral por 6 meses.",
    descriptionEN:
      "Comprehensive therapy that stimulates cellular repair and deep rejuvenation, reinforced with comprehensive treatment for 6 months.",
    price: "$59,000.00 MXN",
    category: "Servicios",
    categoryEN: "Services",
  },
  {
    name: "Membresía Basic",
    nameEN: "Basic Membership",
    descriptionES: "1 Consulta integral, 3 seguimientos, 2 sueros, 20% descuento en suplementos.",
    descriptionEN: "1 Comprehensive consultation, 3 follow-ups, 2 serums, 20% discount on supplements.",
    price: "$6,900.00 MXN",
    category: "Membresías",
    categoryEN: "Memberships",
  },
  {
    name: "Membresía Plus",
    nameEN: "Plus Membership",
    descriptionES: "2 consultas integrales, 3 seguimientos, 3 sueros, 30% descuento en suplementos, 15% células madre.",
    descriptionEN:
      "2 comprehensive consultations, 3 follow-ups, 3 serums, 30% discount on supplements, 15% stem cells.",
    price: "$11,400.00 MXN",
    category: "Membresías",
    categoryEN: "Memberships",
  },
]

export default function TiendaPage() {
  const { language, t } = useLanguage()

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-16" style={{ backgroundColor: "var(--off-white)" }}>
        <div className="container mx-auto px-4" style={{ maxWidth: "1200px" }}>
          <motion.h1
            className="font-primary text-5xl font-semibold text-center mb-4"
            style={{ color: "var(--dark-green)" }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {language === "es" ? "Nuestra Tienda" : "Our Store"}
          </motion.h1>
          <motion.p
            className="text-center text-lg max-w-2xl mx-auto mb-12"
            style={{ color: "var(--medium-green)" }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {language === "es"
              ? "Explora nuestra selección de suplementos funcionales, tratamientos estéticos y servicios médicos diseñados con ciencia y naturaleza."
              : "Explore our selection of functional supplements, aesthetic treatments and medical services designed with science and nature."}
          </motion.p>

          {/* Suplementos Section */}
          <motion.section
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-primary text-3xl font-semibold mb-8" style={{ color: "var(--dark-green)" }}>
              {language === "es" ? "Suplementos" : "Supplements"}
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                gap: "2rem",
              }}
            >
              {supplements.map((product, index) => (
                <motion.div
                  key={product.name}
                  style={{
                    backgroundColor: "#fff",
                    border: "1px solid var(--light-grey-green)",
                    borderRadius: "8px",
                    overflow: "hidden",
                    boxShadow: "0 4px 12px rgba(63, 77, 61, 0.05)",
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  whileHover={{ y: -4, boxShadow: "0 8px 20px rgba(63, 77, 61, 0.12)" }}
                >
                  <div
                    style={{
                      height: "280px",
                      width: "100%",
                      position: "relative",
                      overflow: "hidden",
                      backgroundColor: "var(--off-white)",
                    }}
                  >
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div style={{ padding: "1.5rem" }}>
                    <h3 className="font-primary text-xl font-semibold mb-2" style={{ color: "var(--dark-green)" }}>
                      {product.name}
                    </h3>
                    <p
                      className="text-sm mb-4"
                      style={{
                        color: "var(--medium-green)",
                        lineHeight: "1.6",
                        minHeight: "60px",
                      }}
                    >
                      {language === "es" ? product.descriptionES : product.descriptionEN}
                    </p>
                    <p className="text-lg font-semibold mb-3" style={{ color: "var(--dark-green)" }}>
                      {product.price}
                    </p>
                    <button
                      style={{
                        width: "100%",
                        padding: "0.75rem",
                        backgroundColor: "var(--sage-green)",
                        color: "#fff",
                        border: "none",
                        borderRadius: "4px",
                        fontWeight: "600",
                        cursor: "pointer",
                        transition: "background-color 0.3s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "var(--dark-green)"
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "var(--sage-green)"
                      }}
                    >
                      {language === "es" ? "Agregar al carrito" : "Add to cart"}
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Tratamientos Section */}
          <motion.section
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-primary text-3xl font-semibold mb-8" style={{ color: "var(--dark-green)" }}>
              {language === "es" ? "Tratamientos Estéticos" : "Aesthetic Treatments"}
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                gap: "2rem",
              }}
            >
              {treatments.map((product, index) => (
                <motion.div
                  key={product.name}
                  style={{
                    backgroundColor: "#fff",
                    border: "1px solid var(--light-grey-green)",
                    borderRadius: "8px",
                    padding: "1.5rem",
                    boxShadow: "0 4px 12px rgba(63, 77, 61, 0.05)",
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  whileHover={{ y: -4, boxShadow: "0 8px 20px rgba(63, 77, 61, 0.12)" }}
                >
                  <span
                    className="text-xs font-semibold px-3 py-1 rounded-full inline-block mb-3"
                    style={{
                      backgroundColor: "var(--light-sage)",
                      color: "var(--dark-green)",
                    }}
                  >
                    {product.category}
                  </span>
                  <h3 className="font-primary text-xl font-semibold mb-2" style={{ color: "var(--dark-green)" }}>
                    {product.name}
                  </h3>
                  <p
                    className="text-sm mb-4"
                    style={{
                      color: "var(--medium-green)",
                      lineHeight: "1.6",
                      minHeight: "60px",
                    }}
                  >
                    {language === "es" ? product.descriptionES : product.descriptionEN}
                  </p>
                  <p className="text-lg font-semibold mb-3" style={{ color: "var(--dark-green)" }}>
                    {product.price}
                  </p>
                  <button
                    style={{
                      width: "100%",
                      padding: "0.75rem",
                      backgroundColor: "var(--sage-green)",
                      color: "#fff",
                      border: "none",
                      borderRadius: "4px",
                      fontWeight: "600",
                      cursor: "pointer",
                      transition: "background-color 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "var(--dark-green)"
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "var(--sage-green)"
                    }}
                  >
                    {language === "es" ? "Agendar cita" : "Schedule appointment"}
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Servicios y Membresías Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-primary text-3xl font-semibold mb-8" style={{ color: "var(--dark-green)" }}>
              {language === "es" ? "Servicios y Membresías" : "Services and Memberships"}
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                gap: "2rem",
              }}
            >
              {services.map((product, index) => (
                <motion.div
                  key={product.name}
                  style={{
                    backgroundColor: "#fff",
                    border: "1px solid var(--light-grey-green)",
                    borderRadius: "8px",
                    padding: "1.5rem",
                    boxShadow: "0 4px 12px rgba(63, 77, 61, 0.05)",
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  whileHover={{ y: -4, boxShadow: "0 8px 20px rgba(63, 77, 61, 0.12)" }}
                >
                  <span
                    className="text-xs font-semibold px-3 py-1 rounded-full inline-block mb-3"
                    style={{
                      backgroundColor: "var(--light-sage)",
                      color: "var(--dark-green)",
                    }}
                  >
                    {language === "es" ? product.category : product.categoryEN}
                  </span>
                  <h3 className="font-primary text-xl font-semibold mb-2" style={{ color: "var(--dark-green)" }}>
                    {language === "es" ? product.name : product.nameEN}
                  </h3>
                  <p
                    className="text-sm mb-4"
                    style={{
                      color: "var(--medium-green)",
                      lineHeight: "1.6",
                      minHeight: "60px",
                    }}
                  >
                    {language === "es" ? product.descriptionES : product.descriptionEN}
                  </p>
                  <p className="text-lg font-semibold mb-3" style={{ color: "var(--dark-green)" }}>
                    {product.price}
                  </p>
                  <button
                    style={{
                      width: "100%",
                      padding: "0.75rem",
                      backgroundColor: "var(--sage-green)",
                      color: "#fff",
                      border: "none",
                      borderRadius: "4px",
                      fontWeight: "600",
                      cursor: "pointer",
                      transition: "background-color 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "var(--dark-green)"
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "var(--sage-green)"
                    }}
                  >
                    {language === "es" ? "Más información" : "More information"}
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>
      </main>
      <Footer />
    </>
  )
}
