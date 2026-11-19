import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { ORG_STRUCTURES, REACH_PILLARS, GIC_PILLARS } from "@/data/arms";
import { UNSPLASH_IMAGES } from "@/constants";

export const metadata: Metadata = {
  title: "Our Work | De Future Audacious",
  description:
    "Explore DFA's nine organisational arms across its Internal, Intermediary and Impact structures.",
};

const intermediaryMedia = [
  {
    src: UNSPLASH_IMAGES.educators,
    alt: "Educators in a learning environment",
  },
  {
    src: UNSPLASH_IMAGES.research,
    alt: "Research and scholarly work",
  },
  {
    src: UNSPLASH_IMAGES.enterprise,
    alt: "Enterprise and community connection",
  },
];

export default function OurWorkPage() {
  const internal = ORG_STRUCTURES.find((s) => s.id === "internal")!;
  const intermediary = ORG_STRUCTURES.find((s) => s.id === "intermediary")!;
  const impact = ORG_STRUCTURES.find((s) => s.id === "impact")!;

  return (
    <>
      {/* Editorial Hero */}
      <section className="pt-24 sm:pt-28 md:pt-36 pb-10 md:pb-16 bg-[#174D3A]">
        <Container>
          <Eyebrow light className="mb-3 sm:mb-4">
            Our Work
          </Eyebrow>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-10 items-end">
            <div className="lg:col-span-8">
              <h1 className="font-display font-800 text-[28px] sm:text-5xl lg:text-6xl uppercase tracking-tight leading-[1.08] sm:leading-[1.03] text-[#F0F0E4]">
                Nine Arms. Three Structures.
                <span className="block text-[#A8C77D] mt-1 sm:mt-0">
                  One Shared Purpose.
                </span>
              </h1>
            </div>

            <div className="lg:col-span-4">
              <p className="font-body text-sm md:text-base text-[#F0F0E4]/75 leading-relaxed">
                De Future Audacious operates through nine organisational arms
                grouped across three major classifications. Each plays a
                distinct role in building people, advancing knowledge and
                strengthening communities.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Clickable 3-Structure Index Strip */}
      <section className="py-2 sm:py-4 md:py-6 bg-[#F0F0E4]">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 md:divide-x divide-y md:divide-y-0 divide-[#174D3A]/15">
            {ORG_STRUCTURES.map((structure) => (
              <a
                key={structure.id}
                href={`#${structure.id}`}
                className="py-4 md:py-5 md:px-6 first:md:pl-0 last:md:pr-0 flex items-start justify-between gap-4 group hover:bg-[#174D3A]/[0.03] transition-colors"
              >
                <div>
                  <span className="font-display font-800 text-xs tracking-widest uppercase text-[#174D3A]/45 block mb-1">
                    Structure {structure.classification}
                  </span>
                  <h2 className="font-display font-700 text-base sm:text-lg text-[#174D3A] uppercase leading-tight mb-1">
                    {structure.label}
                  </h2>
                  <p className="font-body text-xs text-[#174D3A]/60 leading-relaxed">
                    {structure.arms.map((a) => a.name).join(" · ")}
                  </p>
                </div>
                <ArrowRight
                  size={16}
                  className="text-[#174D3A]/40 group-hover:text-[#174D3A] group-hover:translate-x-1 transition-all flex-shrink-0 mt-1"
                />
              </a>
            ))}
          </div>
        </Container>
      </section>

      {/* Structure A: Internal Structure */}
      <section
        id="internal"
        className="py-16 md:py-20 bg-[#174D3A] scroll-mt-20"
      >
        <Container>
          {/* Top Header Split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end pb-10 border-b border-[#F0F0E4]/15">
            <div className="lg:col-span-7">
              <Eyebrow light className="mb-3">
                Structure A
              </Eyebrow>
              <h2 className="section-heading text-[#F5D827]">
                {internal.label}
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="body-text text-[#F0F0E4]/75">
                {internal.description}
              </p>
            </div>
          </div>

          {/* Governance Ledger Rows */}
          <div>
            {internal.arms.map((arm) => {
              const hasFocusAreas =
                arm.focusAreas && arm.focusAreas.length > 0;

              return (
                <article
                  key={arm.id}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-10 py-6 md:py-9 px-0 lg:px-4 lg:-mx-4 rounded-lg border-b border-[#F0F0E4]/15 hover:bg-[#F0F0E4]/[0.03] transition-colors items-start"
                >
                  {/* Arm Identity */}
                  <div className="lg:col-span-4 flex flex-col gap-1.5 lg:flex-row lg:items-start lg:gap-4">
                    <span className="font-display font-800 text-sm lg:text-4xl text-[#F5D827]/65 lg:text-[#F5D827]/35 leading-none flex-shrink-0">
                      {arm.number}
                    </span>
                    <div>
                      <h3 className="font-display font-700 text-xl md:text-2xl text-[#F0F0E4] uppercase leading-tight">
                        {arm.name}
                      </h3>
                      <div className="w-8 h-0.5 bg-[#A8C77D]/60 mt-2 lg:mt-3" />
                    </div>
                  </div>

                  {/* Arm Description */}
                  <div
                    className={
                      hasFocusAreas ? "lg:col-span-5" : "lg:col-span-8"
                    }
                  >
                    <p className="font-body text-sm md:text-base text-[#F0F0E4]/75 leading-relaxed">
                      {arm.description}
                    </p>
                  </div>

                  {/* Arm Focus Areas */}
                  {hasFocusAreas && (
                    <div className="lg:col-span-3">
                      <ul className="space-y-2 lg:border-l lg:border-[#F0F0E4]/15 lg:pl-6">
                        {arm.focusAreas!.map((area) => (
                          <li key={area} className="flex items-start gap-2.5">
                            <span className="size-1.5 rounded-full bg-[#A8C77D] mt-1.5 flex-shrink-0" />
                            <span className="font-body text-xs md:text-sm text-[#F0F0E4]/75 leading-snug">
                              {area}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Structure B: Intermediary Structure */}
      <section
        id="intermediary"
        className="py-16 md:py-24 bg-[#F0F0E4] scroll-mt-20"
      >
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end pb-10 border-b border-[#174D3A]/15 mb-12">
            <div className="lg:col-span-7">
              <Eyebrow className="mb-3">Structure B</Eyebrow>
              <h2 className="section-heading text-[#174D3A]">
                {intermediary.label}
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="body-text text-[#174D3A]/70">
                {intermediary.description}
              </p>
            </div>
          </div>

          <div className="space-y-12 md:space-y-16">
            {intermediary.arms.map((arm, index) => {
              const media = intermediaryMedia[index] ?? intermediaryMedia[0];
              const isReversed = index % 2 === 1;

              return (
                <article
                  key={arm.id}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pb-12 md:pb-16 border-b border-[#174D3A]/12 last:border-b-0 last:pb-0"
                >
                  <div
                    className={`lg:col-span-5 relative aspect-[16/10] rounded-xl overflow-hidden border border-[#174D3A]/10 ${
                      isReversed ? "lg:order-2" : ""
                    }`}
                  >
                    <Image
                      src={media.src}
                      alt={media.alt}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 42vw"
                    />
                  </div>

                  <div
                    className={`lg:col-span-7 ${
                      isReversed ? "lg:order-1" : ""
                    }`}
                  >
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="font-display font-800 text-2xl md:text-3xl text-[#174D3A]/25 leading-none">
                        {arm.number}
                      </span>
                      <h3 className="font-display font-800 text-2xl md:text-3xl text-[#174D3A] uppercase leading-tight">
                        {arm.name}
                      </h3>
                    </div>

                    <p className="body-text text-[#174D3A]/75 mb-6">
                      {arm.description}
                    </p>

                    {arm.focusAreas && arm.focusAreas.length > 0 && (
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 pt-5 border-t border-[#174D3A]/12">
                        {arm.focusAreas.map((area, i) => (
                          <li key={area} className="flex items-start gap-3">
                            <span className="font-display font-700 text-xs text-[#174D3A]/40 mt-0.5">
                              {String(i + 1).padStart(2, "0")}
                            </span>
                            <span className="font-body text-sm text-[#174D3A]/80">
                              {area}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Structure C: Impact / Community-Based Structure */}
      <section id="impact" className="scroll-mt-20">
        {/* Section Banner */}
        <div className="py-14 md:py-16 bg-[#A8C77D]">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
              <div className="lg:col-span-7">
                <Eyebrow className="mb-3">Structure C</Eyebrow>
                <h2 className="section-heading text-[#174D3A]">
                  {impact.label}
                </h2>
              </div>
              <div className="lg:col-span-5">
                <p className="body-text text-[#174D3A]/80">
                  {impact.description}
                </p>
              </div>
            </div>
          </Container>
        </div>

        {/* Arm 07: REACH */}
        <div className="py-16 md:py-20 bg-[#F0F0E4]">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-12">
              <div className="lg:col-span-5 relative aspect-[16/11] rounded-xl overflow-hidden border border-[#174D3A]/10">
                <Image
                  src={UNSPLASH_IMAGES.reach}
                  alt="REACH community health outreach"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
              </div>

              <div className="lg:col-span-7">
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-display font-800 text-2xl text-[#174D3A]/25 leading-none">
                    07
                  </span>
                  <span className="eyebrow text-[#174D3A]/55">SHIFT</span>
                </div>
                <h3 className="section-heading text-[#174D3A] mb-2">REACH</h3>
                <p className="font-display font-700 text-sm md:text-base text-[#174D3A]/55 uppercase mb-4 leading-snug">
                  Reaching and Empowering All through Community Health and Human
                  Development
                </p>
                <p className="body-text text-[#174D3A]/75 mb-6">
                  {impact.arms[0].description}
                </p>

                <div className="border-l-2 border-[#A8C77D] pl-4 py-0.5">
                  <p className="font-display font-700 text-sm md:text-base text-[#174D3A] uppercase tracking-wide">
                    Healthier People. Stronger Communities. Brighter Futures.
                  </p>
                </div>
              </div>
            </div>

            {/* REACH Focus Pillars: Compact Horizontal Ruled Rows (Title + Focus Points Only) */}
            <div className="pt-8">
              <p className="eyebrow text-[#174D3A]/55 mb-5">
                REACH: Three Focus Pillars
              </p>

              <div className="border-t border-[#174D3A]/15">
                {REACH_PILLARS.map((pillar) => (
                  <article
                    key={pillar.number}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-10 py-6 border-b border-[#174D3A]/15 items-start"
                  >
                    <div className="lg:col-span-5 flex flex-col gap-1 lg:flex-row lg:items-baseline lg:gap-4">
                      <span className="font-display font-800 text-sm lg:text-xl text-[#174D3A]/40 lg:text-[#174D3A]/25 leading-none flex-shrink-0">
                        {pillar.number}
                      </span>
                      <div>
                        <h4 className="font-display font-700 text-base sm:text-lg text-[#174D3A] uppercase leading-tight">
                          {pillar.title}
                        </h4>
                        <p className="font-display font-600 text-xs text-[#174D3A]/55 uppercase mt-1 tracking-wide">
                          {pillar.subtitle}
                        </p>
                      </div>
                    </div>

                    <ul className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                      {pillar.focusAreas.map((area) => (
                        <li key={area} className="flex items-center gap-2.5">
                          <span className="size-1.5 rounded-full bg-[#174D3A] flex-shrink-0" />
                          <span className="font-body text-sm text-[#174D3A]/80">
                            {area}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </div>
          </Container>
        </div>

        {/* Arm 08: GIC */}
        <div className="py-16 md:py-20 bg-[#174D3A]">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-12">
              <div className="lg:col-span-5 lg:order-2 relative aspect-[16/11] rounded-xl overflow-hidden border border-[#F0F0E4]/15">
                <Image
                  src={UNSPLASH_IMAGES.conference}
                  alt="GIC Growth Impact Conference"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
              </div>

              <div className="lg:col-span-7 lg:order-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-display font-800 text-2xl text-[#F0F0E4]/25 leading-none">
                    08
                  </span>
                  <span className="eyebrow text-[#A8C77D]">ELEVATE</span>
                </div>
                <h3 className="section-heading text-[#F5D827] mb-2">GIC</h3>
                <p className="font-display font-700 text-sm md:text-base text-[#A8C77D] uppercase mb-4 leading-snug">
                  Growth Impact Conference
                </p>
                <p className="body-text text-[#F0F0E4]/75 mb-6">
                  {impact.arms[1].description}
                </p>

                <div className="border-l-2 border-[#F5D827] pl-5 py-1">
                  <p className="font-display font-800 text-lg md:text-xl text-[#F5D827] uppercase leading-tight">
                    Higher Minds. Bolder Leaders. Brighter Communities.
                  </p>
                </div>
              </div>
            </div>

            {/* GIC Development Pillars: Asymmetric Sidebar + Top-Ruled Track Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pt-10 border-t border-[#F0F0E4]/15">
              <div className="lg:col-span-3">
                <Eyebrow light className="mb-2">
                  Three Pillars
                </Eyebrow>
                <h4 className="font-display font-700 text-xl text-[#F0F0E4] uppercase leading-tight">
                  GIC Development Tracks
                </h4>
              </div>

              <div className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-3 gap-8">
                {GIC_PILLARS.map((pillar) => (
                  <article
                    key={pillar.number}
                    className="border-t-2 border-[#F5D827]/70 pt-4"
                  >
                    <div className="flex items-baseline justify-between gap-2 mb-4">
                      <h5 className="font-display font-700 text-base text-[#F5D827] uppercase leading-tight">
                        {pillar.title}
                      </h5>
                      <span className="font-display font-800 text-sm text-[#F0F0E4]/30">
                        {pillar.number}
                      </span>
                    </div>

                    <ul className="space-y-2">
                      {pillar.focusAreas.map((area, i) => (
                        <li key={area} className="flex items-start gap-2.5">
                          <span className="font-display font-700 text-[11px] text-[#A8C77D]/70 mt-0.5">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span className="font-body text-xs md:text-sm text-[#F0F0E4]/80 leading-snug">
                            {area}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </div>
          </Container>
        </div>

        {/* Arm 09: RCG */}
        <div className="py-16 md:py-20 bg-[#F0F0E4]">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              <div className="lg:col-span-5 relative aspect-[16/11] rounded-xl overflow-hidden border border-[#174D3A]/10">
                <Image
                  src={UNSPLASH_IMAGES.community}
                  alt="RCG community outreach"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
              </div>

              <div className="lg:col-span-7">
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-display font-800 text-2xl text-[#174D3A]/25 leading-none">
                    09
                  </span>
                  <span className="eyebrow text-[#174D3A]/55">PROCLAIMERS</span>
                </div>
                <h3 className="section-heading text-[#174D3A] mb-2">RCG</h3>
                <p className="font-display font-700 text-sm md:text-base text-[#174D3A]/55 uppercase mb-4">
                  Revelation Cornerstone Globe
                </p>
                <p className="body-text text-[#174D3A]/75 mb-6">
                  {impact.arms[2].description}
                </p>

                {impact.arms[2].focusAreas && (
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 pt-5 border-t border-[#174D3A]/12">
                    {impact.arms[2].focusAreas.map((area, i) => (
                      <li key={area} className="flex items-start gap-3">
                        <span className="font-display font-700 text-xs text-[#174D3A]/40 mt-0.5">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="font-body text-sm text-[#174D3A]/80">
                          {area}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </Container>
        </div>
      </section>

      {/* Closing Collective Purpose */}
      <section className="py-16 md:py-20 bg-[#F5D827]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <Eyebrow className="mb-3">Shared Horizon</Eyebrow>
              <h2 className="section-heading text-[#174D3A] mb-4">
                Our Collective Purpose.
              </h2>
              <p className="body-text text-[#174D3A]/80 mb-8 max-w-xl">
                Across every arm and every structure, De Future Audacious is
                united by a common commitment to people, purpose and impact.
                Everything we do works towards the same horizon.
              </p>
              <Link href="/contact">
                <Button variant="primary" size="lg" className="group">
                  Connect With DFA
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Button>
              </Link>
            </div>

            <div className="lg:col-span-5 border-t border-[#174D3A]/20">
              {[
                "Healthier People.",
                "Stronger Communities.",
                "Brighter Futures.",
              ].map((phrase, idx) => (
                <div
                  key={phrase}
                  className="py-5 border-b border-[#174D3A]/20 flex items-center justify-between gap-4"
                >
                  <p className="font-display font-800 text-xl md:text-2xl text-[#174D3A] uppercase leading-tight">
                    {phrase}
                  </p>
                  <span className="font-display font-700 text-xs text-[#174D3A]/50">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}