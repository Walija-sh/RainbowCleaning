import { useState } from "react"

const galleryImages = [
  { id: 1, src: "/Clean_and_light_color.png", alt: "Carpet cleaning result 1" },
  { id: 2, src: "/Bleach_Spot_Dyeing.jpg", alt: "Carpet cleaning result 2" },
  { id: 3, src: "/Carpet_Dyeing.jpg", alt: "Carpet cleaning result 3" },
  { id: 4, src: "/Carpet_Cleaning.webp", alt: "Carpet cleaning result 4" },
  { id: 5, src: "/Complete_Color_Changes.jpg", alt: "Carpet cleaning result 5" },
  { id: 6, src: "/Oriental_Rug_Cleaning.webp", alt: "Carpet cleaning result 6" },
  { id: 7, src: "/RV_Carpet_Cleaning.jpg", alt: "Carpet cleaning result 7" },
  { id: 8, src: "/Upholstery_Cleaning.jpg", alt: "Carpet cleaning result 8" },
  { id: 8, src: "/Clean_and_Dye.jpg", alt: "Carpet cleaning result 8" },

]



export default function GallerySection() {
  const [hoveredId, setHoveredId] = useState(null)

  return (
    <section className="w-full py-16 px-4 md:px-8 lg:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 grid-rows-3 gap-4 ">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className={"relative overflow-hidden rounded-md bg-muted cursor-pointer group"}
              onMouseEnter={() => setHoveredId(image.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
              />

              <div
                className={`absolute inset-0 bg-black transition-opacity duration-300 ${hoveredId === image.id ? "opacity-20" : "opacity-0"
                  }`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
