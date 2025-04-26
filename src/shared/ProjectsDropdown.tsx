import { FC, useState } from "react";
import { ProjectsDropdownProps } from "../types.ts";

const categories = ["All", "Frontend", "Backend", "Full-Stack", "AI/ML"];

export const ProjectsDropdown: FC<ProjectsDropdownProps> = ({ selectedType, setSelectedType }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative w-48">
            {/* Dropdown Button */}
            <button
                className="w-full px-4 py-2 text-left border rounded-lg shadow-md focus:outline-none"
                style={{
                    background: "linear-gradient(to bottom right, #8D74F2, #7051EF)",
                    color: "rgba(255, 255, 255, 0.83)"
                }}
                onClick={() => setIsOpen(!isOpen)}
            >
                {selectedType}
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
                <ul
                    className="absolute left-0 w-full mt-2 border rounded-lg shadow-md z-10"
                    style={{
                        background: "linear-gradient(to bottom right, #8D74F2, #7051EF)",
                        color: "rgba(255, 255, 255, 0.83)"
                    }}
                >
                    {categories.map((category) => (
                        <li
                            key={category}
                            className="px-4 py-2 cursor-pointer hover:bg-purple-700 hover:text-white"
                            style={{
                                color: selectedType === category ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0.83)"
                            }}
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