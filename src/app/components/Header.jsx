"use client";
import React, { useEffect, useState } from "react";
import { FizziLogo } from "./FizziLogo";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { auth } from "@/lib/firebase.config";
import { onAuthStateChanged, signOut } from "firebase/auth";

export default function Header() {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        // router.replace("/");
      } else {
        setUser(currentUser);
      }
    });
    return () => unsub();
  }, [router]);
  return (
    // <header className="-mb-28 flex justify-center py-4">
    //   <FizziLogo className="z-10 h-20 cursor-pointer text-[#6F4E37]" />
    // </header>
    <header className="w-full flex items-center justify-between border-b border-white/30 px-6 py-2 z-50 fixed bg-transparent">
      <div className="flex-shrink-0 flex items-center">
        <a href="/">
          <img src="/images/logo2.png" alt="Logo" className="w-20 h-20" />
        </a>
      </div>
      <nav className="flex gap-10 mr-6 items-center">
        <a
          href="/about"
          className="text-black hover:text-gray-600 transition-colors"
        >
          About
        </a>
        <a
          href="/our-products"
          className="text-black hover:text-gray-600 transition-colors"
        >
          Our Products
        </a>
        <a
          href="/gallery"
          className="text-black hover:text-gray-600 transition-colors"
        >
          Gallery
        </a>
        <a
          href="/contact"
          className="text-black hover:text-gray-600 transition-colors"
        >
          Contact
        </a>
        {user ? (
          <Button
            onClick={async () => {
              try {
                await signOut(auth);
                setUser(null);
                router.replace("/");
              } catch (e) {
                console.error(e);
              }
            }}
            className="rounded-full"
          >
            Sign out
          </Button>
        ) : null}
      </nav>
    </header>
  );
}

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
