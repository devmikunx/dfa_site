"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-body font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
  {
    variants: {
      variant: {
        primary:
          "bg-[#174D3A] text-[#F0F0E4] hover:bg-[#1f6450] focus-visible:ring-[#174D3A]",
        secondary:
          "border-2 border-[#174D3A] text-[#174D3A] bg-transparent hover:bg-[#174D3A] hover:text-[#F0F0E4] focus-visible:ring-[#174D3A]",
        yellow:
          "bg-[#F5D827] text-[#174D3A] hover:bg-[#e8c820] focus-visible:ring-[#F5D827]",
        ghost:
          "text-[#174D3A] hover:bg-[#174D3A]/10 focus-visible:ring-[#174D3A]",
        "outline-ivory":
          "border-2 border-[#F0F0E4] text-[#F0F0E4] bg-transparent hover:bg-[#F0F0E4] hover:text-[#174D3A] focus-visible:ring-[#F0F0E4]",
        "primary-ivory":
          "bg-[#F0F0E4] text-[#174D3A] hover:bg-white focus-visible:ring-[#F0F0E4]",
      },
      size: {
        sm: "h-9 px-4 text-sm rounded-sm",
        md: "h-11 px-6 text-sm rounded-sm",
        lg: "h-13 px-8 text-base rounded-sm",
        xl: "h-14 px-10 text-base rounded-sm",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

interface ButtonProps
  extends React.ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return (
    <button
      data-slot="button"
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export { buttonVariants };
