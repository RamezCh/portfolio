import { ProjectCardProps } from "../types.ts";
import { FC } from "react";
import Button from "./Button.tsx";

export const ProjectCard: FC<ProjectCardProps> = ({ demo, code, imageURL, title, description }) => {
    return (
        <div className="rounded-lg overflow-hidden shadow-md bg-white flex flex-col w-full max-w-[280px] sm:max-w-[320px] md:max-w-sm h-[350px] sm:h-[375px] md:h-[400px] lg:h-[425px] transition-all duration-300 hover:shadow-lg hover:-translate-y-1 focus-within:ring-2 focus-within:ring-[#7051EF] transform animate-fade-in group">
            {/* Image Section */}
            <div className="w-full h-32 sm:h-36 md:h-40 lg:h-44 overflow-hidden">
                <img 
                    className="w-full h-full object-fill transition-transform duration-400 hover:scale-[1.05] group-hover:scale-[1.05]" 
                    src={imageURL} 
                    alt={title} 
                />
            </div>

            {/* Content Section */}
            <div className="flex flex-col flex-grow p-3 sm:p-4 justify-between">
                <div>
                    <h2 className="font-bold text-lg sm:text-xl mb-1 sm:mb-2 transition-colors duration-300 hover:text-[#7051EF]/80 group-hover:text-[#7051EF]/90">{title}</h2>
                    <p className="text-gray-700 text-xs sm:text-sm">{description}</p>
                </div>

                {/* Buttons */}
                <div className="flex space-x-2 sm:space-x-4 mt-3 sm:mt-4">
                    {demo && (
                        <a href={demo} target="_blank" rel="noopener noreferrer">
                            <Button text="Live Demo" isPrimary={true} />
                        </a>
                    )}

                    <a href={code} target="_blank" rel="noopener noreferrer">
                        <Button text="Github Repo" isPrimary={!demo} />
                    </a>
                </div>
            </div>
        </div>
    );
};
