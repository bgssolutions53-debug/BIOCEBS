"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import styles from "./featured-products.module.css"

export default function FeaturedProducts() {
  const { t } = useLanguage()

  const products = [
    {
      name: "BIO-CALM",
      description: t("products.biocalm.description"),
      price: "$600.00 MXN",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-QK3GYl7RHwvRhcDregCkNbzL31lGOM.png",
    },
    {
      name: "BIO-BRAIN",
      description: t("products.biobrain.description"),
      price: "$700.00 MXN",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-XSJSIQrdyPIgUQIOqAQ17ANfyJJMWO.png",
    },
    {
      name: "BIO-GASTRO",
      description: t("products.biogastro.description"),
      price: "$600.00 MXN",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-o004DAuOBB3ryuHFQZrRwqzZn5txjO.png",
    },
  ]

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {t("featured.title")}
        </motion.h2>
        <div className={styles.grid}>
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={400}
                  height={400}
                  className={styles.productImage}
                />
              </div>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <span className={styles.price}>{product.price}</span>
              <Link href="/tienda" className={styles.link}>
                {t("featured.cta")}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
