import React from "react";
import { Rectangle1, Rectangle5, Rectangle6 } from "./svg";
import Image from "next/image";

const HomePage = () => {
  return (
    <main className="flex min-h-screen flex-col">
      Home
      <section className="flex justify-between">
        <Rectangle6 />
        <div className="flex w-[1280px]">
          <div className="relative w-1/2 bg-[#E7FAFE] rounded-l-[48px]">
            <div className="absolute flex flex-col justify-between">
              <div>
                <p>
                  Spicy delicious <br />
                  chicken wings
                </p>{" "}
              </div>
              <div></div>
            </div>
          </div>
          <div className="w-1/2">
            <Image
              src="/mask-group.png"
              alt=""
              width={500}
              height={500}
              priority
              className="h-full w-full"
            />
          </div>
        </div>
        <Rectangle5 />
      </section>
    </main>
  );
};

export default HomePage;
