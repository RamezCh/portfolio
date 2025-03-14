import {Card} from "./Card.tsx";
import {ImageCardType} from "../types.ts";

export const ImageCard = (props:ImageCardType) => {
    return <section id={props.sectionID} className={`flex flex-col lg:justify-center md:p-10 md:mx-20 lg:p-20 lg:mx-40 gap-20 ${
        props.imgLeft ? 'xl:flex-row' : 'xl:flex-row-reverse'}`}>
        <img src={props.imgSrc} alt={props.imgAlt} className={props.imgSize}/>
        <Card title={props.title} titleSize="text-5xl mb-18" text={props.text}/>
    </section>
}