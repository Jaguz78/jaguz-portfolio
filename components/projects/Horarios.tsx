import { BannerProps } from "@/types/projects.types";
import Image from "next/image";

export function Horarios({ className }: BannerProps) {
  return (
    <div
      className={`${className} flex justify-center items-center flex-col bg-linear-to-r from-[#f3e7e9] to-[#e3eeff]`}
    >
      <Image
        src="https://i.imgur.com/jnNFgEA.png"
        alt="horarios"
        width="96"
        height="96"
      />
      <h2 className="text-xl font-bold font-mono">Gestor de Horarios</h2>
    </div>
  );
}
