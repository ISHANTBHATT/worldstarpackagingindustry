import React from "react";
import { FizziLogo } from "./FizziLogo";
import Link from "next/link";

export default function Header() {
  return (
    // <header className="-mb-28 flex justify-center py-4">
    //   <FizziLogo className="z-10 h-20 cursor-pointer text-[#6F4E37]" />
    // </header>
    <header className="w-full flex items-center justify-between border-b border-white/30 px-6 py-2 z-50 fixed bg-transparent">
      <div className="flex-shrink-0 flex items-center">
        <a href="/">
          <img src="/images/logo2.png" alt="Logo" className="w-20 h-20" />
        </a>
      </div>
      <nav className="flex gap-10 mr-6">
        <a
          href="about"
          className="text-black hover:text-gray-600 transition-colors"
        >
          About
        </a>
        <a
          href="our-products"
          className="text-black hover:text-gray-600 transition-colors"
        >
          Our Products
        </a>
        <a
          href="gallery"
          className="text-black hover:text-gray-600 transition-colors"
        >
          Gallery
        </a>
        <a
          href="contact"
          className="text-black hover:text-gray-600 transition-colors"
        >
          Contact
        </a>
      </nav>
    </header>
  );
}
