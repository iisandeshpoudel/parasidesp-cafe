"use client";

import { useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";

const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    alt: "Coffee being poured into a cup",
    width: 1200,
    height: 800,
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    alt: "Cozy cafe interior",
    width: 1200,
    height: 1600,
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    alt: "Coffee beans being roasted",
    width: 1200,
    height: 800,
  },
  {
    id: 4,
    src: "https://i.ibb.co/Rk1CJw1y/Close-up-shot-of-expert-barista-hands-delicately-pouring-steamed-milk-into-a-rich-espresso-creating.jpg",
    alt: "Barista creating latte art",
    width: 1200,
    height: 1600,
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    alt: "Freshly baked pastries",
    width: 1200,
    height: 800,
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1511081692775-05d0f180a065?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    alt: "People enjoying coffee at the cafe",
    width: 1200,
    height: 800,
  },
];

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (id: number) => {
    setSelectedImage(id);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const currentImage = galleryImages.find((img) => img.id === selectedImage);

  return (
    <section
      id="gallery"
      className="py-20 px-4 bg-charcoal-roast relative grain"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-almond-cream">
            Gallery
          </h2>
          <p className="text-lg text-almond-cream/80 max-w-2xl mx-auto">
            A glimpse into our artisan coffee experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className={`relative overflow-hidden rounded-lg depth-shadow hover-lift cursor-pointer ${
                image.id % 3 === 0 ? "md:col-span-2" : ""
              }`}
              onClick={() => openLightbox(image.id)}
            >
              <div className="aspect-w-16 aspect-h-9 relative">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                  unoptimized
                />
                <div className="absolute inset-0 bg-dark-espresso/20 hover:bg-dark-espresso/10 transition-colors duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        <Dialog open={selectedImage !== null} onOpenChange={closeLightbox}>
          <DialogContent className="max-w-5xl p-0 bg-transparent border-none">
            {currentImage && (
              <div className="relative">
                <button
                  onClick={closeLightbox}
                  className="absolute top-4 right-4 z-10 bg-dark-espresso/80 text-almond-cream rounded-full p-2"
                >
                  <X className="h-6 w-6" />
                </button>
                <Image
                  src={currentImage.src}
                  alt={currentImage.alt}
                  width={currentImage.width}
                  height={currentImage.height}
                  className="w-full h-auto rounded-lg"
                  unoptimized
                />
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
