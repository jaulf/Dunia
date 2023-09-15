"use client";
import Link from "next/link";
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

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
import { getAllProducts, fetchProducts } from "./redux/products/productSlice";
import { getLikedProducts } from "./redux/products/LikedProductsSlice";
import { useDispatch, useSelector } from "react-redux";
import { getCartProducts } from "./redux/products/cartProductsSlice";
import menuMobile from "@/public/images/mobile-menu.png";
import ai from "@/public/images/ai.svg";
import Mcancel from "@/public/images/Mcancel.svg";
import dropdown from "@/public/images/down-dropdown.svg";

function Navbar() {
  const allProducts = useSelector(getAllProducts);
  const productStatus = useSelector((state) => state.Products.status);
  const numberOfCartItems = useSelector(
    (state) => state.cartProducts.cartProducts
  );
  const { data: session, status } = useSession();
  const router = useRouter();
  const [body, setBody] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [filteredList, setFilteredList] = useState("");
  const [shouldRender, setShouldRender] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("user-auth")) {
      setBody(JSON.parse(localStorage.getItem("user-auth")));
    }
  }, []);

  useEffect(() => {
    if (productStatus == "idle") {
      dispatch(fetchProducts());
      dispatch(getLikedProducts());
      dispatch(getCartProducts());
    }
  }, [productStatus, dispatch]);

  const searchHandler = useCallback(() => {
    allProducts.map((red) => {
      let filteredData = red.data.filter((find) => {
        return find.name.toLowerCase().includes(searchInput.toLowerCase());
      });
      setFilteredList(filteredData);
      setShouldRender(true); // Enable rendering
    });
  }, [allProducts, searchInput]);

  useEffect(() => {
    // Debounce search handler
    const timer = setTimeout(() => {
      searchHandler();
    }, 1000);
    // Cleanup
    return () => {
      clearTimeout(timer);
      setShouldRender(false);
    };
  }, [searchHandler]);

  const sidebarPopup = () => {
    let modalpopup = document.getElementById("mobile-sidebar");
    if (modalpopup.style.display === "block") {
      modalpopup.style.display = "none";
    } else {
      modalpopup.style.display = "block";
    }
  };

  const makeCategories = () => {
    let modalpopup = document.getElementById("categories-down");

    if (modalpopup.style.display === "grid") {
      modalpopup.style.display = "none";
      document.querySelector(".rotater").style.rotate = "0deg";
    } else {
      modalpopup.style.display = "grid";
      document.querySelector(".rotater").style.rotate = "-90deg";
    }
  };

  return (
    <>
      <div
        id="mobile-sidebar"
        className="fixed hidden p-8 modalpopup overflow-auto top-0 bg-white left-0 right-0 bottom-0 z-[99999999999999]"
      >
        <div id="top1" className="flex justify-between items-center">
          <div
            onClick={() => sidebarPopup()}
            className="p-3 bg-[#FBE7E7] rounded-full "
          >
            <Image src={Mcancel} alt="cancel" />
          </div>
          <Link href="/profile/cart" className="relative shrink-0">
            <Image
              className="w-6 h-6"
              src={shoppingbag}
              alt="Shopping Bag Icon"
            />
            {numberOfCartItems.length > 0 && (
              <div className="absolute flex flex-col justify-center items-center shrink-0 w-3 h-3 top-[-4px] right-[-7px] font-semibold text-[8px] bg-black text-white rounded-full ">
                {numberOfCartItems.length}
              </div>
            )}
          </Link>
        </div>
        <div id="top2" className="py-6">
          <div className="flex self-center w-full px-5 py-4 gap-2 items-center rounded-full bg-[#0000000d]">
            <Image
              className="w-[16px] h-[16px]"
              src={search}
              alt="Search Icon"
            />
            <input
              onChange={(e) => setSearchInput(e.target.value)}
              value={searchInput}
              className="search bg-transparent outline-none w-full"
              type="text"
              placeholder="Search books or authors"
            />
          </div>
        </div>
        <div>
          <Link href="/discover" class="px-2 block py-4 font-bold">
            Discover
          </Link>
          <div
            onClick={makeCategories}
            class="px-2 py-4 font-bold flex justify-between items-center"
          >
            Categories <Image className=" rotater" src={dropdown} alt="" />
          </div>
          <div
            id="categories-down"
            className="px-6 pt-5 grid gap-5 text-sm font-medium py-3"
          >
            <span>Biodiversity</span>
            <span>Pollution</span>
            <span>Recycling</span>
            <span>Global Warming</span>
            <span>Renewable Energy</span>
            <span>Wildlife Conservation</span>
            <span>Nature-based Solutions</span>
            <span>Waste Management</span>
            <span>Environmental Justice</span>
          </div>
        </div>

        <div id="top3" className="grid gap-3 pt-9">
          <div>
            <Link
              className="text-[#212121] whitespace-nowrap px-7 py-[14px] self-center rounded-full justify-center flex bg-[#f5f5f5] font-bold text-center"
              href="/onboarding/login"
            >
              Log In
            </Link>
          </div>
          <div>
            <div className="ai-button">
              <span>dunia.ai</span>
              <Image src={ai} alt="AI logo" />
            </div>
          </div>
        </div>

        <div>
          <ul className="text-[12px] leading-6 flex gap-10 justify-center items-center font-medium text-[#121212] pt-8">
            <ol>Instagram</ol>
            <ol>Twitter</ol>
            <ol>Youtube</ol>
            <ol>LinkedIn</ol>
          </ul>
        </div>
      </div>

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

            <div className="hidden xl:flex gap-6 items-center">
              <Link className="nli" href="/discover">
                Discover
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

          <div className="hidden xl:flex dropdown-search relative w-full max-w-[500px]">
            <div className="flex self-center w-full px-5 py-4 gap-[10px] items-center rounded-full bg-[#0000000d]">
              <Image
                className="w-[18px] h-[18px]"
                src={search}
                alt="Search Icon"
              />
              <input
                onChange={(e) => setSearchInput(e.target.value)}
                value={searchInput}
                className="search bg-transparent outline-none w-full"
                type="text"
                placeholder="Search books or authors"
              />
            </div>
            {searchInput.length > 0 ? (
              <div className="absolute mt-12 pt-4 bg-transparent">
                <div className="rounded-[20px] flex-col justify-start left-0 bg-white popup py-6 px-0 w-[678px]">
                  <div className="flex searchmodal-res flex-col justify-start bg-white w-full">
                    {shouldRender ? (
                      filteredList.length > 0 ? (
                        filteredList.map((found) => {
                          return (
                            <Link
                              href={"/books/" + found.id}
                              key={found.id}
                              class="search-card flex items-center py-3 px-6 gap-6 w-full justify-start"
                            >
                              <div class="search-card-img relative w-[120px] h-[108px] overflow-hidden">
                                <Image
                                  className="object-cover object-center"
                                  fill
                                  src={s1}
                                  alt="Naomi Klien"
                                />
                              </div>
                              <div className="search-card-content flex flex-col gap-3">
                                <h6>{found.author.name}</h6>
                                <h4>{found.name}</h4>
                                <div className="search-card-content-sub">
                                  <h5>${found.price}</h5>
                                  <span></span>
                                  <h6>{found.categories[0].name}</h6>
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
                            </Link>
                          );
                        })
                      ) : (
                        <div className="py-3 px-6">No result found.</div>
                      )
                    ) : (
                      <div className="py-3 px-6">searching ...</div>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <span></span>
            )}
          </div>

          <div className="hidden xl:flex items-center gap-6">
            <div className="pr-[42px]">
              <div className="ai-button">
                <span>dunia.ai</span>
                <Image src={ai} alt="AI logo" />
              </div>
            </div>

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
                            localStorage.removeItem("auth-method");
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
                <Link href="/profile/cart" className="relative">
                  <Image
                    className="w-6 h-6"
                    src={shoppingbag}
                    alt="Shopping Bag Icon"
                  />
                  {numberOfCartItems.length > 0 && (
                    <div className="absolute flex flex-col justify-center items-center shrink-0 w-3 h-3 top-[-4px] right-[-7px] font-semibold text-[8px] bg-black text-white rounded-full ">
                      {numberOfCartItems.length}
                    </div>
                  )}
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

          <div
            onClick={() => sidebarPopup()}
            className="block xl:hidden w-10 h-10"
          >
            <Image className="w-full h-auto" src={menuMobile} alt="" />
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
            <div className="hidden xl:flex gap-6 items-center">
              <Link className="nli" href="/discover">
                Discover
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

          <div className="hidden xl:flex dropdown-search relative w-full max-w-[500px]">
            <div className="flex self-center w-full px-5 py-4 gap-[10px] items-center rounded-full bg-[#0000000d]">
              <Image
                className="w-[18px] h-[18px]"
                src={search}
                alt="Search Icon"
              />
              <input
                onChange={(e) => setSearchInput(e.target.value)}
                value={searchInput}
                className="search bg-transparent outline-none w-full"
                type="text"
                placeholder="Search books or authors"
              />
            </div>
            {searchInput.length > 0 ? (
              <div className="absolute mt-12 pt-4 bg-transparent">
                <div className="rounded-[20px] flex-col justify-start left-0 bg-white popup py-6 px-0 w-[678px]">
                  <div className="flex searchmodal-res flex-col justify-start bg-white w-full">
                    {shouldRender ? (
                      filteredList.length > 0 ? (
                        filteredList.map((found) => {
                          return (
                            <Link
                              href={"/books/" + found.id}
                              key={found.id}
                              class="search-card flex items-center py-3 px-6 gap-6 w-full justify-start"
                            >
                              <div class="search-card-img relative w-[120px] h-[108px] overflow-hidden">
                                <Image
                                  className="object-cover object-center"
                                  fill
                                  src={s1}
                                  alt="Naomi Klien"
                                />
                              </div>
                              <div className="search-card-content flex flex-col gap-3">
                                <h6>{found.author.name}</h6>
                                <h4>{found.name}</h4>
                                <div className="search-card-content-sub">
                                  <h5>${found.price}</h5>
                                  <span></span>
                                  <h6>{found.categories[0].name}</h6>
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
                            </Link>
                          );
                        })
                      ) : (
                        <div className="py-3 px-6">No result found.</div>
                      )
                    ) : (
                      <div className="py-3 px-6">searching ...</div>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <span></span>
            )}
          </div>

          <div className="hidden xl:flex items-center gap-6">
            <div className="pr-[42px]">
              <div className="ai-button">
                <span>dunia.ai</span>
                <Image src={ai} alt="AI logo" />
              </div>
            </div>

            <Link
              className="text-[#212121] whitespace-nowrap px-7 py-[14px] self-center rounded-full flex bg-[#f5f5f5] font-bold text-center"
              href="/onboarding/login"
            >
              Log In
            </Link>
            <div className="flex items-center gap-[32px]">
              <Link href="/profile/cart" className="relative shrink-0">
                <Image
                  className="w-6 h-6"
                  src={shoppingbag}
                  alt="Shopping Bag Icon"
                />
                {numberOfCartItems.length > 0 && (
                  <div className="absolute flex flex-col justify-center items-center shrink-0 w-3 h-3 top-[-4px] right-[-7px] font-semibold text-[8px] bg-black text-white rounded-full ">
                    {numberOfCartItems.length}
                  </div>
                )}
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

          <div
            onClick={() => sidebarPopup()}
            className="block xl:hidden w-10 h-10"
          >
            <Image className="w-full h-auto" src={menuMobile} alt="" />
          </div>
        </nav>
      )}
    </>
  );
}

export default Navbar;
