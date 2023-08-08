"use client";
import Link from "next/link";
import Image from "next/image";

// Component Imports
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

// Images
import pv1 from "@/public/images/pv1.png";
import pv2 from "@/public/images/pv2.png";
import pv3 from "@/public/images/pv3.png";

import pr1 from "@/public/images/products/temp1.jpg";

import pr2 from "@/public/images/products/pv2.png";
import pr3 from "@/public/images/products/pv3.png";
import pr4 from "@/public/images/products/pv4.png";
import pr5 from "@/public/images/products/pv5.png";
import ratings from "@/public/images/ratings.png";
import heartf from "@/public/images/heart-empty.png";
import share from "@/public/images/share.png";
import shopcart from "@/public/images/shopping-cart.png";
import chevleft from "@/public/images/pr-left.png";
import chevright from "@/public/images/pr-right.png";
import ratingsLarge from "@/public/images/ratingsLarge.png";
import pvavatar from "@/public/images/pv-avatar.png";
import zeroratings from "@/public/images/0ratings.png";

export default function Home() {
  return (
    <div className="text-[#4D4D4D] m-0">
      <div class="flex justify-center shrink-0 items-center bg-white sticky top-0 z-[100]">
        <div class="max-w-[1440px] shrink-0 w-full navspace py-4 px-10">
          <Navbar />
        </div>
      </div>

      <main className="pt-16">
        <div className="bodyCon">

          <div className=" px-10">
            <div class="flex gap-[50px] w-full py-6 justify-center items-center bg-[#EFEFEF] rounded-full">
              <div className="flex shrink-0 gap-[10px]">
                <Image className="w-[28px] h-[28px]" src={pv1} alt="" />
                <span className="text-xl font-semibold tracking-[-0.4px] text-black">
                  Free shipping over #0000 in *location
                </span>
              </div>
              <div className="flex shrink-0 gap-[10px]">
                <Image className="w-[28px] h-[28px]" src={pv2} alt="" />
                <span className="text-xl font-semibold tracking-[-0.4px] text-black">
                  Cash on delivery option
                </span>
              </div>
              <div className="flex shrink-0 gap-[10px]">
                <Image className="w-[28px] h-[28px]" src={pv3} alt="" />
                <span className="text-xl font-semibold tracking-[-0.4px] text-black">
                  Hassle free warranty
                </span>
              </div>
            </div>
          </div>

          <div id="summary" className="pt-16 pb-10 px-[70px]">
            <div className="flex flex-col gap-3">
              <h2 className="text-[#212121] text-[40px] font-bold leading-[44px]">Order Summary</h2>
              <p className="text-[#808080] text-2xl max-w-[556px] tracking-[-0.48px] leading-[38px]">Check your item and select your shipping for a better shopping experience</p>
            </div>

            <div class="bg-[#FCFCFC] border-[1.5px] border-[#e6e6e6] rounded-[28px]">
              <div class="w-[120px] h-[116px] relative"><Image fill sizes="100vw" className="object-cover object-center" src={pr1} alt="" /></div>
              <div></div>
            </div>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
