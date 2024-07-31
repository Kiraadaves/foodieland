import { Cutlery, TimeIcon } from "./svg";
import Image from "next/image";
import { Button } from "./ui/button";


interface TimeProps {
  time: string;
}

interface MealProps {
  meal: string;
}

interface ImageProps {
  src: string;
  className: string;
  alt: string;
}

export const Images: React.FC<ImageProps> = ({ src, className, alt }) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={500}
      height={500}
      priority
      className={className}
    />
  );
};

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
