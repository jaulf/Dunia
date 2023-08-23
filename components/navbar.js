"use client";
import Link from "next/link";
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import dunia from "@/public/images/dunia.png";
import chevdown from "@/public/images/Arrow.png";
import chevdown2 from "@/public/images/chev-down.png";
import search from "@/public/images/search.png";
import shoppingbag from "@/public/images/shopping-bag.png";
import avatar2 from "@/public/images/profile/uavatar.png";
import uavatar from "@/public/images/profile/uavatar.png";
import dp1 from "@/public/images/profile/heart.png";
import dp2 from "@/public/images/profile/download.png";
import dp3 from "@/public/images/profile/ucheck.png";
import dp4 from "@/public/images/profile/fileheart.png";
import dp5 from "@/public/images/profile/archive.png";
import dp6 from "@/public/images/profile/star.png";
import dp7 from "@/public/images/profile/logout.png";
import bell from "@/public/images/bell.png";
import ratings from "@/public/images/ratings.png";
import s1 from "@/public/images/search/s1.png";
import s2 from "@/public/images/search/s2.png";

function Navbar() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [body, setBody] = useState("");

  useEffect(() => {
    if (localStorage.getItem("user-auth")) {
      setBody(JSON.parse(localStorage.getItem("user-auth")));
    }
  }, []);

  return (
    <>
      {status == "authenticated" || body ? (
        <nav className="flex justify-between z-[999999999]">
          <div className="flex gap-11 items-center">
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

          <div className="dropdown-search relative w-full max-w-[500px]">
            <div className="flex self-center w-full px-5 py-4 gap-[10px] items-center rounded-full bg-[#0000000d]">
              <Image
                className="w-[18px] h-[18px]"
                src={search}
                alt="Search Icon"
              />
              <input
                className="search bg-transparent outline-none w-full"
                type="text"
                placeholder="Search Books or authors"
              />
            </div>
            <div className="absolute pt-8 bg-transparent">
              <div className="flex rounded-[20px] gap-6 flex-col justify-start left-0 bg-white popup p-8 w-[592px]">
                <div class="search-card flex items-center justify-center gap-6">
                  <div class="search-card-img relative w-[120px] h-[108px] overflow-hidden">
                    <Image
                      className="object-cover object-center"
                      fill
                      src={s1}
                      alt="Naomi Klien"
                    />
                  </div>
                  <div className="search-card-content flex flex-col gap-3">
                    <h6>Naomi Klein</h6>
                    <h4>This Changes Everything: Capital’s Finest</h4>
                    <div className="search-card-content-sub">
                      <h5>$150</h5>
                      <span></span>
                      <h6>Climate Change</h6>
                      <span></span>
                      <div className="flex gap-[3px] items-center ">
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
                <div class="search-card flex items-center justify-center gap-6">
                  <div class="search-card-img relative w-[120px] h-[108px] overflow-hidden">
                    <Image
                      className="object-cover object-center"
                      fill
                      src={s2}
                      alt="Naomi Klien"
                    />
                  </div>
                  <div className="search-card-content flex flex-col gap-3">
                    <h6>Naomi Klein</h6>
                    <h4>This Changes Everything: Capital’s Finest</h4>
                    <div className="search-card-content-sub">
                      <h5>$150</h5>
                      <span></span>
                      <h6>Climate Change</h6>
                      <span></span>
                      <div className="flex gap-[3px] items-center ">
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
          </div>

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

              <div className="dropdown-menu pt-8 ">
                <div className="text-black flex max-w-fit popup border-[2px] rounded-[15px] border-[#f2f2f2] bg-white flex-col gap-[30px] px-6 py-[34px]">
                  <div className="flex flex-col gap-5">
                    <div class="flex flex-row items-center gap-[15px]">
                      <Image
                        className="w-[70px] h-auto"
                        placeholder="blur"
                        src={uavatar}
                        alt=""
                      />
                      <div className="flex flex-col gap-[6px]">
                        <h2 className="font-medium text-xl leading-6">
                          {(session && session.name) ||
                            (body && body.data.name)}
                        </h2>
                        <p className="font-medium text-[10px]">
                          {(session && session.email) ||
                            (body && body.data.email)}
                        </p>
                      </div>
                    </div>
                    <Link href="/profile">
                      <button className="bg-[#009F00] text-white leading-[19px] py-[12.5px] px-[98.5px] rounded-[32px]">
                        Edit profile
                      </button>
                    </Link>
                  </div>

                  <div class="flex flex-col gap-5">
                    <div className="sub2">
                      <Link href="/profile/favorites">
                        <Image className="w-5 h-5" src={dp1} alt="" />
                        <span>Favourites</span>
                      </Link>
                      <Link
                        href="/profile/downloads"
                        class="flex items-center gap-[115px!important]"
                      >
                        <div class="flex item-center gap-[15px]">
                          <Image className="w-5 h-5" src={dp2} alt="" />
                          <span class="font-medium">Downloads</span>
                        </div>
                        <span class="text-[10px] block font-medium rounded-full py-[7px] px-[10px] bg-[#FEF0EF]">
                          0/10
                        </span>
                      </Link>
                      <Link href="/profile/following">
                        <Image className="w-5 h-5" src={dp3} alt="" />
                        <span>Following</span>
                      </Link>
                      <Link href="">
                        <Image className="w-5 h-5" src={dp4} alt="" />
                        <span>Wishlist</span>
                      </Link>
                    </div>

                    <div>
                      <div class="bg-[#F2F2F2] h-[1.5px] w-[280px]"></div>
                    </div>

                    <div className="sub2">
                      <Link href="/profile/orderhistory">
                        <Image className="w-5 h-5" src={dp5} alt="" />
                        <span>Order History</span>
                      </Link>
                      <Link href="">
                        <Image className="w-5 h-5" src={dp6} alt="" />
                        <span>Recommended</span>
                      </Link>
                    </div>

                    <div>
                      <div class="bg-[#F2F2F2] h-[1.5px] w-[280px]"></div>
                    </div>

                    <div className="sub2 cursor-pointer">
                      <div>
                        <Image className="w-5 h-5" src={dp7} alt="" />
                        <span
                          onClick={() => {
                            signOut();
                            localStorage.removeItem("user-auth");
                            router.refresh();
                          }}
                          className="text-[#FF3333]"
                        >
                          Log out
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-[31px] items-center">
              <div className="flex gap-6 items-center">
                <div className="relative">
                  <Image className="w-6 h-6" src={bell} alt="Bell Icon" />
                  <div className="absolute flex flex-col justify-center items-center shrink-0 w-3 h-3 top-[-4px] right-[-4px] font-semibold text-[8px] bg-black text-white rounded-full ">
                    3
                  </div>
                </div>
                <Link href="/cart" className="relative">
                  <Image
                    className="w-6 h-6"
                    src={shoppingbag}
                    alt="Shopping Bag Icon"
                  />
                  <div className="absolute flex flex-col justify-center items-center shrink-0 w-3 h-3 top-[-4px] right-[-7px] font-semibold text-[8px] bg-black text-white rounded-full ">
                    3
                  </div>
                </Link>
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
      ) : (
        <nav className="flex justify-between items-center w-full z-[999999999]">
          <div className="flex gap-11 items-center">
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

          <div className="flex self-center px-5 py-4 gap-[10px] items-center rounded-full w-full max-w-[500px] bg-[#0000000d]">
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
              href="/onboarding/login"
            >
              Log In
            </Link>
            <div className="flex items-center gap-[32px]">
              <Link href="/cart" className="relative">
                <Image
                  className="w-6 h-6"
                  src={shoppingbag}
                  alt="Shopping Bag Icon"
                />
                <div className="absolute flex flex-col justify-center items-center shrink-0 w-3 h-3 top-[-4px] right-[-7px] font-semibold text-[8px] bg-black text-white rounded-full ">
                  3
                </div>
              </Link>
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
      )}
    </>
  );
}

export default Navbar;
