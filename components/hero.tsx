"use client"

import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"
import { useLocale } from "@/lib/locale-context"
import { getTranslation } from "@/lib/i18n"

export function Hero() {
  const { locale } = useLocale()
  const t = getTranslation(locale)

  const openBooking = () => {
    const whatsappPhone = "972545758003" // Eyal's phone in international format
    const message = 
      locale === "he"
        ? "שלום! אני מעוניין/ת להזמין ייעוץ"
        : locale === "en"
          ? "Hello! I would like to book a consultation"
          : "Здравствуйте! Я хотел бы записаться на консультацию"
    const whatsappUrl = `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16 px-4">
      <div className="absolute inset-0 -z-10">
        <img src="/wooden-workshop-with-natural-light-and-crafted-fur.jpg" alt={t.workshop} className="w-full h-full object-cover opacity-10" />
      </div>

      <div className="container mx-auto max-w-5xl text-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-light mb-6 text-balance leading-tight">{t.heroTitle}</h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
          {t.heroSubtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" onClick={openBooking} className="text-base">
            {t.consultation}
            <Calendar className="ml-2 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => {
              const element = document.getElementById("portfolio")
              if (element) element.scrollIntoView({ behavior: "smooth" })
            }}
          >
            {t.viewWork}
          </Button>
        </div>
      </div>
    </section>
  )
}
