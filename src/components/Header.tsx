"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Menu, X } from "lucide-react";
import { siteConfig } from "@/data/site";
import Button from "./Button";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = siteConfig.nav
      .map((item) => document.querySelector(item.href))
      .filter((el): el is Element => Boolean(el));

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHash(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow duration-200 ${
        scrolled ? "shadow-[0_4px_20px_rgba(9,44,60,0.06)] border-b border-transparent" : "border-b border-border-light"
      }`}
    >
      <div className="mx-auto max-w-[1400px] px-[18px] md:px-8 lg:px-16 h-20 flex items-center justify-between">
        <Link href="#home" className="flex items-center shrink-0" aria-label={`${siteConfig.businessName} home`}>
          <Image
            src="/images/logo.png"
            alt={siteConfig.businessName}
            width={220}
            height={140}
            className="h-12 md:h-14 w-auto object-contain"
            priority
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-8" aria-label="Primary">
          {siteConfig.nav.map((item) => {
            const isActive = activeHash === item.href;
            return (
              <a
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`relative py-2 text-[15px] font-medium transition-colors duration-200 ${
                  isActive ? "text-brand-teal" : "text-text-primary hover:text-brand-teal"
                }`}
              >
                {item.label}
                <span
                  className={`absolute left-0 -bottom-0.5 h-0.5 bg-brand-teal rounded-full transition-all duration-200 ${
                    isActive ? "w-full" : "w-0"
                  }`}
                />
              </a>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Button href={siteConfig.bookingUrl} external icon={<Calendar size={18} aria-hidden />} iconPosition="left">
            Book an Appointment
          </Button>
        </div>

        <button
          type="button"
          className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-full text-navy hover:bg-brand-mint-light"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {menuOpen ? (
        <div
          id="mobile-menu"
          className="lg:hidden fixed inset-x-0 top-20 bottom-0 bg-white z-40 overflow-y-auto"
        >
          <nav className="flex flex-col px-[18px] py-6 gap-1" aria-label="Mobile">
            {siteConfig.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="py-3.5 text-lg font-medium text-text-primary border-b border-border-light last:border-none"
              >
                {item.label}
              </a>
            ))}
            <div className="mt-6">
              <Button
                href={siteConfig.bookingUrl}
                external
                className="w-full"
                icon={<Calendar size={18} aria-hidden />}
                iconPosition="left"
              >
                Book an Appointment
              </Button>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
