"use client";
import Link from "next/link";
import Image from "next/image";

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
import lines from "@/public/images/profile/lines.png";
import bgvisa from "@/public/images/profile/visa-bg.png";

export default function NavbarUser() {
  return (
    <>
      <header className="bg-white sticky top-0 z-[100]">
        <div class="flex justify-center shrink-0 items-center">
          <div class="max-w-[1440px] shrink-0 w-full navspace px-20">
            <nav className="flex justify-between py-4 px-8">
              <div className="flex gap-11 items-center">
                <Link href="/">
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
                  {/* Dropdown menu if needed */}
                  {/* <div className="dropdown-menu pt-8 ">
                <div className="text-black flex max-w-fit popup border-[2px] rounded-[15px] border-[#f2f2f2] bg-white flex-col gap-[30px] px-6 py-[34px]">
                  <div className="flex flex-col gap-5">
                    <div class="flex flex-row items-center gap-[15px]">
                      <Image className="w-[70px] h-auto" src={uavatar} alt="" />
                      <div className="flex flex-col gap-[6px]">
                        <h2 className="font-medium text-xl leading-6">
                          Nuel Adeleke
                        </h2>
                        <p className="font-medium text-[10px]">
                          adelenuel@gmail.com
                        </p>
                      </div>
                    </div>
                    <div>
                      <button className="bg-[#009F00] text-white leading-[19px] py-[12.5px] px-[98.5px] rounded-[32px]">
                        Edit profile
                      </button>
                    </div>
                  </div>

                  <div class="flex flex-col gap-5">
                    <div className="sub2">
                      <div>
                        <Image className="w-5 h-5" src={dp1} alt="" />
                        <span>Favourites</span>
                      </div>
                      <div class="flex items-center gap-[115px!important]">
                        <div class="flex item-center gap-[15px]">
                          <Image className="w-5 h-5" src={dp2} alt="" />
                          <span class="font-medium">Downloads</span>
                        </div>
                        <span class="text-[10px] block font-medium rounded-full py-[7px] px-[10px] bg-[#FEF0EF]">
                          0/10
                        </span>
                      </div>
                      <div>
                        <Image className="w-5 h-5" src={dp3} alt="" />
                        <span>Following</span>
                      </div>
                      <div>
                        <Image className="w-5 h-5" src={dp4} alt="" />
                        <span>Wishlist</span>
                      </div>
                    </div>

                    <div>
                      <div class="bg-[#F2F2F2] h-[1.5px] w-[280px]"></div>
                    </div>

                    <div className="sub2">
                      <div>
                        <Image className="w-5 h-5" src={dp5} alt="" />
                        <span>Order History</span>
                      </div>
                      <div>
                        <Image className="w-5 h-5" src={dp6} alt="" />
                        <span>Recommended</span>
                      </div>
                    </div>

                    <div>
                      <div class="bg-[#F2F2F2] h-[1.5px] w-[280px]"></div>
                    </div>

                    <div className="sub2">
                      <div>
                        <Image className="w-5 h-5" src={dp7} alt="" />
                        <span className="text-[#FF3333]">Log out</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
                </div>
                <div className="flex gap-5 items-center">
                  <div className="relative">
                    <Image
                      className="w-6 h-6"
                      src={shoppingbag}
                      alt="Shopping Bag Icon"
                    />
                    <div className="absolute top-[-4px] right-[-7px] font-semibold text-[8px] bg-black text-white py-[1px] rounded-full px-[3px]">
                      3
                    </div>
                  </div>
                  <div className="flex items-center gap-[28px]">
                    <div className="relative">
                      <Image className="w-6 h-6" src={bell} alt="Bell Icon" />
                      <div className="absolute top-[-4px] right-[-4px] font-semibold text-[8px] bg-black text-white py-[1px] rounded-full px-[3px]">
                        3
                      </div>
                    </div>
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
        <nav className="flex justify-center items-center py-3 border-b border-t-[2px] border-[#F2F2F2]">
          <div className="content-container items-center flex gap-3 justify-center max-w-[1440px]">
            <div className="content active-c">Profile</div>
            <div className="content">Favourites</div>
            <div className="content">
              {2 == 1 ? (
                <span>Downloads</span>
              ) : (
                <div className="flex items-center gap-2">
                  <div className="justify-start items-center gap-3 inline-flex">
                    <div className="w-2.5 h-2.5 relative">
                      <div className="w-2 h-2 left-[1px] top-[1px] absolute bg-green-700 rounded-full" />
                    </div>
                    <div className="">Downloads</div>
                  </div>
                  <div className="content-sub-active">10/20</div>
                </div>
              )}
            </div>
            <div className="content">Order History</div>
            <div className="content">Cart</div>
            <div className="content">Following</div>
          </div>
        </nav>
      </header>

      <main>
        <section className="flex justify-center gap-5 pt-10">
          <div id="left-profile" className="flex flex-col gap-5">
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
                    <h3>Nuel Adeleke</h3>
                    <span>Premium</span>
                  </div>
                  <h5>adelekenuel.com</h5>
                </div>
              </div>
            </div>

            <div id="card" class="flex flex-col gap-7">
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
            </div>
          </div>

          <div id="right-profile" className="flex flex-col gap-10">
            <div id="connect">
              <h2>Connect</h2>
              <div id="FacebookandGoogle">
                <div className="">
                  <Image className="w-4 h-4" src={sign1} alt="Facebook" />
                  <span className=" shrink-0 text-black">
                    Connect with Facebook
                  </span>
                </div>
                <div>
                  <Image
                    className="w-[18px] h-[18px]"
                    src={sign2}
                    alt="Google"
                  />
                  <span className=" shrink-0">Connected with Google</span>
                </div>
              </div>
            </div>
            <div id="account-details">
              <h2>Account Details</h2>
              <form>
                <div>
                  <input type="text" placeholder="nuel0x" />
                </div>
                <div class="flex items-center gap-[29px]">
                  <input type="password" placeholder="*************" />
                  <span class="detail-cta">Change password</span>
                </div>
                <div class="flex items-center gap-[29px]">
                  <input type="email" placeholder="adelekenuel@gmail.com" />
                  <span class="detail-cta">Change Email</span>
                </div>
                <div class="pt-5">
                  <button className="profile-cta">Save changes</button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
