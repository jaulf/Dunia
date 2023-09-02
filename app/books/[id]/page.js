import Link from "next/link";
import Image from "next/image";
import axios from "axios";
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
import share from "@/public/images/share.png";
import Favorite from "@/components/features/favorite";
import CartUpdate from "@/components/features/addToCart";
import tickGreen from "@/public/images/tick.png";
import CartUpdateButton from "@/components/features/addtoCartButtonProduct";
import QuantityUpdate from "@/components/features/quantityUpdate";
import ListofReviews from "@/components/reviews/listOfReviews";
import SubmitAReview from "@/components/reviews/submitAReview";

const url = process.env.NEXT_PUBLIC_BASE_URL + "/products";
const config = {
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
};

export async function generateStaticParams() {
  const books1 = await axios.get(url, config);
  const books2 = await books1.data.data;
  return books2.map((book) => ({
    id: book.id,
  }));
}

export const getBooks = async (params) => {
  const res = await axios
    .get(url, config)
    .then((response) => response.data.data);
  const res1 = res.filter((res2) => params === res2.id);
  return res1;
};

export async function generateMetadata({ params, searchParams }, parent) {
  // read route params
  const id = params.id;

  const res = await axios
    .get(url, config)
    .then((response) => response.data.data);

  const res1 = res.filter((res2) => id === res2.id);
  const res3 = res1[0];

  return {
    title: res3.name,
  };
}

export default async function Page({ params }) {
  const { id } = await params;
  const books = await getBooks(id);
  const book = books[0];

  return (
    <div className="text-[#4D4D4D] m-0">
      <div class="flex justify-center shrink-0 items-center bg-white sticky top-0 z-[100]">
        <div class="max-w-[1440px] shrink-0 w-full navspace py-4 px-10">
          <Navbar />
        </div>
      </div>

      <main className="lg:pt-16 pt-6">
        <div className="bodyCon">
          <div className=" lg:px-10">
            <div class="flex gap-10 lg:gap-[50px] px-5 lg:px-0 w-full whitespace-nowrap overflow-auto py-4 lg:py-6 lg:justify-center items-center bg-[#EFEFEF] lg:rounded-full">
              <div className="flex gap-[10px] shrink-0 ">
                <Image className="lg:w-[28px] w-4 h-4 shrink-0 lg:h-[28px]" src={pv1} alt="" />
                <span className="text-[12px] lg:text-xl font-semibold tracking-[-0.24px] lg:tracking-[-0.4px] text-black">
                  Free shipping over #0000 in *location
                </span>
              </div>
              <div className="flex gap-[10px] shrink-0 ">
                <Image className="lg:w-[28px] w-4 h-4 shrink-0 lg:h-[28px]" src={pv2} alt="" />
                <span className="text-[12px] lg:text-xl font-semibold tracking-[-0.24px] lg:tracking-[-0.4px] text-black">
                  Cash on delivery option
                </span>
              </div>
              <div className="flex gap-[10px] shrink-0 ">
                <Image className="lg:w-[28px] w-4 h-4 shrink-0 lg:h-[28px]" src={pv3} alt="" />
                <span className="text-[12px] lg:text-xl font-semibold tracking-[-0.24px] lg:tracking-[-0.4px] text-black">
                  Hassle free warranty
                </span>
              </div>
            </div>
{/* 
            <section
              id="hero-cont" 
              className="flex pt-16 px-[120px] gap-[82px]"
            >
              <div id="left" className="flex flex-col gap-6">
                <div className="w-[401px] rounded-[30px] relative overflow-hidden h-[454px]">
                  <Image
                    className="object-cover top-[10px] left-[20px]"
                    sizes="100vw"
                    fill
                    src={pr1}
                    alt=""
                  />
                  <Favorite productID={book.id} />
                  <div className="absolute bottom-6 right-6 flex gap-3">
                    <div className="rounded-full w-10 h-10 flex bg-white justify-center items-center">
                      <Image className="w-6 h-6" src={share} alt="Share Icon" />
                    </div>
                    <CartUpdate productID={book.id} />
                  </div>
                </div>
                <div class="flex gap-[10px]">
                  <Image
                    className="w-[90px] h-[90px] rounded-[20px]"
                    src={pr2}
                    alt=""
                  />
                  <Image
                    className="w-[90px] h-[90px] rounded-[20px]"
                    src={pr3}
                    alt=""
                  />
                  <Image
                    className="w-[90px] h-[90px] rounded-[20px]"
                    src={pr4}
                    alt=""
                  />
                  <Image
                    className="w-[90px] h-[90px] rounded-[20px]"
                    src={pr5}
                    alt=""
                  />
                </div>
              </div>
              <div id="right" className="max-w-[637px] self-start">
                <div className="flex flex-col gap-8">
                  <div class="flex flex-col gap-6">
                    <h1 className="text-[#121212] millik text-[64px] leading-[62px]">
                      {book.name}
                    </h1>
                    <div class="flex flex-col gap-4">
                      <p className="max-w-[543px] text-[#282828] leading-6 ">
                        {book.description}
                      </p>
                      <div className="flex flex-col gap-5">
                        <div className="flex gap-[10px] items-center">
                          <span className="text-[#212121] font-semibold">
                            {book.author.name}
                          </span>
                          <div className="flex gap-[3px] shrink-0 items-center">
                            <Image
                              className="h-3 w-auto"
                              src={ratings}
                              alt="rating Icon"
                            />
                            <span className="font-medium text-[10px]">
                              4.5 (55 ratings)
                            </span>
                          </div>
                        </div>
                        <div class="text-[#318736] w-auto self-start bg-[#EAF3EB] font-semibold py-[10px] px-6 rounded-full text-xl">
                          ${book.price}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-5">
                    <QuantityUpdate productID={book.id} />
                    <div className="self-start flex gap-4">
                      <div className="px-10 py-[14px] text-white leading-6 self-end text-xl font-bold rounded-full bg-[#009F00]">
                        Buy now
                      </div>
                      <CartUpdateButton productID={book.id} />
                      <div className="px-10 py-[14px] text-black leading-6 self-end text-xl font-medium border-[2px] border-[#f2f2f2] rounded-full ">
                        Preview book
                      </div>
                    </div>
                  </div>
                </div>

                <div></div>
              </div>
            </section>

            <div id="divider" className="py-16 px-[87px]">
              <div className="h-1 w-full bg-[#F2F2F2]"></div>
            </div>

            <section
              id="customer-reviews"
              className="flex flex-col px-[120px] gap-10"
            >
              <div>
                <h3 className="text-[32px] text-[#121212] font-bold leading-9 tracking-[-0.64px]">
                  Customer reviews
                </h3>
              </div>

              <ListofReviews productID={book.id} />
            </section>

            <SubmitAReview productID={book.id} /> */}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
