import Link from "next/link";
import Image from "next/image";
import { NAV_ITEMS, CONTACT_INFO, SOCIAL_LINKS } from "@/constants";
import { Container } from "@/components/ui/container";

const structureLinks = [
  { label: "Internal Structure", href: "/our-work#internal" },
  { label: "Intermediary Structure", href: "/our-work#intermediary" },
  { label: "Impact / Community-Based", href: "/our-work#impact" },
];

export function Footer() {
  return (
    <footer className="bg-[#174D3A] text-[#F0F0E4]">
      <Container>
        <div className="pt-16 pb-10 md:pt-20 md:pb-14">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-[#F0F0E4]/10">
            <div className="lg:col-span-1">
              <Link
                href="/"
                className="relative block h-12 w-[160px] max-h-12 max-w-[160px] md:h-14 md:w-[190px] md:max-h-14 md:max-w-[190px] mb-4 transition-opacity duration-300 hover:opacity-90"
                aria-label="De Future Audacious — Home"
              >
                <Image
                  src="/De Future Audacious.svg"
                  alt="De Future Audacious"
                  fill
                  sizes="(max-width: 768px) 160px, 190px"
                  unoptimized
                  className="object-contain object-left"
                />
              </Link>
              <p className="eyebrow text-[#A8C77D] mb-4">
                People | Purpose | Impact
              </p>
              <p className="font-body text-sm text-[#F0F0E4]/70 leading-relaxed max-w-xs">
                Empowering people, strengthening communities and creating
                opportunities for a brighter tomorrow.
              </p>
            </div>

            <div>
              <h3 className="font-display font-700 text-sm uppercase tracking-widest text-[#A8C77D] mb-5">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {NAV_ITEMS.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="font-body text-sm text-[#F0F0E4]/70 hover:text-[#F0F0E4] transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-display font-700 text-sm uppercase tracking-widest text-[#A8C77D] mb-5">
                Our Structures
              </h3>
              <ul className="space-y-3">
                {structureLinks.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="font-body text-sm text-[#F0F0E4]/70 hover:text-[#F0F0E4] transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-display font-700 text-sm uppercase tracking-widest text-[#A8C77D] mb-5">
                Contact
              </h3>
              <ul className="space-y-3 mb-8">
                <li className="font-body text-sm text-[#F0F0E4]/70">
                  {CONTACT_INFO.email}
                </li>
                <li className="font-body text-sm text-[#F0F0E4]/70">
                  {CONTACT_INFO.phone}
                </li>
                <li className="font-body text-sm text-[#F0F0E4]/70">
                  {CONTACT_INFO.address}
                </li>
              </ul>
               {/* Social Links 
              <h3 className="font-display font-700 text-sm uppercase tracking-widest text-[#A8C77D] mb-4">
                Follow Us
              </h3>
             
              <div className="flex flex-wrap gap-4">
                {Object.entries(SOCIAL_LINKS).map(([platform, href]) => (
                  <a
                    key={platform}
                    href={href}
                    className="font-body text-xs text-[#F0F0E4]/60 hover:text-[#F0F0E4] transition-colors capitalize"
                    aria-label={`Follow DFA on ${platform}`}
                  >
                    {platform.charAt(0).toUpperCase() + platform.slice(1)}
                  </a>
                ))}
              </div>
              */}
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="font-body text-xs text-[#F0F0E4]/40">
              © 2026 De Future Audacious. All Rights Reserved.
            </p>
            <div className="flex gap-6">
              <span className="font-body text-xs text-[#F0F0E4]/40">
                Privacy Policy
              </span>
              <span className="font-body text-xs text-[#F0F0E4]/40">
                Terms of Use
              </span>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
