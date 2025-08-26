// // app/page.jsx or pages/index.jsx
// "use client";

// import { useEffect, useRef } from "react";
// import Head from "next/head";
// import { SpinningText } from "@/components/spinning-text";
// import Carousel from "./Carousel";
// import OurProducts from "./OurProducts";
// import Clients from "./Clients";
// import Homepage from "./Homepage";
// import Footer from "./Footer";
// import Certificates from "./Certificates";

// export default function Testing() {
//   const smootherRef = useRef(null);
//   useEffect(() => {
//     // Only run in browser
//     if (typeof window !== "undefined") {
//       const gsapScript = document.createElement("script");
//       gsapScript.src =
//         "https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/gsap.min.js";
//       gsapScript.onload = () => {
//         const scrollTriggerScript = document.createElement("script");
//         scrollTriggerScript.src =
//           "https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/ScrollTrigger.min.js";
//         scrollTriggerScript.onload = () => {
//           const scrollSmootherScript = document.createElement("script");
//           scrollSmootherScript.src =
//             "https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/ScrollSmoother.min.js";
//           scrollSmootherScript.onload = () => {
//             const splitTextScript = document.createElement("script");
//             splitTextScript.src =
//               "https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/SplitText.min.js";
//             splitTextScript.onload = () => {
//               // Your JS code as before, but reference window.gsap instead of gsap
//               const gsap = window.gsap;
//               const ScrollTrigger = window.ScrollTrigger;
//               const ScrollSmoother = window.ScrollSmoother;
//               const SplitText = window.SplitText;

//               gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

//               smootherRef.current = ScrollSmoother.create({
//                 wrapper: "#smooth-wrapper",
//                 content: "#smooth-content",
//                 smooth: 4,
//                 effects: true,
//               });

//               let isShortHeight = window.screen.height < 1050;
//               ScrollTrigger.matchMedia({
//                 "(min-width: 991px)": function () {
//                   gsap.to("#headphone", {
//                     scrollTrigger: {
//                       trigger: "#section2",
//                       start: "top bottom",
//                       end: "center center",
//                       scrub: true,
//                     },
//                     y: "85vh",
//                     x: "18vw",
//                     width: "32vw",
//                     rotate: 90,
//                     ease: "power1.inOut",
//                     immediateRender: false,
//                   });
//                   gsap.to("#headphone", {
//                     scrollTrigger: {
//                       trigger: "#section3",
//                       start: "top bottom",
//                       end: "bottom bottom",
//                       scrub: true,
//                     },
//                     y: "218vh",
//                     x: "0",
//                     width: "35vw",
//                     rotate: 35,
//                     ease: "power1.inOut",
//                     immediateRender: false,
//                   });
//                   gsap.to("#headphone", {
//                     scrollTrigger: {
//                       trigger: "#section4",
//                       start: "top bottom",
//                       end: "center center",
//                       scrub: true,
//                     },
//                     y: "308vh",
//                     width: "42vw",
//                     rotate: 0,
//                     ease: "power1.inOut",
//                     immediateRender: false,
//                   });
//                   gsap.to("#headphone", {
//                     scrollTrigger: {
//                       trigger: "#section5",
//                       start: "top bottom",
//                       end: "center bottom",
//                       scrub: true,
//                     },
//                     y: isShortHeight ? "360vh" : "344vh",
//                     width: "28vw",
//                     ease: "power1.inOut",
//                     immediateRender: false,
//                   });
//                   gsap.to("#headphone", {
//                     scrollTrigger: {
//                       trigger: "#section5",
//                       start: "center bottom",
//                       end: "bottom bottom",
//                       scrub: true,
//                     },
//                     y: isShortHeight ? "432vh" : "419vh",
//                     width: "300px",
//                     ease: "power1.inOut",
//                     immediateRender: false,
//                   });

//                   gsap.from("#section2 .content-wrapper", {
//                     scrollTrigger: {
//                       trigger: "#section2",
//                       start: "-50% bottom",
//                       end: "center center",
//                       scrub: true,
//                     },
//                     y: "140%",
//                     ease: "power1.inOut",
//                   });
//                   gsap.from("#section3 .heading", {
//                     scrollTrigger: {
//                       trigger: "#section3",
//                       start: "top bottom",
//                       end: "center bottom",
//                       scrub: true,
//                     },
//                     y: "140%",
//                     ease: "power1.inOut",
//                   });
//                   gsap.from("#section4 img", {
//                     scrollTrigger: {
//                       trigger: "#section4",
//                       start: "top bottom",
//                       end: "center center",
//                       scrub: true,
//                     },
//                     width: 0,
//                     opacity: 0,
//                     ease: "power1.inOut",
//                   });
//                   gsap.from("#section6 .content-wrapper", {
//                     scrollTrigger: {
//                       trigger: "#section6",
//                       start: "top bottom",
//                       end: "center center",
//                       scrub: true,
//                     },
//                     y: "40%",
//                     duration: 2,
//                     ease: "power1.inOut",
//                   });

//                   // hero animation
//                   let split = SplitText.create("#section1 .heading", {
//                     type: "chars, words, lines",
//                     mask: "lines",
//                   });

//                   gsap.from(split.chars, {
//                     yPercent: () => gsap.utils.random(-100, 100),
//                     rotation: () => gsap.utils.random(-30, 30),
//                     autoAlpha: 0,
//                     ease: "back.out(1.5)",
//                     stagger: {
//                       amount: 0.5,
//                       from: "random",
//                     },
//                     duration: 1.5,
//                   });

//                   gsap.from("#headphone", {
//                     opacity: 0,
//                     scale: 0,
//                     duration: 1,
//                     delay: 1,
//                     ease: "power1.inOut",
//                   });
//                 },
//               });
//             };
//             document.body.appendChild(splitTextScript);
//           };
//           document.body.appendChild(scrollSmootherScript);
//         };
//         document.body.appendChild(scrollTriggerScript);
//       };
//       document.body.appendChild(gsapScript);
//     }
//     return () => {
//       if (smootherRef.current) {
//         smootherRef.current.kill();
//         smootherRef.current = null;
//       }
//     };
//   }, []);

//   return (
//     <div className="relative z-0">
//       <div id="smooth-wrapper">
//         <div
//           id="smooth-content"
//           className="bg-[#F5ECE4] text-[#2E2E2E] font-dm-sans text-[18px] leading-[1.5] min-h-screen"
//         >
//           {/* <Homepage /> */}
//           <Carousel />
//           <OurProducts />
//           <main
//             className="w-[calc(100vw-10rem)] max-w-[1440px] mx-auto relative"
//             id="main"
//           >
//             {/* Floating Headphone Image */}
//             <img
//               src="/images/h-cup.png"
//               alt=""
//               id="headphone"
//               className="absolute left-1/2 -translate-x-1/2 top-[2.2%] w-[40vw] max-w-[560px] z-10 drop-shadow-[8px_35px_6px_rgba(0,0,0,0.13)]"
//               style={{ willChange: "transform" }}
//             />

//             {/* Section 1 */}
//             <section
//               id="section1"
//               className="h-screen w-[60vw] mx-auto flex items-center justify-center text-center"
//             >
//               <h1 className="heading font-outfit font-bold text-[11.5vw] leading-[0.85] uppercase text-[#734425] mb-0">
//                 Paper Cups & Straws
//               </h1>
//             </section>

//             {/* Section 2 */}
//             <section id="section2" className="min-h-screen pt-[4vw]">
//               <div className="content-wrapper max-w-[500px]">
//                 <h2 className="heading font-outfit font-bold text-8xl uppercase text-[#734425] mb-6">
//                   Eco - Friendly
//                 </h2>
//                 <p className="pb-10">
//                   Dispersion barrier cups are easily eco-friendly and easily
//                   compos able. Worldstar Packaging Industry is a leading
//                   manufacturer and exporter of the Dispersion barrier cups in
//                   custom sizes.
//                 </p>
//                 <a
//                   href="/about"
//                   className="btn bg-[#2E2E2E] mt-8 text-white px-5 py-2 font-medium rounded-[10px]"
//                 >
//                   Know More
//                 </a>
//               </div>
//               <div className="feature-wrapper grid grid-cols-3 gap-[1.8rem] mt-[8vw]">
//                 <div className="feature-box border-2 border-[#2E2E2E] px-5 py-6 rounded-[10px]">
//                   <div className="feature-name font-outfit uppercase text-lg mb-2">
//                     Crystal-Clear Audio
//                   </div>
//                   <div className="feature-detail">
//                     Hear every detail with balanced bass and studio-quality mids
//                     and highs.
//                   </div>
//                 </div>
//                 <div className="feature-box border-2 border-[#2E2E2E] px-5 py-6 rounded-[10px]">
//                   <div className="feature-name font-outfit uppercase text-lg mb-2">
//                     All-Day Comfort
//                   </div>
//                   <div className="feature-detail">
//                     Lightweight build with plush ear cushions and ergonomic fit.
//                   </div>
//                 </div>
//                 <div className="feature-box border-2 border-[#2E2E2E] px-5 py-6 rounded-[10px]">
//                   <div className="feature-name font-outfit uppercase text-lg mb-2">
//                     40+ Hour Battery Life
//                   </div>
//                   <div className="feature-detail">
//                     Long-lasting performance, wherever you go.
//                   </div>
//                 </div>
//               </div>
//             </section>

//             {/* Section 3 */}
//             <section id="section3" className="min-h-screen pt-[4vw] pb-[4vw]">
//               <h2 className="heading font-outfit font-bold text-center mb-[3vw] text-[clamp(2rem,12.5vw,13.5rem)] text-[#734425] uppercase">
//                 About Us
//               </h2>
//               <div className="content-wrapper flex flex-col md:flex-row gap-12 md:gap-24 items-center">
//                 {/* <video
//                   width={500}
//                   height="auto"
//                   autoPlay
//                   loop
//                   muted
//                   className="radius rounded-[10px] w-full max-w-[500px] shadow-lg"
//                 >
//                   <source src="/images/video.mp4" type="video/mp4" />
//                 </video> */}
//                 <img
//                   src="/images/papercup-machine-4.jpg"
//                   alt="About Us"
//                   className="rounded-[10px] border-[10px] border-white shadow-lg max-w-[500px]"
//                 />
//                 <div className="content max-w-[500px] ml-auto">
//                   <p className="mt-4">
//                     We are happy to present ourselves as one of the largest
//                     paper cup production unit in India. We have a 25 years of
//                     experience behind us, which is hugely supported with a wide
//                     customer base. We can provide complete RTD packaging
//                     solutions for all customer needs.
//                   </p>
//                   <p className="mt-4">
//                     Some of our esteemed customers include Nestle India, Indigo
//                     airline, Vistara airline, Air India airline, Café Coffee
//                     Day, Chaayos, IRCTC , Haldirams, Air Asia etc. We have a
//                     complete profile range to cater to demands of Global
//                     customer requirements as well which has helped us make in
//                     roads to Europe for past year or so.
//                   </p>
//                 </div>
//               </div>
//             </section>

//             {/* Section 4 */}
//             <section id="section4" className="min-h-screen relative">
//               <img
//                 src="/images/cup1.png"
//                 alt="img1"
//                 className="img1 rounded-[10px] border-[10px] border-white shadow-lg absolute max-w-[260px] top-[12%] left-[3%] rotate-[15deg]"
//               />
//               <img
//                 src="/images/cup2.png"
//                 alt="img2"
//                 className="img2 rounded-[10px] border-[10px] border-white shadow-lg absolute max-w-[470px] top-[22%] right-[4%] rotate-[14deg]"
//               />
//               <img
//                 src="/images/cup3.png"
//                 alt="img3"
//                 className="img3 rounded-[10px] border-[10px] border-white shadow-lg absolute max-w-[340px] left-[10%] bottom-[12%] -rotate-[12deg]"
//               />
//             </section>

//             {/* Section 5 */}
//             <section
//               id="section5"
//               className="text-center pt-[4vw] pb-[8vw] min-h-[94vh]"
//             >
//               <h2 className="heading font-outfit font-bold text-[6.5vw] uppercase text-[#734425] mb-6">
//                 Top Picks
//               </h2>
//               <div className="product-section grid grid-cols-3 gap-6 mt-12">
//                 <div className="product flex flex-col items-center justify-end">
//                   <img
//                     src="/images/cup8.png"
//                     alt="green"
//                     className="w-full max-w-[300px] mb-6 drop-shadow-[6px_15px_5px_rgba(0,0,0,0.09)]"
//                   />
//                   <div className="name text-xl font-medium">Rippled</div>
//                   {/* <div className="price text-xl font-bold">₹4,499</div> */}
//                 </div>
//                 <div className="product flex flex-col items-center justify-end">
//                   {/* If image missing, just skip img tag */}
//                   <div className="name text-xl font-medium mb-2">
//                     Plastic Lid for Paper cups
//                   </div>
//                   {/* <div className="price text-xl font-bold">₹7,499</div> */}
//                 </div>
//                 <div className="product flex flex-col items-center justify-end">
//                   <img
//                     src="/images/cup2.png"
//                     alt="black"
//                     className="w-full max-w-[300px] mb-6 drop-shadow-[6px_15px_5px_rgba(0,0,0,0.09)]"
//                   />
//                   <div className="name text-xl font-medium">Single Wall</div>
//                   {/* <div className="price text-xl font-bold">₹11,499</div> */}
//                 </div>
//               </div>
//             </section>
//           </main>

//           <Clients />
//           <Certificates />
//           <div className="w-full flex flex-col items-end relative">
//             {/* <BigText /> */}

//             <div className="bg-white rounded-full w-40 h-40 flex items-center justify-center absolute -bottom-20">
//               <SpinningText className="text-[#734425] ">
//                 learn more • earn more • grow more •
//               </SpinningText>
//             </div>
//           </div>

//           <Footer />
//         </div>
//       </div>
//     </div>
//   );
// }

// function BigText({ slice }) {
//   return (
//     // <section className="min-h-screen w-screen overflow-hidden bg-[#734425] text-white">
//     //   <h2 className="grid w-full gap-[3vw] py-10 text-center font-black uppercase leading-[.7]">
//     //     <div className="text-[20vw]">Design</div>
//     //     <div className="grid gap-[3vw] text-[34vw] md:flex md:justify-center md:text-[10vw]">
//     //       <span className="inline-block">that </span>
//     //       <span className="inline-block max-md:text-[27vw]">makes </span>
//     //       <span className="inline-block max-md:text-[40vw]">you </span>
//     //     </div>
//     //     <div className="text-[27vw]">Smile</div>
//     //   </h2>
//     // </section>
//     <section className="h-[50vh] w-full overflow-hidden bg-[#734425] text-white flex items-center justify-center">
//       <h2 className="grid w-full gap-4 px-4 text-center font-black uppercase leading-[.7]">
//         <div className="text-6xl md:text-8xl">Design</div>
//         <div className="grid gap-2 text-4xl md:flex md:justify-center md:gap-4 md:text-6xl">
//           <span className="inline-block text-5xl md:text-7xl">that </span>
//           <span className="inline-block text-5xl md:text-7xl">makes </span>
//           <span className="inline-block text-5xl md:text-7xl">you </span>
//         </div>
//         <div className="text-4xl md:text-6xl">Smile</div>
//       </h2>
//     </section>
//   );
// }

// app/page.jsx or pages/index.jsx
"use client";

import { useEffect, useRef } from "react";
import { SpinningText } from "@/components/spinning-text";
import Carousel from "./Carousel";
import OurProducts from "./OurProducts";
import Clients from "./Clients";
import Footer from "./Footer";
import Certificates from "./Certificates";

export default function Testing() {
  const smootherRef = useRef(null);
  useEffect(() => {
    // Only run in browser
    if (typeof window !== "undefined") {
      const gsapScript = document.createElement("script");
      gsapScript.src =
        "https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/gsap.min.js";
      gsapScript.onload = () => {
        const scrollTriggerScript = document.createElement("script");
        scrollTriggerScript.src =
          "https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/ScrollTrigger.min.js";
        scrollTriggerScript.onload = () => {
          const scrollSmootherScript = document.createElement("script");
          scrollSmootherScript.src =
            "https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/ScrollSmoother.min.js";
          scrollSmootherScript.onload = () => {
            const splitTextScript = document.createElement("script");
            splitTextScript.src =
              "https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/SplitText.min.js";
            splitTextScript.onload = () => {
              // Your JS code as before, but reference window.gsap instead of gsap
              const gsap = window.gsap;
              const ScrollTrigger = window.ScrollTrigger;
              const ScrollSmoother = window.ScrollSmoother;
              const SplitText = window.SplitText;

              gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

              smootherRef.current = ScrollSmoother.create({
                wrapper: "#smooth-wrapper",
                content: "#smooth-content",
                smooth: 4,
                effects: true,
              });

              const isShortHeight = window.screen.height < 1050;
              ScrollTrigger.matchMedia({
                "(min-width: 991px)": () => {
                  // Desktop animations (existing code)
                  gsap.to("#headphone", {
                    scrollTrigger: {
                      trigger: "#section2",
                      start: "top bottom",
                      end: "center center",
                      scrub: true,
                    },
                    y: "85vh",
                    x: "18vw",
                    width: "32vw",
                    rotate: 90,
                    ease: "power1.inOut",
                    immediateRender: false,
                  });
                  gsap.to("#headphone", {
                    scrollTrigger: {
                      trigger: "#section3",
                      start: "top bottom",
                      end: "bottom bottom",
                      scrub: true,
                    },
                    y: "218vh",
                    x: "0",
                    width: "35vw",
                    rotate: 35,
                    ease: "power1.inOut",
                    immediateRender: false,
                  });
                  gsap.to("#headphone", {
                    scrollTrigger: {
                      trigger: "#section4",
                      start: "top bottom",
                      end: "center center",
                      scrub: true,
                    },
                    y: "308vh",
                    width: "42vw",
                    rotate: 0,
                    ease: "power1.inOut",
                    immediateRender: false,
                  });
                  gsap.to("#headphone", {
                    scrollTrigger: {
                      trigger: "#section5",
                      start: "top bottom",
                      end: "center bottom",
                      scrub: true,
                    },
                    y: isShortHeight ? "360vh" : "344vh",
                    width: "28vw",
                    ease: "power1.inOut",
                    immediateRender: false,
                  });
                  gsap.to("#headphone", {
                    scrollTrigger: {
                      trigger: "#section5",
                      start: "center bottom",
                      end: "bottom bottom",
                      scrub: true,
                    },
                    y: isShortHeight ? "432vh" : "419vh",
                    width: "300px",
                    ease: "power1.inOut",
                    immediateRender: false,
                  });

                  gsap.from("#section2 .content-wrapper", {
                    scrollTrigger: {
                      trigger: "#section2",
                      start: "-50% bottom",
                      end: "center center",
                      scrub: true,
                    },
                    y: "140%",
                    ease: "power1.inOut",
                  });
                  gsap.from("#section3 .heading", {
                    scrollTrigger: {
                      trigger: "#section3",
                      start: "top bottom",
                      end: "center bottom",
                      scrub: true,
                    },
                    y: "140%",
                    ease: "power1.inOut",
                  });
                  gsap.from("#section4 img", {
                    scrollTrigger: {
                      trigger: "#section4",
                      start: "top bottom",
                      end: "center center",
                      scrub: true,
                    },
                    width: 0,
                    opacity: 0,
                    ease: "power1.inOut",
                  });
                  gsap.from("#section6 .content-wrapper", {
                    scrollTrigger: {
                      trigger: "#section6",
                      start: "top bottom",
                      end: "center center",
                      scrub: true,
                    },
                    y: "40%",
                    duration: 2,
                    ease: "power1.inOut",
                  });

                  // hero animation
                  const split = SplitText.create("#section1 .heading", {
                    type: "chars, words, lines",
                    mask: "lines",
                  });

                  gsap.from(split.chars, {
                    yPercent: () => gsap.utils.random(-100, 100),
                    rotation: () => gsap.utils.random(-30, 30),
                    autoAlpha: 0,
                    ease: "back.out(1.5)",
                    stagger: {
                      amount: 0.5,
                      from: "random",
                    },
                    duration: 1.5,
                  });

                  gsap.from("#headphone", {
                    opacity: 0,
                    scale: 0,
                    duration: 1,
                    delay: 1,
                    ease: "power1.inOut",
                  });
                },
                "(max-width: 990px)": () => {
                  // Mobile-friendly animations
                  gsap.to("#headphone", {
                    scrollTrigger: {
                      trigger: "#section2",
                      start: "top bottom",
                      end: "center center",
                      scrub: true,
                    },
                    y: "60vh",
                    x: "0",
                    width: "60vw",
                    rotate: 45,
                    ease: "power1.inOut",
                    immediateRender: false,
                  });

                  gsap.to("#headphone", {
                    scrollTrigger: {
                      trigger: "#section3",
                      start: "top bottom",
                      end: "bottom bottom",
                      scrub: true,
                    },
                    y: "150vh",
                    width: "70vw",
                    rotate: 0,
                    ease: "power1.inOut",
                    immediateRender: false,
                  });

                  // Simplified mobile animations for content
                  gsap.from("#section2 .content-wrapper", {
                    scrollTrigger: {
                      trigger: "#section2",
                      start: "top bottom",
                      end: "center center",
                      scrub: true,
                    },
                    y: "50%",
                    opacity: 0,
                    ease: "power1.inOut",
                  });

                  gsap.from("#section3 .heading", {
                    scrollTrigger: {
                      trigger: "#section3",
                      start: "top bottom",
                      end: "center bottom",
                      scrub: true,
                    },
                    y: "50%",
                    opacity: 0,
                    ease: "power1.inOut",
                  });

                  // Simple fade-in for mobile images
                  gsap.from("#section4 img", {
                    scrollTrigger: {
                      trigger: "#section4",
                      start: "top bottom",
                      end: "center center",
                      scrub: true,
                    },
                    opacity: 0,
                    scale: 0.8,
                    ease: "power1.inOut",
                  });

                  // Mobile hero animation
                  gsap.from("#section1 .heading", {
                    opacity: 0,
                    y: 50,
                    duration: 1.5,
                    ease: "power1.inOut",
                  });

                  gsap.from("#headphone", {
                    opacity: 0,
                    scale: 0,
                    duration: 1,
                    delay: 0.5,
                    ease: "power1.inOut",
                  });
                },
              });
            };
            document.body.appendChild(splitTextScript);
          };
          document.body.appendChild(scrollSmootherScript);
        };
        document.body.appendChild(scrollTriggerScript);
      };
      document.body.appendChild(gsapScript);
    }
    return () => {
      if (smootherRef.current) {
        smootherRef.current.kill();
        smootherRef.current = null;
      }
    };
  }, []);

  return (
    <div className="relative z-0">
      <div id="smooth-wrapper">
        <div
          id="smooth-content"
          className="bg-[#F5ECE4] text-[#2E2E2E] font-dm-sans text-base sm:text-lg leading-[1.5] min-h-screen"
        >
          {/* <Homepage /> */}
          <Carousel />
          <OurProducts />
          <main
            className="w-full max-w-[1440px] mx-auto relative px-4 sm:px-8 lg:px-16 xl:px-20"
            id="main"
          >
            <img
              src="/images/h-cup.png"
              alt=""
              id="headphone"
              className="absolute left-1/2 -translate-x-1/2 top-[2.2%] w-[60vw] sm:w-[50vw] lg:w-[40vw] max-w-[560px] z-10 drop-shadow-[8px_35px_6px_rgba(0,0,0,0.13)]"
              style={{ willChange: "transform" }}
            />

            <section
              id="section1"
              className="h-screen w-full max-w-[90vw] lg:max-w-[60vw] mx-auto flex items-center justify-center text-center px-4"
            >
              <h1 className="heading font-outfit font-bold text-[clamp(2rem,8vw,11.5vw)] lg:text-[11.5vw] leading-[0.85] uppercase text-[#734425] mb-0">
                Paper Cups & Straws
              </h1>
            </section>

            <section
              id="section2"
              className="min-h-screen pt-8 sm:pt-16 lg:pt-[4vw]"
            >
              <div className="content-wrapper max-w-[500px] px-4 sm:px-0">
                <h2 className="heading font-outfit font-bold text-4xl sm:text-6xl lg:text-8xl uppercase text-[#734425] mb-6">
                  Sip sustainably!
                </h2>
                <p className="pb-6 sm:pb-10 text-sm sm:text-base">
                  Our eco-friendly paper cups & straws are designed to serve
                  your favorite brew while caring for the planet. Because great
                  taste should never come at nature&apos;s expense.
                </p>
                <a
                  href="/about"
                  className="btn bg-[#2E2E2E] mt-4 sm:mt-8 text-white px-4 sm:px-5 py-2 font-medium rounded-[10px] text-sm sm:text-base"
                >
                  Know More
                </a>
              </div>
              <div className="feature-wrapper grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-[1.8rem] mt-8 sm:mt-12 lg:mt-[8vw] px-4 sm:px-0">
                <div className="feature-box border-2 border-[#2E2E2E] px-4 sm:px-5 py-4 sm:py-6 rounded-[10px]">
                  <div className="feature-name font-outfit uppercase text-base sm:text-lg mb-2">
                    Eco-Friendly by Design
                  </div>
                  <div className="feature-detail text-sm sm:text-base">
                    Made from biodegradable, food-grade materials that are safe
                    for you and gentle on the planet.
                  </div>
                </div>
                <div className="feature-box border-2 border-[#2E2E2E] px-4 sm:px-5 py-4 sm:py-6 rounded-[10px]">
                  <div className="feature-name font-outfit uppercase text-base sm:text-lg mb-2">
                    Sustainable & Responsible
                  </div>
                  <div className="feature-detail text-sm sm:text-base">
                    A smart alternative to plastic, reducing waste while keeping
                    your beverage experience intact.
                  </div>
                </div>
                <div className="feature-box border-2 border-[#2E2E2E] px-4 sm:px-5 py-4 sm:py-6 rounded-[10px] sm:col-span-2 lg:col-span-1">
                  <div className="feature-name font-outfit uppercase text-base sm:text-lg mb-2">
                    Strong, Stylish & Green
                  </div>
                  <div className="feature-detail text-sm sm:text-base">
                    Durable, spill-proof, and crafted to complement every
                    coffee, chai, or cold brew; without harming nature.
                  </div>
                </div>
              </div>
            </section>

            <section
              id="section3"
              className="min-h-screen pt-8 sm:pt-16 lg:pt-[4vw] pb-8 sm:pb-16 lg:pb-[4vw] px-4 sm:px-0"
            >
              <h2 className="heading font-outfit font-bold text-center mb-8 sm:mb-12 lg:mb-[3vw] text-[clamp(2rem,8vw,13.5rem)] text-[#734425] uppercase">
                About Us
              </h2>
              <div className="content-wrapper flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-24 items-center">
                <img
                  src="/images/papercup-machine-4.jpg"
                  alt="About Us"
                  className="rounded-[10px] border-4 sm:border-[10px] border-white shadow-lg w-full max-w-[500px] order-2 lg:order-1"
                />
                <div className="content max-w-[500px] lg:ml-auto order-1 lg:order-2">
                  <p className="mt-4 text-sm sm:text-base">
                    For over 25 years, WorldStar Packaging Industry has been
                    shaping the way beverages are served with packaging that
                    blends innovation, sustainability, and trust. From gourmet
                    coffee brands to quick-service restaurants and leading
                    airlines, we have earned the confidence of clients who value
                    both quality and responsibility.
                  </p>
                  <p className="mt-4 text-sm sm:text-base">
                    Our journey has always been guided by a simple belief that
                    packaging is more than just a container. It is an extension
                    of the product, the brand, and the experience. Every cup and
                    straw we create is designed to be safe, durable, and
                    stylish, while also being eco-friendly and mindful of
                    tomorrow&apos;s world.
                  </p>
                  <p className="mt-4 text-sm sm:text-base">
                    What began as a vision to provide reliable food-grade
                    packaging has today grown into a legacy of excellence,
                    serving diverse industries with solutions that carry not
                    just beverages, but also the values of care, innovation, and
                    sustainability. At Worldstar, every sip matters and so does
                    the planet.
                  </p>
                </div>
              </div>
            </section>

            <section
              id="section4"
              className="min-h-screen relative px-4 sm:px-0"
            >
              <img
                src="/images/cup1.png"
                alt="img1"
                className="img1 rounded-[10px] border-4 sm:border-[10px] border-white shadow-lg absolute w-[120px] sm:w-[180px] lg:max-w-[260px] top-[5%] sm:top-[12%] left-[2%] sm:left-[3%] rotate-[15deg]"
              />
              <img
                src="/images/cup2.png"
                alt="img2"
                className="img2 rounded-[10px] border-4 sm:border-[10px] border-white shadow-lg absolute w-[200px] sm:w-[300px] lg:max-w-[470px] top-[35%] sm:top-[22%] right-[2%] sm:right-[4%] rotate-[14deg]"
              />
              <img
                src="/images/cup3.png"
                alt="img3"
                className="img3 rounded-[10px] border-4 sm:border-[10px] border-white shadow-lg absolute w-[150px] sm:w-[220px] lg:max-w-[340px] left-[5%] sm:left-[10%] bottom-[5%] sm:bottom-[12%] -rotate-[12deg]"
              />
            </section>

            <section
              id="section5"
              className="text-center pt-8 sm:pt-16 lg:pt-[4vw] pb-16 sm:pb-24 lg:pb-[8vw] min-h-[94vh] px-4 sm:px-0"
            >
              <h2 className="heading font-outfit font-bold text-[clamp(2rem,6.5vw,6.5vw)] uppercase text-[#734425] mb-6">
                Top Picks
              </h2>
              <div className="product-section grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-6 mt-8 sm:mt-18">
                <div className="product flex flex-col items-center justify-end">
                  <img
                    src="/images/cup8.png"
                    alt="green"
                    className="w-full max-w-[200px] sm:max-w-[250px] lg:max-w-[300px] mb-4 sm:mb-6 drop-shadow-[6px_15px_5px_rgba(0,0,0,0.09)]"
                  />
                  <div className="name text-lg sm:text-xl font-medium">
                    Rippled
                  </div>
                </div>
                <div className="product flex flex-col items-center justify-end">
                  <div className="name text-lg sm:text-xl font-medium  text-center">
                    Plastic Lid for Paper cups
                  </div>
                </div>
                <div className="product flex flex-col items-center justify-end sm:col-span-2 lg:col-span-1">
                  <img
                    src="/images/cup2.png"
                    alt="black"
                    className="w-full max-w-[200px] sm:max-w-[250px] lg:max-w-[300px] mb-4 sm:mb-6 drop-shadow-[6px_15px_5px_rgba(0,0,0,0.09)]"
                  />
                  <div className="name text-lg sm:text-xl font-medium">
                    Single Wall
                  </div>
                </div>
              </div>
            </section>
          </main>

          <Clients />
          <Certificates />
          <div className="w-full flex flex-col items-end relative px-4 sm:px-8">
            <div className="bg-white rounded-full w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 flex items-center justify-center absolute -bottom-12 sm:-bottom-16 lg:-bottom-20">
              <SpinningText className="text-[#734425] text-xs sm:text-base">
                learn more • earn more • grow more •
              </SpinningText>
            </div>
          </div>

          {/* <Footer /> */}
        </div>
      </div>
    </div>
  );
}

function BigText({ slice }) {
  return (
    <section className="h-[40vh] sm:h-[50vh] w-full overflow-hidden bg-[#734425] text-white flex items-center justify-center px-4">
      <h2 className="grid w-full gap-2 sm:gap-4 text-center font-black uppercase leading-[.7]">
        <div className="text-4xl sm:text-6xl lg:text-8xl">Design</div>
        <div className="grid gap-1 sm:gap-2 text-2xl sm:flex sm:justify-center lg:gap-4 sm:text-4xl lg:text-6xl">
          <span className="inline-block text-3xl sm:text-5xl lg:text-7xl">
            that{" "}
          </span>
          <span className="inline-block text-3xl sm:text-5xl lg:text-7xl">
            makes{" "}
          </span>
          <span className="inline-block text-3xl sm:text-5xl lg:text-7xl">
            you{" "}
          </span>
        </div>
        <div className="text-2xl sm:text-4xl lg:text-6xl">Smile</div>
      </h2>
    </section>
  );
}
