import { ProjectCardProps } from "../types.ts";
import { FC } from "react";
import Button from "./Button.tsx";

export const ProjectCard: FC<ProjectCardProps> = ({ demo, code, imageURL, title, description }) => {
    return (
        <div className="rounded-lg overflow-hidden shadow-md bg-white flex flex-col w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px] lg:max-w-[400px] h-[385px] sm:h-[415px] md:h-[467px] lg:h-[497px] transition-all duration-300 hover:shadow-lg hover:-translate-y-1 focus-within:ring-2 focus-within:ring-[#7051EF] transform animate-fade-in group">
            {/* Image Section */}
            <div className="w-full h-32 sm:h-36 md:h-44 lg:h-48 overflow-hidden">
                <img 
                    className="w-full h-full object-cover transition-transform duration-400 hover:scale-[1.05] group-hover:scale-[1.05]" 
                    src={imageURL} 
                    alt={title} 
                />
            </div>

            {/* Content Section */}
            <div className="flex flex-col flex-grow p-4 sm:p-5 md:p-6 justify-between">
                <div>
                    <h2 className="font-bold text-lg sm:text-xl md:text-2xl mb-2 sm:mb-3 md:mb-4 transition-colors duration-300 hover:text-[#7051EF]/80 group-hover:text-[#7051EF]/90">{title}</h2>
                    <p className="text-gray-700 text-xs sm:text-sm md:text-base">{description}</p>
                </div>

                {/* Buttons */}
                <div className="flex space-x-3 sm:space-x-4 md:space-x-5 mt-4 sm:mt-5 md:mt-6 mb-1">
                    {demo && (
                        <a href={demo} target="_blank" rel="noopener noreferrer" className="flex-1">
                            <Button text="Live Demo" isPrimary={true} isSmall={true} />
                        </a>
                    )}

                    <a href={code} target="_blank" rel="noopener noreferrer" className="flex-1">
                        <Button text="Github Repo" isPrimary={!demo} isSmall={true} />
                    </a>
                </div>
            </div>
        </div>
    );
};
