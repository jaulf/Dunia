"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
axios.defaults.withCredentials = true;

// Image Imports
import sidebarImage from "@/public/images/onboarding.png";
import fb from "@/public/images/fb.png";
import google from "@/public/images/google.png";
import mail from "@/public/images/mail.png";
import mail2 from "@/public/images/mail2.png";
import arrowleft from "@/public/images/arrow-left.png";
import passcode from "@/public/images/passcode.png";
import back from "@/public/images/back.png";
import user from "@/public/images/user.png";
import errorCircle from "@/public/images/error-circle.png";
import successCircle from "@/public/images/success-circle.png";
import close from "@/public/images/x.png";

export default function Home() {
  const router = useRouter();

  // useState
  const [fname, setFname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorM, setErrorM] = useState("");
  const [successM, setSuccessM] = useState("");

  // URL
  const url = process.env.NEXT_PUBLIC_BASE_URL + "/api/v1/register";

  // Header Definition
  const config = {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };

  // Body Definition
  const body = {
    name: fname,
    email,
    password,
  };

  // Submit Handler
  const submitHandler = async (e) => {
    e.preventDefault();

    axios
      .post(url, body, config)
      .then((response) => {
        localStorage.setItem("User", response.data)
        setErrorM("");
        setSuccessM("Account created. You will be redirected shortly.");
        setTimeout(() => {
          router.push("/profile");
        }, 3000);
      })
      .catch((e) => {
        setSuccessM("");
        setErrorM(e.response.data.message);
      });
  };

  const closeErrorModal = () => {
    const popup = document.getElementById("error");
    if (popup.style.display == "none") {
      popup.style.display = "flex";
    } else {
      popup.style.display = "none";
    }
  };

  const closeSuccessModal = () => {
    const popup = document.getElementById("success");
    if (popup.style.display == "none") {
      popup.style.display = "flex";
    } else {
      popup.style.display = "none";
    }
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
            <div onClick={closeErrorModal} className="grid grid-cols-1">
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
            <div onClick={closeSuccessModal} className="grid grid-cols-1">
              <Image className="w-5 h-5" src={close} alt="close" />
            </div>
          </div>
        )}
      </div>

      <header className="header-grdi">
        <div
          id="Image-sidebar"
          className="sticky top-0 max-w-[770px] h-[100vh]"
        >
          <Image
            quality={100}
            src={sidebarImage}
            alt="Hero Section Image"
            placeholder="blur"
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
              objectPosition: "right bottom",
            }}
          />
        </div>

        <div id="text-sidebar" className="flex w-full flex-col items-center">
          <Link
            id="baxk"
            href="/onboarding/signup/"
            className="grid gr2auto items-center self-start pl-14 pt-16"
          >
            <Image
              quality={100}
              className="w-8 h-8"
              src={back}
              alt="back arrow"
            />
          </Link>

          <div className="px-[140px] pt-8 flex flex-col justify-center items-center">
            <h2 className="millik text-[64px] leading-[62px] tracking-[-0.64px]">
              dunia
            </h2>

            <div className="flex flex-col justify-center items-center gap-8 pt-16">
              <h2 className="text-[28px] font-medium leading-8 text-center">
                Create an account
              </h2>

              <form
                onSubmit={submitHandler}
                className="w-[389px] flex justify-center items-center flex-col gap-5"
              >
                <div className="flex whitespace-nowrap rounded-full gap-[10px] items-center w-full max-w-[389px] px-[35px] py-5 border-[1.5px] border-[#d9d9d9]">
                  <Image
                    quality={100}
                    className="w-6 h-6"
                    src={user}
                    alt="User Icon"
                  />
                  <input
                    id="fname"
                    className="outline-none w-full"
                    type="text"
                    placeholder="Full Name"
                    onChange={(e) => setFname(e.target.value)}
                    required
                  />
                </div>
                <div className="flex whitespace-nowrap rounded-full gap-[10px] items-center w-full max-w-[389px] px-[35px] py-5 border-[1.5px] border-[#d9d9d9]">
                  <Image
                    quality={100}
                    className="w-6 h-6"
                    src={mail2}
                    alt="Email Icon"
                  />
                  <input
                    id="email"
                    className="outline-none w-full"
                    type="email"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="flex whitespace-nowrap rounded-full gap-[10px] items-center w-full max-w-[389px] px-[35px] py-5 border-[1.5px] border-[#d9d9d9]">
                  <Image
                    quality={100}
                    className="w-6 h-6"
                    src={passcode}
                    alt="Password Icon"
                  />
                  <input
                    id="password"
                    className="outline-none w-full"
                    type="Password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="w-full pt-5">
                  <button className="bg-[#F2665B] rounded-full text-white text-xl font-semibold py-5 w-full">
                    Sign Up
                  </button>
                </div>
              </form>

              <div className="font-medium text-[#666] flex flex-col justify-center items-center gap-10">
                <div className="text-sm leading-6 w-full lg:max-w-[300px] text-center">
                  By continuing, you agree to our company’s{" "}
                  <span className="text-[#F2665B] font-medium">
                    Terms of Use, Conditions
                  </span>{" "}
                  and{" "}
                  <span className="text-[#F2665B] font-medium">
                    Privacy policy
                  </span>
                </div>

                <div className="font-medium leading-5 text-center">
                  Already have an account?{" "}
                  <Link
                    className="text-[#FF3333] font-semibold"
                    href="/onboarding/login"
                  >
                    Login
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
