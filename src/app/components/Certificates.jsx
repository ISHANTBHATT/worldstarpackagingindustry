// pages/index.jsx
import React from "react";
import Image from "next/image";

const certificates = [
  {
    name: "BRC",
    logo: "/images/cl-1.png",
    certImg: "/images/BRC.jpg",
    link: "/certificates/brc.pdf",
  },
  {
    name: "FSSC 22000",
    logo: "/images/cl-2.png",
    certImg: "/images/fssc.jpg",
    link: "/certificates/fssc.pdf",
  },
  {
    name: "SEDEX",
    logo: "/images/cl-3.png",
    certImg: "/images/smet2-sEDXE.jpg",
    link: "/certificates/iso9001.pdf",
  },
  {
    name: "FSC",
    logo: "/images/cl-4.png",
    certImg: "/images/fsc.jpg",
    link: "/certificates/iso22000.pdf",
  },
  {
    name: "ISO 22000:2005",
    logo: "/images/cl-5.png",
    certImg: "/images/ISO-22000-2005.jpg",
    link: "/certificates/haccp.pdf",
  },
];

export default function Certificates() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center  py-10">
      <h1 className="text-4xl font-bold mb-8 text-[#734425]">
        Our Certifications
      </h1>
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 w-full max-w-4xl items-center">
        {certificates.map((cert, i) => (
          <CertificateCard
            key={i}
            logo={cert.logo}
            certImg={cert.certImg}
            name={cert.name}
            link={cert.link}
          />
        ))}
      </div> */}
      <div className="flex justify-around flex-wrap gap-10 w-full max-w-7xl items-center">
        {certificates.map((cert, i) => (
          <CertificateCard
            key={i}
            logo={cert.logo}
            certImg={cert.certImg}
            name={cert.name}
            link={cert.link}
          />
        ))}
      </div>
    </div>
  );
}

function CertificateCard({ logo, certImg, name, link }) {
  return (
    <div className="w-80 bg-white border  border-[#D7C9BB] rounded-xl  shadow-lg p-4 flex flex-col items-center hover:scale-105 transition duration-300">
      <div className="w-24 h-24 mb-6">
        <Image
          src={logo}
          alt={name + " Logo"}
          width={64}
          height={64}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full h-full flex justify-center items-center mb-2">
        <Image
          src={certImg}
          alt={name + " Certificate"}
          width={128}
          height={80}
          className="rounded-md object-cover border"
        />
      </div>
      <div className="font-semibold text-lg text-gray-800 mb-1 text-center">
        {name}
      </div>
      {/* <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline text-sm"
      >
        View Certificate
      </a> */}
    </div>
  );
}
