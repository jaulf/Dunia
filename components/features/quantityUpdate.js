"use client";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getHomeAllProducts } from "@/components/redux/products/productSlice";

import Image from "next/image";
import chevleft from "@/public/images/pr-left.png";
import chevright from "@/public/images/pr-right.png";
import tp1 from "@/public/images/tp1.png";
import hearte from "@/public/images/heart-empty.png";
import heartf from "@/public/images/heart-green.png";
import share from "@/public/images/share.png";
import shopcart from "@/public/images/shopping-cart.png";
import shopcartActive from "@/public/images/profile/cart-active.png";
import ratings from "@/public/images/ratings.png";
import { like, unlike } from "@/components/redux/products/LikedProductsSlice";
import {
  removeFromCart,
  quantityUp,
} from "@/components/redux/products/cartProductsSlice";

export default function QuantityUpdate({ productID }) {
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

  const getQty = (anID) => {
    if (productStatus == "succeeded") {
      const newProductsInCart = productsInCart || [];
      const updatedProductsInCart = newProductsInCart.filter(
        (item) => item.id === anID
      );
      return updatedProductsInCart[0].qty;
    }
  };

  const reduceQty = (anID2) => {
    const newProductsInCart = productsInCart || [];

    if (checkIfInCart(anID2)) {
      newProductsInCart.map((product) => {
        if (product.id === anID2) {
          // If product quantity is equals to 1
          if (product.qty === 1) {
            const updatedProductsInCart = newProductsInCart.filter(
              (item) => item.id !== anID2
            );
            return dispatch(removeFromCart(updatedProductsInCart));
          }
          // If product quantity is greater than 1
          if (product.qty > 1) {
            const newArr = newProductsInCart.filter((x) => x.id !== anID2);
            const updatedProductsInCart = [
              ...newArr,
              { id: anID2, qty: product.qty - 1 },
            ];
            return dispatch(quantityUp(updatedProductsInCart));
          }
        }
      });
    }
  };

  const increaseQty = (anID2) => {
    const newProductsInCart = productsInCart || [];

    if (checkIfInCart(anID2)) {
      newProductsInCart.map((product) => {
        if (product.id === anID2) {
          const newArr = newProductsInCart.filter((x) => x.id !== anID2);
          const updatedProductsInCart = [
            ...newArr,
            { id: anID2, qty: product.qty + 1 },
          ];
          return dispatch(quantityUp(updatedProductsInCart));
        }
      });
    } else {
      const updatedProductsInCart = [
        ...newProductsInCart,
        { id: anID2, qty: 1 },
      ];
      dispatch(removeFromCart(updatedProductsInCart));
    }
  };

  return (
    <div className="flex gap-[30px] py-[12px] self-start rounded-full bg-[#F2F2F2] px-[10px] items-center">
      <Image
        onClick={() => reduceQty(productID)}
        className="w-6 cursor-pointer h-6"
        src={chevright}
        alt="Chevron Right"
      />
      <span className="text-xl font-bold text-black leading-6">
        {checkIfInCart(productID) ? getQty(productID) : 0}
      </span>
      <Image
        onClick={() => increaseQty(productID)}
        className="w-6 cursor-pointer h-6"
        src={chevleft}
        alt="Chevron Left"
      />
    </div>
  );
}
