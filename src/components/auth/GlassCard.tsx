"use client"

import type React from "react"

import { motion } from "framer-motion"

import { useTheme } from "@/context/ThemeContext"


interface SpaceCardProps {
  children?: React.ReactNode
  className?: string
  variant?: "default" | "auth"
}

export default function GlassCard({ children, className = "", variant = "default" }: SpaceCardProps) {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';
  
  return (
    <div className="relative rounded-4xl md:min-w-[480px] h-auto min-h-[660px] bg-transparent dark:flex items-center justify-center">
     
      {/* Tarjeta principal con efecto glass */}
      <motion.div
        className={`relative z-10 w-[480px] rounded-4xl overflow-hidden ${className}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          background: isDarkMode ? "rgba(44, 44, 44, 0.85)" : "transparent", 
          backdropFilter: "blur(20px)",
          boxShadow: isDarkMode 
            ? "0 0 90px 1px rgba(255,255,255,0.1), 0 2px 15px rgba(0, 0, 0, 0.2), inset 0 0 3px rgba(255, 255, 255, 0.03), inset 0 0 10px rgba(255, 255, 255, 0.01)" 
            : "0 0 30px 15px rgba(255,255,255,0.15), 0 2px 15px rgba(0, 0, 0, 0.05)",
          border: isDarkMode ? "1px solid rgba(255, 255, 255, 0.05)" : "none",
          position: "relative",
          isolation: "isolate",
        }}
      >
        {/* Efectos de glow fijos */}
        <div className="absolute -bottom-2 -left-20 w-[250px] h-[250px] rounded-full bg-purple-600/30 blur-[80px] overflow-hidden z-40" />
        <div className="absolute -top-20 -right-20 w-[200px] h-[200px] rounded-full bg-purple-500/20 blur-[100px] overflow-hidden" />

        {/* Capa para el efecto glass mejorado - solo en modo oscuro */}
        {isDarkMode && (
          <>
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-white/3 via-transparent to-white/3 pointer-events-none" />
          </>
        )}

        {/* Contenido de la tarjeta */}
        <div className="relative z-10 rounded-4xl">{children}</div>
      </motion.div>
    </div>
  )
}
