"use client"

import { useState } from "react"
import { Calculator } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useLocale } from "@/lib/locale-context"
import { getTranslation } from "@/lib/i18n"

export function PricingCalculator() {
  const { locale } = useLocale()
  const t = getTranslation(locale)

  const [furnitureType, setFurnitureType] = useState("")
  const [woodType, setWoodType] = useState("")
  const [length, setLength] = useState("")
  const [width, setWidth] = useState("")
  const [height, setHeight] = useState("")
  const [estimate, setEstimate] = useState<number | null>(null)

  // Base prices per cubic meter for different wood types (in NIS)
  const woodPrices: Record<string, number> = {
    oak: 8000, // אלון / Oak / Дуб
    pine: 4000, // אורן / Pine / Сосна
    walnut: 12000, // אגוז / Walnut / Грецкий орех
    cedar: 6000, // ארז / Cedar / Кедр
  }

  // Multipliers for different furniture types
  const furnitureMultipliers: Record<string, number> = {
    table: 1.2, // שולחן / Table / Стол
    chair: 0.8, // כיסא / Chair / Стул
    cabinet: 1.5, // ארון / Cabinet / Шкаф
    bed: 1.8, // מיטה / Bed / Кровать
    shelf: 0.6, // מדף / Shelf / Полка
    door: 1.3, // דלת / Door / Дверь
  }

  const furnitureTypes = [
    { value: "table", label: locale === "he" ? "שולחן" : locale === "en" ? "Table" : "Стол" },
    { value: "chair", label: locale === "he" ? "כיסא" : locale === "en" ? "Chair" : "Стул" },
    { value: "cabinet", label: locale === "he" ? "ארון" : locale === "en" ? "Cabinet" : "Шкаф" },
    { value: "bed", label: locale === "he" ? "מיטה" : locale === "en" ? "Bed" : "Кровать" },
    { value: "shelf", label: locale === "he" ? "מדף" : locale === "en" ? "Shelf" : "Полка" },
    { value: "door", label: locale === "he" ? "דלת" : locale === "en" ? "Door" : "Дверь" },
  ]

  const woodTypes = [
    { value: "oak", label: locale === "he" ? "אלון" : locale === "en" ? "Oak" : "Дуб" },
    { value: "pine", label: locale === "he" ? "אורן" : locale === "en" ? "Pine" : "Сосна" },
    { value: "walnut", label: locale === "he" ? "אגוז" : locale === "en" ? "Walnut" : "Грецкий орех" },
    { value: "cedar", label: locale === "he" ? "ארז" : locale === "en" ? "Cedar" : "Кедр" },
  ]

  const calculatePrice = () => {
    if (!furnitureType || !woodType || !length || !width || !height) {
      return
    }

    const l = parseFloat(length)
    const w = parseFloat(width)
    const h = parseFloat(height)

    if (isNaN(l) || isNaN(w) || isNaN(h) || l <= 0 || w <= 0 || h <= 0) {
      return
    }

    // Calculate volume in cubic meters
    const volumeInM3 = (l * w * h) / 1000000 // Convert cm³ to m³

    // Get base price and multiplier
    const basePrice = woodPrices[woodType] || 6000
    const multiplier = furnitureMultipliers[furnitureType] || 1.0

    // Calculate estimate
    const calculated = volumeInM3 * basePrice * multiplier

    // Round to nearest 100
    setEstimate(Math.round(calculated / 100) * 100)
  }

  return (
    <section id="calculator" className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
            <Calculator className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-balance">{t.calculatorTitle}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t.calculatorSubtitle}</p>
        </div>

        <Card>
          <CardContent className="p-8">
            <div className="space-y-6">
              <div>
                <Label htmlFor="furniture-type" className="text-base font-semibold mb-2 block">
                  {t.selectFurnitureType}
                </Label>
                <Select value={furnitureType} onValueChange={setFurnitureType}>
                  <SelectTrigger id="furniture-type" className="w-full">
                    <SelectValue placeholder={t.selectFurnitureType} />
                  </SelectTrigger>
                  <SelectContent>
                    {furnitureTypes.map((type) => (
                      <SelectItem key={type.value} value={type.value}>
                        {type.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="wood-type" className="text-base font-semibold mb-2 block">
                  {t.selectMaterial}
                </Label>
                <Select value={woodType} onValueChange={setWoodType}>
                  <SelectTrigger id="wood-type" className="w-full">
                    <SelectValue placeholder={t.selectMaterial} />
                  </SelectTrigger>
                  <SelectContent>
                    {woodTypes.map((wood) => (
                      <SelectItem key={wood.value} value={wood.value}>
                        {wood.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label className="text-base font-semibold mb-4 block">{t.enterDimensions}</Label>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="length" className="text-sm text-muted-foreground mb-2 block">
                      {t.length}
                    </Label>
                    <Input
                      id="length"
                      type="number"
                      placeholder="100"
                      value={length}
                      onChange={(e) => setLength(e.target.value)}
                      className="font-mono"
                    />
                  </div>
                  <div>
                    <Label htmlFor="width" className="text-sm text-muted-foreground mb-2 block">
                      {t.width}
                    </Label>
                    <Input
                      id="width"
                      type="number"
                      placeholder="50"
                      value={width}
                      onChange={(e) => setWidth(e.target.value)}
                      className="font-mono"
                    />
                  </div>
                  <div>
                    <Label htmlFor="height" className="text-sm text-muted-foreground mb-2 block">
                      {t.height}
                    </Label>
                    <Input
                      id="height"
                      type="number"
                      placeholder="30"
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                      className="font-mono"
                    />
                  </div>
                </div>
              </div>

              <Button onClick={calculatePrice} className="w-full" size="lg" disabled={!furnitureType || !woodType}>
                {t.calculate}
              </Button>

              {estimate !== null && (
                <div className="mt-6 p-6 bg-primary/10 rounded-lg border border-primary/20">
                  <p className="text-sm text-muted-foreground mb-2">{t.estimatedPrice}</p>
                  <p className="text-4xl font-bold text-primary mb-4">
                    {estimate.toLocaleString()} ₪
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{t.disclaimer}</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

