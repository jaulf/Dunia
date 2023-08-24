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
import heartf from "@/public/images/heart-full.png";
import ratings from "@/public/images/ratings.png";

export default function Favorite({ productID }) {
  const dispatch = useDispatch();
  const allProducts = useSelector(getHomeAllProducts);
  const productStatus = useSelector((state) => state.Products.status);
  const [allProductsLiked, setAllProductsLiked] = useState(null);

  useEffect(() => {
    const likedProducts =
      JSON.parse(localStorage.getItem("likedProducts")) || [];
    setAllProductsLiked(likedProducts);
  });

  const checkIfLiked = (anID) => {
    return allProductsLiked.includes(anID);
  };

  const saveItemHandler = (anID) => {
    const likedProducts =
      JSON.parse(localStorage.getItem("likedProducts")) || [];

    if (checkIfLiked(anID)) {
      const updatedLikedProducts = likedProducts.filter((id) => id !== anID);
      localStorage.setItem(
        "likedProducts",
        JSON.stringify(updatedLikedProducts)
      );
    } else {
      const updatedLikedProducts = [...likedProducts, anID];
      localStorage.setItem(
        "likedProducts",
        JSON.stringify(updatedLikedProducts)
      );
    }
  };

  if (productStatus == "succeeded") {
    return (
      <div
        onClick={() => saveItemHandler(productID)}
        className="absolute cursor-pointer top-6 right-6 rounded-full w-10 h-10 flex bg-white justify-center items-center"
      >
        {checkIfLiked(productID) ? (
          <Image className="w-6 h-6" src={heartf} alt="Heart Icon" />
        ) : (
          <Image className="w-6 h-6" src={hearte} alt="Heart Icon" />
        )}
      </div>
    );
  }
}
