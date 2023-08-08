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
import avatar2 from "@/public/images/profile/uavatar.png";

export default function Navbaralt() {
  return (
    <>
      <div class="setbody">
        <div class="shrink-0 w-full navspace px-10">
          <nav className="flex justify-between items-center py-4">
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

            <div className="flex items-center gap-6">
              <div className="dropdown">
                <div className="dropdown-button relative w-[47px] h-[47px]">
                  <Image
                    className="object-cover object-center"
                    placeholder="blur"
                    quality={100}
                    sizes="100vw"
                    fill
                    src={avatar2}
                    alt="User Avatar"
                  />
                </div>
                {/* Dropdown menu if needed */}
                {/* <div className="dropdown-menu pt-8 ">
                <div className="text-black flex max-w-fit popup border-[2px] rounded-[15px] border-[#f2f2f2] bg-white flex-col gap-[30px] px-6 py-[34px]">
                  <div className="flex flex-col gap-5">
                    <div class="flex flex-row items-center gap-[15px]">
                      <Image className="w-[70px] h-auto" src={uavatar} alt="" />
                      <div className="flex flex-col gap-[6px]">
                        <h2 className="font-medium text-xl leading-6">
                          Nuel Adeleke
                        </h2>
                        <p className="font-medium text-[10px]">
                          adelenuel@gmail.com
                        </p>
                      </div>
                    </div>
                    <div>
                      <button className="bg-[#009F00] text-white leading-[19px] py-[12.5px] px-[98.5px] rounded-[32px]">
                        Edit profile
                      </button>
                    </div>
                  </div>

                  <div class="flex flex-col gap-5">
                    <div className="sub2">
                      <div>
                        <Image className="w-5 h-5" src={dp1} alt="" />
                        <span>Favourites</span>
                      </div>
                      <div class="flex items-center gap-[115px!important]">
                        <div class="flex item-center gap-[15px]">
                          <Image className="w-5 h-5" src={dp2} alt="" />
                          <span class="font-medium">Downloads</span>
                        </div>
                        <span class="text-[10px] block font-medium rounded-full py-[7px] px-[10px] bg-[#FEF0EF]">
                          0/10
                        </span>
                      </div>
                      <div>
                        <Image className="w-5 h-5" src={dp3} alt="" />
                        <span>Following</span>
                      </div>
                      <div>
                        <Image className="w-5 h-5" src={dp4} alt="" />
                        <span>Wishlist</span>
                      </div>
                    </div>

                    <div>
                      <div class="bg-[#F2F2F2] h-[1.5px] w-[280px]"></div>
                    </div>

                    <div className="sub2">
                      <div>
                        <Image className="w-5 h-5" src={dp5} alt="" />
                        <span>Order History</span>
                      </div>
                      <div>
                        <Image className="w-5 h-5" src={dp6} alt="" />
                        <span>Recommended</span>
                      </div>
                    </div>

                    <div>
                      <div class="bg-[#F2F2F2] h-[1.5px] w-[280px]"></div>
                    </div>

                    <div className="sub2">
                      <div>
                        <Image className="w-5 h-5" src={dp7} alt="" />
                        <span className="text-[#FF3333]">Log out</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
              </div>

              <div className="flex gap-[31px] items-center">
                <div className="flex gap-6 items-center">
                  <div className="relative">
                    <Image className="w-6 h-6" src={bell} alt="Bell Icon" />
                    <div className="absolute flex flex-col justify-center items-center shrink-0 w-3 h-3 top-[-4px] right-[-4px] font-semibold text-[8px] bg-black text-white rounded-full ">
                      3
                    </div>
                  </div>
                  <div className="relative">
                    <Image
                      className="w-6 h-6"
                      src={shoppingbag}
                      alt="Shopping Bag Icon"
                    />
                    <div className="absolute flex flex-col justify-center items-center shrink-0 w-3 h-3 top-[-4px] right-[-4px] font-semibold text-[8px] bg-black text-white rounded-full ">
                      3
                    </div>
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
        </div>
      </div>
    </>
  );
}
