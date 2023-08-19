import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";

// IMport NextAuth.js
import { useSession, signIn, signOut } from "next-auth/react";

export default function GoogleAuth() {
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
    });
  }

  return (
    <div className="bg-white fixed top-0 bottom-0 left-0 right-0 z-[9999999999]">
      <div>
        {session ? (
          <div>
            <div>Signed In as {session.name}</div>
            <button onClick={() => signOut()}>Sign Out</button>
          </div>
        ) : (
          <div>
            <div>Not Signed In </div>
            <button onClick={() => signIn("google")}>Sign In</button>
          </div>
        )}
      </div>
    </div>
  );
}
