import { BannerProps } from "@/types/projects.types";
import { Pacifico } from "next/font/google";

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
});

export function Paint({ className }: BannerProps) {
  return (
    <div
      className={`${className} flex justify-center items-center bg-[#e63946]`}
    >
      <h2 className={`${pacifico.className} text-white text-[2.4rem]`}>
        Paint
      </h2>
    </div>
  );
}
