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
import Navbar from "@/components/navbar";
import SubNavbar from "@/components/subnavbar";

export default function NavbarUser() {
  return (
    <>
      <header className="bg-white sticky top-0 z-[100]">
        <div class="flex justify-center shrink-0 items-center bg-white sticky top-0 z-[100]">
          <div class="max-w-[1440px] shrink-0 w-full navspace py-6 xl:py-4 px-6 xl:px-10">
            <Navbar />
          </div>
        </div>

        <SubNavbar />
      </header>

      <main>
        <section id="Discover" className="setbody">
          <div className="py-12 px-6 lg:p-10 flex flex-col gap-1 lg:gap-7">
            <div>
              <h2 className="h2-one">Downloads</h2>
            </div>
            <table>
              <tr className="hidden lg:table-row">
                <th>Details</th>
                <th>Author</th>
                <th>Category</th>
                <th>License</th>
                <th></th>
              </tr>

              <Link
                href="/profile/orderhistory/item"
                className="font-semibold table-row leading-5"
              >
                <td>
                  <div className="flex items-center gap-[10px]">
                    <div class="w-[61px] h-[34px] lg:w-[90px] relative lg:h-[50px] inline-flex justify-center items-center">
                      <Image
                        className="object-cover"
                        fill
                        sizes="100vw"
                        src={rect}
                        alt="download"
                      />
                    </div>
                    <span className="millik text-sm lg:text-base font-normal text-[#121212]">
                      All We Can Save
                    </span>
                  </div>
                </td>
                <td className="hidden lg:table-cell">@nikkyblue</td>
                <td className="hidden lg:table-cell">Crime</td>
                <td className="hidden lg:table-cell text-[#009F00]">
                  Download license
                </td>
                <td>
                  {/* <Link href="/" className="leading-6 text-[14px] hover:opacity-80 lg:text-[16px] px-6 py-2 lg:py-[10px] lg:px-[43.5px] float-right bg-[#009f00] text-white rounded-full">
                Download
              </Link> */}
                  <div className="inline-flex float-right gap-1 lg:gap-5 py-[10px] bg-[#F1F1F1] rounded-full px-[22px] items-center justify-end">
                    <p className="leading-6 text-[14px] lg:text-[16px] text-[#808080]">
                      In progress
                    </p>
                    <div>
                      <Image
                        src={closeB}
                        className="lg:w-6 lg:h-6 w-4 h-4"
                        alt="close button"
                      />
                    </div>
                  </div>
                </td>
              </Link>
              <Link
                href="/profile/orderhistory/item"
                className="font-semibold table-row leading-5"
              >
                <td>
                  <div className="flex items-center gap-[10px]">
                    <div class="w-[61px] h-[34px] lg:w-[90px] relative lg:h-[50px] inline-flex justify-center items-center">
                      <Image
                        className="object-cover"
                        fill
                        sizes="100vw"
                        src={rect}
                        alt="download"
                      />
                    </div>
                    <span className="millik text-sm lg:text-base font-normal text-[#121212]">
                      All We Can Save
                    </span>
                  </div>
                </td>
                <td className="hidden lg:table-cell">@nikkyblue</td>
                <td className="hidden lg:table-cell">Crime</td>
                <td className="hidden lg:table-cell text-[#009F00]">
                  Download license
                </td>
                <td>
                  {/* <Link href="/" className="leading-6 text-[14px] hover:opacity-80 lg:text-[16px] px-6 py-2 lg:py-[10px] lg:px-[43.5px] float-right bg-[#009f00] text-white rounded-full">
                Download
              </Link> */}
                  <div className="inline-flex float-right gap-1 lg:gap-5 py-[10px] bg-[#F1F1F1] rounded-full px-[22px] items-center justify-end">
                    <p className="leading-6 text-[14px] lg:text-[16px] text-[#808080]">
                      In progress
                    </p>
                    <div>
                      <Image
                        src={closeB}
                        className="lg:w-6 lg:h-6 w-4 h-4"
                        alt="close button"
                      />
                    </div>
                  </div>
                </td>
              </Link>
              <Link
                href="/profile/orderhistory/item"
                className="font-semibold table-row leading-5"
              >
                <td>
                  <div className="flex items-center gap-[10px]">
                    <div class="w-[61px] h-[34px] lg:w-[90px] relative lg:h-[50px] inline-flex justify-center items-center">
                      <Image
                        className="object-cover"
                        fill
                        sizes="100vw"
                        src={rect}
                        alt="download"
                      />
                    </div>
                    <span className="millik text-sm lg:text-base font-normal text-[#121212]">
                      All We Can Save
                    </span>
                  </div>
                </td>
                <td className="hidden lg:table-cell">@nikkyblue</td>
                <td className="hidden lg:table-cell">Crime</td>
                <td className="hidden lg:table-cell text-[#009F00]">
                  Download license
                </td>
                <td>
                  <Link
                    href="/"
                    className="leading-6 text-[14px] hover:opacity-80 lg:text-[16px] px-6 py-2 lg:py-[10px] lg:px-[43.5px] float-right bg-[#009f00] text-white rounded-full"
                  >
                    Download
                  </Link>
                  {/* <div className="inline-flex float-right gap-1 lg:gap-5 py-[10px] bg-[#F1F1F1] rounded-full px-[22px] items-center justify-end">
                <p className="leading-6 text-[14px] lg:text-[16px] text-[#808080]">
                  In progress
                </p>
                <div>
                  <Image src={closeB} className="lg:w-6 lg:h-6 w-4 h-4" alt="close button" />
                </div>
              </div> */}
                </td>
              </Link>
            </table>
          </div>
        </section>
      </main>
    </>
  );
}
