import React from "react";
import Image from "next/image";
import { Rectangle6, HotRecipes, Rectangle5 } from "@/components/svg";
import { Images, Meal, Time } from "@/components/collections";
import { Button } from "@/components/ui/button";
import Categories from "@/components/sections/categories";
import Recipes from "@/components/sections/recipes";
import LearnMore from "@/components/sections/learnmore";
import Instagram from "@/components/sections/instagram";
import MoreRecipes from "@/components/sections/morerecipes";
import Subscribe from "@/components/sections/subscribe";

const HomePage = () => {
  return (
    <main className="flex min-h-screen flex-col gap-16">
      <section className="flex justify-between">
        <div className="py-8">
          <Rectangle6 />
        </div>
        <div className="flex w-[1280px]">
          <div className="relative w-1/2 bg-[#E7FAFE] rounded-l-[48px]">
            <div className="absolute top-16 left-16 flex flex-col gap-16 justify-between">
              <div className="flex flex-col gap-6">
                <div className="flex bg-[#ffffff] rounded-[30px] py-4 px-6 gap-4 w-[170px]">
                  <HotRecipes />
                  <p className="text-[#000000] text-sm font-semibold">
                    Hot Recipes
                  </p>
                </div>
                <p className="text-[#000000] text-[64px] leading-[77.45px] font-semibold">
                  Spicy delicious <br />
                  chicken wings
                </p>{" "}
                <p className="text-[#00000099] text-base leading-7">
                  Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
                  eiusmod <br /> tempor incididunt ut labore et dolore magna
                  aliqut enim ad minim{" "}
                </p>
                <div className="flex gap-6">
                  <span className="rounded-[30px] bg-[#0000000D] px-4 py-2">
                    <Time time="30" />
                  </span>{" "}
                  <span className="rounded-[30px] bg-[#0000000D] px-4 py-2">
                    <Meal meal="Chicken" />
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Images
                    src="/johnsmith.svg"
                    alt="John Smith"
                    className="h-8 w-8"
                  />
                  <div>
                    <p className="text-[#000000] text-base font-bold">
                      John Smith
                    </p>
                    <p className="text-[#00000099] font-medium text-sm">
                      15 March 2022
                    </p>
                  </div>
                </div>
                <Button className="flex gap-4 py-6 px-6 rounded-[16px]">
                  <p>View Recipes</p>{" "}
                  <Images
                    src="/playcircle.svg"
                    alt="Play Circle"
                    className="h-4 w-4"
                  />
                </Button>
              </div>
            </div>
          </div>
          <div className="w-1/2">
            <Image
              src="/mask-group.png"
              alt=""
              width={500}
              height={500}
              priority
              className="h-full w-full"
            />
          </div>
        </div>
        <div className="py-8">
          <Rectangle5 />
        </div>
      </section>
      <Categories />
      <Recipes />
      <LearnMore />
      <Instagram />
      <MoreRecipes />
      <Subscribe />
    </main>
  );
};

export default HomePage;
