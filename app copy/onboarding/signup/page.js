import Image from "next/image";

// Image Imports
import sidebarImage from "../../../public/images/onboarding.png";
import fb from "../../../public/images/fb.png";
import google from "../../../public/images/google.png";
import mail from "../../../public/images/mail.png";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="flex justify-between w-full">
        <div
          id="Image-sidebar"
          className="sticky top-0 max-w-[770px] h-[100vh] w-[100vw]"
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
          className="px-[140px] pt-24 flex flex-col w-full items-center"
        >
          <h2 className="millik text-[96px] tracking-[-1%]">Dunia</h2>

          <div className=" flex flex-col justify-center items-center gap-10 pt-[100px]">
            <h2 className="text-[28px] font-medium leading-8 text-center">
              Create an account
            </h2>

            <div className="w-[389px] flex justify-center items-center flex-col gap-5">
              <div className="flex justify-center whitespace-nowrap rounded-full gap-[5px] items-center w-full max-w-[389px] px-[61px] py-5 border-[1.5px] border-[#d9d9d9]">
                <Image
                  className="w-[18px] h-[18px]"
                  src={google}
                  alt="Google Icon"
                />
                <span className="font-medium leading-[18px] selectedtext">
                  Continue with Google
                </span>
              </div>
              <div className="flex justify-center whitespace-nowrap rounded-full gap-[5px] items-center w-full max-w-[389px] px-[61px] py-5 border-[1.5px] border-[#d9d9d9]">
                <Image className="w-4 h-4" src={fb} alt="Facebook Icon" />
                <span className="font-medium leading-[18px]">
                  Continue with Facebook
                </span>
              </div>
              <Link
                href="/onboarding/signup/email"
                className="flex justify-center whitespace-nowrap rounded-full gap-[5px] items-center w-full max-w-[389px] px-[61px] py-5 border-[1.5px] border-[#d9d9d9]"
              >
                <Image className="w-4 h-4" src={mail} alt="Mail Icon" />
                <span className="font-medium leading-[18px]">
                  Continue with email
                </span>
              </Link>
            </div>

            <div className="font-medium text-[#666] flex flex-col justify-center items-center gap-10">
              <div className="grid gr2auto">
                <input className="w-5 h-5" type="checkbox" />
                <span className="leading-5">
                  I do not wish to receive news and promotions from dunia by
                  email
                </span>
              </div>
              <div className=" leading-5 w-full max-w-[370px] text-center">
                By continuing, you agree to our company’s{" "}
                <span className=" font-semibold">Terms of Use, Conditions</span> and{" "}
                <span className=" font-semibold">Privacy policy</span>
              </div>

              <div className=" leading-5 text-center">
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

          <div className="pt-36 pb-14">
            <span className=" font-semibold leading-5">by the</span>
            <span className=" text-xl tracking-[-1%] leading-6 millik text-[#B3B3B3]">
              {" "}
              Dunia{" "}
            </span>
            <span className=" font-semibold leading-5">company</span>
          </div>
        </div>
      </header>
    </>
  );
}
