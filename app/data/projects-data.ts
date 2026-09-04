export type Project = {
  name: string;
  description: string;
  image: string;
  liveUrl: string;
  repoUrl: string | null;
  stack: string[];
};

export const projects: Project[] = [
  {
    name: "Habit Tracker",
    description:
      "Gestor de tareas multiusuario con autenticación, donde cada usuario ve solo sus propios datos.",
    image: "/projects/Todo-app.png",
    liveUrl: "https://habit-tracker-amber-rho.vercel.app/",
    repoUrl: "https://github.com/Sebastian09-cell/habit-tracker",
    stack: ["Next.js", "Prisma", "PostgreSQL", "Clerk", "Tailwind"],
  },
  {
    name: "Ecommerce",
    description:
      "Tienda online con carrito de compras, filtrado por categorías y diseño responsive, construida con Chakra UI.",
    image: "/projects/ecomerce.png",
    liveUrl: "https://illustrious-bonbon-2955de.netlify.app/",
    repoUrl: "https://github.com/Sebastian09-cell/ecomerce-proyect",
    stack: ["React", "TypeScript", "Chakra UI", "Zustand", "React Query"],
  },
  {
    name: "Libros API",
    description:
      "API REST ligera y pública para gestionar un catálogo de libros, con playground en vivo para probar los endpoints.",
    image: "/projects/libros-api.png",
    liveUrl: "https://libros-api-typescript.vercel.app/",
    repoUrl: "https://github.com/Sebastian09-cell/libros-api-typescript",
    stack: ["Node.js", "Express", "TypeScript", "Render"],
  },
  {
    name: "Peluditos",
    description:
      "Web en producción para un cliente real de paseo de perros. Landing informativa con formulario de contacto.",
    image: "/projects/peluditos.png",
    liveUrl: "https://www.paseadorespeluditos.com/",
    repoUrl: null,
    stack: ["HTML", "CSS", "JavaScript"],
  },
];
