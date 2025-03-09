import {FC, ReactNode} from "react";

interface Props {
    title: string;
    titleSize?: string;
    subtitle?: string;
    subtitleSize?: string;
    text?: string;
    children?: ReactNode;
}

export const Card: FC<Props> = ({ title, titleSize, subtitle, subtitleSize, text, children }) => {
    return (
        <div>
            <h2 className={"font-bold " + titleSize}>{title}</h2>
            {subtitle && <h3 className={"strong-gradient-text " + subtitleSize}>{subtitle}</h3>}
            {text && <p className="text-[#6E6D8F] content-evenly text-2xl">{text}</p>}
            {children}
        </div>
    );
};