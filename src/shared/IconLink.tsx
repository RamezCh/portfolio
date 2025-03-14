import {FC} from "react";
import {IconLinkProps} from "../types.ts";

const IconLink: FC<IconLinkProps> = ({ icon, link, altText }) => {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer">
            <img src={icon} alt={altText} className="w-10 h-10 hover:opacity-75 transition-opacity" />
        </a>
    );
};

export default IconLink;