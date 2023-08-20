"use client";
import Link from "next/link";
import Image from "next/image";

// Images
import dunia from "@/public/images/dunia.png";
import chevdown2 from "@/public/images/chev-down.png";
import bell from "@/public/images/bell.png";
import shoppingbag from "@/public/images/shopping-bag.png";

import dp1 from "@/public/images/profile/heart.png";
import dp2 from "@/public/images/profile/download.png";
import dp3 from "@/public/images/profile/ucheck.png";
import dp4 from "@/public/images/profile/fileheart.png";
import dp5 from "@/public/images/profile/archive.png";
import dp6 from "@/public/images/profile/star.png";
import dp7 from "@/public/images/profile/logout.png";

import avatar2 from "@/public/images/profile/avatar2.png";

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
import Navbar from "@/components/navbar";

export default function NavbarUser() {
  return (
    <>
      <header className="bg-white sticky top-0 z-[100]">
      <div class="flex justify-center shrink-0 items-center bg-white sticky top-0 z-[100]">
        <div class="max-w-[1440px] shrink-0 w-full navspace py-4 px-10">
          <Navbar />
        </div>
      </div>
        <nav className="flex justify-center items-center py-3 border-b border-t-[2px] border-[#F2F2F2]">
          <div className="content-container items-center flex gap-3 justify-center max-w-[1440px]">
            <div className="content">Profile</div>
            <div className="content active-c">
              Favourites{" "}
              <div className="pl-2">
                <span class="f-active">2</span>
              </div>
            </div>
            <div className="content">
              {2 == 1 ? (
                <span>Downloads</span>
              ) : (
                <div className="flex items-center gap-2">
                  <div className="justify-start items-center gap-3 inline-flex">
                    <div className="w-2.5 h-2.5 relative">
                      <div className="w-2 h-2 left-[1px] top-[1px] absolute bg-green-700 rounded-full" />
                    </div>
                    <div className="">Downloads</div>
                  </div>
                  <div className="content-sub-active">10/20</div>
                </div>
              )}
            </div>
            <div className="content">Order History</div>
            <div className="content">Cart</div>
            <div className="content">Following</div>
          </div>
        </nav>
      </header>

      <main>
        <section id="Discover" className="bodyCon">
          <div className="px-10 pt-10 pb-[134px] flex gap-12 flex-col">
            <div className="grid gap-5 grid-cols-4">
              <div className="flex flex-col gap-4">
                <div
                  id="img-ccard"
                  className="relative inline-flex justify-center max-h-[400px] max-w-[325px] items-center flex-col"
                >
                  <Image
                    className="rounded-[30px] w-full h-auto"
                    sizes="100vw"
                    placeholder="blur"
                    src={tp2}
                    quality={100}
                    alt="Top Pick Two"
                  />
                  <div className="absolute top-6 right-6 rounded-full w-10 h-10 flex bg-white justify-center items-center">
                    <Image className="w-6 h-6" src={heartf} alt="Heart Icon" />
                  </div>
                  <div className="absolute bottom-6 right-6 flex gap-3">
                    <div className="rounded-full w-10 h-10 flex bg-white justify-center items-center">
                      <Image className="w-6 h-6" src={share} alt="Share Icon" />
                    </div>
                    <div className="rounded-full w-10 h-10 flex bg-white justify-center items-center">
                      <Image
                        className="w-6 h-6"
                        src={shopcart}
                        alt="Shopping Cart Icon"
                      />
                    </div>
                  </div>
                </div>
                <div id="img-text">
                  <div className="flex gap-3 flex-col">
                    <div className="flex justify-between">
                      <div className="flex flex-col gap-2">
                        <span className="text-[#121212] millik leading-[15.47px]">
                          All We Can Save
                        </span>
                        <span className="leading-[16.94px] text-[#686868] text-sm font-medium ">
                          Naomi Klein
                        </span>
                      </div>

                      <span className="text-[#318736] font-semibold leading-[19.36px]">
                        $40
                      </span>
                    </div>
                    <p className="text-xs leading-5 text-[#121212]">
                      As climate change grips the planet, here is Earth.
                      Org&apos;s selection of must-read books on climate change
                      and sustainability to enlighten you.
                    </p>
                    <div className="flex gap-[3px] items-center">
                      <Image
                        className="h-3 w-auto"
                        src={ratings}
                        alt="rating Icon"
                      />
                      <span className="font-medium text-[10px]">
                        4.5 (55 ratings)
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div
                  id="img-ccard"
                  className="relative inline-flex justify-center max-h-[400px] max-w-[325px] items-center flex-col"
                >
                  <Image
                    className="rounded-[30px] w-full h-auto"
                    sizes="100vw"
                    placeholder="blur"
                    src={tp3}
                    quality={100}
                    alt="Top Pick Three"
                  />
                  <div className="absolute top-6 right-6 rounded-full w-10 h-10 flex bg-white justify-center items-center">
                    <Image className="w-6 h-6" src={heartf} alt="Heart Icon" />
                  </div>
                  <div className="absolute bottom-6 right-6 flex gap-3">
                    <div className="rounded-full w-10 h-10 flex bg-white justify-center items-center">
                      <Image className="w-6 h-6" src={share} alt="Share Icon" />
                    </div>
                    <div className="rounded-full w-10 h-10 flex bg-white justify-center items-center">
                      <Image
                        className="w-6 h-6"
                        src={shopcart}
                        alt="Shopping Cart Icon"
                      />
                    </div>
                  </div>
                </div>
                <div id="img-text">
                  <div className="flex gap-3 flex-col">
                    <div className="flex justify-between">
                      <div className="flex flex-col gap-2">
                        <span className="text-[#121212] millik leading-[15.47px]">
                          Drawdown
                        </span>
                        <span className="leading-[16.94px] text-[#686868] text-sm font-medium ">
                          Paul Hawken
                        </span>
                      </div>

                      <span className="text-[#318736] font-semibold leading-[19.36px]">
                        $65
                      </span>
                    </div>
                    <p className="text-xs leading-5 text-[#121212]">
                      As climate change grips the planet, here is Earth.
                      Org&apos;s selection of must-read books on climate change
                      and sustainability to enlighten you.
                    </p>
                    <div className="flex gap-[3px] items-center">
                      <Image
                        className="h-3 w-auto"
                        src={ratings}
                        alt="rating Icon"
                      />
                      <span className="font-medium text-[10px]">
                        4.5 (55 ratings)
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
