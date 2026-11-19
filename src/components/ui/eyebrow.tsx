import { cn } from "@/lib/utils";

interface EyebrowProps extends React.ComponentProps<"span"> {
  light?: boolean;
}

export function Eyebrow({ className, light, children, ...props }: EyebrowProps) {
  return (
    <span
      className={cn(
        "eyebrow block",
        light ? "text-[#A8C77D]" : "text-[#174D3A]/60",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
