import Image from "next/image";

// Image Imports
import sidebarImage from "../../../../public/images/onboarding.png";
import fb from "../../../../public/images/fb.png";
import google from "../../../../public/images/google.png";
import mail from "../../../../public/images/mail.png";

import mail2 from "../../../../public/images/mail2.png";
import arrowleft from "../../../../public/images/arrow-left.png";
import passcode from "../../../../public/images/passcode.png";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header class="flex w-full">
        <div
          id="Image-sidebar"
          className="sticky top-0 max-w-[770px] h-[100vh] w-[100vw]"
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
            class="grid gr2auto items-center self-start pl-9 pt-11"
          >
            <Image
              quality={100}
              className="w-6 h-6"
              src={arrowleft}
              alt="back arrow"
            />
            <span class="text-[#FF3333] font-medium text-xl leading-5">
              Back
            </span>
          </Link>

          <div className="px-[140px] pt-[27px] flex flex-col justify-center items-center">
            <h2 className="millik text-[96px] tracking-[-1%]">Dunia</h2>

            <div class=" flex flex-col justify-center items-center gap-10 pt-[100px]">
              <h2 className="text-[28px] font-medium leading-8 text-center">
                Create an account
              </h2>

              <div class="w-[389px] flex justify-center items-center flex-col gap-5">
                <div className="flex whitespace-nowrap rounded-full gap-[10px] items-center w-full max-w-[389px] px-[35px] py-5 border-[1.5px] border-[#d9d9d9]">
                  <Image
                    quality={100}
                    class="w-6 h-6"
                    src={mail2}
                    alt="Email Icon"
                  />
                  <input
                    className=" outline-none w-full"
                    type="email"
                    placeholder="Email"
                  />
                </div>
                <div className="flex whitespace-nowrap rounded-full gap-[10px] items-center w-full max-w-[389px] px-[35px] py-5 border-[1.5px] border-[#d9d9d9]">
                  <Image
                    quality={100}
                    class="w-6 h-6"
                    src={passcode}
                    alt="Password Icon"
                  />
                  <input
                    className="outline-none w-full"
                    type="Password"
                    placeholder="Password"
                  />
                </div>
                <div className="w-full pt-5">
                  <button className="bg-[#F2665B] rounded-full text-white text-xl font-semibold py-5 w-full">
                    Sign Up
                  </button>
                </div>
              </div>

              <div className="font-medium text-[#666] flex flex-col justify-center items-center gap-10">
                <div className=" leading-5 w-full max-w-[370px] text-center">
                  By continuing, you agree to our company’s{" "}
                  <span class=" font-semibold">Terms of Use, Conditions</span>{" "}
                  and <span class=" font-semibold">Privacy policy</span>
                </div>

                <div className=" leading-5 text-center">
                  Already have an account?{" "}
                  <Link className="text-[#FF3333] font-semibold" href="/onboarding/login">
                    Login
                  </Link>
                </div>
              </div>
            </div>

            <div className="pt-36 pb-14">
              <span className=" font-semibold leading-5">by the</span>
              <span className=" text-xl tracking-[-1%] leading-6 millik text-[#B3B3B3]">
                {" "}
                Dunia{" "}
              </span>
              <span className=" font-semibold leading-5">company</span>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
