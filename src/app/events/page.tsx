import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, MapPin } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { PageHero } from "@/components/sections/page-hero";
import { EVENTS } from "@/data/events";
import { UNSPLASH_IMAGES } from "@/constants";

export const metadata: Metadata = {
  title: "Events | De Future Audacious",
  description: "Explore DFA events, conferences and gatherings focused on development, leadership and community impact.",
};

export default function EventsPage() {
  const featuredEvent = EVENTS[0];

  return (
    <>
      <PageHero
        eyebrow="Our Events"
        heading="Connecting People. Inspiring Growth. Creating Impact."
        subheading="At De Future Audacious, events provide opportunities for people to learn, connect, grow and engage with ideas that inspire positive change."
        image={UNSPLASH_IMAGES.conference}
        imageAlt="People at a conference or gathering"
      />

      {featuredEvent && (
        <section className="section-padding bg-[#F0F0E4]">
          <Container>
            <div className="mb-10">
              <Eyebrow className="mb-4">Featured Event</Eyebrow>
              <h2 className="section-heading text-[#174D3A]">The Growth Impact Conference</h2>
            </div>

            <article className="grid grid-cols-1 lg:grid-cols-5 overflow-hidden rounded-lg bg-[#174D3A]">
              <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[560px] lg:col-span-3">
                <Image
                  src={featuredEvent.image}
                  alt={featuredEvent.imageAlt}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#174D3A]/70 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#174D3A]/30" />
                <div className="absolute top-6 left-6">
                  <span className="font-body text-xs font-semibold uppercase tracking-widest bg-[#F5D827] text-[#174D3A] px-3 py-1.5 rounded-sm">
                    Details Coming Soon
                  </span>
                </div>
                <div className="absolute bottom-6 left-6 right-6 lg:hidden">
                  <span className="font-display font-900 text-6xl text-white/20">{featuredEvent.theme}</span>
                </div>
              </div>

              <div className="p-8 md:p-12 flex flex-col justify-center lg:col-span-2">
                <span className="font-display font-800 text-[#F5D827] text-sm uppercase tracking-widest mb-3 block">
                  {featuredEvent.theme}
                </span>
                <h3 className="font-display font-800 text-3xl md:text-4xl text-[#F0F0E4] uppercase mb-3 leading-tight">
                  {featuredEvent.title}
                </h3>
                <p className="font-display font-600 text-xl text-[#A8C77D] uppercase mb-6 leading-tight">
                  {featuredEvent.themeStatement}
                </p>
                <p className="font-body text-sm text-[#F0F0E4]/75 leading-relaxed mb-6">
                  {featuredEvent.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {featuredEvent.focusPoints.map((point) => (
                    <span key={point} className="font-body text-xs font-semibold text-[#174D3A] bg-[#A8C77D] px-3 py-1 rounded-sm uppercase tracking-wide">
                      {point}
                    </span>
                  ))}
                </div>

                <div className="space-y-2 mb-8 pb-8 border-b border-[#F0F0E4]/10">
                  <div className="flex items-center gap-2 text-[#F0F0E4]/50">
                    <CalendarDays size={14} />
                    <span className="font-body text-sm">{featuredEvent.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#F0F0E4]/50">
                    <MapPin size={14} />
                    <span className="font-body text-sm">{featuredEvent.venue}</span>
                  </div>
                </div>

                <Link href="/contact">
                  <Button variant="yellow" size="lg" className="group">
                    Register Interest
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </article>
          </Container>
        </section>
      )}

      <section className="section-padding bg-[#174D3A]">
        <Container>
          <div className="mb-12">
            <Eyebrow light className="mb-4">Events & Gatherings</Eyebrow>
            <h2 className="section-heading text-[#F0F0E4]">Upcoming Events</h2>
          </div>

          <div className="text-center py-16 border border-[#F0F0E4]/10 rounded-lg">
            <div className="max-w-md mx-auto">
              <div className="font-display font-800 text-6xl text-[#F5D827]/20 mb-4">?</div>
              <h3 className="font-display font-700 text-2xl text-[#F0F0E4] uppercase mb-4">
                More Events Coming Soon
              </h3>
              <p className="font-body text-sm text-[#F0F0E4]/65 mb-8 leading-relaxed">
                Details about upcoming De Future Audacious events will be announced here. Stay connected to be the first to know.
              </p>
              <Link href="/contact">
                <Button variant="outline-ivory" size="lg">
                  Stay Connected
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-padding bg-[#F0F0E4]">
        <Container>
          <div className="mb-12">
            <h2 className="section-heading text-[#174D3A]">Past Events</h2>
          </div>
          <div className="text-center py-16 border border-[#174D3A]/10 rounded-lg">
            <p className="font-body text-sm text-[#174D3A]/50">
              Past event records will appear here.
            </p>
          </div>
        </Container>
      </section>

      <section className="relative section-padding overflow-hidden">
        <Image
          src={UNSPLASH_IMAGES.community}
          alt="Community event gathering"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#174D3A]/88" />
        <Container className="relative z-10">
          <div className="max-w-2xl">
            <Eyebrow light className="mb-4">Join Us</Eyebrow>
            <h2 className="section-heading text-[#F0F0E4] mb-6">
              Be Part of Our Next Gathering.
            </h2>
            <p className="body-text text-[#F0F0E4]/75 mb-10 max-w-lg">
              Stay connected with De Future Audacious and take part in opportunities to learn, connect and grow.
            </p>
            <Link href="/contact">
              <Button variant="yellow" size="xl" className="group">
                Contact Us
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
