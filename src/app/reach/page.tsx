import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { CtaSection } from "@/components/sections/cta-section";
import { REACH_PILLARS, REACH_IMPACT_ITEMS } from "@/data/reach";
import { UNSPLASH_IMAGES } from "@/constants";

export const metadata: Metadata = {
  title: "REACH | De Future Audacious",
  description: "Reaching and Empowering All through Community Health and Human Development.",
};

export default function ReachPage() {
  return (
    <>
      <section className="relative min-h-[88vh] flex items-end overflow-hidden">
        <Image
          src={UNSPLASH_IMAGES.reach}
          alt="REACH community health outreach"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d2e22]/95 via-[#174D3A]/55 to-[#174D3A]/10" />
        <Container className="relative z-10 pb-12 md:pb-16 pt-24">
          <div className="mb-3">
            <span className="font-display font-900 text-5xl md:text-7xl text-[#A8C77D]/25 leading-none block">
              REACH
            </span>
          </div>
          <Eyebrow light className="mb-3">Community Health & Human Development</Eyebrow>
          <h1 className="page-heading text-[#F0F0E4] max-w-2xl mb-3">
            Healthier People. Stronger Communities. Brighter Futures.
          </h1>
          <p className="body-text text-[#F0F0E4]/75 max-w-lg mb-8">
            REACH — Reaching and Empowering All through Community Health and Human Development — is a community-focused initiative of De Future Audacious.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact">
              <Button variant="yellow" size="lg" className="group">
                Get Involved
                <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline-ivory" size="lg">Contact Us</Button>
            </Link>
          </div>
        </Container>
      </section>

      <section className="section-padding bg-[#F0F0E4]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h2 className="section-heading text-[#174D3A] mb-6">
                Together, We REACH Further.
              </h2>
              <p className="body-text text-[#174D3A]/70 mb-5">
                REACH focuses on community health and human development through initiatives that address wellbeing, social support and individual empowerment.
              </p>
              <p className="body-text text-[#174D3A]/70 mb-8">
                The initiative recognises the importance of healthier people, stronger community connections and access to opportunities in creating sustainable development.
              </p>
              <div className="space-y-3">
                {REACH_PILLARS.map((pillar) => (
                  <div key={pillar.number} className="flex items-center gap-4 py-3 border-b border-[#174D3A]/10">
                    <span className="font-display font-800 text-2xl text-[#174D3A]/20 w-10 flex-shrink-0">
                      {pillar.number}
                    </span>
                    <span className="font-display font-700 text-base text-[#174D3A] uppercase">
                      {pillar.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src={UNSPLASH_IMAGES.community}
                alt="Community members engaged together"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </Container>
      </section>

      <div>
        {REACH_PILLARS.map((pillar, index) => {
          const isEven = index % 2 === 0;
          return (
            <section
              key={pillar.number}
              className={`section-padding ${isEven ? "bg-[#174D3A]" : "bg-[#F0F0E4]"}`}
            >
              <Container>
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${isEven ? "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1" : ""}`}>
                  <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                    <Image
                      src={pillar.image}
                      alt={pillar.imageAlt}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>

                  <div>
                    <span className={`font-display font-800 text-6xl leading-none block mb-2 ${isEven ? "text-white/08" : "text-[#174D3A]/08"}`}>
                      {pillar.number}
                    </span>
                    <h2 className={`section-heading mb-2 ${isEven ? "text-[#F5D827]" : "text-[#174D3A]"}`}>
                      {pillar.title}
                    </h2>
                    <p className={`font-display font-700 text-xl uppercase mb-6 ${isEven ? "text-[#A8C77D]" : "text-[#174D3A]/50"}`}>
                      {pillar.subtitle}
                    </p>
                    <p className={`body-text mb-8 ${isEven ? "text-[#F0F0E4]/75" : "text-[#174D3A]/70"}`}>
                      {pillar.description}
                    </p>
                    <div>
                      <p className={`eyebrow mb-4 ${isEven ? "text-[#A8C77D]" : "text-[#174D3A]/50"}`}>
                        Focus Areas
                      </p>
                      <ul className="space-y-3">
                        {pillar.focusAreas.map((area, areaIndex) => (
                          <li key={area} className="flex items-center gap-4">
                            <span className={`font-display font-700 text-sm ${isEven ? "text-white/30" : "text-[#174D3A]/30"}`}>
                              {String(areaIndex + 1).padStart(2, "0")}
                            </span>
                            <span className={`font-body text-sm font-medium ${isEven ? "text-[#F0F0E4]/80" : "text-[#174D3A]/80"}`}>
                              {area}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Container>
            </section>
          );
        })}
      </div>

      <section className="section-padding bg-[#F5D827]">
        <Container>
          <div className="text-center mb-14">
            <h2 className="section-heading text-[#174D3A] mb-4">
              Creating Stronger Communities Together.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {REACH_IMPACT_ITEMS.map((item, index) => (
              <div key={item.title} className="bg-[#174D3A] rounded-lg p-8">
                <span className="font-display font-800 text-4xl text-[#F5D827]/20 leading-none block mb-4">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display font-700 text-lg text-[#F5D827] uppercase mb-3 leading-tight">
                  {item.title}
                </h3>
                <p className="font-body text-sm text-[#F0F0E4]/65 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CtaSection
        eyebrow="People | Purpose | Impact"
        heading="Together, We REACH Further."
        subheading="Be part of efforts to build healthier people, stronger communities and brighter futures."
        primaryCta={{ label: "Get Involved", href: "/contact" }}
        secondaryCta={{ label: "Contact De Future Audacious", href: "/contact" }}
        dark
        centered
      />
    </>
  );
}