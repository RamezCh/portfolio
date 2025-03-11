import {CenteredTitle} from "../shared/CenteredTitle.tsx";
import ContactForm from "../shared/ContactForm.tsx";

export const Contact = () => {
    return <section id="contact">
        <CenteredTitle title="Contact Me" text="Have a project or question in mind? Just send me a message"/>
        <ContactForm/>
    </section>
}