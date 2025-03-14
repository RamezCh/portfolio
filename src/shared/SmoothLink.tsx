import { Link } from 'react-scroll';
import {FC} from "react";
import {SmoothLinkProps} from "../types.ts";

export const SmoothLink: FC<SmoothLinkProps> = ({ children, link }) => {
    return (
        <Link to={link} smooth={true} duration={500} spy={true} activeClass="active" className= "hover:cursor-pointer">
            {children}
        </Link>
    );
};