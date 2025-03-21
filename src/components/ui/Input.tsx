import React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  error?: string;
  className?: string;
  inputClassName?: string;
  iconClassName?: string;
  containerClassName?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      inputClassName,
      iconClassName,
      containerClassName,
      icon,
      type,
      error,
      ...props
    },
    ref
  ) => {
    return (
      <div className={cn("w-full space-y-1", containerClassName)}>
        <div
          className={cn(
            "mb-6",
            error ? "border-destructive" : "border-input",
            className
          )}
        >
          {icon && (
            <div className={cn("mr-2 text-foreground dark:text-dark-foreground", iconClassName)}>
              {icon}
            </div>
          )}
          <input
            type={type}
            className={cn(
              "w-full h-[44px] px-4 py-3 rounded-lg bg-[#1C202B] text-foreground border border-[#303541] focus:outline-none focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:text-white",
              inputClassName
            )}
            ref={ref}
            {...props}
          />
        </div>
        {error && (
          <p className="text-xs text-destructive">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };