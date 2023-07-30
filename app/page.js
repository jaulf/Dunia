"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

// Images
import dunia from "../public/images/dunia.png";
import chevdown from "../public/images/Arrow.png";
import chevdown2 from "../public/images/chev-down.png";
import search from "../public/images/search.png";
import shoppingbag from "../public/images/shopping-bag.png";
import hleftimg from "../public/images/hleft-img.png";
import r1 from "../public/images/r1.png";
import r2 from "../public/images/r2.png";
import avatar from "../public/images/avatar.png";
import curlyarrow from "../public/images/curlyarrow.png";
import clover from "../public/images/clover.png";
import d6 from "../public/images/D6.png";
import d7 from "../public/images/D7.png";
import ratings from "../public/images/ratings.png";

import tp1 from "../public/images/tp1.png";
import tp2 from "../public/images/tp2.png";
import tp3 from "../public/images/tp3.png";
import tp4 from "../public/images/tp4.png";

import c1 from "../public/images/c1.png";
import c2 from "../public/images/c2.png";
import c3 from "../public/images/c3.png";
import c4 from "../public/images/c4.png";

import hearte from "../public/images/heart-empty.png";
import heartf from "../public/images/heart-full.png";

export default function Home() {
  // const router = useRouter()
  // useEffect(() => {
  //   router.push('/onboarding/signup')
  // })

  return (
    <div className="text-[#4D4D4D] m-0">
      <header className="bodyCon">
        <div className="relative">
          <nav className="flex justify-between py-[26px] px-10">
            <div className="flex gap-11 items-center">
              <Image
                className="w-[91px] h-[28px]"
                src={dunia}
                alt="Dunia Logo"
              />

              <div className="flex gap-6 items-center">
                <Link className="nli" href="/">
                  Featured
                </Link>
                <div className="flex gap-[10px] items-center">
                  <span className="nli">Categories</span>
                  <Image
                    className="w-[10px] h-[10px]"
                    src={chevdown}
                    alt="Arrow Down Icon"
                  />
                </div>
              </div>
            </div>

            <div className="flex self-center px-5 py-[14px] gap-[10px] items-center rounded-full w-full max-w-[500px] bg-[#0000000d]">
              <Image
                className="w-[18px] h-[18px]"
                src={search}
                alt="Search Icon"
              />
              <input
                className="search bg-transparent outline-none"
                type="text"
                placeholder="Search Books or authors"
              />
            </div>

            <div className="flex items-center gap-6">
              <Link
                className="text-[#212121] px-7 py-[14px] self-center rounded-full flex bg-[#f5f5f5] font-bold text-center"
                href="/"
              >
                Log In
              </Link>
              <div className="flex items-center gap-[32px]">
                <div className="relative">
                  <Image
                    className="w-6 h-6"
                    src={shoppingbag}
                    alt="Shopping Bag Icon"
                  />
                  <div className="absolute top-[-4px] right-[-7px] font-semibold text-[8px] bg-black text-white py-[1px] rounded-full px-[3px]">
                    3
                  </div>
                </div>
                <div className="flex gap-1 py-1 px-3 border-2 border-[#f5f5f5] rounded-full">
                  <span className="font-medium text-sm ">ENG</span>
                  <Image
                    className="self-center w-4 h-4"
                    src={chevdown2}
                    alt="Arrow Down Icon"
                  />
                </div>
              </div>
            </div>
          </nav>

          <div className="p-10 pb-[72px] relative flex justify-between gap-[75px] items-center">
            <div className="left flex flex-col gap-8">
              <div className="flex flex-col gap-4  max-w-[583px]">
                <div className="bg-[#f2f2f2] px-6 rounded-3xl py-2 text-[#6d6d6d] self-start w-auto text-xs font-medium">
                  Democratizing climate knowledge 🍀
                </div>
                <div className="flex flex-col gap-2">
                  <h2 className="l-h2">
                    Accelerating climate literacy through{" "}
                    <span className="dunia-gradient">
                      creative storytelling
                    </span>
                  </h2>
                  <p className="text-xl leading-7">
                    Gain access to affordable climate learning resources that’s
                    engaging, up to date and in your mother tongue.
                  </p>
                </div>

                <div className="pt-2 flex">
                  <Link
                    className="py-[14px] px-12 bg-[#009F00] text-white text-xl font-bold rounded-full"
                    href=""
                  >
                    Shop now
                  </Link>
                </div>
              </div>
              <div>
                <Image className="h-10 w-auto" src={hleftimg} alt="Memoji" />
              </div>
            </div>
            <div id="h-ri" className="right rounded-[50px]">
              <div
                id="card"
                className="px-6 py-7 pb-[59px] flex flex-col gap-[30px]"
              >
                <div className="flex gap-[10px]">
                  <div>
                    <Image
                      className="rounded-[30px] w-auto h-auto max-h-[552px]"
                      src={r1}
                      alt="one"
                    />
                  </div>
                  <div>
                    <Image
                      className="rounded-[30px] w-auto h-auto max-h-[552px]"
                      src={r2}
                      alt="two"
                    />
                  </div>
                </div>

                <div className="text-white">
                  <h5 className="font-semibold">Featured today⚡</h5>
                  <h3 className="millik text-[36px] max-w-[483px] pt-5">
                    The True Story of Nature’s Dwellers
                  </h3>
                  <div className="flex justify-between items-center py-[6px]">
                    <div className="flex gap-3 items-center">
                      <Image src={avatar} className="w-8 h-8" alt="Memoji" />
                      <span className="font-semibold">Josh Debs</span>
                    </div>
                    <div className="rounded-full px-[27px] py-[14px] font-bold text-white bg-black">
                      Check it out
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Image
            src={curlyarrow}
            className="w-[121.339px] h-auto flex absolute bottom-[164px] left-[370px]"
            alt="Curly Arrow Icon"
          />
          <Image
            src={clover}
            alt="Clover Icon"
            className="w-10 h-10 flex self-start absolute top-[149px] left-[485px]"
          />
        </div>
      </header>

      <main>
        <section className="bg-[#009F00]">
          <div className="bodyCon">
            <div className=" px-10 pt-[123px] pb-[114px]">
              <div className="dun10 relative text-[#083A08]">
                <div className="flex df bg-[#1FD61F] flex-col gap-6 leading-10 text-xl">
                  <p>
                    Dunia is a tech-enabled publisher of multilingual
                    environmental children’s stories, interactive audiobooks,
                    short animated videos and other climate education learning
                    materials
                  </p>
                  <p>
                    Dunia is a tech-enabled publisher of multilingual
                    environmental children’s stories, interactive audiobooks,
                    short animated videos and other climate education learning
                    materials
                  </p>
                  <p>
                    Dunia is a tech-enabled publisher of multilingual
                    environmental children’s stories, interactive audiobooks,
                    short animated videos and other climate education learning
                    materials
                  </p>
                </div>
                <div className="midblock"></div>
                <div className="bg-[#1FD61F]"></div>
                <span className="millik absolute top-16 left-16 text-[118px] leading-[114.11px] whitespace-nowrap ">
                  Dunia in a few words
                </span>
                <div>
                  <Image
                    className="w-10 h-10 absolute top-[217px] right-[44px]"
                    src={d6}
                    alt="clover icon"
                  />
                </div>
                <div>
                  <Image
                    className="w-10 h-10 absolute bottom-[54px] left-[258px]"
                    src={d6}
                    alt="clover icon"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bodyCon">
          <div className="px-10 pt-[88px] pb-[134px] flex gap-12 flex-col">
            <div className="flex justify-between">
              <h3 className="millik text-[32px] text-black leading-[30.94px]">
              Top picks this week🌟
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
                <div id="img-ccard" className="relative">
                  <Image className="rounded-[30px]" src={tp1} alt="Top Pick One" />
                  <div className="absolute top-6 right-6 rounded-full w-10 h-10 flex bg-white justify-center items-center">
                    <Image className="w-6 h-6" src={hearte} alt="Heart Icon" />
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
                      As climate change grips the planet, here is Earth. Org&apos;s
                      selection of must-read books on climate change and
                      sustainability to enlighten you.
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
                <div id="img-ccard" className="relative">
                  <Image className="rounded-[30px]" src={tp2} alt="Top Pick Two" />
                  <div className="absolute top-6 right-6 rounded-full w-10 h-10 flex bg-white justify-center items-center">
                    <Image className="w-6 h-6" src={heartf} alt="Heart Icon" />
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
                      As climate change grips the planet, here is Earth. Org&apos;s
                      selection of must-read books on climate change and
                      sustainability to enlighten you.
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
                <div id="img-ccard" className="relative">
                  <Image
                    className="rounded-[30px]"
                    src={tp3}
                    alt="Top Pick Three"
                  />
                  <div className="absolute top-6 right-6 rounded-full w-10 h-10 flex bg-white justify-center items-center">
                    <Image className="w-6 h-6" src={heartf} alt="Heart Icon" />
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
                      As climate change grips the planet, here is Earth. Org&apos;s
                      selection of must-read books on climate change and
                      sustainability to enlighten you.
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
                <div id="img-ccard" className="relative">
                  <Image className="rounded-[30px]" src={tp4} alt="Top Pick Four" />
                  <div className="absolute top-6 right-6 rounded-full w-10 h-10 flex bg-white justify-center items-center">
                    <Image className="w-6 h-6" src={hearte} alt="Heart Icon" />
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
                      As climate change grips the planet, here is Earth. Org&apos;s
                      selection of must-read books on climate change and
                      sustainability to enlighten you.
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

          <div className="pt-10 relative pb-[131px] px-10">
            <div className="flex items-end justify-between">
              <div className="flex flex-col gap-8">
                <h2 className="text-black text-[32px] millik">Categories</h2>
                <div className="catb flex gap-4">
                  <button className="catb-active">All</button>
                  <button>Climate change</button>
                  <button>sustainability</button>
                  <button>biodiversity</button>
                </div>
              </div>

              <Link
                className="rounded-full font-bold py-[14px] px-6 leading-[19.36px] text-center text-[#009f00] border border-[#009f00]"
                href="/"
              >
                See all
              </Link>
            </div>

            <div className="flex flex-col gap-[30px] pt-8">
              <div className="flex justify-between gap-8">
                <div className="w-full h-full max-w-[534px] max-h-[629.32px] rounded-[48px] flex-col justify-end items-center inline-flex">
                  <Image className="w-full rounded-[48px]" src={c1} alt="Category 1" />
                </div>
                <div className="flex flex-col justify-between">
                  <div className="w-full h-full max-w-[794px] max-h-[297px] rounded-[48px] flex-col justify-end items-center inline-flex">
                    <Image className="w-full rounded-[48px]" src={c2} alt="Category 2" />
                  </div>
                  <div className="w-full h-full max-w-[794px] max-h-[297px] rounded-[48px] flex-col justify-end items-center inline-flex">
                    <Image className="w-full rounded-[48px]" src={c3} alt="Category 3" />
                  </div>
                </div>
              </div>
              <div>
                <Image
                  className="w-full rounded-[48px]"
                  src={c4}
                  alt="Category 4"
                />
              </div>
            </div>

            <Image className="absolute w-10 h-10 top-[14px] right-[529px]" src={d7} alt="Dark Green Clover" />
          </div>
        </section>
      </main>

      <footer></footer>
    </div>
  );
}
