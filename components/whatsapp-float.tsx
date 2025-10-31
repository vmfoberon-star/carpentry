"use client"

import { MessageCircle } from "lucide-react"
import { useLocale } from "@/lib/locale-context"

export function WhatsAppFloat() {
  const { locale } = useLocale()

  const handleClick = () => {
    const whatsappPhone = "972545758003"
    const message = 
      locale === "he"
        ? "שלום! הגעתי דרך האתר שלכם ואני מעוניין/ת במידע נוסף."
        : locale === "en"
          ? "Hello! I came through your website and I'm interested in more information."
          : "Здравствуйте! Узнал о вас через ваш сайт и хочу получить больше информации."
    const whatsappUrl = `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <div 
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg cursor-pointer transition-all duration-300 hover:scale-110 flex items-center gap-2 px-4 py-3"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="hidden sm:inline font-semibold">
        {locale === "he" ? "צ'אט" : locale === "en" ? "Chat" : "Чат"}
      </span>
    </div>
  )
}

