import { FC } from "react";
import {CircleWithChevronProps} from "../types.ts";

const CircleWithChevron: FC<CircleWithChevronProps> = ({ direction, enabled, onClick }) => {
    const baseButtonStyle = "flex items-center justify-center w-18 h-18 border-2 border-[#D1E4FA] rounded-full transition-all duration-300";
    const conditionButtonStyle = enabled ? "bg-gradient-to-r from-[#8D74F2] to-[#7051EF] hover:from-[#7B5FEE] hover:to-[#5A3FEC]"
        : "bg-white cursor-not-allowed";
    const buttonStyle = baseButtonStyle + " " + conditionButtonStyle;

    const baseSpanStyle = "text-2xl transition-all duration-300";
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