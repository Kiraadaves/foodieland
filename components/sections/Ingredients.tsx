import React from "react";
import Image from "next/image";
import Link from "next/link";
import MainDish from "./MainDish";

const others = [
  {
    id: 0,
    name1: "Chicken Meatball",
    name2: "with Creamy Cheese...",
    src: "/meetballs.png",
    chef: "Andreas Paula",
  },
  {
    id: 1,
    name1: "The Creamiest",
    name2: "Creamy Chicken an...",
    src: "/pasta.png",
    chef: "Andreas Paula",
  },
  {
    id: 0,
    name1: "The Best Easy One",
    name2: "Pot Chicken and Rice",
    src: "/rice.png",
    chef: "Andreas Paula",
  },
];

const Ingredients = () => {
  return (
    <section className="px-[68px] flex gap-12 justify-between">
      <div className="w-[75%]">
        <MainDish />
      </div>
      <div className="flex flex-col gap-12 ">
        <div className="flex flex-col justify-between gap-12">
          <div className="flex flex-col gap-5">
            <h1 className="font-semibold text-[32px] text-[#000000]">
              Other Recipe
            </h1>
            <div className="flex flex-col gap-6">
              {others.map((i) => (
                <Link href={"/"} key={i.id} className="flex gap-6">
                  <Image
                    width={500}
                    height={300}
                    priority
                    src={i.src}
                    className={"w-44 rounded-[24px]"}
                    alt={"otherrecipes"}
                  />
                  <div className="flex items-center">
                    <div className="flex flex-col gap-6 ">
                      <h1 className="text-[#000000] font-semibold text-xl ">
                        {i.name1}
                        <br />
                        {i.name2}
                      </h1>
                      <p className="text-[#00000099] font-medium text-sm">
                        {i.chef}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div>
            <Image
              width={500}
              height={300}
              priority
              src={"/ads.svg"}
              className={""}
              alt={"ads"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ingredients;
