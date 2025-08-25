// "use client";
// import React, { useEffect, useState } from "react";
// import { FizziLogo } from "./FizziLogo";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { Button } from "@/components/ui/button";
// import { auth } from "@/lib/firebase.config";
// import { onAuthStateChanged, signOut } from "firebase/auth";

// export default function Header() {
//   const router = useRouter();
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const unsub = onAuthStateChanged(auth, (currentUser) => {
//       if (!currentUser) {
//         // router.replace("/");
//       } else {
//         setUser(currentUser);
//       }
//     });
//     return () => unsub();
//   }, [router]);
//   return (
//     // <header className="-mb-28 flex justify-center py-4">
//     //   <FizziLogo className="z-10 h-20 cursor-pointer text-[#6F4E37]" />
//     // </header>
//     <header className="w-full flex items-center justify-between border-b border-white/30 px-6 py-2 z-50 fixed bg-transparent">
//       <div className="flex-shrink-0 flex items-center">
//         <a href="/">
//           <img src="/images/logo2.png" alt="Logo" className="w-20 h-20" />
//         </a>
//       </div>
//       <nav className="flex gap-10 mr-6 items-center">
//         <a
//           href="/about"
//           className="text-black hover:text-gray-600 transition-colors"
//         >
//           About
//         </a>
//         <a
//           href="/our-products"
//           className="text-black hover:text-gray-600 transition-colors"
//         >
//           Our Products
//         </a>
//         <a
//           href="/gallery"
//           className="text-black hover:text-gray-600 transition-colors"
//         >
//           Gallery
//         </a>
//         <a
//           href="/contact"
//           className="text-black hover:text-gray-600 transition-colors"
//         >
//           Contact
//         </a>
//         {user ? (
//           <Button
//             onClick={async () => {
//               try {
//                 await signOut(auth);
//                 setUser(null);
//                 router.replace("/");
//               } catch (e) {
//                 console.error(e);
//               }
//             }}
//             className="rounded-full"
//           >
//             Sign out
//           </Button>
//         ) : null}
//       </nav>
//     </header>
//   );
// }

// "use client";
// import React, { useEffect, useState } from "react";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { Button } from "@/components/ui/button";
// import { auth } from "@/lib/firebase.config";
// import { onAuthStateChanged, signOut } from "firebase/auth";

// export default function Header() {
//   const router = useRouter();
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const unsub = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser); // handles null and user
//       if (!currentUser) router.replace("/");
//     });
//     return () => unsub();
//   }, [router]);

//   return (
//     <header className="w-full flex items-center justify-between border-b border-white/30 px-6 py-2 z-50 fixed bg-transparent">
//       <div className="flex-shrink-0 flex items-center">
//         <Link href="/">
//           <img src="/images/logo2.png" alt="Logo" className="w-20 h-20" />
//         </Link>
//       </div>
//       <nav className="flex gap-10 mr-6 items-center">
//         <Link
//           href="/about"
//           className="text-black hover:text-gray-600 transition-colors"
//         >
//           About
//         </Link>
//         <Link
//           href="/our-products"
//           className="text-black hover:text-gray-600 transition-colors"
//         >
//           Our Products
//         </Link>
//         <Link
//           href="/gallery"
//           className="text-black hover:text-gray-600 transition-colors"
//         >
//           Gallery
//         </Link>
//         <Link
//           href="/contact"
//           className="text-black hover:text-gray-600 transition-colors"
//         >
//           Contact
//         </Link>
//         {user ? (
//           <Button
//             onClick={async () => {
//               try {
//                 await signOut(auth);
//                 setUser(null);
//                 router.replace("/");
//               } catch (e) {
//                 console.error(e);
//               }
//             }}
//             className="rounded-full"
//           >
//             Sign out
//           </Button>
//         ) : null}
//       </nav>
//     </header>
//   );
// }

// "use client";
// import { useEffect, useState } from "react";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { Button } from "@/components/ui/button";
// import { auth } from "@/lib/firebase.config.js";
// import { Menu, X } from "lucide-react";

// export default function Header() {
//   const router = useRouter();
//   const [user, setUser] = useState(null);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const unsub = auth.onAuthStateChanged((currentUser) => {
//       if (!currentUser) {
//         // router.replace("/");
//       } else {
//         setUser(currentUser);
//       }
//     });
//     return () => unsub();
//   }, [router]);

//   const handleSignOut = async () => {
//     try {
//       await auth.signOut();
//       setUser(null);
//       setIsMobileMenuOpen(false);
//       router.replace("/");
//     } catch (e) {
//       console.error(e);
//     }
//   };

//   const closeMobileMenu = () => {
//     setIsMobileMenuOpen(false);
//   };

//   return (
//     <>
//       <header className="w-full flex items-center justify-between border-b border-white/30 px-6 py-2 z-50 fixed bg-transparent">
//         <div className="flex-shrink-0 flex items-center">
//           <Link href="/" onClick={closeMobileMenu}>
//             <img src="/images/logo2.png" alt="Logo" className="w-20 h-20" />
//           </Link>
//         </div>

//         <nav className="hidden md:flex gap-10 mr-6 items-center">
//           <Link
//             href="/about"
//             className="text-black hover:text-gray-600 transition-colors"
//           >
//             About
//           </Link>
//           <Link
//             href="/our-products"
//             className="text-black hover:text-gray-600 transition-colors"
//           >
//             Our Products
//           </Link>
//           <Link
//             href="/gallery"
//             className="text-black hover:text-gray-600 transition-colors"
//           >
//             Compostable Paper Cups
//           </Link>
//           <Link
//             href="/contact"
//             className="text-black hover:text-gray-600 transition-colors"
//           >
//             Contact
//           </Link>
//           {user ? (
//             <Button onClick={handleSignOut} className="rounded-full">
//               Sign out
//             </Button>
//           ) : null}
//         </nav>

//         <button
//           className="md:hidden p-2 text-black hover:text-gray-600 transition-colors"
//           onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//           aria-label="Toggle mobile menu"
//         >
//           {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>
//       </header>

//       {isMobileMenuOpen && (
//         <>
//           {/* Backdrop */}
//           <div
//             className="fixed inset-0 bg-black/50 z-40 md:hidden"
//             onClick={closeMobileMenu}
//           />

//           {/* Mobile menu sidebar */}
//           <div className="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 md:hidden transform transition-transform duration-300 ease-in-out">
//             <div className="flex flex-col h-full">
//               {/* Mobile menu header */}
//               <div className="flex items-center justify-between p-6 border-b border-gray-200">
//                 <img src="/images/logo2.png" alt="Logo" className="w-16 h-16" />
//                 <button
//                   onClick={closeMobileMenu}
//                   className="p-2 text-gray-600 hover:text-gray-800 transition-colors"
//                   aria-label="Close menu"
//                 >
//                   <X size={24} />
//                 </button>
//               </div>

//               {/* Mobile navigation links */}
//               <nav className="flex flex-col flex-1 px-6 py-8 space-y-6">
//                 <Link
//                   href="/about"
//                   onClick={closeMobileMenu}
//                   className="text-lg font-medium text-gray-800 hover:text-gray-600 transition-colors py-3 border-b border-gray-100"
//                 >
//                   About
//                 </Link>
//                 <Link
//                   href="/our-products"
//                   onClick={closeMobileMenu}
//                   className="text-lg font-medium text-gray-800 hover:text-gray-600 transition-colors py-3 border-b border-gray-100"
//                 >
//                   Our Products
//                 </Link>
//                 <Link
//                   href="/gallery"
//                   onClick={closeMobileMenu}
//                   className="text-lg font-medium text-gray-800 hover:text-gray-600 transition-colors py-3 border-b border-gray-100"
//                 >
//                   Gallery
//                 </Link>
//                 <Link
//                   href="/contact"
//                   onClick={closeMobileMenu}
//                   className="text-lg font-medium text-gray-800 hover:text-gray-600 transition-colors py-3 border-b border-gray-100"
//                 >
//                   Contact
//                 </Link>

//                 {/* Mobile sign out button */}
//                 {user && (
//                   <div className="pt-6">
//                     <Button
//                       onClick={handleSignOut}
//                       className="w-full rounded-full bg-black text-white hover:bg-gray-800"
//                     >
//                       Sign out
//                     </Button>
//                   </div>
//                 )}
//               </nav>
//             </div>
//           </div>
//         </>
//       )}
//     </>
//   );
// }
// current
// "use client";
// import { useEffect, useState, useRef } from "react";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { Button } from "@/components/ui/button";
// import { auth } from "@/lib/firebase.config.js";
// import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";

// export default function Header() {
//   const router = useRouter();
//   const [user, setUser] = useState(null);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
//   const [expandedSections, setExpandedSections] = useState({
//     beverages: false,
//     foodServing: false,
//     halfCups: false,
//     servingAddOn: false,
//     hotCups: false,
//     coldCups: false,
//   });

//   const dropdownRef = useRef(null);

//   useEffect(() => {
//     const unsub = auth.onAuthStateChanged((currentUser) => {
//       if (currentUser) {
//         setUser(currentUser);
//       } else {
//         setUser(null);
//       }
//     });
//     return () => unsub();
//   }, [router]);

//   // ✅ Close dropdown when clicking outside
//   useEffect(() => {
//     function handleClickOutside(event) {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setIsProductsDropdownOpen(false);
//         setExpandedSections({
//           beverages: false,
//           foodServing: false,
//           halfCups: false,
//           servingAddOn: false,
//           hotCups: false,
//           coldCups: false,
//         });
//       }
//     }

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   const handleSignOut = async () => {
//     try {
//       await auth.signOut();
//       setUser(null);
//       setIsMobileMenuOpen(false);
//       router.replace("/");
//     } catch (e) {
//       console.error(e);
//     }
//   };

//   const closeMobileMenu = () => {
//     setIsMobileMenuOpen(false);
//   };

//   const toggleSection = (section) => {
//     setExpandedSections((prev) => ({
//       ...prev,
//       [section]: !prev[section],
//     }));
//   };

//   return (
//     <>
//       <header className="w-full flex items-center justify-between border-b border-white/30 px-6 py-2 z-50 fixed bg-transparent">
//         <div className="flex-shrink-0 flex items-center">
//           <Link href="/" onClick={closeMobileMenu}>
//             <img src="/images/logo2.png" alt="Logo" className="w-20 h-20" />
//           </Link>
//         </div>

//         {/* Desktop Nav */}
//         <nav className="hidden md:flex gap-10 mr-6 items-center">
//           <Link
//             href="/about"
//             className="text-black hover:text-gray-600 transition-colors"
//           >
//             About
//           </Link>

//           {/* ✅ Fixed Dropdown with click outside */}
//           <div className="relative" ref={dropdownRef}>
//             <button
//               onClick={() => setIsProductsDropdownOpen((prev) => !prev)}
//               className="flex items-center gap-1 text-black hover:text-gray-600 transition-colors"
//             >
//               Our Products
//               <ChevronDown
//                 size={16}
//                 className={`transition-transform ${
//                   isProductsDropdownOpen ? "rotate-180" : ""
//                 }`}
//               />
//             </button>

//             {isProductsDropdownOpen && (
//               <div className="absolute top-full left-0 mt-2 w-72 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
//                 <div className="p-4">
//                   {/* Beverages */}
//                   <div className="mb-2">
//                     <button
//                       onClick={() => toggleSection("beverages")}
//                       className="flex items-center justify-between w-full text-left font-semibold text-gray-800 hover:text-gray-600 transition-colors py-2"
//                     >
//                       Beverages
//                       <ChevronRight
//                         size={16}
//                         className={`transition-transform ${
//                           expandedSections.beverages ? "rotate-90" : ""
//                         }`}
//                       />
//                     </button>

//                     {expandedSections.beverages && (
//                       <div className="ml-4 space-y-1 mt-2">
//                         {/* Hot Cups */}
//                         <div>
//                           <button
//                             onClick={() => toggleSection("hotCups")}
//                             className="flex items-center justify-between w-full text-left text-sm font-medium text-gray-700 hover:text-gray-600 transition-colors py-1"
//                           >
//                             Hot Cups
//                             <ChevronRight
//                               size={14}
//                               className={`transition-transform ${
//                                 expandedSections.hotCups ? "rotate-90" : ""
//                               }`}
//                             />
//                           </button>

//                           {expandedSections.hotCups && (
//                             <div className="ml-4 space-y-1 mt-1">
//                               <Link
//                                 href="/products/single-wall-paper-cups"
//                                 className="block text-xs text-gray-500 hover:text-gray-700 transition-colors py-1"
//                                 onClick={() => setIsProductsDropdownOpen(false)}
//                               >
//                                 Double Wall Paper Cups
//                               </Link>
//                               <Link
//                                 href="/products/double-wall-paper-cups"
//                                 className="block text-xs text-gray-500 hover:text-gray-700 transition-colors py-1"
//                                 onClick={() => setIsProductsDropdownOpen(false)}
//                               >
//                                 Rippled Paper Cups
//                               </Link>
//                               <Link
//                                 href="/products/rippled-paper-cups"
//                                 className="block text-xs text-gray-500 hover:text-gray-700 transition-colors py-1"
//                                 onClick={() => setIsProductsDropdownOpen(false)}
//                               >
//                                 Heavy GSM Single Wall
//                               </Link>
//                               <Link
//                                 href="/products/heavy-gsm-single-wall"
//                                 className="block text-xs text-gray-500 hover:text-gray-700 transition-colors py-1"
//                                 onClick={() => setIsProductsDropdownOpen(false)}
//                               >
//                                 Double Wall Bubble Cups
//                               </Link>
//                               <Link
//                                 href="/products/heavy-gsm-single-wall"
//                                 className="block text-xs text-gray-500 hover:text-gray-700 transition-colors py-1"
//                                 onClick={() => setIsProductsDropdownOpen(false)}
//                               >
//                                 Single Wall Paper Cups
//                               </Link>
//                             </div>
//                           )}
//                         </div>

//                         {/* Cold Cups */}
//                         <div>
//                           <button
//                             onClick={() => toggleSection("coldCups")}
//                             className="flex items-center justify-between w-full text-left text-sm font-medium text-gray-700 hover:text-gray-600 transition-colors py-1"
//                           >
//                             Cold Cups
//                             <ChevronRight
//                               size={14}
//                               className={`transition-transform ${
//                                 expandedSections.coldCups ? "rotate-90" : ""
//                               }`}
//                             />
//                           </button>
//                           {expandedSections.coldCups && (
//                             <div className="ml-4 space-y-1 mt-1">
//                               <Link
//                                 href="/products/single-wall-paper-cups"
//                                 className="block text-xs text-gray-500 hover:text-gray-700 transition-colors py-1"
//                                 onClick={() => setIsProductsDropdownOpen(false)}
//                               >
//                                 2PE Cups
//                               </Link>
//                             </div>
//                           )}
//                         </div>
//                       </div>
//                     )}
//                   </div>

//                   {/* Food Serving */}
//                   <div className="mb-2">
//                     <button
//                       onClick={() => toggleSection("foodServing")}
//                       className="flex items-center justify-between w-full text-left font-semibold text-gray-800 hover:text-gray-600 transition-colors py-2"
//                     >
//                       Food Serving
//                       <ChevronRight
//                         size={16}
//                         className={`transition-transform ${
//                           expandedSections.foodServing ? "rotate-90" : ""
//                         }`}
//                       />
//                     </button>

//                     {expandedSections.foodServing && (
//                       <div className="ml-4 space-y-1 mt-2">
//                         <Link
//                           href="/products/food-container"
//                           className="block text-sm text-gray-600 hover:text-gray-800 transition-colors py-1"
//                           onClick={() => setIsProductsDropdownOpen(false)}
//                         >
//                           Food Container
//                         </Link>
//                         <Link
//                           href="/products/ice-cream-cups"
//                           className="block text-sm text-gray-600 hover:text-gray-800 transition-colors py-1"
//                           onClick={() => setIsProductsDropdownOpen(false)}
//                         >
//                           Ice Cream Cups
//                         </Link>
//                       </div>
//                     )}
//                   </div>

//                   {/* Serving Add-on */}
//                   <div className="mb-2">
//                     <button
//                       onClick={() => toggleSection("servingAddOn")}
//                       className="flex items-center justify-between w-full text-left font-semibold text-gray-800 hover:text-gray-600 transition-colors py-2"
//                     >
//                       Serving Add-on
//                       <ChevronRight
//                         size={16}
//                         className={`transition-transform ${
//                           expandedSections.servingAddOn ? "rotate-90" : ""
//                         }`}
//                       />
//                     </button>

//                     {expandedSections.servingAddOn && (
//                       <div className="ml-4 space-y-1 mt-2">
//                         <Link
//                           href="/products/paper-straws"
//                           className="block text-sm text-gray-600 hover:text-gray-800 transition-colors py-1"
//                           onClick={() => setIsProductsDropdownOpen(false)}
//                         >
//                           Paper Straws
//                         </Link>
//                         <Link
//                           href="/products/plastic-paper-lids"
//                           className="block text-sm text-gray-600 hover:text-gray-800 transition-colors py-1"
//                           onClick={() => setIsProductsDropdownOpen(false)}
//                         >
//                           Paper and Plastic Lids
//                         </Link>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>

//           <Link
//             href="/gallery"
//             className="text-black hover:text-gray-600 transition-colors"
//           >
//             Compostable Paper Cups
//           </Link>
//           <Link
//             href="/contact"
//             className="text-black hover:text-gray-600 transition-colors"
//           >
//             Contact
//           </Link>
//           {user ? (
//             <Button onClick={handleSignOut} className="rounded-full">
//               Sign out
//             </Button>
//           ) : null}
//         </nav>

//         {/* Mobile Toggle */}
//         <button
//           className="md:hidden p-2 text-black hover:text-gray-600 transition-colors"
//           onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//           aria-label="Toggle mobile menu"
//         >
//           {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>
//       </header>

//       {/* Mobile Menu (unchanged) */}
//       {isMobileMenuOpen && (
//         <>
//           <div
//             className="fixed inset-0 bg-black/50 z-40 md:hidden"
//             onClick={closeMobileMenu}
//           />

//           <div className="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 md:hidden transform transition-transform duration-300 ease-in-out">
//             <div className="flex flex-col h-full">
//               <div className="flex items-center justify-between p-6 border-b border-gray-200">
//                 <img src="/images/logo2.png" alt="Logo" className="w-16 h-16" />
//                 <button
//                   onClick={closeMobileMenu}
//                   className="p-2 text-gray-600 hover:text-gray-800 transition-colors"
//                   aria-label="Close menu"
//                 >
//                   <X size={24} />
//                 </button>
//               </div>

//               <nav className="flex flex-col flex-1 px-6 py-8 space-y-6">
//                 <Link
//                   href="/about"
//                   onClick={closeMobileMenu}
//                   className="text-lg font-medium text-gray-800 hover:text-gray-600 transition-colors py-3 border-b border-gray-100"
//                 >
//                   About
//                 </Link>

//                 {/* Mobile Our Products (simple static for now) */}
//                 <div className="py-3 border-b border-gray-100">
//                   <div className="text-lg font-medium text-gray-800 mb-3">
//                     Our Products
//                   </div>
//                   <div className="ml-4 space-y-2">
//                     <Link
//                       href="/products/cold-cups"
//                       onClick={closeMobileMenu}
//                       className="block text-gray-600"
//                     >
//                       Cold Cups
//                     </Link>
//                     <Link
//                       href="/products/2pe-cups"
//                       onClick={closeMobileMenu}
//                       className="block text-gray-600"
//                     >
//                       2PE Cups
//                     </Link>
//                     <Link
//                       href="/products/food-container"
//                       onClick={closeMobileMenu}
//                       className="block text-gray-600"
//                     >
//                       Food Container
//                     </Link>
//                     <Link
//                       href="/products/ice-cream-cups"
//                       onClick={closeMobileMenu}
//                       className="block text-gray-600"
//                     >
//                       Ice Cream Cups
//                     </Link>
//                   </div>
//                 </div>

//                 <Link
//                   href="/gallery"
//                   onClick={closeMobileMenu}
//                   className="text-lg font-medium text-gray-800 hover:text-gray-600 transition-colors py-3 border-b border-gray-100"
//                 >
//                   Compostable Paper Cups
//                 </Link>
//                 <Link
//                   href="/contact"
//                   onClick={closeMobileMenu}
//                   className="text-lg font-medium text-gray-800 hover:text-gray-600 transition-colors py-3 border-b border-gray-100"
//                 >
//                   Contact
//                 </Link>

//                 {user && (
//                   <div className="pt-6">
//                     <Button
//                       onClick={handleSignOut}
//                       className="w-full rounded-full bg-black text-white hover:bg-gray-800"
//                     >
//                       Sign out
//                     </Button>
//                   </div>
//                 )}
//               </nav>
//             </div>
//           </div>
//         </>
//       )}
//     </>
//   );
// }

"use client";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";

// Mock auth object for when Firebase is not configured
const mockAuth = {
  onAuthStateChanged: (callback) => {
    callback(null);
    return () => {};
  },
  signOut: async () => {
    console.log("Mock sign out");
  },
};

// Try to import Firebase auth, fallback to mock if not available
let auth;
try {
  const firebaseConfig = require("@/lib/firebase.config.js");
  auth = firebaseConfig.auth;
} catch (error) {
  console.warn("Firebase config not found, using mock auth");
  auth = mockAuth;
}

export default function Header() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState({
    beverages: false,
    foodServing: false,
    halfCups: false,
    servingAddOn: false,
    hotCups: false,
    coldCups: false,
  });

  const dropdownRef = useRef(null);

  useEffect(() => {
    const unsub = auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
    });
    return () => unsub();
  }, [router]);

  // ✅ Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsProductsDropdownOpen(false);
        setExpandedSections({
          beverages: false,
          foodServing: false,
          halfCups: false,
          servingAddOn: false,
          hotCups: false,
          coldCups: false,
        });
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSignOut = async () => {
    try {
      await auth.signOut();
      setUser(null);
      setIsMobileMenuOpen(false);
      router.replace("/");
    } catch (e) {
      console.error(e);
    }
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <>
      <header className="w-full flex items-center justify-between border-b border-white/30 px-6 py-2 z-50 fixed bg-transparent">
        <div className="flex-shrink-0 flex items-center">
          <Link href="/" onClick={closeMobileMenu}>
            <img src="/images/logo.png" alt="Logo" className="w-20 h-20" />
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-10 mr-6 items-center">
          <Link
            href="/about"
            className="text-black hover:text-gray-600 transition-colors"
          >
            About
          </Link>

          {/* ✅ Fixed Dropdown with click outside */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsProductsDropdownOpen((prev) => !prev)}
              className="flex items-center gap-1 text-black hover:text-gray-600 transition-colors"
            >
              Our Products
              <ChevronDown
                size={16}
                className={`transition-transform ${
                  isProductsDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isProductsDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-72 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                <div className="p-4">
                  {/* Beverages */}
                  <div className="mb-2">
                    <button
                      onClick={() => toggleSection("beverages")}
                      className="flex items-center justify-between w-full text-left font-semibold text-gray-800 hover:text-gray-600 transition-colors py-2"
                    >
                      Beverages
                      <ChevronRight
                        size={16}
                        className={`transition-transform ${
                          expandedSections.beverages ? "rotate-90" : ""
                        }`}
                      />
                    </button>

                    {expandedSections.beverages && (
                      <div className="ml-4 space-y-1 mt-2">
                        {/* Hot Cups */}
                        <div>
                          <button
                            onClick={() => toggleSection("hotCups")}
                            className="flex items-center justify-between w-full text-left text-sm font-medium text-gray-700 hover:text-gray-600 transition-colors py-1"
                          >
                            Hot Cups
                            <ChevronRight
                              size={14}
                              className={`transition-transform ${
                                expandedSections.hotCups ? "rotate-90" : ""
                              }`}
                            />
                          </button>

                          {expandedSections.hotCups && (
                            <div className="ml-4 space-y-1 mt-1">
                              <Link
                                href="/our-products/double-wall-paper-cups"
                                className="block text-xs text-gray-500 hover:text-gray-700 transition-colors py-1"
                                onClick={() => setIsProductsDropdownOpen(false)}
                              >
                                Double Wall Paper Cups
                              </Link>
                              <Link
                                href="/our-products/rippled-paper-cups"
                                className="block text-xs text-gray-500 hover:text-gray-700 transition-colors py-1"
                                onClick={() => setIsProductsDropdownOpen(false)}
                              >
                                Rippled Paper Cups
                              </Link>
                              <Link
                                href="/our-products/heavy-gsm-single-wall"
                                className="block text-xs text-gray-500 hover:text-gray-700 transition-colors py-1"
                                onClick={() => setIsProductsDropdownOpen(false)}
                              >
                                Heavy GSM Single Wall
                              </Link>
                              <Link
                                href="/our-products/double-wall-embossed-paper-cups"
                                className="block text-xs text-gray-500 hover:text-gray-700 transition-colors py-1"
                                onClick={() => setIsProductsDropdownOpen(false)}
                              >
                                DOUBLE WALL EMBOSSED PAPER CUPS
                              </Link>
                              <Link
                                href="/our-products/single-wall-paper-cups"
                                className="block text-xs text-gray-500 hover:text-gray-700 transition-colors py-1"
                                onClick={() => setIsProductsDropdownOpen(false)}
                              >
                                Single Wall Paper Cups
                              </Link>
                            </div>
                          )}
                        </div>

                        {/* Cold Cups */}
                        <div>
                          <button
                            onClick={() => toggleSection("coldCups")}
                            className="flex items-center justify-between w-full text-left text-sm font-medium text-gray-700 hover:text-gray-600 transition-colors py-1"
                          >
                            Cold Cups
                            <ChevronRight
                              size={14}
                              className={`transition-transform ${
                                expandedSections.coldCups ? "rotate-90" : ""
                              }`}
                            />
                          </button>
                          {expandedSections.coldCups && (
                            <div className="ml-4 space-y-1 mt-1">
                              <Link
                                href="/our-products/2pe-cups"
                                className="block text-xs text-gray-500 hover:text-gray-700 transition-colors py-1"
                                onClick={() => setIsProductsDropdownOpen(false)}
                              >
                                2PE Cups
                              </Link>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Food Serving */}
                  <div className="mb-2">
                    <button
                      onClick={() => toggleSection("foodServing")}
                      className="flex items-center justify-between w-full text-left font-semibold text-gray-800 hover:text-gray-600 transition-colors py-2"
                    >
                      Food Serving
                      <ChevronRight
                        size={16}
                        className={`transition-transform ${
                          expandedSections.foodServing ? "rotate-90" : ""
                        }`}
                      />
                    </button>

                    {expandedSections.foodServing && (
                      <div className="ml-4 space-y-1 mt-2">
                        <Link
                          href="/our-products/food-container"
                          className="block text-sm text-gray-600 hover:text-gray-800 transition-colors py-1"
                          onClick={() => setIsProductsDropdownOpen(false)}
                        >
                          Food Container
                        </Link>
                        <Link
                          href="/our-products/ice-cream-cups"
                          className="block text-sm text-gray-600 hover:text-gray-800 transition-colors py-1"
                          onClick={() => setIsProductsDropdownOpen(false)}
                        >
                          Ice Cream Cups
                        </Link>
                      </div>
                    )}
                  </div>

                  {/* Serving Add-on */}
                  <div className="mb-2">
                    <button
                      onClick={() => toggleSection("servingAddOn")}
                      className="flex items-center justify-between w-full text-left font-semibold text-gray-800 hover:text-gray-600 transition-colors py-2"
                    >
                      Serving Add-on
                      <ChevronRight
                        size={16}
                        className={`transition-transform ${
                          expandedSections.servingAddOn ? "rotate-90" : ""
                        }`}
                      />
                    </button>

                    {expandedSections.servingAddOn && (
                      <div className="ml-4 space-y-1 mt-2">
                        <Link
                          href="/our-products/paper-straws"
                          className="block text-sm text-gray-600 hover:text-gray-800 transition-colors py-1"
                          onClick={() => setIsProductsDropdownOpen(false)}
                        >
                          Paper Straws
                        </Link>
                        <Link
                          href="/our-products/plastic-paper-lids"
                          className="block text-sm text-gray-600 hover:text-gray-800 transition-colors py-1"
                          onClick={() => setIsProductsDropdownOpen(false)}
                        >
                          Paper and Plastic Lids
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link
            href="/compostable"
            className="text-black hover:text-gray-600 transition-colors"
          >
            Compostable Paper Cups
          </Link>
          <Link
            href="/contact"
            className="text-black hover:text-gray-600 transition-colors"
          >
            Contact
          </Link>
          {user ? (
            <Button onClick={handleSignOut} className="rounded-full">
              Sign out
            </Button>
          ) : null}
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-black hover:text-gray-600 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={closeMobileMenu}
          />

          <div className="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 md:hidden transform transition-transform duration-300 ease-in-out">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <img src="/images/logo.png" alt="Logo" className="w-16 h-16" />
                <button
                  onClick={closeMobileMenu}
                  className="p-2 text-gray-600 hover:text-gray-800 transition-colors"
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>

              <nav className="flex flex-col flex-1 px-6 py-8 space-y-6">
                <Link
                  href="/about"
                  onClick={closeMobileMenu}
                  className="text-lg font-medium text-gray-800 hover:text-gray-600 transition-colors py-3 border-b border-gray-100"
                >
                  About
                </Link>

                {/* Mobile Our Products */}
                <div className="py-3 border-b border-gray-100">
                  <div className="text-lg font-medium text-gray-800 mb-3">
                    Our Products
                  </div>
                  <div className="ml-4 space-y-2">
                    <Link
                      href="/our-products/2pe-cups"
                      onClick={closeMobileMenu}
                      className="block text-gray-600"
                    >
                      2PE Cups
                    </Link>
                    <Link
                      href="/our-products/food-container"
                      onClick={closeMobileMenu}
                      className="block text-gray-600"
                    >
                      Food Container
                    </Link>
                    <Link
                      href="/our-products/ice-cream-cups"
                      onClick={closeMobileMenu}
                      className="block text-gray-600"
                    >
                      Ice Cream Cups
                    </Link>
                    <Link
                      href="/our-products/paper-straws"
                      onClick={closeMobileMenu}
                      className="block text-gray-600"
                    >
                      Paper Straws
                    </Link>
                  </div>
                </div>

                <Link
                  href="/gallery"
                  onClick={closeMobileMenu}
                  className="text-lg font-medium text-gray-800 hover:text-gray-600 transition-colors py-3 border-b border-gray-100"
                >
                  Compostable Paper Cups
                </Link>
                <Link
                  href="/contact"
                  onClick={closeMobileMenu}
                  className="text-lg font-medium text-gray-800 hover:text-gray-600 transition-colors py-3 border-b border-gray-100"
                >
                  Contact
                </Link>

                {user && (
                  <div className="pt-6">
                    <Button
                      onClick={handleSignOut}
                      className="w-full rounded-full bg-black text-white hover:bg-gray-800"
                    >
                      Sign out
                    </Button>
                  </div>
                )}
              </nav>
            </div>
          </div>
        </>
      )}
    </>
  );
}
