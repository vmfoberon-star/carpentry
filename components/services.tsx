"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useLocale } from "@/lib/locale-context"
import { getTranslation } from "@/lib/i18n"

export function Services() {
  const { locale } = useLocale()
  const t = getTranslation(locale)

  const services = [
    {
      title: t.customFurniture,
      description: t.customFurnitureDesc,
      image: "/custom-wooden-furniture-table-and-chairs.jpg",
    },
    {
      title: t.restoration,
      description: t.restorationDesc,
      image: "/furniture-restoration-antique-wood.jpg",
    },
    {
      title: t.interiorItems,
      description: t.interiorItemsDesc,
      image: "/wooden-home-decor-accessories-shelves.jpg",
    },
    {
      title: t.electricalWork,
      description: t.electricalWorkDesc,
      image: "/electrical-work-lighting-installation.jpg",
    },
  ]

  return (
    <section id="services" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-balance">{t.servicesTitle}</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
