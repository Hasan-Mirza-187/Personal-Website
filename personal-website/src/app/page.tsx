import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="flex space-x-4 items-center justify-center bg-slate-800 h-20">
        <div>
          <Link className="font-bold text-white bg-slate-800" href="/about">
            About Me
          </Link>
        </div>
        <div>
          <Link className="font-bold text-white bg-slate-800" href="/services">
            Services
          </Link>
        </div>
        <div>
          <Link
            className="font-bold text-white bg-slate-800"
            href="/contact-us"
          >
            Contact Us
          </Link>
        </div>
      </div>
      <div className="flex flex-col h-60 w-screen text-white bg-slate-600 justify-center items-center">
        <h1 className="text-3xl  font-bold text-center">Hasan Mumtaz Mirza</h1>
        <div>
          <Image
            className="rounded-full h-[8rem] w-[8rem] mt-4"
            src="/profile-pic.jpg"
            width={150}
            height={150}
            alt="Picture of the author"
          />
        </div>
        <h2 className="font-bold text-center pt-6">
          Welcome to my personal website!
        </h2>
      </div>
    </div>
  );
}
