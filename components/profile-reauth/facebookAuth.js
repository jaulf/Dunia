"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useSession, signIn, signOut } from "next-auth/react";
import fb from "@/public/images/fb.png";
import sign1 from "@/public/images/profile/facebook.png";
import sign2 from "@/public/images/profile/google.png";
import { useDispatch } from "react-redux";
import { updateAuth } from "../redux/products/authSlice";

export default function ProfileFacebookAuth() {
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

    if (status == "authenticated") {
      console.log(session);
      const body = {
        oauth: "facebook",
        oauth_id: session.sub,
        name: session.name,
        email: session.email,
      };
      axios.post(url, body, config).then((response) => {
        console.log(response.data);
        localStorage.setItem("user-auth", JSON.stringify(response.data));
        localStorage.setItem("auth-method", "Facebook");
        dispatch(updateAuth("Facebook"));
      });
    }
  
  return (
    <div
      className="cursor-pointer profileHover"
      onClick={() => signIn("facebook")}
    >
      <Image className="w-[18px] h-[18px]" src={sign1} alt="Facebook" />
      <span className=" shrink-0 connect-active">Connect with Facebook</span>
    </div>
  );
}
