"use client";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchProducts,
  getAllProducts,
  getHomeAllProducts,
} from "../redux/products/productSlice";
import { like, unlike } from "@/components/redux/products/LikedProductsSlice";
import { addToCart, removeFromCart } from "../redux/products/cartProductsSlice";
import Image from "next/image";
import tp1 from "@/public/images/tp1.png";
import hearte from "@/public/images/heart-empty.png";
import heartf from "@/public/images/heart-green.png";
import share from "@/public/images/share.png";
import shopcart from "@/public/images/shopping-cart.png";
import shopcartActive from "@/public/images/profile/cart-active.png";

export default function Favorite({productID}) {
  const dispatch = useDispatch();
  const productsAllLiked = useSelector(
    (state) => state.likedProducts.likedProducts
  );

  const checkIfLiked = (anID) => {
    return productsAllLiked.includes(anID);
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
