import { FC } from "react";

interface CircleWithChevronProps {
    direction: "left" | "right";
    enabled: boolean;
    onClick: () => void;
}

const CircleWithChevron: FC<CircleWithChevronProps> = ({ direction, enabled, onClick }) => {
    return (
        <button
            onClick={onClick}
            className={`flex items-center justify-center w-22 h-22 border-2 border-[#D1E4FA] rounded-full transition-all duration-300 ${
                enabled
                    ? "bg-gradient-to-r from-[#8D74F2] to-[#7051EF] hover:from-[#7B5FEE] hover:to-[#5A3FEC]"
                    : "bg-white cursor-not-allowed"
            }`}
        >
      <span
          className={`text-2xl transition-all duration-300 ${
              enabled ? "text-white" : "text-black"
          }`}
      >
        {direction === "left" ? "<" : ">"}
      </span>
        </button>
    );
};

export default CircleWithChevron;