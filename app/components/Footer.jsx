import Image from "next/image";
import sun from "../assets/sun.png";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-10">

      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">

        {/* 🔥 LOGO */}
        <div className="flex items-center gap-2">
          <Image src={sun} alt="logo" width={40} height={40} />
          <span className="text-4xl font-bold bg-gradient-to-r from-orange-500 via-red-500 to-orange-700 bg-clip-text text-transparent">
            SunCart
          </span>
        </div>

        {/*  CONTACT */}
        <div>
          <h3 className="text-2xl font-semibold mb-2">Contact</h3>
          <p className="text-sm text-gray-400">Email: eshusazzad@gmail.com</p>
          <p className="text-sm text-gray-400">Phone: +880 1737 456789</p>
        </div>

        {/* LINKS + SOCIAL */}
        <div>
          <h3 className="text-2xl font-semibold mb-2">Quick Links</h3>

          <ul className="text-sm text-gray-400 space-y-1">
            <li className="hover:text-orange-400 cursor-pointer">
              Privacy Policy
            </li>
            <li className="hover:text-orange-400 cursor-pointer">
              Terms & Conditions
            </li>
            <li className="hover:text-orange-400 cursor-pointer">
              Support
            </li>
          </ul>

          {/*  SOCIAL ICONS */}
          <div className="flex gap-4 mt-4">

            <a href="https://facebook.com" target="_blank">
              <img src="/icons/facebook.png" className="w-6 h-6 hover:scale-110 transition" />
            </a>

            <a href="https://linkedin.com" target="_blank">
              <img src="/icons/linkedin.png" className="w-6 h-6 hover:scale-110 transition" />
            </a>

            <a href="https://youtube.com" target="_blank">
              <img src="/icons/youtube.png" className="w-6 h-6 hover:scale-110 transition" />
            </a>

            <a href="https://twitter.com" target="_blank">
              <img src="/icons/twitter.png" className="w-6 h-6 hover:scale-110 transition" />
            </a>

          </div>

        </div>

      </div>

      {/*  COPYRIGHT */}
      <div className="text-center text-gray-500 text-sm pb-5">
        © {new Date().getFullYear()} SunCart. All rights reserved.
      </div>

    </footer>
  );
}