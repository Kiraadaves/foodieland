"use client";
import React, { useState } from "react";
import { Meal, Time } from "../collections";
import Image from "next/image";
import { Button } from "../ui/button";
import { combinedRecipes } from "../array";
import Link from "next/link";

interface Id {
  id: string;
}

const Recipes: React.FC<Id> = ({ id }) => {
  const [recipes, setRecipes] = useState(combinedRecipes[0]);

  const toggleLike = (index: number) => {
    setRecipes((prevRecipes) =>
      prevRecipes.map((recipe, i) =>
        i === index ? { ...recipe, favorite: !recipe.favorite } : recipe
      )
    );
  };

  return (
    <section id={id} className="scroll-smoth px-[68px] flex flex-col gap-12">
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
      <div className="grid grid-cols-3 gap-8">
        {recipes.map((r, index) => {
          if (index === 5) {
            return (
              <Image
                width={500}
                height={300}
                priority
                key={index}
                src={r.src}
                className={""}
                alt={"image"}
              />
            );
          }
          return (
            <div
              key={index}
              className="bg-custom-gradient-recipe flex justify-center gap-6  pb-8 rounded-b-[24px] relative"
            >
              <div className="flex flex-col gap-6">
                {" "}
                <Image
                  width={500}
                  height={300}
                  priority
                  src={r.src}
                  className="h-[258px]  rounded-[28px] w-full"
                  alt={"burger"}
                />
                <Link
                  href={`/details/${r.name}`}
                  className="font-semibold text-2xl text-[#000000]"
                >
                  {r.text1}
                  <br />
                  {r.text2}
                </Link>
                <div className="flex gap-8">
                  <Time time={"30"} />
                  <Meal meal={r.meal || "Meal"} />
                </div>
              </div>
              <Button
                onClick={() => toggleLike(index)}
                className="bg-transparent absolute right-7 top-6"
              >
                <div className="h-10 w-10 bg-[#ffffff] rounded-full  flex justify-center items-center">
                  <Image
                    width={500}
                    height={300}
                    priority
                    src={r.favorite ? "/redlove.svg" : "/love.svg"}
                    className={" h-4 w-4"}
                    alt={"favorite"}
                  />
                </div>
              </Button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Recipes;
