import { useMemo } from "react";

type Color = "red" | "blue" | "yellow" | "green" | "black";

const bgColorMap: Record<Color, string> = {
  red: "bg-red-600",
  blue: "bg-blue-500",
  yellow: "bg-yellow-400",
  green: "bg-green-700",
  black: "bg-black",
};
const textColorMap: Record<Color, string> = {
  red: "text-red-600",
  blue: "text-blue-500",
  yellow: "text-yellow-400",
  green: "text-green-700",
  black: "text-black",
};

interface CardProps {
  value: number | string;
  color: Color;
}
export default function Card({ value, color }: CardProps) {
  const bgColor = useMemo(() => bgColorMap[color], [color]);
  const textColor = useMemo(() => textColorMap[color], [color]);

  return (
    <div className="flex justify-center items-center w-60 aspect-[7/10] border border-gray-300 rounded-lg shadow-md">
      <div
        className={`flex justify-center items-center w-52 aspect-[7/10] rounded-md ${bgColor}`}
      >
        <div
          className={`flex justify-center items-center w-44 h-72 rounded-[50%] bg-white transform rotate-[25deg]`}
        >
          <div
            className={`transform rotate-[-25deg] numbers-font font-normal text-9xl ${textColor} text-outline`}
          >
            {value}
          </div>
        </div>
      </div>
    </div>
  );
}
