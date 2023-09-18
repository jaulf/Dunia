"use client";
import Link from "next/link";
import Image from "next/image";
import tp1 from "@/public/images/tp1.png";
import tp2 from "@/public/images/tp2.png";
import tp3 from "@/public/images/tp3.png";
import tp4 from "@/public/images/tp4.png";
import hearte from "@/public/images/heart-empty.png";
import heartf from "@/public/images/heart-green.png";
import share from "@/public/images/share.png";
import shopcart from "@/public/images/profile/cart-active.png";
import closeB from "@/public/images/newD.svg"

import rect from "@/public/images/downloads/rect.png";
import { useState } from "react";

export default function ListOfOrderHistory() {
  // const [orders, setOrders] = useState(null);

  // const requiredRun = async () => {
  //   if (typeof window !== "undefined") {
  //     const token = JSON.parse(localStorage.getItem("user-auth"));
  //     const url = new URL("https://dunia.mrprotocoll.me/api/v1/orders");

  //     const headers = {
  //       Authorization: `Bearer ${token.token}`,
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //     };

  //     const resultRequest = await fetch(url, {
  //       method: "GET",
  //       headers,
  //     }).then((response) => response.json());

  //     setOrders(resultRequest);
  //   }
  // };

  // requiredRun();

  return (
    <>
      {1 == 1 ? (
        <table>
          <tr className="hidden lg:table-row">
            <th>Details</th>
            <th>Author</th>
            <th>Order number</th>
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
            <td className="hidden lg:table-cell">#099019</td>
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
                  <Image src={closeB} className="lg:w-6 lg:h-6 w-4 h-4" alt="close button" />
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
            <td className="hidden lg:table-cell">#099019</td>
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
                  <Image src={closeB} className="lg:w-6 lg:h-6 w-4 h-4" alt="close button" />
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
            <td className="hidden lg:table-cell">#099019</td>
            <td className="hidden lg:table-cell">Crime</td>
            <td className="hidden lg:table-cell text-[#009F00]">
              Download license
            </td>
            <td>
              <Link href="/" className="leading-6 text-[14px] hover:opacity-80 lg:text-[16px] px-6 py-2 lg:py-[10px] lg:px-[43.5px] float-right bg-[#009f00] text-white rounded-full">
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

          {/* {orders.map((order) => (
            <tr key={order.id} className="font-semibold leading-5">
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
              <td>#099019</td>
              <td>Crime</td>
              <td className="text-[#009F00]">Download license</td>
              <td>
                <button className="leading-6 py-[10px] px-[43.5px] float-right bg-[#009f00] text-white rounded-full">
                  Download
                </button>
              </td>
            </tr>
          ))} */}
        </table>
      ) : (
        <div>
          You have no book ordered yet.{" "}
          <Link href="/discover" className="text-[#318736] underline">
            Explore some books.
          </Link>
        </div>
      )}
    </>
  );
}
