import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    name: "Breakfast",
    src: "/breakfast.svg",
    className:
      "flex flex-col justify-center items-center bg-custom-gradient-breakfast  rounded-b-[16px] px-10 relative h-1/2",
    alt: "breakfast",
    link: "/breakfast",
  },
  {
    name: "Vegan",
    src: "/vegan.svg",
    className:
      "flex flex-col justify-center items-center bg-custom-gradient-vegan rounded-b-[16px] p-10 relative ",
    alt: "vegan",
    link: "/vegan",
  },
  {
    name: "Meat",
    src: "/meat.svg",
    className:
      "flex flex-col justify-center items-center bg-custom-gradient-meat rounded-b-[16px] p-10 relative",
    alt: "meat",
    link: "/meat",
  },
  {
    name: "Dessert",
    src: "/dessert.svg",
    className:
      "flex flex-col justify-center items-center bg-custom-gradient-dessert rounded-b-[16px] p-10 relative",
    alt: "dessert",
    link: "/dessert",
  },
  {
    name: "Lunch",
    src: "/lunch.svg",
    className:
      "flex flex-col justify-center items-center bg-custom-gradient-lunch rounded-b-[16px] p-10 relative",
    alt: "lunch",
    link: "/lunch",
  },
  {
    name: "Chocolate",
    src: "/chocolate.svg",
    className:
      "flex flex-col justify-center items-center bg-custom-gradient-chocolate rounded-b-[16px] p-10 relative",
    alt: "chocolate",
    link: "/chocolate",
  },
];

const Categories = () => {
  return (
    <section className="px-[68px] flex flex-col gap-12">
      <div className="flex justify-between items-center">
        <p className="font-semibold text-5xl">Categories</p>
        <Button className="bg-[#E7FAFE] hover:bg-[#E7FAFE] rounded-[16px] text-base text-black font-semibold p-6 ">
          View All Categories
        </Button>
      </div>
      <div className="grid grid-cols-6 gap-8">
        {categories.map((category) => (
          <Link
            href={category.link}
            key={category.name}
            className="flex flex-col justify-end relative h-64"
          >
            <div className={category.className}>
              {" "}
              <div className="flex flex-col  justify-between h-48 absolute bottom-[20%]">
                {" "}
                <Image
                 width={500}
                  height={300}
                  priority
                  src={category.src}
                  alt={category.alt}
                  className={"h-[7.5rem] w-[7.5rem]  "}
                />
                <p className="text-center  text-lg font-semibold">
                  {category.name}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Categories;
