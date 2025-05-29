import { FC } from "react";
import {CircleWithChevronProps} from "../types.ts";

const CircleWithChevron: FC<CircleWithChevronProps> = ({ direction, enabled, onClick }) => {
    const baseButtonStyle = "flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 border-2 border-[#D1E4FA] rounded-full transition-all duration-300 shadow-sm hover:shadow-md";
    const conditionButtonStyle = enabled ? "bg-gradient-to-r from-[#8D74F2] to-[#7051EF] hover:from-[#7B5FEE] hover:to-[#5A3FEC]"
        : "bg-white cursor-not-allowed";
    const buttonStyle = baseButtonStyle + " " + conditionButtonStyle;

    const baseSpanStyle = "text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium transition-all duration-300";
    const conditionSpanStyle = enabled ? "text-white" : "text-black";
    const spanStyle = baseSpanStyle + " " + conditionSpanStyle;


    return (
        <button onClick={onClick} className={buttonStyle} disabled={!enabled}>
          <span className={spanStyle}>
            {direction === "left" ? "<" : ">"}
          </span>
        </button>
    );
};

export default CircleWithChevron;
