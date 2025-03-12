import {CenteredTitle} from "../shared/CenteredTitle.tsx";
import CircleWithChevron from "../shared/CircleWithChevron.tsx";
import {ServiceCard} from "../shared/ServiceCard.tsx";
import {useState} from "react";
import {tools} from "../data.ts";

export const ToolsMobile = () => {
    const [lastIndex, setLastIndex] = useState(1);

    const handleIncrement = () => {
        setLastIndex( (prev) => prev < tools.length ? prev + 1 : tools.length);
    }

    const handleDecrement = () => {
        setLastIndex( (prev) => prev > 1 ? prev - 1 : 1);
    }

    return <div>
        <CenteredTitle title="Tools" />
        {/* Carousel */}
        <div className="flex flex-row items-center justify-between my-20 p-10">
            <CircleWithChevron direction="left" enabled={lastIndex > 1} onClick={handleDecrement}/>
            <div className="flex mx-5 justify-center w-[60%]">
                {tools.slice(lastIndex - 1, lastIndex).map( (tool) => <ServiceCard key={tool.toolName} image={tool.image} title={tool.toolName} />)}
            </div>
            <CircleWithChevron direction="right" enabled={tools.length - 1 >= lastIndex} onClick={handleIncrement}/>
        </div>
    </div>
}