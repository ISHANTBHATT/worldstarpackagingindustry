"use client";
import Image from "next/image";

const springItems = [
  {
    id: 1,
    title: "Single Wall Paper Cups",
    imageURL: "/images/p1.png",
    bgColor: "bg-[#A6D6D3]",
  },
  {
    id: 2,
    title: "Double Wall Paper Cups",
    imageURL: "/images/p2.png",
    bgColor: "bg-[#FFB6B9]",
  },
  {
    id: 3,
    title: "Rippled Paper Cups",
    imageURL: "/images/p3.png",
    bgColor: "bg-[#F9E79F]",
  },
  {
    id: 4,
    title: "Paper Food Container with Paper & Plastic Lid",
    imageURL: "/images/p4.png",
    bgColor: "bg-[#85C1B6]",
  },
  {
    id: 5,
    title: "Paper Straws",
    imageURL: "/images/p5.png",
    bgColor: "bg-[#D7BDE2]",
  },
  {
    id: 6,
    title: "Paper and Plastic Lid for Paper Cups",
    imageURL: "/images/p6.png",
    bgColor: "bg-[#7DCEA0]",
  },
];

// productsData = [
//   {
//     id: 1,
//     title: "Single Wall",
//     imageURL: "/images/p6.png",
//   },
//   {
//     id: 2,
//     title: "Double Wall",
//     imageURL: "/images/p6.png",
//   },
//   {
//     id: 3,
//     title: "Rippled",
//     imageURL: "/images/p6.png",
//   },
//   {
//     id: 4,
//     title: "Paper food container with plastic lid",
//     imageURL: "/images/p6.png",
//   },
//   {
//     id: 5,
//     title: "Paper straws",
//     imageURL: "/images/p6.png",
//   },
//   {
//     id: 6,
//     title: "Plastic Lid for Paper cups",
//     imageURL: "/images/p6.png",
//   },
// ];
export default function OurProducts() {
  return (
    <div className="w-full bg-[#5FBBB5] py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-left">
          Our Products
        </h2>

        <div className="flex flex-wrap justify-around gap-6 md:gap-8">
          {springItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center max-w-[120px] mx-4"
            >
              <div
                className={`w-40 h-40 rounded-full ${item.bgColor} flex items-center justify-center mb-3 cursor-pointer hover:scale-105 transition-transform duration-200 overflow-hidden`}
              >
                <Image
                  src={item.imageURL || "/placeholder.svg"}
                  alt={item.title}
                  width={1000}
                  height={1000}
                  className="object-contain"
                />
              </div>
              <p className="text-sm font-medium text-gray-800 leading-tight">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
