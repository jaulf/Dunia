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

export default function Home() {
  return (
    <div className="text-[#4D4D4D] m-0">
      <div class="flex justify-center shrink-0 items-center bg-white sticky top-0 z-[100]">
        <div class="max-w-[1440px] shrink-0 w-full navspace py-6 xl:py-4 px-6 xl:px-10">
          <Navbar />
        </div>
      </div>

      <main>
        <section id="Discover" className="bodyCon">
          <div className="px-10 pt-24 pb-[134px] flex gap-12 flex-col">
            <div className="flex justify-between items-center">
              <h3 className="millik text-[32px] text-black leading-[30.94px]">
                Discover what you need ⚡
              </h3>
              <Link
                className="rounded-full font-bold py-[14px] px-6 leading-[19.36px] text-center text-[#009f00] border border-[#009f00]"
                href="/"
              >
                See all
              </Link>
            </div>

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
                    src={tp1}
                    quality={100}
                    alt="Top Pick One"
                  />
                  <div className="absolute top-6 right-6 rounded-full w-10 h-10 flex bg-white justify-center items-center">
                    <Image className="w-6 h-6" src={hearte} alt="Heart Icon" />
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
                          The Uninhabitable Earth
                        </span>
                        <span className="leading-[16.94px] text-[#686868] text-sm font-medium ">
                          David Wallace-Wells
                        </span>
                      </div>

                      <span className="text-[#318736] font-semibold leading-[19.36px]">
                        $50
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
              <div className="flex flex-col gap-4">
                <div
                  id="img-ccard"
                  className="relative inline-flex justify-center max-h-[400px] max-w-[325px] items-center flex-col"
                >
                  <Image
                    className="rounded-[30px] w-full h-full object-cover"
                    sizes="100vw"
                    placeholder="blur"
                    src={tp4}
                    quality={100}
                    alt="Top Pick Four"
                  />
                  <div className="absolute top-6 right-6 rounded-full w-10 h-10 flex bg-white justify-center items-center">
                    <Image className="w-6 h-6" src={hearte} alt="Heart Icon" />
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
                          This Changes Everything: Capit...
                        </span>
                        <span className="leading-[16.94px] text-[#686868] text-sm font-medium ">
                          Naomi Klein
                        </span>
                      </div>

                      <span className="text-[#318736] font-semibold leading-[19.36px]">
                        $150
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
