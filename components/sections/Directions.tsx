import React from "react";
import { Images, Unticked } from "../Collections";

const Directions = () => {
  return (
    <section className="px-[68px]">
      <div className="w-[68%] flex flex-col gap-12  ">
        <h1 className="text-[#000000] font-semibold text-4xl">Directions</h1>
        <div className="flex gap-4 items-baseline w-full pb-12 border-b border-solid border-[#0000001A] ">
          <Unticked />
          <div className="flex flex-col gap-8 w-[95%]">
            <h1 className="text-[#000000] font-semibold text-2xl">
              1. Lorem ipsum dolor sit amet{" "}
            </h1>
            <p className="text-[#00000099] text-left text-base leading-[26px] w-full">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni
              <br /> dolores eos qui ratione voluptatem sequi nesciunt. Neque
              porro quisquam est, qui dolorem ipsum quia dolor
              <br /> sit amet, consectetur, adipisci velit, sed quia non numquam
              eius modi tempora incidunt ut labore
              <br /> et dolore magnam aliquam quaerat voluptatem.
            </p>
            <Images src={"/directions.svg"} className={"w-full"} alt={""} />
            <p className="text-[#00000099] text-base leading-[26px]">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni
              <br /> dolores eos qui ratione voluptatem sequi nesciunt. Neque
              porro quisquam est, qui dolorem ipsum quia dolor
              <br /> sit amet, consectetur, adipisci velit, sed quia non numquam
              eius modi tempora incidunt ut labore
              <br /> et dolore magnam aliquam quaerat voluptatem.
            </p>
          </div>
        </div>

        <div className="flex gap-6 items-baseline pb-12 border-b border-solid border-[#0000001A]">
          <Unticked />
          <div className="flex flex-col gap-8">
            <h1 className="text-[#000000] font-semibold text-2xl">
              2. Lorem ipsum dolor sit amet{" "}
            </h1>
            <p className="text-[#00000099] text-base leading-[26px]">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni
              <br /> dolores eos qui ratione voluptatem sequi nesciunt. Neque
              porro quisquam est, qui dolorem ipsum quia dolor
              <br /> sit amet, consectetur, adipisci velit, sed quia non numquam
              eius modi tempora incidunt ut labore
              <br /> et dolore magnam aliquam quaerat voluptatem.
            </p>
          </div>
        </div>
        <div className="flex gap-6 items-baseline pb-12 border-b border-solid border-[#0000001A]">
          <Unticked />
          <div className="flex flex-col gap-8">
            <h1 className="text-[#000000] font-semibold text-2xl">
              3. Lorem ipsum dolor sit amet{" "}
            </h1>
            <p className="text-[#00000099] text-base leading-[26px]">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni
              <br /> dolores eos qui ratione voluptatem sequi nesciunt. Neque
              porro quisquam est, qui dolorem ipsum quia dolor
              <br /> sit amet, consectetur, adipisci velit, sed quia non numquam
              eius modi tempora incidunt ut labore
              <br /> et dolore magnam aliquam quaerat voluptatem.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Directions;
