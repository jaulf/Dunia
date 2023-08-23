import ProviderTwo from "@/components/provider";
import "./globals.css";
import { Inter } from "next/font/google";
import ReduxProvider from "@/components/redux/ReduxProvider";

const inter = Inter({
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Dunia ",
  description: "Created by Howard Otuya",
};

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <ProviderTwo>
          <body className={inter.className}>
            <ReduxProvider>{children}</ReduxProvider>
          </body>
        </ProviderTwo>
      </html>
    </>
  );
}
