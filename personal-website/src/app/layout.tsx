import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./navBar";

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
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
