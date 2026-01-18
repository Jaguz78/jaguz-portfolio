import { ComponentType } from "react";

export interface Project {
  title: string;
  description: string;
  tech: string[];
  demo?: string;
  repo?: string;
  banner: ComponentType<BannerProps>;
}

export interface BannerProps {
  className?: string;
}
