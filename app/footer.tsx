import React from "react";
import Link from "next/link";
import { Foodieland } from "@/components/svg";
import { Socials } from "@/components/links";

const Footer = () => {
  return (
    <footer className="mb-6">
      <div className="py-8 flex justify-between items-center border-b  border-solid border-[#0000001A]">
        <div className="flex flex-col gap-4">
          <Foodieland />
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet, consectetuipisicing elit,{" "}
          </p>
        </div>
        <div>
          <ul className="flex gap-12 text-[#000000] font-medium text-base">
            <li>
              <Link href="/recipe">Recipe</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/aboutus">About us</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="relative flex justify-center pt-6">
        <p className="text-lg text-gray-500">
          © 2020 Flowbase. Powered by{" "}
          <span className="text-red-500">Webflow</span>
        </p>
        <div className="absolute right-0">
          <Socials />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
