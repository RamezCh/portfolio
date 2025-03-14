import { FC } from "react";
import {CenteredTitleProps} from "../types.ts";

export const CenteredTitle: FC<CenteredTitleProps> = ({ title, titleSize, text, textSize }) => {
    return (
        <div className="text-center">
            <h2 className={`font-bold ${titleSize ?? "text-5xl"}`}>{title}</h2>
            {text && <p className={`text-[#6E6D8F] content-evenly ${textSize ?? "text-xl"}`}>{text}</p>}
        </div>
    );
};