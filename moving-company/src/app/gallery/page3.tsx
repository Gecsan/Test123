"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent } from "@/components/ui/dialog"

const galleryItems = [
  {
    id: 1,
    src: "/placeholder.svg",
    alt: "Moving truck being loaded",
    caption: "Our professional team carefully loading a customer's belongings"
  },
  {
    id: 2,
    src: "/placeholder.svg",
    alt: "Packed boxes",
    caption: "Organized packing for efficient moving"
  },
  {
    id: 3,
    src: "/placeholder.svg",
    alt: "Moving team",
    caption: "Our experienced moving crew"
  },
  {
    id: 4,
    src: "/placeholder.svg",
    alt: "Storage facility",
    caption: "Secure storage solutions"
  },
  {
    id: 5,
    src: "/placeholder.svg",
    alt: "Local moving",
    caption: "Professional local moving services"
  },
  {
    id: 6,
    src: "/placeholder.svg",
    alt: "Long distance moving",
    caption: "Cross-country moving expertise"
  }
]

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null)

  return (
    <div className="container py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tighter">Our Gallery</h1>
        <p className="text-lg text-muted-foreground mt-2">
          Take a look at our professional moving services in action
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryItems.map((item) => (
          <div
            key={item.id}
            className="group relative aspect-square cursor-pointer overflow-hidden rounded-lg"
            onClick={() => setSelectedImage(item)}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="flex h-full items-center justify-center p-4">
                <p className="text-center text-sm text-white">{item.caption}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-3xl">
          {selectedImage && (
            <div className="relative aspect-video">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-contain"
              />
              <p className="mt-2 text-center text-sm text-muted-foreground">
                {selectedImage.caption}
              </p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
