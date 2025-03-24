import React, { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from "@/lib/utils";

interface SpecialButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export const SpecialButton = forwardRef<HTMLButtonElement, SpecialButtonProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          // Layout & Base styles
          "flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm  transition-colors shadow-button backdrop-blur-2xl h-12 w-32 font-bold",
          
          // Gradiente violeta a naranja con ángulo de top-left a bottom-right
          "bg-gradient-to-br from-violet-600/50 from-15%  via-background-secondary dark:via-dark-background-secondary via-50%  to-orange-500/50 to-100%",
          
          // Efectos adicionales para mejorar la apariencia
        
          "shadow-lg hover:shadow-xl",
          "backdrop-blur-md",
          
          // Texto
          "text-foreground dark:text-dark-foreground font-medium",
          
          // Animaciones
          "transition-all duration-200",
          "hover:scale-105 active:scale-95",
          "hover:from-violet-500 hover:to-orange-400",
 
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

SpecialButton.displayName = "SpecialButton";

export default SpecialButton;