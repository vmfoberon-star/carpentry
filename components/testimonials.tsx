"use client"

import { useEffect, useRef, useState } from "react"
import { Star, ExternalLink } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import { useLocale } from "@/lib/locale-context"
import { getTranslation } from "@/lib/i18n"

export function Testimonials() {
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

  const testimonials = [
    {
      name: t.testimonial1Name,
      role: t.testimonial1Role,
      text: t.testimonial1Text,
      rating: 5,
      photo: "/placeholder-user.jpg",
      link: "#",
    },
    {
      name: t.testimonial2Name,
      role: t.testimonial2Role,
      text: t.testimonial2Text,
      rating: 5,
      photo: "/placeholder-user.jpg",
      link: "#",
    },
    {
      name: t.testimonial3Name,
      role: t.testimonial3Role,
      text: t.testimonial3Text,
      rating: 5,
      photo: "/placeholder-user.jpg",
      link: "#",
    },
  ]

  return (
    <section 
      ref={sectionRef}
      id="testimonials" 
      className={`py-24 px-4 bg-muted/30 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-balance">{t.testimonialsTitle}</h2>
        </div>

        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="p-8 h-full hover:shadow-lg transition-shadow">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-6 italic">&ldquo;{testimonial.text}&rdquo;</p>
                    <div className="flex items-center gap-4 mt-6">
                      <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                        <img
                          src={testimonial.photo}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-lg truncate">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground truncate">{testimonial.role}</p>
                      </div>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-12 hidden lg:flex" />
            <CarouselNext className="-right-12 hidden lg:flex" />
          </Carousel>
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            asChild
            className="gap-2"
          >
            <a
              href="https://www.instagram.com/barnea_woodworking?igsh=MW4zODZsaHhqb3U0ZA%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.viewAllReviews}
              <ExternalLink className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
