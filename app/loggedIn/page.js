"use client";
import Link from "next/link";
import Image from "next/image";

// Images
import hleftimg from "@/public/images/hleft-img.png";
import r1 from "@/public/images/r1.png";
import r2 from "@/public/images/r2.png";
import avatar from "@/public/images/avatar.png";
import curlyarrow from "@/public/images/curlyarrow.png";
import clover from "@/public/images/clover.png";
import d6 from "@/public/images/D6.png";
import d7 from "@/public/images/D7.png";
import ratings from "@/public/images/ratings.png";
import obfImg from "@/public/images/obfImg.png";
import memobf from "@/public/images/mem-obf.png";

import tp1 from "@/public/images/tp1.png";
import tp2 from "@/public/images/tp2.png";
import tp3 from "@/public/images/tp3.png";
import tp4 from "@/public/images/tp4.png";

import c1 from "@/public/images/c1.png";
import c2 from "@/public/images/c2.png";
import c3 from "@/public/images/c3.png";
import c4 from "@/public/images/c4.png";

import hearte from "@/public/images/heart-empty.png";
import heartf from "@/public/images/heart-full.png";
import glasseffect from "@/public/images/glasseffect.png";
import author1 from "@/public/images/author-jj.png";

import arrowright from "@/public/images/arrow-right.png";
import warrowleft from "@/public/images/w-arrow-left.png";

//Authors
import author2 from "@/public/images/authors/DM.png";
import author3 from "@/public/images/authors/TJ.png";
import author4 from "@/public/images/authors/EF.png";
import author5 from "@/public/images/authors/EM.png";
import author6 from "@/public/images/authors/FB.png";
import Navbar from "@/components/navbar(LoggedIn)";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="text-[#4D4D4D] m-0">
      <div class="flex justify-center shrink-0 items-center bg-white sticky top-0 z-[100]">
        <div class="max-w-[1440px] shrink-0 w-full navspace px-10">
          <Navbar />
        </div>
        
      </div>
      <header className="bodyCon">
        <div className="relative">
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

            <div id="h-ri" className="right relative rounded-[50px]">
              <div
                id="card"
                className="px-6 py-7 pb-[59px] relative z-50 flex flex-col gap-[30px]"
              >
                <div className="inline-flex gap-[10px]">
                  <div className="inline-flex justify-center items-center ">
                    <Image
                      className="rounded-[30px]"
                      quality={100}
                      src={r1}
                      width={249}
                      height={552}
                      placeholder="blur"
                    />
                  </div>
                  <div className="inline-flex justify-center items-center">
                    <Image
                      className="rounded-[30px]"
                      quality={100}
                      src={r2}
                      width={395}
                      height={552}
                      placeholder="blur"
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
              <Image
                className="object-cover rounded-[50px]"
                fill
                src={glasseffect}
                alt="glasseffects"
                sizes="100vw"
                placeholder="blur"
                quality={100}
              />
            </div>
          </div>
          <Image
            src={curlyarrow}
            className="w-[121.339px] h-auto flex absolute bottom-[164px] left-[370px]"
            alt="Curly Arrow Icon"
            quality={100}
          />
          <Image
            src={clover}
            alt="Clover Icon"
            quality={100}
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
            <div className="flex justify-between items-center">
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
                  <Image
                    className="w-full rounded-[48px]"
                    src={c1}
                    alt="Category 1"
                    placeholder="blur"
                    quality={100}
                  />
                </div>
                <div className="flex flex-col justify-between">
                  <div className="w-full h-full max-w-[794px] max-h-[297px] rounded-[48px] flex-col justify-end items-center inline-flex">
                    <Image
                      className="w-full rounded-[48px]"
                      src={c2}
                      alt="Category 2"
                      placeholder="blur"
                      quality={100}
                    />
                  </div>
                  <div className="w-full h-full max-w-[794px] max-h-[297px] rounded-[48px] flex-col justify-end items-center inline-flex">
                    <Image
                      className="w-full rounded-[48px]"
                      src={c3}
                      alt="Category 3"
                      placeholder="blur"
                      quality={100}
                    />
                  </div>
                </div>
              </div>
              <div>
                <Image
                  className="w-full rounded-[48px]"
                  src={c4}
                  alt="Category 4"
                  placeholder="blur"
                  quality={100}
                />
              </div>
            </div>
            <Image
              className="absolute w-10 h-10 top-[14px] right-[529px]"
              src={d7}
              alt="Dark Green Clover"
              placeholder="blur"
              quality={100}
            />
          </div>

          <div className="px-10 relative pt-[77px] pb-[140px] flex items-end gap-8">
            <div className="flex w-full flex-col gap-11">
              <div className="flex self-start flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <h2 className="text-[56px] millik text-black leading-[64px]">
                    Online Book Fair -{" "}
                    <span className="block">The reader’s conference</span>
                  </h2>
                  <p className="text-[#4d4d4d] max-w-[612px]">
                    As climate change grips the planet, here is Earth.
                    Org&apos;s selection of must-read books on climate change
                    and sustainability to enlighten you.
                  </p>
                </div>
                <button className="text-xl flex self-start font-bold px-10 py-[14px] rounded-[32px] text-white bg-[#009F00] ">
                  Join the community
                </button>
              </div>

              <div className="bg-[#F2F2F2] w-full pb-8 pt-12 pl-[42px] rounded-[48px] flex flex-col gap-8">
                <div className="flex flex-col gap-4">
                  <h6 className=" text-xl font-medium text-black">
                    Our community
                  </h6>
                  <Image
                    className="h-10 w-auto self-start"
                    placeholder="blur"
                    sizes="100vw"
                    quality={100}
                    src={memobf}
                    alt="members"
                  />
                </div>
                <h3 className="text-[48px] text-black millik max-w-[619px]">
                  Over 1.7K active readers & book lovers joined.
                </h3>
              </div>
            </div>
            <div className="w-full h-full max-w-[612px] max-h-[650px] relative rounded-[48px] overflow-hidden inline-flex justify-center items-center flex-col">
              <Image
                className="w-full object-cover h-auto rounded-[48px]"
                alt="Online Book Fair"
                src={obfImg}
                sizes="100vw"
                placeholder="blur"
                quality={100}
              />
            </div>
            <div className="absolute flex self-start top-[21px] left-[143px]">
              <Image className="w-10 h-10" src={d7} alt="clover" />
            </div>
          </div>
        </section>

        <section className="bg-[#0B0C0B]">
          <div className="bodyCon relative overflow-hidden">
            <div>
              <div className="flex pl-[120px] pr-[70px]">
                <div
                  id="left"
                  className=" flex pt-[85px] flex-col gap-5 w-full"
                >
                  <div className="flex flex-col gap-[18px]">
                    <p className="uppercase text-[#f3f3f3] font-medium">
                      Discover
                    </p>
                    <h1 className="text-[56px] millik text-white w-full max-w-[694px]">
                      Featured authors & creators
                    </h1>
                  </div>
                  <div className="flex flex-col gap-[10px]">
                    <div className="flex gap-4 items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="41"
                        height="3"
                        viewBox="0 0 41 3"
                        fill="none"
                      >
                        <path
                          d="M40 2.5C40.5523 2.5 41 2.05228 41 1.5C41 0.947715 40.5523 0.5 40 0.5V2.5ZM0 2.5H40V0.5H0V2.5Z"
                          fill="#009F00"
                        />
                      </svg>
                      <span className="text-[#009f00] text-xl millik">
                        James Jones
                      </span>
                    </div>
                    <div className="flex gap-[10px] items-center font-medium leading-6 text-[#b3b3b3]">
                      <div>💗</div>
                      <div>4.5/5 hearts</div>
                      <div>|</div>
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M16 3.46776C17.4817 4.20411 18.5 5.73314 18.5 7.5C18.5 9.26686 17.4817 10.7959 16 11.5322M18 16.7664C19.5115 17.4503 20.8725 18.565 22 20M2 20C3.94649 17.5226 6.58918 16 9.5 16C12.4108 16 15.0535 17.5226 17 20M14 7.5C14 9.98528 11.9853 12 9.5 12C7.01472 12 5 9.98528 5 7.5C5 5.01472 7.01472 3 9.5 3C11.9853 3 14 5.01472 14 7.5Z"
                            stroke="#B3B3B3"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                      <div>127.4k followers</div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[10px]">
                    <h6 className="text-[#009f00] millik">About author</h6>
                    <p className="text-[#B3B3B3] max-w-[484px]">
                      &quot;Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit, sed do eiusmod tempor incididunt ut labore et dolore
                      magna aliqua.&quot;Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua.
                    </p>
                  </div>
                </div>
                <div
                  id="right"
                  className="relative bg-[#0B0C0B] w-full h-full max-w-[570px] max-h-[570px] inline-flex flex-col justify-center items-center"
                >
                  <Image
                    className="bg-[#0B0C0B] w-full h-full"
                    src={author1}
                    alt="James Jones"
                  />
                  <div className="author-pic-bg absolute w-full h-full max-w-[570px] max-h-[568px]"></div>
                </div>
              </div>
            </div>
            <div>
              <div className="inline-flex flex-col justify-center py-[10px] px-6 arrows left-aarow w-auto items-center">
                <Image
                  src={warrowleft}
                  alt="Left Arrow"
                  className="w-6 h-6"
                  placeholder="blur"
                />
              </div>
              <div className="inline-flex flex-col justify-center py-[10px] px-6 arrows right-aarow w-auto items-center">
                <Image
                  src={arrowright}
                  alt="Left Arrow"
                  className="w-6 h-6"
                  placeholder="blur"
                />
              </div>
            </div>
            <div className="flex gap-[25px] pb-[37px] pl-[120px] mt-[-26px] z-[75] relative">
              <div className="flex flex-col gap-6 items-center px-[30px] py-5 bg-black rounded-[50px]">
                <div className="inline-flex flex-col justify-center items-center w-full h-full max-w-[107px] max-h-[107px]">
                  <Image classname="w-full h-full" src={author2} alt="" />
                </div>
                <h4 className="text-[#009f00] text-center max-w-[180px] millik text-[36px]">
                  Debbie Mays
                </h4>
              </div>
              <div className="flex flex-col gap-6 items-center px-[30px] py-5 bg-black rounded-[50px]">
                <div className="inline-flex flex-col justify-center items-center w-full h-full max-w-[107px] max-h-[107px]">
                  <Image classname="w-full h-full" src={author3} alt="" />
                </div>
                <h4 className="text-[#009f00] text-center max-w-[180px] millik text-[36px]">
                  Trevor Jones
                </h4>
              </div>
              <div className="flex flex-col gap-6 items-center px-[30px] py-5 bg-black rounded-[50px]">
                <div className="inline-flex flex-col justify-center items-center w-full h-full max-w-[107px] max-h-[107px]">
                  <Image classname="w-full h-full" src={author4} alt="" />
                </div>
                <h4 className="text-[#009f00] text-center max-w-[180px] millik text-[36px]">
                  Etty Fidele
                </h4>
              </div>
              <div className="flex flex-col gap-6 items-center px-[30px] py-5 bg-black rounded-[50px]">
                <div className="inline-flex flex-col justify-center items-center w-full h-full max-w-[107px] max-h-[107px]">
                  <Image classname="w-full h-full" src={author5} alt="" />
                </div>
                <h4 className="text-[#009f00] text-center max-w-[180px] millik text-[36px]">
                  Ella Mayers
                </h4>
              </div>
              <div className="flex flex-col gap-6 items-center px-[30px] py-5 bg-black rounded-[50px]">
                <div className="inline-flex flex-col justify-center items-center w-full h-full max-w-[107px] max-h-[107px]">
                  <Image classname="w-full h-full" src={author6} alt="" />
                </div>
                <h4 className="text-[#009f00] text-center max-w-[180px] millik text-[36px]">
                  Fray Bekele
                </h4>
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
