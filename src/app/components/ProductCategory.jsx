// "use client";
// import Image from "next/image";
// import { getAllFoodItems } from "@/utils/firebaseFunctions";
// import { useEffect, useState } from "react";
// const Data = [
//   {
//     id: 1,
//     category: "Single Wall Paper Cups",
//     imageURL: [
//       "/images/p1.jpeg",
//       "/images/p2.jpeg",
//       "/images/p3.jpeg",
//       "/images/p4.jpeg",
//       "/images/p5.jpeg",
//       "/images/p6.jpeg",
//       "/images/p7.jpeg",
//       "/images/p8.jpeg",
//       "/images/p9.jpeg",
//       "/images/p10.jpeg",
//       "/images/p11.jpeg",
//       "/images/p12.jpeg",
//       "/images/p13.jpeg",
//       "/images/p14.jpeg",
//       "/images/p15.jpeg",
//       "/images/p16.jpeg",
//       "/images/p17.jpeg",
//       "/images/p18.jpeg",
//       "/images/p19.jpeg",
//     ],
//   },
//   {
//     id: 2,
//     category: "Double Wall Paper Cups",
//     imageURL: [
//       "/images/d1.jpeg",
//       "/images/d2.jpeg",
//       "/images/d3.jpeg",
//       "/images/d4.jpeg",
//       "/images/d5.jpeg",
//       "/images/d6.jpeg",
//       "/images/d7.jpeg",
//       "/images/d8.jpeg",
//       "/images/d9.jpeg",
//       "/images/d10.jpeg",
//       "/images/d11.jpeg",
//       "/images/d12.jpeg",
//       "/images/d13.jpeg",
//       "/images/d14.jpeg",
//       "/images/d15.jpeg",
//       "/images/d16.jpeg",
//       "/images/d17.jpeg",
//       "/images/d18.jpeg",
//       "/images/d19.jpeg",
//       "/images/d20.jpeg",
//       "/images/d21.jpeg",
//       "/images/d22.jpeg",
//       "/images/d23.jpeg",
//       "/images/d24.jpeg",
//       "/images/d25.jpeg",
//       "/images/d26.jpeg",
//       "/images/d27.jpeg",
//       "/images/d28.jpeg",
//       "/images/d29.jpeg",
//       "/images/d30.jpeg",
//     ],
//   },
//   {
//     id: 3,
//     category: "Rippled Paper Cups",
//     imageURL: [
//       "/images/r1.jpeg",
//       "/images/r2.jpeg",
//       "/images/r3.jpeg",
//       "/images/r4.jpeg",
//       "/images/r5.jpeg",
//       "/images/r6.jpeg",
//       "/images/r7.jpeg",
//       "/images/r8.jpeg",
//       "/images/r9.jpeg",
//       "/images/r10.jpeg",
//       "/images/r11.jpeg",
//       "/images/r12.jpeg",
//       "/images/r13.jpeg",
//       "/images/r14.jpeg",
//       "/images/r15.jpeg",
//       "/images/r16.jpeg",
//       "/images/r17.jpeg",
//       "/images/r18.jpeg",
//       "/images/r19.jpeg",
//       "/images/r20.jpeg",
//       "/images/r21.jpeg",
//       "/images/r22.jpeg",
//       "/images/r23.jpeg",
//       "/images/r24.jpeg",
//       "/images/r25.jpeg",
//     ],
//   },
//   {
//     id: 4,
//     category: "Paper Food Container With Paper Lid",
//     imageURL: ["/images/f1.jpeg", "/images/f2.jpeg", "/images/f3.jpeg"],
//   },
//   {
//     id: 5,
//     category: "Paper straws",
//     imageURL: ["/images/s1.jpeg", "/images/s2.jpeg"],
//   },
//   {
//     id: 6,
//     category: "Plastic Lid for Paper Cups",
//     imageURL: ["/images/l1.jpeg", "/images/l2.jpg", "/images/l3.jpg"],
//   },
// ];

// export default function ProductCategory() {
//   // const [data, setData] = useState([]);
//   // const [loading, setLoading] = useState(false);
//   // const [err, setErr] = useState(null);

//   // const fetchData = async () => {
//   //   setLoading(true);
//   //   setErr(null);
//   //   try {
//   //     const items = await getAllFoodItems();
//   //     setData(items);
//   //   } catch (e) {
//   //     setErr(e?.message || "Failed to fetch items");
//   //   } finally {
//   //     setLoading(false);
//   //   }
//   // };

//   // useEffect(() => {
//   //   fetchData();
//   // }, []);
//   return (
//     <div className="w-full max-w-7xl mx-auto py-20 space-y-12">
//       {Data.map((item) => (
//         <div key={item.id} className="space-y-6">
//           {/* Category Title */}
//           <div className="flex items-start">
//             <h2 className="text-2xl font-bold text-gray-900 min-w-fit pr-8">
//               {item.category}
//             </h2>
//           </div>

//           {/* Product Grid */}
//           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
//             {item.imageURL.map((imageUrl, index) => (
//               <div
//                 key={index}
//                 className="group cursor-pointer transition-transform hover:scale-105"
//               >
//                 <div className="relative aspect-square border-[#D7C9BB] bg-[#EBDFD3] rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow">
//                   <Image
//                     src={imageUrl || "/placeholder.svg"}
//                     alt={`${item.category} ${index + 1}`}
//                     fill
//                     className="object-contain p-2"
//                     sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
//                   />
//                 </div>

//                 {/* Product Info */}
//                 {/* <div className="mt-3 text-center">
//                   <h3 className="text-sm font-medium text-gray-900 truncate">
//                     {category.title.split(" ").slice(0, 2).join(" ")}
//                   </h3>
//                   <p className="text-lg font-bold text-gray-900 mt-1">
//                     ${(Math.random() * 20 + 10).toFixed(0)}
//                   </p>
//                 </div> */}
//               </div>
//             ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

"use client";
import Image from "next/image";
import { getAllFoodItems } from "@/utils/firebaseFunctions";
import { useEffect, useState } from "react";
import { Data } from "../data/ProductData";

// Utility to group items by category
function groupByCategory(items) {
  const grouped = {};
  items.forEach((item) => {
    if (!grouped[item.category]) {
      grouped[item.category] = [];
    }
    grouped[item.category].push(item.imageURL);
  });
  // Convert to array of { category, imageURLs }
  console.log(grouped);
  return Object.entries(grouped).map(([category, imageURLs]) => ({
    category,
    imageURLs,
  }));
}

export default function ProductCategory() {
  const [groupedData, setGroupedData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    setErr(null);
    try {
      const items = await getAllFoodItems();

      // Group fetched items by category
      const grouped = groupByCategory([...Data, ...items]);
      setGroupedData(grouped);
    } catch (e) {
      setErr(e?.message || "Failed to fetch items");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (err) return <div>{err}</div>;
  console.log(groupedData);
  return (
    <div className="w-full max-w-7xl mx-auto py-20 space-y-12">
      {groupedData.map((cat) => (
        <div key={cat.category} className="space-y-6">
          {/* Category Title */}
          <div className="flex items-start">
            <h2 className="text-2xl font-bold text-gray-900 min-w-fit pr-8">
              {cat.category}
            </h2>
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
    </div>
  );
}
