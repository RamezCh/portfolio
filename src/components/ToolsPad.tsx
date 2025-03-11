import {CenteredTitle} from "../shared/CenteredTitle.tsx";
import CircleWithChevron from "../shared/CircleWithChevron.tsx";
import {ServiceCard} from "../shared/ServiceCard.tsx";
import {useState} from "react";
import {tools} from "../data.ts";

export const ToolsPad = () => {
    const [lastIndex, setLastIndex] = useState(3);

    const handleIncrement = () => {
        setLastIndex( (prev) => prev < tools.length ? prev + 3 : tools.length);
    }

    const handleDecrement = () => {
        setLastIndex( (prev) => prev > 3 ? prev - 3 : 3);
    }

    return <div>
        <CenteredTitle title="Tools" />
        {/* Carousel */}
        <div className="flex flex-row items-center justify-between my-20 p-10">
            <CircleWithChevron direction="left" enabled={lastIndex > 3} onClick={handleDecrement}/>
            <div className="flex flex-row justify-between gap-20 w-[80%]">
                {tools.slice(lastIndex - 3, lastIndex).map( (tool) => <ServiceCard image={tool.image} title={tool.toolName} />)}
            </div>
            <CircleWithChevron direction="right" enabled={tools.length - 1 >= lastIndex} onClick={handleIncrement}/>
        </div>
    </div>
}