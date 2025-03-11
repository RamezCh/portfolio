import {CenteredTitle} from "../shared/CenteredTitle.tsx";
import CircleWithChevron from "../shared/CircleWithChevron.tsx";
import {ServiceCard} from "../shared/ServiceCard.tsx";
import {useState} from "react";
import {tools} from "../data.ts";

export const Tools = () => {
    const [lastIndex, setLastIndex] = useState(4);

    const handleIncrement = () => {
        setLastIndex( (prev) => prev < tools.length ? prev + 4 : tools.length);
    }

    const handleDecrement = () => {
        setLastIndex( (prev) => prev > 4 ? prev - 4 : 4);
    }

    return <section id="tools">
        <CenteredTitle title="Tools" />
        {/* Carousel */}
        <div className="flex flex-row items-center justify-between my-20 p-10">
            <CircleWithChevron direction="left" enabled={lastIndex > 4} onClick={handleDecrement}/>
            <div className="flex flex-row justify-between lg:gap-20 w-[80%] flex-wrap 2xl:flex-nowrap">
                {tools.slice(lastIndex - 4, lastIndex).map( (tool) => <ServiceCard image={tool.image} title={tool.toolName} />)}
            </div>
            <CircleWithChevron direction="right" enabled={tools.length - 1 >= lastIndex} onClick={handleIncrement}/>
        </div>
    </section>
}