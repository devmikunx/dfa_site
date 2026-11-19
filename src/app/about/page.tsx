import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { OurStorySection } from "@/components/sections/our-story-section";
import { CtaSection } from "@/components/sections/cta-section";
import { UNSPLASH_IMAGES } from "@/constants";

export const metadata: Metadata = {
  title: "About Us | De Future Audacious",
  description:
    "Learn how De Future Audacious evolved from a collective business enterprise into an NGO committed to people development, community empowerment and lasting impact.",
};

const structureSummaries = [
  {
    code: "A",
    label: "Internal Structure",
    arms: ["De 4 Pillars", "Patrons and Matrons", "De Managers"],
    href: "/our-work#internal",
  },
  {
    code: "B",
    label: "Intermediary Structure",
    arms: ["De Educationists", "De Scientias", "De Ambassadors"],
    href: "/our-work#intermediary",
  },
  {
    code: "C",
    label: "Impact / Community-Based",
    arms: ["REACH", "GIC", "RCG"],
    href: "/our-work#impact",
  },
];

const identityPillars = [
  {
    label: "People",
    description:
      "People are central to everything we do. We focus on empowering individuals, supporting development and strengthening communities.",
  },
  {
    label: "Purpose",
    description:
      "We believe development should be intentional, meaningful and directed towards positive change.",
  },
  {
    label: "Impact",
    description:
      "We seek to contribute to outcomes that improve lives, create opportunities and support stronger communities.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Photo-Backed Editorial Hero */}
      <section className="relative pt-28 sm:pt-32 md:pt-40 pb-12 sm:pb-16 md:pb-20 bg-[#174D3A] overflow-hidden">
        <Image
          src={UNSPLASH_IMAGES.aboutHero}
          alt="People working together in a collaborative setting"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#174D3A] via-[#174D3A]/85 to-[#174D3A]/60" />

        <Container className="relative z-10">
          <Eyebrow light className="mb-3 sm:mb-4">
            About De Future Audacious
          </Eyebrow>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-10 items-end">
            <div className="lg:col-span-8">
              <h1 className="font-display font-800 text-[28px] sm:text-5xl lg:text-6xl uppercase tracking-tight leading-[1.08] sm:leading-[1.03] text-[#F0F0E4]">
                Driven by People.
                <span className="block text-[#A8C77D] mt-1 sm:mt-0">
                  Guided by Purpose. Focused on Impact.
                </span>
              </h1>
            </div>

            <div className="lg:col-span-4">
              <p className="font-body text-sm md:text-base text-[#F0F0E4]/80 leading-relaxed">
                De Future Audacious is an organisation committed to developing
                people, creating opportunities and contributing to stronger,
                more vibrant communities.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Our Story */}
      <OurStorySection />

      {/* Three Structures Overview */}
      <section className="py-12 sm:py-14 md:py-16 bg-[#F0F0E4] border-t border-[#174D3A]/10">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 md:pb-8 border-b border-[#174D3A]/15">
            <div className="max-w-xl">
              <Eyebrow className="mb-2">Our Organisation</Eyebrow>
              <h2 className="section-heading text-[#174D3A] mb-3">
                Nine Arms. Three Structures.
              </h2>
              <p className="font-body text-sm md:text-base text-[#174D3A]/70 leading-relaxed">
                Each structure serves a distinct purpose, from internal
                governance and knowledge production to direct community impact.
              </p>
            </div>

            <Link
              href="/our-work"
              className="hidden md:block flex-shrink-0"
            >
              <Button variant="primary" size="md" className="group">
                View All Nine Arms
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#174D3A]/15 border-b border-[#174D3A]/15">
            {structureSummaries.map((item, structureIdx) => (
              <Link
                key={item.code}
                href={item.href}
                className="py-5 md:py-8 md:px-6 lg:px-8 first:md:pl-0 last:md:pr-0 flex flex-col justify-between group hover:bg-[#174D3A]/[0.03] transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-2 md:mb-4">
                    <span className="font-display font-800 text-xs tracking-widest uppercase text-[#174D3A]/50">
                      Structure {item.code}
                    </span>
                    <div className="hidden md:block h-0.5 w-8 bg-[#A8C77D] group-hover:w-12 group-hover:bg-[#174D3A] transition-all duration-300" />
                    <span className="md:hidden inline-flex items-center gap-1 font-display font-700 text-[11px] uppercase tracking-wider text-[#174D3A]/70">
                      Explore
                      <ArrowRight size={13} className="text-[#174D3A]" />
                    </span>
                  </div>

                  <h3 className="font-display font-800 text-lg lg:text-xl text-[#174D3A] uppercase leading-tight mb-3 md:mb-5">
                    {item.label}
                  </h3>

                  <ul className="flex flex-wrap items-baseline gap-x-2 gap-y-1 md:block md:space-y-2.5">
                    {item.arms.map((armName, armIdx) => {
                      const armNumber = String(
                        structureIdx * 3 + armIdx + 1
                      ).padStart(2, "0");

                      return (
                        <li
                          key={armName}
                          className="inline-flex md:flex items-baseline gap-1.5 md:gap-3 font-body text-xs sm:text-sm text-[#174D3A]/80"
                        >
                          <span className="font-display font-700 text-[11px] md:text-xs text-[#174D3A]/45 md:text-[#174D3A]/40">
                            {armNumber}
                          </span>
                          <span>{armName}</span>
                          {armIdx < item.arms.length - 1 && (
                            <span
                              aria-hidden="true"
                              className="text-[#174D3A]/30 pl-0.5 md:hidden"
                            >
                              /
                            </span>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <div className="hidden md:flex mt-6 pt-4 border-t border-[#174D3A]/10 items-center justify-between">
                  <span className="font-display font-700 text-xs uppercase tracking-wider text-[#174D3A]/60 group-hover:text-[#174D3A] transition-colors">
                    Explore Structure {item.code}
                  </span>
                  <ArrowRight
                    size={15}
                    className="text-[#174D3A]/45 group-hover:text-[#174D3A] group-hover:translate-x-1 transition-all"
                  />
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-6 md:hidden">
            <Link href="/our-work" className="block">
              <Button
                variant="primary"
                size="lg"
                className="w-full justify-center group"
              >
                View All Nine Arms
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Button>
            </Link>
          </div>
        </Container>
      </section>

      {/* Mission and Vision */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#F0F0E4] border-t border-[#174D3A]/10">
        <Container>
          <div className="mb-6 sm:mb-10">
            <Eyebrow className="mb-3">Our Mission and Vision</Eyebrow>
            <h2 className="section-heading text-[#174D3A]">What Guides Us.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="border border-[#174D3A]/15 rounded-xl p-6 sm:p-8 md:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4 sm:mb-5">
                  <span className="eyebrow text-[#174D3A]/50">Mission</span>
                  <span className="w-8 h-1 bg-[#174D3A]/20 rounded-full" />
                </div>
                <h3 className="font-display font-700 text-xl sm:text-2xl text-[#174D3A] uppercase mb-2.5 sm:mb-3">
                  Our Mission
                </h3>
                <p className="font-body text-sm md:text-base text-[#174D3A]/75 leading-relaxed">
                  To empower individuals and strengthen communities through
                  education, research, mentorship, leadership development,
                  community health, welfare support and sustainable development
                  initiatives.
                </p>
              </div>
            </div>

            <div className="bg-[#174D3A] rounded-xl p-6 sm:p-8 md:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4 sm:mb-5">
                  <span className="eyebrow text-[#A8C77D]">Vision</span>
                  <span className="w-8 h-1 bg-[#F5D827] rounded-full" />
                </div>
                <h3 className="font-display font-700 text-xl sm:text-2xl text-[#F5D827] uppercase mb-2.5 sm:mb-3">
                  Our Vision
                </h3>
                <p className="font-body text-sm md:text-base text-[#F0F0E4]/80 leading-relaxed">
                  To build a future of healthier people, stronger communities
                  and brighter opportunities, where individuals are empowered to
                  thrive and contribute meaningfully to society.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Guiding Identity (Borderless Numbered Rows on Mobile) */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#F0F0E4] border-t border-[#174D3A]/10">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-end mb-8 md:mb-10">
            <div className="lg:col-span-7">
              <Eyebrow className="mb-3">Guiding Identity</Eyebrow>
              <h2 className="section-heading text-[#174D3A]">
                People | Purpose | Impact
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="font-body text-sm md:text-base text-[#174D3A]/70 leading-relaxed">
                These are not just words. They are the values that shape every
                arm, every initiative and every interaction at De Future
                Audacious.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 divide-y divide-[#174D3A]/12 md:divide-y-0 md:rounded-xl md:overflow-hidden md:border md:border-[#174D3A]/12 md:gap-px md:bg-[#174D3A]/12">
            {identityPillars.map((pillar, index) => (
              <div
                key={pillar.label}
                className="bg-[#F0F0E4] py-4 px-0 max-md:first:pt-0 max-md:last:pb-0 md:p-9 flex md:block items-start gap-4"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1.5 md:gap-3 flex-shrink-0 pt-0.5 md:pt-0 md:mb-5">
                  <span className="font-display font-800 text-xl md:text-2xl text-[#174D3A]/20 leading-none">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="w-5 md:w-6 h-0.5 bg-[#A8C77D]" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-display font-800 text-lg md:text-2xl text-[#174D3A] uppercase mb-1 md:mb-2.5 leading-tight">
                    {pillar.label}
                  </h3>
                  <p className="font-body text-xs sm:text-sm text-[#174D3A]/70 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 md:mt-10 pt-6 md:pt-8 border-t border-[#174D3A]/15 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[#174D3A]/15 text-center">
            {[
              "Healthier People.",
              "Stronger Communities.",
              "Brighter Futures.",
            ].map((phrase) => (
              <div key={phrase} className="py-3 sm:py-1 sm:px-4">
                <p className="font-display font-800 text-lg md:text-xl text-[#174D3A] uppercase tracking-wide leading-tight">
                  {phrase}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CtaSection
        heading="A Brighter Tomorrow Together."
        subheading="Discover our work, connect with our initiatives and become part of the journey towards empowered people and stronger communities."
        primaryCta={{ label: "Explore Our Work", href: "/our-work" }}
        secondaryCta={{ label: "Get Involved", href: "/contact" }}
        dark
      />
    </>
  );
}