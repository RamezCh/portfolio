import { FC, useState } from "react";
import { ProjectsDropdownProps } from "../types.ts";

const categories = ["All", "Frontend", "Backend", "Full-Stack", "AI/ML"];

export const ProjectsDropdown: FC<ProjectsDropdownProps> = ({ selectedType, setSelectedType }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative w-full sm:max-w-[220px] mx-auto">
            {/* Dropdown Button */}
            <button
                className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-left border border-transparent rounded-md shadow-md 
                           text-white/90 font-medium tracking-wide
                           focus:outline-none focus:ring-2 focus:ring-white/60 focus:ring-opacity-50 
                           hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]"
                style={{
                    background: "linear-gradient(to bottom right, #8D74F2, #7051EF)"
                }}
                onClick={() => setIsOpen(!isOpen)}
            >
                {selectedType}
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
                <ul
                    className="absolute left-0 w-full mt-1.5 border border-purple-300/20 rounded-md shadow-lg z-10 animate-fade-in-down overflow-hidden"
                    style={{
                        background: "linear-gradient(to bottom right, #8D74F2, #7051EF)"
                    }}
                >
                    {categories.map((category) => (
                        <li
                            key={category}
                            className={`px-3 sm:px-4 py-2 cursor-pointer transition-all duration-200 
                                      hover:bg-purple-700 hover:text-white/100 hover:pl-5 sm:hover:pl-6
                                      ${selectedType === category ? 'bg-purple-700/50 text-white/100 font-medium' : 'text-white/90'}`}
                            onClick={() => {
                                setSelectedType(category);
                                setIsOpen(false);
                            }}
                        >
                            {category}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
