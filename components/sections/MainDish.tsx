import React, { useState } from "react";
import { Button } from "../ui/button";
import { Images } from "../Collections";

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
        i === id ? { ...newList, favorite: !newList.isTicked } : newList
      )
    );
  };
  return (
    <div className="flex flex-col gap-8">
      <h1>Ingredients</h1>
      <div>
        <p>For main dish</p>
        {list.map((i, index) => (
          <Button onClick={() => toggleTicked(index)} key={i.id}>
            <Images src={""} className={""} alt={""} />
            <p className={``}>{i.text}</p>
          </Button>
        ))}
      </div>
      <div>
        <p>For the sauce</p>
      </div>
    </div>
  );
};

export default MainDish;
