"use client";
import Link from "next/link";
import Image from "next/image";

// Component Imports
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

// Images
import pv1 from "@/public/images/pv1.png";
import pv2 from "@/public/images/pv2.png";
import pv3 from "@/public/images/pv3.png";

import pr1 from "@/public/images/products/temp1.jpg";

import pr2 from "@/public/images/products/pv2.png";
import pr3 from "@/public/images/products/pv3.png";
import pr4 from "@/public/images/products/pv4.png";
import pr5 from "@/public/images/products/pv5.png";
import ratings from "@/public/images/ratings.png";
import heartf from "@/public/images/heart-empty.png";
import share from "@/public/images/share.png";
import shopcart from "@/public/images/shopping-cart.png";
import chevleft from "@/public/images/pr-left.png";
import chevright from "@/public/images/pr-right.png";
import ratingsLarge from "@/public/images/ratingsLarge.png";
import pvavatar from "@/public/images/pv-avatar.png";
import zeroratings from "@/public/images/0ratings.png";
import fedex from "@/public/images/fedex.png";
import DHL from "@/public/images/DHL.png";
import email from "@/public/images/mail3.png";
import card from "@/public/images/card.png";

export default function Home() {
  return (
    <div className="text-[#4D4D4D] m-0">
      <div class="flex justify-center shrink-0 items-center bg-white sticky top-0 z-[100]">
        <div class="max-w-[1440px] shrink-0 w-full navspace py-4 px-10">
          <Navbar />
        </div>
      </div>

      <main className="pt-16">
        <div className="bodyCon">
          <div className="px-10">
            <div class="flex gap-[50px] w-full py-6 justify-center items-center bg-[#EFEFEF] rounded-full">
              <div className="flex shrink-0 gap-[10px]">
                <Image className="w-[28px] h-[28px]" src={pv1} alt="" />
                <span className="text-xl font-semibold tracking-[-0.4px] text-black">
                  Free shipping over #0000 in *location
                </span>
              </div>
              <div className="flex shrink-0 gap-[10px]">
                <Image className="w-[28px] h-[28px]" src={pv2} alt="" />
                <span className="text-xl font-semibold tracking-[-0.4px] text-black">
                  Cash on delivery option
                </span>
              </div>
              <div className="flex shrink-0 gap-[10px]">
                <Image className="w-[28px] h-[28px]" src={pv3} alt="" />
                <span className="text-xl font-semibold tracking-[-0.4px] text-black">
                  Hassle free warranty
                </span>
              </div>
            </div>
          </div>

          <div
            id="summary"
            className="pt-16 pb-10 px-[70px] flex justify-between"
          >
            <div className="flex flex-col gap-3">
              <h2 className="text-[#212121] text-[40px] font-bold leading-[44px]">
                Order Summary
              </h2>
              <p className="text-[#808080] text-2xl max-w-[556px] tracking-[-0.48px] leading-[38px]">
                Check your item and select your shipping for a better shopping
                experience
              </p>
            </div>

            <div class="bg-[#FCFCFC] border-[1.5px] border-[#e6e6e6] flex gap-5 items-center p-5 rounded-[28px]">
              <div class="w-[120px] h-[116px] relative rounded-[14px] overflow-hidden shrink-0">
                <Image
                  fill
                  sizes="100vw"
                  className="object-cover object-center"
                  src={pr1}
                  alt=""
                />
              </div>
              <div class="flex gap-[22px]">
                <div id="inner-one" className="flex flex-col gap-[10px]">
                  <h2 class="millik text-[28px] text-[#121212]">
                    The Uninhabitable Earth
                  </h2>
                  <div class="flex gap-[10px] items-center text-[#686868]">
                    <h6 className="font-medium">David Wallace-Wells</h6>
                    <span className="flex items-center gap-[3px]">
                      <Image
                        src={ratingsLarge}
                        className="w-[59px] h-auto"
                        alt="4.5 ratings"
                      />
                      <p class=" text-[10px] font-medium tracking-[-0.2px]">
                        4.5 (55 ratings)
                      </p>
                    </span>
                  </div>
                  <p className="max-w-[358px] text-[#121212] text-[10px] font-medium tracking-[-0.2px] leading-[14px]">
                    As climate change grips the planet, here is Earth. Org&apos;s
                    selection of must-read books on climate change and
                    sustainability to enlighten you.
                  </p>
                </div>
                <p
                  id="inner-two"
                  className="bg-[#EAF3EB] self-start rounded-full py-[10px] px-6 text-[#318736] text-xl font-semibold"
                >
                  $50
                </p>
              </div>
            </div>
          </div>

          <div className="w-full px-10">
            <div className="w-full h-[3px] bg-[#EFEFEF]"></div>
          </div>

          <div className="px-[70px] flex flex-col undersummary">
            <div
              id="available-shipping-methods"
              className="flex flex-col gap-12"
            >
              <div className="flex flex-col gap-8">
                <h2 className="h2-am">Available Methods</h2>
                <div class="bg-[#FCFCFC] border-[2px] border-[#009F00] flex gap-5 items-center p-5 rounded-[28px]">
                  <div class="w-[120px] h-[116px] inline-flex justify-center items-center relative rounded-[14px] overflow-hidden shrink-0">
                    <Image
                      className="w-[89px] h-auto"
                      src={fedex}
                      alt="FedEx"
                    />
                  </div>
                  <div class="flex gap-[22px]">
                    <div
                      id="inner-one"
                      className="flex flex-col text-[#121212] gap-[10px]"
                    >
                      <h2 class="text-[28px] font-bold tracking-[-0.56px]">
                        FedEx Delivery
                      </h2>
                      <h6 className="font-medium leading-5 tracking-[-0.32px]">
                        Should arrive within 2 days
                      </h6>
                      <p className="bg-[#EFFEEF] self-start rounded-full py-[5px] px-[18.5px] text-[#009F00] leading-5 tracking-[-0.32px] font-semibold">
                        Free
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[30px]">
                <h2 className="text-[#808080] text-2xl leading-7 font-semibold tracking-[-0.48px]">
                  Available international shipping
                </h2>
                <div class="bg-[#FCFCFC] border-[2px] border-[#F2F2F2] flex gap-5 items-center p-5 rounded-[28px]">
                  <div class="w-[120px] h-[116px] bg-[#FC0] inline-flex justify-center items-center relative rounded-[14px] overflow-hidden shrink-0">
                    <Image className="w-[88px]  h-auto" src={DHL} alt="DHL" />
                  </div>
                  <div class="flex gap-[22px]">
                    <div
                      id="inner-one"
                      className="flex flex-col text-[#121212] gap-[10px]"
                    >
                      <h2 class="text-[28px] font-bold tracking-[-0.56px]">
                        DHL Delivery
                      </h2>
                      <h6 className="font-medium leading-5 tracking-[-0.32px]">
                        Should arrive within 2 weeks
                      </h6>
                      <p className="bg-[#EFFEEF] self-start rounded-full py-[5px] px-[18.5px] text-[#009F00] leading-5 tracking-[-0.32px] font-semibold">
                        $12.99
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div id="payment-methods" className="">
              <div id="pm-one" className="flex flex-col gap-2">
                <h2>Payment method</h2>
                <p className="text-[#808080] max-w-[520px] text-xl leading-8 tracking-[-0.4px]">
                  Complete your purchase by providing your payment details in
                  order
                </p>
              </div>

              <div id="pm-two" className="flex flex-col gap-[30px] pt-[34px]">
                <div>
                  <h2>Full name</h2>
                  <div>
                    <div>
                      <Image
                        className="w-6 h-6"
                        width={24}
                        height={24}
                        src={email}
                        alt="mail"
                      />
                    </div>
                    <input type="text" placeholder="Full name" />
                  </div>
                </div>
                <div>
                  <h2>Email address</h2>
                  <div>
                    <div>
                      <Image
                        className="w-6 h-6"
                        width={24}
                        height={24}
                        src={email}
                        alt="mail"
                      />
                    </div>
                    <input type="email" placeholder="name@address.com" />
                  </div>
                </div>
                <div>
                  <h2>Billing address</h2>
                  <div className="address">
                    <div>
                      <input
                        type="text"
                        placeholder="Please select a state, region or province"
                      />
                    </div>
                    <div className="address-sub">
                      <div>
                        <input type="text" placeholder="Please select a city" />
                      </div>
                      <div>
                        <input type="text" placeholder="Enter address" />
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h2>Card number</h2>
                  <aside className="pr-[40px] border-[2px] rounded-full inline-flex items-center pl-[13px] max-w-[610px]">
                    <div className="gap-[10px] inline-flex items-center">
                      <span class="em-bg shrink-0">
                        <Image
                          className="w-6 h-6"
                          width={24}
                          height={24}
                          src={card}
                          alt="Credit Card"
                        />
                      </span>
                      <input type="text" placeholder="Full name" />
                    </div>
                    <div className="gap-[30px] inline-flex items-center">
                      <div className="w-auto inline flex-col py-[21px] px-[30px] border-l-[2px] border-r-[2px] border-[#F2F2F2]">
                        <input
                          class="w-auto inline max-w-[70px]"
                          type="text"
                          placeholder="MM/YY"
                        />
                      </div>
                      <div className="pl-[30px] w-auto inline max-w-[48px]">
                        <input
                          className="w-auto inline max-w-[48px]"
                          type="text"
                          placeholder="CVV"
                        />
                      </div>
                    </div>
                  </aside>
                </div>
              </div>

              <div id="pm-total" className="flex flex-col gap-10 pt-10 pb-[60px]">
                <div className="flex flex-col gap-5 zuti-t">
                  <div>
                    <p>Subtotal</p>
                    <p>$----</p>
                  </div>
                  <div>
                    <p>VAT(10%)</p>
                    <p>$----</p>
                  </div>
                  <div class="zuti-final-t">
                    <p>Total</p>
                    <p>$----</p>
                  </div>
                </div>
                <button class="total-cta">Buy now</button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
