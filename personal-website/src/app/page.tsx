import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div>
        <h1 className="text-3xl font-bold text-center">Hasan Mumtaz Mirza</h1>
        <h2 className="font-bold text-center pt-6">
          Welcome to my personal website!
        </h2>
      </div>

      <div>
        <div className="grid grid-flow-col auto-cols-max gap-4 place-content-center h-20 place-items-center">
          <div>
            <Link className="font-bold bg-green-700" href="/about">
              About Me
            </Link>
          </div>
          <div>
            <Link className="font-bold bg-rose-700" href="/services">
              Services
            </Link>
          </div>
          <div>
            <Link className="font-bold bg-blue-700" href="/contact-us">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
