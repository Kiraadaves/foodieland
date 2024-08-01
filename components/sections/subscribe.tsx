import React from "react";
import { Button } from "../ui/button";
import { Images } from "../Collections";

const Subscribe = () => {
  return (
    <section className="px-[68px] ">
      <div className="bg-[#E7F9FD] relative rounded-[60px] py-16 flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <h1 className="text-[#000000] text-5xl leading-[58.09px] font-semibold text-center">
            Deliciousness to your inbox
          </h1>
          <p className="text-[#00000099] text-base leading-7 text-center">
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
            tempor
            <br /> incididunt ut labore et dolore magna aliqut enim ad minim{" "}
          </p>
        </div>
        <form className=" flex justify-center items-center">
          <div className="w-[480px] bg-[#ffffff] p-2 rounded-[24px]">
            <input
              placeholder="Your email address..."
              className="pl-4 w-2/3 placeholder:text-sm placeholder:text-[#00000066] font-medium"
            />
            <Button className="w-1/3 rounded-[16px] py-7 text-[#ffffff] text-sm font-semibold">
              Subscribe
            </Button>
          </div>
        </form>
        <Images
          src={"/right.svg"}
          className={"absolute right-0 bottom-0 h-48 w-48 rounded-br-[60px]"}
          alt={""}
        />
        <Images
          src={"/left.svg"}
          className={"absolute left-0 bottom-0 h-64 w-64 rounded-bl-[60px]"}
          alt={""}
        />
      </div>
    </section>
  );
};

export default Subscribe;
