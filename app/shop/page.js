"use client";
import Link from "next/link";
import Image from "next/image";

// Images
import d7 from "@/public/images/D7.png";
import ratings from "@/public/images/ratings.png";

import tp1 from "@/public/images/tp1.png";
import tp2 from "@/public/images/tp2.png";
import tp3 from "@/public/images/tp3.png";
import tp4 from "@/public/images/tp4.png";
import hearte from "@/public/images/heart-empty.png";
import heartf from "@/public/images/heart-green.png";
import share from "@/public/images/share.png";
import shopcart from "@/public/images/shopping-cart.png";

// Component Imports
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ShopProductList from "@/components/displayProducts/shopProductList";
import Subscribe from "@/components/subscribe/subscribe";

export default function Home() {
  return (
    <div className="text-[#4D4D4D] m-0">
      <div class="flex justify-center shrink-0 items-center bg-white sticky top-0 z-[100]">
        <div class="max-w-[1440px]  shrink-0 w-full navspace py-6 xl:py-4 px-6 xl:px-10">
          <Navbar />
        </div>
      </div>

      <main>
        <section id="Discover" className="bodyCon">
          <div className="px-6 lg:px-10 pt-[42px] lg:pt-24 pb-20 lg:pb-[134px] flex gap-6 lg:gap-12 flex-col">
            <ShopProductList />

          </div>
        </section>

        <Subscribe />
      </main>

      <Footer />
    </div>
  );
}
