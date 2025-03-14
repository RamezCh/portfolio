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
                itemContainerStyle="flex flex-row justify-between lg:gap-20 w-[80%] flex-wrap 2xl:flex-nowrap"
                containerStyle="flex flex-row items-center justify-between my-20 p-10"
            />
        </div>
    );
};