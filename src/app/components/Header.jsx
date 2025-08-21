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

"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { auth } from "@/lib/firebase.config.js";
import { Menu, X } from "lucide-react";

export default function Header() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const unsub = auth.onAuthStateChanged((currentUser) => {
      if (!currentUser) {
        // router.replace("/");
      } else {
        setUser(currentUser);
      }
    });
    return () => unsub();
  }, [router]);

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

  return (
    <>
      <header className="w-full flex items-center justify-between border-b border-white/30 px-6 py-2 z-50 fixed bg-transparent">
        <div className="flex-shrink-0 flex items-center">
          <Link href="/" onClick={closeMobileMenu}>
            <img src="/images/logo2.png" alt="Logo" className="w-20 h-20" />
          </Link>
        </div>

        <nav className="hidden md:flex gap-10 mr-6 items-center">
          <Link
            href="/about"
            className="text-black hover:text-gray-600 transition-colors"
          >
            About
          </Link>
          <Link
            href="/our-products"
            className="text-black hover:text-gray-600 transition-colors"
          >
            Our Products
          </Link>
          <Link
            href="/gallery"
            className="text-black hover:text-gray-600 transition-colors"
          >
            Gallery
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

        <button
          className="md:hidden p-2 text-black hover:text-gray-600 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={closeMobileMenu}
          />

          {/* Mobile menu sidebar */}
          <div className="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 md:hidden transform transition-transform duration-300 ease-in-out">
            <div className="flex flex-col h-full">
              {/* Mobile menu header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <img src="/images/logo2.png" alt="Logo" className="w-16 h-16" />
                <button
                  onClick={closeMobileMenu}
                  className="p-2 text-gray-600 hover:text-gray-800 transition-colors"
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Mobile navigation links */}
              <nav className="flex flex-col flex-1 px-6 py-8 space-y-6">
                <Link
                  href="/about"
                  onClick={closeMobileMenu}
                  className="text-lg font-medium text-gray-800 hover:text-gray-600 transition-colors py-3 border-b border-gray-100"
                >
                  About
                </Link>
                <Link
                  href="/our-products"
                  onClick={closeMobileMenu}
                  className="text-lg font-medium text-gray-800 hover:text-gray-600 transition-colors py-3 border-b border-gray-100"
                >
                  Our Products
                </Link>
                <Link
                  href="/gallery"
                  onClick={closeMobileMenu}
                  className="text-lg font-medium text-gray-800 hover:text-gray-600 transition-colors py-3 border-b border-gray-100"
                >
                  Gallery
                </Link>
                <Link
                  href="/contact"
                  onClick={closeMobileMenu}
                  className="text-lg font-medium text-gray-800 hover:text-gray-600 transition-colors py-3 border-b border-gray-100"
                >
                  Contact
                </Link>

                {/* Mobile sign out button */}
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
