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
import { like, unlike } from "@/components/redux/products/LikedProductsSlice";
import { addToCart, removeFromCart } from "../redux/products/cartProductsSlice";
import Link from "next/link";
import Favorite from "../features/favorite";

function ShopProductList() {
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
    const newMore = more + 3;
    setMore(newMore);
  };

  // For Load All
  const addAll = () => {
    const newMore = allProducts.data.length + 1;
    setMore(newMore);
  };

  if (productStatus == "succeeded") {
    const length = more;
    const slicedProducts = allProducts.data.slice(0, more);

    return (
      <>
        <div className="flex justify-between items-center">
          <h3 className="millik text-[20px] lg:text-[32px] text-black lg:leading-[30.94px]">
            Discover what you need ⚡
          </h3>
          {length < allProducts.data.length ? (
            <div
              onClick={() => addAll()}
              className="hidden lg:block rounded-full cursor-pointer font-bold py-[14px] px-6 leading-[19.36px] text-center text-[#009f00] border border-[#009f00]"
            >
              See all
            </div>
          ) : (
            <span></span>
          )}
        </div>

        <div className="grid gap-8 lg:gap-5 md:grid-cols-2 lg:grid-cols-4">
          {slicedProducts.map((product) => (
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
                    <Image className="w-6 h-6" src={share} alt="Share Icon" />
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
        </div>

        {length < allProducts.data.length ? (
          <div className="inline-flex lg:hidden justify-center pt-4">
            <div
              onClick={() => addAll()}
              className="lg:hidden block rounded-full font-bold py-[14px] px-6 leading-[19.36px] text-center text-[#009f00] border border-[#009f00]"
              href="/discover"
            >
              See all
            </div>
          </div>
        ) : (
          <span></span>
        )}
      </>
    );
  }

  if (productStatus == "failed") {
    return (
      <div className="flex flex-col gap-8">
        <h3 className="millik text-[20px] lg:text-[32px] text-black lg:leading-[30.94px]">
          Discover what you need ⚡
        </h3>
        <div>Please reload the page</div>
      </div>
    );
  }

  if (productStatus == "pending") {
    return (
      <div className="flex flex-col gap-8">
        <h3 className="millik text-[20px] lg:text-[32px] text-black lg:leading-[30.94px]">
          Discover what you need ⚡
        </h3>
        <div>loading ...</div>
      </div>
    );
  }
}

export default ShopProductList;
