import { Facebook, Mail, MapPin, Phone, Twitter, Youtube } from "lucide-react";
import Link from "next/link";
import React from "react";
import { cn } from "@/lib/utils";

function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-[#734425]">
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
              <img src="/images/logo2.png" className="max-w-32" alt="logo" />
            </div>
            <p className="mt-4 max-w-sm text-sm text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis.
            </p>
            <div className="mt-4 flex items-center gap-3 text-white">
              <Social
                icon={<Facebook className="h-4 w-4" />}
                ariaLabel="Facebook"
              />
              <Social
                icon={<Twitter className="h-4 w-4" />}
                ariaLabel="Twitter"
              />
              <Social
                icon={<Youtube className="h-4 w-4" />}
                ariaLabel="YouTube"
              />
            </div>
          </div>

          {/* Our Store */}
          <div>
            <h4 className="text-lg font-semibold text-white">Our Store</h4>
            <ul className="mt-4 space-y-3 text-zinc-300">
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
                <Link href="/our-products" className="hover:text-white">
                  Our Products
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-white">
                  Gallery
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
            <ul className="mt-4 space-y-4 text-zinc-300">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 text-white/80" />
                <span>2443 Oak Ridge Omaha, QA 45065</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 text-white/80" />
                <span>207-867-452</span>
              </li>
              {/* <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 text-white/80" />
                <span>082-245-7253</span>
              </li> */}
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 text-white/80" />
                <span>support@site.com</span>
              </li>
            </ul>
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

function Social({ icon, ariaLabel }) {
  return (
    <button
      aria-label={ariaLabel}
      className={cn(
        "inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-zinc-300 hover:border-white hover:text-white"
      )}
    >
      {icon}
    </button>
  );
}

export default Footer;
