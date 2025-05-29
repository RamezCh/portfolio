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
        const isAIML = project.type === "AI/ML";
        const matchesType =
            selectedType === "All" ||
            project.type === selectedType.toLowerCase() ||
            (selectedType === "Frontend" && isFullStack) ||
            (selectedType === "Backend" && isFullStack) ||
            (selectedType === "AI/ML" && isAIML);

        const matchesSearch = searchQuery
            ? project.tech.some((tech) => tech.toLowerCase().includes(searchQuery.toLowerCase()))
            : true;

        return matchesType && matchesSearch;
    });

    return (
        <section id="portfolio" className="w-full px-2 sm:px-4 md:px-6">
            <CenteredTitle
                title="Portfolio"
                text="A collection of side projects in public repositories to learn, practice, and improve my skills"
            />

            {/* Dropdown on left, input field on right, centered with spacing */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mt-8 sm:mt-10 md:mt-12 lg:mt-16 mb-8 sm:mb-10 md:mb-12 lg:mb-16">
                <div className="w-full sm:w-[40%] md:w-[30%] lg:w-[25%]">
                    <ProjectsDropdown selectedType={selectedType} setSelectedType={setSelectedType} />
                </div>
                <div className="w-full sm:w-[40%] md:w-[30%] lg:w-[25%]">
                    <InputField
                        value={searchQuery}
                        setter={setSearchQuery}
                        placeholder="Enter Tech e.g. HTML.. React... Java.."
                    />
                </div>
            </div>

            {/* If no projects match, show fallback */}
            {filteredProjects.length === 0 ? (
                <div className="text-center text-gray-600 my-12 sm:my-16 md:my-20 lg:my-24 text-lg sm:text-xl md:text-2xl font-medium tracking-wide leading-relaxed">
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
                            containerStyle="flex flex-row items-center justify-between w-full py-4 sm:py-6 md:py-8 lg:py-10"
                            itemContainerStyle="flex flex-row justify-center flex-nowrap gap-3 sm:gap-4 md:gap-6 lg:gap-8 w-[90%] md:w-[92%] lg:w-[94%]transition-all duration-300"
                        />
                    </div>
                    <div className="hidden xl:block 2xl:hidden">
                        <Carousel
                            numItemsPerPage={3}
                            itemsCollection={filteredProjects}
                            ReactComponent={ProjectCard}
                            key="carousel-projects"
                            containerStyle="flex flex-row items-center justify-between w-full py-4 sm:py-6 md:py-8 lg:py-10"
                            itemContainerStyle="flex flex-row justify-center flex-nowrap gap-3 sm:gap-4 md:gap-6 lg:gap-8 w-[90%] md:w-[92%] lg:w-[94%] overflow-hidden transition-all duration-300"
                        />
                    </div>
                    <div className="hidden lg:block xl:hidden">
                        <Carousel
                            numItemsPerPage={2}
                            itemsCollection={filteredProjects}
                            ReactComponent={ProjectCard}
                            key="carousel-projects"
                            containerStyle="flex flex-row items-center justify-between w-full py-4 sm:py-6 md:py-8 lg:py-10"
                            itemContainerStyle="flex flex-row justify-center flex-nowrap gap-3 sm:gap-4 md:gap-6 lg:gap-8 w-[90%] md:w-[92%] lg:w-[94%] overflow-hidden transition-all duration-300"
                        />
                    </div>
                    <div className="lg:hidden">
                        <Carousel
                            numItemsPerPage={1}
                            itemsCollection={filteredProjects}
                            ReactComponent={ProjectCard}
                            key="carousel-projects"
                            containerStyle="flex flex-row items-center justify-between w-full py-4 sm:py-6 md:py-8"
                            itemContainerStyle="flex flex-row justify-center flex-nowrap gap-2 sm:gap-3 md:gap-5 w-[95%] sm:w-[92%] md:w-[94%] overflow-hidden transition-all duration-300"
                        />
                    </div>
                </div>
            )}
        </section>
    );
};
