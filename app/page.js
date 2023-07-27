import Image from "next/image";

// Image Imports
import sidebarImage from "../public/images/onboarding.png";
import fb from "../public/images/fb.png";
import google from "../public/images/google.png";
import mail from "../public/images/mail.png";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header class="flex justify-between w-full">
          <div id="Image-sidebar" className="bgWrap sticky top-0">
            <Image
              src={sidebarImage}
              alt="Hero Section Image"
              placeholder="blur"
              quality={100}
              fill
              sizes="100vw"
            />
          </div>
        <div id="text-sidebar" className="px-[140px] pt-24 flex flex-col items-center">
          <h2 className="millik text-[96px] tracking-[-1%]">Dunia</h2>

          <div class=" flex flex-col gap-10 pt-[100px]">
            <h2 className="text-[28px] font-medium leading-8 text-center">Create an account</h2>

            <div class="w-[389px] flex flex-col gap-5">
              <div className="flex justify-center whitespace-nowrap rounded-full gap-[5px] items-center w-full max-w-[389px] px-[61px] py-5 border-[1.5px] border-[#d9d9d9]">
                <Image
                  class="w-[18px] h-[18px]"
                  src={google}
                  alt="Google Icon"
                />
                <span class="font-medium leading-[18px] selectedtext">Continue with Google</span>
              </div>
              <div className="flex justify-center whitespace-nowrap rounded-full gap-[5px] items-center w-full max-w-[389px] px-[61px] py-5 border-[1.5px] border-[#d9d9d9]">
                <Image class="w-4 h-4" src={fb} alt="Facebook Icon" />
                <span class="font-medium leading-[18px]">Continue with Facebook</span>
              </div>
              <div className="flex justify-center whitespace-nowrap rounded-full gap-[5px] items-center w-full max-w-[389px] px-[61px] py-5 border-[1.5px] border-[#d9d9d9]">
                <Image class="w-4 h-4" src={mail} alt="Mail Icon" />
                <span class="font-medium leading-[18px]">Continue with email</span>
              </div>
            </div>
            
            <div className="font-medium text-[#666] flex flex-col gap-10">
              <div className=" leading-5 grid gr2auto"><input className="w-5 h-5" type="checkbox" /><span>I do not wish to receive news and promotions from dunia by email</span></div>
              <div className=" leading-5 w-full max-w-[370px] text-center">By continuing, you agree to our company’s <span class=" font-semibold">Terms of Use, Conditions</span> and <span class=" font-semibold">Privacy policy</span></div>
              <div className=" leading-5 text-center">Don’t you have an account? <Link className="text-[#FF3333] font-semibold" href="/">Sign up</Link></div>
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
