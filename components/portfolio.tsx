"use client"

import { useLocale } from "@/lib/locale-context"
import { getTranslation } from "@/lib/i18n"

export function Portfolio() {
  const { locale } = useLocale()
  const t = getTranslation(locale)

  const portfolioItems = [
    {
      title: t.walkInCloset,
      description: t.walkInClosetDesc,
      image: "/gallery/walk-in-closet.jpg",
    },
    {
      title: t.kidsBunkBed,
      description: t.kidsBunkBedDesc,
      image: "/gallery/kids-bunk-bed.jpg",
    },
    {
      title: t.kitchenCabinets,
      description: t.kitchenCabinetsDesc,
      image: "/gallery/kitchen-mint-cabinets.jpg",
    },
    {
      title: t.bathroomVanity,
      description: t.bathroomVanityDesc,
      image: "/gallery/bathroom-vanity-mint.jpg",
    },
    {
      title: t.bedStorage,
      description: t.bedStorageDesc,
      image: "/gallery/bed-storage-drawer.jpg",
    },
    {
      title: t.tallWardrobe,
      description: t.tallWardrobeDesc,
      image: "/gallery/tall-wardrobe.jpg",
    },
    {
      title: t.cuttingBoards,
      description: t.cuttingBoardsDesc,
      image: "/gallery/cutting-boards.jpg",
    },
    {
      title: t.kitchenDrawers,
      description: t.kitchenDrawersDesc,
      image: "/gallery/kitchen-drawers-mint.jpg",
    },
    {
      title: t.bunkBedWhite,
      description: t.bunkBedWhiteDesc,
      image: "/gallery/bunk-bed-white.jpg",
    },
  ]

  return (
    <section id="portfolio" className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-balance">{t.portfolioTitle}</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg aspect-[4/3] cursor-pointer">
              <img
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-white/80">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
