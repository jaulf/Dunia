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
import Navbaralt from "@/components/navbar-alt";
import Navbar from "@/components/navbar";
import CartList from "@/components/displayProducts/cartList";
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
        {/* <nav className="flex justify-center items-center py-3 border-b border-t-[2px] border-[#F2F2F2]">
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
            <div className="content  active-c-g">Cart</div>
            <div className="content">Following</div>
          </div>
        </nav> */}
        <SubNavbar />
      </header>

      <main>
        <section id="Discover" className="bodyCon">
          <div className="px-6 lg:px-10 pt-[42px] lg:pt-24 pb-20 lg:pb-[134px] flex gap-6 lg:gap-12 flex-col">
            <CartList />
          </div>
        </section>
      </main>
    </>
  );
}
