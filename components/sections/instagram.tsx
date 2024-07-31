import React from "react";
import { Button } from "../ui/button";
import { Images } from "../collections";
import Link from "next/link";
import { Instagram2 } from "../svg";

const images = [
  {
    src: "/post1.svg",
  },
  {
    src: "/post2.svg",
  },
  {
    src: "/post3.svg",
  },
  {
    src: "/post4.svg",
  },
];

const Instagram = () => {
  return (
    <section className="px-[118px] pb-20 flex flex-col gap-20 bg-custom-gradient-recipe">
      <div className="flex flex-col gap-4">
        <h1 className="text-[#000000] text-5xl leading-[58.09px] font-semibold text-center">
          Check out @foodieland on Instagram
        </h1>
        <p className="text-[#00000099] text-base leading-7 text-center">
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore <br />
          magna aliqut enim ad minim{" "}
        </p>
      </div>
      <div className="grid grid-cols-4 gap-8">
        {images.map((i) => (
          <Images src={i.src} className={""} alt={""} />
        ))}
      </div>
      <div className="flex justify-center items-center">
        <Link
          href={"/"}
          className="bg-[#000000] text-[#ffffff] text-sm rounded-[16px] w-[229px] h-[60px] font-semibold py-6 flex justify-center gap-4 items-center"
        >
          Visit Our Instagram <Instagram2 />
        </Link>
      </div>
    </section>
  );
};

export default Instagram;
