// "use client";
// import { useState } from "react";
// import { ChevronLeft, ChevronRight, Search, Menu } from "lucide-react";

// export default function Homepage() {
//   const [isToggled, setIsToggled] = useState(false);

//   const handleToggle = () => {
//     setIsToggled(!isToggled);
//   };

//   return (
//     <div className="w-full h-screen m-0 p-0 bg-[#1d1e22] overflow-hidden relative">
//       {/* Header */}
//       <header className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6">
//         <div className="text-2xl font-bold text-black">Squeezy</div>
//         <nav className="hidden md:flex items-center space-x-8 font-semibold">
//           <a
//             href="#"
//             className="text-black hover:text-gray-600 transition-colors"
//           >
//             About
//           </a>
//           <a
//             href="#"
//             className="text-black hover:text-gray-600 transition-colors"
//           >
//             Our Products
//           </a>
//           <a
//             href="#"
//             className="text-black hover:text-gray-600 transition-colors"
//           >
//             Gallery
//           </a>
//           <a
//             href="#"
//             className="text-black hover:text-gray-600 transition-colors"
//           >
//             Contact
//           </a>
//         </nav>
//         <div className="flex items-center space-x-4">
//           <Search className="w-5 h-5 text-black cursor-pointer hover:text-gray-600 transition-colors" />
//           <Menu className="w-5 h-5 text-black cursor-pointer hover:text-gray-600 transition-colors md:hidden" />
//         </div>
//       </header>

//       {/* Layer 1 - Orange */}
//       <div
//         className={`
//           w-screen h-screen flex items-center justify-center flex-col absolute top-0 left-0
//           transition-all duration-[1200ms] ease-[cubic-bezier(0.71,0,0.38,1)]
//           bg-[rgb(255,239,219)]
//           ${isToggled ? "z-[1]" : "z-[2]"}
//         `}
//         style={{
//           clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
//         }}
//       >
//         {/* Orange Text */}
//         <div
//           className={`
//             font-['Poppins'] text-[175px] font-medium text-[rgb(255,213,159)] absolute
//             transition-all duration-[1200ms] ease-[cubic-bezier(0.71,0,0.38,1)]
//             ${isToggled ? "translate-x-[150%]" : "translate-x-0"}
//           `}
//         >
//           Orange
//         </div>
//         {/* Can Container */}
//         <div className="w-[200px] relative overflow-hidden mt-[75px]">
//           <img src="/images/can 2.png" alt="Can" className="w-full" />
//           <img
//             src="/images/Contents.png"
//             alt="Contents"
//             className={`
//               absolute h-[90%] top-1/2 transform -translate-y-[53%]
//               transition-all duration-[1000ms] ease-[cubic-bezier(0.71,0,0.38,1)]
//               ${isToggled ? "left-[-250%]" : "left-1/2 -translate-x-1/2"}
//             `}
//             style={{ mixBlendMode: "multiply" }}
//           />
//         </div>
//         {/* Orange Fruits */}
//         <div
//           className={`
//             absolute transition-all duration-[1200ms] ease-[cubic-bezier(0.71,0,0.38,1)]
//             ${
//               isToggled
//                 ? "translate-x-[125vw]"
//                 : "-translate-x-20 -translate-y-20"
//             }
//           `}
//         >
//           <img
//             src="/images/orange-3.png"
//             alt="Orange 1"
//             className={`
//               absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
//               w-[125px] transition-all duration-[1200ms] ease-[cubic-bezier(0.71,0,0.38,1)]
//               ${isToggled ? "-translate-x-full" : ""}
//             `}
//             style={{ translate: "-225px -150px" }}
//           />
//           <img
//             src="/images/orange-2.png"
//             alt="Orange 2"
//             className={`
//               absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
//               w-[180px] transition-all duration-[1200ms] ease-[cubic-bezier(0.71,0,0.38,1)]
//               ${isToggled ? "-translate-x-full" : ""}
//             `}
//             style={{ translate: "275px -50px" }}
//           />
//           <img
//             src="/images/orange-1.png"
//             alt="Orange 3"
//             className={`
//               absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
//               w-[250px] transition-all duration-[1200ms] ease-[cubic-bezier(0.71,0,0.38,1)]
//               ${isToggled ? "-translate-x-full" : ""}
//             `}
//             style={{ translate: "-175px 115px" }}
//           />
//         </div>
//         {/* Arrow Navigation */}
//         <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex items-center space-x-4 z-20">
//           <button
//             onClick={handleToggle}
//             className="w-12 h-12 rounded-full border-2 border-black bg-transparent hover:bg-black hover:text-white transition-all duration-300 flex items-center justify-center group"
//           >
//             <ChevronLeft className="w-5 h-5" />
//           </button>
//           <button
//             onClick={handleToggle}
//             className="w-12 h-12 rounded-full border-2 border-black bg-transparent hover:bg-black hover:text-white transition-all duration-300 flex items-center justify-center group"
//           >
//             <ChevronRight className="w-5 h-5" />
//           </button>
//         </div>
//       </div>

//       {/* Layer 2 - Pineapple */}
//       <div
//         className={`
//           w-screen h-screen flex items-center justify-center flex-col absolute top-0 left-0
//           transition-all duration-[1200ms] ease-[cubic-bezier(0.71,0,0.38,1)]
//           bg-[rgb(229,254,193)]
//           ${isToggled ? "z-[2]" : "z-[1]"}
//         `}
//       >
//         {/* Pineapple Text */}
//         <div
//           className={`
//             font-['Poppins'] text-[175px] font-medium text-[rgb(181,235,115)] absolute
//             transition-all duration-[1200ms] ease-[cubic-bezier(0.71,0,0.38,1)]
//             ${!isToggled ? "-translate-x-[150%]" : "translate-x-0"}
//           `}
//         >
//           Pineapple
//         </div>
//         {/* Can Container */}
//         <div className="w-[200px] relative overflow-hidden mt-[75px]">
//           <img src="/images/can 2.png" alt="Can" className="w-full" />
//           <img
//             src="/images/Contents-2.png"
//             alt="Contents"
//             className={`
//               absolute h-[90%] top-1/2 transform -translate-y-[53%]
//               transition-all duration-[1000ms] ease-[cubic-bezier(0.71,0,0.38,1)]
//               ${!isToggled ? "left-[150%]" : "left-1/2 -translate-x-1/2"}
//             `}
//             style={{ mixBlendMode: "multiply" }}
//           />
//         </div>
//         {/* Pineapple Fruits */}
//         <div
//           className={`
//             absolute transition-all duration-[1200ms] ease-[cubic-bezier(0.71,0,0.38,1)]
//             ${
//               !isToggled
//                 ? "-translate-x-[125vw]"
//                 : "-translate-x-20 -translate-y-20"
//             }
//           `}
//         >
//           <img
//             src="/images/pineapple-3.png"
//             alt="Pineapple 1"
//             className={`
//               absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
//               w-[75px] transition-all duration-[1200ms] ease-[cubic-bezier(0.71,0,0.38,1)]
//               ${!isToggled ? "-translate-x-full" : ""}
//             `}
//             style={{ translate: "180px 90px" }}
//           />
//           <img
//             src="/images/pineapple-2.png"
//             alt="Pineapple 2"
//             className={`
//               absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
//               w-[275px] transition-all duration-[1200ms] ease-[cubic-bezier(0.71,0,0.38,1)]
//               ${!isToggled ? "-translate-x-full" : ""}
//             `}
//             style={{ translate: "225px -125px" }}
//           />
//           <img
//             src="/images/pineapple-1.png"
//             alt="Pineapple 3"
//             className={`
//               absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
//               w-[200px] transition-all duration-[1200ms] ease-[cubic-bezier(0.71,0,0.38,1)]
//               ${!isToggled ? "-translate-x-full" : ""}
//             `}
//             style={{ translate: "-200px 50px" }}
//           />
//         </div>
//         {/* Arrow Navigation */}
//         <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex items-center space-x-4 z-20">
//           <button
//             onClick={handleToggle}
//             className="w-12 h-12 rounded-full border-2 border-black bg-transparent hover:bg-black hover:text-white transition-all duration-300 flex items-center justify-center group"
//           >
//             <ChevronLeft className="w-5 h-5" />
//           </button>
//           <button
//             onClick={handleToggle}
//             className="w-12 h-12 rounded-full border-2 border-black bg-transparent hover:text-white transition-all duration-300 flex items-center justify-center group"
//           >
//             <ChevronRight className="w-5 h-5" />
//           </button>
//         </div>
//       </div>

//       {/* Google Fonts */}
//       <style jsx global>{`
//         @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap");
//         html::-webkit-scrollbar {
//           width: 0;
//           height: 0;
//         }
//         img {
//           max-width: none;
//         }
//       `}</style>
//     </div>
//   );
// }

"use client";
import React from "react";
import Homepage from "../components/Homepage";
import Test from "../components/Test";
import Slider from "../components/Slider";

function Page() {
  return (
    <div>
      <Homepage />
      {/* <Slider /> */}
      <Test />
    </div>
  );
}

export default Page;
