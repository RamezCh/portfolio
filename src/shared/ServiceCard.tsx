import { CenteredTitle } from "./CenteredTitle.tsx";
import {ServiceCardProps} from "../types.ts";

export const ServiceCard = ({ image, title, description }: ServiceCardProps) => {
    return (
        <div className="flex flex-col shadow-md rounded-lg p-4 sm:p-6 md:p-8 lg:p-10 bg-white hover:shadow-lg transition-all duration-300 w-[90%] sm:w-[350px] md:w-[400px] lg:w-[450px] xl:w-[500px] h-auto transform hover:scale-[1.01] focus-within:ring-1 focus-within:ring-[#7051EF]/70 animate-fade-in group">
            <img className="h-32 sm:h-36 md:h-40 lg:h-48 mx-auto transition-transform duration-300 group-hover:scale-[1.03]" src={image} alt={title} />
            <CenteredTitle title={title} titleSize="text-lg sm:text-xl" text={description} textSize="text-sm sm:text-base md:text-lg" />
        </div>
    );
};
