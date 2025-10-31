"use client"

import { useState } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { useLocale } from "@/lib/locale-context"
import { getTranslation } from "@/lib/i18n"

export function Portfolio() {
  const { locale } = useLocale()
  const t = getTranslation(locale)
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

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
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-lg aspect-[4/3] cursor-pointer"
              onClick={() => setSelectedIndex(index)}
            >
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

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedIndex(null)}
        >
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
            onClick={() => setSelectedIndex(null)}
            aria-label="Close"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Navigation Buttons */}
          {portfolioItems.length > 1 && (
            <>
              <button
                className="absolute left-4 text-white hover:text-gray-300 transition-colors z-10"
                onClick={(e) => {
                  e.stopPropagation()
                  setSelectedIndex((prev) => prev !== null && prev > 0 ? prev - 1 : portfolioItems.length - 1)
                }}
                aria-label="Previous"
              >
                <ChevronLeft className="w-12 h-12" />
              </button>
              <button
                className="absolute right-4 text-white hover:text-gray-300 transition-colors z-10"
                onClick={(e) => {
                  e.stopPropagation()
                  setSelectedIndex((prev) => prev !== null && prev < portfolioItems.length - 1 ? prev + 1 : 0)
                }}
                aria-label="Next"
              >
                <ChevronRight className="w-12 h-12" />
              </button>
            </>
          )}

          {/* Image */}
          <div className="max-w-5xl max-h-[90vh] w-full flex flex-col items-center">
            <img
              src={portfolioItems[selectedIndex].image}
              alt={portfolioItems[selectedIndex].title}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="mt-4 text-white text-center">
              <h3 className="text-2xl font-semibold mb-2">{portfolioItems[selectedIndex].title}</h3>
              <p className="text-white/80">{portfolioItems[selectedIndex].description}</p>
              <p className="text-white/60 text-sm mt-2">
                {selectedIndex + 1} / {portfolioItems.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
