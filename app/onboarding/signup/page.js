"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

// Image Imports
import sidebarImage from "../../../public/images/onboarding.png";
import fb from "../../../public/images/fb.png";
import google from "../../../public/images/google.png";
import mail from "../../../public/images/mail.png";
import GoogleAuth from "@/components/googleAuth";
import FacebookAuth from "@/components/facebookAuth";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem('user-auth')) {
      router.push('/profile')
    }
  })

  return ( 
    <>
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
          className="px-[140px] pt-24 pb-8 flex flex-col justify-center w-full items-center"
        >
          <div className="flex flex-col w-full items-center">
            <h2 className="millik text-[64px] leading-[62px] tracking-[-0.64px]">
              dunia
            </h2>

            <div className=" flex flex-col justify-center items-center gap-8 pt-16">
              <h2 className="text-[28px] font-medium leading-8 text-center">
                Create an account
              </h2>

              <div className="w-[389px] flex justify-center items-center flex-col gap-5">
                <FacebookAuth />
                <GoogleAuth />
                <Link
                  href="/onboarding/signup/email"
                  className="flex justify-center whitespace-nowrap rounded-full gap-[5px] items-center w-full max-w-[389px] px-[61px] py-5 border-[1.5px] border-[#d9d9d9]"
                >
                  <Image className="w-4 h-4" src={mail} alt="Mail Icon" />
                  <span className="font-medium leading-[19px]">
                    Continue with email
                  </span>
                </Link>
              </div>

              <div className="font-medium text-[#666] flex flex-col justify-center items-center gap-8">
                <div className="grid gr2auto">
                  <input className="w-5 h-5" type="checkbox" />
                  <span className="text-xs text-[#808080] leading-5">
                    I do not wish to receive news and promotions from dunia by
                    email
                  </span>
                </div>
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
