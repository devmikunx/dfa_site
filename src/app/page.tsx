import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { UNSPLASH_IMAGES } from "@/constants";

const impactItems = [
  {
    title: "Enhanced Skills & Knowledge",
    description: "Equipping individuals with relevant skills and knowledge.",
  },
  {
    title: "Transformed Mindsets",
    description:
      "Encouraging personal growth, confidence and purposeful living.",
  },
  {
    title: "Meaningful Mentorship",
    description:
      "Connecting individuals with guidance and opportunities for development.",
  },
  {
    title: "Greater Opportunities",
    description:
      "Supporting access to skills, growth and development opportunities.",
  },
  {
    title: "Stronger Communities",
    description:
      "Encouraging community participation, support and positive change.",
  },
  {
    title: "Lasting Impact",
    description:
      "Contributing to sustainable development and a brighter future.",
  },
];

const orgStructures = [
  {
    id: "internal",
    label: "Internal Structure",
    classification: "A",
    arms: ["De 4 Pillars", "Patrons and Matrons", "De Managers"],
    description: "Internal leadership, governance and management.",
    accentText: "text-[#F5D827]",
    accentBar: "bg-[#F5D827]",
  },
  {
    id: "intermediary",
    label: "Intermediary Structure",
    classification: "B",
    arms: ["De Educationists", "De Scientias", "De Ambassadors"],
    description: "Education, research and enterprise.",
    accentText: "text-[#A8C77D]",
    accentBar: "bg-[#A8C77D]",
  },
  {
    id: "impact",
    label: "Impact / Community-Based",
    classification: "C",
    arms: ["REACH", "GIC", "RCG"],
    description: "Community health, development and outreach.",
    accentText: "text-[#F0F0E4]",
    accentBar: "bg-[#F0F0E4]",
  },
];

const impactHighlights = [
  {
    number: "07",
    tag: "SHIFT",
    title: "REACH",
    subtitle: "Community Health & Human Development",
    description:
      "Our community awareness, health outreach, welfarism and skills development arm, working towards healthier people and stronger communities.",
    image: UNSPLASH_IMAGES.reach,
    imageAlt: "REACH community health outreach initiative",
  },
  {
    number: "08",
    tag: "ELEVATE",
    title: "GIC",
    subtitle: "Growth Impact Conference",
    description:
      "DFA's self-discovery and leadership institute, equipping individuals with holistic mindsets to thrive, lead and create lasting change.",
    image: UNSPLASH_IMAGES.conference,
    imageAlt: "GIC Growth Impact Conference",
  },
  {
    number: "09",
    tag: "PROCLAIMERS",
    title: "RCG",
    subtitle: "Revelation Cornerstone Globe",
    description:
      "Our outreach and purpose-driven community engagement arm, inspiring hope, values and positive transformation across communities.",
    image: UNSPLASH_IMAGES.community,
    imageAlt: "RCG community outreach engagement",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Full-Screen Hero */}
      <section className="relative min-h-[100svh] lg:min-h-screen flex items-end overflow-hidden">
        <Image
          src={UNSPLASH_IMAGES.hero}
          alt="Community members gathered together"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#174D3A] via-[#174D3A]/60 to-[#174D3A]/15" />
        <Container className="relative z-10 pb-14 md:pb-20 pt-28">
          <Eyebrow light className="mb-4">
            People | Purpose | Impact
          </Eyebrow>
          <h1 className="hero-heading text-[#F0F0E4] max-w-3xl mb-4">
            Empowering People.{" "}
            <span className="text-[#A8C77D]">Strengthening</span> Communities.
          </h1>
          <p className="font-body text-sm md:text-base text-[#F0F0E4]/85 max-w-lg mb-8 leading-relaxed">
            De Future Audacious is an NGO committed to developing people,
            creating opportunities and strengthening communities through nine
            organisational arms and three major structures.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/our-work">
              <Button variant="yellow" size="lg" className="group">
                Explore Our Work
                <ArrowRight
                  size={15}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline-ivory" size="lg">
                Get Involved
              </Button>
            </Link>
          </div>
        </Container>
      </section>

      {/* Organisation Introduction */}
      <section className="py-16 md:py-24 bg-[#F0F0E4]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-6">
              <Eyebrow className="mb-3">About De Future Audacious</Eyebrow>
              <h2 className="section-heading text-[#174D3A] mb-6">
                From Collective to NGO.
              </h2>
              <div className="space-y-4 body-text text-[#174D3A]/75 mb-8">
                <p>
                  De Future Audacious began as a collective business enterprise,
                  a group of friends pooling resources to support one
                  another&apos;s projects without bank interest. As
                  conversations deepened and the vision expanded, the
                  organisation grew into something larger.
                </p>
                <p>
                  Today, DFA operates as a non-governmental organisation with
                  nine arms across three major structures, working towards
                  people development, community empowerment and lasting impact.
                </p>
                <p>
                  DFA is built around the belief that meaningful progress comes
                  from people working together with purpose, developing their
                  capacities, creating opportunities and contributing to
                  stronger communities.
                </p>
              </div>
              <Link href="/about">
                <Button variant="primary" size="lg" className="group">
                  Read Our Story
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Button>
              </Link>
            </div>

            <div className="lg:col-span-6 space-y-5">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-[#174D3A]/10">
                <Image
                  src={UNSPLASH_IMAGES.intro}
                  alt="Community members engaged in development activities"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="border-l-2 border-[#174D3A] pl-4 py-1 flex items-center justify-between gap-4">
                <p className="font-display font-800 text-[#174D3A] text-base md:text-lg uppercase leading-tight">
                  A Brighter Tomorrow Together
                </p>
                <span className="font-display font-700 text-xs uppercase tracking-widest text-[#174D3A]/45 flex-shrink-0">
                  Since Day One
                </span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Three Structures Overview */}
      <section className="py-14 md:py-20 bg-[#174D3A]">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 md:pb-8">
            <div className="max-w-xl">
              <Eyebrow light className="mb-3">
                Our Organisation
              </Eyebrow>
              <h2 className="section-heading text-[#F0F0E4] mb-3">
                Nine Arms. Three Structures.
              </h2>
              <p className="font-body text-sm md:text-base text-[#F0F0E4]/70 leading-relaxed">
                DFA&apos;s work is organised across three major classifications,
                each containing three arms with distinct responsibilities that
                together form the full organisational ecosystem.
              </p>
            </div>

            <Link
              href="/our-work"
              className="hidden md:block flex-shrink-0"
            >
              <Button variant="outline-ivory" size="md" className="group">
                Explore All Nine Arms
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#F0F0E4]/15 border-y border-[#F0F0E4]/15">
            {orgStructures.map((structure, structureIdx) => (
              <Link
                key={structure.id}
                href={`/our-work#${structure.id}`}
                className="py-5 md:py-8 md:px-6 lg:px-8 first:md:pl-0 last:md:pr-0 flex flex-col justify-between group hover:bg-[#F0F0E4]/[0.03] transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-2 md:mb-4">
                    <span
                      className={`font-display font-800 text-xs tracking-widest uppercase ${structure.accentText}`}
                    >
                      Structure {structure.classification}
                    </span>
                    <div
                      className={`hidden md:block h-0.5 w-8 ${structure.accentBar} opacity-60 group-hover:w-12 group-hover:opacity-100 transition-all duration-300`}
                    />
                    <span className="md:hidden inline-flex items-center gap-1 font-display font-700 text-[11px] uppercase tracking-wider text-[#F0F0E4]/75">
                      Explore
                      <ArrowRight size={13} className="text-[#F5D827]" />
                    </span>
                  </div>

                  <h3 className="font-display font-700 text-lg md:text-xl text-[#F0F0E4] uppercase leading-tight mb-1 md:mb-2">
                    {structure.label}
                  </h3>
                  <p className="font-body text-xs sm:text-sm text-[#F0F0E4]/65 mb-3.5 md:mb-6">
                    {structure.description}
                  </p>

                  <ul className="flex flex-wrap items-baseline gap-x-2 gap-y-1 md:block md:space-y-2.5">
                    {structure.arms.map((armName, armIdx) => {
                      const armNumber = String(
                        structureIdx * 3 + armIdx + 1
                      ).padStart(2, "0");

                      return (
                        <li
                          key={armName}
                          className="inline-flex md:flex items-baseline gap-1.5 md:gap-3 font-body text-xs sm:text-sm text-[#F0F0E4]/85"
                        >
                          <span className="font-display font-700 text-[11px] md:text-xs text-[#F5D827]/65 md:text-[#F5D827]/60">
                            {armNumber}
                          </span>
                          <span>{armName}</span>
                          {armIdx < structure.arms.length - 1 && (
                            <span
                              aria-hidden="true"
                              className="text-[#F0F0E4]/30 pl-0.5 md:hidden"
                            >
                              /
                            </span>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <div className="hidden md:flex mt-7 pt-4 border-t border-[#F0F0E4]/10 items-center justify-between">
                  <span className="font-display font-700 text-xs uppercase tracking-wider text-[#F0F0E4]/60 group-hover:text-[#F5D827] transition-colors">
                    Explore Structure {structure.classification}
                  </span>
                  <ArrowRight
                    size={15}
                    className="text-[#F0F0E4]/45 group-hover:text-[#F5D827] group-hover:translate-x-1 transition-all"
                  />
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-6 md:hidden">
            <Link href="/our-work" className="block">
              <Button
                variant="outline-ivory"
                size="lg"
                className="w-full justify-center group"
              >
                Explore All Nine Arms
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Button>
            </Link>
          </div>
        </Container>
      </section>

      {/* Community & Impact Arms (All Three Introduced Concisely) */}
      <section className="py-16 md:py-24 bg-[#F0F0E4]">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 md:pb-10 border-b border-[#174D3A]/15 mb-8 md:mb-12">
            <div className="max-w-xl">
              <Eyebrow className="mb-3">
                Impact Structure · Arms 07 to 09
              </Eyebrow>
              <h2 className="section-heading text-[#174D3A] mb-3">
                Where Purpose Meets Action.
              </h2>
              <p className="font-body text-sm md:text-base text-[#174D3A]/70 leading-relaxed">
                Our Impact and Community-Based structure connects directly with
                people and communities through three active arms.
              </p>
            </div>

            <Link
              href="/our-work#impact"
              className="hidden md:block flex-shrink-0"
            >
              <Button variant="primary" size="md" className="group">
                Explore Impact Arms
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Button>
            </Link>
          </div>

          <div className="flex md:grid md:grid-cols-3 gap-5 md:gap-8 lg:gap-10 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-2 md:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {impactHighlights.map((arm) => (
              <article
                key={arm.number}
                className="w-[82%] sm:w-[68%] md:w-auto flex-shrink-0 snap-start group flex flex-col"
              >
                <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-[#174D3A]/10 mb-5">
                  <Image
                    src={arm.image}
                    alt={arm.imageAlt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 82vw, 33vw"
                  />
                </div>

                <div className="flex items-center justify-between gap-2 pb-3 mb-3 border-b border-[#174D3A]/15">
                  <span className="font-display font-800 text-xs tracking-widest uppercase text-[#174D3A]/50">
                    {arm.number} · {arm.tag}
                  </span>
                  <span className="w-6 h-0.5 bg-[#A8C77D]" />
                </div>

                <h3 className="font-display font-800 text-xl md:text-2xl text-[#174D3A] uppercase leading-tight mb-1">
                  {arm.title}
                </h3>
                <p className="font-display font-700 text-xs text-[#174D3A]/55 uppercase tracking-wide mb-3">
                  {arm.subtitle}
                </p>
                <p className="font-body text-sm text-[#174D3A]/75 leading-relaxed">
                  {arm.description}
                </p>
              </article>
            ))}
          </div>

          <p className="mt-3 text-right font-display font-700 text-[11px] uppercase tracking-widest text-[#174D3A]/45 md:hidden">
            Swipe to explore →
          </p>

          <div className="mt-6 md:hidden">
            <Link href="/our-work#impact" className="block">
              <Button
                variant="primary"
                size="lg"
                className="w-full justify-center group"
              >
                Explore Impact Arms
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Button>
            </Link>
          </div>
        </Container>
      </section>

      {/* Impact Grid (No Hover Background Fill) */}
      <section className="py-14 sm:py-16 md:py-24 bg-[#F0F0E4] border-t border-[#174D3A]/10">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mb-8 sm:mb-10">
            <div className="lg:col-span-7">
              <Eyebrow className="mb-3">The Change We Seek</Eyebrow>
              <h2 className="section-heading text-[#174D3A]">
                Creating Impact That Matters.
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="font-body text-sm md:text-base text-[#174D3A]/70 leading-relaxed">
                Every arm and initiative works together towards measurable,
                human-centred outcomes across individuals and communities.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 divide-y divide-[#174D3A]/12 sm:divide-y-0 sm:rounded-xl sm:overflow-hidden sm:border sm:border-[#174D3A]/12 sm:gap-px sm:bg-[#174D3A]/12">
            {impactItems.map((item, index) => (
              <div
                key={item.title}
                className="bg-[#F0F0E4] py-4 px-0 max-sm:first:pt-0 max-sm:last:pb-0 sm:p-8 md:p-9 flex sm:block items-start gap-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5 sm:gap-3 flex-shrink-0 pt-0.5 sm:pt-0 sm:mb-5">
                  <span className="font-display font-800 text-xl sm:text-2xl text-[#174D3A]/20 leading-none">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="w-5 sm:w-6 h-0.5 bg-[#A8C77D]" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-display font-700 text-base sm:text-lg text-[#174D3A] uppercase mb-1 sm:mb-2.5 leading-tight">
                    {item.title}
                  </h3>
                  <p className="font-body text-xs sm:text-sm text-[#174D3A]/70 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Get Involved CTA */}
      <section className="relative py-20 md:py-24 overflow-hidden">
        <Image
          src={UNSPLASH_IMAGES.getInvolved}
          alt="People coming together in community"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#174D3A]/85" />
        <Container className="relative z-10">
          <div className="max-w-2xl">
            <Eyebrow light className="mb-4">
              Be Part of the Movement
            </Eyebrow>
            <h2 className="section-heading text-[#F0F0E4] mb-5">
              Together, We Can Create a Brighter Tomorrow.
            </h2>
            <p className="body-text text-[#F0F0E4]/80 mb-8 max-w-lg">
              People, purpose and collective action create meaningful change.
              Connect with De Future Audacious and become part of efforts that
              empower individuals and strengthen communities.
            </p>
            <div className="flex flex-nowrap items-center gap-2.5 sm:gap-3">
              <Link href="/contact" className="min-w-0">
                <Button
                  variant="yellow"
                  size="xl"
                  className="group whitespace-nowrap max-sm:px-5 max-sm:py-3 max-sm:text-xs"
                >
                  Get Involved
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Button>
              </Link>
              <Link href="/about" className="min-w-0">
                <Button
                  variant="outline-ivory"
                  size="xl"
                  className="whitespace-nowrap max-sm:px-5 max-sm:py-3 max-sm:text-xs"
                >
                  About DFA
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Closing Bar */}
      <section className="bg-[#F5D827] py-12 md:py-16">
        <Container>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h2 className="font-display font-800 text-2xl md:text-4xl text-[#174D3A] uppercase leading-tight">
                People. Purpose. Impact.
              </h2>
              <p className="font-body text-sm text-[#174D3A]/75 mt-2 max-w-lg">
                A brighter tomorrow is possible when people come together to
                create opportunities, inspire change and build stronger
                communities.
              </p>
            </div>
            <div className="flex-shrink-0">
              <Link href="/contact">
                <Button variant="primary" size="xl" className="group">
                  Connect With DFA
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}