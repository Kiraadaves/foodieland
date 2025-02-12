import { Cutlery, TimeIcon } from "./svg";
import Image from "next/image";

interface PrintAndShareProps {
  text: string;
  icon: string;
}

interface TimeProps {
  time: string;
}

interface MealProps {
  meal: string;
}

interface PrepAndCookTimeProps {
  heading: string;
  time: string;
}

export const Time: React.FC<TimeProps> = ({ time }) => {
  return (
    <p className="flex items-center gap-3 font-medium text-[#00000099] text-sm ">
      <span>
        <TimeIcon />
      </span>{" "}
      {time} Minutes
    </p>
  );
};

export const Meal: React.FC<MealProps> = ({ meal }) => {
  return (
    <p className="flex items-center gap-3 font-medium text-[#00000099] text-sm ">
      <span>
        <Cutlery />
      </span>{" "}
      {meal}
    </p>
  );
};

export const PrepAndCookTime: React.FC<PrepAndCookTimeProps> = ({
  time,
  heading,
}) => {
  return (
    <div className="flex items-center gap-4">
      <TimeIcon />{" "}
      <div className="flex flex-col gap-2">
        <p className="text-[#000000] text-xs font-medium">{heading}</p>
        <p className="text-[#00000099] font-medium text-sm">{time} Minutes</p>
      </div>
    </div>
  );
};

export const PrintAndShare: React.FC<PrintAndShareProps> = ({ text, icon }) => {
  return (
    <button className="relative flex flex-col items-center gap-4 w-24">
      <div className="h-16 w-16 bg-[#E7FAFE] rounded-full  flex justify-center items-center">
        <Image
          priority
          width={500}
          height={300}
          src={icon}
          className={" h-4 w-4"}
          alt={"favorite"}
        />
      </div>
      <p className="text-[#000000] font-medium text-xs text-center">{text}</p>
    </button>
  );
};

export const Unticked = () => {
  return (
    <Image
      priority
      width={500}
      height={300}
      src={"/unticked.svg"}
      className={"w-5 h-5"}
      alt={"bulletpoint"}
    />
  );
};

export const Ticked = () => {
  return (
    <Image
      priority
      width={500}
      height={300}
      src={"/ticked.svg"}
      className={"w-5 h-5"}
      alt={"bulletpoint"}
    />
  );
};
