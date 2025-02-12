import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Instagram2 } from "../svg";

const images = [
  {
    src: "/post1.png",
  },
  {
    src: "/post2.png",
  },
  {
    src: "/post3.png",
  },
  {
    src: "/post4.png",
  },
];

const Instagram = () => {
  return (
    <section className="px-[68px] pb-20 flex flex-col gap-20 bg-custom-gradient-recipe">
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
        {images.map((i, index) => (
          <Image
            key={index}
            src={i.src}
            className={""}
            priority
            width={500}
            height={300}
            alt={"image"}
          />
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
