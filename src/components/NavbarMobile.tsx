import { useState } from "react";
import { SmoothLink } from "../shared/SmoothLink.tsx";
import { navLinks } from "../data.ts";

export const NavbarMobile = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className="flex justify-between mx-0 p-[1.5%] top-0 fixed bg-white w-full z-50 shadow-2xs">
            {/* Logo */}
            <h1 className="font-vampiro gradient-text text-4xl">{'<R_Ch/>'}</h1>

            {/* Dropdown Menu for mobile screens */}
            <div className="relative">
                <button
                    onClick={toggleDropdown}
                    className="flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16m-7 6h7"
                        ></path>
                    </svg>
                </button>

                {/* Dropdown Content */}
                {isDropdownOpen && (
                    <div className="absolute right-0 mt-1 w-48 bg-white rounded-md shadow-lg z-50">
                        <div className="flex flex-col p-7">
                            { navLinks.map((info) => <SmoothLink link={info.dest}>
                                <span className="hover:text-[#7051EF] hover:text-lg transition-all duration-500 ease-in-out">
                                    {info.name}
                                </span>
                            </SmoothLink>)}
                            <SmoothLink
                                link="contact"
                            >
                                Contact Me
                            </SmoothLink>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};