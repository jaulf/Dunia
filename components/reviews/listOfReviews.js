"use client";
import Image from "next/image";
import { useSelector } from "react-redux";
import ratingsLarge from "@/public/images/ratingsLarge.png";
import pvavatar from "@/public/images/pv-avatar.png";
import starActive from "@/public/images/cstar-active.png";
import starInactive from "@/public/images/cstar-inactive.png";

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
            class=" flex flex-col pb-20 lg:pb-[88px] gap-4 lg:gap-[30px]"
          >
            {reviews.map((review) => (
              <div
                key={review.id}
                id="per-comment"
                className="flex bg-[#fafafa] rounded-[29px] flex-col gap-10 p-[26px] pr-4 lg:pr-[54px]"
              >
                <div className="flex flex-col gap-6 lg:gap-4">
                  <div className="flex gap-[10px] shrink-0 items-center">
                    <div className="flex gap-1 lg:gap-2">
                      <div className="inline-flex justify-center items-center">
                        {review.rating > 0 ? (
                          <Image
                            className="lg:h-[28px] lg:w-[28px] w-6 h-6 grow-0 shrink-0"
                            src={starActive}
                            alt=""
                          />
                        ) : (
                          <Image
                            className="lg:h-[28px] lg:w-[28px] w-6 h-6 grow-0 shrink-0"
                            src={starInactive}
                            alt=""
                          />
                        )}
                      </div>
                      <div className="inline-flex justify-center items-center">
                        {review.rating > 1 ? (
                          <Image
                            className="lg:h-[28px] lg:w-[28px] w-6 h-6 grow-0 shrink-0"
                            src={starActive}
                            alt=""
                          />
                        ) : (
                          <Image
                            className="lg:h-[28px] lg:w-[28px] w-6 h-6 grow-0 shrink-0"
                            src={starInactive}
                            alt=""
                          />
                        )}
                      </div>
                      <div className="inline-flex justify-center items-center">
                        {review.rating > 2 ? (
                          <Image
                            className="lg:h-[28px] lg:w-[28px] w-6 h-6 grow-0 shrink-0"
                            src={starActive}
                            alt=""
                          />
                        ) : (
                          <Image
                            className="lg:h-[28px] lg:w-[28px] w-6 h-6 grow-0 shrink-0"
                            src={starInactive}
                            alt=""
                          />
                        )}
                      </div>
                      <div className="inline-flex justify-center items-center">
                        {review.rating > 3 ? (
                          <Image
                            className="lg:h-[28px] lg:w-[28px] w-6 h-6 grow-0 shrink-0"
                            src={starActive}
                            alt=""
                          />
                        ) : (
                          <Image
                            className="lg:h-[28px] lg:w-[28px] w-6 h-6 grow-0 shrink-0"
                            src={starInactive}
                            alt=""
                          />
                        )}
                      </div>
                      <div className="inline-flex justify-center items-center">
                        {review.rating > 4 ? (
                          <Image
                            className="lg:h-[28px] lg:w-[28px] w-6 h-6 grow-0 shrink-0"
                            src={starActive}
                            alt=""
                          />
                        ) : (
                          <Image
                            className="lg:h-[28px] lg:w-[28px] w-6 h-6 grow-0 shrink-0"
                            src={starInactive}
                            alt=""
                          />
                        )}
                      </div>
                    </div>
                    <span className="font-semibold text-black text-[16px] tracking-[-0.32px] lg:text-2xl lg:leading-[29px] lg:tracking-[-0.48px]">
                      {review.summary}
                    </span>
                  </div>
                  <p className="w-full max-w-[1001px] text-black text-[14px] leading-[22px] lg:text-xl lg:leading-8">
                    {review.comment}
                  </p>
                </div>
                <div className="flex gap-[10px] items-center">
                  <Image
                    className="lg:w-11 w-8 h-8 lg:h-11"
                    src={pvavatar}
                    alt="Customer Avatar"
                  />
                  <span className="font-semibold text-black tracking-[-0.32px] lg:text-2xl lg:leading-[29px] lg:tracking-[-0.48px]">
                    {review.user}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div>No Reviews yet.</div>
        )}
      </>
    );
  }

  if (productStatus === "pending") {
    return (
      <>
        <div className="pb-20 lg:pb-[88px]">loading ...</div>
      </>
    );
  }
}
