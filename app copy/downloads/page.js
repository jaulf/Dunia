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

import rect from "@/public/images/downloads/rect.png";
import closeB from "@/public/images/closeB.png";
import NavbarLoggedIn from "@/components/navbar(LoggedIn)";

export default function NavbarUser() {
  return (
    <>
      <header className="bg-white sticky top-0 z-[100]">
        <NavbarLoggedIn />
        <nav className="flex justify-center items-center py-3 border-b border-t-[2px] border-[#F2F2F2]">
          <div className="content-container items-center flex gap-3 justify-center max-w-[1440px]">
            <div className="content">Profile</div>
            <div className="content">
              Favourites{" "}
              <div className="pl-2">
                <span class="f-active">2</span>
              </div>
            </div>
            <div className="content  active-c-g">
              {2 == 1 ? (
                <span>Downloads</span>
              ) : (
                <div className="flex items-center gap-2">
                  <div className="justify-start items-center gap-3 inline-flex">
                    <div className="w-2.5 h-2.5 relative">
                      <div className="w-2 h-2 left-[1px] top-[1px] absolute bg-green-700 rounded-full" />
                    </div>
                    <div className="">Downloads</div>
                  </div>
                  <div className="content-sub-active">3/4</div>
                </div>
              )}
            </div>
            <div className="content">Order History</div>
            <div className="content">Cart</div>
            <div className="content">Following</div>
          </div>
        </nav>
      </header>

      <main>
        <section id="Discover" className="setbody">
          <div className="p-10 flex flex-col gap-7">
            <div>
              <h2 className="h2-one">Downloads</h2>
            </div>

            <table>
              <tr>
                <th>Details</th>
                <th>Author</th>
                <th>Category</th>
                <th>License</th>
              </tr>

              <tr className="font-semibold leading-5">
                <td>
                  <div className="flex items-center gap-[10px]">
                    <div class="w-[90px] relative h-[50px] inline-flex justify-center items-center">
                      <Image
                        className="object-cover"
                        fill
                        sizes="100vw"
                        src={rect}
                        alt="download"
                      />
                    </div>
                    <span className="millik font-normal text-[#121212]">
                      All We Can Save
                    </span>
                  </div>
                </td>
                <td>@nikkyblue</td>
                <td>Crime</td>
                <td colSpan={2} className="text-[#009F00] w-auto">
                  Download license
                </td>
                <td>
                  <button className="leading-6 py-[10px] px-[43.5px] float-right bg-[#009f00] text-white rounded-full">
                    Download
                  </button>
                </td>
              </tr>
              <tr className="font-semibold leading-5">
                <td>
                  <div className="flex items-center gap-[10px]">
                    <div class="w-[90px] relative h-[50px] inline-flex justify-center items-center">
                      <Image
                        className="object-cover"
                        fill
                        sizes="100vw"
                        src={rect}
                        alt="download"
                      />
                    </div>
                    <span className="millik font-normal text-[#121212]">
                      All We Can Save
                    </span>
                  </div>
                </td>
                <td>@nikkyblue</td>
                <td>Crime</td>
                <td colSpan={2} className="text-[#009F00] w-auto">
                  Download license
                </td>
                <td>
                  <button className="leading-6 py-[10px] px-[43.5px] float-right bg-[#009f00] text-white rounded-full">
                    Download
                  </button>
                </td>
              </tr>
              <tr className="font-semibold leading-5">
                <td>
                  <div className="flex items-center gap-[10px]">
                    <div class="w-[90px] relative h-[50px] inline-flex justify-center items-center">
                      <Image
                        className="object-cover"
                        fill
                        sizes="100vw"
                        src={rect}
                        alt="download"
                      />
                    </div>
                    <span className="millik font-normal text-[#121212]">
                      All We Can Save
                    </span>
                  </div>
                </td>
                <td>@nikkyblue</td>
                <td>Crime</td>
                <td colSpan={2} className="text-[#009F00] w-auto">
                  Download license
                </td>
                <td>
                  <div className="flex gap-5 items-center justify-end">
                    <button className="leading-6 py-[10px] px-[43.5px] bg-[#F1FEF1] text-[#808080] rounded-full">
                      In progress
                    </button>
                    <div>
                      <Image
                        src={closeB}
                        className="w-6 h-6"
                        alt="close button"
                      />
                    </div>
                  </div>
                </td>
              </tr>
              <tr className="font-semibold leading-5">
                <td>
                  <div className="flex items-center gap-[10px]">
                    <div class="w-[90px] relative h-[50px] inline-flex justify-center items-center">
                      <Image
                        className="object-cover"
                        fill
                        sizes="100vw"
                        src={rect}
                        alt="download"
                      />
                    </div>
                    <span className="millik font-normal text-[#121212]">
                      All We Can Save
                    </span>
                  </div>
                </td>
                <td>@nikkyblue</td>
                <td>Crime</td>
                <td colSpan={2} className="text-[#009F00] w-auto">
                  Download license
                </td>
                <td>
                  <button className="leading-6 py-[10px] px-[43.5px] float-right bg-[#009f00] text-white rounded-full">
                    Download
                  </button>
                </td>
              </tr>
            </table>
          </div>
        </section>
      </main>
    </>
  );
}
