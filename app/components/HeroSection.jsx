import hero from "../assets/herobanner.png";
import fire from "../assets/fire.png";


export default function HeroSection() {
  return (
    <div className="mt-8">
      <div className="relative rounded-2xl overflow-hidden h-[460px] bg-[#f4efe7]">

        <img
          src={hero.src}
          className="w-full h-full object-cover object-right" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#f4efe7]/70 via-[#f4efe7]/30 to-transparent"></div>

        <div className="absolute inset-0 flex items-center px-12">
          <div className="max-w-xl text-gray-800">

            <p className="uppercase tracking-widest text-sm text-gray-500 mb-3">
              Limited Time Offer
            </p>

            <h1 className="text-6xl font-bold leading-tight">
              <span className="text-orange-500 italic">Summer</span>{" "}
              <span className="text-gray-900">Sale</span>
            </h1>

            <p className="mt-4 text-lg text-gray-600">
              Cool styles. Hot deals. Just for you!
            </p>

            <div className="mt-8 flex items-center gap-6 bg-white shadow-md rounded-xl px-6 py-4 w-fit">
              <div>
                <p className="text-sm text-gray-500">UP TO</p>
                <h2 className="text-4xl font-bold text-orange-500">
                  50% OFF
                </h2>
              </div>

              <div className="border-l h-12"></div>

              <div className="flex items-center gap-2 text-gray-800 font-semibold text-lg">
                <img src={fire.src} className="w-6 h-6" />
                HOT DEALS
              </div>
            </div>

            <button className="mt-8 px-8 py-3 bg-orange-500 text-white rounded-full text-lg hover:bg-orange-600 transition">
              Shop Now →
            </button>

          </div>
        </div>

        

      </div>
    </div>
  );
}