import {
  Facebook,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import { cn } from "@/lib/utils";

function Footer() {
  return (
    <footer className="border-t  bg-[#329893]">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              {/* <div className="flex h-12 w-12 items-center justify-center rounded bg-white">
                <span className="text-sm font-bold text-black">V</span>
              </div>
              <div className="leading-tight">
                <p className="text-base font-semibold">VIGRAPH</p>
                <p className="text-[10px] uppercase tracking-widest text-zinc-400">
                  Studio
                </p>
              </div> */}
              <img src="/images/logo.png" className="max-w-32" alt="logo" />
            </div>
            <p className="mt-4 max-w-sm text-sm text-white">
              For over 27 years, WorldStar Packaging Industry has been shaping
              the way beverages are served with packaging that blends
              innovation, sustainability, and trust.
            </p>
            <div className="mt-4 flex items-center gap-3 text-white">
              <Social
                icon={<Facebook className="h-4 w-4" />}
                href="https://www.facebook.com/"
                ariaLabel="Facebook"
              />
              <Social
                icon={<Twitter className="h-4 w-4" />}
                href="https://www.twitter.com/"
                ariaLabel="Twitter"
              />
              <Social
                icon={<Linkedin className="h-4 w-4" />}
                href="https://www.linkedin.com/company/worldstar-packaging-industry/about/?viewAsMember=true"
                ariaLabel="LinkedIn"
              />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="mt-4 space-y-3 text-gray-200">
              <li>
                <Link href="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/our-products/double-wall-paper-cups"
                  className="hover:text-white"
                >
                  Our Products
                </Link>
              </li>
              <li>
                <Link href="/compostable" className="hover:text-white">
                  Compostable Paper Cups
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Get In Touch */}
          <div>
            <h4 className="text-lg font-semibold text-white">Get In Touch</h4>
            <ul className="mt-4 space-y-4 text-gray-100">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 text-white" />
                <span className="flex-1 text-base">
                  World Star Packaging Industry, Plot no 53, sector 53, phase I,
                  HSIIDC Kundli, Sonipat,Haryana-131028
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 text-white" />
                <span className="flex-1 text-base">+91 98105 01613</span>
              </li>
              {/* <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 text-white/80" />
                <span>082-245-7253</span>
              </li> */}
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 text-white" />
                <span className="text-base flex-1 [overflow-wrap:anywhere] inline-block">
                  worldstarpackagingindustry@gmail.com
                </span>
              </li>
            </ul>
            <a
              href="/images/Worldstar Brochure.pdf"
              download
              className="mt-6 inline-block rounded bg-white px-4 py-2 text-center text-sm font-semibold text-[#329893] hover:bg-gray-200"
            >
              Download Brochure
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-300">
        <div className="mx-auto max-w-6xl px-4 py-6 text-center text-sm text-white">
          Copyright © 2025 Worldstar Packaging | Designed by{" "}
          <a
            href="https://apacedigitalcargo.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Apace Digital Cargo
          </a>
        </div>
      </div>
    </footer>
  );
}

function Social({ icon, ariaLabel, href }) {
  return (
    <button
      aria-label={ariaLabel}
      className={cn(
        "inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-gray-100 hover:border-white hover:text-white"
      )}
    >
      <a href={href} target="_blank" rel="noopener noreferrer">
        {icon}
      </a>
    </button>
  );
}

export default Footer;
