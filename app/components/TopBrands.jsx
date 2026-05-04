export default function TopBrands() {
  return (
    <div className="px-10 py-10">

      {/* HEADING */}
      <div className="flex items-center justify-center gap-2 mb-8">
        <img src="/icons/tag-card.png" className="w-7 h-7" />
        <h2 className="text-2xl md:text-4xl font-bold text-gray-800">
          Top Brands
        </h2>
      </div>

      {/*  BRAND CARDS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

        <div className="bg-white shadow rounded-xl p-5 flex justify-center items-center hover:scale-110 transition duration-300">
          <img src="/icons/nike.png" className="h-10" />
        </div>

        <div className="bg-white shadow rounded-xl p-5 flex justify-center items-center hover:scale-110 transition duration-300">
          <img src="/icons/adidas.png" className="h-10" />
        </div>

        <div className="bg-white shadow rounded-xl p-5 flex justify-center items-center hover:scale-110 transition duration-300">
          <img src="/icons/hm_logo.png" className="h-10" />
        </div>

        <div className="bg-white shadow rounded-xl p-5 flex justify-center items-center hover:scale-110 transition duration-300">
          <img src="/icons/Zara-Logo.png" className="h-10" />
        </div>

      </div>

    </div>
  );
}