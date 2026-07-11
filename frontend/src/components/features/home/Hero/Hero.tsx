"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { News } from "@/types/news";

export interface HeroProps {
  slides: News[];
}

export const Hero = ({ slides }: HeroProps) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const slide = slides[current];

  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;

    const truncated = text.slice(0, maxLength);
    return `${truncated.slice(0, truncated.lastIndexOf(" "))}...`;
  };

  const category = slide?.categories?.[0] ?? null;
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <Image
            key={slide.id}
            src={`${process.env.NEXT_PUBLIC_API_URL}${slide.image?.url}`}
            alt={slide.title || "Hero image"}
            fill
            unoptimized
            priority={index === 0}
            className={`
                absolute inset-0 object-cover
                transition-all duration-1000 ease-in-out
                ${
                  current === index
                    ? "opacity-100 scale-105"
                    : "opacity-0 scale-100"
                }
            `}
          />
        ))}
      </div>

      <div className="absolute inset-0 bg-black/40" />

      <div className="absolute bottom-0 left-0 right-0 z-10">
        <div className="container mx-auto px-6 pb-16">
          <div className="max-w-4xl">
            {slide.category && (
              <span className="inline-block px-3 py-1 rounded-full bg-red-600 text-white text-xs md:text-sm uppercase font-semibold">
                {slide.category}
              </span>
            )}

            {slide.title && (
              <h1 className="mt-4 text-white text-3xl md:text-5xl font-bold">
                <Link
                  href={`/noticias/${category?.slug}/${slide.slug}`}
                  className="hover:underline"
                >
                  {slide.title}
                </Link>
              </h1>
            )}

            {slide.text && (
              <p className="mt-3 text-white/90 text-base md:text-lg">
                {truncateText(slide.text, 200)}
              </p>
            )}
  
            {slide.date && (
              <span className="block mt-4 text-white/70 text-sm">
                {slide.date}
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            aria-label={`Slide ${index + 1}`}
            className={`h-3 w-3 rounded-full cursor-pointer transition-all ${
              current === index
                ? "bg-red-600 scale-125"
                : "bg-white/60 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </section>
  );
};
