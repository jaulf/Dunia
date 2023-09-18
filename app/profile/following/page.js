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
import shopcart from "@/public/images/profile/cart-active.png";

import profilepic from "@/public/images/pv-avatar.png";

import f1 from "@/public/images/following/1.png";
import f2 from "@/public/images/following/2.png";
import f3 from "@/public/images/following/3.png";
import Navbaralt from "@/components/navbar-alt";
import Navbar from "@/components/navbar";

export default function NavbarUser() {
  return (
    <>
      <header className="bg-white sticky top-0 z-[100]">
        <div class="flex justify-center shrink-0 items-center bg-white sticky top-0 z-[100]">
          <div class="max-w-[1440px] shrink-0 w-full navspace py-6 xl:py-4 px-6 xl:px-10">
            <Navbar />
          </div>
        </div>
        <nav className="flex justify-center items-center py-3 border-b border-t-[2px] border-[#F2F2F2]">
          <div className="content-container items-center flex gap-3 justify-center max-w-[1440px]">
            <div className="content">Profile</div>
            <div className="content">
              Favourites{" "}
              <div className="pl-2">
                <span class="f-active">2</span>
              </div>
            </div>
            <div className="content">
              {1 == 1 ? (
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
            <div className="content active-c-g">
              Following{" "}
              <div className="pl-2">
                <span class="f-active">3</span>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <main>
        <section id="Discover" className="setbody">
          <div className="p-10 flex flex-col gap-10">
            <div>
              <h2 className="h2-one">Following</h2>
            </div>

            <div id="following-container" className="flex flex-col gap-6">
              <div id="following-card" class="">
                <div id="social-info" class="flex items-center gap-5">
                  <div className="relative w-[50px] h-[50px] rounded-full">
                    <Image
                      placeholder="blur"
                      sizes="100vw"
                      fill
                      className="w-full h-auto object-cover"
                      src={profilepic}
                      alt="Profile Pic"
                    />
                  </div>
                  <div className="flex flex-col gap-[15px]">
                    <div className="flex flex-col gap-[5px] font-semibold">
                      <span className="text-[#009F00]">@nikkyblue</span>
                      <span className="text-[#686868]">
                        66.5K followers <span className="font-normal">|</span>{" "}
                        10 books
                      </span>
                    </div>
                    <div className="text-[#009F00]">View profile</div>
                  </div>
                </div>
                <div className="image-grid">
                  <div>
                    <Image
                      fill
                      className="object-cover object-top"
                      src={f1}
                      placeholder="blur"
                      alt="following gallery 1"
                    />
                  </div>
                  <div>
                    <Image
                      fill
                      className="object-cover object-top"
                      src={f2}
                      placeholder="blur"
                      alt="following gallery 1"
                    />
                  </div>
                  <div>
                    <Image
                      fill
                      className="object-cover object-center"
                      src={f3}
                      placeholder="blur"
                      alt="following gallery 1"
                    />
                  </div>
                  <div>
                    <Image
                      fill
                      className="object-cover object-top"
                      src={f1}
                      placeholder="blur"
                      alt="following gallery 1"
                    />
                  </div>
                </div>
              </div>
              <div id="following-card" class="">
                <div id="social-info" class="flex items-center gap-5">
                  <div className="relative w-[50px] h-[50px] rounded-full">
                    <Image
                      placeholder="blur"
                      sizes="100vw"
                      fill
                      className="w-full h-auto object-cover"
                      src={profilepic}
                      alt="Profile Pic"
                    />
                  </div>
                  <div className="flex flex-col gap-[15px]">
                    <div className="flex flex-col gap-[5px] font-semibold">
                      <span className="text-[#009F00]">@nikkyblue</span>
                      <span className="text-[#686868]">
                        66.5K followers <span className="font-normal">|</span>{" "}
                        10 books
                      </span>
                    </div>
                    <div className="text-[#009F00]">View profile</div>
                  </div>
                </div>
                <div className="image-grid">
                  <div>
                    <Image
                      fill
                      className="object-cover object-top"
                      src={f1}
                      placeholder="blur"
                      alt="following gallery 1"
                    />
                  </div>
                  <div>
                    <Image
                      fill
                      className="object-cover object-top"
                      src={f2}
                      placeholder="blur"
                      alt="following gallery 1"
                    />
                  </div>
                  <div>
                    <Image
                      fill
                      className="object-cover object-center"
                      src={f3}
                      placeholder="blur"
                      alt="following gallery 1"
                    />
                  </div>
                  <div>
                    <Image
                      fill
                      className="object-cover object-top"
                      src={f1}
                      placeholder="blur"
                      alt="following gallery 1"
                    />
                  </div>
                </div>
              </div>
              <div id="following-card" class="">
                <div id="social-info" class="flex items-center gap-5">
                  <div className="relative w-[50px] h-[50px] rounded-full">
                    <Image
                      placeholder="blur"
                      sizes="100vw"
                      fill
                      className="w-full h-auto object-cover"
                      src={profilepic}
                      alt="Profile Pic"
                    />
                  </div>
                  <div className="flex flex-col gap-[15px]">
                    <div className="flex flex-col gap-[5px] font-semibold">
                      <span className="text-[#009F00]">@nikkyblue</span>
                      <span className="text-[#686868]">
                        66.5K followers <span className="font-normal">|</span>{" "}
                        10 books
                      </span>
                    </div>
                    <div className="text-[#009F00]">View profile</div>
                  </div>
                </div>
                <div className="image-grid">
                  <div>
                    <Image
                      fill
                      className="object-cover object-top"
                      src={f1}
                      placeholder="blur"
                      alt="following gallery 1"
                    />
                  </div>
                  <div>
                    <Image
                      fill
                      className="object-cover object-top"
                      src={f2}
                      placeholder="blur"
                      alt="following gallery 1"
                    />
                  </div>
                  <div>
                    <Image
                      fill
                      className="object-cover object-center"
                      src={f3}
                      placeholder="blur"
                      alt="following gallery 1"
                    />
                  </div>
                  <div>
                    <Image
                      fill
                      className="object-cover object-top"
                      src={f1}
                      placeholder="blur"
                      alt="following gallery 1"
                    />
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
