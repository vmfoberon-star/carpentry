"use client"

import { useEffect, useRef, useState } from "react"
import { Award, Shield, TrendingUp, CheckCircle } from "lucide-react"
import { useLocale } from "@/lib/locale-context"
import { getTranslation } from "@/lib/i18n"

export function TrustBadges() {
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

  const badges = [
    {
      icon: Award,
      title: t.badgeYearsBusiness,
      subtitle: t.badgeExperienced,
    },
    {
      icon: Shield,
      title: t.badgeQuality,
      subtitle: t.badgeGuaranteed,
    },
    {
      icon: TrendingUp,
      title: t.badgeSatisfaction,
      subtitle: t.badgeHappyClients,
    },
    {
      icon: CheckCircle,
      title: t.badgeProfessionalism,
      subtitle: t.badgeCertified,
    },
  ]

  return (
    <section 
      ref={sectionRef}
      className={`py-16 px-4 bg-background transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {badges.map((badge, index) => {
            const Icon = badge.icon
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 rounded-lg hover:bg-muted/50 transition-colors"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-1">{badge.title}</h3>
                <p className="text-sm text-muted-foreground">{badge.subtitle}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

