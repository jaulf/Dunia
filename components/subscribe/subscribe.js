import Image from "next/image";
import d7 from "@/public/images/D7.png";

function Subscribe() {
  return (
    <section className="bodyCon">
      <div className="md:pt-[82px] px-4 md:px-0 md:pb-[132px] py-20 relative flex gap-6 justify-center items-center flex-col">
        <div className="flex flex-col justify-center items-center gap-3 ">
          <h3 className="millik text-[#121212] max-w-[358px] md:max-w-[845px] text-center text-[32px] leading-10 md:text-[56px] md:leading-[64px]">
            Be the first to know when new{" "}
            <span className="dunia-grd2">resources</span> are available
          </h3>
          <p className="max-w-[612px] text-[#4d4d4d] text-[14px] leading-[22px] md:text-base text-center">
            As climate change grips the planet, here is Earth. Org&apos;s
            selection of must-read books on climate change and sustainability to
            enlighten you.
          </p>
        </div>

        <div className="flex flex-col gap-8">
          <input
            className="py-[14px] px-5 outline-none subscribe rounded-full"
            type="email"
            placeholder="Enter your email address"
          />
          <button className="bg-[#009F00] font-bold text-xl text-white py-[14px] px-12 self-center rounded-full flex justify-center items-center">
            Subscribe
          </button>
        </div>

        <div className="absolute hidden lg:flex self-start lg:top-[38px] lg:right-[158px]">
          <Image className="w-10 h-10" src={d7} alt="clover" />
        </div>
      </div>
    </section>
  );
}

export default Subscribe;
