"use client";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import {
  fetchProducts,
  getAllProducts,
  getHomeAllProducts,
} from "../redux/products/productSlice";

import Image from "next/image";
import tp1 from "@/public/images/tp1.png";
import hearte from "@/public/images/heart-empty.png";
import heartf from "@/public/images/heart-green.png";
import share from "@/public/images/share.png";
import shopcart from "@/public/images/shopping-cart.png";
import shopcartActive from "@/public/images/profile/cart-active.png";
import ratings from "@/public/images/ratings.png";
import filter from "@/public/images/filter-l.png";
import filterclose from "@/public/images/filter-close.png";
import { like, unlike } from "@/components/redux/products/LikedProductsSlice";
import { addToCart, removeFromCart } from "../redux/products/cartProductsSlice";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Favorite from "@/components/features/favorite";

function DiscoverProductList({ ages }) {
  const router = useRouter();
  const [releaseDate, setReleaseDate] = useState(null);
  const [price, setPrice] = useState(null);
  const [age, setAge] = useState(null);
  const [filterStatus, setFilterStatus] = useState(false);
  const [reset, setReset] = useState(false);
  const [filterProducts, setFilterProducts] = useState(null);
  const [Fap, setFap] = useState(false);

  const handleFilter = async () => {
    const url = new URL("https://dunia.mrprotocoll.me/api/v1/products/filter");

    
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
    try {
      setFilterStatus(true);
      const filteredData = await fetch(url, {
        method: "POST",
        headers,
        body: JSON.stringify(body),
      }).then((response) => {
        return response.json();
      });

      if (filteredData.data) {
        setFilterProducts(filteredData.data);
        setFilterStatus(false);
        setMore(4);
        setFap(true)
        console.log(filteredData);
      }
    } catch (error) {
      console.log(error);
      setFilterStatus(false);
    }
  };

  const dispatch = useDispatch();
  const [more, setMore] = useState(4);
  const allProducts = useSelector(getHomeAllProducts);
  const productStatus = useSelector((state) => state.Products.status);
  const productsAllLiked = useSelector(
    (state) => state.likedProducts.likedProducts
  );
  const productsInCart = useSelector(
    (state) => state.cartProducts.cartProducts
  );

  const checkIfLiked = (anID) => {
    return productsAllLiked.includes(anID);
  };

  const checkIfInCart = (anID2) => {
    return productsInCart.some((prod) => prod.id === anID2);
  };

  const saveItemHandler = async (anID) => {
    const likedProducts = productsAllLiked || [];

    if (checkIfLiked(anID)) {
      const updatedLikedProducts = likedProducts.filter((id) => id !== anID);
      dispatch(unlike(updatedLikedProducts));
    } else {
      const updatedLikedProducts = [...likedProducts, anID];
      dispatch(like(updatedLikedProducts));
    }
  };

  const getQty = (anID) => {
    if (productStatus == "succeeded") {
      const newProductsInCart = productsInCart || [];
      const updatedProductsInCart = newProductsInCart.filter(
        (item) => item.id === anID
      );
      return updatedProductsInCart[0].qty;
    }
  };

  const saveItemToCart = (anID2) => {
    const newProductsInCart = productsInCart || [];

    if (checkIfInCart(anID2)) {
      const updatedProductsInCart = newProductsInCart.filter(
        (item) => item.id !== anID2
      );
      dispatch(removeFromCart(updatedProductsInCart));
    } else {
      const updatedProductsInCart = [
        ...newProductsInCart,
        { id: anID2, qty: 1 },
      ];
      dispatch(removeFromCart(updatedProductsInCart));
    }
  };

  // FOr Load More
  const addMore = () => {
    const newMore = more + 4;
    setMore(newMore);
  };

  const resetFilter = () => {
    setReset(true);
    setFap(false);
    setTimeout(() => {
      document.getElementById("age").value = "default";
      document.getElementById("price").value = "ASC";
      document.getElementById("release_date").value = "ASC";
      setAge("");
      setPrice("");
      setReleaseDate("");
      setFilterProducts(null);
      router.refresh();
      setReset(false);
    }, 1000);
  };

  if (productStatus == "succeeded") {
    const length = more;
    const slicedProducts = allProducts.data.slice(0, more);
    const slicedFilteredProducts =
      (filterProducts && filterProducts.slice(0, more)) || null;

    return (
      <>
        <div class="flex py-6 lg:pt-[51px] lg:pb-[40px] justify-between items-center">
          <div className="overflow-auto">
            <div className="catb-new flex gap-4">
              <button className="catb-active">All</button>
              <button>Biodiversity</button>
              <button>Pollution</button>
              <button>Recycling</button>
              <button>Global Warming</button>
              <button>Renewable Energy</button>
              <button>Wildlife Conservation</button>
              <button>Nature-based Solutions</button>
              <button>Waste Management</button>
              <button>Environmental Justice</button>
            </div>
          </div>
        </div>

        <div className="hidden lg:inline-block">
          <div class="gap-4 flex items-end">
            <div class="filter">
              <h6>Release date</h6>
              <select
                onChange={(e) => {
                  setReleaseDate(e.target.value);
                  handleFilter();
                }}
                name="release_date"
                id="release_date"
              >
                <option value="default">Newest</option>
                <option value="ASC">Last 30 days</option>
                <option value="ASC">Last 90 days</option>
                <option value="DESC">Oldest</option>
              </select>
            </div>
            <div class="filter">
              <h6>Price</h6>
              <select
                onChange={(e) => {
                  setPrice(e.target.value);
                  handleFilter();
                }}
                name="price"
                id="price"
              >
                <option value="default">Bestsellers</option>
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
                onChange={(e) => {
                  setAge(e.target.value);
                  handleFilter();
                }}
                name="age"
                id="age"
              >
                <option value="default" disabled selected>
                  Select an option
                </option>
                {ages &&
                  ages.map((age) => (
                    <option key={age.id} value={age.id}>{age.name} years old</option>
                  ))}
              </select>
            </div>
            <button
              onClick={resetFilter}
              disabled={reset}
              className="bg-[#009f00] shrink-0 self-end whitespace-nowrap ml-6 flex gap-[10px] text-white rounded-[12px] p-4"
            >
              <div class="flex shrink-0 flex-col self-center">
                <Image src={filterclose} alt="Reset Filter" class="w-4 h-4" />
              </div>
              <span className="text-sm leading-4 block font-medium">
                Reset filter
              </span>
            </button>
          </div>
        </div>

        <div className="lg:pt-[60px] grid gap-8 lg:gap-5 md:grid-cols-2 lg:grid-cols-4">
          {filterProducts 
            ? slicedFilteredProducts.map((product) => (
                <div key={product.id} className="flex flex-col gap-4">
                  <div
                    id="img-ccard"
                    className="relative inline-flex rounded-[30px] justify-center overflow-hidden max-h-[400px] lg:max-w-[325px] items-center flex-col"
                  >
                    <Image
                      className="w-full h-auto"
                      sizes="100vw"
                      placeholder="blur"
                      src={tp1}
                      quality={100}
                      alt="Top Pick One"
                    />
                    <Favorite productID={product.id} />
                    <div className="absolute bottom-6 right-6 flex gap-3">
                      {checkIfInCart(product.id) && (
                        <div className="rounded-full w-10 h-10 flex bg-white justify-center items-center">
                          <span class="text-[#009f00] leading-5 font-bold">
                            +{getQty(product.id)}
                          </span>
                        </div>
                      )}

                      <div className="rounded-full w-10 h-10 flex bg-white justify-center items-center">
                        <Image
                          className="w-6 h-6"
                          src={share}
                          alt="Share Icon"
                        />
                      </div>
                      <div
                        onClick={() => saveItemToCart(product.id)}
                        className="rounded-full cursor-pointer w-10 h-10 flex bg-white justify-center items-center"
                      >
                        {checkIfInCart(product.id) ? (
                          <Image
                            className="w-6 h-6"
                            src={shopcartActive}
                            alt="Shopping Cart Icon"
                          />
                        ) : (
                          <Image
                            className="w-6 h-6"
                            src={shopcart}
                            alt="Shopping Cart Icon"
                          />
                        )}
                      </div>
                    </div>
                  </div>
                  <div id="img-text">
                    <div className="flex gap-3 flex-col">
                      <div className="flex justify-between">
                        <div className="flex flex-col gap-2">
                          <Link
                            href={"/books/" + product.id}
                            className="text-[#121212] hover:underline millik leading-[15.47px]"
                          >
                            {product.name}
                          </Link>
                          <span className="leading-[16.94px] text-[#686868] text-sm font-medium ">
                            {product.author.name}
                          </span>
                        </div>

                        <span className="text-[#318736] font-semibold leading-[19.36px]">
                          ${product.price}
                        </span>
                      </div>
                      <p className="text-xs ctrr leading-5 text-[#121212]">
                        {product.description}
                      </p>
                      <div className="flex gap-[3px] items-center">
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
              ))
            : slicedProducts.map((product) => (
                <div key={product.id} className="flex flex-col gap-4">
                  <div
                    id="img-ccard"
                    className="relative inline-flex rounded-[30px] justify-center overflow-hidden max-h-[400px] lg:max-w-[325px] items-center flex-col"
                  >
                    <Image
                      className="w-full h-auto"
                      sizes="100vw"
                      placeholder="blur"
                      src={tp1}
                      quality={100}
                      alt="Top Pick One"
                    />
                    <Favorite productID={product.id} />
                    <div className="absolute bottom-6 right-6 flex gap-3">
                      {checkIfInCart(product.id) && (
                        <div className="rounded-full w-10 h-10 flex bg-white justify-center items-center">
                          <span class="text-[#009f00] leading-5 font-bold">
                            +{getQty(product.id)}
                          </span>
                        </div>
                      )}

                      <div className="rounded-full w-10 h-10 flex bg-white justify-center items-center">
                        <Image
                          className="w-6 h-6"
                          src={share}
                          alt="Share Icon"
                        />
                      </div>
                      <div
                        onClick={() => saveItemToCart(product.id)}
                        className="rounded-full cursor-pointer w-10 h-10 flex bg-white justify-center items-center"
                      >
                        {checkIfInCart(product.id) ? (
                          <Image
                            className="w-6 h-6"
                            src={shopcartActive}
                            alt="Shopping Cart Icon"
                          />
                        ) : (
                          <Image
                            className="w-6 h-6"
                            src={shopcart}
                            alt="Shopping Cart Icon"
                          />
                        )}
                      </div>
                    </div>
                  </div>
                  <div id="img-text">
                    <div className="flex gap-3 flex-col">
                      <div className="flex justify-between">
                        <div className="flex flex-col gap-2">
                          <Link
                            href={"/books/" + product.id}
                            className="text-[#121212] hover:underline millik leading-[15.47px]"
                          >
                            {product.name}
                          </Link>
                          <span className="leading-[16.94px] text-[#686868] text-sm font-medium ">
                            {product.author.name}
                          </span>
                        </div>

                        <span className="text-[#318736] font-semibold leading-[19.36px]">
                          ${product.price}
                        </span>
                      </div>
                      <p className="text-xs ctrr leading-5 text-[#121212]">
                        {product.description}
                      </p>
                      <div className="flex gap-[3px] items-center">
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
              ))}
            {(filterProducts && filterProducts.length < 1) && <div>No products found.</div>}
        </div>

        {(length < allProducts.data.length) ? (
          <div className="pt-[60px] flex justify-center items-center">
            <button
              onClick={() => addMore()}
              className="text-[#009F00] font-bold py-[14px] px-6 rounded-full border border-[#009F00]"
            >
              Load more
            </button>
          </div>
        ) : (
          <span></span>
        )}
      </>
    );
  }

  if (productStatus == "failed") {
    return <div className="pt-16">Please reload the page</div>;
  }

  if (productStatus == "pending") {
    return <div className="pt-16">loading ...</div>;
  }
}

export default DiscoverProductList;
