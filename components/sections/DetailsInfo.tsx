import React from "react";
import Profile from "./Profile";
import { Images, Meal, PrepAndCookTime, PrintAndShare } from "../collections";
import Link from "next/link";

interface DetailsProps {
  heading: string;
  prepTime: string;
  cookTime: string;
  meal: string;
  src: string;
}

const nutritionInfo = [
  {
    id: 0,
    name: "Calorie",
    amount: "219.9kcal",
  },
  {
    id: 1,
    name: "Total Fat",
    amount: "10.7g",
  },
  {
    id: 2,
    name: "Protein",
    amount: "7.9g",
  },
  {
    id: 3,
    name: "Carbohydrate",
    amount: "22.3g",
  },
  {
    id: 4,
    name: "Cholesterol",
    amount: "34.7mg",
  },
];

const DetailsInfo: React.FC<DetailsProps> = ({
  heading,
  prepTime,
  cookTime,
  meal,
  src,
}) => {
  return (
    <section className="flex flex-col gap-16 px-[68px]">
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-16">
          <h1 className="font-semibold text-[64px] leading-[77.45px] text-[#000000]">
            {heading}
          </h1>
          <div className="flex gap-8 items-center">
            <Profile />
            <div className="border-l pl-8  border-[#0000001A] border-solid">
              <PrepAndCookTime heading={"PREP TIME"} time={prepTime} />
            </div>
            <div className="px-8 border-l border-r border-[#0000001A] border-solid">
              <PrepAndCookTime heading={"COOK TIME"} time={cookTime} />
            </div>
            <Meal meal={meal} />
          </div>
        </div>
        <div className=" flex">
          <PrintAndShare text={"PRINT"} icon={"/printer.svg"} />
          <PrintAndShare text={"SHARE"} icon={"/share.svg"} />
        </div>
      </div>
      <div className="flex gap-8 relative">
        <Link href={"/"} className="absolute top-[37%] left-[28%]">
          <Images src={"/playicon.svg"} className={" w-28 h-28 "} alt={""} />
        </Link>
        <Images
          src={src}
          className={"w-2/3 h-[600px] rounded-[64px]"}
          alt={""}
        />
        <div className="flex flex-col p-6 justify-between w-1/3 h-[600px] bg-[#E7FAFE] rounded-[24px]">
          <div className="flex flex-col gap-7">
            <h1 className="text-[#000000] font-semibold text-2xl">
              Nutrition Information
            </h1>
            <div className="flex flex-col gap-8">
              {nutritionInfo.map((i) => (
                <div
                  key={i.id}
                  className="pb-3 border-b border-solid border-[#0000001A] flex justify-between"
                >
                  <p className="font-medium text-[#00000099] text-lg leading-[21.78px]">
                    {i.name}
                  </p>
                  <p className="font-medium text-[#000000]">{i.amount}</p>
                </div>
              ))}
            </div>
          </div>
          <p className="text-center text-base leading-7 text-[#00000099]">
            adipiscing elit, sed do eiusmod tempor
            <br /> incididunt ut labore et dolore magna aliqua.{" "}
          </p>
        </div>
      </div>
      <p className="text-left text-base leading-7 text-[#00000099]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud <br />
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur.
        <br /> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
        officia deserunt mollit anim id est laborum.
      </p>
    </section>
  );
};

export default DetailsInfo;
