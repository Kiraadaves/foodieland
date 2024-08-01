import React, { useState } from "react";
import { Ticked, Unticked } from "../Collections";

interface List {
  isTicked: boolean;
  text: string;
  id: number;
}

const lorem = [
  {
    isTicked: true,
    text: "Lorem ipsum dolor sit amet",
    id: 0,
  },
  {
    isTicked: false,
    text: "Lorem ipsum dolor sit amet",
    id: 1,
  },
  {
    isTicked: false,
    text: "Lorem ipsum dolor sit amet",
    id: 2,
  },
  {
    isTicked: false,
    text: "Lorem ipsum dolor sit amet",
    id: 3,
  },
  {
    isTicked: false,
    text: "Lorem ipsum dolor sit amet",
    id: 4,
  },
];

const MainDish = () => {
  const [list, setList] = useState(lorem);

  const toggleTicked = (id: number) => {
    setList((prevList: List[]) =>
      prevList.map((newList, i) =>
        i === id ? { ...newList, isTicked: !newList.isTicked } : newList
      )
    );
  };
  return (
    <div className="flex flex-col gap-16">
      <h1 className="text-4xl text-[#000000] font-medium">Ingredients</h1>
      <div className="flex flex-col gap-6">
        <p className="text-[#000000] font-semibold text-2xl">For main dish</p>
        {list.map((i, index) => (
          <button
            onClick={() => toggleTicked(index)}
            key={i.id}
            className="bg-transparent flex items-center gap-6 border-b border-solid pb-6"
          >
            {i.isTicked ? <Ticked /> : <Unticked />}
            <p
              className={`${
                i.isTicked
                  ? "text-[#00000099] text-base line-through decoration-[#00000099]"
                  : "text-[#000000] text-lg"
              }`}
            >
              {i.text}
            </p>
          </button>
        ))}
      </div>
      <div className="flex flex-col gap-6">
        <p className="text-[#000000] font-semibold text-2xl">For the sauce</p>
        {list.slice(1, 4).map((i, index) => (
          <button
            onClick={() => toggleTicked(index)}
            key={i.id}
            className="bg-transparent flex items-center gap-6 border-b border-solid pb-6"
          >
            {i.isTicked ? <Ticked /> : <Unticked />}
            <p
              className={`${
                i.isTicked
                  ? "text-[#00000099] text-base line-through decoration-[#00000099]"
                  : "text-[#000000] text-lg"
              }`}
            >
              {i.text}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default MainDish;
