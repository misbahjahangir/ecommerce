import Image from "next/image";
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/Featuredprod";
import LatestProduct from "@/components/Latest";
import ShopexOffer from "@/components/Shopexoffer";
import UniqueFeatures from "@/components/Uniquefeatures";
import TrendingProducts from "@/components/Trendingproducts";
import Discount from "@/components/Discount";
import TopCateg from "@/components/Topcategories";
import Sub from "@/components/Sub";
import Blogs from "@/components/Blog";




export default function Home() {
  return (
    <div>
      < Hero />
      < FeaturedProducts />
      < LatestProduct />
      < ShopexOffer />
      < UniqueFeatures />
      < TrendingProducts />
      < Discount />
      < TopCateg />
      <Sub/>
      <Blogs />
      
    </div>
  );
}

