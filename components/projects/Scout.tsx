import { BannerProps } from "@/types/projects.types";
import { Quicksand } from "next/font/google";
import Image from "next/image";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: "700",
});

export function Scout({ className }: BannerProps) {
  return (
    <div
      className={`${className} flex justify-center items-center bg-[#572364] gap-2`}
    >
      <Image
        src={"https://i.imgur.com/Dp6Jp52.png"}
        alt="logo_scout"
        width="96"
        height="96"
      />
      <h2 className={`${quicksand.className} text-white text-lg md:text-2xl`}>
        Nudo de Recuerdos
      </h2>
    </div>
  );
}
