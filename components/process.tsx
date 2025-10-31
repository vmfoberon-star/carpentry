"use client"

import { useEffect, useRef, useState } from "react"
import { CalendarCheck, Palette, CheckCircle, Hammer, Truck } from "lucide-react"
import { Card } from "@/components/ui/card"
import { useLocale } from "@/lib/locale-context"
import { getTranslation } from "@/lib/i18n"

const steps = [
  {
    icon: CalendarCheck,
    number: "01"
  },
  {
    icon: Palette,
    number: "02"
  },
  {
    icon: CheckCircle,
    number: "03"
  },
  {
    icon: Hammer,
    number: "04"
  },
  {
    icon: Truck,
    number: "05"
  }
]

export function Process() {
  const { locale } = useLocale()
  const t = getTranslation(locale)
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const stepData = [
    {
      title: t.step1Title,
      description: t.step1Desc
    },
    {
      title: t.step2Title,
      description: t.step2Desc
    },
    {
      title: t.step3Title,
      description: t.step3Desc
    },
    {
      title: t.step4Title,
      description: t.step4Desc
    },
    {
      title: t.step5Title,
      description: t.step5Desc
    }
  ]

  return (
    <section
      id="process"
      ref={sectionRef}
      className={`py-24 px-4 transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-balance">{t.processTitle}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">{t.processSubtitle}</p>
        </div>

        <div className="grid md:grid-cols-5 gap-6">
          {stepData.map((step, index) => {
            const IconComponent = steps[index].icon
            return (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow text-center">
                <div className="flex flex-col items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-muted-foreground/30 mb-2">{steps[index].number}</div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

