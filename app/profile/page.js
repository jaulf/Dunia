"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

// Images
import dunia from "@/public/images/dunia.png";
import chevdown2 from "@/public/images/chev-down.png";
import bell from "@/public/images/bell.png";
import shoppingbag from "@/public/images/shopping-bag.png";
import dp1 from "@/public/images/profile/heart.png";
import dp2 from "@/public/images/profile/download.png";
import dp3 from "@/public/images/profile/ucheck.png";
import dp4 from "@/public/images/profile/fileheart.png";
import dp5 from "@/public/images/profile/archive.png";
import dp6 from "@/public/images/profile/star.png";
import dp7 from "@/public/images/profile/logout.png";
import avatar2 from "@/public/images/profile/avatar2.png";
import avatar3 from "@/public/images/profile/avatar3.png";
import tick from "@/public/images/profile/Verified-tick.png";
import sign1 from "@/public/images/profile/facebook.png";
import sign2 from "@/public/images/profile/google.png";
import mesh from "@/public/images/profile/colorful-mesh.png";
import mastercard from "@/public/images/profile/mastercard.png";
import visa from "@/public/images/profile/visa1.png";
import plus from "@/public/images/profile/plus.png";
import paypass from "@/public/images/profile/PayPass.png";
import lines from "@/public/images/profile/Lines.png";
import bgvisa from "@/public/images/profile/visa-bg.png";
import SubNavbar from "@/components/subnavbar";
import { useSession, signIn, signOut } from "next-auth/react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllProducts,
  fetchProducts,
} from "@/components/redux/products/productSlice";
import { getCartProducts } from "@/components/redux/products/cartProductsSlice";
import ProfileFacebookAuth from "@/components/profile-reauth/facebookAuth";
import ProfileGoogleAuth from "@/components/profile-reauth/googleAuth";
import { updateAuth } from "@/components/redux/products/authSlice";
import { useRouter } from "next/navigation";

export default function UserProfile() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [body, setBody] = useState(null);
  const dispatch = useDispatch();
  const listOfCartProducts =
    useSelector((state) => state.cartProducts.cartProducts) || [];
  const productStatus = useSelector((state) => state.Products.status);
  const connectM = useSelector((state) => state.authMode.authMode);

  useEffect(() => {
    if (!localStorage.getItem("user-auth")) {
      router.push("/onboarding/login");
    }

    if (localStorage.getItem("user-auth")) {
      setBody(JSON.parse(localStorage.getItem("user-auth")));
    }
    if (localStorage.getItem("auth-method")) {
      dispatch(updateAuth(localStorage.getItem("auth-method")));
    }
  }, []);

  useEffect(() => {
    if (productStatus == "idle" || productStatus == "idle") {
      dispatch(fetchProducts());
      dispatch(getCartProducts());
    }
  }, [productStatus, dispatch]);

  return (
    <>
      <header className="bg-white lg:sticky lg:top-0 z-[100]">
        <div class="flex justify-center shrink-0 items-center">
          <div class="max-w-[1440px] shrink-0 w-full navspace lg:px-20">
            <nav className="flex justify-between pb-11 py-6 lg:pb-6 px-6 lg:px-8 border-b-[2px] lg:border-b-0 border-[#F2F2F2]">
              <div className="flex gap-11 items-center">
                <Link href="/" className="shrink-0">
                  <Image
                    className="w-[91px] h-[28px]"
                    src={dunia}
                    alt="Dunia Logo"
                  />
                </Link>
              </div>

              <div className="flex items-center gap-6">
                <div className="dropdown">
                  <div className="dropdown-button relative w-[40px] h-[40px]">
                    <Image
                      className="object-cover w-full h-auto"
                      placeholder="blur"
                      quality={100}
                      sizes="100vw"
                      fill
                      src={avatar2}
                      alt="User Avatar"
                    />
                  </div>
                </div>
                <div className="flex gap-5 items-center">
                  <Link href="/profile/cart" className="relative">
                    <Image
                      className="w-6 h-6"
                      src={shoppingbag}
                      alt="Shopping Bag Icon"
                    />
                    {listOfCartProducts.length > 0 && (
                      <div className="absolute top-[-4px] right-[-7px] font-semibold text-[8px] bg-black text-white py-[1px] rounded-full px-[3px]">
                        {listOfCartProducts.length}
                      </div>
                    )}
                  </Link>
                  <div className="hidden lg:flex items-center gap-[28px]">
                    <div className="flex gap-1 py-1 px-3 border-2 border-[#f5f5f5] rounded-full">
                      <span className="font-medium text-sm ">ENG</span>
                      <Image
                        className="self-center w-4 h-4"
                        src={chevdown2}
                        alt="Arrow Down Icon"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>
      <SubNavbar />

      {body ? (
        <main class="bodyCon">
          <section className="flex flex-col lg:flex-row justify-center gap-20 lg:gap-5 pt-12 lg:pt-10 lg:px-28">
            <div id="left-profile" className="flex flex-col gap-5 px-6 lg:px-0">
              <div id="user" className="rounded-2xl overflow-hidden pb-5">
                <div id="colorful" className="relative w-[392px] h-[120px]">
                  <Image
                    src={mesh}
                    className="object-cover"
                    alt="rainbow gradient"
                    sizes="100vw"
                    fill
                  />
                </div>
                <div
                  id="user-info"
                  className=" mt-[-32px] px-6 flex flex-col gap-6"
                >
                  <div class="relative w-24 h-24">
                    <div
                      id="image"
                      className="relative w-24 h-24 shadow-uinfo rounded-full overflow-hidden border-[4px] border-white"
                    >
                      <Image
                        src={avatar3}
                        className="object-cover w-full h-auto"
                        fill
                        sizes="100vw"
                        alt="avatar"
                        placeholder="blur"
                      />
                    </div>
                    <Image
                      src={tick}
                      className="w-6 h-6 bottom-[6px] right-[6px] absolute"
                      alt="verfied-tick"
                    />
                  </div>
                  <div class="ui-content">
                    <div>
                      <h3>
                        {(session && session.name) || (body && body.data.name)}
                      </h3>
                      <span>Premium</span>
                    </div>
                    <h5>
                      {(session && session.email) || (body && body.data.email)}
                    </h5>
                  </div>
                </div>
              </div>

              {/* We are not using the card section again */}
              {/* <div id="card" class="flex flex-col gap-7">
                <div className="flex justify-between items-start">
                  <h4>My cards</h4>
                  <div className="flex items-center gap-2">
                    <Image src={plus} className="w-5 h-auto" alt="Add Icon" />
                    <h6 className=" text-xs leading-5 circular">Add card</h6>
                  </div>
                </div>
                <div id="MasterandVisa" className="relative">
                  <div
                    id="mastercard"
                    className="inner-flex z-40 flex-col justify-center items-center relative w-[316px] h-[190px] rounded-[20px] overflow-hidden bg-[#F2F4F7]"
                  >
                    <Image
                      className="w-[653.761px] h-[219px] absolute top-9"
                      src={lines}
                      alt="lines"
                    />
                    <h2 className=" text-[#344054] font-semibold absolute top-5 left-5">
                      Nuel Adeleke
                    </h2>
                    <Image
                      className="w-5 h-5 absolute top-5 right-5"
                      src={paypass}
                      alt=""
                      placeholder="blur"
                    />
                    <Image
                      className="w-auto h-8 absolute bottom-4 right-4 z-10"
                      src={mastercard}
                      alt=""
                      placeholder="blur"
                    />
                    <div className="card-dets absolute bottom-4 left-6 flex flex-col gap-2">
                      <div className="flex justify-between items-center">
                        <p>OLIVIA RHYE</p>
                        <p>06/24</p>
                      </div>
                      <div class="acc-no">1234 1234 1234 1234</div>
                    </div>
                  </div>

                  <div className="absolute top-7 left-7">
                    <div
                      id="visa"
                      className="text-[#fff!important] inline-flex flex-col justify-center items-center relative w-[316px] h-[190px] rounded-[20px] overflow-hidden"
                    >
                      <Image
                        className="w-[653.761px] h-[219px] z-10 absolute top-2"
                        src={lines}
                        alt="lines"
                      />
                      <Image
                        className="w-full h-auto object-cover"
                        fill
                        sizes="100vw"
                        src={bgvisa}
                        alt="Colorful Background"
                      />
                      <div class="bg-[#344054] h-full absolute w-[228px] left-0 z-20"></div>
                      <h2 className="  font-semibold absolute top-5 left-5 z-20">
                        Nuel Adeleke
                      </h2>
                      <Image
                        className="w-5 h-5 absolute top-5 right-5"
                        src={paypass}
                        alt=""
                        placeholder="blur"
                      />
                      <Image
                        className="w-auto h-8 absolute bottom-4 right-4 z-10"
                        src={visa}
                        alt=""
                        placeholder="blur"
                      />
                      <div className="card-dets absolute bottom-4 left-6 flex flex-col gap-2 z-20">
                        <div className="flex justify-between items-center">
                          <p className="text-[#fff!important]">OLIVIA RHYE</p>
                          <p className="text-[#fff!important]">06/24</p>
                        </div>
                        <div class="acc-no text-[#fff!important]">
                          1234 1234 1234 1234
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>

            <div id="right-profile" className="flex flex-col gap-12 lg:gap-10">
              <div id="connect">
                <h2 class="text-center lg:text-left">Connect</h2>
                <div id="FacebookandGoogle" className=" w-full">
                  {connectM == "facebook" ? (
                    <div className="">
                      <Image
                        className="w-[18px] h-[18px]"
                        src={sign1}
                        alt="Facebook"
                      />
                      <span className=" shrink-0">Connected with Facebook</span>
                    </div>
                  ) : (
                    <ProfileFacebookAuth />
                  )}
                  {connectM == "google" ? (
                    <div className="">
                      <Image
                        className="w-[18px] h-[18px]"
                        src={sign2}
                        alt="Google"
                      />
                      <span className=" shrink-0">Connected with Google</span>
                    </div>
                  ) : (
                    <ProfileGoogleAuth />
                  )}
                </div>
              </div>
              <div id="account-details">
                <h2>Account Details</h2>
                <form>
                  <div>
                    <input disabled='true' type="text" placeholder={(session && session.name) || (body && body.data.name)} />
                  </div>
                  <div class="flex lg:flex-row flex-col lg:items-center gap-2 lg:gap-[29px]">
                    <input type="password" placeholder="*************" />
                    <Link href="/profile/changepassword" class="detail-cta">Change password</Link>
                  </div>
                  <div class="flex lg:flex-row flex-col items-center lg:gap-[29px]">
                    <input disabled='true' type="email" placeholder={(session && session.email) || (body && body.data.email)} />
                  </div>
                </form>
              </div>
            </div>
          </section>
        </main>
      ) : (
        <div class="bodyCon">
          <div className="flex gap-5 pt-10 px-28">loading ...</div>
        </div>
      )}
    </>
  );
}
