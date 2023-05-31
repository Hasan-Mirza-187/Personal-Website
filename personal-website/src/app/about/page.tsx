import Image from "next/image";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="flex flex-col text-white bg-slate-600 justify-center items-center">
      <div className="h-12 flex justify-center items-center">
        <h1 className="flex text-3xl text-center font-bold ">
          Hasan Mumtaz Mirza
        </h1>
      </div>
      <Button variant={"destructive"}>1</Button>
      <div className="container flex justify-center items-center py-6 h-auto w-[60%] md:w-96">
        <Image
          className="h-[100%] w-auto "
          src="/about-me2.jpg"
          width={1500}
          height={1500}
          alt="Picture of the author"
        />
      </div>
      <div className="h-auto pb-8">
        <h1 className="font-bold text-xl text-center pt-6">
          A little about me and my expertise!
        </h1>
        <p className="px-3 pt-6 text-justify">
          Welcome to my world, where the realms of electronics engineering, web
          development, and the art of baking converge to create extraordinary
          experiences. I am an electronics engineer and web developer with a
          flair for crafting innovative digital solutions.
        </p>
        <p className="px-3 pt-6 text-justify">
          With a deep understanding of NextJS, Tailwind, and TypeScript, I
          specialize in building dynamic and visually captivating websites that
          captivate users. From sleek interfaces to seamless functionalities, I
          bring together my technical expertise and creative mindset to deliver
          exceptio isl user experiences. Whether it is developing responsive
          designs or implementing cutting-edge features, I am dedicated to
          bringing your vision to life.
        </p>
        <p className="px-3 pt-6  text-justify">
          But my talents do not end with coding and web development alone. In my
          free time, I unleash my creativity in the kitchen as an enthusiastic
          baker. Fuelled by a passion for confectionery, I run a home-based
          baking business that delights taste buds and brings joy to countless
          patrons. From artisanal cakes to tantalizing pastries, each creation
          is infused with a blend of precision and artistry, reflecting my
          commitment to excellence.
        </p>
        <p className="px-3 pt-6  text-justify">
          By merging my engineering mindset with my love for baking, I offer a
          unique perspective that sets me apart in both fields. Whether I am
          designing a sleek website or experimenting with new flavor
          combinations, I approach each project with unwavering enthusiasm,
          attention to detail, and a hunger to exceed expectations.
        </p>
      </div>
    </div>
  );
};
export default About;
