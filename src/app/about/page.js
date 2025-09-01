// import Image from "next/image";
// // import { ArrowLeft, ArrowRight } from "lucide-react";
// import { CheckCircle2, LineChart } from "lucide-react";
// import { cn } from "@/lib/utils";
// export default function Page() {
//   return (
//     <div className="min-h-screen bg-[#5FBBB5] text-white">
//       {/* Navigation */}
//       {/* <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
//         <div className="max-w-7xl mx-auto px-6 py-4">
//           <div className="flex items-center justify-between">
//             <div className="text-xl font-light tracking-wider">CASTELLI</div>
//             <div className="hidden md:flex items-center space-x-8 text-sm font-light">
//               <a href="#" className="hover:text-gray-300 transition-colors">
//                 ABOUT US
//               </a>
//               <a href="#" className="hover:text-gray-300 transition-colors">
//                 COLLECTION
//               </a>
//               <a href="#" className="hover:text-gray-300 transition-colors">
//                 SERVICES
//               </a>
//               <a href="#" className="hover:text-gray-300 transition-colors">
//                 CONTACT US
//               </a>
//             </div>
//             <div className="flex items-center space-x-4">
//               <ArrowLeft className="w-5 h-5 cursor-pointer hover:text-gray-300" />
//               <ArrowRight className="w-5 h-5 cursor-pointer hover:text-gray-300" />
//             </div>
//           </div>
//         </div>
//       </nav> */}

//       {/* Hero Section */}
//       <section className="relative overflow-hidden h-[500px]">
//         {/* <div className="absolute inset-0 ">
//           <Image
//             src="/images/bg2.jpg"
//             alt="Map preview"
//             width={1000}
//             height={1000}
//             className="h-full w-full object-cover"
//           />
//         </div>
//         <div className="absolute inset-0 bg-gradient-to-b from-[#CBB8A0]/10 via-[#B89F88]/20 to-[#75675C]/95" /> */}
//         <div className="relative max-w-7xl mx-auto px-6 py-32">
//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             <div>
//               <p className="text-sm  mb-4 font-light">
//                 We are India&apos;s Largest Paper Cup Manufacturers and Exporter
//               </p>
//               <h1 className="text-6xl md:text-8xl font-light tracking-tight mb-8">
//                 ABOUT
//                 <br />
//                 <span className="text-4xl md:text-6xl">— US</span>
//               </h1>
//             </div>
//             <div className="text-right">
//               <p className="text-sm  mb-4 font-light">
//                 Each piece demonstrates sophisticated craftsmanship, blending
//                 traditional techniques with contemporary design principles.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* <section className="relative min-h-screen flex items-center text-white bg-black">
//         <div className="absolute inset-0">
//           <Image
//             src="/images/cup9.jpg"
//             alt="Metal architectural elements"
//             fill
//             className="object-cover opacity-60"
//             priority
//           />
//           <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />
//         </div>

//         <div className="relative max-w-7xl mx-auto px-6 py-20">
//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             <div>
//               <p className="text-sm text-gray-200 mb-4 font-light">
//                 We are India's Largest Paper Cup Manufacturers and Exporter
//               </p>
//               <h1 className="text-6xl md:text-8xl font-light tracking-tight mb-8">
//                 ABOUT
//                 <br />
//                 <span className="text-4xl md:text-6xl">— US</span>
//               </h1>
//             </div>
//             <div className="text-right">
//               <p className="text-sm text-neutral-100 mb-4 font-light">
//                 Each piece demonstrates sophisticated craftsmanship, blending
//                 traditional techniques with contemporary design principles.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section> */}

//       {/* History Section */}
//       <section className="py-20">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="text-center mb-16">
//             {/* <p className="text-sm text-gray-400 mb-4 tracking-wider">
//               SINCE 2003
//             </p> */}
//             <h2 className="text-4xl md:text-5xl font-light mb-8">
//               {"“Crafting Every Sip with Excellence”"}
//               {/* <span className="text-gray-400">
//                 FOUR
//                 <br />
//                 GENERATION
//               </span> */}
//             </h2>
//           </div>
//           <div className="text-left mb-16 text-[#17252a]">
//             <p className="mb-4 tracking-wider">
//               At WorldStar Packaging, we are proud to be India&apos;s largest
//               paper cup manufacturer and exporter, with over 27 years of
//               experience delivering premium packaging solutions. Our expertise
//               spans across RTD (Ready-to-Drink) packaging, serving a wide
//               spectrum of businesses, from iconic Indian brands to global
//               clients.
//             </p>
//             <p className="mb-4 tracking-wider">
//               Some of our valued customers include Nestlé India, Café Coffee
//               Day, Chaayos, IRCTC, Haldiram&apos;s, AirAsia, IndiGo Airlines,
//               and many others. In recent years, we have also expanded our
//               footprint to Europe, offering our globally compliant packaging
//               solutions to meet international standards.
//             </p>
//             <p className="mb-4 tracking-wider">
//               Every product we create reflects precision, craftsmanship, and
//               innovative design. Equipped with state-of-the-art machinery and a
//               fully integrated in-house production process, we have the capacity
//               to produce over 4 million cups daily, all backed by a robust
//               traceability system.
//             </p>
//             <p className="mb-4 tracking-wider">
//               Quality and safety are at the core of our operations. We are BRC
//               and SEDEX certified, and all our products undergo stringent food
//               safety testing by SGS.
//             </p>
//             <p className="mb-4 tracking-wider">
//               At WorldStar Packaging, we are committed to sustainability,
//               reliability, and innovation, helping brands serve every sip with
//               style, safety, and care.
//             </p>
//           </div>

//           <div className="relative">
//             <Image
//               src="/images/cup10.jpg"
//               alt="Metal workshop"
//               width={1200}
//               height={400}
//               className="w-full object-cover rounded-lg"
//             />
//             <div className="absolute bottom-6 left-6">
//               <p className="text-sm text-gray-300 max-w-md font-light">
//                 Master craftsmen maintain high standards of excellence that have
//                 been passed down through generations, ensuring each piece meets
//                 our exacting quality standards.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ECO Section */}
//       {/* <section className="py-20">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="grid md:grid-cols-2 gap-16 items-center">
//             <div>
//               <h2 className="text-6xl font-light mb-8">
//                 SMETA <span className="text-4xl">———————</span> CONFROM
//               </h2>
//             </div>
//             <div className="relative flex items-center justify-center">
//               <Image
//                 src="/images/SMETA-CONFROM.jpg"
//                 alt="Geometric metal structure"
//                 width={400}
//                 height={500}
//                 className=" w-[300px] object-contain rounded-lg"
//               />
//             </div>
//           </div>
//         </div>
//       </section> */}

//       {/* <section className="py-20">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="grid md:grid-cols-2 gap-16 items-center">
//             <div className="relative flex items-center justify-center">
//               <Image
//                 src="/images/ISO-22000-2005.jpg"
//                 alt="Geometric metal structure"
//                 width={400}
//                 height={500}
//                 className="w-[300px] object-contain rounded-lg"
//               />
//             </div>
//             <div>
//               <h2 className="text-6xl font-light mb-8">
//                 ISO-22000<span className="text-4xl">———————</span> 2005
//               </h2>
//             </div>
//           </div>
//         </div>
//       </section> */}

//       {/* <section className="py-20">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="grid md:grid-cols-2 gap-16 items-center">
//             <div>
//               <h2 className="text-6xl font-light mb-8">
//                 BRC
//               </h2>
//             </div>
//             <div className="relative flex items-center justify-center">
//               <Image
//                 src="/images/BRC.jpg"
//                 alt="Geometric metal structure"
//                 width={400}
//                 height={500}
//                 className=" w-[300px] object-contain rounded-lg"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="py-20">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="grid md:grid-cols-2 gap-16 items-center">
//             <div className="relative flex items-center justify-center">
//               <Image
//                 src="/images/fssc.jpg"
//                 alt="Geometric metal structure"
//                 width={400}
//                 height={500}
//                 className="w-[300px] object-contain rounded-lg"
//               />
//             </div>
//             <div>
//               <h2 className="text-6xl font-light mb-8">
//                 FSSC 22000
//               </h2>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="py-20">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="grid md:grid-cols-2 gap-16 items-center">
//             <div>
//               <h2 className="text-6xl font-light mb-8">
//                 SEDEX
//               </h2>
//             </div>
//             <div className="relative flex items-center justify-center">
//               <Image
//                 src="/images/smet2-sEDXE.jpg"
//                 alt="Geometric metal structure"
//                 width={400}
//                 height={500}
//                 className="w-[300px] object-contain rounded-lg"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="py-20">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="grid md:grid-cols-2 gap-16 items-center">
//             <div className="relative flex items-center justify-center">
//               <Image
//                 src="/images/fsc.jpg"
//                 alt="Geometric metal structure"
//                 width={400}
//                 height={500}
//                 className="w-[300px] object-contain rounded-lg"
//               />
//             </div>
//             <div>
//               <h2 className="text-6xl font-light mb-8">FSC</h2>
//             </div>
//           </div>
//         </div>
//       </section> */}
//       <section className="py-20">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
//             {/* Card 1 */}
//             <div>
//               <Image
//                 src="/images/BRC.jpg"
//                 alt="BRC Certificate"
//                 width={400}
//                 height={500}
//                 className="w-[300px] mx-auto object-contain rounded-lg"
//               />
//               <h2 className="text-4xl font-light mt-6">BRC</h2>
//             </div>

//             {/* Card 2 */}
//             <div>
//               <Image
//                 src="/images/fssc.jpg"
//                 alt="FSSC Certificate"
//                 width={400}
//                 height={500}
//                 className="w-[300px] mx-auto object-contain rounded-lg"
//               />
//               <h2 className="text-4xl font-light mt-6">FSSC 22000</h2>
//             </div>

//             {/* Card 3 */}
//             <div>
//               <Image
//                 src="/images/smet2-sEDXE.jpg"
//                 alt="Sedex Certificate"
//                 width={400}
//                 height={500}
//                 className="w-[300px] mx-auto object-contain rounded-lg"
//               />
//               <h2 className="text-4xl font-light mt-6">SEDEX</h2>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="py-20">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-center">
//             {/* Card 4 */}
//             <div>
//               <Image
//                 src="/images/fsc.jpg"
//                 alt="FSC Certificate"
//                 width={400}
//                 height={500}
//                 className="w-[300px] mx-auto object-contain rounded-lg"
//               />
//               <h2 className="text-4xl font-light mt-6">FSC</h2>
//             </div>

//             <div>
//               <Image
//                 src="/images/ISO-22000-2005.jpg"
//                 alt="ISO 22000:2005 Certificate"
//                 width={400}
//                 height={500}
//                 className="w-[300px] mx-auto object-contain rounded-lg"
//               />
//               <h2 className="text-4xl font-light mt-6">ISO 22000:2005</h2>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="px-4 py-8 md:px-8 md:py-12 lg:py-16">
//         <div className="mx-auto max-w-7xl">
//           {/* Grid */}
//           <section className="grid items-stretch gap-6 lg:grid-cols-2">
//             {/* Left: Content Card */}
//             <div className="relative rounded-3xl  bg-[#E6F7F6] p-6 md:p-10 lg:p-12 shadow-lg ">
//               {/* Icon */}
//               {/* <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-[#8B5CF6] text-white shadow-md md:mb-8">
//                 <LineChart className="h-10 w-10" aria-hidden="true" />
//                 <span className="sr-only">Analytics icon</span>
//               </div> */}

//               {/* Headline with rotated badge */}
//               <div className="relative">
//                 <h1 className="text-3xl text-[#17252a] font-light leading-[1.15] tracking-[-0.02em] sm:text-4xl md:text-5xl lg:text-6xl">
//                   {"Our Commitment: Quality, Value, and Service"}
//                 </h1>

//                 {/* Rotated pill */}
//                 {/* <span className="absolute -right-2 -top-6 rotate-[15deg] select-none rounded-full bg-lime-300 px-3 py-1 text-[10px] font-bold tracking-wide text-slate-900 shadow md:-right-8 md:-top-7 md:text-xs">
//                   OUR MISSION
//                 </span> */}
//               </div>

//               {/* Subtext */}
//               <p className="mt-6 max-w-2xl text-base leading-7 text-[#17252a] md:text-lg md:leading-8">
//                 {
//                   "At WorldStar Packaging, we are dedicated to delivering premium paper cups and related products that combine superior quality with true value. Meeting and exceeding our customers’ expectations is at the heart of everything we do."
//                 }
//               </p>

//               <p className="mt-6 max-w-2xl text-base leading-7 text-[#17252a] md:text-lg md:leading-8">
//                 {"Why Choose Us:"}
//               </p>

//               {/* Checklist */}
//               <div className="mt-6 space-y-4 md:mt-8">
//                 <FeatureItem>
//                   {"Trusted exporter and brand supplier at affordable prices"}
//                 </FeatureItem>
//                 <FeatureItem>
//                   {"No hidden costs—transparent pricing always"}
//                 </FeatureItem>
//                 <FeatureItem>
//                   {
//                     "Wide variety of paper cups and accessories, including Ripples Paper Cups and Paper Straws"
//                   }
//                 </FeatureItem>
//                 <FeatureItem>
//                   {
//                     "Fast and reliable shipment to ensure your business runs smoothly"
//                   }
//                 </FeatureItem>
//               </div>
//               <p className="mt-6 max-w-2xl text-base leading-7 text-[#17252a] md:text-lg md:leading-8">
//                 {
//                   "We are committed to supporting your brand with packaging solutions that are innovative, sustainable, and dependable."
//                 }
//               </p>
//             </div>

//             {/* Right: Image Card */}
//             <div className="relative overflow-hidden rounded-3xl shadow-lg">
//               <Image
//                 src="/images/bg.jpg"
//                 alt="Team collaborating in a bright modern office"
//                 width={1200}
//                 height={900}
//                 className="h-full w-full object-cover"
//                 priority
//                 sizes="(max-width: 1024px) 100vw, 50vw"
//               />
//             </div>
//           </section>

//           {/* Optional: Design reference below for comparison (from user screenshot) */}
//           {/* <div className="sr-only">
//             <Image
//               src="/images/screenshot-hero.png"
//               alt="Reference design provided by user"
//               width={1520}
//               height={748}
//             />
//           </div> */}
//         </div>
//       </section>

//       {/* Disposal Section */}
//       <section className="py-20">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="grid md:grid-cols-2 gap-16">
//             <div className="relative">
//               <Image
//                 src="/images/cup8.png"
//                 alt="Curved metal staircase"
//                 width={500}
//                 height={600}
//                 className="w-full object-cover rounded-lg"
//               />
//             </div>
//             <div>
//               <h3 className="text-4xl font-light mb-6">
//                 {"“Where Design Meets Function”"}
//               </h3>
//               <p className="text-[#17252a] font-light mb-8 leading-relaxed">
//                 Our paper cups and straws are more than just packaging,
//                 they&apos;re a canvas for creativity.
//               </p>

//               <div className="grid grid-cols-3 gap-4 mb-8">
//                 <Image
//                   src="/images/cup6.png"
//                   alt="Metal texture 1"
//                   width={120}
//                   height={120}
//                   className="object-cover rounded"
//                 />
//                 <Image
//                   src="/images/cup5.png"
//                   alt="Metal texture 2"
//                   width={120}
//                   height={120}
//                   className="object-cover rounded"
//                 />
//                 <Image
//                   src="/images/cup7.png"
//                   alt="Metal texture 3"
//                   width={120}
//                   height={120}
//                   className="object-cover rounded"
//                 />
//               </div>

//               <p className=" text-[#17252a] font-light">
//                 Blending modern aesthetics with practical functionality, every
//                 design is crafted to enhance your brand and make every sip
//                 memorable.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Gallery Section */}
//       {/* <section className="py-20 bg-gray-900">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
//             <Image
//               src="/placeholder.svg?height=300&width=400"
//               alt="Interior design 1"
//               width={400}
//               height={300}
//               className="w-full object-cover rounded-lg"
//             />
//             <Image
//               src="/placeholder.svg?height=300&width=400"
//               alt="Interior design 2"
//               width={400}
//               height={300}
//               className="w-full object-cover rounded-lg"
//             />
//             <Image
//               src="/placeholder.svg?height=300&width=400"
//               alt="Interior design 3"
//               width={400}
//               height={300}
//               className="w-full object-cover rounded-lg"
//             />
//           </div>

//           <div className="text-right">
//             <button className="text-sm text-gray-400 hover:text-white transition-colors font-light">
//               SEE MORE →
//             </button>
//           </div>
//         </div>
//       </section> */}

//       {/* Social Section */}
//       {/* <section className="py-20 bg-black">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="grid md:grid-cols-2 gap-16 items-end">
//             <div>
//               <h2 className="text-6xl font-light mb-8">
//                 OUR <span className="text-4xl">———————</span> SOCIAL
//               </h2>
//               <p className="text-gray-400 text-sm font-light mb-8 leading-relaxed">
//                 SUBSCRIBE TO OUR NEWSLETTER AND RECEIVE MORE INFORMATION ABOUT
//                 DE CASTELLI UNIVERSE AND PRODUCTS.
//               </p>

//               <div className="space-y-4">
//                 <input
//                   type="email"
//                   placeholder="SUBSCRIBE"
//                   className="w-full bg-transparent border-b border-gray-600 py-3 text-white placeholder-gray-500 focus:border-white focus:outline-none font-light"
//                 />
//               </div>
//             </div>

//             <div className="grid grid-cols-2 gap-8 text-sm font-light">
//               <div>
//                 <h4 className="text-white mb-4">INSTAGRAM</h4>
//                 <h4 className="text-white mb-4">FACEBOOK</h4>
//                 <h4 className="text-white mb-4">PINTEREST</h4>
//               </div>
//               <div>
//                 <h4 className="text-white mb-4">LINKEDIN</h4>
//                 <h4 className="text-white mb-4">YOUTUBE</h4>
//                 <h4 className="text-white mb-4">TWITTER</h4>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section> */}
//     </div>
//   );
// }

// function FeatureItem({ children, className }) {
//   return (
//     <div
//       className={cn(
//         "flex items-center gap-3 rounded-2xl border border-[#5FBBB5] bg-[#329893] px-4 py-3 shadow-sm md:px-5 md:py-4",
//         className
//       )}
//       role="listitem"
//     >
//       <span className="inline-flex items-center justify-center rounded-full bg-[#5FBBB5] p-1.5 md:p-2">
//         <CheckCircle2
//           className="h-4 w-4 text-[#23201b] md:h-5 md:w-5"
//           aria-hidden="true"
//         />
//       </span>
//       <span className="text-sm font-medium text-white md:text-base">
//         {children}
//       </span>
//     </div>
//   );
// }

import Image from "next/image";
import { CheckCircle2, LineChart } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Page() {
  return (
    <div className="min-h-screen bg-[#5FBBB5] text-[#16423B]">
      {/* Hero Section */}
      <section className="relative overflow-hidden h-[500px]">
        <div className="relative max-w-7xl mx-auto px-6 py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm mb-4 font-light text-gray-200">
                We are India&apos;s Largest Paper Cup Manufacturers and Exporter
              </p>
              <h1 className="text-6xl md:text-8xl font-light tracking-tight mb-8 text-white">
                ABOUT
                <br />
                <span className="text-4xl md:text-6xl text-white">— US</span>
              </h1>
            </div>
            <div className="text-right">
              <p className="text-sm mb-4 font-light text-gray-200">
                Each piece demonstrates sophisticated craftsmanship, blending
                traditional techniques with contemporary design principles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-8 text-white">
              {"“Crafting Every Sip with Excellence”"}
            </h2>
          </div>
          <div className="text-left mb-16 text-[#16423B]">
            <p className="mb-4 tracking-wider">
              At WorldStar Packaging, we are proud to be India&apos;s largest
              paper cup manufacturer and exporter, with over 27 years of
              experience delivering premium packaging solutions. Our expertise
              spans across RTD (Ready-to-Drink) packaging, serving a wide
              spectrum of businesses, from iconic Indian brands to global
              clients.
            </p>
            <p className="mb-4 tracking-wider">
              Some of our valued customers include Nestlé India, Café Coffee
              Day, Chaayos, IRCTC, Haldiram&apos;s, AirAsia, IndiGo Airlines,
              and many others. In recent years, we have also expanded our
              footprint to Europe, offering our globally compliant packaging
              solutions to meet international standards.
            </p>
            <p className="mb-4 tracking-wider">
              Every product we create reflects precision, craftsmanship, and
              innovative design. Equipped with state-of-the-art machinery and a
              fully integrated in-house production process, we have the capacity
              to produce over 4 million cups daily, all backed by a robust
              traceability system.
            </p>
            <p className="mb-4 tracking-wider">
              Quality and safety are at the core of our operations. We are ISO
              9000 and SEDEX certified, and all our products undergo stringent
              food safety testing by SGS.
            </p>
            <p className="mb-4 tracking-wider">
              At WorldStar Packaging, we are committed to sustainability,
              reliability, and innovation, helping brands serve every sip with
              style, safety, and care.
            </p>
          </div>
          <div className="relative">
            <Image
              src="/images/cup10.jpg"
              alt="Metal workshop"
              width={1200}
              height={400}
              className="w-full object-cover rounded-lg"
            />
            {/* <div className="absolute bottom-6 left-6">
              <p className="text-sm text-[#30807B] max-w-md font-light bg-[#E6F7F6] rounded-lg p-3">
                Master craftsmen maintain high standards of excellence that have
                been passed down through generations, ensuring each piece meets
                our exacting quality standards.
              </p>
            </div> */}
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {/* Card 1 */}
            <div>
              <Image
                src="/images/BRC.jpg"
                alt="BRC Certificate"
                width={400}
                height={500}
                className="w-[300px] mx-auto object-contain rounded-lg border border-[#56AFA9] bg-[#E6F7F6]"
              />
              <h2 className="text-4xl font-light mt-6 text-[#16423B]">BRC</h2>
            </div>
            {/* Card 2 */}
            <div>
              <Image
                src="/images/fssc.jpg"
                alt="FSSC Certificate"
                width={400}
                height={500}
                className="w-[300px] mx-auto object-contain rounded-lg border border-[#56AFA9] bg-[#E6F7F6]"
              />
              <h2 className="text-4xl font-light mt-6 text-[#16423B]">
                FSSC 22000
              </h2>
            </div>
            {/* Card 3 */}
            <div>
              <Image
                src="/images/smet2-sEDXE.jpg"
                alt="Sedex Certificate"
                width={400}
                height={500}
                className="w-[300px] mx-auto object-contain rounded-lg border border-[#56AFA9] bg-[#E6F7F6]"
              />
              <h2 className="text-4xl font-light mt-6 text-[#16423B]">SEDEX</h2>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-center">
            {/* Card 4 */}
            <div>
              <Image
                src="/images/fsc.jpg"
                alt="FSC Certificate"
                width={400}
                height={500}
                className="w-[300px] mx-auto object-contain rounded-lg border border-[#56AFA9] bg-[#E6F7F6]"
              />
              <h2 className="text-4xl font-light mt-6 text-[#16423B]">FSC</h2>
            </div>
            <div>
              <Image
                src="/images/ISO-22000-2005.jpg"
                alt="ISO 22000:2005 Certificate"
                width={400}
                height={500}
                className="w-[300px] mx-auto object-contain rounded-lg border border-[#56AFA9] bg-[#E6F7F6]"
              />
              <h2 className="text-4xl font-light mt-6 text-[#16423B]">
                ISO 22000:2005
              </h2>
            </div>
          </div>
        </div>
      </section>
      <section className="px-4 py-8 md:px-8 md:py-12 lg:py-16">
        <div className="mx-auto max-w-7xl">
          {/* Grid */}
          <section className="grid items-stretch gap-6 lg:grid-cols-2">
            {/* Left: Content Card */}
            <div className="relative rounded-3xl bg-[#E6F7F6] p-6 md:p-10 lg:p-12 border border-[#56AFA9]">
              {/* Headline with rotated badge */}
              <div className="relative">
                <h1 className="text-3xl font-light leading-[1.15] tracking-[-0.02em] sm:text-4xl md:text-5xl lg:text-6xl text-[#16423B]">
                  {"Our Commitment: Quality, Value, and Service"}
                </h1>
              </div>
              {/* Subtext */}
              <p className="mt-6 max-w-2xl text-base leading-7 text-[#30807B] md:text-lg md:leading-8">
                {
                  "At WorldStar Packaging, we are dedicated to delivering premium paper cups and related products that combine superior quality with true value. Meeting and exceeding our customers’ expectations is at the heart of everything we do."
                }
              </p>
              <p className="mt-6 max-w-2xl text-base leading-7 text-[#30807B] md:text-lg md:leading-8">
                {"Why Choose Us:"}
              </p>
              {/* Checklist */}
              <div className="mt-6 space-y-4 md:mt-8">
                <FeatureItem>
                  {"Trusted wholesale supplier at affordable prices"}
                </FeatureItem>
                <FeatureItem>
                  {"No hidden costs—transparent pricing always"}
                </FeatureItem>
                <FeatureItem>
                  {
                    "Wide variety of paper cups and accessories, including Ripples Paper Cups and Paper Straws"
                  }
                </FeatureItem>
                <FeatureItem>
                  {
                    "Fast and reliable shipment to ensure your business runs smoothly"
                  }
                </FeatureItem>
              </div>
              <p className="mt-6 max-w-2xl text-base leading-7 text-[#30807B] md:text-lg md:leading-8">
                {
                  "We are committed to supporting your brand with packaging solutions that are innovative, sustainable, and dependable."
                }
              </p>
            </div>
            {/* Right: Image Card */}
            <div className="relative overflow-hidden rounded-3xl border border-[#56AFA9] shadow-sm bg-[#CBEBE8]">
              <Image
                src="/images/bg.jpg"
                alt="Team collaborating in a bright modern office"
                width={1200}
                height={900}
                className="h-full w-full object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </section>
        </div>
      </section>
      {/* Disposal Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="relative">
              <Image
                src="/images/cup8.png"
                alt="Curved metal staircase"
                width={500}
                height={600}
                className="w-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-4xl font-light mb-6 text-[#16423B]">
                {"“Where Design Meets Function”"}
              </h3>
              <p className=" font-light mb-8 leading-relaxed text-[#17252a]">
                Our paper cups and straws are more than just packaging,
                they&apos;re a canvas for creativity.
              </p>
              <div className="grid grid-cols-3 gap-4 mb-8">
                <Image
                  src="/images/cup6.png"
                  alt="Metal texture 1"
                  width={180}
                  height={180}
                  className="object-cover "
                />
                <Image
                  src="/images/ab1.png"
                  alt="Metal texture 2"
                  width={180}
                  height={180}
                  className="object-cover "
                />
                <Image
                  src="/images/ab2.png"
                  alt="Metal texture 3"
                  width={180}
                  height={180}
                  className="object-cover"
                />
              </div>
              <p className="font-light text-[#17252a]">
                Blending modern aesthetics with practical functionality, every
                design is crafted to enhance your brand and make every sip
                memorable.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureItem({ children, className }) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 rounded-2xl border border-[#56AFA9] bg-[#CBEBE8] px-4 py-3 shadow-sm md:px-5 md:py-4",
        className
      )}
      role="listitem"
    >
      <span className="inline-flex items-center justify-center rounded-full bg-[#55A9A3] p-1.5 md:p-2">
        <CheckCircle2
          className="h-4 w-4 text-white md:h-5 md:w-5"
          aria-hidden="true"
        />
      </span>
      <span className="text-sm font-medium text-[#16423B] md:text-base">
        {children}
      </span>
    </div>
  );
}
