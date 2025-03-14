import CircleWithChevron from "./CircleWithChevron.tsx";
import { useState } from "react";
import {CarouselTypes} from "../types.ts";

export const Carousel = <T extends object>({
                                           numItemsPerPage,
                                           itemContainerStyle,
                                           containerStyle,
                                           itemsCollection,
                                           ReactComponent,
                                       }: CarouselTypes<T>) => {
    const [lastIndex, setLastIndex] = useState(numItemsPerPage);
    const itemsLength = itemsCollection.length;

    const handleIncrement = () => {
        setLastIndex((prev) => (prev < itemsLength ? prev + numItemsPerPage : itemsLength));
    };

    const handleDecrement = () => {
        setLastIndex((prev) => (prev > numItemsPerPage ? prev - numItemsPerPage : numItemsPerPage));
    };

    return (
        <div className={containerStyle ?? "flex flex-row items-center justify-between my-20 p-10"}>
            <CircleWithChevron
                direction="left"
                enabled={lastIndex > numItemsPerPage}
                onClick={handleDecrement}
            />
            <div className={itemContainerStyle ?? "flex flex-row justify-between lg:gap-20 w-[80%] flex-wrap 2xl:flex-nowrap"}>
                {itemsCollection.slice(lastIndex - numItemsPerPage, lastIndex).map((item, index) => (
                    <ReactComponent key={index + Math.random() * 1000 + 1} {...item} />
                ))}
            </div>
            <CircleWithChevron
                direction="right"
                enabled={itemsLength > lastIndex}
                onClick={handleIncrement}
            />
        </div>
    );
};