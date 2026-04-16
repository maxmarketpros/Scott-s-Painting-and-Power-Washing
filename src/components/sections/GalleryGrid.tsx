"use client";

import { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { galleryItems, galleryCategories } from "@/config/gallery";
import { cn } from "@/lib/utils";

export function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <section className="section-padding">
      <Container>
        {/* Filter Buttons */}
        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {galleryCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "rounded-full px-5 py-2 text-sm font-medium transition-colors",
                activeCategory === category
                  ? "bg-primary-600 text-white shadow-sm"
                  : "bg-surface text-muted hover:bg-surface-dark hover:text-foreground"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {filteredItems.map((item) => (
            <div
              key={item.src}
              className="mb-4 break-inside-avoid overflow-hidden rounded-xl"
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={item.width}
                height={item.height}
                className="w-full object-cover transition-transform duration-300 hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <p className="py-16 text-center text-muted">
            No photos in this category yet. Check back soon!
          </p>
        )}
      </Container>
    </section>
  );
}
