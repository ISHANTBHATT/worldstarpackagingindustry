// "use client";
// import React, { useState } from "react";
// import { getAllFoodItems } from "@/utils/firebaseFunctions";

// function Products() {
//   const [data, setData] = useState(null);
//   const fetchData = async () => {
//     await getAllFoodItems().then((data) => {
//       setData(data);
//     });
//   };
//   return <div>Products</div>;
// }

// export default Products;

// "use client";
// import React, { useEffect, useState } from "react";
// import { getAllFoodItems, deleteItemById } from "@/utils/firebaseFunctions";
// import { Trash2 } from "lucide-react";

// function Products() {
//   const [data, setData] = useState([]); // store array of items
//   const [loading, setLoading] = useState(true);
//   const [err, setErr] = useState(null);
//   const [deletingId, setDeletingId] = useState(null);

//   const fetchData = async () => {
//     setLoading(true);
//     setErr(null);
//     try {
//       const items = await getAllFoodItems();
//       setData(items);
//     } catch (e) {
//       setErr(e?.message || "Failed to fetch items");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const handleDelete = async (id) => {
//     // optimistic update
//     const prev = data;
//     setDeletingId(id);
//     setData((curr) => curr.filter((item) => item.id !== id));
//     try {
//       await deleteItemById(id);
//     } catch (e) {
//       // revert on failure
//       setData(prev);
//       alert(e?.message || "Failed to delete item");
//     } finally {
//       setDeletingId(null);
//     }
//   };

//   if (loading) return <div>Loading…</div>;
//   if (err) return <div>Error: {err}</div>;

//   return (
//     <div style={{ padding: 16 }}>
//       <h2>Products</h2>
//       {data.length === 0 ? (
//         <p>No items found.</p>
//       ) : (
//         <div className="flex ">
//           {data.map((item) => (
//             <div
//               key={item?.id}
//               className="w-60 h-full bg-cardOverlay rounded-lg py-2 px-4  my-12 backdrop-blur-lg hover:drop-shadow-lg flex flex-col items-center justify-evenly relative"
//             >
//               <div className="w-full flex items-center justify-between">
//                 <div
//                   className="w-40 h-40 -mt-8 drop-shadow-2xl"
//                   whileHover={{ scale: 1.2 }}
//                 >
//                   <img
//                     src={item?.imageURL}
//                     alt=""
//                     className="w-full h-full object-contain"
//                   />
//                 </div>

//                 <div className="w-full flex flex-col items-end justify-end -mt-8">
//                   <p className="text-textColor font-semibold text-base md:text-lg">
//                     {item?.category}
//                   </p>
//                 </div>

//                 <div
//                   whileTap={{ scale: 0.75 }}
//                   className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md -mt-8"
//                 >
//                   <Trash2
//                     onClick={() => handleDelete(item.id)}
//                     disabled={deletingId === item.id}
//                     className="text-white"
//                   />
//                 </div>
//               </div>

//               {/*
//               <button
//                 onClick={() => handleDelete(item.id)}
//                 disabled={deletingId === item.id}
//               >
//                 {deletingId === item.id ? "Deleting…" : "Delete"}
//               </button> */}
//             </div>
//           ))}
//         </div>
//       )}
//       {/* <button onClick={fetchData} disabled={loading} style={{ marginTop: 12 }}>
//         Refresh
//       </button> */}
//     </div>
//   );
// }

// export default Products;

"use client";
import { useEffect, useState } from "react";
import { getAllFoodItems, deleteItemById } from "@/utils/firebaseFunctions";
import { Trash2 } from "lucide-react";

function Products() {
  const [data, setData] = useState([]); // store array of items
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);
  const [deletingId, setDeletingId] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    setErr(null);
    try {
      const items = await getAllFoodItems();
      setData(items);
    } catch (e) {
      setErr(e?.message || "Failed to fetch items");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    // optimistic update
    const prev = data;
    setDeletingId(id);
    setData((curr) => curr.filter((item) => item.id !== id));
    try {
      await deleteItemById(id);
    } catch (e) {
      // revert on failure
      setData(prev);
      alert(e?.message || "Failed to delete item");
    } finally {
      setDeletingId(null);
    }
  };

  if (loading) return <div className="p-4">Loading…</div>;
  if (err) return <div className="p-4">Error: {err}</div>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Products</h2>
      {data.length === 0 ? (
        <p className="text-gray-500">No items found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data.map((item) => (
            <div
              key={item?.id}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200 relative group"
            >
              {/* Delete button - top right */}
              <button
                onClick={() => handleDelete(item.id)}
                disabled={deletingId === item.id}
                className="absolute top-4 right-4 w-8 h-8 bg-red-500 hover:bg-red-600 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10"
              >
                <Trash2 className="w-4 h-4 text-white" />
              </button>

              {/* Product image */}
              <div className="flex justify-center mb-4">
                <div className="w-32 h-32 flex items-center justify-center">
                  <img
                    src={item?.imageURL || "/placeholder.svg"}
                    alt={item?.title || "Product"}
                    className="w-full h-full object-contain hover:scale-105 transition-transform duration-200"
                  />
                </div>
              </div>

              {/* Product info */}
              <div className="text-center space-y-2">
                <h3 className="text-lg font-medium text-gray-800 lowercase">
                  {item?.category || "product"}
                </h3>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Products;
