"use client";
import React, { useState } from "react";
import { Images, Meal, Time } from "../collections";
import { Button } from "../ui/button";

interface Recipe {
  favorite: boolean;
  src: string;
  text1: string;
  text2: string;
  meal: string;
}

const recipe1: Recipe[] = [
  {
    favorite: true,
    src: "/recipe1.svg",
    text1: "Big and Juicy Wagyu Beef",
    text2: "Cheeseburger",
    meal: "Snack",
  },
  {
    favorite: false,
    src: "/recipe2.svg",
    text1: "Fresh Lime Roasted Salmon with",
    text2: "Ginger Sauce",
    meal: "Fish",
  },
  {
    favorite: true,
    src: "/recipe3.svg",
    text1: "Strawberry Oatmeal Pancake",
    text2: "with Honey Syrup",
    meal: "Breakfast",
  },
  {
    favorite: false,
    src: "/recipe4.svg",
    text1: "Fresh and Healthy Mixed",
    text2: "Mayonnaise Salad",
    meal: "Healthy",
  },
  {
    favorite: true,
    src: "/recipe5.svg",
    text1: "Chicken Meatballs with Cream",
    text2: "Cheese",
    meal: "Meat",
  },

  {
    favorite: false,
    src: "/recipe6.svg",
    text1: "Fruity Pancake with Orange &",
    text2: "Blueberry",
    meal: "Sweet",
  },
  {
    favorite: false,
    src: "/recipe7.svg",
    text1: "The Best Easy One Pot Chicken",
    text2: "and Rice",
    meal: "Snack",
  },
  {
    favorite: true,
    src: "/recipe8.svg",
    text1: "The Creamiest Creamy Chicken",
    text2: "and Bacon Pasta",
    meal: "Noodles",
  },
];

const MoreRecipes = () => {
  const [recipes, setRecipes] = useState(recipe1);

  const toggleLike = (index: number) => {
    setRecipes((prevRecipes: Recipe[]) =>
      prevRecipes.map((recipe, i) =>
        i === index ? { ...recipe, favorite: !recipe.favorite } : recipe
      )
    );
  };

  return (
    <section className="px-[118px] flex flex-col gap-12">
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
              key={index}
              className=" flex justify-center gap-6  pb-8 rounded-b-[24px] relative"
            >
              <div className="flex flex-col gap-6">
                {" "}
                <Images
                  src={r.src}
                  className="h-[258px]  rounded-[28px] w-full"
                  alt={"burger"}
                />
                <p className="font-semibold text-lg text-[#000000]">
                  {r.text1}
                  <br />
                  {r.text2}
                </p>
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
                  <Images
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
