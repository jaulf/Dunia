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

function ShopProductList() {
  const dispatch = useDispatch();
  const allProducts = useSelector(getHomeAllProducts);
  const productStatus = useSelector((state) => state.Products.status);
  const [allProductsLiked, setAllProductsLiked] = useState(null);
  const [allProductsInCart, setAllProductsInCart] = useState(null);

  //   Fetch All products
  useEffect(() => {
    if (productStatus == "idle") {
      dispatch(fetchProducts());
    }
  }, [productStatus, dispatch]);

  //   Get all Products In CArt and Liked products
  useEffect(() => {
    const likedProducts =
      JSON.parse(localStorage.getItem("likedProducts")) || [];
    const cartProducts = JSON.parse(localStorage.getItem("cartProducts")) || [];
    setAllProductsLiked(likedProducts);
    setAllProductsInCart(cartProducts);
  }, []);

  // Check if a specific product is liked
  const checkIfLiked = (anID) => {
    return allProductsLiked.includes(anID);
  };

  //   check if a specific product is in cart
  const checkIfInCart = (anID2) => {
    return allProductsInCart.some((prod) => prod.id === anID2);
  };

  const saveItemToCart = (anID2) => {
    const productsInCart = allProductsInCart || [];

    if (checkIfInCart(anID2)) {
      const updatedProductsInCart = productsInCart.filter(
        (item) => item.id !== anID2
      );
      setAllProductsInCart(updatedProductsInCart);
      localStorage.setItem(
        "cartProducts",
        JSON.stringify(updatedProductsInCart)
      );
    } else {
      const updatedProductsInCart = [...productsInCart, { id: anID2, qty: 1 }];
      setAllProductsInCart(updatedProductsInCart);
      localStorage.setItem(
        "cartProducts",
        JSON.stringify(updatedProductsInCart)
      );
    }
  };

  //   To like and unlike a product

  const saveItemHandler = async (anID) => {
    const likedProducts = allProductsLiked || [];

    if (checkIfLiked(anID)) {
      const updatedLikedProducts = likedProducts.filter((id) => id !== anID);
      setAllProductsLiked(updatedLikedProducts);
      localStorage.setItem(
        "likedProducts",
        JSON.stringify(updatedLikedProducts)
      );
    } else {
      const updatedLikedProducts = [...likedProducts, anID];
      setAllProductsLiked(updatedLikedProducts);
      localStorage.setItem(
        "likedProducts",
        JSON.stringify(updatedLikedProducts)
      );
    }
  };

  if (productStatus == "succeeded") {
    return (
      <div className="grid gap-5 grid-cols-4">
        {allProducts.data.map((product) => (
          <div className="flex flex-col gap-4">
            <div
              id="img-ccard"
              className="relative inline-flex justify-center max-h-[400px] max-w-[325px] items-center flex-col"
            >
              <Image
                className="rounded-[30px] w-full h-auto"
                sizes="100vw"
                placeholder="blur"
                src={tp1}
                quality={100}
                alt="Top Pick One"
              />
              <div
                onClick={() => saveItemHandler(product.id)}
                className="absolute cursor-pointer top-6 right-6 rounded-full w-10 h-10 flex bg-white justify-center items-center"
              >
                {checkIfLiked(product.id) ? (
                  <Image className="w-6 h-6" src={heartf} alt="Heart Icon" />
                ) : (
                  <Image className="w-6 h-6" src={hearte} alt="Heart Icon" />
                )}
              </div>
              <div className="absolute bottom-6 right-6 flex gap-3">
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
                    <span className="text-[#121212] millik leading-[15.47px]">
                      The Uninhabitable Earth
                    </span>
                    <span className="leading-[16.94px] text-[#686868] text-sm font-medium ">
                      David Wallace-Wells
                    </span>
                  </div>

                  <span className="text-[#318736] font-semibold leading-[19.36px]">
                    $50
                  </span>
                </div>
                <p className="text-xs leading-5 text-[#121212]">
                  As climate change grips the planet, here is Earth. Org&apos;s
                  selection of must-read books on climate change and
                  sustainability to enlighten you.
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
    );
  }

  if (productStatus == "failed") {
    return <div>Please reload the page</div>;
  }

  if (productStatus == "idle") {
    return <div>loading ...</div>;
  }
}

export default ShopProductList;
