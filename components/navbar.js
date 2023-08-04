import Link from "next/link";
import Image from "next/image";

import dunia from "@/public/images/dunia.png";
import chevdown from "@/public/images/Arrow.png";
import chevdown2 from "@/public/images/chev-down.png";
import search from "@/public/images/search.png";
import shoppingbag from "@/public/images/shopping-bag.png";

function Navbar() {
  return (
    <nav className="flex justify-between py-4 px-10">
      <div className="flex gap-11 items-center">
        <Link href="/">
          <Image
            className="w-[91px] h-[28px]"
            src={dunia}
            alt="Dunia Logo"
          />
        </Link>

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
        <Image className="w-[18px] h-[18px]" src={search} alt="Search Icon" />
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
  );
}

export default Navbar;
