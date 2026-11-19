import { cn } from "@/lib/utils";

interface ContainerProps extends React.ComponentProps<"div"> {
  narrow?: boolean;
}

export function Container({ className, narrow, ...props }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-5 sm:px-8 lg:px-10",
        narrow ? "max-w-4xl" : "max-w-[1240px]",
        className
      )}
      {...props}
    />
  );
}
