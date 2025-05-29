import {CenteredTitle} from "../shared/CenteredTitle.tsx";
import {ServiceCard} from "../shared/ServiceCard.tsx";
import {tools} from "../data.ts";
import {Carousel} from "../shared/Carousel.tsx";
import {ServiceCardProps} from "../types.ts";

export const Tools = () => {
    const transformedTools = tools.map(tool => ({
        title: tool.toolName,
        image: tool.image
    }));

    return (
        <div>
            <CenteredTitle title="Tools" />
            <Carousel<ServiceCardProps>
                numItemsPerPage={4}
                itemsCollection={transformedTools}
                ReactComponent={ServiceCard}
                itemContainerStyle="flex flex-row justify-between gap-4 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-20 w-[90%] sm:w-[85%] md:w-[80%] flex-wrap 2xl:flex-nowrap"
                containerStyle="flex flex-row items-center justify-between my-6 sm:my-10 md:my-14 lg:my-20 p-3 sm:p-5 md:p-8 lg:p-10"
            />
        </div>
    );
};
