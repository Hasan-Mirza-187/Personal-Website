import Image from "next/image";

const Services = () => {
  return (
    <div className="flex h-full w-full flex-col text-white bg-slate-600 justify-center items-center">
      <div className="h-12 flex justify-center items-center py-6 pt-10">
        <h1 className="text-3xl text-center font-bold pt-6">
          Engineer, Code & Bake!
        </h1>
      </div>
      <div className="container flex justify-center items-center py-12 h-auto w-[60%] md:w-96">
        <Image
          className="h-[100%] w-auto "
          src="/service.png"
          width={1500}
          height={1500}
          alt="Picture of the author"
        />
      </div>
      <div className="h-auto pb-8 px-4">
        <h1 className="font-bold text-3xl text-justify py-6 ">
          Mastering the perfect blend of innovation, design, and deliciousness.
        </h1>
        <p className="font-bold text-xl px-3 pt-6 text-justify">
          Engineering:
          <ul className="py-2 font-normal text-base">
            <li className="px-3 py-1">Microprocessors</li>
            <li className="px-3 py-1">FPGA based systems</li>
            <li className="px-3 py-1">IOT systems</li>
            <li className="px-3 py-1">PCB Designing</li>
          </ul>
        </p>
        <p className="font-bold text-xl px-3 pt-6 text-justify">
          Web Designing:
          <ul className="py-2 font-normal text-base">
            <li className="px-3 py-1">Next JS</li>
            <li className="px-3 py-1">React</li>
            <li className="px-3 py-1">Typescript</li>
            <li className="px-3 py-1">Tailwind</li>
          </ul>
        </p>
        <p className="font-bold text-xl px-3 pt-6 text-justify">
          Baking:
          <ul className="py-2 font-normal text-base">
            <li className="px-3 py-1">Customised cakes</li>
            <li className="px-3 py-1">Brownies</li>
            <li className="px-3 py-1">Danish Butter cookies</li>
            <li className="px-3 py-1">Lasagna</li>
          </ul>
        </p>
      </div>
    </div>
  );
};
export default Services;
