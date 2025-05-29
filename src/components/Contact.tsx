import {CenteredTitle} from "../shared/CenteredTitle.tsx";
import ContactForm from "../shared/ContactForm.tsx";

export const Contact = () => {
    return <section id="contact" className="px-2 sm:px-4 md:px-6">
        <CenteredTitle title="Contact Me" text="Have a project or question in mind? Just send me a message"/>
        <div className="flex flex-row justify-evenly items-center md:mx-[10%] mt-8 sm:mt-10 md:mt-12 lg:mt-16">
            <img className="hidden xl:block w-[40%] px-4 transition-transform hover:scale-105 duration-500" src="./mail_sent.avif" alt="mail flying"/>
            <ContactForm/>
        </div>
    </section>
}
