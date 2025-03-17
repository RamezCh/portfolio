import { ProjectCardProps } from "../types.ts";
import { FC } from "react";
import Button from "./Button.tsx";

export const ProjectCard: FC<ProjectCardProps> = ({ demo, code, imageURL, title, description }) => {
    return (
        <div className="rounded-lg overflow-hidden shadow-lg bg-white flex flex-col w-full max-w-sm h-[450px]">
            {/* Image Section */}
            <div className="w-full h-48">
                <img className="w-full h-full object-fill" src={imageURL} alt={title} />
            </div>

            {/* Content Section */}
            <div className="flex flex-col flex-grow p-4 justify-between">
                <div>
                    <h2 className="font-bold text-xl mb-2">{title}</h2>
                    <p className="text-gray-700 text-sm">{description}</p>
                </div>

                {/* Buttons */}
                <div className="flex space-x-4 mt-4">
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