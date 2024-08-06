"use client";
import React, { useState } from "react";
import { Meal, Time } from "../collections";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { combinedRecipes } from "../array";

const MoreRecipes = () => {
  const [recipes, setRecipes] = useState(combinedRecipes[1]);

  const toggleLike = (id: number) => {
    setRecipes((prevRecipes) =>
      prevRecipes.map((recipe, i) =>
        i === id ? { ...recipe, favorite: !recipe.favorite } : recipe
      )
    );
  };

  return (
    <section className="px-[68px] flex flex-col gap-12">
      <div className="flex  gap-8 justify-between">
        <h1 className="text-[#000000] text-left text-5xl font-semibold">
          Try this delicious recipe <br />
          to make your day
        </h1>
        <div className="flex items-center">
          <p className="text-[#00000099] text-left text-base leading-7 py-2">
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
            tempor <br />
            incididunt ut labore et dolore magna aliqut enim ad minim{" "}
          </p>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-8">
        {recipes.map((r, index) => {
          return (
            <div
              key={r.id}
              className=" flex justify-center gap-6  pb-8 rounded-b-[24px] relative"
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
                  className="font-semibold text-lg text-[#000000]"
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
                className="bg-transparent absolute right-2 top-6"
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

export default MoreRecipes;
