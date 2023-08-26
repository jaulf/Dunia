"use client";
import Image from "next/image";
import ratingsLarge from "@/public/images/ratingsLarge.png";
import pvavatar from "@/public/images/pv-avatar.png";
import { useSelector } from "react-redux";

export default function ListofReviews({ productID }) {
  const products = useSelector((state) => state.Products.products);
  const productStatus = useSelector((state) => state.Products.status);

  if (productStatus === "succeeded") {
    const yourProduct = products[0].data.filter(
      (product) => product.id === productID
    );
    const reviews = yourProduct[0].reviews;

    return (
      <>
        {reviews.length > 0 ? (
          <div
            id="cont-per-comment"
            class=" flex flex-col pb-[88px] gap-[30px]"
          >
            <div
              id="per-comment"
              className="flex bg-[#fafafa] rounded-[29px] flex-col gap-10 p-[26px] pr-[54px]"
            >
              <div className="flex flex-col gap-4">
                <div className="flex gap-[10px] shrink-0 items-center">
                  <Image
                    className="h-[35px] w-auto"
                    src={ratingsLarge}
                    alt="rating Icon"
                  />
                  <span className="font-semibold text-black text-2xl leading-[29px] tracking-[-0.48px]">
                    Great Read
                  </span>
                </div>
                <p className="w-full max-w-[1001px] text-black text-xl leading-8">
                  The sound is good and the battery life is also okay, but it
                  will be more cool if the size of the case can be reduce. I
                  wish the next edition case can be smaller than this,
                  everything else about it is cool
                </p>
              </div>
              <div className="flex gap-[10px] items-center">
                <Image
                  className="w-11 h-11"
                  src={pvavatar}
                  alt="Customer Avatar"
                />
                <span className="font-semibold text-black text-2xl leading-[29px] tracking-[-0.48px]">
                  Lemonade Me
                </span>
              </div>
            </div>
            <div
              id="per-comment"
              className="flex bg-[#fafafa] rounded-[29px] flex-col gap-10 p-[26px] pr-[54px]"
            >
              <div className="flex flex-col gap-4">
                <div className="flex gap-[10px] shrink-0 items-center">
                  <Image
                    className="h-[35px] w-auto"
                    src={ratingsLarge}
                    alt="rating Icon"
                  />
                  <span className="font-semibold text-black text-2xl leading-[29px] tracking-[-0.48px]">
                    Great Read
                  </span>
                </div>
                <p className="w-full max-w-[1001px] text-black text-xl leading-8">
                  The sound is good and the battery life is also okay, but it
                  will be more cool if the size of the case can be reduce. I
                  wish the next edition case can be smaller than this,
                  everything else about it is cool
                </p>
              </div>
              <div className="flex gap-[10px] items-center">
                <Image
                  className="w-11 h-11"
                  src={pvavatar}
                  alt="Customer Avatar"
                />
                <span className="font-semibold text-black text-2xl leading-[29px] tracking-[-0.48px]">
                  Lemonade Me
                </span>
              </div>
            </div>
            <div
              id="per-comment"
              className="flex bg-[#fafafa] rounded-[29px] flex-col gap-10 p-[26px] pr-[54px]"
            >
              <div className="flex flex-col gap-4">
                <div className="flex gap-[10px] shrink-0 items-center">
                  <Image
                    className="h-[35px] w-auto"
                    src={ratingsLarge}
                    alt="rating Icon"
                  />
                  <span className="font-semibold text-black text-2xl leading-[29px] tracking-[-0.48px]">
                    Great Read
                  </span>
                </div>
                <p className="w-full max-w-[1001px] text-black text-xl leading-8">
                  The sound is good and the battery life is also okay, but it
                  will be more cool if the size of the case can be reduce. I
                  wish the next edition case can be smaller than this,
                  everything else about it is cool
                </p>
              </div>
              <div className="flex gap-[10px] items-center">
                <Image
                  className="w-11 h-11"
                  src={pvavatar}
                  alt="Customer Avatar"
                />
                <span className="font-semibold text-black text-2xl leading-[29px] tracking-[-0.48px]">
                  Lemonade Me
                </span>
              </div>
            </div>
          </div>
        ) : (
          <div>No Reviews yet.</div>
        )}
      </>
    );
  }
}
