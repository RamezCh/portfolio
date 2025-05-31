import {FunctionComponent, ReactNode} from "react";

export interface CarouselTypes<T> {
    numItemsPerPage: number;
    itemContainerStyle?: string;
    containerStyle?: string;
    itemsCollection: T[];
    ReactComponent: FunctionComponent<T>;
}

export type ButtonProps = {
    text: string,
    onClick?: () => void,
    downloadPath?: string,
    fileName?:string,
    isPrimary:boolean,
    isSmall?:boolean
};

export interface CardProps {
    title: string;
    titleSize?: string;
    subtitleWords?: string[];
    subtitleSize?: string;
    text?: string;
    children?: ReactNode;
}

export interface CenteredTitleProps {
    title: string;
    titleSize?: string;
    text?: string;
    textSize?: string;
}

export interface CircleWithChevronProps {
    direction: "left" | "right";
    enabled: boolean;
    onClick: () => void;
}

export interface IconLinkProps {
    icon: string;
    link: string;
    altText: string;
}

export interface ImageCardType {
    sectionID: string;
    imgSrc: string;
    imgAlt: string;
    title: string;
    text: string;
    imgLeft: boolean;
    imgSize: string;
}

export interface InputFieldProps {
    labelText?: string;
    value: string;
    setter: (value: string) => void;
    placeholder: string;
}

export interface ServiceCardProps {
    image: string;
    title: string;
    description?: string;
}

export interface SmoothLinkProps {
    children: ReactNode;
    link: string;
    onClick?: () => void;
}

export interface TextareaFieldProps {
    labelText?: string;
    value: string;
    setter: (value: string) => void;
    placeholder: string;
}

export interface ProjectCardProps {
    demo?: string;
    code: string;
    imageURL: string;
    title: string;
    description: string;
    tech: string[];
}

export interface ProjectsDropdownProps {
    selectedType: string;
    setSelectedType: (type: string) => void;
}
