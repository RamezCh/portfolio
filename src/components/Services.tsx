import {CenteredTitle} from "../shared/CenteredTitle.tsx";
import {ServiceCard} from "../shared/ServiceCard.tsx";
import {services} from "../data.ts";

export const Services = () => {
    return <section id="services" className="flex flex-col justify-evenly px-2 sm:px-4 md:px-6">
        <CenteredTitle title="Services" text="Delivered with Care and Attention" />
        <div className="flex flex-row justify-center sm:justify-evenly gap-6 sm:gap-8 md:gap-10 lg:gap-12 flex-wrap mt-8 sm:mt-10 md:mt-12 lg:mt-16">
            {services.map(service => <ServiceCard key={service.title} image={service.image} title={service.title} description={service.description} />)}
        </div>
    </section>
}
