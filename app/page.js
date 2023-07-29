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

export default function Home() {
  // const router = useRouter()
  // useEffect(() => {
  //   router.push('/onboarding/signup')
  // })

  return (
    <div class="text-[#4D4D4D] m-0">
      <div className="bodyCon">
        <header className="relative">
          <nav className="flex justify-between py-[26px] px-10">
            <div class="flex gap-11 items-center">
              <Image
                className="w-[91px] h-[28px]"
                src={dunia}
                alt="Dunia Logo"
              />

              <div class="flex gap-6 items-center">
                <Link class="nli" href="/">
                  Featured
                </Link>
                <div className="flex gap-[10px] items-center">
                  <span class="nli">Categories</span>
                  <Image
                    class="w-[10px] h-[10px]"
                    src={chevdown}
                    alt="Arrow Down Icon"
                  />
                </div>
              </div>
            </div>

            <div class="flex self-center px-5 py-[14px] gap-[10px] items-center rounded-full w-full max-w-[500px] bg-[#0000000d]">
              <Image class="w-[18px] h-[18px]" src={search} alt="Search Icon" />
              <input
                class="search bg-transparent outline-none"
                type="text"
                placeholder="Search Books or authors"
              />
            </div>

            <div class="flex items-center gap-6">
              <Link
                className="text-[#212121] px-7 py-[14px] self-center rounded-full flex bg-[#f5f5f5] font-bold text-center"
                href="/"
              >
                Log In
              </Link>
              <div class="flex items-center gap-[32px]">
                <div class="relative">
                  <Image
                    class="w-6 h-6"
                    src={shoppingbag}
                    alt="Shopping Bag Icon"
                  />
                  <div class="absolute top-[-4px] right-[-7px] font-semibold text-[8px] bg-black text-white py-[1px] rounded-full px-[3px]">
                    3
                  </div>
                </div>
                <div class="flex gap-1 py-1 px-3 border-2 border-[#f5f5f5] rounded-full">
                  <span class="font-medium text-sm ">ENG</span>
                  <Image
                    class="self-center w-4 h-4"
                    src={chevdown2}
                    alt="Arrow Down Icon"
                  />
                </div>
              </div>
            </div>
          </nav>

          <div class="p-10 relative flex justify-between gap-[75px] items-center">
            <div className="left flex flex-col gap-8">
              <div className="flex flex-col gap-4  max-w-[583px]">
                <div class="bg-[#f2f2f2] px-6 rounded-3xl py-2 text-[#6d6d6d] self-start w-auto text-xs font-medium">
                  Democratizing climate knowledge 🍀
                </div>
                <div className="flex flex-col gap-2">
                  <h2 class="l-h2">
                    Accelerating climate literacy through{" "}
                    <span class="dunia-gradient">creative storytelling</span>
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
                <Image class="h-10 w-auto" src={hleftimg} alt="Memoji" />
              </div>
            </div>
            <div id="h-ri" className="right rounded-[50px]">
              <div
                id="card"
                className="px-6 py-7 pb-[59px] flex flex-col gap-[30px]"
              >
                <div class="flex gap-[10px]">
                  <div>
                    <Image
                      class="rounded-[30px] w-auto h-auto max-h-[552px]"
                      src={r1}
                      alt="one"
                    />
                  </div>
                  <div>
                    <Image
                      class="rounded-[30px] w-auto h-auto max-h-[552px]"
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
                    <div class="flex gap-3 items-center">
                      <Image src={avatar} class="w-8 h-8" alt="Memoji" />
                      <span class="font-semibold">Josh Debs</span>
                    </div>
                    <div class="rounded-full px-[27px] py-[14px] font-bold text-white bg-black">
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
          />
          <Image
            src={clover}
            alt=""
            className="w-10 h-10 flex self-start absolute top-[149px] left-[485px]"
          />
        </header>
      </div>

      <main></main>
      <footer></footer>
    </div>
  );
}
