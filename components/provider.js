"use client";
import { SessionProvider } from "next-auth/react";

const ProviderTwo = ({ children, session }) => {
  return <SessionProvider session={session}>
    {children}
    </SessionProvider>;
};

export default ProviderTwo