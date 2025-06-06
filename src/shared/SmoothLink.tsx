import { Link } from 'react-scroll';
import {FC} from "react";
import {SmoothLinkProps} from "../types.ts";

export const SmoothLink: FC<SmoothLinkProps> = ({ children, link, onClick }) => {
    const handleClick = () => {
        if (onClick) {
            onClick();
        }
    };

    return (
        <Link 
            to={link} 
            smooth={true} 
            duration={500} 
            spy={true} 
            offset={-102} 
            activeClass="active" 
            className="hover:cursor-pointer"
            onClick={handleClick}
        >
            {children}
        </Link>
    );
};
