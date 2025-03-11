import {Card} from "./Card.tsx";

interface types {
    sectionID: string;
    imgSrc: string;
    imgAlt: string;
    title: string;
    text: string;
    imgLeft: boolean;
    imgSize: string;
}

export const ImageCard = (props:types) => {
    return <section id={props.sectionID} className={`flex ${props.imgLeft ? 'flex-row' : 'flex-row-reverse'} justify-center p-20 mx-40 gap-20`}>
        <img src={props.imgSrc} alt={props.imgAlt} className={props.imgSize}/>
        <Card title={props.title} titleSize="text-5xl mb-18" text={props.text}/>
    </section>
}