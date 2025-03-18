"use client"

import { useTheme } from "@/context/ThemeContext"
import { MoonIcon, SunIcon } from '@/components/ui/icons'
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface ThemeToggleProps {
  className?: string
}

export default function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  // Path when light mode is selected (right side bigger)
  const lightModePath =
    "M96 26C96 40.3594 84.3594 52 70 52C61.7673 52 54.4283 48.1736 49.6644 42.2023C46.9337 38.7795 43.1408 36 38.7622 36C35.1419 36 31.8949 37.9991 29.0364 40.2207C25.9886 42.5895 22.159 44 18 44C8.05887 44 0 35.9411 0 26C0 16.0589 8.05887 8 18 8C22.159 8 25.9886 9.41054 29.0364 11.7793C31.8949 14.0009 35.1419 16 38.7622 16C43.1408 16 46.9337 13.2205 49.6644 9.7977C54.4283 3.82636 61.7673 0 70 0C84.3594 0 96 11.6406 96 26Z"

  // Path when dark mode is selected (left side bigger)
  const darkModePath =
    "M96 26C96 35.9411 87.9411 44 78 44C73.841 44 70.0114 42.5895 66.9636 40.2207C64.1051 37.9991 60.8581 36 57.2378 36C52.8592 36 49.0663 38.7795 46.3356 42.2023C41.5717 48.1736 34.2327 52 26 52C11.6406 52 0 40.3594 0 26C0 11.6406 11.6406 0 26 0C34.2327 0 41.5717 3.82636 46.3356 9.7977C49.0663 13.2205 52.8592 16 57.2378 16C60.8581 16 64.1051 14.0009 66.9636 11.7793C70.0114 9.41054 73.841 8 78 8C87.9411 8 96 16.0589 96 26Z"

  return (
    <div className={cn("relative w-[96px] h-[52px]", className)}>
      <motion.div className="absolute inset-0 cursor-pointer" onClick={toggleTheme} initial={false}>
        {/* SVG animado que cambia de forma */}
        <svg
          width="96"
          height="52"
          viewBox="0 0 96 52"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0"
        >
          {/* Base color */}
          <motion.path
            d={isDark ? darkModePath : lightModePath}
            animate={{
              d: isDark ? darkModePath : lightModePath,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
            fill={isDark ? "#1e1e2e" : "#FFF"}
          />

          {/* Gradientes combinados */}
          <motion.path
            d={isDark ? darkModePath : lightModePath}
            animate={{
              d: isDark ? darkModePath : lightModePath,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
            fill="url(#combined-gradient)"
            style={{
              opacity: isDark ? 0.9 : 1,
            }}
          />

          {/* Borde sutil */}
          <motion.path
            d={isDark ? darkModePath : lightModePath}
            animate={{
              d: isDark ? darkModePath : lightModePath,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
            stroke="rgba(255, 255, 255, 0.1)"
            strokeWidth="0.5"
            fill="none"
          />

          {/* Definición de gradientes */}
          <defs>
            {/* Gradiente combinado exactamente como se proporcionó */}
            <radialGradient
              id="purple-gradient"
              cx="0.5699"
              cy="1"
              r="1.8923"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(0 0) scale(1)"
            >
              <stop offset="0.3163" stopColor="rgba(107, 49, 125, 0.00)" />
              <stop offset="0.5589" stopColor="rgba(139, 70, 166, 0.15)" />
              <stop offset="0.6814" stopColor="rgba(95, 19, 211, 0.31)" />
            </radialGradient>

            <radialGradient
              id="amber-gradient"
              cx="0.5"
              cy="0"
              r="1.6986"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(0 0) scale(1)"
            >
              <stop offset="0.3239" stopColor="rgba(118, 51, 46, 0.00)" />
              <stop offset="0.5643" stopColor="rgba(181, 134, 62, 0.15)" />
              <stop offset="0.6815" stopColor="rgba(182, 13, 0, 0.31)" />
            </radialGradient>

            <linearGradient id="combined-gradient" x1="48" y1="0" x2="48" y2="52">
              <stop offset="0" stopColor="white" stopOpacity="0" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>

        {/* Contenedor de los iconos - Centrados mejor */}
        <div className="absolute inset-0 flex items-center pointer-events-none">
          {/* Lado izquierdo - Luna (centrada en el lóbulo izquierdo) */}
          <motion.div
            className="relative z-10 ml-5"
            animate={{
              scale: isDark ? 1.3 : 0.8,
              opacity: isDark ? 1 : 0.6,
              x: isDark ? 2 : -3,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
          >
            <MoonIcon className={cn("h-6 w-6", isDark ? "text-blue-200" : "text-gray-400")} />
          </motion.div>

          {/* Espacio flexible para separar los iconos */}
          <div className="flex-grow"></div>

          {/* Lado derecho - Sol (centrado en el lóbulo derecho) */}
          <motion.div
            className="relative z-10 mr-5"
            animate={{
              scale: isDark ? 0.8 : 1.3,
              opacity: isDark ? 0.6 : 1,
              x: isDark ? 3 : -2,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
          >
            <SunIcon className={cn("h-6 w-6", isDark ? "text-gray-400" : "text-amber-500")} />
            {/* Rayos del sol */}
            {[45, 90, 135, 180, 225, 270, 315, 360].map((degree, i) => (
              <motion.div
                key={i}
                className={cn("absolute h-1 w-1 rounded-full", isDark ? "bg-gray-400" : "bg-amber-500")}
                style={{
                  transform: `rotate(${degree}deg) translateX(10px)`,
                }}
                animate={{
                  opacity: isDark ? 0.6 : 1,
                  scale: isDark ? 0.8 : 1,
                }}
              />
            ))}
          </motion.div>
        </div>

        {/* Aplicar los gradientes como capas separadas para mayor control */}
        <div className="absolute inset-0 pointer-events-none">
          <svg width="96" height="52" viewBox="0 0 96 52" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Gradiente púrpura (para modo oscuro) */}
            <motion.path
              d={isDark ? darkModePath : lightModePath}
              animate={{
                d: isDark ? darkModePath : lightModePath,
                opacity: isDark ? 1 : 0.5,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
              fill="url(#purple-gradient)"
            />

            {/* Gradiente ámbar (para modo claro) */}
            <motion.path
              d={isDark ? darkModePath : lightModePath}
              animate={{
                d: isDark ? darkModePath : lightModePath,
                opacity: isDark ? 0.5 : 1,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
              fill="url(#amber-gradient)"
            />
          </svg>
        </div>
      </motion.div>
    </div>
  )
}
