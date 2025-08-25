// "use client";
// import { Data } from "@/app/data/ProductData";
// import { useParams } from "next/navigation";
// import { useEffect, useState } from "react";
// import { getAllFoodItems } from "@/utils/firebaseFunctions";

// // Mock function for when Firebase is not configured
// const mockGetAllFoodItems = async () => {
//   console.warn("Firebase functions not available, using mock data");
//   return [];
// };

// // Try to import Firebase functions, fallback to mock if not available
// // let getAllFoodItems
// // try {
// //   const firebaseFunctions = require("@/utils/firebaseFunctions")
// //   getAllFoodItems = firebaseFunctions.getAllFoodItems
// // } catch (error) {
// //   console.warn("Firebase functions not found, using mock")
// //   getAllFoodItems = mockGetAllFoodItems
// // }

// // Try to import product data, fallback to empty array if not available
// // let Data = []
// // try {
// //   const productData = require("@/data/ProductData")
// //   Data = productData.Data || []
// // } catch (error) {
// //   console.warn("Product data not found, using empty array")
// // }

// // Utility to group items by category
// function groupByCategory(items) {
//   const grouped = {};
//   items.forEach((item) => {
//     if (!grouped[item.category]) {
//       grouped[item.category] = [];
//     }
//     grouped[item.category].push(item.imageURL);
//   });
//   return Object.entries(grouped).map(([category, imageURLs]) => ({
//     category,
//     imageURLs,
//   }));
// }

// // Map slugs to display names and filter categories
// const slugToCategory = {
//   "double-wall-paper-cups": "Double Wall Paper Cups",
//   "rippled-paper-cups": "Rippled Paper Cups",
//   "heavy-gsm-single-wall": "Heavy GSM Single Wall",
//   "double-wall-bubble-cups": "Double Wall Bubble Cups",
//   "single-wall-paper-cups": "Single Wall Paper Cups",
//   "2pe-cups": "2PE Cups",
//   "food-container": "Food Container",
//   "ice-cream-cups": "Ice Cream Cups",
//   "paper-straws": "Paper Straws",
//   "plastic-paper-lids": "Paper and Plastic Lids",
// };

// export default function ProductSlugPage() {
//   const params = useParams();
//   const slug = params.slug;
//   const [groupedData, setGroupedData] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [err, setErr] = useState(null);

//   const categoryName =
//     slugToCategory[slug] ||
//     slug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());

//   const fetchData = async () => {
//     setLoading(true);
//     setErr(null);
//     try {
//       const items = await getAllFoodItems();

//       // Group fetched items by category
//       const grouped = groupByCategory([...Data, ...items]);

//       // Filter by the selected category based on slug
//       const filteredData = grouped.filter(
//         (cat) =>
//           cat.category.toLowerCase().includes(categoryName.toLowerCase()) ||
//           categoryName.toLowerCase().includes(cat.category.toLowerCase())
//       );

//       setGroupedData(filteredData.length > 0 ? filteredData : grouped);
//     } catch (e) {
//       setErr(e?.message || "Failed to fetch items");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, [slug, categoryName]);

//   if (loading)
//     return (
//       <>
//         {/* <Header /> */}
//         <div className="pt-24 flex justify-center items-center min-h-screen">
//           <div>Loading...</div>
//         </div>
//       </>
//     );

//   if (err)
//     return (
//       <>
//         {/* <Header /> */}
//         <div className="pt-24 flex justify-center items-center min-h-screen">
//           <div>{err}</div>
//         </div>
//       </>
//     );

//   return (
//     <>
//       {/* <Header /> */}
//       <div className="pt-24 w-full max-w-7xl mx-auto py-20 space-y-12">
//         {/* Page Title */}
//         <div className="text-center mb-12">
//           <h1 className="text-4xl font-bold text-gray-900 mb-4">
//             {categoryName}
//           </h1>
//           {groupedData.map((cat) => (
//             <div className="text-lg text-gray-600" key={cat.category}>
//               AVAILABLE SIZES
//               <p className=" text-sm text-gray-500">{cat.sizes}</p>
//               <p className=" text-sm text-gray-500">{cat.ml}</p>
//             </div>
//           ))}
//         </div>

//         {groupedData.map((cat) => (
//           <div key={cat.category} className="space-y-6">
//             {/* Category Title */}
//             <div className="flex items-start">
//               <h2 className="text-2xl font-bold text-gray-900 min-w-fit pr-8">
//                 {cat.category}
//               </h2>
//               <p className="text-sm text-gray-600 mt-1"></p>
//             </div>

//             {/* Product Grid */}
//             <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
//               {cat.imageURLs.map((imageUrl, idx) => (
//                 <div
//                   key={idx}
//                   className="group cursor-pointer transition-transform hover:scale-105"
//                 >
//                   <div className="relative aspect-square border-[#D7C9BB] bg-[#EBDFD3] rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow">
//                     <img
//                       src={imageUrl || "/placeholder.svg"}
//                       alt={`${cat.category} ${idx + 1}`}
//                       className="object-contain p-2 w-full h-full"
//                       sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
//                     />
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}

//         {groupedData.length === 0 && (
//           <div className="text-center py-12">
//             <p className="text-gray-500 text-lg">
//               No products found for "{categoryName}". Please check back later.
//             </p>
//           </div>
//         )}
//       </div>
//     </>
//   );
// }

"use client";
import { Data } from "@/app/data/ProductData";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getAllFoodItems } from "@/utils/firebaseFunctions";

// Mock function for when Firebase is not configured
// const mockGetAllFoodItems = async () => {
//   console.warn("Firebase functions not available, using mock data")
//   return []
// }

// Try to import Firebase functions, fallback to mock if not available
// let getAllFoodItems
// try {
//   const firebaseFunctions = require("@/utils/firebaseFunctions")
//   getAllFoodItems = firebaseFunctions.getAllFoodItems
// } catch (error) {
//   console.warn("Firebase functions not found, using mock")
//   getAllFoodItems = mockGetAllFoodItems
// }

// Try to import product data, fallback to empty array if not available
// try {
//   const productData = require("@/data/ProductData")
//   Data = productData.Data || []
// } catch (error) {
//   console.warn("Product data not found, using empty array")
// }

function groupByCategory(items) {
  const grouped = {};
  items.forEach((item) => {
    if (!grouped[item.category]) {
      grouped[item.category] = {
        items: [],
        sizes: item.sizes || "",
        ml: item.ml || "",
      };
    }
    grouped[item.category].items.push(item);
  });
  return Object.entries(grouped).map(([category, data]) => ({
    category,
    imageURLs: data.items.map((item) => item.imageURL),
    sizes: data.sizes,
    ml: data.ml,
  }));
}

// Map slugs to display names and filter categories
const slugToCategory = {
  "double-wall-paper-cups": "Double Wall Paper Cups",
  "rippled-paper-cups": "Rippled Paper Cups",
  "heavy-gsm-single-wall": "Heavy GSM Single Wall",
  "double-wall-embossed-paper-cups": "Double Wall Embossed Paper Cups",
  "single-wall-paper-cups": "Single Wall Paper Cups",
  "2pe-cups": "2PE Cups",
  "food-container": "Food Container",
  "ice-cream-cups": "Ice Cream Cups",
  "paper-straws": "Paper Straws",
  "plastic-paper-lids": "Paper and Plastic Lids",
};

export default function ProductSlugPage() {
  const params = useParams();
  const slug = params.slug;
  const [groupedData, setGroupedData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);

  const categoryName =
    slugToCategory[slug] ||
    slug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());

  const fetchData = async () => {
    setLoading(true);
    setErr(null);
    try {
      const items = await getAllFoodItems();

      // Group fetched items by category
      const grouped = groupByCategory([...Data, ...items]);

      // Filter by the selected category based on slug
      const filteredData = grouped.filter(
        (cat) =>
          cat.category.toLowerCase().includes(categoryName.toLowerCase()) ||
          categoryName.toLowerCase().includes(cat.category.toLowerCase())
      );

      setGroupedData(filteredData.length > 0 ? filteredData : grouped);
    } catch (e) {
      setErr(e?.message || "Failed to fetch items");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [slug, categoryName]);

  if (loading)
    return (
      <>
        <div className="pt-24 flex justify-center items-center min-h-screen">
          <div>Loading...</div>
        </div>
      </>
    );

  if (err)
    return (
      <>
        <div className="pt-24 flex justify-center items-center min-h-screen">
          <div>{err}</div>
        </div>
      </>
    );

  return (
    <>
      <div className="pt-24 w-full max-w-7xl mx-auto py-20 space-y-12">
        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {categoryName}
          </h1>
          {groupedData.length > 0 && (
            <div className="text-lg text-gray-600">
              AVAILABLE SIZES
              <p className="text-sm text-gray-500">{groupedData[0].sizes}</p>
              <p className="text-sm text-gray-500">{groupedData[0].ml}</p>
            </div>
          )}
        </div>

        {groupedData.map((cat) => (
          <div key={cat.category} className="space-y-6">
            {/* Category Title */}
            <div className="flex items-start">
              <h2 className="text-2xl font-bold text-gray-900 min-w-fit pr-8">
                {cat.category}
              </h2>
              <p className="text-sm text-gray-600 mt-1"></p>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {cat.imageURLs.map((imageUrl, idx) => (
                <div
                  key={idx}
                  className="group cursor-pointer transition-transform hover:scale-105"
                >
                  <div className="relative aspect-square border-[#D7C9BB] bg-[#EBDFD3] rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow">
                    <img
                      src={imageUrl || "/placeholder.svg"}
                      alt={`${cat.category} ${idx + 1}`}
                      className="object-contain p-2 w-full h-full"
                      sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {groupedData.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No products found for &quot;{categoryName}&quot;. Please check
              back later.
            </p>
          </div>
        )}
      </div>
    </>
  );
}
