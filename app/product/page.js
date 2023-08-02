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

export default function Home() {
  return (
    <div className="text-[#4D4D4D] m-0">
      <header className="bodyCon">
        <Navbar />
      </header>

      <main className="py-16">
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

            <div
              id="hero-cont"
              className="flex pt-16 px-[120px] justify-between gap-"
            >
              <div id="left" className="flex flex-col gap-6">
                <div className="w-[401px] rounded-[30px] relative overflow-hidden h-[454px]">
                  <Image
                    className="object-cover top-[10px] left-[20px]"
                    sizes="100vw"
                    fill
                    src={pr1}
                    alt=""
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
                <div class="flex gap-[10px]">
                  <Image
                    className="w-[90px] h-[90px] rounded-[20px]"
                    src={pr2}
                    alt=""
                  />
                  <Image
                    className="w-[90px] h-[90px] rounded-[20px]"
                    src={pr3}
                    alt=""
                  />
                  <Image
                    className="w-[90px] h-[90px] rounded-[20px]"
                    src={pr4}
                    alt=""
                  />
                  <Image
                    className="w-[90px] h-[90px] rounded-[20px]"
                    src={pr5}
                    alt=""
                  />
                </div>
              </div>
              <div id="right" className="max-w-[637px]">
                <div className="flex flex-col gap-8">
                  <div class="flex flex-col gap-6">
                    <h1 className="text-[#121212] millik text-[64px] leading-[62px]">
                      The Uninhabitable Earth
                    </h1>
                    <div class="flex flex-col gap-4">
                      <p className="max-w-[543px] text-[#282828] leading-6 ">
                        As climate change grips the planet, here is Earth. Org's
                        selection of must-read books on climate change and
                        sustainability to enlighten you.
                      </p>
                      <div className="flex flex-col gap-5">
                        <div className="flex gap-[10px] items-center">
                          <span className="text-[#212121] font-semibold">
                            David Wallace-Wells
                          </span>
                          <div className="flex gap-[3px] shrink-0 items-center">
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
                        <div class="text-[#318736] w-auto self-start bg-[#EAF3EB] font-semibold py-[10px] px-6 rounded-full text-xl">
                          $50
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-5">
                    <div className="flex gap-[30px] py-[12px] self-start rounded-full bg-[#F2F2F2] px-[10px] items-center">
                      <Image
                        className="w-6 h-6"
                        src={chevright}
                        alt="Chevron Right"
                      />
                      <span className="text-xl font-bold text-black leading-6">
                        1
                      </span>
                      <Image
                        className="w-6 h-6"
                        src={chevleft}
                        alt="Chevron Left"
                      />
                    </div>
                    <div className="self-start flex gap-4">
                      <div className="px-10 py-[14px] text-white leading-6 self-end text-xl font-bold rounded-full bg-[#009F00]">
                        Buy now
                      </div>
                      <div className="px-10 py-[14px] text-black leading-6 self-end text-xl font-medium bg-[#f2f2f2] rounded-full ">
                        Add to cart
                      </div>
                      <div className="px-10 py-[14px] text-black leading-6 self-end text-xl font-medium border-[2px] border-[#f2f2f2] rounded-full ">
                        Preview book
                      </div>
                    </div>
                  </div>
                </div>

                <div></div>
              </div>
            </div>

            <div id="divider" className="">
              <div></div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
