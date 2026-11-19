"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";

const storyParagraphs = [
  "De Future Audacious began as a business enterprise built around a collective of friends who wanted to support one another financially.",
  "The original idea was straightforward: establish a group of people who could contribute their available funds and make those funds accessible to others who needed financial support to execute personal projects and initiatives, without the burden of bank interest.",
  "At its core, the initial concept was centred on collective support, shared resources and creating opportunities for people through mutual assistance.",
  "As the idea developed and conversations with different people continued, the organisation's vision began to expand. The realisation that making meaningful improvements in people's lives and communities required more than financial assistance led to a broader understanding of the organisation's purpose.",
  "What initially started as a business enterprise gradually evolved into a non-governmental organisation. Today, De Future Audacious operates as an NGO with nine organisational arms, organised into three major structures: Internal, Intermediary and Impact / Community-Based.",
  "These structures provide the framework through which the organisation coordinates its leadership, projects, enterprise activities, educational initiatives, research, community engagement and broader impact.",
];

export function OurStorySection() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-[#F0F0E4]">
      <Container>
        <Eyebrow className="mb-3">Our Story</Eyebrow>
        <div className="flex items-center gap-3 mb-6 md:mb-8">
          <h2 className="section-heading text-[#174D3A]">How We Began</h2>
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            className="size-7 md:size-8 text-[#174D3A] flex-shrink-0 mt-1"
          >
            <path
              d="M7 7L17 17M17 17H8M17 17V8"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div className="flow-root">
          {/* Floated Belief Card (Hidden on mobile, floated left on lg+) */}
          <div className="hidden lg:block bg-[#174D3A] rounded-xl p-8 lg:float-left lg:w-[41%] lg:mr-14 lg:mb-6">
            <div className="w-8 h-1 bg-[#F5D827] mb-4 rounded-full" />
            <p className="font-display font-800 text-xl text-[#F5D827] uppercase mb-3 leading-tight">
              Built on a Belief
            </p>
            <p className="font-body text-sm text-[#F0F0E4]/80 leading-relaxed">
              DFA is built around the belief that meaningful progress comes from
              people working together with purpose, developing their capacities,
              creating opportunities and contributing to stronger communities.
            </p>
          </div>

          {/* Flowing Narrative */}
          <div className="space-y-4 sm:space-y-5 body-text text-[#174D3A]/75">
            {storyParagraphs.map((paragraph, index) => {
              const isExtraOnMobile = index >= 3;

              return (
                <p
                  key={index}
                  className={
                    isExtraOnMobile && !expanded ? "hidden lg:block" : undefined
                  }
                >
                  {paragraph}
                </p>
              );
            })}
          </div>

          {/* Mobile Expand / Collapse Toggle */}
          <div className="mt-4 lg:hidden">
            <button
              type="button"
              onClick={() => setExpanded((prev) => !prev)}
              aria-expanded={expanded}
              className="inline-flex items-center gap-1.5 py-1.5 font-display font-700 text-xs uppercase tracking-wider text-[#174D3A]"
            >
              <span className="border-b border-[#174D3A]/35 pb-0.5">
                {expanded ? "Show Less" : "Read Full Story"}
              </span>
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${
                  expanded ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>

          <div className="mt-6 sm:mt-8">
            <Link href="/our-work">
              <Button variant="primary" size="lg" className="group">
                Explore Our Work
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
  );
}