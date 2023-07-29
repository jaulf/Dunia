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

export default function Home() {
  // const router = useRouter()
  // useEffect(() => {
  //   router.push('/onboarding/signup')
  // })

  return (
    <div class="text-[#4D4D4D] m-0">
      <header>
        <nav className="flex justify-between py-[26px] px-10">
          <div class="flex gap-11 items-center">
            <Image className="w-[91px] h-[28px]" src={dunia} alt="Dunia Logo" />

            <div class="flex gap-6 items-center">
              <Link class="nli" href="/">
                Featured
              </Link>
              <div className="flex gap-[10px] items-center">
                <span class="nli">Categories</span>
                <Image class="w-[10px] h-[10px]" src={chevdown} alt="Arrow Down Icon" />
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

        <div>
          
        </div>
      </header>

      <main></main>
      <footer></footer>
    </div>
  );
}
