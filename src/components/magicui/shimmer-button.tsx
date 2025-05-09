import React, { CSSProperties, ComponentPropsWithoutRef } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface ShimmerButtonProps extends ComponentPropsWithoutRef<"button"> {
  shimmerColor?: string;
  shimmerSize?: string;
  shimmerDuration?: string;
  className?: string;
  children?: React.ReactNode;
  size?: "default" | "sm" | "lg" | "icon";
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
}

export const ShimmerButton = React.forwardRef<
  HTMLButtonElement,
  ShimmerButtonProps
>(
  (
    {
      shimmerColor = "#ffffff",
      shimmerSize = "0.05em",
      shimmerDuration = "3s",
      className,
      children,
      size = "default",
      variant = "default",
      ...props
    },
    ref,
  ) => {
    return (
      <Button
        ref={ref}
        className={cn("relative overflow-hidden", className)}
        size={size}
        variant={variant}
        {...props}
      >
        {/* Shimmer effect layer */}
        <span
          className="absolute inset-0 pointer-events-none"
          style={{
            "--shimmer-color": shimmerColor,
            "--shimmer-size": shimmerSize,
            "--shimmer-duration": shimmerDuration,
          } as CSSProperties}
        >
          <span className="absolute inset-0 opacity-0 animate-shimmer-slide" 
            style={{
              background: `linear-gradient(
                90deg, 
                transparent, 
                var(--shimmer-color), 
                transparent
              )`,
              animationDuration: "var(--shimmer-duration)",
            }}
          />
        </span>
        
        {/* Content */}
        <span className="relative z-10">{children}</span>
      </Button>
    );
  },
);

ShimmerButton.displayName = "ShimmerButton"; 