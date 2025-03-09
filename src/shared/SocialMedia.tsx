import IconLink from "./IconLink.tsx";

export const SocialMedia = () => {
    return <div className="flex flex-row gap-5 my-7">
        <IconLink icon="./Github_Icon.svg" link="https://github.com/RamezCh" altText="Github SmoothLink to my Profile" />
        <IconLink icon="./LinkedIn_Icon.svg" link="https://www.linkedin.com/in/ramez-chreide/" altText="LinkedIn SmoothLink to my Profile" />
        </div>
}