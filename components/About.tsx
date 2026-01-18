export default function About() {
  return (
    <section className="pt-16 pb-32 max-w-4xl mx-auto px-10" id="about">
      <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
        About Me
      </h2>

      <div className="mt-10 space-y-10 md:space-y-16 relative pl-8 md:pl-12 border-l-2 border-indigo-200/70">
        {/* Academic Background */}
        <div className="relative">
          <div className="absolute -left-10 md:-left-14 top-1.5 w-5 h-5 rounded-full bg-indigo-600 border-4 border-white shadow-md" />
          <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
            Education
          </h3>
          <p className="mt-3 text-gray-700 leading-relaxed text-lg">
            Systems Engineering • Degree Requirements Completed (Pensum Cerrado)
            • Universidad de San Carlos de Guatemala
          </p>
        </div>

        {/* Technical Training */}
        <div className="relative">
          <div className="absolute -left-10 md:-left-14 top-1.5 w-5 h-5 rounded-full bg-indigo-600 border-4 border-white shadow-md" />
          <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
            Practical Training
          </h3>
          <p className="mt-3 text-gray-700 leading-relaxed text-lg">
            2+ years of continuous learning at Platzi • Frontend, Backend,
            Architecture, Best Practices, and Emerging Technologies
          </p>
        </div>

        {/* Achievements */}
        <div className="relative">
          <div className="absolute -left-10 md:-left-14 top-1.5 w-5 h-5 rounded-full bg-indigo-600 border-4 border-white shadow-md" />
          <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
            Achievements
          </h3>
          <p className="mt-3 text-gray-700 leading-relaxed text-lg font-medium">
            Two-time Regional Champion • Programming Communities Cup • OmegaUp •
            2023 & 2024
          </p>
          <p className="mt-3 text-gray-700 leading-relaxed text-lg">
            As a winner, I was selected for 3-month mentorship programs led by
            Google developers for two consecutive years.
          </p>
        </div>

        {/* Philosophy */}
        <div className="relative">
          <div className="absolute -left-10 md:-left-14 top-1.5 w-5 h-5 rounded-full bg-indigo-600 border-4 border-white shadow-md" />
          <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
            My Philosophy
          </h3>
          <p className="mt-3 text-gray-700 leading-relaxed text-lg">
            I thrive on tackling new challenges and solving complex problems. My
            focus is on writing clean, maintainable code with a strong
            commitment to delivering an exceptional user experience.
          </p>
        </div>
      </div>
    </section>
  );
}
