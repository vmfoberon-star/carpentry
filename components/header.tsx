"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LanguageSwitcher } from "@/components/language-switcher"
import { ThemeToggle } from "@/components/theme-toggle"
import { useLocale } from "@/lib/locale-context"
import { getTranslation } from "@/lib/i18n"
import Image from "next/image"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { locale } = useLocale()
  const t = getTranslation(locale)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Image src="/barnea-logo.png" alt="Barnea" width={80} height={80} className="w-20 h-20" />
            <span className="text-2xl font-semibold tracking-tight">{t.workshop}</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-xl font-semibold text-foreground hover:text-primary transition-colors"
            >
              {t.about}
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-xl font-semibold text-foreground hover:text-primary transition-colors"
            >
              {t.services}
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-xl font-semibold text-foreground hover:text-primary transition-colors"
            >
              {t.portfolio}
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-xl font-semibold text-foreground hover:text-primary transition-colors"
            >
              {t.contact}
            </button>
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <ThemeToggle />
            <LanguageSwitcher />
            <Button onClick={() => scrollToSection("contact")}>{t.consultation}</Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <LanguageSwitcher />
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2" aria-label="Toggle menu">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection("about")}
              className="text-left py-2 text-lg font-semibold hover:text-primary transition-colors"
            >
              {t.about}
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-left py-2 text-lg font-semibold hover:text-primary transition-colors"
            >
              {t.services}
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-left py-2 text-lg font-semibold hover:text-primary transition-colors"
            >
              {t.portfolio}
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-left py-2 text-lg font-semibold hover:text-primary transition-colors"
            >
              {t.contact}
            </button>
            <Button onClick={() => scrollToSection("contact")} className="w-full">
              {t.consultation}
            </Button>
          </nav>
        )}
      </div>
    </header>
  )
}
