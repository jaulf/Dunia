"use client";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function SubNavbar() {
  const pathname = usePathname();
  const likedProducts =
    useSelector((state) => state.likedProducts.likedProducts) || [];

  useEffect(() => {
    // Favorites Link
    if (pathname == "/profile/favorites") {
      const elements = document.querySelectorAll(".favorites");
      elements.forEach((element) => {
        element.classList.add("active-c");
      });
    }
    // Cart Link
    if (pathname == "/profile/cart") {
      const elements = document.querySelectorAll(".cart");
      elements.forEach((element) => {
        element.classList.add("active-c-g");
      });
    }
    // Profile Link
    if (pathname == "/profile" || pathname == "/profile/changepassword") {
      const elements = document.querySelectorAll(".profile");
      elements.forEach((element) => {
        element.classList.add("active-c");
      });
    }
    // Order History Link
    if (pathname == "/profile/orderhistory") {
      const elements = document.querySelectorAll(".order-history");
      elements.forEach((element) => {
        element.classList.add("active-c-g");
      });
    }
  }, [pathname]);

  return (
    <nav className="flex overflow-auto lg:justify-center items-center py-3 border-b border-t-[2px] border-[#F2F2F2]">
      <div className="px-6 lg:px-0 content-container items-center flex gap-3 whitespace-nowrap lg:justify-center max-w-[1440px]">
        <Link href="/profile" className="content profile">
          Profile
        </Link>
        {likedProducts.length > 0 ? (
          <Link href="/profile/favorites" className="content favorites ">
            Favourites{" "}
            <div className="pl-2">
              <span class="f-active">{likedProducts.length}</span>
            </div>
          </Link>
        ) : (
          <Link href="/profile/favorites" className="content favorites ">
            Favourites
          </Link>
        )}
        <div className="content">
          {1 == 1 ? (
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
        <Link href="/profile/orderhistory" className="content order-history">
          Order History
        </Link>
        <Link href="/profile/cart" className="content cart">
          Cart
        </Link>
      </div>
    </nav>
  );
}
