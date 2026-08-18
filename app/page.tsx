"use client";

import { ThemeToggle } from "./theme-toggle";
import DriftWall from "./DriftWall";
import { projects } from "./data/projects-data";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { skillCategories } from "./data/skills-data";
import { experience, education } from "./data/experience-data";
import Image from "next/image";
import PillNav from "./PillNavItem";
import StrokeText from "./StrokeText";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function Home() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = !mounted || resolvedTheme === "dark";
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-16 text-center bg-white dark:bg-black transition-colors">
      <ThemeToggle />
      <PillNav
        items={[
          { label: "Proyectos", href: "#proyectos" },
          { label: "Habilidades", href: "#habilidades" },
          { label: "Experiencia", href: "#experiencia" },
          { label: "Contacto", href: "#contacto" },
        ]}
        baseColor="#111827"
        pillColor="#ffffff"
        hoveredPillTextColor="#ffffff"
        pillTextColor="#111827"
      />

      <div className="flex flex-col md:flex-row items-center py-10 gap-10 max-w-3xl">
        <Image
          src="/foto-perfil.jpeg"
          alt="Sebastián Torres"
          width={180}
          height={180}
          className="rounded-full object-cover border-4 border-gray-200 dark:border-gray-700"
        />
        <div className="text-center md:text-left">
          <h1 className="mb-2">
            <StrokeText
              text="Sebastian Torres"
              strokeColor={isDark ? "#A78BFA" : "#6D28D9"}
              fillColor={isDark ? "#F8FAFC" : "#0F172A"}
              strokeWidth={1}
              drawDuration={1}
              fillDelay={0.2}
              stagger={0.05}
              ease="power2.out"
              trigger="mount"
              fillMode="wipe"
              fontSize={56}
              fontWeight={800}
              letterSpacing={-1}
              reverse={false}
            />
          </h1>

          <h2 className="mb-6 opacity-90 ">
            <StrokeText
              text="Desarrollador Full Stack"
              strokeColor={isDark ? "#A78BFA" : "#7C3AED"}
              fillColor={isDark ? "#94A3B8" : "#475569"}
              strokeWidth={0.8}
              drawDuration={1.2}
              fillDelay={0.4}
              stagger={0.03}
              ease="power2.out"
              trigger="mount"
              fillMode="wipe"
              fontSize={28}
              fontWeight={600}
              letterSpacing={0}
              reverse={false}
            />
          </h2>

          <div className="flex items-center gap-4 justify-center md:justify-start ml-2">
            <a
              href="https://github.com/Sebastian09-cell"
              target="_blank"
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <FiGithub size={24} />
            </a>
            <a
              href="https://linkedin.com/in/sebastian-torres-delgado-208a18254"
              target="_blank"
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <FiLinkedin size={24} />
            </a>
            <a
              href="mailto:sebastiantorresdelgado526@gmail.com"
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <FiMail size={24} />
            </a>
            <a
              href="/cv-sebastian-torres.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              Ver CV
            </a>
          </div>
        </div>
      </div>

      <p className="max-w-xl text-gray-700 dark:text-gray-300 leading-relaxed mt-10">
        Soy desarrollador web fullstack autodidacta. Empecé a programar en abril
        de 2025 desde cero, y desde entonces construí varios proyectos completos
        por mi cuenta — incluyendo una web en producción para un cliente real.
        Actualmente curso Ingeniería de Sistemas en ETITC (jornada nocturna)
        mientras busco mi primera oportunidad formal como desarrollador.
      </p>
      <p className="mt-4 text-gray-700 dark:text-gray-300">
        Trabajo con React, Next.js, TypeScript y Prisma.
      </p>
      <section
        id="proyectos"
        className="w-full py-10 mt-16 scroll-mt-10 max-w-4xl mx-auto px-4"
      >
        <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white text-center">
          Proyectos
        </h2>

        <div className="hidden md:block w-full mb-12">
          <div
            style={{ height: 320 }}
            className="w-full flex justify-center px-4"
          >
            <DriftWall
              items={projects.map((p) => ({
                image: p.image,
                title: p.name,
                href: p.liveUrl,
              }))}
              columns={3}
              tileWidth={240}
              tileHeight={135}
              speed={20}
              pauseOnHover={true}
              dim={0.85}
              fade={0.3}
            />
          </div>
        </div>

        <div className="grid gap-6 max-w-3xl mx-auto px-4 sm:px-0">
          {projects.map((p) => (
            <article
              key={p.name}
              className="flex flex-col sm:flex-row gap-6 p-5 rounded-2xl border border-gray-200 dark:border-gray-800/80 bg-gray-50 dark:bg-neutral-900/60 hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300"
            >
              <div className="w-full sm:w-2/5 h-48 sm:h-auto min-h-[160px] bg-neutral-950 rounded-xl overflow-hidden relative border border-neutral-800/80 flex-shrink-0">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="w-full sm:w-3/5 flex flex-col justify-between text-left">
                <div>
                  <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-2">
                    {p.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                    {p.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {p.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2.5 py-1 rounded-md bg-gray-200/70 dark:bg-neutral-800 text-gray-700 dark:text-gray-300 border border-gray-300/50 dark:border-neutral-700/50 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <a
                    href={p.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium px-4 py-2 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:opacity-90 transition-opacity"
                  >
                    Ver en vivo
                  </a>

                  {p.repoUrl && (
                    <a
                      href={p.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium px-4 py-2 rounded-xl border border-gray-300 dark:border-neutral-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors"
                    >
                      Ver código
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section
        id="habilidades"
        className="w-full mt-20 max-w-4xl py-10 mx-auto scroll-mt-10 text-left"
      >
        <h2 className="text-3xl font-bold mb-3 text-gray-900 dark:text-white">
          Habilidades
        </h2>
        <p className="text-black/80 dark:text-gray-400">
          En mi viaje por el{" "}
          <span className="text-black dark:text-white font-semibold">
            mundo del desarrollo web
          </span>
          , he cultivado experiencia y habilidades en una variedad de
          tecnologías.{" "}
          <span className="text-black dark:text-white font-semibold">
            Mi stack tecnológico incluye:
          </span>
        </p>

        <div className="grid gap-6 sm:grid-cols-2">
          {skillCategories.map((cat) => (
            <div
              key={cat.category}
              className="p-6 rounded-2xl border border-gray-200 dark:border-gray-800/80 bg-gray-50 dark:bg-[#0B0F17] shadow-xl"
            >
              <h3 className="text-xl font-bold text-black dark:text-white mb-6 text-center">
                {cat.category}
              </h3>

              <div className="grid grid-cols-3 gap-y-6 gap-x-4 place-items-center">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center justify-center gap-2 group cursor-pointer"
                  >
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-200 dark:invert-0 invert"
                    />
                    <span className="text-xs font-medium text-gray-600 dark:text-gray-300 text-center">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <section
        id="experiencia"
        className="w-full max-w-4xl mx-auto py-12 px-4 scroll-mt-10 text-left"
      >
        <h2 className="text-3xl font-bold mb-12 text-gray-900 dark:text-white text-center">
          Experiencia y Formación
        </h2>

        <div className="grid grid-cols-1 gap-12">
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 ml-4 md:ml-8 flex items-center gap-2">
              <svg
                className="w-6 h-6 text-purple-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Experiencia
            </h3>

            <div className="relative border-l-2 border-gray-200 dark:border-neutral-800 ml-4 md:ml-8 space-y-8 pl-6 md:pl-8">
              {experience.map((item) => (
                <div key={item.role} className="relative group">
                  <span className="absolute -left-[33px] md:-left-[41px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-neutral-950 border-2 border-purple-400 group-hover:bg-purple-500 transition-colors duration-300" />
                  <div className="p-5 rounded-2xl border border-gray-200 dark:border-neutral-800/80 bg-gray-50 dark:bg-neutral-900/50 hover:border-gray-300 dark:hover:border-neutral-700/80 transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                      <h4 className="font-bold text-lg text-gray-900 dark:text-white">
                        {item.role}
                      </h4>
                      <span className="self-start sm:self-auto text-xs font-semibold px-2.5 py-1 rounded-full bg-purple-100 dark:bg-purple-500/10 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-500/20">
                        {item.period}
                      </span>
                    </div>

                    <p className="text-sm font-medium text-purple-600 dark:text-purple-400 mb-2">
                      {item.place}
                    </p>

                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 ml-4 md:ml-8 flex items-center gap-2">
              <svg
                className="w-6 h-6 text-purple-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 14l9-5-9-5-9 5 9 5z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 14v6.5"
                />
              </svg>
              Formación Académica
            </h3>

            <div className="relative border-l-2 border-gray-200 dark:border-neutral-800 ml-4 md:ml-8 space-y-8 pl-6 md:pl-8">
              {education.map((item) => (
                <div key={item.title} className="relative group">
                  <span className="absolute -left-[33px] md:-left-[41px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-neutral-950 border-2 border-purple-400 group-hover:bg-purple-500 transition-colors duration-300" />

                  <div className="p-5 rounded-2xl border border-gray-200 dark:border-neutral-800/80 bg-gray-50 dark:bg-neutral-900/50 hover:border-gray-300 dark:hover:border-neutral-700/80 transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                      <h4 className="font-bold text-lg text-gray-900 dark:text-white">
                        {item.title}
                      </h4>
                      <span className="self-start sm:self-auto text-xs font-semibold px-2.5 py-1 rounded-full bg-purple-100 dark:bg-purple-500/10 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-500/20">
                        {item.period}
                      </span>
                    </div>

                    <p className="text-sm font-medium text-purple-600 dark:text-purple-400 mb-2">
                      {item.place}
                    </p>

                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                      {item.description}
                    </p>

                    {item.certUrl && (
                      <a
                        href={item.certUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-500 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-300 transition-colors"
                      >
                        Ver certificado
                        <svg
                          className="w-3.5 h-3.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section
        id="contacto"
        className="w-full min-h-screen flex flex-col items-center justify-center text-center px-4 scroll-mt-10"
      >
        <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
          ¿Hablamos?
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Estoy buscando mi primera oportunidad como desarrollador. Si tenés
          algo en mente, escribime.
        </p>
        <a
          href="mailto:sebastiantorresdelgado526@gmail.com"
          className="inline-block text-sm px-6 py-3 rounded-md bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:opacity-90 transition-opacity"
        >
          Contactame
        </a>
      </section>
    </main>
  );
}
