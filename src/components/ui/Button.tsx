import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import React from "react";


export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}
  const buttonVariants = cva(
    "flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-colors shadow-button backdrop-blur-2xl",
    {
      variants: {
        variant: {
          default: "bg-primary  dark:text-dark-foreground hover:bg-primary/70 active:bg-primary/80",
          secondary:
            "bg-secondary text-black dark:bg-dark-secondary dark:text-dark-foreground hover:bg-secondary/70 active:bg-secondary/80",
          destructive:
            "bg-red-500 text-dark-foreground dark:text-white hover:bg-red-500/70 active:bg-red-500/80",
       
          link: "text-neutral-900 underline-offset-4 hover:underline dark:text-neutral-50",
        },
        size: {
          default: "h-12 w-32",
          full: "h-12 w-full"
        },
      },
      defaultVariants: {
        variant: "default",
        size: "default",
      },
    }
  )
  

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }) => {
    return (
      <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
      >
        {props.children}
      </button>
    )
  }
)
export { Button };