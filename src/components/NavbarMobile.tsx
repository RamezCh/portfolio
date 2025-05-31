import { useState } from "react";
import { SmoothLink } from "../shared/SmoothLink.tsx";
import { navLinks } from "../data.ts";
import Button from "../shared/Button.tsx";

export const NavbarMobile = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className="flex justify-between items-center mx-0 p-[1.5%] top-0 fixed bg-white w-full z-50 shadow-sm border-b border-gray-100 transition-all duration-300">
            {/* Logo */}
            <h1 className="font-vampiro gradient-text text-4xl transition-transform duration-300 hover:scale-105">{'<R_Ch/>'}</h1>

            {/* Dropdown Menu for mobile screens */}
            <div className="relative">
                <button
                    onClick={toggleDropdown}
                    className="flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none transition-all duration-300"
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
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50 animate-fade-in-down border border-gray-100">
                        <div className="flex flex-col p-4 gap-3">
                            { navLinks.map((info) => <SmoothLink key={info.name} link={info.dest} onClick={() => setIsDropdownOpen(false)}>
                                <span className="hover:text-[#7051EF] font-medium py-1 transition-all duration-300 ease-in-out hover:underline hover:underline-offset-4">
                                    {info.name}
                                </span>
                            </SmoothLink>)}
                            <div className="mt-2 pt-2 border-t border-gray-100">
                                <SmoothLink link="contact" onClick={() => setIsDropdownOpen(false)}>
                                    <Button text="Contact Me" isPrimary={true} isSmall={true} />
                                </SmoothLink>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
