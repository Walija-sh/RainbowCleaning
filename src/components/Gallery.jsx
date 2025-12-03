import { useState } from "react"

const galleryImages = [
  { id: 1, src: "/gallery-1.png", alt: "Carpet cleaning result 1" },
  { id: 2, src: "/gallery-2.jpg", alt: "Carpet cleaning result 2" },
  { id: 3, src: "/gallery-3.jpg", alt: "Carpet cleaning result 3" },
  { id: 4, src: "/gallery-4.jpg", alt: "Carpet cleaning result 4" },
  { id: 5, src: "/gallery-5.jpg", alt: "Carpet cleaning result 5" },
  { id: 6, src: "/gallery-6.jpg", alt: "Carpet cleaning result 6" },
  { id: 7, src: "/gallery-1.png", alt: "Carpet cleaning result 7" },
  { id: 8, src: "/gallery-4.jpg", alt: "Carpet cleaning result 8" },
]

const layout = {
  1: "col-span-2 row-span-2",
  2: "col-span-1 row-span-2",
  3: "col-span-1 row-span-2",
  4: "col-span-2 row-span-1",
  5: "col-span-2 row-span-1",
  6: "col-span-2 row-span-2",
  7: "col-span-1 row-span-2",
  8: "col-span-1 row-span-2",
}

export default function GallerySection() {
  const [hoveredId, setHoveredId] = useState(null)

  return (
    <section className="w-full py-16 px-4 md:px-8 lg:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] gap-4">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className={`relative overflow-hidden rounded-md bg-muted cursor-pointer group ${layout[image.id]}`}
              onMouseEnter={() => setHoveredId(image.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
              />

              <div
                className={`absolute inset-0 bg-black transition-opacity duration-300 ${
                  hoveredId === image.id ? "opacity-20" : "opacity-0"
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
