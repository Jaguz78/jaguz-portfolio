// components/projects/GoogleCloneWithImage.tsx
import { BannerProps } from "@/types/projects.types";
import Image from "next/image";

export function GoogleClone({ className }: BannerProps) {
  return (
    <div
      className={`${className} absolute inset-0 cursor-pointer rounded-lg overflow-hidden group`}
    >
      {/* Contenedor de imagen con Next.js Image para optimización */}
      <Image
        src={"https://i.imgur.com/fhxLLtT.jpeg"}
        alt="Google Clone Background"
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
}
