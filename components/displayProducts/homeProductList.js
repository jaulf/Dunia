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
import { like, unlike } from "@/components/redux/products/LikedProductsSlice";
import Link from "next/link";

function HomeProductList() {
  const dispatch = useDispatch();
  const allProducts = useSelector(getHomeAllProducts);
  const productStatus = useSelector((state) => state.Products.status);
  const productsAllLiked = useSelector(state => state.likedProducts.likedProducts);

  const checkIfLiked = (anID) => {
    return productsAllLiked.includes(anID);
  };

  const saveItemHandler = async (anID) => {
    const likedProducts = productsAllLiked || [];

    if (checkIfLiked(anID)) {
      const updatedLikedProducts = likedProducts.filter((id) => id !== anID);
      dispatch(unlike(updatedLikedProducts))
    } else {
      const updatedLikedProducts = [...likedProducts, anID];
      dispatch(like(updatedLikedProducts))
    }
  };

  if (productStatus == "succeeded") {
    const firstFour = allProducts.data.slice(0, 4);

    return (
      <div className="grid gap-5 grid-cols-4">
        {firstFour.map((product) => (
          <div key={product.id} className="flex flex-col gap-4">
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
            </div>
            <div id="img-text">
              <div className="flex gap-3 flex-col">
                <div className="flex justify-between">
                  <div className="flex flex-col gap-2">
                    <Link href={'/books/' + product.id} className="text-[#121212] hover:underline millik leading-[15.47px]">
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
    );
  }

  if (productStatus == "failed") {
    return <div>Please reload the page</div>;
  }

  if (productStatus == "pending") {
    return <div>loading ...</div>;
  }
}

export default HomeProductList;
