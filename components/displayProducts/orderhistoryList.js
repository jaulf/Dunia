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

import rect from "@/public/images/downloads/rect.png";
import { useState } from "react";

export default function ListOfOrderHistory() {
  const [orders, setOrders] = useState(null);

  const requiredRun = async () => {
    if (typeof window !== "undefined") {
      const token = JSON.parse(localStorage.getItem("user-auth"));
      const url = new URL("http://164.92.125.188/api/v1/orders");

      const headers = {
        Authorization: `Bearer ${token.token}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      };

      const resultRequest = await fetch(url, {
        method: "GET",
        headers,
      }).then((response) => response.json());

      setOrders(resultRequest);
    }
  };

  requiredRun();

  return (
    <>
      {orders && orders.length > 0 ? (
        <table>
          <tr>
            <th>Details</th>
            <th>Author</th>
            <th>Order number</th>
            <th>Category</th>
            <th>License</th>
            <th></th>
          </tr>

          {orders.map((order) => (
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
              <td>#099019</td>
              <td>Crime</td>
              <td className="text-[#009F00]">Download license</td>
              <td>
                <button className="leading-6 py-[10px] px-[43.5px] float-right bg-[#009f00] text-white rounded-full">
                  Download
                </button>
              </td>
            </tr>
          ))}
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
