import { Link } from 'react-scroll';
import {FC, ReactNode} from "react";

interface SmoothLinkProps {
    children: ReactNode;
    link: string;
}

export const SmoothLink: FC<SmoothLinkProps> = ({ children, link }) => {
    return (
        <Link to={link} smooth={true} duration={500} spy={true} activeClass="active" className= "hover:cursor-pointer">
            {children}
        </Link>
    );
};