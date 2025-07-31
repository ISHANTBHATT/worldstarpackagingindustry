import { useEffect } from "react";
import Head from "next/head";
import { FaPhone, FaEnvelope } from "react-icons/fa6";
import { FaFacebookSquare, FaYoutubeSquare } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollSmoother } from "gsap/dist/ScrollSmoother";
import { Pacifico } from "next/font/google";
// import SplitType from "split-type";
const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
  display: "swap", // Optional: improves performance
});
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function Test() {
  useEffect(() => {
    ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1,
      effects: true,
    });

    gsap.from("header", { opacity: 0, y: 20, duration: 0.3, delay: 1 });
    gsap.from("h1", { y: -650, duration: 0.5 });
    gsap.from(".scoops", {
      opacity: 0,
      y: 250,
      scale: 0.5,
      duration: 0.4,
      delay: 0.5,
    });
    gsap.from(".floating-img", {
      opacity: 0,
      scale: 0,
      delay: 1.5,
      ease: "bounce.out",
    });

    document.querySelectorAll(".pinned-wrapper").forEach((panel) => {
      ScrollTrigger.create({
        trigger: panel,
        start: "top top",
        end: "+=100%",
        pin: true,
        pinSpacing: false,
      });
    });

    document.querySelectorAll(".product-wrapper").forEach((wrapper) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapper,
          start: "10% 100%",
          end: "90% bottom",
          scrub: true,
        },
      });
      tl.from(
        wrapper.querySelector(".product-img"),
        { rotate: -40, opacity: 0.5, duration: 2 },
        "<+0.2"
      )
        .from(
          wrapper.querySelector(".content"),
          { y: 600, duration: 1.5 },
          "<+0.5"
        )
        .from(
          wrapper.querySelector(".product-slices"),
          { scale: 0, duration: 1.2 },
          "<+1"
        );
    });

    // const split = new SplitType(".text-wrapper .text", { types: "words" });
    // gsap.from(split.words, {
    //   scrollTrigger: {
    //     trigger: ".text-wrapper",
    //     start: "top 80%",
    //     end: "120% bottom",
    //     scrub: true,
    //   },
    //   opacity: 0,
    //   y: 40,
    //   stagger: 0.08,
    //   ease: "power2.out"
    // });

    gsap.from("footer", {
      scrollTrigger: {
        trigger: "footer",
        start: "10% 100%",
        end: "80% 100%",
        scrub: 1,
      },
      y: 120,
      duration: 2,
      ease: "power1.out",
    });
  }, []);

  return (
    <>
      <Head>
        <title>Creamio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div id="smooth-wrapper" className="bg-[#FFF6E6] min-h-screen">
        <div id="smooth-content">
          {/* HEADER */}
          {/* <header className="max-w-[1600px] mx-auto flex items-center justify-between py-5 px-10">
            <img
              src="/images/logo.png"
              alt="Creamio-logo"
              className="max-w-[152px]"
            />
            <nav className="bg-white rounded-full py-2 px-4 shadow-md">
              <ul className="flex items-center gap-4 list-none">
                <li>
                  <a
                    className="rounded-full py-2 px-6 text-[#fff] bg-[#7D2501] transition hover:bg-[#7D250110]"
                    href="#"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    className="rounded-full py-2 px-6 text-[#2C2C2C] transition hover:bg-[#7D250110]"
                    href="#"
                  >
                    Flavors
                  </a>
                </li>
                <li>
                  <a
                    className="rounded-full py-2 px-6 text-[#2C2C2C] transition hover:bg-[#7D250110]"
                    href="#"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    className="rounded-full py-2 px-6 text-[#2C2C2C] transition hover:bg-[#7D250110]"
                    href="#"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
            <div className="flex gap-3 items-center">
              <a href="#">
                <svg width="46" height="47" viewBox="0 0 46 47" fill="none">
                  <rect
                    x="0.75"
                    y="1.25"
                    width="44.5"
                    height="44.5"
                    rx="22.25"
                    stroke="#7D2501"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M26.9137 17C25.2103 17 23.7395 17.9975 23.0003 19.4525C22.2612 17.9975 20.7903 17 19.087 17C16.6453 17 14.667 19.0475 14.667 21.5675C14.667 24.0875 16.1812 26.3975 18.1378 28.295C20.0945 30.1925 23.0003 32 23.0003 32C23.0003 32 25.812 30.2225 27.8628 28.295C30.0503 26.24 31.3337 24.095 31.3337 21.5675C31.3337 19.04 29.3553 17 26.9137 17Z"
                    stroke="#7D2501"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a href="#">
                <svg width="46" height="47" viewBox="0 0 46 47" fill="none">
                  <rect
                    x="0.75"
                    y="1.25"
                    width="44.5"
                    height="44.5"
                    rx="22.25"
                    stroke="#7D2501"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M19 19.5V18.5C19 17.4391 19.4214 16.4217 20.1716 15.6716C20.9217 14.9214 21.9391 14.5 23 14.5C24.0609 14.5 25.0783 14.9214 25.8284 15.6716C26.5786 16.4217 27 17.4391 27 18.5V19.5M26 25.5V23.5M20 25.5V23.5"
                    stroke="#7D2501"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M15 23.5C15 21.614 15 20.672 15.586 20.086C16.172 19.5 17.114 19.5 19 19.5H27C28.886 19.5 29.828 19.5 30.414 20.086C31 20.672 31 21.614 31 23.5V24.5C31 28.271 31 30.157 29.828 31.328C28.656 32.499 26.771 32.5 23 32.5C19.229 32.5 17.343 32.5 16.172 31.328C15.001 30.156 15 28.271 15 24.5V23.5Z"
                    stroke="#7D2501"
                    strokeWidth="1.5"
                  />
                </svg>
              </a>
            </div>
          </header> */}

          {/* HERO SECTION */}
          <main>
            <section className="hero-wrapper pinned-wrapper max-w-[1600px] mx-auto min-h-[calc(100vh-100px)] flex flex-col items-center justify-center relative text-center">
              {/* <h1 className="inline-flex flex-col font-Pacifico font-normal leading-[0.75] mb-[20rem]">
                <span className="fill-text text-[#7D2501] text-[clamp(5rem,8.4vw,10rem)] ml-10">
                  Scoop
                </span>
                <span className="strok-text text-[clamp(7rem,10.4vw,12.5rem)] text-[#FFF6E6] relative drop-shadow-[0_8px_0_#7d2501]">
                  Happiness
                </span>
              </h1>
              <img
                src="/images/scoops.png"
                alt=""
                className="scoops max-w-[1000px] w-full mx-auto absolute z-[-1] bottom-0"
              />
              <img
                src="/images/strawberry-pc.png"
                alt=""
                className="floating-img img1 max-w-[5.6vw] absolute top-[15%] right-[28%]"
              />
              <img
                src="/images/pistachio-pc.png"
                alt=""
                className="floating-img img2 max-w-[9vw] absolute left-[7%] top-[44%]"
              />
              <img
                src="/images/caramel-pc.png"
                alt=""
                className="floating-img img3 max-w-[8vw] absolute right-[8%] top-[54%]"
              /> */}
            </section>

            {/* STRAWBERRY PRODUCT */}
            <section className="product-wrapper pinned-wrapper strawberry-product min-h-screen flex items-center px-10 relative bg-[#FF7286]">
              <div className="content-wrapper flex items-center justify-between gap-8 max-w-[1600px] mx-auto text-white w-full relative z-10">
                <div className="img-wrapper basis-[65%] text-center relative flex items-center justify-center">
                  <img
                    src="/images/cup1.png"
                    alt=""
                    className="product-img rotate-[30deg] mr-32 relative z-10 max-w-[21vw] w-full"
                  />
                  <img
                    src="/images/strawberry-slices.png"
                    alt=""
                    className="product-slices absolute left-[15%] bottom-[10%] z-[1] max-w-[28vw]"
                  />
                </div>
                <div className="content basis-[35%] min-w-[400px]">
                  <div
                    className={`title font-Pacifico text-[clamp(3rem,5vw,5.5rem)] leading-[1.15] font-normal ${pacifico.className}`}
                  >
                    Strawberry Bliss
                  </div>
                  <div className="desc text-xl leading-[1.5] my-6">
                    Juicy strawberry scoops topped with a swirl of sweet
                    delight.
                  </div>
                  <a
                    href=""
                    className="btn bg-white text-[#2C2C2C] inline-block rounded-full font-medium text-xl py-2 px-8 no-underline hover:shadow-lg hover:text-[#FD5F76] transition"
                  >
                    Taste it
                  </a>
                </div>
              </div>
              <div className="shape absolute bottom-0 left-0 w-full z-0 flex items-end">
                <svg
                  width="100%"
                  height="auto"
                  viewBox="0 0 1920 308"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_830_18)">
                    <path
                      d="M529.117 95.3194C586.648 126.299 641.847 137.559 705.556 118.975C744.748 107.008 782.361 87.5448 817.292 66.3673C865.091 37.4363 921.58 26.6709 977.131 26.4601C978.513 26.4523 979.895 26.4445 981.319 26.4364C985.764 26.417 990.208 26.4093 994.653 26.4079C995.79 26.4072 995.79 26.4072 996.95 26.4065C1020.72 26.3984 1044.18 26.9009 1067.78 30.0217C1069.25 30.2089 1070.73 30.3956 1072.21 30.582C1124.17 37.2362 1173.45 51.704 1222.87 68.6156C1286.73 90.4614 1351.65 110.097 1418.89 117.863C1419.8 117.977 1420.72 118.092 1421.66 118.21C1450.82 121.435 1482.2 120.314 1511.11 115.639C1512.42 115.436 1513.72 115.233 1515.07 115.023C1564.55 107.171 1612.67 95.541 1657.78 73.3863C1658.53 73.0159 1659.29 72.6454 1660.06 72.2638C1674.85 64.9954 1689.62 57.7137 1704.11 49.8797C1711.51 45.8936 1719.04 42.3051 1726.74 38.917C1728.03 38.3485 1729.32 37.78 1730.64 37.1943C1757.31 25.5769 1784.42 17.0236 1813.33 13.343C1814.08 13.2463 1814.83 13.1497 1815.6 13.0501C1821.77 12.3049 1827.86 12.0219 1834.08 11.9661C1835.08 11.9554 1836.09 11.9446 1837.12 11.9336C1840.37 11.906 1843.62 11.892 1846.88 11.8836C1847.98 11.8803 1849.09 11.877 1850.24 11.8736C1874.25 11.8575 1896.63 14.1675 1920 20.0144C1920 115.05 1920 210.085 1920 308C1286.4 308 652.8 308 0 308C0 208.195 0 108.389 0 5.55956C54.1855 1.59191 54.1855 1.59191 65.4731 1.22484C68.0399 1.13998 70.6064 1.04574 73.1727 0.946861C169.603 -2.74157 268.623 1.5337 529.117 95.3194Z"
                      fill="#FD5F76"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_830_18">
                      <rect width="100%" height="308" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </section>

            {/* PISTACHIO PRODUCT */}
            <section className="product-wrapper pinned-wrapper pistachio-product min-h-screen flex items-center px-10 relative bg-[#6F4E37]">
              <div className="content-wrapper flex items-center justify-between gap-8 max-w-[1600px] mx-auto text-white w-full relative z-10">
                <div className="img-wrapper basis-[65%] text-center relative flex items-center justify-center">
                  <img
                    src="/images/cup6.png"
                    alt=""
                    className="product-img rotate-[30deg] mr-32 relative z-10 max-w-[21vw] w-full"
                  />
                  <img
                    src="/images/bg.png"
                    alt=""
                    className="product-slices absolute left-[20%] bottom-[0%] z-[1] max-w-[28vw]"
                  />
                </div>
                <div className="content basis-[35%] min-w-[400px]">
                  <div
                    className={`title font-Pacifico text-[clamp(3rem,5vw,5.5rem)] leading-[1.15] font-normal ${pacifico.className}`}
                  >
                    Pistachio Delight
                  </div>
                  <div className="desc text-xl leading-[1.5] my-6">
                    Creamy pistachio magic with a sprinkle of nutty crunch.
                  </div>
                  <a
                    href=""
                    className="btn bg-white text-[#2C2C2C] inline-block rounded-full font-medium text-xl py-2 px-8 no-underline hover:shadow-lg hover:text-[#99B527] transition"
                  >
                    Taste it
                  </a>
                </div>
              </div>
              <div className="shape absolute bottom-0 left-0 w-full z-0 flex items-end">
                <svg
                  width="100%"
                  height="auto"
                  viewBox="0 0 1920 308"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_830_18)">
                    <path
                      d="M529.117 95.3194C586.648 126.299 641.847 137.559 705.556 118.975C744.748 107.008 782.361 87.5448 817.292 66.3673C865.091 37.4363 921.58 26.6709 977.131 26.4601C978.513 26.4523 979.895 26.4445 981.319 26.4364C985.764 26.417 990.208 26.4093 994.653 26.4079C995.79 26.4072 995.79 26.4072 996.95 26.4065C1020.72 26.3984 1044.18 26.9009 1067.78 30.0217C1069.25 30.2089 1070.73 30.3956 1072.21 30.582C1124.17 37.2362 1173.45 51.704 1222.87 68.6156C1286.73 90.4614 1351.65 110.097 1418.89 117.863C1419.8 117.977 1420.72 118.092 1421.66 118.21C1450.82 121.435 1482.2 120.314 1511.11 115.639C1512.42 115.436 1513.72 115.233 1515.07 115.023C1564.55 107.171 1612.67 95.541 1657.78 73.3863C1658.53 73.0159 1659.29 72.6454 1660.06 72.2638C1674.85 64.9954 1689.62 57.7137 1704.11 49.8797C1711.51 45.8936 1719.04 42.3051 1726.74 38.917C1728.03 38.3485 1729.32 37.78 1730.64 37.1943C1757.31 25.5769 1784.42 17.0236 1813.33 13.343C1814.08 13.2463 1814.83 13.1497 1815.6 13.0501C1821.77 12.3049 1827.86 12.0219 1834.08 11.9661C1835.08 11.9554 1836.09 11.9446 1837.12 11.9336C1840.37 11.906 1843.62 11.892 1846.88 11.8836C1847.98 11.8803 1849.09 11.877 1850.24 11.8736C1874.25 11.8575 1896.63 14.1675 1920 20.0144C1920 115.05 1920 210.085 1920 308C1286.4 308 652.8 308 0 308C0 208.195 0 108.389 0 5.55956C54.1855 1.59191 54.1855 1.59191 65.4731 1.22484C68.0399 1.13998 70.6064 1.04574 73.1727 0.946861C169.603 -2.74157 268.623 1.5337 529.117 95.3194Z"
                      fill="#593E2C"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_830_18">
                      <rect width="100%" height="308" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </section>

            {/* CARAMEL PRODUCT */}
            <section className="product-wrapper caramel-product min-h-screen flex items-center px-10 relative bg-[#FF9F23]">
              <div className="content-wrapper flex items-center justify-between gap-8 max-w-[1600px] mx-auto text-white w-full relative z-10">
                <div className="img-wrapper basis-[65%] text-center relative flex items-center justify-center">
                  <img
                    src="/images/cup5.png"
                    alt=""
                    className="product-img rotate-[30deg] mr-32 relative z-10 max-w-[21vw] w-full"
                  />
                  <img
                    src="/images/caramel-slices.png"
                    alt=""
                    className="product-slices absolute left-[20%] bottom-[0%] z-[1] max-w-[28vw]"
                  />
                </div>
                <div className="content basis-[35%] min-w-[400px]">
                  <div
                    className={`title font-Pacifico text-[clamp(3rem,5vw,5.5rem)] leading-[1.15] font-normal ${pacifico.className}`}
                  >
                    Caramel Indulgence
                  </div>
                  <div className="desc text-xl leading-[1.5] my-6">
                    Smooth caramel ice cream dripping with golden temptation.
                  </div>
                  <a
                    href=""
                    className="btn bg-white text-[#2C2C2C] inline-block rounded-full font-medium text-xl py-2 px-8 no-underline hover:shadow-lg hover:text-[#F58F0B] transition"
                  >
                    Taste it
                  </a>
                </div>
              </div>
              <div className="shape absolute bottom-0 left-0 w-full z-0 flex items-end">
                <svg
                  width="100%"
                  height="auto"
                  viewBox="0 0 1920 308"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_830_18)">
                    <path
                      d="M529.117 95.3194C586.648 126.299 641.847 137.559 705.556 118.975C744.748 107.008 782.361 87.5448 817.292 66.3673C865.091 37.4363 921.58 26.6709 977.131 26.4601C978.513 26.4523 979.895 26.4445 981.319 26.4364C985.764 26.417 990.208 26.4093 994.653 26.4079C995.79 26.4072 995.79 26.4072 996.95 26.4065C1020.72 26.3984 1044.18 26.9009 1067.78 30.0217C1069.25 30.2089 1070.73 30.3956 1072.21 30.582C1124.17 37.2362 1173.45 51.704 1222.87 68.6156C1286.73 90.4614 1351.65 110.097 1418.89 117.863C1419.8 117.977 1420.72 118.092 1421.66 118.21C1450.82 121.435 1482.2 120.314 1511.11 115.639C1512.42 115.436 1513.72 115.233 1515.07 115.023C1564.55 107.171 1612.67 95.541 1657.78 73.3863C1658.53 73.0159 1659.29 72.6454 1660.06 72.2638C1674.85 64.9954 1689.62 57.7137 1704.11 49.8797C1711.51 45.8936 1719.04 42.3051 1726.74 38.917C1728.03 38.3485 1729.32 37.78 1730.64 37.1943C1757.31 25.5769 1784.42 17.0236 1813.33 13.343C1814.08 13.2463 1814.83 13.1497 1815.6 13.0501C1821.77 12.3049 1827.86 12.0219 1834.08 11.9661C1835.08 11.9554 1836.09 11.9446 1837.12 11.9336C1840.37 11.906 1843.62 11.892 1846.88 11.8836C1847.98 11.8803 1849.09 11.877 1850.24 11.8736C1874.25 11.8575 1896.63 14.1675 1920 20.0144C1920 115.05 1920 210.085 1920 308C1286.4 308 652.8 308 0 308C0 208.195 0 108.389 0 5.55956C54.1855 1.59191 54.1855 1.59191 65.4731 1.22484C68.0399 1.13998 70.6064 1.04574 73.1727 0.946861C169.603 -2.74157 268.623 1.5337 529.117 95.3194Z"
                      fill="#F58F0B"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_830_18">
                      <rect width="100%" height="308" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </section>

            {/* TEXT SECTION */}
            {/* <section className="text-wrapper max-w-[1600px] mx-auto py-32 px-10">
              <div className="text font-Pacifico text-4xl md:text-5xl lg:text-6xl text-center text-[#FFF6E6] relative drop-shadow-[0_5px_0_#7d2501]">
                From creamy scoops to crunchy swirls, every bite of Creamio is
                crafted to turn simple moments into sweet memories — taste the
                joy, share the love.
              </div>
            </section> */}
          </main>

          {/* FOOTER */}
          <footer className="relative text-white">
            <div className="shape flex items-end mb-[-2px]">
              <svg
                width="100%"
                height="auto"
                viewBox="0 0 2088 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_837_23)">
                  <path
                    d="M275.254 -0.203178C276.964 -0.211728 276.964 -0.211728 278.708 -0.220451C281.112 -0.229839 283.516 -0.23641 285.921 -0.240287C289.501 -0.249889 293.082 -0.280929 296.662 -0.312553C365.652 -0.629661 430.999 21.4684 485.09 64.2265C495.756 72.6421 506.682 80.4865 518 87.9999C518.71 88.4753 519.42 88.9506 520.151 89.4404C531.773 97.2102 543.775 104.225 556 111C556.781 111.437 557.561 111.874 558.366 112.324C620.735 147.07 696.245 162.588 767 151C768.824 150.702 768.824 150.702 770.686 150.398C823.327 141.511 871.96 121.23 918.517 95.6381C975.426 64.3858 1039.47 36.1122 1105.63 35.7968C1106.62 35.7898 1107.61 35.7828 1108.62 35.7756C1111.79 35.7582 1114.96 35.7517 1118.12 35.7499C1119.21 35.7493 1120.29 35.7486 1121.4 35.7479C1136.83 35.7632 1151.81 36.0905 1167 38.9999C1167.96 39.1716 1168.91 39.3432 1169.89 39.52C1224.53 49.432 1272.01 74.3232 1316.49 106.723C1346.15 128.317 1377.2 147.523 1410 164C1410.81 164.411 1411.62 164.822 1412.46 165.245C1437.84 177.991 1464.98 187.314 1493 192C1493.7 192.119 1494.4 192.237 1495.12 192.359C1536.32 199.014 1576.58 189.171 1613.05 170.017C1615 169 1616.96 168.01 1618.93 167.023C1633.69 159.52 1647.51 150.437 1661.44 141.519C1687.15 125.07 1713.07 109.288 1740.47 95.7829C1747.61 92.246 1754.59 88.4487 1761.57 84.6059C1770.14 79.8959 1778.8 75.37 1787.48 70.871C1790.95 69.0759 1794.39 67.2597 1797.83 65.4101C1835.53 45.1301 1875.24 29.487 1918.56 29.6874C1919.4 29.6896 1920.24 29.6918 1921.1 29.694C1933.95 29.7469 1946.41 30.2459 1959 32.9999C1959.93 33.1986 1960.86 33.3973 1961.81 33.602C1985.24 38.747 2007.21 47.0869 2029 56.9999C2029.82 57.367 2030.64 57.7341 2031.48 58.1123C2051.14 66.9381 2069.44 78.0848 2088 88.9999C2088 306.14 2088 523.28 2088 747C1398.96 747 709.92 747 0 747C0 527.55 0 308.1 0 81.9999C9.27246 77.0546 18.4126 72.248 27.9375 67.8749C29.1293 67.3264 30.3211 66.7778 31.5491 66.2126C35.3608 64.4633 39.1799 62.7307 43 60.9999C43.6286 60.7142 44.2572 60.4285 44.9048 60.1342C110.193 30.4706 179.355 7.91533 251 0.999947C252.317 0.872224 252.317 0.872224 253.661 0.741921C260.869 0.0862765 268.018 -0.174067 275.254 -0.203178Z"
                    fill="#7C2400"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_837_23">
                    <rect width="2088" height="200" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="main-row bg-[#7D2501]">
              <div className="row max-w-[1600px] mx-auto py-16 px-10 grid grid-cols-4 gap-8">
                <div className="col">
                  <img
                    src="/images/logo-ft.png"
                    alt="Creamio-logo"
                    className="logo"
                  />
                  <div className="tagline font-medium mt-2">Taste the Joy!</div>
                </div>
                <div className="col">
                  <div className="menu-title text-xl mb-4 font-medium">
                    Quick Links
                  </div>
                  <div className="menu">
                    <ul className="list-none">
                      <li>
                        <a
                          href=""
                          className="text-white font-light block my-2 hover:opacity-70"
                        >
                          Home
                        </a>
                      </li>
                      <li>
                        <a
                          href=""
                          className="text-white font-light block my-2 hover:opacity-70"
                        >
                          Flavors
                        </a>
                      </li>
                      <li>
                        <a
                          href=""
                          className="text-white font-light block my-2 hover:opacity-70"
                        >
                          About
                        </a>
                      </li>
                      <li>
                        <a
                          href=""
                          className="text-white font-light block my-2 hover:opacity-70"
                        >
                          Contact
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col">
                  <div className="menu-title text-xl mb-4 font-medium">
                    Get in Touch
                  </div>
                  <div className="menu">
                    <ul className="list-none">
                      <li className="flex items-center gap-2 my-2">
                        <FaPhone />
                        <a href="" className="text-white font-light">
                          +1 213 564 0434
                        </a>
                      </li>
                      <li className="flex items-center gap-2 my-2">
                        <FaEnvelope />
                        <a href="" className="text-white font-light">
                          info@creamio.com
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col">
                  <div className="menu-title text-xl mb-4 font-medium">
                    Follow us
                  </div>
                  <div className="social-links flex gap-4">
                    <a href="">
                      <FaFacebookSquare className="text-2xl" />
                    </a>
                    <a href="">
                      <FaYoutubeSquare className="text-2xl" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="copyright text-center text-base font-light py-8 border-t border-white/60 max-w-[1600px] mx-auto">
                © 2025 Creamio. All rights reserved.
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
