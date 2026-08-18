"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  // 1. Espera a que React se hidrate en el navegador móvil
  useEffect(() => {
    setMounted(true);
  }, []);

  // Rendereado de reserva mientras carga el cliente
  if (!mounted) {
    return (
      <div className="fixed top-4 right-4 z-[9999] p-3 rounded-full bg-neutral-900/80 border border-neutral-800 opacity-0" />
    );
  }

  // 2. Usa resolvedTheme para detectar el tema real aplicado por el Provider
  const isDark = (resolvedTheme || theme) === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Cambiar tema"
      className="fixed top-4 right-4 z-[9999] pointer-events-auto cursor-pointer p-3 rounded-full bg-neutral-900/80 text-amber-400 border border-neutral-800 backdrop-blur-sm active:scale-95 transition-all"
    >
      {isDark ? <FiSun size={20} /> : <FiMoon size={20} />}
    </button>
  );
}
