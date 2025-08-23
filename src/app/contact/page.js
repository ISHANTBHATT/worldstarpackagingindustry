import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ArrowRight,
  Facebook,
  Twitter,
  Youtube,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

export default function Page() {
  return (
    // <main className="min-h-screen bg-[#F5ECE4] text-white antialiased">
    //   {/* Hero */}
    //   <section className="relative overflow-hidden h-96">
    //     <div className="absolute inset-0 ">
    //       <Image
    //         src="/images/bg2.jpg"
    //         alt="Map preview"
    //         width={1000}
    //         height={1000}
    //         className="h-full w-full object-cover"
    //       />
    //     </div>
    //     <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-[#0b0b0b]" />
    //     <div className="relative mx-auto max-w-6xl px-4 py-16 sm:py-20 lg:py-24 text-center">
    //       <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
    //         Contact Us
    //       </h1>
    //       <nav className="mt-3 flex items-center justify-center gap-2 text-sm text-zinc-300/80">
    //         <Link href="#" className="hover:text-white">
    //           Home
    //         </Link>
    //         <ChevronRight className="h-4 w-4 opacity-60" />
    //         <span className="text-white/90">Contact</span>
    //       </nav>
    //     </div>
    //   </section>

    //   {/* Contact section */}
    //   <section className="mx-auto max-w-6xl p-14 sm:p-16 lg:p-20">
    //     <div className="grid gap-8 lg:grid-cols-2">
    //       {/* Left: form card */}
    //       <div className="rounded-xl border border-zinc-800 bg-[#171717] p-6 sm:p-7 lg:p-8 shadow-[0_0_0_1px_rgba(255,255,255,0.03)]">
    //         <div className="space-y-1">
    //           <p className="text-sm uppercase tracking-[0.2em] text-zinc-400">
    //             Contact Us
    //           </p>
    //           <h2 className="text-3xl font-semibold tracking-tight">
    //             Get In Touch
    //           </h2>
    //         </div>

    //         <form
    //           className="mt-6 space-y-4"
    //           // onSubmit={(e) => e.preventDefault()}
    //         >
    //           <FormField label="Name">
    //             <Input
    //               placeholder="Your Name..."
    //               className="h-11 rounded-md border-zinc-700/80 bg-black/40 text-white placeholder:text-zinc-500 focus-visible:ring-zinc-400"
    //             />
    //           </FormField>

    //           <FormField label="Email">
    //             <Input
    //               type="email"
    //               placeholder="example@yourmail.com"
    //               className="h-11 rounded-md border-zinc-700/80 bg-black/40 text-white placeholder:text-zinc-500 focus-visible:ring-zinc-400"
    //             />
    //           </FormField>

    //           <FormField label="Subject">
    //             <Input
    //               placeholder="Title..."
    //               className="h-11 rounded-md border-zinc-700/80 bg-black/40 text-white placeholder:text-zinc-500 focus-visible:ring-zinc-400"
    //             />
    //           </FormField>

    //           <FormField label="Message">
    //             <Textarea
    //               placeholder="Type here..."
    //               className="min-h-[120px] rounded-md border-zinc-700/80 bg-black/40 text-white placeholder:text-zinc-500 focus-visible:ring-zinc-400"
    //             />
    //           </FormField>

    //           <div className="pt-2">
    //             <Button
    //               type="submit"
    //               variant="outline"
    //               className="h-11 rounded-full border-zinc-600 bg-transparent px-6 text-white hover:bg-white/10"
    //             >
    //               Send Now
    //             </Button>
    //           </div>
    //         </form>
    //       </div>

    //       {/* Right: info */}
    //       <div className="flex flex-col justify-between">
    //         <div>
    //           <p className="max-w-xl text-zinc-300/90">
    //             In tempus nisl turpis, at ultricies dui eleifend a. Quisque et
    //             quam vel nunc consectetur pharetra euismod et elit. Morbi nibh
    //             tortor, ullamcorper id purus eu, rhoncus consequat velit.
    //           </p>

    //           <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
    //             <Info
    //               icon={<Phone className="h-5 w-5" />}
    //               title="Phone Number"
    //               value="+6282 4032 567"
    //             />
    //             <Info
    //               icon={<Mail className="h-5 w-5" />}
    //               title="Email Address"
    //               value="Example@Email.com"
    //             />
    //             <Info
    //               icon={<MessageCircle className="h-5 w-5" />}
    //               title="Whatsapp"
    //               value="082-245-7253"
    //             />
    //             <Info
    //               icon={<MapPin className="h-5 w-5" />}
    //               title="Our Office"
    //               value="2443 Oak Ridge Omaha, QA 45065"
    //             />
    //           </div>
    //         </div>

    //         {/* Map preview */}
    //         <div className="mt-8 overflow-hidden rounded-lg border border-zinc-800">
    //           <Image
    //             src="/placeholder.svg?height=360&width=640"
    //             alt="Map preview"
    //             width={640}
    //             height={360}
    //             className="h-full w-full object-cover"
    //           />
    //         </div>
    //       </div>
    //     </div>
    //   </section>

    //   {/* CTA banner */}
    //   <section className="mx-auto max-w-6xl px-4 pb-14 sm:pb-16 lg:pb-20">
    //     <div className="relative overflow-hidden rounded-xl border border-zinc-800">
    //       <div className="absolute inset-0">
    //         <Image
    //           src="/placeholder.svg?height=520&width=1280"
    //           alt="Camera background"
    //           fill
    //           className="object-cover"
    //           sizes="(max-width: 1024px) 100vw, 1024px"
    //           priority
    //         />
    //         <div className="absolute inset-0 bg-black/40" />
    //       </div>
    //       <div className="relative px-6 py-16 sm:px-10 sm:py-20 lg:py-24 text-center">
    //         <p className="text-sm font-medium text-zinc-200/90">Hire Us Now</p>
    //         <h3 className="mx-auto mt-2 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
    //           We Are Always Ready To
    //           <br className="hidden sm:block" /> Take A Perfect Shot
    //         </h3>
    //         <div className="mt-8">
    //           <Button className="rounded-full bg-white text-black hover:bg-zinc-200">
    //             Get Started
    //             <ArrowRight className="ml-2 h-4 w-4" />
    //           </Button>
    //         </div>
    //       </div>
    //     </div>
    //   </section>

    //   <Footer />

    //   {/* Reference image (hidden) */}
    //   <div className="sr-only">
    //     <Image
    //       src="/images/contact-reference.jpg"
    //       alt="Reference design provided by user"
    //       width={736}
    //       height={1149}
    //     />
    //   </div>
    // </main>
    <main className="min-h-screen bg-[#F5ECE4] text-[#23201b] antialiased">
      {/* Hero */}
      <section className="relative overflow-hidden h-96">
        <div className="absolute inset-0 ">
          <Image
            src="/images/bg2.jpg"
            alt="Map preview"
            width={1000}
            height={1000}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#CBB8A0]/10 via-[#B89F88]/20 to-[#75675C]/95" />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:py-20 lg:py-24 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Contact Us
          </h1>
          <nav className="mt-3 flex items-center justify-center gap-2 text-sm text-[#907960]/80">
            <Link href="/" className="hover:text-[#23201b]">
              Home
            </Link>
            <ChevronRight className="h-4 w-4 opacity-60" />
            <span className="text-[#524438]/90">Contact</span>
          </nav>
        </div>
      </section>

      {/* Contact section */}
      <section className="mx-auto max-w-7xl p-14 sm:p-16 lg:p-20">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left: form card */}
          <div className="rounded-xl border border-[#D7C9BB] bg-[#EBDFD3] p-6 sm:p-7 lg:p-8 shadow-[0_0_0_1px_rgba(80,66,55,0.03)]">
            <div className="space-y-1">
              <p className="text-sm uppercase tracking-[0.2em] text-[#A3927D]">
                Contact Us
              </p>
              <h2 className="text-3xl font-semibold tracking-tight">
                Get In Touch
              </h2>
            </div>

            <form className="mt-6 space-y-4">
              <FormField label="Name">
                <Input
                  placeholder="Your Name..."
                  className="h-11 rounded-md border-[#D7C9BB] bg-[#F3E6DA] text-[#23201b] placeholder:text-[#A3927D] focus-visible:ring-[#A3927D]"
                />
              </FormField>

              <FormField label="Email">
                <Input
                  type="email"
                  placeholder="example@yourmail.com"
                  className="h-11 rounded-md border-[#D7C9BB] bg-[#F3E6DA] text-[#23201b] placeholder:text-[#A3927D] focus-visible:ring-[#A3927D]"
                />
              </FormField>

              <FormField label="Subject">
                <Input
                  placeholder="Title..."
                  className="h-11 rounded-md border-[#D7C9BB] bg-[#F3E6DA] text-[#23201b] placeholder:text-[#A3927D] focus-visible:ring-[#A3927D]"
                />
              </FormField>

              <FormField label="Message">
                <Textarea
                  placeholder="Type here..."
                  className="min-h-[120px] rounded-md border-[#D7C9BB] bg-[#F3E6DA] text-[#23201b] placeholder:text-[#A3927D] focus-visible:ring-[#A3927D]"
                />
              </FormField>

              <div className="pt-2">
                <Button
                  type="submit"
                  variant="outline"
                  className="h-11 rounded-full border-[#BAA48E] bg-[#23201b] text-[#F5ECE4] hover:bg-[#4B4035]"
                >
                  Send Now
                </Button>
              </div>
            </form>
          </div>

          {/* Right: info */}
          <div className="flex flex-col justify-between">
            <div>
              <p className="max-w-xl text-[#524438]">
                In tempus nisl turpis, at ultricies dui eleifend a. Quisque et
                quam vel nunc consectetur pharetra euismod et elit. Morbi nibh
                tortor, ullamcorper id purus eu, rhoncus consequat velit.
              </p>

              <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
                <Info
                  icon={<Phone className="h-5 w-5 text-[#524438]" />}
                  title="Phone Number"
                  value="+91 98105 01613"
                />
                <Info
                  icon={<Mail className="h-5 w-5 text-[#524438]" />}
                  title="Email Address"
                  value="worldstarpackagingindustry@gmail.com"
                />
                <Info
                  icon={<MessageCircle className="h-5 w-5 text-[#524438]" />}
                  title="Whatsapp"
                  value="082-245-7253"
                />
                <Info
                  icon={<MapPin className="h-5 w-5 text-[#524438]" />}
                  title="Our Office"
                  value="World Star Packaging Industry, Plot no 53, sector 53, phase I, HSIIDC Kundli, Sonipat,Haryana-131028"
                />
              </div>
            </div>

            {/* Map preview */}
            <div className="mt-8 overflow-hidden rounded-lg border border-[#D7C9BB]">
              <Image
                src="/placeholder.svg?height=360&width=640"
                alt="Map preview"
                width={640}
                height={360}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="mx-auto max-w-6xl px-4 pb-14 sm:pb-16 lg:pb-20">
        <div className="relative overflow-hidden rounded-xl border border-[#D7C9BB]">
          <div className="absolute inset-0">
            <Image
              src="/images/bg1.jpg"
              alt="Camera background"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 1024px"
              priority
            />
            <div className="absolute inset-0 bg-[#524438]/80" />
          </div>
          <div className="relative px-6 py-16 sm:px-10 sm:py-20 lg:py-24 text-center">
            <p className="text-sm font-medium text-[#A3927D]/90">Hire Us Now</p>
            <h3 className="mx-auto mt-2 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl text-white">
              We Are Always Ready To
              <br className="hidden sm:block" /> Take A Perfect Shot
            </h3>
            <div className="mt-8">
              <Button className="rounded-full bg-[#F5ECE4] border border-[#BAA48E] text-[#23201b] hover:bg-[#E5DBD0]">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* <Footer /> */}

      {/* Reference image (hidden) */}
      <div className="sr-only">
        <Image
          src="/images/contact-reference.jpg"
          alt="Reference design provided by user"
          width={736}
          height={1149}
        />
      </div>
    </main>
  );
}

function FormField({ label, children }) {
  return (
    <div className="space-y-1.5">
      <label className="text-xs font-medium uppercase tracking-widest text-zinc-400">
        {label}
      </label>
      {children}
    </div>
  );
}

function Info({ icon, title, value }) {
  return (
    <div className="flex items-start gap-3 rounded-lg border border-zinc-800 bg-[#EBDFD3] p-4">
      <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-full bg-[#D7C9BB]">
        <span className="text-white/90">{icon}</span>
      </div>
      <div>
        <p className="text-sm font-semibold text-white/95">{title}</p>
        <p className="text-sm text-zinc-400 [overflow-wrap:anywhere] inline-block">
          {value}
        </p>
      </div>
    </div>
  );
}

// function Footer() {
//   return (
//     <footer className="border-t border-zinc-800 bg-[#0b0b0b]">
//       <div className="mx-auto max-w-6xl px-4 py-12">
//         <div className="grid gap-10 md:grid-cols-3">
//           {/* Brand */}
//           <div>
//             <div className="flex items-center gap-3">
//               <div className="flex h-12 w-12 items-center justify-center rounded bg-white">
//                 <span className="text-sm font-bold text-black">V</span>
//               </div>
//               <div className="leading-tight">
//                 <p className="text-base font-semibold">VIGRAPH</p>
//                 <p className="text-[10px] uppercase tracking-widest text-zinc-400">
//                   Studio
//                 </p>
//               </div>
//             </div>
//             <p className="mt-4 max-w-sm text-sm text-zinc-400">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
//               tellus, luctus nec ullamcorper mattis.
//             </p>
//             <div className="mt-4 flex items-center gap-3 text-zinc-300">
//               <Social
//                 icon={<Facebook className="h-4 w-4" />}
//                 ariaLabel="Facebook"
//               />
//               <Social
//                 icon={<Twitter className="h-4 w-4" />}
//                 ariaLabel="Twitter"
//               />
//               <Social
//                 icon={<Youtube className="h-4 w-4" />}
//                 ariaLabel="YouTube"
//               />
//             </div>
//           </div>

//           {/* Our Store */}
//           <div>
//             <h4 className="text-lg font-semibold">Our Store</h4>
//             <ul className="mt-4 space-y-3 text-zinc-300">
//               <li>
//                 <Link href="#" className="hover:text-white">
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link href="#" className="hover:text-white">
//                   About
//                 </Link>
//               </li>
//               <li>
//                 <Link href="#" className="hover:text-white">
//                   Service
//                 </Link>
//               </li>
//               <li>
//                 <Link href="#" className="hover:text-white">
//                   Contact
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* Get In Touch */}
//           <div>
//             <h4 className="text-lg font-semibold">Get In Touch</h4>
//             <ul className="mt-4 space-y-4 text-zinc-300">
//               <li className="flex items-start gap-3">
//                 <MapPin className="mt-0.5 h-5 w-5 text-white/80" />
//                 <span>2443 Oak Ridge Omaha, QA 45065</span>
//               </li>
//               <li className="flex items-start gap-3">
//                 <Phone className="mt-0.5 h-5 w-5 text-white/80" />
//                 <span>207-867-452</span>
//               </li>
//               <li className="flex items-start gap-3">
//                 <Phone className="mt-0.5 h-5 w-5 text-white/80" />
//                 <span>082-245-7253</span>
//               </li>
//               <li className="flex items-start gap-3">
//                 <Mail className="mt-0.5 h-5 w-5 text-white/80" />
//                 <span>support@site.com</span>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>

//       {/* Bottom bar */}
//       <div className="border-t border-zinc-800">
//         <div className="mx-auto max-w-6xl px-4 py-6 text-center text-sm text-zinc-400">
//           {"Copyright © 2023 vigraph | Powered by vigraph"}
//         </div>
//       </div>
//     </footer>
//   );
// }

// function Social({ icon, ariaLabel }) {
//   return (
//     <button
//       aria-label={ariaLabel}
//       className={cn(
//         "inline-flex h-9 w-9 items-center justify-center rounded-full border border-zinc-700 text-zinc-300 hover:border-zinc-500 hover:text-white"
//       )}
//     >
//       {icon}
//     </button>
//   );
// }
