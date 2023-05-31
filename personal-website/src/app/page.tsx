import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col text-white bg-slate-600 justify-center items-center">
      <div className="h-12 flex justify-center items-center">
        <h1 className="flex text-3xl text-center font-bold ">
          Hasan Mumtaz Mirza
        </h1>
      </div>
      <div className="container flex justify-center items-center py-6 h-auto w-[60%] md:w-96">
        <Image
          className="h-[100%] w-auto "
          src="/pic-2.jpg"
          width={1500}
          height={1500}
          alt="Picture of the author"
        />
      </div>
      <div className="h-auto pb-8">
        <h1 className="font-bold text-xl text-center pt-6">
          Welcome to my personal website!
        </h1>
        <p className="px-3 pt-6 text-justify">
          I am an electronics engineer and web developer with a passion for
          creating innovative digital solutions. With expertise in NextJS,
          Tailwind, and TypeScript, I thrive on building dynamic and visually
          appealing websites that deliver exceptional user experiences.
        </p>
        <p className="px-3 pt-6 text-justify">
          Beyond my technical prowess, I have a hidden talent that brings
          sweetness to lives— I am an enthusiastic baker! I run a home-based
          baking business where I pour my creativity and love for confectionery
          into crafting delectable treats. From artisanal cakes to mouthwatering
          pastries, I take pride in infusing my creations with a sprinkle of
          joy.
        </p>
        <p className="px-3 pt-6  text-justify">
          Combining my engineering mindset with my baking passion, I strive to
          bring the same level of precision, attention to detail, and creativity
          to both domains. Whether I am tackling complex coding challenges or
          perfecting the balance of flavors in a new recipe, I approach each
          endeavor with enthusiasm, dedication, and a hunger for excellence.
        </p>
      </div>
    </div>
  );
}
