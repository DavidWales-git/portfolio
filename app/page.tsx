import React from "react";

// Project data — pulled from your GitHub audit (emmzyrayz).
// Replace the `link` fields with the actual repo/live URLs.
const projects = [
  {
    title: "Okey Mart",
    description:
      "Production e-commerce storefront with seller-protection escrow workflows. Server-rendered with Next.js App Router, optimized images via sharp, and a full cart-to-checkout flow.",
    tags: ["Next.js", "TypeScript", "React 18", "Tailwind CSS", "Sharp"],
    link: "https://github.com/emmzyrayz/Okey_mart_V2",
  },
  {
    title: "OvenJoy",
    description:
      "Responsive bakery storefront with client-side product search, a like/save system, and a working cart and checkout calculator — built for a fast, SEO-friendly mobile experience.",
    tags: ["React", "Vite", "Tailwind CSS", "JavaScript"],
    link: "https://github.com/emmzyrayz/OvenJoy",
  },
  {
    title: "PandaAcademy",
    description:
      "Content and learning hub for publishing tutorials and course material, with reusable article/list components and Next.js performance patterns for fast page loads.",
    tags: ["Next.js", "TypeScript", "React", "Tailwind CSS"],
    link: "https://github.com/emmzyrayz/pandaacademy",
  },
  {
    title: "pan-share",
    description:
      "Lightweight file-sharing utility supporting uploads up to 100MB, with client-side validation, a download interface, and a responsive UI built for quick cross-device sharing.",
    tags: ["JavaScript", "HTML/CSS", "File Upload"],
    link: "https://github.com/emmzyrayz/pan-share",
  },
  {
    title: "UniArchive",
    description:
      "University resource archive for indexing course and project materials, built on the Next.js App Router with reusable content components for fast student access.",
    tags: ["Next.js", "TypeScript", "React", "Vercel"],
    link: "https://github.com/emmzyrayz/UniArchive",
  },
  {
    title: "DIUSCADI",
    description:
      "Public-facing landing site for a university career-development program, covering event sign-ups and seminar info with accessibility and performance tuning baked in.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    link: "https://github.com/emmzyrayz/diuscadi",
  },
];

const skills = {
  frontend: [
    "HTML5 / CSS3",
    "JavaScript",
    "TypeScript",
    "ReactJS",
    "Next.js (App Router)",
    "Tailwind CSS",
  ],
  backend: [
    "Node.js",
    "Express.js",
    "MongoDB",
    "C++",
    "Git / GitHub",
    "npm / pnpm",
  ],
  aiOps: [
    "Data Annotation",
    "Prompt Engineering",
    "RLHF Evaluation",
    "Multi-modal Labeling",
    "Edge-Case Debugging",
  ],
};

export default function Home() {
  return (
    <>
      {/* Header / Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a
            href="#hero"
            className="text-xl font-bold bg-gradient-to-r bg-clip-text text-transparent from-cyan-400 to-blue-500 tracking-tight"
          >
            UKD.dev
          </a>
          <div className="flex items-center space-x-6 text-sm font-medium text-slate-300">
            <a href="#about" className="hover:text-cyan-400 transition-colors">
              About
            </a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">
              Skills
            </a>
            <a
              href="#projects"
              className="hover:text-cyan-400 transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="px-3 py-1.5 bg-slate-800 border border-slate-700 hover:border-cyan-500 rounded-lg text-slate-100 transition-colors"
            >
              Contact
            </a>
          </div>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section
          id="hero"
          className="pt-32 pb-20 min-h-[85vh] flex items-center scroll-mt-16"
        >
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium text-cyan-400 bg-cyan-500/10 rounded-full mb-6 border border-cyan-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>{" "}
              Open for Remote Opportunities
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-4">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r bg-clip-text text-transparent from-cyan-400 to-blue-500">
                Ugochukwu David
              </span>
            </h1>
            <p className="text-xl sm:text-2xl font-medium text-slate-400 mb-6">
              Full-Stack Web Developer & AI Data Specialist
            </p>
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed mb-8 max-w-2xl">
              I build scalable web architectures using the JavaScript/TypeScript
              ecosystem and design microservices with production-grade
              precision. Expert in full-stack engineering, prompt evaluations,
              and advanced algorithm training support.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 font-semibold rounded-xl text-slate-950 shadow-lg shadow-cyan-500/20 transition-all"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-6 py-3 bg-slate-800 border border-slate-700 hover:border-slate-600 font-semibold rounded-xl text-slate-200 transition-colors"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="py-20 border-t border-slate-800 scroll-mt-16"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-12 flex items-center gap-3">
            About Me
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-slate-400 leading-relaxed text-base">
            <div className="md:col-span-2 space-y-4">
              <p>
                I am a deeply technical data professional and software engineer
                with a rigorous academic baseline in Computer Science. My core
                software expertise lies in developing modern architectures with{" "}
                <strong className="text-slate-200">
                  Next.js, TypeScript, Tailwind CSS, and MongoDB
                </strong>
                .
              </p>
              <p>
                Beyond traditional web application development, I actively
                collaborate with advanced machine learning platforms to perform
                model evaluation, high-precision text/code annotation, and
                prompt engineering architecture. I specialize in troubleshooting
                multi-modal code blocks and testing edge cases across LLM
                structures.
              </p>
            </div>
            <div className="bg-slate-950 border border-slate-800 p-6 rounded-2xl h-fit">
              <h3 className="font-bold text-slate-200 mb-4 text-sm uppercase tracking-wider">
                Quick Info
              </h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-3">
                  📍 Ontario, L4W5S2, Canada
                </li>
                <li className="flex items-center gap-3">
                  🎓 B.Sc. Computer Science (UNIZIK)
                </li>
                <li className="flex items-center gap-3">
                  🌐 English (Native / Bilingual)
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section
          id="skills"
          className="py-20 border-t border-slate-800 scroll-mt-16"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-12">
            Technical Expertise
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-slate-950 border border-slate-800 rounded-2xl">
              <h3 className="text-lg font-bold text-slate-200 mb-4">
                Frontend Development
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.frontend.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 bg-slate-800 text-xs text-slate-300 rounded-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-6 bg-slate-950 border border-slate-800 rounded-2xl">
              <h3 className="text-lg font-bold text-slate-200 mb-4">
                Backend & Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.backend.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 bg-slate-800 text-xs text-slate-300 rounded-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-6 bg-slate-950 border border-slate-800 rounded-2xl">
              <h3 className="text-lg font-bold text-slate-200 mb-4">
                AI & Data Operations
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.aiOps.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 bg-slate-800 text-xs text-slate-300 rounded-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          className="py-20 border-t border-slate-800 scroll-mt-16"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-2">
            Featured Projects
          </h2>
          <p className="text-slate-400 mb-12 max-w-xl">
            A selected list of production-grade software projects built from the
            ground up.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden flex flex-col group hover:border-cyan-500/50 transition-colors"
              >
                <div className="p-6 flex-1">
                  <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>
                <div className="px-6 pb-6 mt-auto">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 bg-slate-800 text-[11px] text-slate-300 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="py-20 border-t border-slate-800 scroll-mt-16"
        >
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Let&apos;s Work Together
            </h2>
            <p className="text-slate-400 mb-8">
              Have a project or remote engineering position available? Get in
              touch and let&apos;s discuss details.
            </p>
            <div className="p-6 bg-slate-950 border border-slate-800 rounded-2xl text-left">
              <p className="text-sm text-slate-400 mb-2 font-medium">
                Direct Correspondence Email
              </p>
              <a
                href="mailto:davidewales@gmail.com"
                className="text-lg font-bold text-cyan-400 hover:underline break-all"
              >
                davidewales@gmail.com
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-800 bg-slate-950 py-8 text-center text-xs text-slate-500">
        <p>&copy; 2026 Ugochukwu Kenechukwu David. All rights reserved.</p>
      </footer>
    </>
  );
}
