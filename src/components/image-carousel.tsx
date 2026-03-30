"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

type Slide = {
  src: string;
  alt: string;
};

type ImageCarouselProps = {
  images: readonly Slide[];
  className?: string;
};

export function ImageCarousel({ images, className = "" }: ImageCarouselProps) {
  const [index, setIndex] = useState(0);
  const count = images.length;

  const handlePrev = useCallback(() => {
    setIndex((i) => (i === 0 ? count - 1 : i - 1));
  }, [count]);

  const handleNext = useCallback(() => {
    setIndex((i) => (i === count - 1 ? 0 : i + 1));
  }, [count]);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handlePrev, handleNext]);

  if (count === 0) return null;

  return (
    <section className={className} aria-roledescription="carousel">
      <div className="relative mx-auto max-w-4xl overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm">
        <div className="relative aspect-[16/10] w-full">
          {images.map((slide, i) => (
            <div
              key={slide.src}
              className={`absolute inset-0 transition-opacity duration-300 ${
                i === index ? "opacity-100 z-[1]" : "opacity-0 z-0 pointer-events-none"
              }`}
              aria-hidden={i !== index}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                className="object-cover"
                sizes="(max-width: 896px) 100vw, 896px"
                priority={i === 0}
              />
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={handlePrev}
          className="absolute left-2 top-1/2 z-[2] flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-slate-900 shadow-md ring-1 ring-slate-200 transition hover:bg-white"
          aria-label="Previous image"
        >
          <span className="text-lg leading-none" aria-hidden>
            ‹
          </span>
        </button>
        <button
          type="button"
          onClick={handleNext}
          className="absolute right-2 top-1/2 z-[2] flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-slate-900 shadow-md ring-1 ring-slate-200 transition hover:bg-white"
          aria-label="Next image"
        >
          <span className="text-lg leading-none" aria-hidden>
            ›
          </span>
        </button>

        <div
          className="absolute bottom-3 left-0 right-0 z-[2] flex justify-center gap-2"
          role="tablist"
          aria-label="Slide indicators"
        >
          {images.map((slide, i) => (
            <button
              key={slide.src}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Show image ${i + 1} of ${count}`}
              className={`h-2.5 w-2.5 rounded-full transition ${
                i === index ? "bg-white ring-2 ring-blue-600" : "bg-white/70 hover:bg-white"
              }`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
