import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Terminal,
  Palette,
  Code,
  Cpu,
  Layers,
  Coffee,
  Sparkles,
  ArrowUpRight,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";

const Portfolio = () => {
  const [isArchitect, setIsArchitect] = useState(true);

  const projects = [
    {
      id: "zapify",
      title: "Zapify E-Commerce",
      role: "Full Stack",
      stack: ["NodeJS", "Redis", "Stripe"],
      desc: "Scalable multi-vendor platform with role-based access control.",
      raw: "{ type: 'Platform', users: 'Multi-Vendor', speed: 'Redis Cached' }",
      link: "https://github.com/vishal-1207/zapify-ecommerce",
    },
    {
      id: "http",
      title: "Java HTTP Server",
      role: "Core Engineering",
      stack: ["Java", "Sockets", "Multithreading"],
      desc: "Custom server built from scratch. No frameworks, just raw sockets.",
      raw: "ServerSocket server = new ServerSocket(8080);",
      link: "https://github.com/vishal-1207/java-http-server",
    },
    {
      id: "brandbazaar",
      title: "Brand Bazaar",
      role: "PHP Full Stack",
      stack: ["PHP", "MySQL", "Razorpay", "Bootstrap"],
      desc: "Secure e-commerce store with Admin Panel, Stateful Auth, and Inventory Management.",
      raw: "$auth->login($user);\n$gateway->capture($payment_id);",
      link: "#",
    },
  ];

  return (
    <div
      className={`min-h-screen transition-colors duration-700 ease-in-out ${
        isArchitect
          ? "bg-[#0d1117] text-green-400 font-mono selection:bg-green-900 selection:text-green-100"
          : "bg-[#050505] text-gray-200 font-sans selection:bg-purple-900 selection:text-white"
      }`}
    >
      {/* BACKGROUNDS */}
      <div
        className={`fixed inset-0 pointer-events-none transition-opacity duration-700 ${
          isArchitect ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#232936_1px,transparent_1px),linear-gradient(to_bottom,#232936_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117] to-transparent"></div>
      </div>

      <div
        className={`fixed inset-0 pointer-events-none transition-opacity duration-1000 ${
          !isArchitect ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-purple-900/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-blue-900/10 rounded-full blur-[120px]"></div>
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
      </div>

      {/* NAVBAR */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 p-1 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 shadow-2xl">
        <button
          onClick={() => setIsArchitect(true)}
          className={`relative px-6 py-2 rounded-full text-xs font-bold tracking-widest transition-all duration-300 flex items-center gap-2 ${
            isArchitect
              ? "text-green-400 bg-[#161b22] border border-green-900/50 shadow-[0_0_20px_rgba(74,222,128,0.1)]"
              : "text-gray-500 hover:text-gray-300"
          }`}
        >
          <Terminal size={14} />
          <span>ARCHITECT</span>
        </button>

        <button
          onClick={() => setIsArchitect(false)}
          className={`relative px-6 py-2 rounded-full text-xs font-bold tracking-widest transition-all duration-300 flex items-center gap-2 ${
            !isArchitect
              ? "text-white bg-white/10 border border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
              : "text-gray-500 hover:text-gray-300"
          }`}
        >
          <Palette size={14} />
          <span>ARTIST</span>
        </button>
      </nav>

      {/* MAIN CONTENT */}
      <main className="relative max-w-5xl mx-auto pt-40 px-6 pb-20">
        {/* HERO */}
        <section className="mb-32 min-h-[40vh] flex flex-col justify-center">
          <AnimatePresence mode="wait">
            {isArchitect ? (
              <motion.div
                key="architect-hero"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50, transition: { duration: 0.2 } }}
                className="border-l-2 border-green-500/50 pl-6"
              >
                <div className="text-sm text-gray-500 mb-2">
                  class Developer extends Human {"{"}
                </div>
                <h1 className="text-5xl md:text-7xl font-bold mb-4">
                  <span className="text-blue-400">public</span> String{" "}
                  <span className="text-yellow-400">name</span> ={" "}
                  <span className="text-green-400">"Vishal Chaudhary";</span>
                </h1>
                <p className="text-xl text-gray-400 max-w-2xl">
                  // Specializing in high-performance backends. <br />
                  // Java, Spring Boot, Node.js, System Design.
                </p>
                <div className="mt-8 flex gap-4">
                  <div className="px-4 py-2 border border-gray-700 bg-gray-900 rounded text-sm flex items-center gap-2">
                    <Cpu size={16} /> System.uptime(99.9%);
                  </div>
                </div>
                <div className="text-sm text-gray-500 mt-2">{"}"}</div>
              </motion.div>
            ) : (
              <motion.div
                key="artist-hero"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-center"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-purple-200 mb-8 backdrop-blur-md">
                  <Sparkles size={12} /> Digital Craftsman
                </div>
                <h1 className="text-6xl md:text-8xl font-serif font-light mb-6 text-white tracking-tight leading-tight">
                  Logic meets <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-white to-purple-300">
                    Composition.
                  </span>
                </h1>
                <p className="text-xl text-gray-400 max-w-lg mx-auto leading-relaxed font-light">
                  I engineer robust backends and sculpt elegant frontends.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </section>

        {/* PROJECTS SECTION */}
        <section>
          <div className="flex items-end gap-4 mb-12">
            <h2
              className={`text-3xl font-bold ${
                isArchitect ? "text-white" : "text-white font-serif"
              }`}
            >
              {isArchitect ? "./projects/list-all" : "Selected Works"}
            </h2>
            {isArchitect && (
              <span className="animate-pulse text-green-500 mb-1">_</span>
            )}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <div key={project.id} className="relative group h-full">
                <AnimatePresence mode="wait">
                  {isArchitect ? (
                    // ARCHITECT CARD
                    <motion.div
                      key="arch-card"
                      initial={{ opacity: 0, rotateX: 90 }}
                      animate={{ opacity: 1, rotateX: 0 }}
                      exit={{ opacity: 0, rotateX: -90 }}
                      transition={{ delay: i * 0.1 }}
                      className="bg-[#0d1117] border border-gray-800 rounded-lg overflow-hidden font-mono h-full hover:border-green-500/50 transition-colors flex flex-col"
                    >
                      <div className="bg-[#161b22] px-3 py-2 flex items-center gap-2 border-b border-gray-800">
                        <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                        <span className="ml-2 text-xs text-gray-500">
                          {project.id}.php
                        </span>
                      </div>
                      <div className="p-4 text-sm text-gray-300 flex-grow">
                        <div className="text-purple-400">"project"</div>:{" "}
                        <div className="text-yellow-300">"{project.title}"</div>
                        ,
                        <br />
                        <div className="text-purple-400">"stack"</div>: [
                        {project.stack.map((s, idx) => (
                          <span key={idx} className="text-blue-300">
                            "{s}"{idx < project.stack.length - 1 ? ", " : ""}
                          </span>
                        ))}
                        ],
                        <br />
                        <div className="text-purple-400">"codebase"</div>:{" "}
                        <div className="text-green-400">{project.raw}</div>
                      </div>
                      <div className="p-3 bg-[#161b22]/50 border-t border-gray-800 mt-auto">
                        <a
                          href={project.link}
                          className="flex items-center gap-2 text-xs text-green-500 hover:text-green-400 transition-colors hover:underline"
                        >
                          <span className="text-gray-500">$</span>{" "}
                          ./launch-site.sh <ExternalLink size={12} />
                        </a>
                      </div>
                    </motion.div>
                  ) : (
                    // ARTIST CARD
                    <motion.div
                      key="artist-card"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ delay: i * 0.1 }}
                      className="relative bg-white/5 border border-white/10 rounded-2xl p-8 h-full backdrop-blur-sm hover:bg-white/10 transition-all duration-500 group flex flex-col"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="relative z-10 flex-grow">
                        <div className="flex justify-between items-start mb-6">
                          <div className="w-10 h-10 rounded-full bg-black/50 border border-white/10 flex items-center justify-center text-white">
                            <Layers size={18} />
                          </div>
                          <a
                            href={project.link}
                            className="text-gray-600 group-hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
                          >
                            <ArrowUpRight size={20} />
                          </a>
                        </div>
                        <h3 className="text-2xl font-serif text-white mb-3">
                          {project.title}
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6 font-light">
                          {project.desc}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.stack.map((s) => (
                            <span
                              key={s}
                              className="px-3 py-1 bg-white/5 rounded-full text-xs font-medium text-purple-200 border border-white/5"
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="relative z-10 pt-4 border-t border-white/5">
                        <a
                          href={project.link}
                          className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
                        >
                          View Project <ArrowUpRight size={14} />
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section className="mt-40">
          <div className="flex items-end gap-4 mb-12">
            <h2
              className={`text-3xl font-bold ${
                isArchitect ? "text-white" : "text-white font-serif"
              }`}
            >
              {isArchitect ? "SELECT * FROM experience" : "The Journey"}
            </h2>
          </div>

          <div className={`space-y-12 ${!isArchitect && "max-w-3xl"}`}>
            <div
              className={`relative ${
                isArchitect ? "border-l border-gray-800 pl-8" : "pl-0"
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-2">
                <h3
                  className={`text-xl font-bold ${
                    isArchitect
                      ? "text-green-400"
                      : "text-white font-serif tracking-wide"
                  }`}
                >
                  ICICI Lombard
                </h3>
                <span
                  className={`text-sm ${
                    isArchitect
                      ? "text-gray-500 font-mono"
                      : "text-purple-300/80 bg-purple-900/20 px-2 py-0.5 rounded border border-purple-500/20"
                  }`}
                >
                  Jan '24 - July '24
                </span>
              </div>
              {isArchitect ? (
                <div className="bg-gray-900/50 p-4 border border-gray-800 rounded text-sm text-gray-400 font-mono">
                  &gt; Integrating APIs for 15+ partner systems
                  <br />
                  &gt; status:{" "}
                  <span className="text-green-500">SUCCESS (99.9% Uptime)</span>
                  <br />
                  &gt; onboarding_time_reduced: 40%
                </div>
              ) : (
                <p className="text-gray-400 leading-relaxed font-light text-lg">
                  Orchestrated the integration of 15+ partner systems. By
                  implementing structured troubleshooting, I reduced onboarding
                  time by 40% while maintaining 99.9% uptime.
                </p>
              )}
            </div>

            <div
              className={`relative ${
                isArchitect ? "border-l border-gray-800 pl-8" : "pl-0"
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-2">
                <h3
                  className={`text-xl font-bold ${
                    isArchitect
                      ? "text-green-400"
                      : "text-white font-serif tracking-wide"
                  }`}
                >
                  Pragmatiq Systems
                </h3>
                <span
                  className={`text-sm ${
                    isArchitect
                      ? "text-gray-500 font-mono"
                      : "text-purple-300/80 bg-purple-900/20 px-2 py-0.5 rounded border border-purple-500/20"
                  }`}
                >
                  June '23 - July '23
                </span>
              </div>
              {isArchitect ? (
                <div className="bg-gray-900/50 p-4 border border-gray-800 rounded text-sm text-gray-400 font-mono">
                  &gt; Stack: PERN (Postgres, Express, React, Node)
                  <br />
                  &gt; task: Architect Workflow System
                  <br />
                  &gt; result: Efficiency +30%
                </div>
              ) : (
                <p className="text-gray-400 leading-relaxed font-light text-lg">
                  Designed the architecture for a dynamic workflow management
                  system using the PERN stack, directly improving operational
                  efficiency by 30%.
                </p>
              )}
            </div>
          </div>
        </section>
      </main>

      {/* NEW FOOTER SECTION */}
      <footer
        className={`py-20 text-center transition-colors duration-500 border-t ${
          isArchitect
            ? "border-gray-900 bg-[#0d1117]"
            : "border-white/5 bg-black/20"
        }`}
      >
        <div className="max-w-4xl mx-auto px-6">
          <AnimatePresence mode="wait">
            {isArchitect ? (
              <motion.div
                key="arch-footer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="font-mono"
              >
                <div className="mb-8 text-green-500/50 text-sm">
                  // Ready to initialize handshake?
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                  <span className="text-green-400">git clone</span>{" "}
                  <span className="text-gray-500">collaboration_request</span>
                </h2>
                <div className="flex flex-wrap justify-center gap-6 text-sm">
                  <a
                    href="https://github.com/vishal-1207"
                    className="text-gray-400 hover:text-green-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="text-green-500 opacity-0 group-hover:opacity-100 transition-opacity">
                      ./
                    </span>
                    GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/vishalchaudhary1207/"
                    className="text-gray-400 hover:text-green-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="text-green-500 opacity-0 group-hover:opacity-100 transition-opacity">
                      ./
                    </span>
                    LinkedIn
                  </a>
                  <a
                    href="mailto:vishalchaudhary1908@gmail.com"
                    className="text-gray-400 hover:text-green-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="text-green-500 opacity-0 group-hover:opacity-100 transition-opacity">
                      ./
                    </span>
                    Email
                  </a>
                </div>
                <p className="mt-12 text-xs text-gray-700">
                  System.exit(0); // v1.0.5
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="artist-footer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="font-sans"
              >
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-purple-200 mb-8">
                  <Sparkles size={12} /> Open for Opportunities
                </div>

                <h2 className="text-4xl md:text-5xl font-serif text-white mb-6 leading-tight">
                  Let's create something <br />
                  <span className="italic text-purple-300">
                    extraordinary
                  </span>{" "}
                  together.
                </h2>

                <div className="flex justify-center gap-8 mt-10">
                  <a
                    href="https://github.com/vishal-1207"
                    className="p-3 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 hover:scale-110 transition-all duration-300"
                  >
                    <Github size={24} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/vishalchaudhary1207/"
                    className="p-3 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 hover:scale-110 transition-all duration-300"
                  >
                    <Linkedin size={24} />
                  </a>
                  <a
                    href="mailto:vishalchaudhary1908@gmail.com"
                    className="p-3 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 hover:scale-110 transition-all duration-300"
                  >
                    <Mail size={24} />
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
