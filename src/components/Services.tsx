import {CenteredTitle} from "../shared/CenteredTitle.tsx";
import {ServiceCard} from "../shared/ServiceCard.tsx";
import {services} from "../data.ts";

export const Services = () => {
    return <section id="services" className="flex flex-col p-4 sm:p-8 md:p-12 lg:p-16 xl:p-20 justify-evenly">
        <CenteredTitle title="Services" text="Delivered with Care and Attention" />
        <div className="flex flex-row justify-center sm:justify-evenly gap-4 sm:gap-6 md:gap-8 lg:gap-10 flex-wrap mt-6 sm:mt-10 md:mt-16 lg:mt-20">
            {services.map(service => <ServiceCard key={service.title} image={service.image} title={service.title} description={service.description} />)}
        </div>
    </section>
}
