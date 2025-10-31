import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Testimonials } from "@/components/testimonials"
import { Services } from "@/components/services"
import { Portfolio } from "@/components/portfolio"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Testimonials />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  )
}
