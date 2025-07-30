import React from "react";
import { FizziLogo } from "./FizziLogo";

export default function Header() {
  return (
    <header className="-mb-28 flex justify-center py-4">
      <FizziLogo className="z-10 h-20 cursor-pointer text-[#6F4E37]" />
    </header>
  );
}
