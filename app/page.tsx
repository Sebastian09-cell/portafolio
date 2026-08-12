import { ThemeToggle } from "./theme-toggle";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 text-center bg-white dark:bg-black transition-colors">
      <ThemeToggle />
      <h1 className="text-4xl sm:text-5xl font-bold mb-3 text-gray-900 dark:text-white">
        Sebastián Torres
      </h1>
      <h2 className="text-xl text-gray-500 dark:text-gray-400 mb-6">
        Desarrollador Web Fullstack
      </h2>
      <p className="max-w-xl text-gray-700 dark:text-gray-300 leading-relaxed">
        Soy desarrollador web fullstack autodidacta. Empecé a programar en abril
        de 2025 desde cero, y desde entonces construí varios proyectos completos
        por mi cuenta — incluyendo una web en producción para un cliente real.
        Actualmente curso Ingeniería de Sistemas en ETITC (jornada nocturna)
        mientras busco mi primera oportunidad formal como desarrollador.
      </p>
      <p className="mt-2 text-gray-700 dark:text-gray-300">
        Trabajo con React, Next.js, TypeScript y Prisma.
      </p>

      {/* Acá va después la sección de proyectos */}
    </main>
  );
}
