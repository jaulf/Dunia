"use client";
//Discover Select button
import Link from "next/link";
import Image from "next/image";
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
import shopcart from "@/public/images/shopping-cart.png";
import filter from "@/public/images/filter-l.png";
import filterclose from "@/public/images/filter-close.png";
// Component Imports
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

import { useState } from "react";
import Discover from "./incase";
import DiscoverProductList from "@/components/displayProducts/discoverProductList";

export default function Home() {
  const [releaseDate, setReleaseDate] = useState(null);
  const [price, setPrice] = useState(null);
  const [age, setAge] = useState(null);
  const [filterStatus, setFilterStatus] = useState(false);
  const [filterProducts, setFilterProducts] = useState(null);

  const handleFilter = async () => {
    const url = new URL("http://164.92.125.188/api/v1/products/filter");

    if (!releaseDate && !price && !age) {
      return;
    }

    const params = {
      release_date: releaseDate,
      age: age,
      price: price,
    };
    Object.keys(params).forEach((key) =>
      url.searchParams.append(key, params[key])
    );

    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };

    let body = {
      release_date: releaseDate,
      price: price,
      age: age,
    };

    const filteredData = await fetch(url, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    }).then((response) => {
      return response.json();
    });

    if (filteredData.data) {
      setFilterProducts(filterProducts);
      console.log(filteredData);
    }
  };

  return (
    <div className="text-[#4D4D4D] m-0">
      <div class="flex justify-center shrink-0 items-center bg-white sticky top-0 z-[100]">
        <div class="max-w-[1440px] shrink-0 w-full navspace py-4 px-10">
          <Navbar />
        </div>
      </div>

      <main>
        <section id="Discover" className="bodyCon">
          <div className="px-10 pt-24 pb-[100px] flex flex-col">
            <div className="flex justify-between items-center ">
              <h3 className="millik text-[32px] text-black leading-[30.94px]">
                Discover what you need ⚡
              </h3>
            </div>

            <div class="flex pt-[51px] pb-[40px] justify-between items-center">
              <div class="flex catb font-medium text-xl text-black items-center gap-[10px]">
                <span class="catb-active py-[10px] px-[23px]">All</span>
                <span class="px-[21px]">Climate change</span>
                <span class="px-[16px]">sustainability</span>
                <span class="px-[19.5px]">biodiversity</span>
              </div>
              <div
                onClick={handleFilter}
                class="flex self-stretch cursor-pointer rounded-full text-[#FCFCFD] bg-[#009f00] gap-[10px] items-center py-[11px] px-[20px]"
              >
                <span>Filter</span>
                <div className="inline-flex w-[18px]">
                  <Image
                    src={filter}
                    alt="Filter"
                    className=" shrink-0 w-full h-auto"
                  />
                </div>
              </div>
            </div>

            <div className="inline-blockgap-10 items-end">
              <div class="gap-4 flex items-end">
                <div class="filter">
                  <h6>Release date</h6>
                  <select
                    onChange={(e) => setReleaseDate(e.target.value)}
                    name="release_date"
                    id="release_date"
                  >
                    <option value="ASC">Newest</option>
                    <option value="ASC">Last 30 days</option>
                    <option value="ASC">Last 90 days</option>
                    <option value="DESC">Oldest</option>
                  </select>
                </div>
                <div class="filter">
                  <h6>Price</h6>
                  <select
                    onChange={(e) => setPrice(e.target.value)}
                    name="price"
                    id="price"
                  >
                    <option value="ASC">Bestsellers</option>
                    <option value="ASC">Lowest to highest</option>
                    <option value="DESC">Highest to lowest</option>
                  </select>
                </div>
                <div class="filter">
                  <h6>Creators</h6>
                  <select>
                    {/* There is another dropdown for "All creators", we''ll exclude it for now */}
                    <option>Verified Only</option>
                    {/* <option>All Creators</option> */}
                  </select>
                </div>
                <div class="filter">
                  <h6>Age</h6>
                  <select
                    onChange={(e) => setAge(e.target.value)}
                    name="age"
                    id="age"
                  >
                    <option value="3 - 8">3 - 8 years old</option>
                    <option value="8 - 12">8 - 12 years old</option>
                    <option value="12 - 18">12 - 18 years old</option>
                  </select>
                </div>
                <div className="bg-[#009f00] shrink-0 self-end whitespace-nowrap ml-6 flex gap-[10px] text-white rounded-[12px] p-4">
                  <div class="flex shrink-0 flex-col self-center">
                    <Image
                      src={filterclose}
                      alt="Reset Filter"
                      class="w-4 h-4"
                    />
                  </div>
                  <span className="text-sm leading-4 block font-medium">
                    Reset filter
                  </span>
                </div>
              </div>
            </div>

            <DiscoverProductList />
          </div>
        </section>

        <section className="bodyCon">
          <div className="pt-[82px] pb-[132px] relative flex gap-6 justify-center items-center flex-col">
            <div className="flex flex-col justify-center items-center gap-3 ">
              <h3 className="millik text-[#121212] max-w-[845px] text-center text-[56px] leading-[64px]">
                Be the first to know when new{" "}
                <span className="dunia-grd2">resources</span> are available
              </h3>
              <p className="max-w-[612px] text-[#4d4d4d] text-center">
                As climate change grips the planet, here is Earth. Org&apos;s
                selection of must-read books on climate change and
                sustainability to enlighten you.
              </p>
            </div>

            <div className="flex flex-col gap-8">
              <input
                className="py-[14px] px-5 outline-none subscribe rounded-full"
                type="email"
                placeholder="Enter your email address"
              />
              <button className="bg-[#009F00] font-bold text-xl text-white py-[14px] px-12 self-center rounded-full flex justify-center items-center">
                Subscribe
              </button>
            </div>

            <div className="absolute flex self-start top-[38px] right-[158px]">
              <Image className="w-10 h-10" src={d7} alt="clover" />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
