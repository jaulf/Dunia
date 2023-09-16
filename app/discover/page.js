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
import filter from "@/public/images/filter.svg";
import ticked from "@/public/images/ticked.svg";
import back from "@/public/images/back.png";
import dunia from "@/public/images/dunia.png";
import menuMobile from "@/public/images/mobile-menu.png";

// Component Imports
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

import { useEffect, useState } from "react";
import DiscoverProductList from "@/components/displayProducts/discoverProductList";
import Subscribe from "@/components/subscribe/subscribe";

export default function Home() {
  useEffect(() => {
    document.getElementById("mpx").style.display = "none";
  }, []);

  const filterD = () => {
    let mpx = document.getElementById("mpx");
    if (mpx.style.display === "block") {
      mpx.style.display = "none";
    } else {
      mpx.style.display = "block";
    }
  };
  return (
    <>
      <div
        id="mpx"
        className="absolute hidden mpx overflow-auto top-0 bg-white left-0 right-0 bottom-0 z-[99999]"
      >
        <div>
          <div class="flex justify-center shrink-0 items-center bg-white sticky top-0 z-[100]">
            <div class="max-w-[1440px] shrink-0 w-full navspace py-6 lg:py-4 px-6 lg:px-10">
              <nav className="flex justify-between w-full z-[999999999]">
                <div className="flex justify-between w-full gap-11 items-center">
                  <Link class="relative block w-[91px] h-[28px]" href="/">
                    <Image
                      className="object-cover object-center"
                      src={dunia}
                      fill
                      alt="Dunia Logo"
                      placeholder="blur"
                      sizes="100vw"
                    />
                  </Link>

                  <div
                    onClick={() => sidebarPopup()}
                    className="block xl:hidden w-10 h-10"
                  >
                    <Image className="w-full h-auto" src={menuMobile} alt="" />
                  </div>
                </div>
              </nav>
            </div>
          </div>

          <div class="pt-6 px-6">
            <div id="d-Arrow" onClick={filterD}>
              <div className="block backd sticky top-0">
                <Image
                  quality={100}
                  className="w-8 h-8"
                  src={back}
                  alt="back arrow"
                />
              </div>
            </div>

            <div id="filter-cont-list" className="pt-8">
              <div>
                <h4>Release date</h4>
                <div className="fcl-card-cont">
                  <div className="active">
                    <h6>Newest</h6>
                    <Image src={ticked} alt="selected" className="shrink-0" />
                  </div>
                  <div>
                    <h6>Last 30 days</h6>
                  </div>
                  <div>
                    <h6>Last 90 days</h6>
                  </div>
                </div>
              </div>
              <div>
                <h4>Price</h4>
                <div className="fcl-card-cont">
                  <div>
                    <h6>Bestsellers</h6>
                  </div>
                  <div className="active">
                    <h6>Lowest to highest</h6>
                    <Image src={ticked} alt="selected" className="shrink-0" />
                  </div>
                  <div>
                    <h6>Highest to lowest</h6>
                  </div>
                </div>
              </div>
              <div>
                <h4>Creators</h4>
                <div className="fcl-card-cont">
                  <div>
                    <h6>All creators</h6>
                  </div>
                  <div className="active">
                    <h6>Verified only</h6>
                    <Image src={ticked} alt="selected" className="shrink-0" />
                  </div>
                </div>
              </div>
              <div>
                <h4>Age</h4>
                <div className="fcl-card-cont">
                  <div className="active">
                    <h6>3 - 8 years old</h6>
                    <Image src={ticked} alt="selected" className="shrink-0" />
                  </div>
                  <div>
                    <h6>8 - 12 years old</h6>
                  </div>
                  <div>
                    <h6>12 - 18 years old</h6>
                  </div>
                </div>
              </div>
            </div>

            <div className="py-12">
              <button className="w-full text-center text-[14px] leading-6 font-semibold py-2 px-6 rounded-full bg-[#009F00] text-white">
                Apply filters
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="text-[#4D4D4D] m-0">
        <div class="flex justify-center shrink-0 items-center bg-white sticky top-0 z-[100]">
          <div class="max-w-[1440px] shrink-0 w-full navspace py-6 lg:py-4 px-6 lg:px-10">
            <Navbar />
          </div>
        </div>

        <main>
          <section id="Discover" className="bodyCon">
            <div className="px-6 lg:px-10 pt-10 lg:pt-24 pb-[100px] flex flex-col">
              <div className="flex justify-between items-center">
                <h3 className="millik text-[20px] lg:text-[32px] text-black lg:leading-[30.94px]">
                  Discover what you need ⚡
                </h3>
                <Image
                  onClick={filterD}
                  src={filter}
                  alt="Filter Icon"
                  className="block lg:hidden shrink-0"
                />
              </div>
              <DiscoverProductList />
            </div>
          </section>

          <Subscribe />
        </main>

        <Footer />
      </div>
    </>
  );
}
