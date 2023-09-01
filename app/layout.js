import { Inter } from "next/font/google";
import ProviderTwo from "@/components/provider";
import "./globals.css";

import ReduxProvider from "@/components/redux/ReduxProvider";

export const metadata = {
  title: "Dunia ",
  description: "Created by Howard Otuya",
};

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <ProviderTwo>
          <body >
            <ReduxProvider>{children}</ReduxProvider>
          </body>
        </ProviderTwo>
      </html>
    </>
  );
}
