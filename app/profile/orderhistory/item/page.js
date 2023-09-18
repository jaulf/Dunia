"use client";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Navbar from "@/components/navbar";
import SubNavbar from "@/components/subnavbar";
import back from "@/public/images/back.png";
import rect from "@/public/images/downloads/rect.png";

export default function NavbarUser() {
  const router = useRouter();
  return (
    <>
      <header className="bg-white sticky top-0 z-[100]">
        <div class="flex justify-center shrink-0 items-center bg-white sticky top-0 z-[100]">
          <div class="max-w-[1440px]  shrink-0 w-full navspace py-6 xl:py-4 px-6 xl:px-10">
            <Navbar />
          </div>
        </div>
        <SubNavbar />
      </header>

      <section>
        <div
          id="baxk"
          onClick={() => router.back()}
          className="grid gr2auto items-center self-start pt-6 pl-6 lg:pl-14 lg:pt-16 sticky top-0"
        >
          <Image
            quality={100}
            className="w-8 h-8"
            src={back}
            alt="back arrow"
          />
        </div>
        <div className="px-6 pb-[103px]">
          <h2 className="pt-8 millik text-[20px]">All We Can Save</h2>
          <div className="pt-4 pb-12 grid gap-y-10">
            <div className="flex justify-between items-center font-semibold text-[14px]">
              <h6  className="text-[#4d4d4d] font-semibold text-[14px]">Image</h6>
              <div class="w-[83px] relative h-[46px] inline-flex justify-center items-center">
                <Image
                  className="object-cover"
                  fill
                  sizes="100vw"
                  src={rect}
                  alt="download"
                />
              </div>
            </div>
            <div className="flex justify-between items-center font-semibold text-[14px] text-[#4d4d4d]">
              <h6>Author</h6>
              <h6 className="text-[#000]">@nikkyblue</h6>
            </div>
            <div className="flex justify-between items-center font-semibold text-[14px] text-[#4d4d4d]">
              <h6>Order number</h6>
              <h6 className="text-[#000]">#099019</h6>
            </div>
            <div className="flex justify-between items-center font-semibold text-[14px] text-[#4d4d4d]">
              <h6>Category</h6>
              <h6 className="text-[#000]">Crime</h6>
            </div>
            <div className="flex justify-between items-center font-semibold text-[14px] text-[#4d4d4d]">
              <h6>License</h6>
              <h6 className="text-[#009F00] underline">Download license</h6>
            </div>
          </div>
        <div className="py-2 bg-[#009F00] rounded-full text-[14px] font-semibold text-center leading-6 text-[#FFF]">Download</div>
        </div>
      </section>
    </>
  );
}
