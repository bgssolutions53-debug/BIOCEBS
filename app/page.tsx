import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import TrustBar from "@/components/trust-bar"
import Categories from "@/components/categories"
import FeaturedProducts from "@/components/featured-products"
import PhilosophySteps from "@/components/philosophy-steps"
import Testimonials from "@/components/testimonials"
import BlogPreview from "@/components/blog-preview"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Categories />
        <FeaturedProducts />
        <PhilosophySteps />
        <Testimonials />
        <BlogPreview />
      </main>
      <Footer />
    </>
  )
}
