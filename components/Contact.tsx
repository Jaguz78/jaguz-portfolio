import { GitHubIcon, LinkedInIcon, MailIcon } from "./icons/ContactIcons";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#0b1c2d] pb-16 px-4 isolate "
      // micro-fixes to reduce sub-pixel diagonal artifacts on some browsers
      style={{
        transform: "translateZ(0)",
        backfaceVisibility: "hidden",
        WebkitBackfaceVisibility: "hidden" as any,
      }}
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Controlled horizontal separator */}
        <div className="mx-auto w-11/12 h-px bg-gray-800/60 mb-12" />

        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Let's talk
        </h2>

        <p className="text-gray-400 mb-12 max-w-xl mx-auto">
          Let’s build something great together. Reach out through any of the
          channels below.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {/* Email */}
          <a
            href="mailto:jalejandrogh78@gmail.com"
            className="group bg-[#102a43] border border-gray-700 rounded-xl p-6 hover:border-blue-500 transition focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <div className="flex flex-col items-center gap-3">
              <MailIcon />
              <span className="text-white font-medium">Email</span>
              <span className="text-gray-400 text-sm group-hover:text-blue-400 transition">
                jalejandrogh78@gmail.com
              </span>
            </div>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Jaguz78"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-[#102a43] border border-gray-700 rounded-xl p-6 hover:border-blue-500 transition focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <div className="flex flex-col items-center gap-3">
              <GitHubIcon />
              <span className="text-white font-medium">GitHub</span>
              <span className="text-gray-400 text-sm group-hover:text-blue-400 transition">
                github.com/Jaguz78
              </span>
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/jalejandroguzmanh/"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-[#102a43] border border-gray-700 rounded-xl p-6 hover:border-blue-500 transition focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <div className="flex flex-col items-center gap-3">
              <LinkedInIcon />
              <span className="text-white font-medium">LinkedIn</span>
              <span className="text-gray-400 text-sm group-hover:text-blue-400 transition">
                Let's connect
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
