// import Image from "next/image";
// import { Search, Menu, Camera } from "lucide-react";
// import { Button } from "@/components/ui/button";

// export default function SunzineGallery() {
//   const categories = [
//     { name: "ALL", active: true },
//     { name: "SINGLE WALL PAPER CUPS", active: false },
//     { name: "DOUBLE WALL PAPER CUPS", active: false },
//     { name: "RIPPLED PAPER CUPS", active: false },
//     { name: "PAPER FOOD CONTAINER WITH PAPER LID", active: false },
//     { name: "PAPER STRAWS", active: false },
//     { name: "PLASTIC LID FOR PAPER CUPS", active: false },
//   ];

//   const galleryImages = [
//     { src: "/images/cup1.png", className: "row-span-2" },
//     { src: "/images/cup2.png", className: "row-span-1" },
//     { src: "/images/cup3.png", className: "row-span-1" },
//     { src: "/images/cup4.png", className: "row-span-1" },
//     { src: "/images/cup5.png", className: "row-span-2" },
//     { src: "/images/cup6.png", className: "row-span-1" },
//     { src: "/images/cup7.png", className: "row-span-2" },
//     { src: "/images/cup8.png", className: "row-span-1" },
//     { src: "/images/cup11.png", className: "row-span-1" },
//     { src: "/images/cup12.png", className: "row-span-1" },
//     { src: "/images/cup1.png", className: "row-span-2" },
//     { src: "/images/cup2.png", className: "row-span-1" },
//     { src: "/images/cup3.png", className: "row-span-1" },
//   ];

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Hero Section */}
//       <section className="py-16 px-6">
//         <div className="max-w-4xl mx-auto text-center">
//           <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
//             WELCOME TO WORLD STAR PACKAGING PHOTO GALLERY
//           </h1>
//           <p className="text-xl text-gray-700 font-medium">
//             WITH CREATIVE & UNIQUE STYLE
//           </p>
//         </div>
//       </section>

//       {/* Category Navigation */}
//       <div className="px-6 mb-8">
//         <div className="max-w-7xl mx-auto">
//           <div className="flex items-center justify-center space-x-8 text-sm font-medium">
//             {categories.map((category, index) => (
//               <button
//                 key={index}
//                 className={`pb-2 transition-colors ${
//                   category.active
//                     ? "text-teal-600 border-b-2 border-teal-600"
//                     : "text-gray-600 hover:text-gray-900"
//                 }`}
//               >
//                 {category.name}
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Gallery Grid */}
//       <div className="px-6 pb-16">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
//             {galleryImages.map((image, index) => (
//               <div
//                 key={index}
//                 className={`relative overflow-hidden rounded-lg cursor-pointer group ${image.className}`}
//               >
//                 <Image
//                   src={image.src || "/placeholder.svg"}
//                   alt={`Gallery image ${index + 1}`}
//                   fill
//                   className="object-cover transition-transform duration-300 group-hover:scale-105"
//                 />
//                 <div className="absolute inset-0 bg-black opacity-10 group-hover:bg-opacity-20 transition-all duration-300" />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

//current
// "use client";

// import Image from "next/image";
// import {
//   Search,
//   Menu,
//   Camera,
//   X,
//   ChevronLeft,
//   ChevronRight,
// } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { useState, useEffect } from "react";

// export default function SunzineGallery() {
//   const [selectedImageIndex, setSelectedImageIndex] = useState(null);
//   const [isCarouselOpen, setIsCarouselOpen] = useState(false);

//   const categories = [
//     { name: "ALL", active: true },
//     { name: "SINGLE WALL PAPER CUPS", active: false },
//     { name: "DOUBLE WALL PAPER CUPS", active: false },
//     { name: "RIPPLED PAPER CUPS", active: false },
//     { name: "PAPER FOOD CONTAINER WITH PAPER LID", active: false },
//     { name: "PAPER STRAWS", active: false },
//     { name: "PLASTIC LID FOR PAPER CUPS", active: false },
//   ];

//   const galleryImages = [
//     {
//       src: "/images/cup1.png",
//       className: "row-span-2",
//       alt: "Mountain landscape view",
//       category: "",
//     },
//     {
//       src: "/images/cup2.png",
//       className: "row-span-1",
//       alt: "Modern interior",
//       category: "",
//     },
//     {
//       src: "/images/cup3.png",
//       className: "row-span-1",
//       alt: "Neon geometric design",
//       category: "",
//     },
//     {
//       src: "/images/cup4.png",
//       className: "row-span-1",
//       alt: "Gourmet food",
//       category: "",
//     },
//     {
//       src: "/images/cup5.png",
//       className: "row-span-2",
//       alt: "Portrait photography",
//       category: "",
//     },
//     {
//       src: "/images/cup6.png",
//       className: "row-span-1",
//       alt: "Coffee latte art",
//       category: "",
//     },
//     {
//       src: "/images/cup7.png",
//       className: "row-span-2",
//       alt: "Engagement ring",
//       category: "",
//     },
//     {
//       src: "/images/cup8.png",
//       className: "row-span-1",
//       alt: "Dog on pool float",
//       category: "",
//     },
//     {
//       src: "/images/cup11.png",
//       className: "row-span-1",
//       alt: "Coffee beans",
//       category: "",
//     },
//     {
//       src: "/images/cup12.png",
//       className: "row-span-1",
//       alt: "Abstract banana art",
//       category: "",
//     },
//     {
//       src: "/images/cup1.png",
//       className: "row-span-2",
//       alt: "Tattoo artist",
//       category: "",
//     },
//     {
//       src: "/images/cup2.png",
//       className: "row-span-1",
//       alt: "Vintage car detail",
//       category: "",
//     },
//     {
//       src: "/images/cup3.png",
//       className: "row-span-1",
//       alt: "Couple at sunset",
//       category: "",
//     },
//   ];

//   const openCarousel = (index) => {
//     setSelectedImageIndex(index);
//     setIsCarouselOpen(true);
//   };

//   const closeCarousel = () => {
//     setIsCarouselOpen(false);
//     setSelectedImageIndex(null);
//   };

//   const goToPrevious = () => {
//     if (selectedImageIndex !== null) {
//       setSelectedImageIndex(
//         selectedImageIndex === 0
//           ? galleryImages.length - 1
//           : selectedImageIndex - 1
//       );
//     }
//   };

//   const goToNext = () => {
//     if (selectedImageIndex !== null) {
//       setSelectedImageIndex(
//         selectedImageIndex === galleryImages.length - 1
//           ? 0
//           : selectedImageIndex + 1
//       );
//     }
//   };

//   // Keyboard navigation
//   useEffect(() => {
//     const handleKeyDown = (event) => {
//       if (!isCarouselOpen) return;

//       switch (event.key) {
//         case "Escape":
//           closeCarousel();
//           break;
//         case "ArrowLeft":
//           goToPrevious();
//           break;
//         case "ArrowRight":
//           goToNext();
//           break;
//       }
//     };

//     document.addEventListener("keydown", handleKeyDown);
//     return () => document.removeEventListener("keydown", handleKeyDown);
//   }, [isCarouselOpen, selectedImageIndex]);

//   // Prevent body scroll when carousel is open
//   useEffect(() => {
//     if (isCarouselOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "unset";
//     }

//     return () => {
//       document.body.style.overflow = "unset";
//     };
//   }, [isCarouselOpen]);

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Header */}
//       {/* <header className="border-b border-gray-200 px-6 py-4">
//         <div className="flex items-center justify-between max-w-7xl mx-auto">
//           <div className="flex items-center space-x-2">
//             <Camera className="w-6 h-6" />
//             <span className="text-xl font-bold tracking-wider">SUNZINE</span>
//           </div>

//           <nav className="hidden md:flex items-center space-x-8">
//             <a
//               href="#"
//               className="text-teal-600 font-medium border-b-2 border-teal-600 pb-1"
//             >
//               HOME
//             </a>
//             <a href="#" className="text-gray-600 hover:text-gray-900">
//               ALBUMS
//             </a>
//             <a href="#" className="text-gray-600 hover:text-gray-900">
//               ABOUT
//             </a>
//             <a href="#" className="text-gray-600 hover:text-gray-900">
//               BLOG
//             </a>
//             <a href="#" className="text-gray-600 hover:text-gray-900">
//               CONTACT
//             </a>
//           </nav>

//           <div className="flex items-center space-x-4">
//             <Search className="w-5 h-5 text-gray-600 cursor-pointer" />
//             <Menu className="w-5 h-5 text-gray-600 cursor-pointer" />
//           </div>
//         </div>
//       </header> */}

//       {/* Hero Section */}
//       <section className="py-16 px-6">
//         <div className="max-w-4xl mx-auto text-center">
//           <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
//             WELCOME TO WORLD STAR PACKAGING PHOTO GALLERY
//           </h1>
//           <p className="text-xl text-gray-700 font-medium">
//             WITH CREATIVE & UNIQUE STYLE
//           </p>
//         </div>
//       </section>

//       {/* Category Navigation */}
//       <div className="px-6 mb-8">
//         <div className="max-w-7xl mx-auto">
//           <div className="flex items-center justify-center space-x-8 text-sm font-medium">
//             {categories.map((category, index) => (
//               <button
//                 key={index}
//                 className={`pb-2 transition-colors ${
//                   category.active
//                     ? "text-teal-600 border-b-2 border-teal-600"
//                     : "text-gray-600 hover:text-gray-900"
//                 }`}
//               >
//                 {category.name}
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Gallery Grid */}
//       <div className="px-6 pb-16">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
//             {galleryImages.map((image, index) => (
//               <div
//                 key={index}
//                 className={`relative overflow-hidden rounded-lg cursor-pointer group ${image.className}`}
//                 onClick={() => openCarousel(index)}
//               >
//                 <Image
//                   src={image.src || "/placeholder.svg"}
//                   alt={image.alt}
//                   fill
//                   className="object-cover transition-transform duration-300 group-hover:scale-105"
//                 />
//                 <div className="absolute inset-0 bg-black opacity-10 group-hover:bg-opacity-20 transition-all duration-300" />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Full Screen Carousel Modal */}
//       {isCarouselOpen && selectedImageIndex !== null && (
//         <div className="fixed inset-0 z-50 bg-black bg-opacity-95 flex items-center justify-center">
//           {/* Close Button */}
//           <button
//             onClick={closeCarousel}
//             className="absolute top-4 right-4 z-60 text-white hover:text-gray-300 transition-colors"
//             aria-label="Close carousel"
//           >
//             <X className="w-8 h-8" />
//           </button>

//           {/* Previous Button */}
//           <button
//             onClick={goToPrevious}
//             className="absolute left-4 top-1/2 transform -translate-y-1/2 z-60 text-white hover:text-gray-300 transition-colors"
//             aria-label="Previous image"
//           >
//             <ChevronLeft className="w-8 h-8" />
//           </button>

//           {/* Next Button */}
//           <button
//             onClick={goToNext}
//             className="absolute right-4 top-1/2 transform -translate-y-1/2 z-60 text-white hover:text-gray-300 transition-colors"
//             aria-label="Next image"
//           >
//             <ChevronRight className="w-8 h-8" />
//           </button>

//           {/* Main Image */}
//           <div className="relative w-full h-full max-w-6xl max-h-[90vh] mx-4">
//             <Image
//               src={galleryImages[selectedImageIndex].src || "/placeholder.svg"}
//               alt={galleryImages[selectedImageIndex].alt}
//               fill
//               className="object-contain"
//               priority
//             />
//           </div>

//           {/* Image Counter */}
//           <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm">
//             {selectedImageIndex + 1} / {galleryImages.length}
//           </div>

//           {/* Thumbnail Navigation */}
//           {/* <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 max-w-md overflow-x-auto">
//             {galleryImages.map((image, index) => (
//               <button
//                 key={index}
//                 onClick={() => setSelectedImageIndex(index)}
//                 className={`relative w-12 h-12 flex-shrink-0 rounded overflow-hidden ${
//                   index === selectedImageIndex
//                     ? "ring-2 ring-white"
//                     : "opacity-60 hover:opacity-80"
//                 }`}
//               >
//                 <Image
//                   src={image.src || "/placeholder.svg"}
//                   alt={image.alt}
//                   fill
//                   className="object-cover"
//                 />
//               </button>
//             ))}
//           </div> */}
//         </div>
//       )}
//     </div>
//   );
// }

"use client";

import Image from "next/image";
import {
  Search,
  Menu,
  Camera,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export default function SunzineGallery() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [isCarouselOpen, setIsCarouselOpen] = useState(false);
  const [categories, setCategories] = useState([
    { name: "ALL", active: true },
    { name: "SINGLE WALL PAPER CUPS", active: false },
    { name: "DOUBLE WALL PAPER CUPS", active: false },
    { name: "RIPPLED PAPER CUPS", active: false },
    { name: "PAPER FOOD CONTAINER WITH PAPER LID", active: false },
    { name: "PAPER STRAWS", active: false },
    { name: "PLASTIC LID FOR PAPER CUPS", active: false },
  ]);

  // Sample images with categories (className removed for dynamic layout)
  const [galleryImages, setGalleryImages] = useState([
    {
      src: "/images/p1.jpeg",
      alt: "Mountain landscape view",
      category: "SINGLE WALL PAPER CUPS",
    },
    {
      src: "/images/p2.jpeg",
      alt: "Modern interior",
      category: "SINGLE WALL PAPER CUPS",
    },
    {
      src: "/images/p3.jpeg",
      alt: "Neon geometric design",
      category: "SINGLE WALL PAPER CUPS",
    },
    {
      src: "/images/p4.jpeg",
      alt: "Gourmet food",
      category: "SINGLE WALL PAPER CUPS",
    },
    {
      src: "/images/p5.jpeg",
      alt: "Portrait photography",
      category: "SINGLE WALL PAPER CUPS",
    },
    {
      src: "/images/p6.jpeg",
      alt: "Coffee latte art",
      category: "SINGLE WALL PAPER CUPS",
    },
    {
      src: "/images/p7.jpeg",
      alt: "Engagement ring",
      category: "SINGLE WALL PAPER CUPS",
    },
    {
      src: "/images/p8.jpeg",
      alt: "Dog on pool float",
      category: "SINGLE WALL PAPER CUPS",
    },
    {
      src: "/images/p9.jpeg",
      alt: "Coffee beans",
      category: "SINGLE WALL PAPER CUPS",
    },
    {
      src: "/images/p10.jpeg",
      alt: "Abstract banana art",
      category: "SINGLE WALL PAPER CUPS",
    },
    {
      src: "/images/p11.jpeg",
      alt: "Tattoo artist",
      category: "SINGLE WALL PAPER CUPS",
    },
    {
      src: "/images/p12.jpeg",
      alt: "Vintage car detail",
      category: "SINGLE WALL PAPER CUPS",
    },
    {
      src: "/images/p13.jpeg",
      alt: "Couple at sunset",
      category: "SINGLE WALL PAPER CUPS",
    },
    {
      src: "/images/p14.jpeg",
      alt: "Couple at sunset",
      category: "SINGLE WALL PAPER CUPS",
    },
    {
      src: "/images/p15.jpeg",
      alt: "Couple at sunset",
      category: "SINGLE WALL PAPER CUPS",
    },
    {
      src: "/images/p16.jpeg",
      alt: "Couple at sunset",
      category: "SINGLE WALL PAPER CUPS",
    },
    {
      src: "/images/p17.jpeg",
      alt: "Couple at sunset",
      category: "SINGLE WALL PAPER CUPS",
    },
    {
      src: "/images/p18.jpeg",
      alt: "Couple at sunset",
      category: "SINGLE WALL PAPER CUPS",
    },
    {
      src: "/images/p19.jpeg",
      alt: "Couple at sunset",
      category: "SINGLE WALL PAPER CUPS",
    },
    {
      src: "/images/r1.jpeg",
      alt: "Couple at sunset",
      category: "RIPPLED PAPER CUPS",
    },
    {
      src: "/images/r2.jpeg",
      alt: "Couple at sunset",
      category: "RIPPLED PAPER CUPS",
    },
    {
      src: "/images/r3.jpeg",
      alt: "Couple at sunset",
      category: "RIPPLED PAPER CUPS",
    },
    {
      src: "/images/r4.jpeg",
      alt: "Couple at sunset",
      category: "RIPPLED PAPER CUPS",
    },
    {
      src: "/images/r5.jpeg",
      alt: "Couple at sunset",
      category: "RIPPLED PAPER CUPS",
    },
    {
      src: "/images/r6.jpeg",
      alt: "Couple at sunset",
      category: "RIPPLED PAPER CUPS",
    },
    {
      src: "/images/r7.jpeg",
      alt: "Couple at sunset",
      category: "RIPPLED PAPER CUPS",
    },
    {
      src: "/images/r8.jpeg",
      alt: "Couple at sunset",
      category: "RIPPLED PAPER CUPS",
    },
    {
      src: "/images/r9.jpeg",
      alt: "Couple at sunset",
      category: "RIPPLED PAPER CUPS",
    },
    {
      src: "/images/r10.jpeg",
      alt: "Couple at sunset",
      category: "RIPPLED PAPER CUPS",
    },
    {
      src: "/images/r11.jpeg",
      alt: "Couple at sunset",
      category: "RIPPLED PAPER CUPS",
    },
    {
      src: "/images/r12.jpeg",
      alt: "Couple at sunset",
      category: "RIPPLED PAPER CUPS",
    },
    {
      src: "/images/r13.jpeg",
      alt: "Couple at sunset",
      category: "RIPPLED PAPER CUPS",
    },
    {
      src: "/images/r14.jpeg",
      alt: "Couple at sunset",
      category: "RIPPLED PAPER CUPS",
    },
    {
      src: "/images/r15.jpeg",
      alt: "Couple at sunset",
      category: "RIPPLED PAPER CUPS",
    },
    {
      src: "/images/r16.jpeg",
      alt: "Couple at sunset",
      category: "RIPPLED PAPER CUPS",
    },
    {
      src: "/images/r17.jpeg",
      alt: "Couple at sunset",
      category: "RIPPLED PAPER CUPS",
    },
    {
      src: "/images/r18.jpeg",
      alt: "Couple at sunset",
      category: "RIPPLED PAPER CUPS",
    },
    {
      src: "/images/r19.jpeg",
      alt: "Couple at sunset",
      category: "RIPPLED PAPER CUPS",
    },
    {
      src: "/images/r20.jpeg",
      alt: "Couple at sunset",
      category: "RIPPLED PAPER CUPS",
    },
    {
      src: "/images/r21.jpeg",
      alt: "Couple at sunset",
      category: "RIPPLED PAPER CUPS",
    },
    {
      src: "/images/r22.jpeg",
      alt: "Couple at sunset",
      category: "RIPPLED PAPER CUPS",
    },
    {
      src: "/images/r23.jpeg",
      alt: "Couple at sunset",
      category: "RIPPLED PAPER CUPS",
    },
    {
      src: "/images/r24.jpeg",
      alt: "Couple at sunset",
      category: "RIPPLED PAPER CUPS",
    },
    {
      src: "/images/r25.jpeg",
      alt: "Couple at sunset",
      category: "RIPPLED PAPER CUPS",
    },
    {
      src: "/images/d1.jpeg",
      alt: "Couple at sunset",
      category: "DOUBLE WALL PAPER CUPS",
    },

    {
      src: "/images/d2.jpeg",
      alt: "Couple at sunset",
      category: "DOUBLE WALL PAPER CUPS",
    },
    {
      src: "/images/d3.jpeg",
      alt: "Couple at sunset",
      category: "DOUBLE WALL PAPER CUPS",
    },
    {
      src: "/images/d4.jpeg",
      alt: "Couple at sunset",
      category: "DOUBLE WALL PAPER CUPS",
    },
    {
      src: "/images/d5.jpeg",
      alt: "Couple at sunset",
      category: "DOUBLE WALL PAPER CUPS",
    },
    {
      src: "/images/d6.jpeg",
      alt: "Couple at sunset",
      category: "DOUBLE WALL PAPER CUPS",
    },
    {
      src: "/images/d7.jpeg",
      alt: "Couple at sunset",
      category: "DOUBLE WALL PAPER CUPS",
    },
    {
      src: "/images/d8.jpeg",
      alt: "Couple at sunset",
      category: "DOUBLE WALL PAPER CUPS",
    },
    {
      src: "/images/d9.jpeg",
      alt: "Couple at sunset",
      category: "DOUBLE WALL PAPER CUPS",
    },
    {
      src: "/images/d10.jpeg",
      alt: "Couple at sunset",
      category: "DOUBLE WALL PAPER CUPS",
    },
    {
      src: "/images/d11.jpeg",
      alt: "Couple at sunset",
      category: "DOUBLE WALL PAPER CUPS",
    },
    {
      src: "/images/d12.jpeg",
      alt: "Couple at sunset",
      category: "DOUBLE WALL PAPER CUPS",
    },
    {
      src: "/images/d13.jpeg",
      alt: "Couple at sunset",
      category: "DOUBLE WALL PAPER CUPS",
    },
    {
      src: "/images/d14.jpeg",
      alt: "Couple at sunset",
      category: "DOUBLE WALL PAPER CUPS",
    },
    {
      src: "/images/d15.jpeg",
      alt: "Couple at sunset",
      category: "DOUBLE WALL PAPER CUPS",
    },
    {
      src: "/images/d16.jpeg",
      alt: "Couple at sunset",
      category: "DOUBLE WALL PAPER CUPS",
    },
    {
      src: "/images/d17.jpeg",
      alt: "Couple at sunset",
      category: "DOUBLE WALL PAPER CUPS",
    },
    {
      src: "/images/d18.jpeg",
      alt: "Couple at sunset",
      category: "DOUBLE WALL PAPER CUPS",
    },
    {
      src: "/images/d19.jpeg",
      alt: "Couple at sunset",
      category: "DOUBLE WALL PAPER CUPS",
    },
    {
      src: "/images/d20.jpeg",
      alt: "Couple at sunset",
      category: "DOUBLE WALL PAPER CUPS",
    },
    {
      src: "/images/d21.jpeg",
      alt: "Couple at sunset",
      category: "DOUBLE WALL PAPER CUPS",
    },
    {
      src: "/images/d22.jpeg",
      alt: "Couple at sunset",
      category: "DOUBLE WALL PAPER CUPS",
    },
    {
      src: "/images/d23.jpeg",
      alt: "Couple at sunset",
      category: "DOUBLE WALL PAPER CUPS",
    },
    {
      src: "/images/d24.jpeg",
      alt: "Couple at sunset",
      category: "DOUBLE WALL PAPER CUPS",
    },
    {
      src: "/images/d25.jpeg",
      alt: "Couple at sunset",
      category: "DOUBLE WALL PAPER CUPS",
    },
    {
      src: "/images/d26.jpeg",
      alt: "Couple at sunset",
      category: "DOUBLE WALL PAPER CUPS",
    },
    {
      src: "/images/d27.jpeg",
      alt: "Couple at sunset",
      category: "DOUBLE WALL PAPER CUPS",
    },
    {
      src: "/images/d28.jpeg",
      alt: "Couple at sunset",
      category: "DOUBLE WALL PAPER CUPS",
    },
    {
      src: "/images/d29.jpeg",
      alt: "Couple at sunset",
      category: "DOUBLE WALL PAPER CUPS",
    },
    {
      src: "/images/d30.jpeg",
      alt: "Couple at sunset",
      category: "DOUBLE WALL PAPER CUPS",
    },

    {
      src: "/images/f1.jpeg",
      alt: "Couple at sunset",
      category: "PAPER FOOD CONTAINER WITH PAPER LID",
    },
    {
      src: "/images/f2.jpeg",
      alt: "Couple at sunset",
      category: "PAPER FOOD CONTAINER WITH PAPER LID",
    },
    {
      src: "/images/f3.jpeg",
      alt: "Couple at sunset",
      category: "PAPER FOOD CONTAINER WITH PAPER LID",
    },
    {
      src: "/images/s1.jpeg",
      alt: "Couple at sunset",
      category: "PAPER STRAWS",
    },
    {
      src: "/images/s2.jpeg",
      alt: "Couple at sunset",
      category: "PAPER STRAWS",
    },
    {
      src: "/images/l1.jpeg",
      alt: "Couple at sunset",
      category: "PLASTIC LID FOR PAPER CUPS",
    },
    {
      src: "/images/l2.jpg",
      alt: "Couple at sunset",
      category: "PLASTIC LID FOR PAPER CUPS",
    },
    {
      src: "/images/l3.jpg",
      alt: "Couple at sunset",
      category: "PLASTIC LID FOR PAPER CUPS",
    },
  ]);

  // Function to fetch data from server
  const fetchGalleryImages = async () => {
    try {
      const response = await fetch("/api/gallery-images"); // Replace with your API endpoint
      const data = await response.json();
      setGalleryImages(data);
    } catch (error) {
      console.error("Error fetching gallery images:", error);
    }
  };

  // Fetch data on component mount
  useEffect(() => {
    // Uncomment the line below when you have your API ready
    // fetchGalleryImages();
  }, []);

  // Filter images based on selected category
  const activeCategory = categories.find((c) => c.active)?.name || "ALL";
  const filteredImages =
    activeCategory === "ALL"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  const openCarousel = (index) => {
    setSelectedImageIndex(index);
    setIsCarouselOpen(true);
  };

  const closeCarousel = () => {
    setIsCarouselOpen(false);
    setSelectedImageIndex(null);
  };

  const goToPrevious = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(
        selectedImageIndex === 0
          ? filteredImages.length - 1
          : selectedImageIndex - 1
      );
    }
  };

  const goToNext = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(
        selectedImageIndex === filteredImages.length - 1
          ? 0
          : selectedImageIndex + 1
      );
    }
  };

  // Category click handler
  const handleCategoryClick = (clickedIndex) => {
    setCategories(
      categories.map((cat, idx) => ({
        ...cat,
        active: idx === clickedIndex,
      }))
    );
    setSelectedImageIndex(null); // Reset carousel on category change
  };

  // Generate random row span for masonry effect
  const getRandomRowSpan = () => {
    const spans = [1, 2, 3];
    return spans[Math.floor(Math.random() * spans.length)];
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!isCarouselOpen) return;

      switch (event.key) {
        case "Escape":
          closeCarousel();
          break;
        case "ArrowLeft":
          goToPrevious();
          break;
        case "ArrowRight":
          goToNext();
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isCarouselOpen, selectedImageIndex, filteredImages.length]);

  // Prevent body scroll when carousel is open
  useEffect(() => {
    if (isCarouselOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isCarouselOpen]);

  return (
    <div className="min-h-screen bg-[#F5ECE4] py-20">
      {/* Hero Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
            WELCOME TO WORLD STAR PACKAGING PHOTO GALLERY
          </h1>
          <p className="text-xl text-gray-700 font-medium">
            WITH CREATIVE & UNIQUE STYLE
          </p>
        </div>
      </section>

      {/* Category Navigation */}
      <div className="px-6 mb-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-sm font-medium">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`pb-2 px-2 transition-colors whitespace-nowrap ${
                  category.active
                    ? "text-teal-600 border-b-2 border-teal-600"
                    : "text-gray-600 hover:text-gray-900"
                }`}
                onClick={() => handleCategoryClick(index)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Masonry Gallery Grid */}
      <div className="px-6 pb-16">
        <div className="max-w-7xl mx-auto">
          <div
            className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4"
            style={{ columnFill: "balance" }}
          >
            {filteredImages.map((image, index) => (
              <div
                key={`${image.src}-${index}`}
                className="relative overflow-hidden rounded-lg cursor-pointer group break-inside-avoid mb-4 bg-white px-4 pt-4 pb-14"
                onClick={() => openCarousel(index)}
              >
                <div
                  className="relative w-full overflow-hidden"
                  style={{
                    height: `${200 + getRandomRowSpan() * 100}px`,
                  }}
                >
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-20 transition-opacity duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Full Screen Carousel Modal */}
      {isCarouselOpen && selectedImageIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-95 flex items-center justify-center">
          {/* Close Button */}
          <button
            onClick={closeCarousel}
            className="absolute top-4 right-4 z-60 text-white hover:text-gray-300 transition-colors"
            aria-label="Close carousel"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Previous Button */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-60 text-white hover:text-gray-300 transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          {/* Next Button */}
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-60 text-white hover:text-gray-300 transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          {/* Main Image */}
          <div className="relative w-full h-full max-w-6xl max-h-[90vh] mx-4">
            <Image
              src={filteredImages[selectedImageIndex].src || "/placeholder.svg"}
              alt={filteredImages[selectedImageIndex].alt}
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Image Counter */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm">
            {selectedImageIndex + 1} / {filteredImages.length}
          </div>
        </div>
      )}
    </div>
  );
}
