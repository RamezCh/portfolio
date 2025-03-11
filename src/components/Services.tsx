import {CenteredTitle} from "../shared/CenteredTitle.tsx";
import {ServiceCard} from "../shared/ServiceCard.tsx";
import {services} from "../data.ts";

export const Services = () => {
    return <section id="services" className="flex flex-col p-20 justify-evenly">
        <CenteredTitle title="Services" text="Delivered with Care and Attention" />
        <div className="flex flex-row justify-evenly gap-10 flex-wrap mt-20">
            {services.map(service => <ServiceCard image={service.image} title={service.title} description={service.description} />)}
        </div>
    </section>
}