"use client"

import { useLocale } from "@/lib/locale-context"
import { getTranslation } from "@/lib/i18n"

export function Footer() {
  const { locale } = useLocale()
  const t = getTranslation(locale)

  return (
    <footer className="bg-primary text-primary-foreground py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary-foreground rounded-sm" />
              <span className="text-xl font-semibold">{t.workshop}</span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">{t.footerText}</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">{t.quickLinks}</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <a href="#about" className="hover:text-primary-foreground transition-colors">
                  {t.about}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary-foreground transition-colors">
                  {t.services}
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-primary-foreground transition-colors">
                  {t.portfolio}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary-foreground transition-colors">
                  {t.contact}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">{t.contact}</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li className="font-mono whitespace-pre-line">{t.phoneValue}</li>
              <li className="font-mono">{t.emailValue}</li>
              <li>{t.addressValue}</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/60 text-sm">
          <p>
            © {new Date().getFullYear()} {t.workshop}. {t.rights}.
          </p>
        </div>
      </div>
    </footer>
  )
}
