import { useState } from "react";
import { CenteredTitle } from "../shared/CenteredTitle.tsx";
import { projects } from "../data.ts";
import { Carousel } from "../shared/Carousel.tsx";
import { ProjectCard } from "../shared/ProjectCard.tsx";
import { InputField } from "../shared/InputField.tsx";
import { ProjectsDropdown } from "../shared/ProjectsDropdown.tsx";

export const Portfolio = () => {
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [selectedType, setSelectedType] = useState<string>("All");

    // Filter projects based on type and search query
    const filteredProjects = projects.filter((project) => {
        // Handle full-stack appearing in frontend & backend
        const isFullStack = project.type === "full-stack";
        const matchesType =
            selectedType === "All" ||
            project.type === selectedType.toLowerCase() ||
            (selectedType === "Frontend" && isFullStack) ||
            (selectedType === "Backend" && isFullStack);

        const matchesSearch = searchQuery
            ? project.tech.some((tech) => tech.toLowerCase().includes(searchQuery.toLowerCase()))
            : true;

        return matchesType && matchesSearch;
    });

    return (
        <section id="portfolio" className="w-full">
            <CenteredTitle
                title="Portfolio"
                text="A collection of side projects in public repositories to learn, practice, and improve my skills"
            />

            {/* Dropdown first, then Search Bar */}
            <div className="flex flex-row justify-between px-30 gap-6 my-4">
                <ProjectsDropdown selectedType={selectedType} setSelectedType={setSelectedType} />
                <div className="w-[30%]">
                    <InputField
                        value={searchQuery}
                        setter={setSearchQuery}
                        placeholder="Enter Tech e.g. HTML.. React... Java.."
                    />
                </div>
            </div>

            {/* If no projects match, show fallback */}
            {filteredProjects.length === 0 ? (
                <div className="text-center text-gray-500 my-10 text-lg">
                    Oops! No Related Project Found, maybe in the future 🤷‍♂️
                </div>
            ) : (
                <div>
                    <div className="hidden 2xl:block">
                        <Carousel
                            numItemsPerPage={4}
                            itemsCollection={filteredProjects}
                            ReactComponent={ProjectCard}
                            key="carousel-projects"
                            containerStyle="flex flex-row items-center justify-between my-20 px-10 w-full"
                            itemContainerStyle="flex flex-row justify-center flex-nowrap gap-6 w-[90%] overflow-hidden"
                        />
                    </div>
                    <div className="hidden xl:block 2xl:hidden">
                        <Carousel
                            numItemsPerPage={3}
                            itemsCollection={filteredProjects}
                            ReactComponent={ProjectCard}
                            key="carousel-projects"
                            containerStyle="flex flex-row items-center justify-between my-20 px-10 w-full"
                            itemContainerStyle="flex flex-row justify-center flex-nowrap gap-6 w-[90%] overflow-hidden"
                        />
                    </div>
                    <div className="hidden lg:block xl:hidden">
                        <Carousel
                            numItemsPerPage={2}
                            itemsCollection={filteredProjects}
                            ReactComponent={ProjectCard}
                            key="carousel-projects"
                            containerStyle="flex flex-row items-center justify-between my-20 px-10 w-full"
                            itemContainerStyle="flex flex-row justify-center flex-nowrap gap-6 w-[90%] overflow-hidden"
                        />
                    </div>
                    <div className="lg:hidden">
                        <Carousel
                            numItemsPerPage={1}
                            itemsCollection={filteredProjects}
                            ReactComponent={ProjectCard}
                            key="carousel-projects"
                            containerStyle="flex flex-row items-center justify-between my-20 px-10 w-full"
                            itemContainerStyle="flex flex-row justify-center flex-nowrap gap-6 w-[90%] overflow-hidden"
                        />
                    </div>
                </div>
            )}
        </section>
    );
};