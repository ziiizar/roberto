import { cn } from "@/lib/utils";
import React from "react";

export const Stars: React.FC = () => {
  // Función para generar estrellas de manera aleatoria
  const generateRandomStars = (count: number, size: number, glow: boolean = false) => {
    const stars = [];
    for (let i = 0; i < count; i++) {
      const top = `${Math.random() * 100}%`;
      const left = `${Math.random() * 100}%`;
      const delay = `${Math.random() * 2}s`;
      const duration = `${3 + Math.random() * 3}s`;
      
      stars.push({
        size,
        top,
        left,
        delay,
        duration,
        glow
      });
    }
    return stars;
  };
  
  // Generamos muchas micro-estrellas
  const microStars = generateRandomStars(300, 0.5, false);
  const tinyStars = generateRandomStars(150, 0.3, false);
  const smallStars = generateRandomStars(50, 1, false);
  const mediumStars = generateRandomStars(20, 2, true);
  const largeStars = generateRandomStars(10, 3, true);
  
  // Combinamos todas las estrellas
  const allStars = [
    ...microStars,
    ...tinyStars,
    ...smallStars,
    ...mediumStars,
    ...largeStars,
    // Añadimos algunas estrellas más grandes específicas para destacar
    { size: 4, top: "17%", left: "33%", delay: "0.4s", duration: "4.5s", glow: true },
    { size: 4, top: "42%", left: "55%", delay: "1.3s", duration: "5.7s", glow: true },
    { size: 4, top: "68%", left: "22%", delay: "0.6s", duration: "4.2s", glow: true },
    { size: 4, top: "26%", left: "74%", delay: "1.8s", duration: "5.3s", glow: true },
    { size: 4, top: "81%", left: "67%", delay: "0.5s", duration: "3.9s", glow: true },
  ];

  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[550px] overflow-hidden px-12 ">
      {allStars.map((star, i) => (
        <div
          key={i}
          className={cn(
            "absolute rounded-full",
            "dark:bg-white bg-dark-background",
            "dark:opacity-80 opacity-30 -z-0",
            star.glow ? "animate-pulse" : ""
          )}
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            top: star.top,
            left: star.left,
            animationDelay: star.delay,
            animation: `twinkle ${star.duration} infinite alternate`,
            boxShadow: star.glow ? 
              "0 0 2px #fff, 0 0 3px #fff, 0 0 5px #fff, 0 0 8px #f3f3f3" : 
              "none"
          }}
        />
      ))}
      <style jsx>{`
        @keyframes twinkle {
          0% { opacity: 0.2; transform: scale(0.8); }
          50% { opacity: 0.5; }
          100% { opacity: 1; transform: scale(1.1); }
        }
        
        @keyframes glow {
          0% { box-shadow: 0 0 2px #fff, 0 0 4px #fff; }
          100% { box-shadow: 0 0 4px #fff, 0 0 8px #fff, 0 0 12px #fff; }
        }
      `}</style>
    </div>
  );
};

export default Stars;
