import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/data/site";

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M13.5 21v-8.2h2.75l.41-3.2H13.5V7.6c0-.93.26-1.56 1.59-1.56h1.7V3.14C16.5 3.1 15.53 3 14.4 3c-2.36 0-3.97 1.44-3.97 4.08v2.52H7.67v3.2h2.76V21h3.07Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17" cy="7" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-border-light">
      <div className="mx-auto max-w-[1400px] px-[18px] md:px-8 lg:px-16 py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          <div className="flex flex-col gap-4">
            <Image
              src="/images/logo.png"
              alt={siteConfig.businessName}
              width={220}
              height={140}
              className="h-14 w-auto object-contain"
            />
            <p className="text-text-secondary text-sm leading-relaxed max-w-xs">
              Personalised, evidence-based physiotherapy and wellness care in Batley, West Yorkshire.
            </p>
          </div>

          <div>
            <h3 className="text-navy font-bold mb-4">Quick Links</h3>
            <ul className="flex flex-col gap-2.5">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-text-secondary text-sm hover:text-brand-teal transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-navy font-bold mb-4">Contact</h3>
            <ul className="flex flex-col gap-3.5">
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-brand-teal shrink-0 mt-0.5" aria-hidden />
                <a href={siteConfig.phoneHref} className="text-text-secondary text-sm hover:text-brand-teal">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-brand-teal shrink-0 mt-0.5" aria-hidden />
                <a href={`mailto:${siteConfig.email}`} className="text-text-secondary text-sm hover:text-brand-teal">
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-brand-teal shrink-0 mt-0.5" aria-hidden />
                <span className="text-text-secondary text-sm">
                  {siteConfig.addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-navy font-bold mb-4">Follow Us</h3>
            <div className="flex gap-3 mb-6">
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-11 h-11 rounded-full bg-brand-teal text-white flex items-center justify-center hover:bg-brand-teal-dark transition-colors duration-200"
              >
                <FacebookIcon />
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-11 h-11 rounded-full bg-brand-teal text-white flex items-center justify-center hover:bg-brand-teal-dark transition-colors duration-200"
              >
                <InstagramIcon />
              </a>
            </div>
            <p className="script-text text-2xl text-brand-teal leading-tight">
              Move Better
              <br />
              Live Brighter
            </p>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-border-light flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-text-muted">
          <p>
            &copy; {year} {siteConfig.businessName}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-brand-teal transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-brand-teal transition-colors duration-200">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
