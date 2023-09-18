"use client";
import Link from "next/link";
import Image from "next/image";

import Navbar from "@/components/navbar";
import FavoriteList from "@/components/displayProducts/favoriteList";
import SubNavbar from "@/components/subnavbar";

export default function Favorite() {
  return (
    <>
      <header className="bg-white lg:sticky lg:top-0 z-[100]">
        <div class="flex justify-center shrink-0 items-center bg-white lg:sticky lg:top-0 z-[100]">
          <div class="max-w-[1440px]  shrink-0 w-full navspace py-6 xl:py-4 px-6 xl:px-10">
            <Navbar />
          </div>
        </div>
      </header>
      <div className="bg-[#F2F2F2] mt-5 h-1 w-full lg:hidden"></div>
        <SubNavbar />

      <main>
        <section id="Discover" className="bodyCon">
          <div className="px-6 lg:px-10 pt-[42px] lg:pt-24 pb-20 lg:pb-[134px] flex gap-6 lg:gap-12 flex-col">
            <FavoriteList />
          </div>
        </section>
      </main>
    </>
  );
}
