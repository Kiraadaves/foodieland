import React from "react";
import { Images } from "../collections";

const Recipes = () => {
  return (
    <section className="px-[118px] flex flex-col gap-12">
      <div className="flex flex-col gap-8 justify-center items-center">
        <h1 className="text-[#000000] text-center text-5xl font-semibold">
          Simple and tasty recipe
        </h1>
        <p className="text-[#00000099] text-center text-base leading-7">
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
          tempor incididunt ut <br />
          labore et dolore magna aliqut enim ad minim{" "}
        </p>
      </div>
      <div>
        <div className="bg-custom-gradient-recipe">
          <Images src="/burger.svg" className="h-[364px] w-[368px]" alt={"burger"} />
        </div>
      </div>
    </section>
  );
};

export default Recipes;
