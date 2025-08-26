"use client";

import Image from "next/image";

export default function Clients() {
  const leftLogos = [
    { name: "Stripe", src: "/images/s1_1.png" },
    { name: "Mailchimp", src: "/images/s1_2.png" },
    { name: "HubSpot", src: "/images/s1_3.png" },
    { name: "Slack", src: "/images/s1_4.png" },
    { name: "Notion", src: "/images/s1_5.png" },
    { name: "Figma", src: "/images/s1_6.png" },
  ];

  const centerLogos = [
    { name: "Gumroad", src: "/images/s1_1.png" },
    { name: "Razorpay", src: "/images/s1_2.png" },
    { name: "PayPal", src: "/images/s1_3.png" },
    { name: "Shopify", src: "/images/s1_4.png" },
    { name: "Discord", src: "/images/s1_5.png" },
    { name: "Zoom", src: "/images/s1_6.png" },
  ];

  const rightLogos = [
    { name: "Google", src: "/images/s1_1.png" },
    { name: "Microsoft", src: "/images/s1_2.png" },
    { name: "Dropbox", src: "/images/s1_3.png" },
    { name: "Trello", src: "/images/s1_4.png" },
    { name: "Asana", src: "/images/s1_5.png" },
    { name: "GitHub", src: "/images/s1_6.png" },
  ];

  return (
    <div className="min-h-screen bg-[#F5ECE4] p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
                Trusted by <span className="text-[#734425]">Brands,</span>
                <br />
                Served with Care
              </h1>
              <p className="text-lg text-gray-600 max-w-md">
                From your favourite cafés to leading food chains, our
                eco-friendly cups and straws carry the mark of quality and
                reliability. Each brand you see here partners with us to ensure
                their beverages are served in style—sustainably, safely, and
                with a touch of innovation.
              </p>
            </div>
            <button className="bg-[#734425] hover:bg-[#6b3c22] text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center gap-2">
              Explore Integration
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Right Animated Logos */}
          <div className="relative h-[600px] overflow-hidden">
            <div className="absolute inset-0 grid grid-cols-3 gap-8">
              {/* Left Column - Moving Up */}
              <div className="relative h-full overflow-hidden">
                <div className="animate-scroll-up flex flex-col gap-8">
                  {[...leftLogos, ...leftLogos, ...leftLogos].map(
                    (logo, index) => (
                      <div
                        key={`left-${index}`}
                        className="flex justify-center items-center bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200"
                      >
                        <Image
                          src={logo.src || "/placeholder.svg"}
                          alt={logo.name}
                          width={120}
                          height={40}
                          className="opacity-100 hover:opacity-100 transition-opacity duration-200"
                        />
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* Center Column - Moving Down */}
              <div className="relative h-full overflow-hidden">
                <div className="animate-scroll-down flex flex-col gap-8">
                  {[...centerLogos, ...centerLogos, ...centerLogos].map(
                    (logo, index) => (
                      <div
                        key={`center-${index}`}
                        className="flex justify-center items-center bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200"
                      >
                        <Image
                          src={logo.src || "/placeholder.svg"}
                          alt={logo.name}
                          width={120}
                          height={40}
                          className=""
                        />
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* Right Column - Moving Up */}
              <div className="relative h-full overflow-hidden">
                <div className="animate-scroll-up-slow flex flex-col gap-8">
                  {[...rightLogos, ...rightLogos, ...rightLogos].map(
                    (logo, index) => (
                      <div
                        key={`right-${index}`}
                        className="flex justify-center items-center bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200"
                      >
                        <Image
                          src={logo.src || "/placeholder.svg"}
                          alt={logo.name}
                          width={120}
                          height={40}
                          className=""
                        />
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* Gradient Overlays */}
            <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-brown-100 to-transparent pointer-events-none z-10" />
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-brown-100 to-transparent pointer-events-none z-10" />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-up {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }

        @keyframes scroll-down {
          0% {
            transform: translateY(-50%);
          }
          100% {
            transform: translateY(0);
          }
        }

        @keyframes scroll-up-slow {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }

        .animate-scroll-up {
          animation: scroll-up 20s linear infinite;
        }

        .animate-scroll-down {
          animation: scroll-down 25s linear infinite;
        }

        .animate-scroll-up-slow {
          animation: scroll-up-slow 30s linear infinite;
        }
      `}</style>
    </div>
  );
}
