import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ImageTextSectionProps {
  eyebrow?: string;
  heading: string;
  body: string | React.ReactNode;
  image: string;
  imageAlt: string;
  cta?: { label: string; href: string };
  reversed?: boolean;
  dark?: boolean;
  tall?: boolean;
}

export function ImageTextSection({
  eyebrow,
  heading,
  body,
  image,
  imageAlt,
  cta,
  reversed = false,
  dark = false,
  tall = false,
}: ImageTextSectionProps) {
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
            "grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center",
            reversed && "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1"
          )}
        >
          <div
            className={cn(
              "relative rounded-lg overflow-hidden",
              tall ? "aspect-[3/4]" : "aspect-[4/3]"
            )}
          >
            <Image
              src={image}
              alt={imageAlt}
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div>
            {eyebrow && (
              <Eyebrow light={dark} className="mb-4">
                {eyebrow}
              </Eyebrow>
            )}
            <h2
              className={cn(
                "section-heading mb-6",
                dark ? "text-[#F0F0E4]" : "text-[#174D3A]"
              )}
            >
              {heading}
            </h2>
            <div
              className={cn(
                "body-text",
                dark ? "text-[#F0F0E4]/75" : "text-[#174D3A]/70"
              )}
            >
              {typeof body === "string" ? <p>{body}</p> : body}
            </div>
            {cta && (
              <div className="mt-8">
                <Link href={cta.href}>
                  <Button
                    variant={dark ? "outline-ivory" : "primary"}
                    size="lg"
                    className="group"
                  >
                    {cta.label}
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
