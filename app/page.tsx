import { ThemeToggle } from "./theme-toggle";
import DriftWall from "./DriftWall";
import { projects } from "./data/projects-data";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { skillCategories } from "./data/skills-data";
import { experience, education } from "./data/experience-data";

import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-16 text-center bg-white dark:bg-black transition-colors">
      <ThemeToggle />

      <div className="flex flex-col md:flex-row items-center gap-10 max-w-3xl">
        <Image
          src="/foto-perfil.jpeg"
          alt="Sebastián Torres"
          width={180}
          height={180}
          className="rounded-full object-cover border-4 border-gray-200 dark:border-gray-700"
        />
        <div className="text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold mb-3 text-gray-900 dark:text-white">
            Sebastián Torres
          </h1>
          <h2 className="text-xl text-gray-500 dark:text-gray-400 mb-6">
            Desarrollador Web Fullstack
          </h2>
          <div className="flex items-center gap-4 justify-center md:justify-start">
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
      <section className="w-full mt-16">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
          Proyectos
        </h2>

        <div style={{ height: 400 }} className="w-full">
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

        <div className="mt-10 grid gap-6 max-w-2xl mx-auto">
          {projects.map((p) => (
            <div
              key={p.name}
              className="text-left p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50 hover:border-gray-300 dark:hover:border-gray-700 transition-colors"
            >
              <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                {p.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                {p.description}
              </p>
              <p className="text-xs text-gray-500 mt-2">
                {p.stack.join(" · ")}
              </p>
              <div className="flex gap-3 mt-4">
                <a
                  href={p.liveUrl}
                  target="_blank"
                  className="text-sm px-3 py-1.5 rounded-md bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:opacity-90 transition-opacity"
                >
                  Ver en vivo
                </a>

                {p.repoUrl && (
                  <a
                    href={p.repoUrl}
                    target="_blank"
                    className="text-sm px-3 py-1.5 rounded-md border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    Ver código
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="w-full mt-20 max-w-2xl mx-auto text-left">
        <h2 className="text-3xl font-bold mb-10 text-gray-900 dark:text-white text-center">
          Habilidades
        </h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {skillCategories.map((cat) => (
            <div
              key={cat.category}
              className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50"
            >
              <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">
                {cat.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="w-full mt-20 max-w-2xl mx-auto text-left">
        <h2 className="text-3xl font-bold mb-10 text-gray-900 dark:text-white text-center">
          Experiencia y Formación
        </h2>

        <div className="mb-8">
          <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-4">
            Experiencia
          </h3>
          <div className="space-y-4">
            {experience.map((item) => (
              <div
                key={item.role}
                className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50"
              >
                <div className="flex justify-between items-start flex-wrap gap-2">
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {item.role}
                  </h4>
                  <span className="text-xs text-gray-500">{item.period}</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  {item.place}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-4">
            Formación
          </h3>
          <div className="space-y-4">
            {education.map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50"
              >
                <div className="flex justify-between items-start flex-wrap gap-2">
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {item.title}
                  </h4>
                  <span className="text-xs text-gray-500">{item.period}</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  {item.place}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  {item.description}
                </p>
                {item.certUrl && (
                  <a
                    href={item.certUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm underline text-gray-700 dark:text-gray-300 mt-2 inline-block"
                  >
                    Ver certificado
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
