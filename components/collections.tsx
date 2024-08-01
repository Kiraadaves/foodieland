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

interface ImageProps {
  src: string;
  className: string;
  alt: string;
}

interface PrepAndCookTimeProps {
  heading: string;
  time: string;
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
    <div className="relative flex flex-col items-center gap-4 w-24">
      <div className="h-16 w-16 bg-[#E7FAFE] rounded-full  flex justify-center items-center">
        <Images src={icon} className={" h-4 w-4"} alt={"favorite"} />
      </div>
      <p className="text-[#000000] font-medium text-xs text-center">{text}</p>
    </div>
  );
};
