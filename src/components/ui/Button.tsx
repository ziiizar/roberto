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
          default: "bg-gradient-to-br from-primary-gradient-from via-primary-gradient-via 0 to-primary-gradient-to  text-foreground dark:text-dark-foreground hover:from-blue-500 hover:to-blue-700 shadow-inner hover:shadow-white/30  active:bg-primary ",
          secondary:
            "bg-gradient-to-b from-secondary-gradient-from  to-secondary-gradient-to text-foreground dark:bg-dark-secondary dark:text-dark-foreground hover:bg-secondary/70 active:bg-secondary/80 shadow-inner hover:shadow-white/10",
          destructive:
            "bg-red-500 text-dark-foreground dark:text-white hover:bg-red-500/70 active:bg-red-500/80",
       ghost: 'bg-transparent text-foreground',
          link: "text-neutral-900 underline-offset-4 hover:underline dark:text-neutral-50",
          social: 'size-10 rounded-xl ',
          outline: 'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground'
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
