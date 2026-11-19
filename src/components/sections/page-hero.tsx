import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  eyebrow?: string;
  heading: string;
  subheading?: string;
  image?: string;
  imageAlt?: string;
  dark?: boolean;
  tall?: boolean;
}

export function PageHero({
  eyebrow,
  heading,
  subheading,
  image,
  imageAlt,
  dark = false,
  tall = false,
}: PageHeroProps) {
  if (image) {
    return (
      <section
        className={cn(
          "relative flex items-end overflow-hidden",
          tall ? "min-h-[62vh]" : "min-h-[52vh]"
        )}
      >
        <Image
          src={image}
          alt={imageAlt ?? ""}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d2e22]/90 via-[#174D3A]/40 to-transparent" />
        <Container className="relative z-10 pb-10 md:pb-14 pt-24">
          {eyebrow && (
            <Eyebrow light className="mb-3">
              {eyebrow}
            </Eyebrow>
          )}
          <h1 className="page-heading text-[#F0F0E4] max-w-3xl">{heading}</h1>
          {subheading && (
            <p className="body-text text-[#F0F0E4]/80 mt-3 max-w-xl">
              {subheading}
            </p>
          )}
        </Container>
      </section>
    );
  }

  return (
    <section
      className={cn(
        "pt-24 md:pt-28",
        dark ? "bg-[#174D3A]" : "bg-[#F0F0E4]",
        tall ? "pb-16 md:pb-20" : "pb-12 md:pb-16"
      )}
    >
      <Container>
        {eyebrow && (
          <Eyebrow light={dark} className="mb-3">
            {eyebrow}
          </Eyebrow>
        )}
        <h1
          className={cn(
            "page-heading max-w-3xl",
            dark ? "text-[#F0F0E4]" : "text-[#174D3A]"
          )}
        >
          {heading}
        </h1>
        {subheading && (
          <p
            className={cn(
              "body-text mt-4 max-w-2xl",
              dark ? "text-[#F0F0E4]/80" : "text-[#174D3A]/70"
            )}
          >
            {subheading}
          </p>
        )}
      </Container>
    </section>
  );
}
