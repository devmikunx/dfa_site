"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_ITEMS } from "@/constants";
import { Button } from "@/components/ui/button";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openMenuPathname, setOpenMenuPathname] = useState<string | null>(null);
  const pathname = usePathname();

  const isMobileMenuOpen = openMenuPathname === pathname;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const isHomePage = pathname === "/";
  const isTransparent = isHomePage && !isScrolled && !isMobileMenuOpen;

  const isRouteActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isTransparent
            ? "bg-transparent"
            : "bg-[#F0F0E4]/95 backdrop-blur-sm shadow-sm"
        )}
      >
        <div className="mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-10">
          <div className="flex h-16 md:h-20 items-center justify-between gap-6">
            <Link
              href="/"
              onClick={() => setOpenMenuPathname(null)}
              className="relative block h-10 w-[130px] max-h-10 max-w-[130px] md:h-12 md:w-[160px] md:max-h-12 md:max-w-[160px] flex-shrink-0 transition-opacity duration-300 hover:opacity-90"
              aria-label="De Future Audacious — Home"
            >
              <Image
                src="/De Future Audacious.svg"
                alt="De Future Audacious"
                fill
                sizes="(max-width: 768px) 130px, 160px"
                priority
                unoptimized
                className="object-contain object-left"
              />
            </Link>

            <nav className="hidden lg:flex items-center gap-7" aria-label="Main navigation">
              {NAV_ITEMS.map((item) => {
                const isActive = isRouteActive(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "group relative py-2 whitespace-nowrap font-body text-sm transition-colors duration-200",
                      isActive
                        ? cn(
                            "font-semibold",
                            isTransparent ? "text-white" : "text-[#174D3A]"
                          )
                        : cn(
                            "font-medium",
                            "after:content-[''] after:absolute after:bottom-0.5 after:left-0 after:h-[1.5px] after:w-full after:origin-center after:scale-x-0 after:transition-transform after:duration-200 hover:after:scale-x-100",
                            isTransparent
                              ? "text-[#F0F0E4]/80 hover:text-white after:bg-[#A8C77D]"
                              : "text-[#174D3A]/70 hover:text-[#174D3A] after:bg-[#174D3A]"
                          )
                    )}
                  >
                    {item.label}

                    {isActive && (
                      <span
                        aria-hidden="true"
                        className={cn(
                          "absolute bottom-0.5 left-1/2 -translate-x-1/2 h-1.5 w-1.5 rounded-full transition-transform duration-200 group-hover:scale-125",
                          isTransparent ? "bg-[#A8C77D]" : "bg-[#174D3A]"
                        )}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            <div className="hidden lg:block flex-shrink-0">
              <Link href="/contact">
                <Button
                  variant={isTransparent ? "outline-ivory" : "primary"}
                  size="md"
                >
                  Get Involved
                </Button>
              </Link>
            </div>

            <button
              className={cn(
                "lg:hidden p-2 transition-opacity hover:opacity-75",
                isTransparent ? "text-[#F0F0E4]" : "text-[#174D3A]"
              )}
              onClick={() =>
                setOpenMenuPathname(isMobileMenuOpen ? null : pathname)
              }
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#174D3A] flex flex-col pt-20 overflow-y-auto">
          <nav className="flex flex-col px-5 py-8 gap-1" aria-label="Mobile navigation">
            {NAV_ITEMS.map((item) => {
              const isActive = isRouteActive(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpenMenuPathname(null)}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "flex items-center justify-between font-display text-4xl font-700 uppercase py-3 border-b border-[#F0F0E4]/10 transition-all duration-200",
                    isActive
                      ? "text-[#A8C77D]"
                      : "text-[#F0F0E4] hover:text-[#A8C77D] hover:translate-x-2"
                  )}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span
                      className="h-2.5 w-2.5 rounded-full bg-[#A8C77D]"
                      aria-hidden="true"
                    />
                  )}
                </Link>
              );
            })}
          </nav>
          <div className="px-5 mt-4 pb-10">
            <p className="eyebrow text-[#A8C77D]">People | Purpose | Impact</p>
          </div>
        </div>
      )}
    </>
  );
}