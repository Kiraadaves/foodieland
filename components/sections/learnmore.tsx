import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";

const LearnMore = () => {
  return (
    <section className="px-[68px] flex justify-between">
      <div className="w-1/2 flex items-center">
        <div className="flex gap-8 flex-col">
          <h1 className="font-semibold text-[#000000] text-5xl leading-[58.09px] ">
            Everyone can be a <br />
            chef in their own kitchen
          </h1>
          <p className="text-[#00000099] text-base leading-7">
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
            <br /> eiusmod tempor incididunt ut labore et dolore magna aliqut
            enim
            <br /> ad minim{" "}
          </p>
          <Button className="w-1/3 mt-12 text-sm rounded-[16px] font-semibold py-6">
            Learn More
          </Button>
        </div>
      </div>
      <div className="w-1/2">
        <Image
          width={500}
          height={300}
          priority
          src={"/learnmore.png"}
          className={"w-full"}
          alt={"image"}
        />
      </div>
    </section>
  );
};

export default LearnMore;
