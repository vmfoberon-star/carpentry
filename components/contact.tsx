"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react"
import { useLocale } from "@/lib/locale-context"
import { getTranslation } from "@/lib/i18n"

export function Contact() {
  const { locale } = useLocale()
  const t = getTranslation(locale)

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Show confirmation (standard form submission)
    alert(
      locale === "he"
        ? "תודה על פנייתך! ניצור איתך קשר בקרוב."
        : locale === "en"
          ? "Thank you for your inquiry! We will contact you soon."
          : "Спасибо за обращение! Мы свяжемся с вами в ближайшее время.",
    )
    setFormData({ name: "", phone: "", email: "", message: "" })
  }

  const handleWhatsApp = (e: React.MouseEvent) => {
    e.preventDefault()
    
    // Format message for WhatsApp
    const whatsappMessage = 
      locale === "he"
        ? `שלום! הגעתי דרך האתר שלכם.\n\nשם: ${formData.name}\nטלפון: ${formData.phone}\nאימייל: ${formData.email}\n\nהודעה:\n${formData.message}`
        : locale === "en"
          ? `Hello! I came through your website.\n\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
          : `Здравствуйте! Я узнал о вас через ваш сайт.\n\nИмя: ${formData.name}\nТелефон: ${formData.phone}\nEmail: ${formData.email}\n\nСообщение:\n${formData.message}`
    
    // Open WhatsApp with pre-filled message
    const whatsappPhone = "972545758003" // Eyal's phone in international format
    const whatsappUrl = `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(whatsappMessage)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <section id="contact" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-balance">{t.contactTitle}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">{t.contactSubtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  placeholder={t.name}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="font-mono"
                />
              </div>
              <div>
                <Input
                  type="tel"
                  placeholder={t.phone}
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="font-mono"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder={t.email}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="font-mono"
                />
              </div>
              <div>
                <Textarea
                  placeholder={t.message}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={6}
                  className="font-mono resize-none"
                />
              </div>
              <div className="flex gap-4">
                <Button type="submit" size="lg" className="flex-1">
                  {t.send}
                </Button>
                <Button 
                  type="button" 
                  size="lg" 
                  variant="outline" 
                  onClick={handleWhatsApp}
                  className="flex-1"
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  {t.sendWhatsApp}
                </Button>
              </div>
            </form>
          </div>

          <div className="space-y-8">
            <div>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">{t.phone}</p>
                    <p className="text-muted-foreground font-mono whitespace-pre-line">{t.phoneValue}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">{t.email}</p>
                    <p className="text-muted-foreground font-mono">{t.emailValue}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">{t.address}</p>
                    <a 
                      href="https://www.google.com/maps/search/?api=1&query=רחוב+הנגרים+15,+תל+אביב"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors underline"
                    >
                      {t.addressValue}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-muted/50 p-6 rounded-lg">
              <h4 className="font-semibold mb-3">{t.hours}</h4>
              <p className="text-muted-foreground">{t.hoursValue}</p>
            </div>
          </div>
        </div>

        {/* Google Maps */}
        <div className="mt-16">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-light">{t.mapTitle || "Find Us"}</h3>
            <Button variant="outline" size="sm" asChild>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=רחוב+הנגרים+15,+תל+אביב"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.getDirections || "Get Directions"}
              </a>
            </Button>
          </div>
          <div className="w-full h-96 rounded-lg overflow-hidden border border-border shadow-lg">
            <iframe
              src="https://www.google.com/maps?q=רחוב+הנגרים+15,+תל+אביב&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Workshop Location"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
