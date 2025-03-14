import { CenteredTitle } from "./CenteredTitle.tsx";
import {ServiceCardProps} from "../types.ts";

export const ServiceCard = ({ image, title, description }: ServiceCardProps) => {
    return (
        <div className="flex flex-col shadow-lg rounded-lg p-10 bg-white hover:shadow-xl transition-shadow duration-300 w-[500px] h-auto">
            <img className="h-48 mx-auto" src={image} alt={title} />
            <CenteredTitle title={title} titleSize="text-xl" text={description} textSize="text-l" />
        </div>
    );
};