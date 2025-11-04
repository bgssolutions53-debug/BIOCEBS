"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { User, ShoppingBag, Globe } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import styles from "./navbar.module.css"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const toggleLanguage = (lang: "es" | "en") => {
    setLanguage(lang)
    setIsLangDropdownOpen(false)
  }

  return (
    <header className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <Image
            src="/logoverde.png"
            alt="BIOCEBS"
            width={120}
            height={60}
            className={styles.logoImage}
            priority
          />
        </Link>

        <nav className={`${styles.navMenu} ${isMenuOpen ? styles.active : ""}`}>
          <ul className={styles.navLinks}>
            <li>
              <Link href="/#inicio" onClick={closeMenu}>
                {t("nav.home")}
              </Link>
            </li>
            <li>
              <Link href="/nosotros" onClick={closeMenu}>
                {t("nav.about")}
              </Link>
            </li>
            <li>
              <Link href="/tienda" onClick={closeMenu}>
                {t("nav.shop")}
              </Link>
            </li>
            <li>
              <Link href="/servicios" onClick={closeMenu}>
                {t("nav.services")}
              </Link>
            </li>
            <li>
              <Link href="/blog" onClick={closeMenu}>
                {t("nav.blog")}
              </Link>
            </li>
            <li>
              <Link href="/eventos" onClick={closeMenu}>
                {t("nav.events")}
              </Link>
            </li>
            <li>
              <Link href="/contacto" onClick={closeMenu}>
                {t("nav.contact")}
              </Link>
            </li>
          </ul>
        </nav>

        <div className={styles.navExtra}>
          <div className={styles.langDropdown}>
            <button
              className={styles.navIcon}
              onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
              aria-label="Cambiar idioma"
            >
              <Globe size={24} />
              <span className={styles.langLabel}>{language.toUpperCase()}</span>
            </button>
            {isLangDropdownOpen && (
              <div className={styles.langMenu}>
                <button onClick={() => toggleLanguage("es")} className={language === "es" ? styles.active : ""}>
                  Español
                </button>
                <button onClick={() => toggleLanguage("en")} className={language === "en" ? styles.active : ""}>
                  English
                </button>
              </div>
            )}
          </div>
          <Link href="#" className={styles.navIcon} aria-label="Mi Cuenta">
            <User size={24} />
          </Link>
          <Link href="#" className={styles.navIcon} aria-label="Carrito de compras">
            <ShoppingBag size={24} />
          </Link>
          <button
            className={`${styles.navToggle} ${isMenuOpen ? styles.active : ""}`}
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  )
}
