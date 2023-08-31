"use client";
//Discover Select button
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

import { useState } from "react";
import Discover from "./incase";
import DiscoverProductList from "@/components/displayProducts/discoverProductList";

export default function Home() {

  return (
    <div className="text-[#4D4D4D] m-0">
      <div class="flex justify-center shrink-0 items-center bg-white sticky top-0 z-[100]">
        <div class="max-w-[1440px] shrink-0 w-full navspace py-4 px-10">
          <Navbar />
        </div>
      </div>

      <main>
        <section id="Discover" className="bodyCon">
          <div className="px-10 pt-24 pb-[100px] flex flex-col">
            <div className="flex justify-between items-center ">
              <h3 className="millik text-[32px] text-black leading-[30.94px]">
                Discover what you need ⚡
              </h3>
            </div>
            <DiscoverProductList />
          </div>
        </section>

        <section className="bodyCon">
          <div className="pt-[82px] pb-[132px] relative flex gap-6 justify-center items-center flex-col">
            <div className="flex flex-col justify-center items-center gap-3 ">
              <h3 className="millik text-[#121212] max-w-[845px] text-center text-[56px] leading-[64px]">
                Be the first to know when new{" "}
                <span className="dunia-grd2">resources</span> are available
              </h3>
              <p className="max-w-[612px] text-[#4d4d4d] text-center">
                As climate change grips the planet, here is Earth. Org&apos;s
                selection of must-read books on climate change and
                sustainability to enlighten you.
              </p>
            </div>

            <div className="flex flex-col gap-8">
              <input
                className="py-[14px] px-5 outline-none subscribe rounded-full"
                type="email"
                placeholder="Enter your email address"
              />
              <button className="bg-[#009F00] font-bold text-xl text-white py-[14px] px-12 self-center rounded-full flex justify-center items-center">
                Subscribe
              </button>
            </div>

            <div className="absolute flex self-start top-[38px] right-[158px]">
              <Image className="w-10 h-10" src={d7} alt="clover" />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
