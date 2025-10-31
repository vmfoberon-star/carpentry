"use client"

import { useEffect, useState } from "react"
import { Hammer, Heart, Award } from "lucide-react"
import { useLocale } from "@/lib/locale-context"
import { getTranslation } from "@/lib/i18n"

interface AnimatedNumberProps {
  target: number
  suffix?: string
  duration?: number
}

function AnimatedNumber({ target, suffix = "+", duration = 2000 }: AnimatedNumberProps) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (hasAnimated) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          
          const increment = target / (duration / 16)
          let current = 0

          const timer = setInterval(() => {
            current += increment
            if (current >= target) {
              setCount(target)
              clearInterval(timer)
            } else {
              setCount(Math.floor(current))
            }
          }, 16)
        }
      },
      { threshold: 0.5 }
    )

    const element = document.getElementById("stats-section")
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [target, hasAnimated, duration])

  return (
    <p className="text-4xl font-light text-primary mb-2">
      {count}{suffix}
    </p>
  )
}

export function About() {
  const { locale } = useLocale()
  const t = getTranslation(locale)

  return (
    <section id="about" className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-4xl md:text-5xl font-light mb-6 text-balance">{t.aboutTitle}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">{t.aboutText1}</p>
            <p className="text-lg text-muted-foreground leading-relaxed">{t.aboutText2}</p>
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden">
            <img src="/carpenter-working-with-wood-in-workshop.jpg" alt={t.workshop} className="w-full h-full object-cover" />
          </div>
        </div>

        <div id="stats-section" className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
              <Hammer className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">{t.experience}</h3>
            <AnimatedNumber target={20} suffix="+" />
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
              <Heart className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">{t.projects}</h3>
            <AnimatedNumber target={500} suffix="+" duration={2500} />
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
              <Award className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">{t.clients}</h3>
            <AnimatedNumber target={300} suffix="+" duration={2500} />
          </div>
        </div>
      </div>
    </section>
  )
}
