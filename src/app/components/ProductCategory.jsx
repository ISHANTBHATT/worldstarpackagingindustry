import Image from "next/image";

const Data = [
  {
    id: 1,
    title: "Single Wall Paper Cups",
    imageURL: [
      "/images/cup1.png",
      "/images/cup2.png",
      "/images/cup3.png",
      "/images/cup4.png",
      "/images/cup5.png",
    ],
  },
  {
    id: 2,
    title: "Double Wall Paper Cups",
    imageURL: [
      "/images/cup6.png",
      "/images/cup7.png",
      "/images/cup8.png",
      "/images/cup11.png",
      "/images/cp1.png",
    ],
  },
  {
    id: 3,
    title: "Rippled Paper Cups",
    imageURL: ["/images/cup6.png", "/images/cup7.png", "/images/cup8.png"],
  },
  {
    id: 4,
    title: "Paper Food Container With Paper Lid",
    imageURL: ["/images/cup6.png", "/images/cup7.png", "/images/cup8.png"],
  },
  {
    id: 5,
    title: "Paper straws",
    imageURL: ["/images/cup6.png", "/images/cup7.png", "/images/cup8.png"],
  },
  {
    id: 6,
    title: "Plastic Lid for Paper Cups",
    imageURL: ["/images/cup6.png", "/images/cup7.png", "/images/cup8.png"],
  },
];

export default function ProductCategory() {
  return (
    <div className="w-full max-w-7xl mx-auto py-20 space-y-12">
      {Data.map((category) => (
        <div key={category.id} className="space-y-6">
          {/* Category Title */}
          <div className="flex items-start">
            <h2 className="text-2xl font-bold text-gray-900 min-w-fit pr-8">
              {category.title}
            </h2>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {category.imageURL.map((imageUrl, index) => (
              <div
                key={index}
                className="group cursor-pointer transition-transform hover:scale-105"
              >
                <div className="relative aspect-square border-[#D7C9BB] bg-[#EBDFD3] rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow">
                  <Image
                    src={imageUrl || "/placeholder.svg"}
                    alt={`${category.title} ${index + 1}`}
                    fill
                    className="object-contain p-2"
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                  />
                </div>

                {/* Product Info */}
                {/* <div className="mt-3 text-center">
                  <h3 className="text-sm font-medium text-gray-900 truncate">
                    {category.title.split(" ").slice(0, 2).join(" ")}
                  </h3>
                  <p className="text-lg font-bold text-gray-900 mt-1">
                    ${(Math.random() * 20 + 10).toFixed(0)}
                  </p>
                </div> */}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
