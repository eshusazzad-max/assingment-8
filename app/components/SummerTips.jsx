"use client";

export default function SummerTips() {
  return (
    <div className="px-6 md:px-10 py-10">

      {/* HEADING (CENTER + ICON) */}
      <div className="flex items-center justify-center gap-3 mb-10 animate__animated animate__fadeInDown">
        <img
          src="/icons/summer.png"
          alt="summer"
          className="w-8 h-8"
        />
        <h2 className="text-3xl md:text-3xl font-bold text-gray-800">
          Summer Care Tips
        </h2>
      </div>

      {/*  3 BOX GRID */}
      <div className="grid md:grid-cols-3 gap-6">

        {/* BOX 1 */}
        <div className="bg-white shadow-lg rounded-xl p-6 hover:scale-105 transition duration-300 animate__animated animate__fadeInUp">
          <h3 className="text-2xl font-semibold text-lg mb-3">Hydration</h3>
          <ul className="text-gray-600 space-y-2">
            <li>Drink plenty of water</li>
            <li>Always carry a water bottle</li>
          </ul>
        </div>

        {/* BOX 2 */}
        <div className="bg-white shadow-lg rounded-xl p-6 hover:scale-105 transition duration-300 animate__animated animate__fadeInUp animate__delay-1s">
          <h3 className="text-2xl font-semibold text-lg mb-3">Skin Care</h3>
          <ul className="text-gray-600 space-y-2">
            <li>Use sunscreen SPF 50+</li>
            <li> Apply moisturizer regularly</li>
          </ul>
        </div>

        {/* BOX 3 */}
        <div className="bg-white shadow-lg rounded-xl p-6 hover:scale-105 transition duration-300 animate__animated animate__fadeInUp animate__delay-2s">
          <h3 className="text-2xl font-semibold text-lg mb-3">Protection</h3>
          <ul className="text-gray-600 space-y-2">
            <li>Wear sunglasses outdoors</li>
            <li> Use hats to protect from sun</li>
          </ul>
        </div>

      </div>

    </div>
  );
}