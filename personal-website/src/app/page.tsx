import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <div className="main_div flex">
      
      <div className="flex flex-col h-screen w-screen text-white bg-slate-600 justify-center items-center">
        <h1 className="text-3xl  font-bold text-center">Hasan Mumtaz Mirza</h1>
        <div>
          <Image
            className=" mt-6 h-auto w-fit"
            src="/pic-2.jpg"
            width={1500}
            height={1500}
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
