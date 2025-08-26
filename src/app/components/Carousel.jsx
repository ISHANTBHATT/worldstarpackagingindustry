// import { useState, useEffect, useRef } from "react";

// const products = [
//   {
//     title: "Caffe Latte, a new product",
//     price: "$ 20",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores labore animi voluptatibus sequi illo, earum molestias explicabo officiis iste neque? Quis quod eligendi fugit, dolore nam itaque modi exercitationem voluptatem corrupti aut aspernatur. Quos non in sed ratione tenetur harum.",
//     bgColor: "#9c4d2f",
//     image: "/images/1.png",
//   },
//   {
//     title: "Strawberry mocha, a new product",
//     price: "$ 20",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores labore animi voluptatibus sequi illo, earum molestias explicabo officiis iste neque? Quis quod eligendi fugit, dolore nam itaque modi exercitationem voluptatem corrupti aut aspernatur. Quos non in sed ratione tenetur harum.",
//     bgColor: "#f5bfaf",
//     image: "/images/2.png",
//   },
//   {
//     title: "Doppio espresso, a new product",
//     price: "$ 20",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores labore animi voluptatibus sequi illo, earum molestias explicabo officiis iste neque? Quis quod eligendi fugit, dolore nam itaque modi exercitationem voluptatem corrupti aut aspernatur. Quos non in sed ratione tenetur harum.",
//     bgColor: "#dedfe1",
//     image: "/images/3.png",
//   },
//   {
//     title: "Matcha latte macchiato, a new product",
//     price: "$ 20",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores labore animi voluptatibus sequi illo, earum molestias explicabo officiis iste neque? Quis quod eligendi fugit, dolore nam itaque modi exercitationem voluptatem corrupti aut aspernatur. Quos non in sed ratione tenetur harum.",
//     bgColor: "#7eb63d",
//     image: "/images/4.png",
//   },
// ];

// export default function Carousel() {
//   const [active, setActive] = useState(1);
//   const count = products.length;
//   const timeoutRef = useRef(null);

//   const next = () => {
//     setActive((prev) => (prev + 1) % count);
//   };
//   const prev = () => {
//     setActive((prev) => (prev - 1 + count) % count);
//   };

//   useEffect(() => {
//     // autoplay every 5 seconds
//     timeoutRef.current = setTimeout(next, 5000);
//     return () => clearTimeout(timeoutRef.current);
//   }, [active]);

//   const other_1 = (active - 1 + count) % count;
//   const other_2 = (active + 1) % count;

//   return (
//     <div className="min-h-screen bg-[#4f8b69] font-poppins relative overflow-hidden select-none">
//       {/* Header */}
//       <header className="grid grid-cols-[80px_1fr_calc(500px*3/2)] grid-rows-[80px] border-b border-white/15 relative z-10">
//         <figure className="flex justify-center items-center">
//           <img
//             src="/images/logo.png"
//             alt="Logo"
//             className="w-4/5 object-contain"
//           />
//         </figure>
//         <nav
//           className="border-l border-white/15 flex items-center justify-end pr-8"
//           aria-label="Main Navigation"
//         >
//           <ul className="flex gap-8 text-black font-normal">
//             <li>
//               <a href="#" className="hover:underline">
//                 Coffee
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:underline">
//                 Menu
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:underline">
//                 About
//               </a>
//             </li>
//           </ul>
//         </nav>
//       </header>

//       {/* Carousel */}
//       <main className="relative">
//         <section className="carousel next min-h-screen w-full">
//           <div className="list relative h-screen">
//             {/* Border lines */}
//             <div
//               className="pointer-events-none absolute top-0 h-full border-l border-r border-white/15"
//               style={{
//                 width: "500px",
//                 left: "calc(100% - 750px)", // 500 * 3/2 = 750px
//                 zIndex: 10,
//               }}
//             />
//             {/* Red glow shape */}
//             <div
//               className="pointer-events-none absolute top-12 left-12 bg-red-600 rounded-[20px_50px_110px_230px] opacity-60 blur-[150px]"
//               style={{ width: 400, height: 300, zIndex: 10 }}
//             />

//             {products.map((product, idx) => {
//               const isActive = idx === active;
//               const isOther1 = idx === other_1;
//               const isOther2 = idx === other_2;

//               // only show these three slides
//               if (!isActive && !isOther1 && !isOther2) {
//                 return null;
//               }

//               return (
//                 <article
//                   key={idx}
//                   className={`item absolute top-0 left-0 w-full h-full ${
//                     isActive ? "z-20" : "pointer-events-none z-10" // disable pointer on other_1 and other_2
//                   }`}
//                 >
//                   <div
//                     className="main-content h-full grid"
//                     style={{
//                       gridTemplateColumns: "calc(100% - 750px)", // same as original calc
//                       backgroundColor: product.bgColor,
//                       animation: isActive
//                         ? "showContent 1s ease-in-out forwards"
//                         : "none",
//                       clipPath: isActive ? "circle(100% at 70% 50%)" : "none",
//                     }}
//                   >
//                     <div className="content py-[150px] px-20 pl-20 text-white">
//                       <h2 className="font-aboreto text-[5em] leading-tight">
//                         {product.title}
//                       </h2>
//                       <p className="price font-aboreto text-[3em] my-5 text-white">
//                         {product.price}
//                       </p>
//                       <p className="description mb-5 opacity-90">
//                         {product.description}
//                       </p>
//                       <button className="addToCard bg-[#4f8b69] text-white py-3 px-8 rounded-full font-poppins font-semibold hover:bg-green-700 transition-colors">
//                         Add To Card
//                       </button>
//                     </div>
//                   </div>
//                   <figure
//                     className="image absolute top-0"
//                     style={{
//                       width: 500,
//                       height: "100%",
//                       left: "calc(100% - 750px)",
//                       padding: 20,
//                       display: "flex",
//                       flexDirection: "column",
//                       justifyContent: "flex-end",
//                       alignItems: "center",
//                       fontWeight: 500,
//                       zIndex: 15,
//                     }}
//                   >
//                     <img
//                       src={product.image}
//                       alt={product.title}
//                       className="w-[90%] mb-5 filter drop-shadow-[0_150px_50px_#9e0c0c55]"
//                       style={{
//                         animation: isActive
//                           ? "effectNext 0.5s ease-in-out forwards"
//                           : "none",
//                       }}
//                     />
//                     <figcaption
//                       className="font-aboreto font-bold text-lg text-right mb-7 w-[70%]"
//                       style={{
//                         animation: isActive
//                           ? "effectNext 0.5s ease-in-out forwards"
//                           : "none",
//                       }}
//                     >
//                       {product.title}
//                     </figcaption>
//                   </figure>
//                 </article>
//               );
//             })}
//           </div>
//           <div
//             className="arrows absolute bottom-5 right-0 grid grid-cols-2 gap-2"
//             style={{ width: "calc(100% - 750px)", zIndex: 20 }}
//           >
//             <button
//               onClick={prev}
//               className="bg-transparent border border-white/15 text-white font-mono text-lg font-bold leading-none shadow-md transition-colors hover:bg-white/10 rounded"
//               aria-label="Previous Slide"
//             >
//               &lt;
//             </button>
//             <button
//               onClick={next}
//               className="bg-transparent border border-white/15 text-white font-mono text-lg font-bold leading-none shadow-md transition-colors hover:bg-white/10 rounded"
//               aria-label="Next Slide"
//             >
//               &gt;
//             </button>
//           </div>
//         </section>
//       </main>

//       <style jsx global>{`
//         /* Fonts */
//         @import url("https://fonts.googleapis.com/css2?family=Aboreto&display=swap");
//         @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

//         body {
//           font-family: "Poppins", sans-serif;
//           margin: 0;
//           font-size: 16px;
//           background-color: #4f8b69;
//         }

//         .font-poppins {
//           font-family: "Poppins", sans-serif;
//         }
//         .font-aboreto {
//           font-family: "Aboreto", cursive;
//         }

//         /* Animations */
//         @keyframes showContent {
//           from {
//             clip-path: circle(0% at 70% 50%);
//           }
//           to {
//             clip-path: circle(100% at 70% 50%);
//           }
//         }
//         @keyframes effectNext {
//           from {
//             transform: translateX(500px);
//           }
//           to {
//             transform: translateX(0);
//           }
//         }
//       `}</style>
//     </div>
//   );
// }

// import { useState, useEffect, useRef } from "react";

// const products = [
//   {
//     title: "MATCHA LATTE MACCHIATO, A NEW PRODUCT",
//     price: "$ 20",
//     bgColor: "#9c4d2f",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores labore animi voluptatibus sequi illo, earum molestias explicabo officiis iste neque? Quis quod eligendi fugit, dolore nam itaque modi exercitationem voluptatem corrupti aut aspernatur. Quos non in sed ratione tenetur harum.",
//     image: "/images/1.png",
//   },
//   {
//     title: "CAFFE LATTE, A NEW PRODUCT",
//     price: "$ 20",
//     bgColor: "#f5bfaf",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores labore animi voluptatibus sequi illo, earum molestias explicabo officiis iste neque? Quis quod eligendi fugit, dolore nam itaque modi exercitationem voluptatem corrupti aut aspernatur. Quos non in sed ratione tenetur harum.",
//     image: "/images/2.png",
//   },
//   {
//     title: "CAFFE LATTE, A NEW PRODUCT",
//     price: "$ 20",
//     bgColor: "#dedfe1",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores labore animi voluptatibus sequi illo, earum molestias explicabo officiis iste neque? Quis quod eligendi fugit, dolore nam itaque modi exercitationem voluptatem corrupti aut aspernatur. Quos non in sed ratione tenetur harum.",
//     image: "/images/3.png",
//   },
//   {
//     title: "CAFFE LATTE, A NEW PRODUCT",
//     price: "$ 20",
//     bgColor: "#7eb63d",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores labore animi voluptatibus sequi illo, earum molestias explicabo officiis iste neque? Quis quod eligendi fugit, dolore nam itaque modi exercitationem voluptatem corrupti aut aspernatur. Quos non in sed ratione tenetur harum.",
//     image: "/images/4.png",
//   },
// ];

// export default function StarbucksMatchaCarousel() {
//   const [active, setActive] = useState(0);
//   const [animating, setAnimating] = useState(false);
//   const timeoutRef = useRef();
//   const count = products.length;

//   // Carousel autoplay
//   useEffect(() => {
//     timeoutRef.current = setTimeout(() => {
//       triggerAnimation((active + 1) % count);
//     }, 5000);
//     return () => clearTimeout(timeoutRef.current);
//     // eslint-disable-next-line
//   }, [active, count]);

//   // Triggers animation on slide change
//   const triggerAnimation = (toIndex) => {
//     setAnimating(false);
//     setTimeout(() => {
//       setAnimating(true);
//       setActive(toIndex);
//     }, 20); // 20ms delay to restart CSS animation
//   };

//   // Carousel controls
//   const handlePrev = () => triggerAnimation((active - 1 + count) % count);
//   const handleNext = () => triggerAnimation((active + 1) % count);

//   return (
//     <div className="min-h-screen bg-[#8BC34A] font-poppins relative overflow-hidden">
//       {/* Top Navigation Bar */}
//       <header className="w-full flex items-center justify-between border-b border-white/30 px-6 py-2 z-10 relative bg-transparent">
//         <div className="flex-shrink-0 flex items-center">
//           <img src="/images/logo.png" alt="Logo" className="w-14 h-14" />
//         </div>
//         <nav className="flex gap-10 mr-6">
//           <a href="#" className="text-black font-normal">
//             Coffee
//           </a>
//           <a href="#" className="text-black font-normal">
//             Menu
//           </a>
//           <a href="#" className="text-black font-normal">
//             About
//           </a>
//         </nav>
//       </header>

//       {/* Two-column Split */}
//       <main className="h-[calc(100vh-64px)] flex w-full relative">
//         {/* Left (Textual content) */}
//         <section className="flex flex-col justify-center pl-[5vw] pr-[2vw] w-[48%] border-r border-white/30">
//           <h1
//             className={`font-aboreto text-[3vw] leading-[1.1] text-black mb-4
//             ${animating ? "animate-showContent" : ""}
//           `}
//           >
//             {products[active].title}
//           </h1>
//           <p
//             className={`font-aboreto text-[2vw] text-black mb-2
//             ${animating ? "animate-showContent delay-200" : ""}
//           `}
//           >
//             {products[active].price}
//           </p>
//           <p
//             className={`text-black mb-8 max-w-[90%]
//             ${animating ? "animate-showContent delay-300" : ""}
//           `}
//           >
//             {products[active].description}
//           </p>
//           <button className="bg-white/60 text-black px-8 py-2 rounded-full font-poppins font-semibold w-fit hover:bg-white/80 transition-all shadow-md">
//             Add To Card
//           </button>
//         </section>

//         {/* Right (Image pane) */}
//         <section className="w-[52%] flex flex-row items-center relative overflow-x-visible">
//           <div className="flex flex-row items-center h-full w-full relative gap-0">
//             {/* Main product image animated */}
//             <div
//               className={`flex flex-col items-center justify-center w-2/3 h-full relative
//               ${animating ? "animate-effectNext" : ""}
//             `}
//             >
//               <img
//                 src={products[active].image}
//                 alt={products[active].title}
//                 className="object-contain h-[55vh] mt-6"
//                 draggable={false}
//                 style={{
//                   animation: animating
//                     ? "effectNext 0.6s cubic-bezier(.66,.34,.29,1.2)"
//                     : undefined,
//                 }}
//               />
//               <figcaption className="font-aboreto text-black text-base text-center mt-3">
//                 {products[active].title}
//               </figcaption>
//             </div>
//             {/* Next product preview */}
//             <div className="w-1/3 h-full flex items-center justify-center relative overflow-visible">
//               <img
//                 src={products[(active + 1) % count].image}
//                 alt={products[(active + 1) % count].title}
//                 className="object-contain h-[41vh] opacity-80 translate-x-[-30%] scale-90"
//                 draggable={false}
//               />
//               <figcaption
//                 className="font-aboreto text-black text-xs text-center mt-3 w-28 truncate"
//                 style={{
//                   position: "absolute",
//                   bottom: 30,
//                   left: "50%",
//                   transform: "translateX(-50%)",
//                 }}
//               >
//                 {products[(active + 1) % count].title}
//               </figcaption>
//             </div>
//             <div className="absolute left-0 top-0 h-full border-l border-white/30 z-10" />
//           </div>
//           {/* Carousel arrows */}
//           <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-4 z-20">
//             <button
//               onClick={handlePrev}
//               className="bg-white/20 border border-white/80 rounded-full w-8 h-8 flex items-center justify-center font-bold text-black hover:bg-white/40"
//               aria-label="Previous Product"
//             >
//               &#60;
//             </button>
//             <button
//               onClick={handleNext}
//               className="bg-white/20 border border-white/80 rounded-full w-8 h-8 flex items-center justify-center font-bold text-black hover:bg-white/40"
//               aria-label="Next Product"
//             >
//               &#62;
//             </button>
//           </div>
//         </section>
//       </main>
//       {/* Animations and fonts */}
//       <style jsx global>{`
//         @import url("https://fonts.googleapis.com/css2?family=Aboreto&display=swap");
//         @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap");
//         .font-aboreto {
//           font-family: "Aboreto", cursive;
//         }
//         .font-poppins {
//           font-family: "Poppins", sans-serif;
//         }

//         @keyframes showContent {
//           from {
//             opacity: 0;
//             clip-path: circle(0% at 0% 50%);
//           }
//           to {
//             opacity: 1;
//             clip-path: circle(150% at 0% 50%);
//           }
//         }
//         .animate-showContent {
//           animation: showContent 0.8s cubic-bezier(0.66, 0.34, 0.29, 1.2);
//         }

//         @keyframes effectNext {
//           from {
//             transform: translateX(120px) scale(0.96);
//             opacity: 0.4;
//           }
//           to {
//             transform: translateX(0) scale(1);
//             opacity: 1;
//           }
//         }
//         .animate-effectNext {
//           animation: effectNext 0.6s cubic-bezier(0.66, 0.34, 0.29, 1.2);
//         }

//         .delay-200 {
//           animation-delay: 0.2s;
//         }
//         .delay-300 {
//           animation-delay: 0.3s;
//         }
//       `}</style>
//     </div>
//   );
// }

import { useState, useEffect, useRef } from "react";

// const products = [
//   {
//     title: "MATCHA LATTE MACCHIATO, A NEW PRODUCT",
//     price: "$ 20",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores labore animi voluptatibus sequi illo, earum molestias explicabo officiis iste neque? Quis quod eligendi fugit, dolore nam itaque modi exercitationem voluptatem corrupti aut aspernatur. Quos non in sed ratione tenetur harum.",
//     bgColor: "#7eb63d",
//     image: "/images/c1.png",
//   },
//   {
//     title: "CAFFE LATTE, A NEW PRODUCT",
//     price: "$ 20",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores labore animi voluptatibus sequi illo, earum molestias explicabo officiis iste neque? Quis quod eligendi fugit, dolore nam itaque modi exercitationem voluptatem corrupti aut aspernatur. Quos non in sed ratione tenetur harum.",
//     bgColor: "#9c4d2f",
//     image: "/images/c2.png",
//   },
//   {
//     title: "STRAWBERRY MOCHA, A NEW PRODUCT",
//     price: "$ 20",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores labore animi voluptatibus sequi illo, earum molestias explicabo officiis iste neque? Quis quod eligendi fugit, dolore nam itaque modi exercitationem voluptatem corrupti aut aspernatur. Quos non in sed ratione tenetur harum.",
//     bgColor: "#f5bfaf",
//     image: "/images/c3.png",
//   },
//   {
//     title: "DOPPIO ESPRESSO, A NEW PRODUCT",
//     price: "$ 20",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores labore animi voluptatibus sequi illo, earum molestias explicabo officiis iste neque? Quis quod eligendi fugit, dolore nam itaque modi exercitationem voluptatem corrupti aut aspernatur. Quos non in sed ratione tenetur harum.",
//     bgColor: "#dedfe1",
//     image: "/images/c4.png",
//   },
// ];

const products = [
  {
    title: "GOURMET FRESH COFFEE",
    price: "$ 20",
    description:
      "Great coffee deserves a great cup. Our paper cups, designed for Gourmet Fresh Coffee, bring together strength, sustainability, and style — the perfect blend for your perfect brew.",
    bgColor: "#F5ECE4",
    image: "/images/c1.png",
  },
  {
    title: "COFFE EAT",
    price: "$ 20",
    description:
      "Fresh coffee. Fresh design. Fresh experience. Worldstar Packaging creates specialty cups for Coffee Eat, where quality packaging meets quality brewing.",
    bgColor: "#F5ECE4",
    image: "/images/c2.png",
  },
  {
    title: "INDIGO",
    price: "$ 20",
    description:
      "Every detail matters in the skies! The crafted paper cups for IndiGo Airlines deliver more than just coffee; they deliver comfort, convenience, and quality for passengers across every journey. ",
    bgColor: "#F5ECE4",
    image: "/images/c5.png",
  },
  {
    title: "CHAAYOS",
    price: "$ 20",
    description:
      "Chai that feels like home, cups that feel like Chaayos! We make sure every blend of chai experiments and comfort classics is served in cups crafted to keep the flavor, vibe, and freshness alive.",
    bgColor: "#F5ECE4",
    image: "/images/c4.png",
  },
];

export default function Carousel() {
  const [animating, setAnimating] = useState(false);
  const [active, setActive] = useState(0);
  const count = products.length;
  const timeoutRef = useRef();
  const [prevBg, setPrevBg] = useState(products[0].bgColor);

  //     useEffect(() => {
  //     timeoutRef.current = setTimeout(() => {
  //       triggerAnimation((active + 1) % count);
  //     }, 5000);
  //     return () => clearTimeout(timeoutRef.current);
  //     // eslint-disable-next-line
  //   }, [active, count]);

  // Carousel autoplay
  useEffect(() => {
    // timeoutRef.current = setTimeout(
    //   () => handleSlide((active + 1) % count),
    //   5000
    // );
    timeoutRef.current = setTimeout(() => {
      triggerAnimation((active + 1) % count);
    }, 5000);
    return () => clearTimeout(timeoutRef.current);
  }, [active, count]);

  // Triggers animation on slide change
  const triggerAnimation = (toIndex) => {
    setAnimating(false);
    setTimeout(() => {
      setAnimating(true);
      setActive(toIndex);
    }, 20); // 20ms delay to restart CSS animation
  };

  // Carousel controls
  const handlePrev = () => {
    setPrevBg(products[active].bgColor);
    setBgCircleKey(bgCircleKey + 1);
    triggerAnimation((active - 1 + count) % count);
  };
  const handleNext = () => {
    setPrevBg(products[active].bgColor);
    setBgCircleKey(bgCircleKey + 1);
    triggerAnimation((active + 1) % count);
  };

  // For animated bg transition
  const [bgCircleKey, setBgCircleKey] = useState(0);

  //   const handleSlide = (idx) => {
  //     setPrevBg(products[active].bgColor);
  //     setActive(idx);
  //     setBgCircleKey(bgCircleKey + 1); // Force remount to trigger animation
  //   };

  // For aligning the circle's center with the actual image, tweak as needed for full responsiveness
  const bgCircleCenterX = "63%"; // right side: set for your layout/image position
  const bgCircleCenterY = "55%"; // middle vert

  return (
    <div className="min-h-screen font-poppins relative overflow-hidden select-none">
      {/* Animated Circle BG: new color over previous color, expanding from image area */}
      <div
        key={bgCircleKey}
        className="absolute inset-0 z-0 transition-bg"
        style={{
          backgroundColor: prevBg,
        }}
      >
        {/* Animated growing circle overlay (new color) */}
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: products[active].bgColor,
            animation:
              "circleRevealAnim 1s cubic-bezier(.66,.34,.29,1.2) forwards",
            clipPath: `circle(0% at ${bgCircleCenterX} ${bgCircleCenterY})`,
            zIndex: 1,
          }}
        />
      </div>

      {/* Top Navigation Bar */}
      {/* <header className="w-full flex items-center justify-between border-b border-white/30 px-6 py-2 z-10 relative bg-transparent">
        <div className="flex-shrink-0 flex items-center">
          <img src="/images/logo2.png" alt="Logo" className="w-14 h-14" />
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
            href="#"
            className="text-black hover:text-gray-600 transition-colors"
          >
            Gallery
          </a>
          <a
            href="#"
            className="text-black hover:text-gray-600 transition-colors"
          >
            Contact
          </a>
        </nav>
      </header> */}

      {/* Two-Column Split */}
      <main className="h-[calc(100vh-64px)] flex w-full relative">
        {/* Left (Textual content) */}
        <section className="flex flex-col justify-center pl-[5vw] pr-[2vw] w-[48%] border-r border-white/30 z-10 relative">
          <h1
            className={`font-aboreto text-[3vw] leading-[1.1] text-black mb-4 animate-showContent`}
          >
            {products[active].title}
          </h1>
          {/* <p className="font-aboreto text-[2vw] text-black mb-2 animate-showContent delay-200">
            {products[active].price}
          </p> */}
          <p className="text-black mb-8 max-w-[90%] animate-showContent delay-300">
            {products[active].description}
          </p>
          <button className="bg-white/60 text-black px-8 py-2 rounded-full font-poppins font-semibold w-fit hover:bg-white/80 transition-all shadow-md">
            know more
          </button>
        </section>
        {/* Right (Image pane) */}
        <section className="w-[52%] flex flex-row items-center relative overflow-x-visible z-10">
          <div className="flex flex-row items-center h-full w-full relative gap-0">
            {/* Main product image animated */}
            <div
              className={`flex flex-col items-center justify-center w-2/3 h-full relative ${
                animating ? "animate-effectNext" : ""
              }`}
            >
              <img
                src={products[active].image}
                alt={products[active].title}
                className="object-contain h-[55vh] mt-6"
                draggable={false}
              />
              <figcaption className="font-aboreto text-black text-base text-center mt-3">
                {products[active].title}
              </figcaption>
            </div>
            {/* Preview of next product */}
            <div className="w-1/3 h-full flex items-center justify-center relative overflow-visible">
              <img
                src={products[(active + 1) % count].image}
                alt={products[(active + 1) % count].title}
                className="object-contain h-[41vh] opacity-80 translate-x-[-30%] scale-90"
                draggable={false}
              />
              <figcaption
                className="font-aboreto text-black text-xs text-center mt-3 w-28 truncate"
                style={{
                  position: "absolute",
                  bottom: 30,
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              >
                {products[(active + 1) % count].title}
              </figcaption>
            </div>
            {/* Decorative vertical border */}
            <div className="absolute left-0 top-0 h-full border-l border-white/30 z-10" />
          </div>
          {/* Carousel arrows */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-4 z-20">
            <button
              onClick={handlePrev}
              className="bg-white/20 border border-white/80 rounded-full w-8 h-8 flex items-center justify-center font-bold text-black hover:bg-white/40"
              aria-label="Previous Product"
            >
              &#60;
            </button>
            <button
              onClick={handleNext}
              className="bg-white/20 border border-white/80 rounded-full w-8 h-8 flex items-center justify-center font-bold text-black hover:bg-white/40"
              aria-label="Next Product"
            >
              &#62;
            </button>
          </div>
        </section>
      </main>

      {/* Fonts and Animations */}
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Aboreto&display=swap");
        @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap");
        .font-aboreto {
          font-family: "Aboreto", cursive;
        }
        .font-poppins {
          font-family: "Poppins", sans-serif;
        }
        @keyframes showContent {
          from {
            opacity: 0;
            clip-path: circle(0% at 0% 50%);
          }
          to {
            opacity: 1;
            clip-path: circle(150% at 0% 50%);
          }
        }
        .animate-showContent {
          animation: showContent 0.8s cubic-bezier(0.66, 0.34, 0.29, 1.2);
        }
        @keyframes effectNext {
          from {
            transform: translateX(120px) scale(0.96);
            opacity: 0.4;
          }
          to {
            transform: translateX(0) scale(1);
            opacity: 1;
          }
        }
        .animate-effectNext {
          animation: effectNext 0.6s cubic-bezier(0.66, 0.34, 0.29, 1.2);
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
        .delay-300 {
          animation-delay: 0.3s;
        }
        @keyframes circleRevealAnim {
          to {
            clip-path: circle(150% at 75% 55%);
          }
        }
      `}</style>
    </div>
  );
}
