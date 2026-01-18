"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface Props {
  images: string[];
}

export default function CertificatesCarousel({ images }: Props) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="certificates" className="bg-[#0b1c2d] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-white text-4xl md:text-5xl font-bold mb-6 text-center">
          Certificates
        </h2>

        <span className="text-white text-center block mb-6">
          More than 40 courses approved in Platzi. See more on my{" "}
          <a
            href="https://platzi.com/p/Jaguz78/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            profile
          </a>
        </span>

        {/* Carousel principal */}
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {images.map((src, index) => (
            <SwiperSlide key={src}>
              <button
                onClick={() => setActiveIndex(index)}
                className="relative w-full h-64 rounded-lg overflow-hidden focus:outline-none"
              >
                <Image
                  src={src}
                  alt={`Certificate ${index + 1}`}
                  fill
                  className="object-cover transition-transform md:group-hover:scale-105"
                />
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Lightbox */}
      {activeIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center">
          <button
            className="absolute top-6 right-6 text-white text-3xl"
            onClick={() => setActiveIndex(null)}
          >
            ✕
          </button>

          <div className="w-full max-w-5xl px-4">
            <Swiper
              initialSlide={activeIndex}
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              spaceBetween={30}
            >
              {images.map((src, index) => (
                <SwiperSlide key={index}>
                  <div className="relative w-full h-[70vh]">
                    <Image
                      src={src}
                      alt={`Certificate enlarged ${index + 1}`}
                      fill
                      className="object-contain"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}
    </section>
  );
}
