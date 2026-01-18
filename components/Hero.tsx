"use client";

import Image from "next/image";
import ParticlesBackground from "./ParticlesBackground";

export default function Hero() {
  return (
    <section
      className="
        relative
        min-h-screen
        flex
        items-center
        bg-[linear-gradient(to_top_right,#020d13_0%,#011627_48%,#020d13_100%)]
        bg-fixed
        bg-no-repeat
        bg-cover
      "
    >
      <div className="absolute inset-0 z-10">
        <ParticlesBackground />
      </div>

      {/* Contenido */}
      <div className="relative z-20 container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        {/* Imagen */}
        <div className="order-2 md:order-1 flex justify-center">
          <Image
            src="/nero.png"
            alt="Imagen de perfil"
            width={400}
            height={400}
            // className="rounded-full shadow-[0_0_40px_rgba(0,255,255,0.15)]"
            priority
          />
        </div>

        {/* Texto */}
        <div className="order-1 md:order-2 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Hi, I’m <br />
            <span className="text-cyan-400">Alejandro Guzmán</span>
          </h1>

          <h2 className="text-xl md:text-2xl text-white/80 mb-6">
            Web Developer
          </h2>
        </div>
      </div>
    </section>
  );
}
