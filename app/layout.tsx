import type React from "react"
import type { Metadata } from "next"
import { Cormorant_Garamond, Lato } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { LanguageProvider } from "@/lib/language-context"
import "./globals.css"

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-primary",
})

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-secondary",
})

export const metadata: Metadata = {
  title: "BIOCEBS - Medicina Funcional y Bienestar Integral",
  description:
    "Redescubre tu bienestar con medicina funcional y suplementos puros diseñados para ti. Ciencia y naturaleza en equilibrio.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${cormorantGaramond.variable} ${lato.variable} font-secondary antialiased`}>
        <LanguageProvider>{children}</LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
