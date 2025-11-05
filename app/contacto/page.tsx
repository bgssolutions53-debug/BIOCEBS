import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ContactClient from "./contact-client"

export const metadata = {
  title: "Contacto - BIOCEBS",
  description: "Contáctanos para más información sobre nuestros productos y servicios de medicina funcional",
}

export default function ContactoPage() {
  return (
    <>
      <Navbar />
      <ContactClient />
      <Footer />
    </>
  )
}
