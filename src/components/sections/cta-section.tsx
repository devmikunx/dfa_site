import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { cn } from "@/lib/utils";

interface CtaSectionProps {
  eyebrow?: string;
  heading: string;
  subheading?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  dark?: boolean;
  centered?: boolean;
}

export function CtaSection({
  eyebrow,
  heading,
  subheading,
  primaryCta,
  secondaryCta,
  dark = false,
  centered = false,
}: CtaSectionProps) {
  return (
    <section
      className={cn(
        "section-padding",
        dark ? "bg-[#174D3A]" : "bg-[#F0F0E4]"
      )}
    >
      <Container>
        <div
          className={cn(
            centered ? "text-center max-w-2xl mx-auto" : "max-w-3xl"
          )}
        >
          {eyebrow && (
            <Eyebrow light={dark} className="mb-4">
              {eyebrow}
            </Eyebrow>
          )}
          <h2
            className={cn(
              "section-heading mb-5",
              dark ? "text-[#F0F0E4]" : "text-[#174D3A]"
            )}
          >
            {heading}
          </h2>
          {subheading && (
            <p
              className={cn(
                "body-text mb-8",
                dark ? "text-[#F0F0E4]/75" : "text-[#174D3A]/70"
              )}
            >
              {subheading}
            </p>
          )}
          {(primaryCta || secondaryCta) && (
            <div
              className={cn(
                "flex flex-nowrap items-center gap-2.5 sm:gap-4",
                centered && "justify-center"
              )}
            >
              {primaryCta && (
                <Link href={primaryCta.href} className="min-w-0">
                  <Button
                    variant={dark ? "yellow" : "primary"}
                    size="lg"
                    className="group whitespace-nowrap max-sm:px-3.5 max-sm:py-2.5 max-sm:text-xs"
                  >
                    {primaryCta.label}
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1 max-sm:size-3.5"
                    />
                  </Button>
                </Link>
              )}
              {secondaryCta && (
                <Link href={secondaryCta.href} className="min-w-0">
                  <Button
                    variant={dark ? "outline-ivory" : "secondary"}
                    size="lg"
                    className="whitespace-nowrap max-sm:px-3.5 max-sm:py-2.5 max-sm:text-xs"
                  >
                    {secondaryCta.label}
                  </Button>
                </Link>
              )}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}