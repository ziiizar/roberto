import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import React from "react";


export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}
  const buttonVariants = cva(
    "flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium transition-colors shadow-button backdrop-blur-2xl cursor-pointer transition-all duration-20",
    {
      variants: {
        variant: {
          default: "background-primary  text-foreground dark:text-dark-foreground hover:from-blue-500 hover:to-blue-700  hover:shadow-white/30  active:background-primary border-primary shadow-primary font-semibold hover:brightness-110" ,
          secondary:
            "background-secondary border-secondary shadow-secondary text-foreground-secondary dark:bg-dark-secondary dark:text-dark-foreground hover:background-secondary/70 active:background-secondary/80 s+ hover:shadow-white/10 font-semibold hover:brightness-120",
          destructive:
            "bg-red-500 text-dark-foreground dark:text-white hover:bg-red-500/70 active:bg-red-500/80",
       ghost: 'bg-transparent text-foreground',
          link: "text-neutral-900 underline-offset-4 hover:underline dark:text-neutral-50",
          social: 'size-10 rounded-xl ',
          outline: 'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground font-semibold'
        },
        size: {
          default: "h-[44px] w-[122px]",
          full: "h-[44px] w-full",
          icon: "h-8 w-8",
        },
      },
      defaultVariants: {
        variant: "default",
        size: "default",
      },
    }
  )
  

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
      ref={ref}
      >
        {props.children}
      </button>
    )
  }
)
export { Button };
Button.displayName = "Button"; 
