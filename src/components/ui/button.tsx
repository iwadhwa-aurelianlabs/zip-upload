import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/80 tracking-[0.15em] uppercase",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-foreground text-foreground bg-transparent hover:bg-foreground hover:text-background tracking-[0.15em] uppercase",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 tracking-[0.15em] uppercase",
        ghost: "hover:bg-accent hover:text-accent-foreground tracking-[0.15em] uppercase",
        link: "text-primary underline-offset-4 hover:underline tracking-[0.1em]",
        // Modern minimal variants
        institutional:
          "bg-foreground text-background hover:bg-foreground/80 tracking-[0.2em] uppercase text-xs font-medium",
        "institutional-secondary":
          "border border-foreground text-foreground bg-transparent hover:bg-foreground hover:text-background tracking-[0.2em] uppercase text-xs font-medium",
        "institutional-ghost":
          "text-muted-foreground hover:text-foreground tracking-[0.15em] uppercase text-xs font-medium",
      },
      size: {
        default: "h-12 px-8 py-2",
        sm: "h-10 px-6 text-xs",
        lg: "h-14 px-12 py-3 text-sm",
        xl: "h-16 px-16 text-sm",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
