import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { ContactForm } from "@/components/sections/contact-form";
import { CONTACT_INFO, SOCIAL_LINKS, UNSPLASH_IMAGES } from "@/constants";

export const metadata: Metadata = {
  title: "Contact Us | De Future Audacious",
  description:
    "Get in touch with De Future Audacious. We would love to connect.",
};

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: CONTACT_INFO.email,
    href: `mailto:${CONTACT_INFO.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: CONTACT_INFO.phone,
    href: `tel:${String(CONTACT_INFO.phone).replace(/[^+\d]/g, "")}`,
  },
  {
    icon: MapPin,
    label: "Address",
    value: CONTACT_INFO.address,
    href: undefined,
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Editorial Split Hero */}
      <section className="pt-28 md:pt-36 pb-12 md:pb-16 bg-[#F0F0E4]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <Eyebrow className="mb-4">Let&apos;s Connect</Eyebrow>
              <h1 className="font-display font-800 text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight leading-[1.03] text-[#174D3A]">
                Let&apos;s Connect
                <span className="block text-[#174D3A]/45">
                  and Create Impact.
                </span>
              </h1>
              <p className="body-text text-[#174D3A]/70 mt-5 max-w-xl leading-relaxed">
                Whether you have a question about our work, want to learn more
                about our initiatives or are interested in getting involved, we
                would love to hear from you.
              </p>
            </div>

            <div className="lg:col-span-5 hidden lg:block">
              <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-[#174D3A]/10">
                <Image
                  src={UNSPLASH_IMAGES.getInvolved}
                  alt="People connecting and collaborating"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Contact Split (Card-Free, Divider-Ruled) */}
      <section className="py-14 md:py-20 bg-[#F0F0E4] border-t border-[#174D3A]/12">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Direct Details & Socials */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <Eyebrow className="mb-3">Direct Channels</Eyebrow>
              <h2 className="section-heading text-[#174D3A] mb-8">
                Get in Touch
              </h2>

              <div className="border-t border-[#174D3A]/15">
                {contactDetails.map(({ icon: Icon, label, value, href }) => {
                  const content = (
                    <div className="flex items-start justify-between gap-4 py-5 border-b border-[#174D3A]/15 group">
                      <div className="flex items-start gap-3.5 min-w-0">
                        <Icon
                          size={18}
                          className="text-[#174D3A]/60 group-hover:text-[#174D3A] mt-0.5 flex-shrink-0 transition-colors"
                        />
                        <div className="min-w-0">
                          <p className="eyebrow text-[#174D3A]/50 mb-1">
                            {label}
                          </p>
                          <p className="font-body text-sm md:text-base text-[#174D3A] font-medium break-words">
                            {value}
                          </p>
                        </div>
                      </div>

                      {href && (
                        <ArrowRight
                          size={16}
                          className="text-[#174D3A]/35 group-hover:text-[#174D3A] group-hover:translate-x-1 transition-all mt-1 flex-shrink-0"
                        />
                      )}
                    </div>
                  );

                  return href ? (
                    <a key={label} href={href} className="block">
                      {content}
                    </a>
                  ) : (
                    <div key={label}>{content}</div>
                  );
                })}
              </div>

              {/* Social Links 
              <div className="mt-10">
                <p className="eyebrow text-[#174D3A]/50 mb-4">Follow Us</p>
                <div className="flex flex-wrap gap-x-6 gap-y-3">
                  {Object.entries(SOCIAL_LINKS).map(([platform, href]) => (
                    <a
                      key={platform}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-body text-sm font-semibold text-[#174D3A] hover:text-[#174D3A]/70 transition-colors capitalize border-b border-[#174D3A]/30 hover:border-[#174D3A] pb-0.5 group"
                      aria-label={`Follow DFA on ${platform}`}
                    >
                      <span>{platform}</span>
                      <ArrowRight
                        size={13}
                        className="opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all"
                      />
                    </a>
                  ))}
                </div>
              </div>
*/}
            </div>

            {/* Right Column: Form */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-3">
                <h2 className="section-heading text-[#174D3A]">
                  Send Us a Message
                </h2>
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="size-6 md:size-7 text-[#174D3A] flex-shrink-0 mt-1"
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
              <p className="font-body text-sm text-[#174D3A]/65 mb-8">
                Tell us a little about your inquiry or how you would like to
                collaborate, and our team will respond shortly.
              </p>

              <ContactForm />
            </div>
          </div>
        </Container>
      </section>

      {/* Full-Width Closing Editorial Band (Replaces Sidebar Card) */}
      <section className="py-14 md:py-16 bg-[#174D3A]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
            <div className="lg:col-span-6">
              <Eyebrow light className="mb-3">
                Collaborate With Us
              </Eyebrow>
              <h2 className="font-display font-800 text-2xl sm:text-3xl md:text-4xl text-[#F5D827] uppercase leading-tight">
                Be Part of Something Meaningful.
              </h2>
            </div>

            <div className="lg:col-span-6">
              <p className="font-body text-sm md:text-base text-[#F0F0E4]/80 leading-relaxed mb-5">
                We welcome opportunities to connect with individuals and
                organisations who share an interest in people development,
                community wellbeing and positive social impact.
              </p>
              <Link
                href="/our-work"
                className="inline-flex items-center gap-2 font-display font-700 text-sm uppercase tracking-wide text-[#A8C77D] hover:text-[#F5D827] transition-colors group"
              >
                Explore Our Work
                <ArrowRight
                  size={15}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
