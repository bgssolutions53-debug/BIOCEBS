"use client"

import Link from "next/link";
import NextImage from "next/image";
import { Facebook, Instagram } from "lucide-react"
import styles from "./footer.module.css"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.brand}>
          <Link href="/" className={styles.logo}>
              <NextImage
                src="/logo.png"      // archivo en /public/logo.png
                alt="Logo BIO"
                width={40}
                height={40}
                className={styles.logoImg}
              />
            
            </Link>


            <p>Ciencia y naturaleza en equilibrio para tu bienestar integral.</p>
            <div className={styles.social}>
              <Link href="#" aria-label="Facebook">
                <Facebook size={24} />
              </Link>
              <Link href="#" aria-label="Instagram">
                <Instagram size={24} />
              </Link>
            </div>
          </div>

          <div className={styles.col}>
            <h3>Tienda</h3>
            <ul>
              <li>
                <Link href="/tienda">Mente y Enfoque</Link>
              </li>
              <li>
                <Link href="/tienda">Salud Intestinal</Link>
              </li>
              <li>
                <Link href="/tienda">Energía y Vitalidad</Link>
              </li>
              <li>
                <Link href="/tienda">Ver Todo</Link>
              </li>
            </ul>
          </div>

          <div className={styles.col}>
            <h3>Compañía</h3>
            <ul>
              <li>
                <Link href="/#filosofia">Nuestra Filosofía</Link>
              </li>
              <li>
                <Link href="/blog">Blog (Recursos)</Link>
              </li>
              <li>
                <Link href="/#contacto">Contacto</Link>
              </li>
              <li>
                <Link href="#">Portal Empleados (LMS)</Link>
              </li>
            </ul>
          </div>

          <div className={styles.col}>
            <h3>Únete a la comunidad</h3>
            <p>Recibe artículos y promociones exclusivas.</p>
            <form className={styles.newsletter}>
              <input type="email" placeholder="Tu correo electrónico" aria-label="Correo electrónico" />
              <button type="submit" aria-label="Suscribirse">
                →
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>&copy; 2025 BIOCEBS. Todos los derechos reservados.</p>
        <p>
          <Link href="#">Términos y Condiciones</Link> | <Link href="#">Política de Privacidad</Link>
        </p>
        <p>
          <Link href="#">Designed By Bin Garcia</Link>
        </p>
      </div>
    </footer>
  )
}
