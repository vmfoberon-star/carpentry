"use client"

import { Star } from "lucide-react"
import { Card } from "@/components/ui/card"
import { useLocale } from "@/lib/locale-context"
import { getTranslation } from "@/lib/i18n"

export function Testimonials() {
  const { locale } = useLocale()
  const t = getTranslation(locale)

  const testimonials = [
    {
      name: t.testimonial1Name,
      role: t.testimonial1Role,
      text: t.testimonial1Text,
      rating: 5,
    },
    {
      name: t.testimonial2Name,
      role: t.testimonial2Role,
      text: t.testimonial2Text,
      rating: 5,
    },
    {
      name: t.testimonial3Name,
      role: t.testimonial3Role,
      text: t.testimonial3Text,
      rating: 5,
    },
  ]

  return (
    <section id="testimonials" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-balance">{t.testimonialsTitle}</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6 italic">"{testimonial.text}"</p>
              <div>
                <p className="font-semibold text-lg">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

