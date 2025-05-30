import { FC } from "react";
import {CenteredTitleProps} from "../types.ts";

export const CenteredTitle: FC<CenteredTitleProps> = ({ title, titleSize, text, textSize }) => {
    return (
        <div className="text-center transition-all duration-300 animate-fade-in">
            <h2 className={`font-bold ${titleSize ?? "text-3xl sm:text-4xl md:text-5xl"} mb-3 sm:mb-4 tracking-wide leading-tight transition-all duration-200 hover:text-[#7051EF]/90`}>
                {title}
            </h2>
            {text && 
                <p className={`text-[#6E6D8F] ${textSize ?? "text-base sm:text-lg md:text-xl"} max-w-3xl mx-auto leading-relaxed transition-all duration-200 hover:text-gray-800/90 animate-fade-in`}>
                    {text}
                </p>
            }
        </div>
    );
};
