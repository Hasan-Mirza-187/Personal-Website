import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "../views/navBar";
import Footer from "@/views/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hasan Mumtaz Mirza",
  description: "Created by Hasanmirza",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex">
          <div className="w-1/4 sm:w-[150px]">
            <Navbar />
          </div>
          <div className="flex w-3/4 sm:w-[100%]">{children}</div>
        </div>
      </body>
    </html>
  );
}
