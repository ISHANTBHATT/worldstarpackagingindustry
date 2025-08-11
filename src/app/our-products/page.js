// "use client";
// import React, { useEffect, useRef, useState } from "react";
// import { motion } from "framer-motion";

// // import RowContainer from "./RowContainer";

// const MainContainer = () => {
//   // const [{ foodItems, cartShow }, dispatch] = useStateValue();
//   // const [scrollValue, setScrollValue] = useState(0);

//   // useEffect(() => {}, [scrollValue, cartShow]);
//   return (
//     <div className="w-full h-auto flex flex-col items-center justify-center">
//       <div className="max-h-[500px] w-full bg-gradient-to-br from-orange-300 via-orange-200 to-orange-100 relative overflow-hidden">
//         {/* Main Content Container */}
//         <div className="container mx-auto px-6 py-12 relative z-10">
//           <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[80vh]">
//             {/* Left Side - Hero Text and Products */}
//             <div className="relative">
//               {/* Hero Text */}
//               <div className="mb-8">
//                 <p className="text-white/90 text-lg font-light mb-2 tracking-wide">
//                   Our Product
//                 </p>
//                 <h1 className="text-white text-8xl md:text-9xl lg:text-[12rem] font-bold leading-none tracking-tight">
//                   sweet
//                 </h1>
//               </div>

//               {/* Product Bottles */}
//             </div>
//           </div>
//         </div>

//         {/* Background Decorative Elements */}
//         <div className="absolute top-20 right-20 w-32 h-32 bg-white/5 rounded-full blur-xl"></div>
//         <div className="absolute bottom-20 left-20 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>
//       </div>
//       {/* <section className="w-full my-6">
//         <div className="w-full flex items-center justify-between">
//           <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100">
//             Our fresh & healthy fruits
//           </p>

//         </div>
//         <RowContainer
//           data={foodItems}
//         />
//       </section> */}
//     </div>
//   );
// };

// export default MainContainer;

import Image from "next/image";
import RowContainer from "../components/RowContainer";
import { Data } from "@/data/data";
import ProductCategory from "../components/ProductCategory";

export default function OrganicJuiceAd() {
  return (
    <div>
      <div className="min-h-screen bg-[#F5ECE4] relative overflow-hidden">
        {/* Main Content Container */}
        <div className="container mx-auto px-8 py-16 relative">
          <div className="grid lg:grid-cols-1 gap-12 items-center min-h-[80vh]">
            {/* Left Side - Hero Text and Product Image */}
            <div className="relative h-[600px] w-full">
              {/* Fresh & health text */}
              <div className="absolute top-52 left-4 z-30">
                <p className="text-white/90 text-2xl font-light tracking-wide">
                  Our Products
                </p>
              </div>

              {/* Sweet text - positioned to go behind and in front of image */}
              <div className="absolute top-16 left-[58%] z-10">
                <h1 className="text-white text-[10rem] md:text-[12rem] lg:text-[14rem] xl:text-[16rem] font-black leading-none tracking-tight select-none">
                  cups
                </h1>
              </div>

              {/* Product Image - positioned to overlap the text */}
              <div className="absolute top-18 left-[18%] z-20 h-[300px] lg:h-[400px] xl:h-[500px]">
                <Image
                  src="/images/cup12.png"
                  alt="Organic juice bottles with fresh fruits"
                  width={1000}
                  height={800}
                  className="w-full h-full object-contain"
                  priority
                />
              </div>

              {/* Part of sweet text that appears in front - using pseudo element effect */}
              <div className="absolute top-52 left-0 z-30 pointer-events-none">
                <h1 className="text-white text-[10rem] md:text-[12rem] lg:text-[14rem] xl:text-[16rem] font-black leading-none tracking-tight select-none">
                  <span className="relative">
                    Paper
                    {/* <span className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white/20 mix-blend-overlay"></span> */}
                  </span>
                </h1>
              </div>
            </div>

            {/* Right Side - Product Information */}
            {/* <div className="lg:pl-16 flex items-center">
            <div className="max-w-md">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 leading-tight">
                Organic homemade drinks
              </h2>
              <p className="text-gray-700 leading-relaxed text-base">
                We are happily devoted into following 3 principles, all our
                suppliers in each department perform professionally to ensure
                you with great service.
              </p>
            </div>
          </div> */}
          </div>
        </div>

        {/* Background Decorative Elements */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
      </div>
      <div className="bg-[#F5ECE4]">
        {/* <RowContainer Data={Data} /> */}
        <ProductCategory />
      </div>
    </div>
  );
}
