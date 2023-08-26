"use client";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import {
  fetchProducts,
  getAllProducts,
  getHomeAllProducts,
} from "@/components/redux/products/productSlice";

import Image from "next/image";
import tp1 from "@/public/images/tp1.png";
import hearte from "@/public/images/heart-empty.png";
import heartf from "@/public/images/heart-green.png";
import share from "@/public/images/share.png";
import shopcart from "@/public/images/shopping-cart.png";
import shopcartActive from "@/public/images/profile/cart-active.png";
import ratings from "@/public/images/ratings.png";
import tickGreen from "@/public/images/tick.png";
import { like, unlike } from "@/components/redux/products/LikedProductsSlice";
import {
  addToCart,
  removeFromCart,
} from "@/components/redux/products/cartProductsSlice";

export default function CartUpdateButton({ productID }) {
  const dispatch = useDispatch();
  const allProducts = useSelector(getHomeAllProducts);
  const productStatus = useSelector((state) => state.Products.status);
  const productsAllLiked = useSelector(
    (state) => state.likedProducts.likedProducts
  );

  const productsInCart = useSelector(
    (state) => state.cartProducts.cartProducts
  );

  const checkIfInCart = (anID2) => {
    return productsInCart.some((prod) => prod.id === anID2);
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

  return (
    <span>
      {checkIfInCart(productID) ? (
        <div className="px-10 py-[14px] flex gap-2 text-black leading-6 self-end text-xl font-medium bg-[#f2f2f2] rounded-full ">
          <Image
            className="w-6 h-6 shrink-0"
            src={tickGreen}
            alt="green tick"
          />
          <span className="text-[#009F00]">Added</span>
        </div>
      ) : (
        <div
          onClick={() => saveItemToCart(productID)}
          className=" cursor-pointer px-10 py-[14px] text-black leading-6 self-end text-xl font-medium bg-[#f2f2f2] rounded-full "
        >
          Add to cart
        </div>
      )}
    </span>
  );
}
