import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, MapPin } from "lucide-react";
import type { Event } from "@/types";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface EventCardProps {
  event: Event;
  featured?: boolean;
}

export function EventCard({ event, featured = false }: EventCardProps) {
  if (featured) {
    return (
      <article className="grid grid-cols-1 lg:grid-cols-2 overflow-hidden rounded-lg bg-[#174D3A]">
        <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[480px]">
          <Image
            src={event.image}
            alt={event.imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#174D3A]/60 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#174D3A]/40" />
          <div className="absolute top-6 left-6">
            <span
              className={cn(
                "font-body text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-sm",
                event.status === "upcoming"
                  ? "bg-[#A8C77D] text-[#174D3A]"
                  : event.status === "past"
                  ? "bg-[#F0F0E4]/30 text-[#F0F0E4]"
                  : "bg-[#F5D827] text-[#174D3A]"
              )}
            >
              {event.status === "tba" ? "Details Coming Soon" : event.status}
            </span>
          </div>
        </div>

        <div className="p-8 md:p-12 flex flex-col justify-center">
          <div className="mb-2">
            <span className="font-display font-800 text-[#F5D827] text-sm uppercase tracking-widest">
              {event.theme}
            </span>
          </div>
          <h2 className="font-display font-800 text-3xl md:text-4xl text-[#F0F0E4] uppercase mb-3">
            {event.title}
          </h2>
          <p className="font-display font-600 text-xl text-[#A8C77D] uppercase mb-6">
            {event.themeStatement}
          </p>
          <p className="font-body text-sm text-[#F0F0E4]/75 leading-relaxed mb-6">
            {event.description}
          </p>

          <div className="flex flex-wrap gap-3 mb-6">
            {event.focusPoints.map((point) => (
              <span
                key={point}
                className="font-body text-xs font-medium text-[#174D3A] bg-[#A8C77D] px-3 py-1 rounded-sm"
              >
                {point}
              </span>
            ))}
          </div>

          <div className="space-y-2 mb-8">
            <div className="flex items-center gap-2 text-[#F0F0E4]/60">
              <CalendarDays size={14} />
              <span className="font-body text-sm">{event.date}</span>
            </div>
            <div className="flex items-center gap-2 text-[#F0F0E4]/60">
              <MapPin size={14} />
              <span className="font-body text-sm">{event.venue}</span>
            </div>
          </div>

          <div>
            <Link href="/contact">
              <Button variant="yellow" size="lg" className="group">
                Register Interest
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Button>
            </Link>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="bg-[#F0F0E4] border border-[#174D3A]/10 rounded-lg overflow-hidden group hover:shadow-lg transition-shadow duration-300">
      <div className="relative aspect-[16/9] overflow-hidden">
        <Image
          src={event.image}
          alt={event.imageAlt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className="p-6">
        <span className="font-body text-xs font-semibold uppercase tracking-widest text-[#174D3A]/50 mb-2 block">
          {event.theme}
        </span>
        <h3 className="card-heading text-[#174D3A] mb-2">{event.title}</h3>
        <p className="font-body text-sm text-[#174D3A]/70 mb-4">
          {event.themeStatement}
        </p>
        <div className="space-y-1 mb-4">
          <div className="flex items-center gap-2 text-[#174D3A]/50">
            <CalendarDays size={12} />
            <span className="font-body text-xs">{event.date}</span>
          </div>
        </div>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 font-body text-sm font-semibold text-[#174D3A] hover:gap-3 transition-all"
        >
          Register Interest
          <ArrowRight size={14} />
        </Link>
      </div>
    </article>
  );
}
