"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useSession, signIn, signOut } from "next-auth/react";
import fb from "@/public/images/fb.png";
import { useDispatch } from "react-redux";
import { updateAuth } from "./redux/products/authSlice";

export default function FacebookAuth() {
  const router = useRouter();
  const dispatch = useDispatch();
  // URL
  const url = process.env.NEXT_PUBLIC_BASE_URL + "/auth/oauth";

  // Header Definition
  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  const config = {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };

  // calling NextAuth.js for Facebook
  const { data: session, status } = useSession();
  
  const yuno = () => {
    console.log(session);

    const body = {
      oauth: session.provider,
      oauth_id: session.sub,
      name: session.name,
      email: session.email,
    };

    axios.post(url, body, config).then((response) => {
      console.log(response.data);
      localStorage.setItem("user-auth", JSON.stringify(response.data));
      localStorage.setItem("auth-method", session.provider);
      dispatch(updateAuth(session.provider));
    });
  }

  if (status == "authenticated") {
    yuno();
  }

  return (
    <div
      onClick={() => signIn("facebook")}
      className="flex cursor-pointer justify-center whitespace-nowrap rounded-full gap-[5px] items-center w-full max-w-[389px] px-[61px] py-5 border-[1.5px] border-[#d9d9d9]"
    >
      <Image className="w-4 h-4" src={fb} alt="Facebook Icon" />
      <span className="font-medium leading-[18px]">Continue with Facebook</span>
    </div>
  );
}
