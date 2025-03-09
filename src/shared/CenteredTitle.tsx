import { FC } from "react";

interface Props {
    title: string;
    titleSize?: string;
    text?: string;
    textSize?: string;
}

export const CenteredTitle: FC<Props> = ({ title, titleSize, text, textSize }) => {
    return (
        <div className="text-center">
            <h2 className={`font-bold ${titleSize ? titleSize : "text-5xl"}`}>{title}</h2>
            {text && <p className={`text-[#6E6D8F] content-evenly ${textSize ? textSize : "text-xl"}`}>{text}</p>}
        </div>
    );
};