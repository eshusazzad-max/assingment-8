import HeroSection from "./components/HeroSection";
import PopularProducts from "./components/PopularProducts";
import SummerTips from "./components/SummerTips";
import TopBrands from "./components/TopBrands";


export default function Home() {
  return (
    <div>
      <HeroSection />
       <PopularProducts />
       <SummerTips />
       <TopBrands />
    </div>
  );
}