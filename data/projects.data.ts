// data/projects.data.ts
import { Batatabit } from "@/components/projects/Batatabit";
import { Simon } from "@/components/projects/Simon";
import { Paint } from "@/components/projects/Paint";
import { GoogleClone } from "@/components/projects/GoogleClone";
import { Project } from "@/types/projects.types";
import { Scout } from "@/components/projects/Scout";
import { Horarios } from "@/components/projects/Horarios";

export const projects: Project[] = [
  {
    title: "Nudo de recuerdos",
    description:
      "This platform was designed to help my Scout group preserve and share our adventures while streamlining our internal administrative tasks.",
    tech: ["Next", "Nest", "MySQL", "AWS"],
    demo: "https://nudo-de-recuerdos.com",
    banner: Scout,
  },
  {
    title: "Gestor de Horarios",
    description:
      "I developed this application to modernize and simplify schedule management for both students and staff at CUNOR, my university center.",
    tech: ["Next", "Nest", "MySQL", "Railway"],
    demo: "https://gestion-horarios-cunor.vercel.app",
    banner: Horarios,
  },
  {
    title: "Batatabit",
    description:
      "A fully responsive static website created for a fictional cryptocurrency company. The project focuses on clean layout, modern UI design, and responsive behavior across different screen sizes.",
    tech: ["HTML", "CSS"],
    demo: "https://jaguz78.github.io/Curso-Mobile-First/",
    repo: "https://github.com/Jaguz78/Curso-Mobile-First",
    banner: Batatabit,
  },
  {
    title: "Simon",
    description:
      "A web-based implementation of the classic Simon memory game. Players must repeat increasingly longer sequences of colors and sounds, testing memory and concentration skills with visual and audio feedback.",
    tech: ["HTML", "CSS", "JavaScript"],
    demo: "https://jaguz78.github.io/Simon-Dice",
    repo: "https://github.com/Jaguz78/Simon-Dice",
    banner: Simon,
  },
  {
    title: "Paint",
    description:
      "An interactive browser-based drawing application inspired by Microsoft Paint. Features include multiple brush sizes, color palette, shape drawing tools, and canvas clearing functionality.",
    tech: ["HTML", "CSS", "JavaScript"],
    demo: "https://jaguz78.github.io/Paint/dibujandoConMouse/index.html",
    repo: "https://github.com/Jaguz78/Paint",
    banner: Paint,
  },
  {
    title: "Google Clone",
    description:
      "A pixel-perfect responsive clone of Google's search homepage. Implements the exact layout, styling, and interactive elements of Google's interface with modern CSS techniques.",
    tech: ["HTML", "CSS"],
    demo: "https://jaguz78.github.io/Google-Clone/",
    repo: "https://github.com/Jaguz78/Google-Clone",
    banner: GoogleClone,
  },
];
