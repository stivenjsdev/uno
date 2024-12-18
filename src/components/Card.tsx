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
      {/* card color */}
      <div
        className={`flex justify-center items-center overflow-hidden w-52 aspect-[7/10] rounded-md ${bgColor}`}
      >
        {/* oval */}
        <div
          className={`relative flex flex-wrap overflow-hidden w-48 h-72 rounded-[50%] bg-white transform rotate-[25deg]`}
        >
          {/* value */}
          <div
            className={`absolute inset-0 flex justify-center items-center rotate-[-25deg] numbers-font font-normal text-9xl ${textColor} text-outline`}
          >
            {value}
          </div>
          {/* change color bg */}
          {color === "black" && value === "" && (
            <>
              <div className="bg-red-600 w-1/2 h-1/2"></div>
              <div className="bg-blue-500 w-1/2 h-1/2"></div>
              <div className="bg-yellow-400 w-1/2 h-1/2"></div>
              <div className="bg-green-700 w-1/2 h-1/2"></div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
