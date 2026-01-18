"use client";

import { projects } from "@/data/projects.data";
import { Project } from "@/types/projects.types";
import { useState } from "react";

export default function Projects() {
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  return (
    <section id="projects" className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Click on any project to see details
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project: Project) => {
            const Banner = project.banner;
            const isExpanded = expandedProject === project.title;

            return (
              <div
                key={project.title}
                className="group relative"
                onClick={() =>
                  setExpandedProject(isExpanded ? null : project.title)
                }
              >
                {/* Main Banner Card */}
                <div className="relative bg-white rounded-xl border border-gray-200 overflow-hidden cursor-pointer transition-all duration-500 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-50">
                  {/* Banner Container */}
                  <div className="relative aspect-video ">
                    <div className="inset-0 z-10"></div>
                    <Banner className="w-full h-full transition-transform duration-700 group-hover:scale-105 group-hover:rounded-none" />
                  </div>

                  {/* Description Panel */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      isExpanded ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    <div className="p-6 border-t border-gray-100">
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tech, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Minimalist Links */}
                      <div className="flex gap-6 pt-4 border-t border-gray-100">
                        <a
                          href={project.demo}
                          onClick={(e) => e.stopPropagation()}
                          className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-300"
                        >
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                          <span>Demo</span>
                        </a>
                        <a
                          href={project.repo}
                          onClick={(e) => e.stopPropagation()}
                          className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors duration-300"
                        >
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                            />
                          </svg>
                          <span>Code</span>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Expand Indicator - Muy discreto */}
                  <div className="absolute bottom-2 right-2 z-20">
                    <div
                      className={`w-6 h-6 rounded-full bg-white/40 backdrop-blur-sm flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 ${
                        isExpanded ? "rotate-180 opacity-100 bg-white/60" : ""
                      }`}
                    >
                      <svg
                        className="w-3 h-3 text-gray-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
