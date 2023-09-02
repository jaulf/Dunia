"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

import zeroratings from "@/public/images/0ratings.png";
import starActive from "@/public/images/cstar-active.png";
import starInactive from "@/public/images/cstar-inactive.png";
import errorCircle from "@/public/images/error-circle.png";
import successCircle from "@/public/images/success-circle.png";
import close from "@/public/images/x.png";

export default function SubmitAReview({ productID }) {
  const router = useRouter();
  const [name, setName] = useState(null);
  const [summary, setSummary] = useState(null);
  const [review, setReview] = useState(null);
  const [rating, setRating] = useState(0);
  const [bearerToken, setBearerToken] = useState(null);
  const [errorM, setErrorM] = useState("");
  const [successM, setSuccessM] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("user-auth")) {
      const user = JSON.parse(localStorage.getItem("user-auth"));
      const name = user.data.name;
      setName(name);
      setBearerToken(user.token);
    }
  }, []);

  const closeErrorModal = () => {
    setErrorM("");
  };

  const closeSuccessModal = () => {
    setSuccessM("");
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const url =
      process.env.NEXT_PUBLIC_BASE_URL + "/products/" + productID + "/reviews";

    const config = {
      headers: {
        Authorization: `Bearer ${bearerToken}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };

    let body = {
      rating,
      summary,
      comment: review,
      name,
    };

    if (rating == 0) {
      const doIt = () => {
        setErrorM("You forgot to fill the rating from the 5 rating icons.");
        setSuccessM("");
      };
      return doIt();
    }

    try {
      setIsSubmitting(true);
      axios
        .post(url, body, config)
        .then((response) => {
          setSuccessM("Your review has been submitted sucessfully.");
          setErrorM("");
          setTimeout(() => {
            setSuccessM("");
            setErrorM("");
            router.refresh();
          }, 3000);
        })
        .catch((e) => {
          setIsSubmitting(false);
          setErrorM("Something went wrong");
        });
    } catch (error) {}
  };

  return (
    <>
      <div
        id="State-Manager"
        className="fixed z-[99999] top-16 right-14 flex flex-col gap-4"
      >
        {errorM && (
          <div
            id="error"
            className="border-l-4 bg-[#FDEFED] border-[#EA5945] p-4 shadow-md flex flex-row gap-14 items-center rounded-[4px] overflow-hidden"
          >
            <div className="flex flex-row gap-4 items-center">
              <div className="w-8 h-8 grid grid-cols-1">
                <Image
                  className="w-full h-auto"
                  src={errorCircle}
                  alt="Error"
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-semibold text-[#121212]">Error</h3>
                <p className=" text-sm leading-[119%] text-[#4d4d4d]">
                  {errorM}
                </p>
              </div>
            </div>
            <div
              onClick={closeErrorModal}
              className="grid grid-cols-1 shrink-0"
            >
              <Image className="w-5 h-5" src={close} alt="close" />
            </div>
          </div>
        )}
        {successM && (
          <div
            id="success"
            className="border-l-4 bg-[#EDFDF9] border-[#13B288] p-4 shadow-md flex flex-row gap-14 items-center rounded-[4px] overflow-hidden"
          >
            <div className="flex flex-row gap-4 items-center">
              <div className="w-8 h-8 grid grid-cols-1">
                <Image
                  className="w-full h-auto"
                  src={successCircle}
                  alt="Success"
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-semibold text-[#121212]">Success</h3>
                <p className=" text-sm leading-[119%] text-[#4d4d4d]">
                  {successM}
                </p>
              </div>
            </div>
            <div
              onClick={closeSuccessModal}
              className="grid grid-cols-1 shrink-0"
            >
              <Image className="w-5 h-5" src={close} alt="close" />
            </div>
          </div>
        )}
      </div>
      <section
        id="comment-reviews"
        className="flex flex-col pt-10 pb-[122px] px-[120px] gap-24"
      >
        <div>
          <Link
            href="#submit"
            className="font-medium text-[#009F00] underline text-2xl leading-[29px] tracking-[-0.48px]"
          >
            Leave a review
          </Link>
        </div>

        {name ? (
          <form onSubmit={submitHandler} id="submit">
            <div className="flex gap-4 shrink-0 items-center">
              <span className="font-semibold text-black text-2xl leading-[29px] tracking-[-0.48px]">
                Rate the Book
              </span>
              <div className="flex gap-2">
                <div
                  onClick={(e) => setRating(1)}
                  className=" inline-flex justify-center items-center cursor-pointer"
                >
                  {rating > 0 ? (
                    <Image
                      className="h-[28px] w-[28px] grow-0 shrink-0"
                      src={starActive}
                      alt=""
                    />
                  ) : (
                    <Image
                      className="h-[28px] w-[28px] grow-0 shrink-0"
                      src={starInactive}
                      alt=""
                    />
                  )}
                </div>
                <div
                  onClick={(e) => setRating(2)}
                  className=" inline-flex justify-center items-center cursor-pointer"
                >
                  {rating > 1 ? (
                    <Image
                      className="h-[28px] w-[28px] grow-0 shrink-0"
                      src={starActive}
                      alt=""
                    />
                  ) : (
                    <Image
                      className="h-[28px] w-[28px] grow-0 shrink-0"
                      src={starInactive}
                      alt=""
                    />
                  )}
                </div>
                <div
                  onClick={(e) => setRating(3)}
                  className=" inline-flex justify-center items-center cursor-pointer"
                >
                  {rating > 2 ? (
                    <Image
                      className="h-[28px] w-[28px] grow-0 shrink-0"
                      src={starActive}
                      alt=""
                    />
                  ) : (
                    <Image
                      className="h-[28px] w-[28px] grow-0 shrink-0"
                      src={starInactive}
                      alt=""
                    />
                  )}
                </div>
                <div
                  onClick={(e) => setRating(4)}
                  className=" inline-flex justify-center items-center cursor-pointer"
                >
                  {rating > 3 ? (
                    <Image
                      className="h-[28px] w-[28px] grow-0 shrink-0"
                      src={starActive}
                      alt=""
                    />
                  ) : (
                    <Image
                      className="h-[28px] w-[28px] grow-0 shrink-0"
                      src={starInactive}
                      alt=""
                    />
                  )}
                </div>
                <div
                  onClick={(e) => setRating(5)}
                  className=" inline-flex justify-center items-center cursor-pointer"
                >
                  {rating > 4 ? (
                    <Image
                      className="h-[28px] w-[28px] grow-0 shrink-0"
                      src={starActive}
                      alt=""
                    />
                  ) : (
                    <Image
                      className="h-[28px] w-[28px] grow-0 shrink-0"
                      src={starInactive}
                      alt=""
                    />
                  )}
                </div>
              </div>
            </div>

            <div class="flex flex-col gap-5 pt-[34px] pb-[50px]">
              <div class="w-full flex gap-5">
                <input
                  value={name || "Name or nickname"}
                  disabled
                  class="comment-input"
                  type="text"
                />
                <input
                  onChange={(e) => setSummary(e.target.value)}
                  value={summary}
                  class="comment-input"
                  type="text"
                  placeholder="Summary"
                  required
                />
              </div>
              <div>
                <textarea
                  onChange={(e) => setReview(e.target.value)}
                  value={review}
                  className="comment-textarea"
                  placeholder="Review"
                  required
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                class="px-10 py-[14px] text-white leading-6 self-end text-xl font-bold rounded-full bg-[#009F00]"
              >
                {isSubmitting ? "loading..." : "Submit review"}
              </button>
            </div>
          </form>
        ) : (
          <div className="flex gap-6 flex-col">
            <span className="font-semibold text-black text-2xl leading-[29px] tracking-[-0.48px]">
              Rate the Book
            </span>
            You need to be signed in to drop a review.
          </div>
        )}
      </section>
    </>
  );
}
