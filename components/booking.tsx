"use client"

import { useState } from "react"
import { CalendarIcon, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent } from "@/components/ui/card"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { he, enUS, ru } from "date-fns/locale"
import { useLocale } from "@/lib/locale-context"
import { getTranslation } from "@/lib/i18n"
import { cn } from "@/lib/utils"

const timeSlots = [
  "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", 
  "15:00", "16:00", "17:00", "18:00"
]

const dateLocales = {
  he,
  en: enUS,
  ru
}

export function Booking() {
  const { locale } = useLocale()
  const t = getTranslation(locale)
  const [selectedDate, setSelectedDate] = useState<Date>()
  const [selectedTime, setSelectedTime] = useState<string>("")

  const formatDate = (date: Date) => {
    return format(date, "PPP", { locale: dateLocales[locale] })
  }

  const handleBooking = () => {
    if (!selectedDate || !selectedTime) return
    
    const dateStr = formatDate(selectedDate)
    const whatsappMessage = 
      locale === "he"
        ? `שלום! אני מעוניין להזמין ייעוץ.\nתאריך: ${dateStr}\nשעה: ${selectedTime}`
        : locale === "en"
          ? `Hello! I would like to book a consultation.\nDate: ${dateStr}\nTime: ${selectedTime}`
          : `Здравствуйте! Я хочу заказать консультацию.\nДата: ${dateStr}\nВремя: ${selectedTime}`
    
    const whatsappPhone = "972545758003"
    const whatsappUrl = `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(whatsappMessage)}`
    window.open(whatsappUrl, '_blank')
  }

  const isComplete = selectedDate && selectedTime

  return (
    <section id="booking" className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-balance">{t.bookingTitle}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">{t.bookingSubtitle}</p>
        </div>

        <Card className="max-w-4xl mx-auto">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Date Selection */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <CalendarIcon className="w-5 h-5 text-primary" />
                  <h3 className="text-xl font-semibold">{t.selectDate}</h3>
                </div>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !selectedDate && "text-muted-foreground"
                      )}
                    >
                      {selectedDate ? formatDate(selectedDate) : t.pickDate}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      disabled={(date) => date < new Date()}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>

              {/* Time Selection */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-5 h-5 text-primary" />
                  <h3 className="text-xl font-semibold">{t.selectTime}</h3>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {timeSlots.map((time) => (
                    <Button
                      key={time}
                      variant={selectedTime === time ? "default" : "outline"}
                      onClick={() => setSelectedTime(time)}
                      className="font-mono"
                    >
                      {time}
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            {/* Confirm Button */}
            <div className="mt-8">
              <Button 
                size="lg" 
                className="w-full" 
                onClick={handleBooking}
                disabled={!isComplete}
              >
                {t.confirmBooking}
              </Button>
            </div>

            <p className="text-sm text-muted-foreground text-center mt-4">
              {t.bookingNote}
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

