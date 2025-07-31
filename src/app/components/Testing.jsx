// app/page.jsx or pages/index.jsx
"use client";

import { useEffect } from "react";
import Head from "next/head";
import { SpinningText } from "@/components/spinning-text";
import Carousel from "./Carousel";
import OurProducts from "./OurProducts";

export default function Testing() {
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

              const smoother = ScrollSmoother.create({
                wrapper: "#smooth-wrapper",
                content: "#smooth-content",
                smooth: 4,
                effects: true,
              });

              let isShortHeight = window.screen.height < 1050;
              ScrollTrigger.matchMedia({
                "(min-width: 991px)": function () {
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
                  let split = SplitText.create("#section1 .heading", {
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
      smoother.kill(); // Clean up on unmount
    };
  }, []);

  return (
    <section className="relative z-0">
      {/* <Head>
        <title>Audira</title>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Outfit:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head> */}
      {/* The GSAP wrappers */}
      <div id="smooth-wrapper">
        <div
          id="smooth-content"
          className="bg-[#F5ECE4] text-[#2E2E2E] font-dm-sans text-[18px] leading-[1.5] min-h-screen"
        >
          {/* Header */}
          {/* <header className="w-full max-w-[1440px] fixed z-10 left-1/2 -translate-x-1/2 px-5 py-4">
            <nav className="flex justify-between items-center">
              <img
                src="/images/logo.png"
                alt="logo"
                className="max-w-[132px]"
              />
              <a
                href="#"
                className="btn bg-[#C26819] text-white px-5 py-2 font-medium rounded-[10px]"
              >
                Buy Now
              </a>
            </nav>
          </header> */}
          <Carousel />
          <OurProducts />
          <main
            className="w-[calc(100vw-10rem)] max-w-[1440px] mx-auto relative"
            id="main"
          >
            {/* Floating Headphone Image */}
            <img
              src="/images/cup7.png"
              alt=""
              id="headphone"
              className="absolute left-1/2 -translate-x-1/2 top-[2.2%] w-[40vw] max-w-[660px] z-10 drop-shadow-[8px_35px_6px_rgba(0,0,0,0.13)]"
              style={{ willChange: "transform" }}
            />

            {/* Section 1 */}
            <section
              id="section1"
              className="h-screen w-[60vw] mx-auto flex items-center justify-center text-center"
            >
              <h1 className="heading font-outfit font-bold text-[11.5vw] leading-[0.85] uppercase text-[#734425] mb-0">
                Paper Cups & Straws
              </h1>
            </section>

            {/* Section 2 */}
            <section id="section2" className="min-h-screen pt-[4vw]">
              <div className="content-wrapper max-w-[500px]">
                <h2 className="heading font-outfit font-bold text-8xl uppercase text-[#734425] mb-6">
                  Eco - Friendly
                </h2>
                <p className="pb-10">
                  Dispersion barrier cups are easily eco-friendly and easily
                  compos able. Worldstar Packaging Industry is a leading
                  manufacturer and exporter of the Dispersion barrier cups in
                  custom sizes.
                </p>
                <a
                  href="#"
                  className="btn bg-[#2E2E2E] mt-8 text-white px-5 py-2 font-medium rounded-[10px]"
                >
                  Buy Now
                </a>
              </div>
              <div className="feature-wrapper grid grid-cols-3 gap-[1.8rem] mt-[8vw]">
                <div className="feature-box border-2 border-[#2E2E2E] px-5 py-6 rounded-[10px]">
                  <div className="feature-name font-outfit uppercase text-lg mb-2">
                    Crystal-Clear Audio
                  </div>
                  <div className="feature-detail">
                    Hear every detail with balanced bass and studio-quality mids
                    and highs.
                  </div>
                </div>
                <div className="feature-box border-2 border-[#2E2E2E] px-5 py-6 rounded-[10px]">
                  <div className="feature-name font-outfit uppercase text-lg mb-2">
                    All-Day Comfort
                  </div>
                  <div className="feature-detail">
                    Lightweight build with plush ear cushions and ergonomic fit.
                  </div>
                </div>
                <div className="feature-box border-2 border-[#2E2E2E] px-5 py-6 rounded-[10px]">
                  <div className="feature-name font-outfit uppercase text-lg mb-2">
                    40+ Hour Battery Life
                  </div>
                  <div className="feature-detail">
                    Long-lasting performance, wherever you go.
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section id="section3" className="min-h-screen pt-[4vw] pb-[4vw]">
              <h2 className="heading font-outfit font-bold text-center mb-[3vw] text-[clamp(2rem,12.5vw,13.5rem)] text-[#734425] uppercase">
                About Us
              </h2>
              <div className="content-wrapper flex flex-col md:flex-row gap-12 md:gap-24 items-center">
                {/* <video
                  width={500}
                  height="auto"
                  autoPlay
                  loop
                  muted
                  className="radius rounded-[10px] w-full max-w-[500px] shadow-lg"
                >
                  <source src="/images/video.mp4" type="video/mp4" />
                </video> */}
                <img
                  src="/images/papercup-machine-4.jpg"
                  alt="About Us"
                  className="rounded-[10px] border-[10px] border-white shadow-lg max-w-[500px]"
                />
                <div className="content max-w-[500px] ml-auto">
                  <p className="mt-4">
                    We are happy to present ourselves as one of the largest
                    paper cup production unit in India. We have a 25 years of
                    experience behind us, which is hugely supported with a wide
                    customer base. We can provide complete RTD packaging
                    solutions for all customer needs.
                  </p>
                  <p className="mt-4">
                    Some of our esteemed customers include Nestle India, Indigo
                    airline, Vistara airline, Air India airline, Café Coffee
                    Day, Chaayos, IRCTC , Haldirams, Air Asia etc. We have a
                    complete profile range to cater to demands of Global
                    customer requirements as well which has helped us make in
                    roads to Europe for past year or so.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section id="section4" className="min-h-screen relative">
              <img
                src="/images/cup1.png"
                alt="img1"
                className="img1 rounded-[10px] border-[10px] border-white shadow-lg absolute max-w-[260px] top-[12%] left-[3%] rotate-[15deg]"
              />
              <img
                src="/images/cup2.png"
                alt="img2"
                className="img2 rounded-[10px] border-[10px] border-white shadow-lg absolute max-w-[470px] top-[22%] right-[4%] rotate-[14deg]"
              />
              <img
                src="/images/cup3.png"
                alt="img3"
                className="img3 rounded-[10px] border-[10px] border-white shadow-lg absolute max-w-[340px] left-[10%] bottom-[12%] -rotate-[12deg]"
              />
            </section>

            {/* Section 5 */}
            <section
              id="section5"
              className="text-center pt-[4vw] pb-[8vw] min-h-[94vh]"
            >
              <h2 className="heading font-outfit font-bold text-[6.5vw] uppercase text-[#734425] mb-6">
                Top Picks
              </h2>
              <div className="product-section grid grid-cols-3 gap-6 mt-12">
                <div className="product flex flex-col items-center justify-end">
                  <img
                    src="/images/cup8.png"
                    alt="green"
                    className="w-full max-w-[300px] mb-6 drop-shadow-[6px_15px_5px_rgba(0,0,0,0.09)]"
                  />
                  <div className="name text-xl font-medium">Rippled</div>
                  {/* <div className="price text-xl font-bold">₹4,499</div> */}
                </div>
                <div className="product flex flex-col items-center justify-end">
                  {/* If image missing, just skip img tag */}
                  <div className="name text-xl font-medium mb-2">
                    Plastic Lid for Paper cups
                  </div>
                  {/* <div className="price text-xl font-bold">₹7,499</div> */}
                </div>
                <div className="product flex flex-col items-center justify-end">
                  <img
                    src="/images/cup2.png"
                    alt="black"
                    className="w-full max-w-[300px] mb-6 drop-shadow-[6px_15px_5px_rgba(0,0,0,0.09)]"
                  />
                  <div className="name text-xl font-medium">Single Wall</div>
                  {/* <div className="price text-xl font-bold">₹11,499</div> */}
                </div>
              </div>
            </section>
          </main>

          {/* Section 6 */}
          <section
            id="section6"
            className="w-full flex items-start gap-[5vw] pb-[8vw] max-w-[1440px] mx-auto"
          >
            <img
              src="/images/img4.jpg"
              alt=""
              className="rounded-[10px] shadow-lg max-w-sm"
            />
            <div className="content-wrapper">
              <h2 className="heading font-outfit font-bold text-[6.5vw] uppercase text-[#734425] mb-6">
                Sizes Available
              </h2>
              <div className="feature-wrapper grid grid-cols-6 gap-[1.8rem] mt-[8vw]">
                <div className="feature-box border-2 border-[#2E2E2E] px-5 py-6 rounded-[10px]">
                  <div className="feature-name font-outfit uppercase text-lg mb-2">
                    3 OZ PAPER CUPS
                  </div>
                </div>
                <div className="feature-box border-2 border-[#2E2E2E] px-5 py-6 rounded-[10px]">
                  <div className="feature-name font-outfit uppercase text-lg mb-2">
                    5 OZ PAPER CUPS
                  </div>
                </div>
                <div className="feature-box border-2 border-[#2E2E2E] px-5 py-6 rounded-[10px]">
                  <div className="feature-name font-outfit uppercase text-lg mb-2">
                    7 OZ PAPER CUPS
                  </div>
                </div>
                <div className="feature-box border-2 border-[#2E2E2E] px-5 py-6 rounded-[10px]">
                  <div className="feature-name font-outfit uppercase text-lg mb-2">
                    8 OZ PAPER CUPS
                  </div>
                </div>
                <div className="feature-box border-2 border-[#2E2E2E] px-5 py-6 rounded-[10px]">
                  <div className="feature-name font-outfit uppercase text-lg mb-2">
                    12 OZ PAPER CUPS
                  </div>
                </div>
                <div className="feature-box border-2 border-[#2E2E2E] px-5 py-6 rounded-[10px]">
                  <div className="feature-name font-outfit uppercase text-lg mb-2">
                    16 OZ PAPER CUPS
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="w-full flex flex-col items-end relative">
            <BigText />

            <div className="bg-white rounded-full w-40 h-40 flex items-center justify-center absolute -bottom-20">
              <SpinningText className="text-[#734425] ">
                learn more • earn more • grow more •
              </SpinningText>
            </div>
          </div>

          {/* Footer */}
          <footer className="w-full flex justify-between items-center py-6 border-t-2 border-[#734425] max-w-[1440px] mx-auto px-5">
            <img src="/images/logo.png" className="max-w-[132px]" alt="logo" />
            <div className="social flex items-center gap-4">
              <a href="#">
                <img src="/images/fb.png" alt="fb" />
              </a>
              <a href="#">
                <img src="/images/insta.png" alt="insta" />
              </a>
            </div>
          </footer>
        </div>
      </div>
    </section>
  );
}

function BigText({ slice }) {
  return (
    <section className="min-h-screen w-screen overflow-hidden bg-[#734425] text-white">
      <h2 className="grid w-full gap-[3vw] py-10 text-center font-black uppercase leading-[.7]">
        <div className="text-[20vw]">Design</div>
        <div className="grid gap-[3vw] text-[34vw] md:flex md:justify-center md:text-[10vw]">
          <span className="inline-block">that </span>
          <span className="inline-block max-md:text-[27vw]">makes </span>
          <span className="inline-block max-md:text-[40vw]">you </span>
        </div>
        <div className="text-[27vw]">Smile</div>
      </h2>
    </section>
  );
}
