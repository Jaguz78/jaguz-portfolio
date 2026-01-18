import { BannerProps } from "@/types/projects.types";
import { Press_Start_2P } from "next/font/google";

const pressStart2P = Press_Start_2P({
  subsets: ["latin"],
  weight: "400",
});

export function Simon({ className }: BannerProps) {
  return (
    <div className={`${className} flex flex-wrap cursor-pointer rounded-lg`}>
      <h2
        className={`${pressStart2P.className} text-2xl font-extrabold absolute top-1/2 text-gray-800 right-1/3 transform -translate-y-1/2 text-center`}
      >
        Simon
      </h2>
      <div id="one" className="w-1/2 h-1/2 bg-[#ef476f] rounded-tl-xl"></div>

      <div id="two" className="w-1/2 h-1/2 bg-[#ffd166] rounded-tr-xl"></div>

      <div id="three" className="w-1/2 h-1/2 bg-[#06d6a0] rounded-bl-xl"></div>

      <div id="four" className="w-1/2 h-1/2 bg-[#118ab2] rounded-br-xl"></div>
    </div>
  );
}
