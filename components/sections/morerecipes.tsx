"use client";
import React, { useState } from "react";
import { Images, Meal, Time } from "../Collections";
import { Button } from "../ui/button";
import Link from "next/link";

interface Recipe {
  id: number;
  favorite: boolean;
  src: string;
  text1: string;
  text2: string;
  meal: string;
  detailsHeading: string;
}

export const recipe1: Recipe[] = [
  {
    id: 0,
    favorite: true,
    src: "/recipe1.svg",
    text1: "Mixed Tropical Fruit Salad with",
    text2: "Superfood Boosts",
    meal: "Health",
    detailsHeading: "Mixed Tropical Fruit Salad",
  },
  {
    id: 1,
    favorite: false,
    src: "/recipe2.svg",
    text1: "Big and Juicy Wagyu Beef",
    text2: "Cheeseburger",
    meal: "Western",
    detailsHeading: "Juicy Wagyu Beef Cheeseburger",
  },
  {
    id: 2,
    favorite: true,
    src: "/recipe3.svg",
    text1: "Healthy Japanese Fried Rice with",
    text2: "Asparagus",
    meal: "Healthy",
    detailsHeading: "Healthy Japanese Fried Rice",
  },
  {
    id: 3,
    favorite: false,
    src: "/recipe4.svg",
    text1: "Cauliflower Walnut Vegeterian Taco Meat",
    text2: "",
    meal: "Eastern",
    detailsHeading: "Cauliflower Walnut Vegeterian Taco",
  },
  {
    id: 4,
    favorite: true,
    src: "/recipe5.svg",
    text1: "Rainbow Chicken Salad with",
    text2: "Almond Honey Mustard Dressing",
    meal: "Healthy",
    detailsHeading: "Rainbow Chicken Salad",
  },

  {
    id: 5,
    favorite: false,
    src: "/recipe6.svg",
    text1: "Barbecue Spicy Sandwiches",
    text2: "with Chips",
    meal: "Snack",
    detailsHeading: "Barbecue Spicy Sandwiches with Chips",
  },
  {
    id: 6,
    favorite: false,
    src: "/recipe7.svg",
    text1: "Firecracker Vegan Lettuce Wraps-",
    text2: "Spicy!",
    meal: "Seafood",
    detailsHeading: "Firecracker Vegan Lettuce Wraps",
  },
  {
    id: 7,
    favorite: true,
    src: "/recipe8.svg",
    text1: "Chicken Ramen Soup with",
    text2: "Mushroom",
    meal: "Japanese",
    detailsHeading: "Chicken Ramen Soup with Mushroom",
  },
];

const MoreRecipes = () => {
  const [recipes, setRecipes] = useState(recipe1);

  const toggleLike = (id: number) => {
    setRecipes((prevRecipes: Recipe[]) =>
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
            <Link
              href={`/details/${r.id}`}
              key={r.id}
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
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default MoreRecipes;
