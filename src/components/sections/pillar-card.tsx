import Image from "next/image";
import type { Pillar } from "@/types";
import { cn } from "@/lib/utils";

interface PillarCardProps {
  pillar: Pillar;
  reversed?: boolean;
  compact?: boolean;
}

export function PillarCard({ pillar, reversed = false, compact = false }: PillarCardProps) {
  return (
    <article
      className={cn(
        "grid grid-cols-1 gap-0",
        compact ? "lg:grid-cols-2" : "lg:grid-cols-5",
        reversed && "lg:direction-rtl"
      )}
    >
      <div
        className={cn(
          "relative overflow-hidden",
          compact ? "aspect-[4/3]" : "aspect-[4/3] lg:aspect-auto lg:col-span-3",
          reversed ? "lg:order-2" : "lg:order-1"
        )}
        style={compact ? undefined : { minHeight: "420px" }}
      >
        <Image
          src={pillar.image}
          alt={pillar.imageAlt}
          fill
          className="object-cover transition-transform duration-700 hover:scale-105"
          sizes="(max-width: 1024px) 100vw, 60vw"
        />
        <div className="absolute top-6 left-6">
          <span className="font-display font-800 text-6xl text-white/20 leading-none">
            {pillar.number}
          </span>
        </div>
      </div>

      <div
        className={cn(
          "bg-[#174D3A] p-8 md:p-10 lg:p-12 flex flex-col justify-center",
          compact ? "" : "lg:col-span-2",
          reversed ? "lg:order-1" : "lg:order-2"
        )}
      >
        <span className="font-display font-800 text-5xl text-[#F0F0E4]/10 leading-none mb-4 block">
          {pillar.number}
        </span>
        <h3 className="card-heading text-[#F5D827] mb-2 uppercase">
          {pillar.title}
        </h3>
        <p className="font-display font-700 text-xl text-[#F0F0E4] mb-4 uppercase">
          {pillar.subtitle}
        </p>
        <p className="font-body text-sm text-[#F0F0E4]/75 leading-relaxed mb-6">
          {pillar.description}
        </p>
        <ul className="space-y-2">
          {pillar.focusAreas.map((area) => (
            <li key={area} className="flex items-center gap-3">
              <span className="size-1.5 rounded-full bg-[#A8C77D] flex-shrink-0" />
              <span className="font-body text-sm text-[#F0F0E4]/80">{area}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
