"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import google from "@/public/images/google.png";
import sign1 from "@/public/images/profile/facebook.png";
import sign2 from "@/public/images/profile/google.png";

// IMport NextAuth.js
import { useSession, signIn, signOut } from "next-auth/react";

export default function ProfileGoogleAuth() {
  const router = useRouter();
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

  // calling NextAuth.js for google
  const { data: session, status } = useSession();

  if (status == "authenticated") {
    console.log(session);

    const body = {
      oauth: "google",
      oauth_id: session.sub,
      name: session.name,
      email: session.email,
    };

    axios.post(url, body, config).then((response) => {
      console.log(response.data);
      localStorage.setItem("user-auth", JSON.stringify(response.data));
      localStorage.setItem("auth-method", "Google");
    });
  }

  return (
    <div
      onClick={() => signIn("google")}
      className="cursor-pointer profileHover"
    >
      <Image className="w-[18px] h-[18px]" src={sign2} alt="Google" />
      <span className=" shrink-0 connect-active">Connect with Google</span>
    </div>
  );
}
