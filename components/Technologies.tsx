import { technologies } from "@/data/technologies.data";

export default function Technologies() {
  return (
    <section id="technologies" className="py-16 px-4 ">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Technologies
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My primary tech stack and tools
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 xl:gap-12">
          {technologies.map((tech) => {
            const Icon = tech.icon;

            return (
              <div key={tech.name} className="group relative">
                <div className="absolute inset-0 bg-linear-to-r from-blue-50 to-indigo-50 rounded-2xl transform group-hover:scale-105 transition-all duration-300 opacity-0 group-hover:opacity-100 blur-xl"></div>

                <div className="relative flex flex-col items-center p-6 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-100 transition-all duration-300 hover:-translate-y-2">
                  <div className="mb-4 p-4 rounded-full bg-linear-to-br from-white to-gray-50 group-hover:from-blue-50 group-hover:to-indigo-50 transition-all duration-300">
                    <Icon className="w-12 h-12 text-gray-700 group-hover:text-blue-600 transition-colors duration-300" />
                  </div>

                  <span className="text-sm font-semibold text-gray-800 group-hover:text-blue-700 transition-colors duration-300">
                    {tech.name}
                  </span>

                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-linear-to-r from-blue-400 to-indigo-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Decorative elements */}
        <div className="mt-10 pt-8 border-t border-gray-200">
          <div className="flex flex-wrap justify-center gap-4">
            <div className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
              Frontend
            </div>
            <div className="px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm font-medium">
              Backend
            </div>
            <div className="px-4 py-2 bg-purple-50 text-purple-700 rounded-full text-sm font-medium">
              Database
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
