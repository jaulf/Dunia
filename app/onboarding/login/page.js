"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

// Image Imports
import sidebarImage from "../../../public/images/onboarding.png";
import fb from "../../../public/images/fb.png";
import google from "../../../public/images/google.png";
import mail from "../../../public/images/mail.png";
import errorCircle from "@/public/images/error-circle.png";
import successCircle from "@/public/images/success-circle.png";
import close from "@/public/images/x.png";
import GoogleAuth from "@/components/googleAuth";
import FacebookAuth from "@/components/facebookAuth";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem('user-auth')) {
      router.push('/profile')
    }
  })

  // useState
  const [errorM, setErrorM] = useState("");
  const [successM, setSuccessM] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const closeErrorModal = () => {
    setErrorM("");
  };
  const closeSuccessModal = () => {
    setSuccessM("");
  };

  return (
    <>
    <div
      id="State-Manager"
      className="fixed z-[99999] max-w-[348px] lg:max-w-none top-16 right-5 lg:right-14 flex flex-col gap-4"
    >
      {errorM && (
        <div
          id="error"
          className="border-l-4 bg-[#FDEFED] border-[#EA5945] p-4 shadow-md flex flex-row gap-14 items-center rounded-[4px] overflow-hidden"
        >
          <div className="flex flex-row gap-2 lg:gap-4 items-center">
            <div className="w-8 h-8 hidden lg:grid grid-cols-1 shrink-0">
              <Image
                className="w-full h-auto shrink-0"
                src={errorCircle}
                alt="Error"
              />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold text-[#121212]">Error</h3>
              <p className="text-sm leading-[150%] lg:leading-[119%] text-[#4d4d4d]">
                {errorM}
              </p>
            </div>
          </div>
          <div onClick={closeErrorModal} className="grid grid-cols-1 shrink-0 ">
            <Image className="w-5 h-5" src={close} alt="close" />
          </div>
        </div>
      )}
      {successM && (
        <div
          id="success"
          className="border-l-4 bg-[#EDFDF9] border-[#13B288] p-4 shadow-md flex flex-row gap-14 items-center rounded-[4px] overflow-hidden"
        >
          <div className="flex flex-row gap-2 lg:gap-4 items-center">
            <div className="w-8 h-8 hidden lg:grid grid-cols-1">
              <Image
                className="w-full h-auto"
                src={successCircle}
                alt="Success"
              />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold text-[#121212]">Success</h3>
              <p className=" text-sm leading-[150%] lg:leading-[119%] text-[#4d4d4d]">
                {successM}
              </p>
            </div>
          </div>
          <div onClick={closeSuccessModal} className="grid grid-cols-1 shrink-0">
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
            src={sidebarImage}
            alt="Hero Section Image"
            placeholder="blur"
            quality={100}
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
              objectPosition: "right bottom",
            }}
          />
        </div>
 
        <div
          id="text-sidebar"
          className="lg:px-[140px] px-5 pt-20 lg:pt-24 flex flex-col w-full items-center"
        >
          <h2 className="millik text-[64px] leading-[62px] tracking-[-0.64px]">
            dunia
          </h2>

          <div className="w-full flex flex-col justify-center items-center gap-10 pt-16 lg:pt-[100px]">
            <h2 className="text-[28px] font-medium leading-8 text-center">
              Log in to your account
            </h2>

            <div className="w-full lg:w-[389px] flex justify-center items-center flex-col gap-5">
              <FacebookAuth />
              <GoogleAuth />
              <Link
                href="/onboarding/login/email"
                className="flex justify-center whitespace-nowrap rounded-full gap-[5px] items-center w-full max-w-[389px] px-[61px] py-5 border-[1.5px] border-[#d9d9d9]"
              >
                <Image className="w-4 h-4" src={mail} alt="Mail Icon" />
                <span className="font-medium leading-[18px]">
                  Continue with email
                </span>
              </Link>
            </div>

            <div className="font-medium text-[#666] flex flex-col justify-center items-center gap-10">
              <div className=" leading-5 text-center">
                Don’t you have an account?{" "}
                <Link
                  className="text-[#FF3333] font-semibold"
                  href="/onboarding/signup"
                >
                  Sign up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
