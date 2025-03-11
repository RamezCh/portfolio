import {FC, useState} from 'react';
import Button from "./Button.tsx";
import {InputField} from "./InputField.tsx";
import {TextareaField} from "./TextareaField.tsx";

const ContactForm: FC = () => {
    const [fullName, setFullName] = useState<string>('');
    const [subject, setSubject] = useState<string>('');
    const [message, setMessage] = useState<string>('');

    const handleSendMessage = () => {
        // Construct the mailto link
        const mailtoLink = `mailto:ramiz_chreide@outlook.com?subject=${encodeURIComponent(
            subject
        )}&body=${encodeURIComponent(
            `Hello, I'm ${fullName}.\n\n${message}\n\nBest Regards,\n${fullName}`
        )}`;

        // Open the default email client
        window.location.href = mailtoLink;
    };

    return (
        <div className="w-[80%] mx-auto p-20">
            <div className="space-y-4">
                <InputField fullName={fullName} setter={setFullName} placeholder="Alex Smith" labelText="Full Name" />
                <InputField fullName={subject} setter={setSubject} placeholder="Subject" labelText="Subject" />
                <TextareaField value={message} setter={setMessage} placeholder="Your message..." labelText="Message"/>
                <div>
                    <Button text="Send Message" isPrimary={true} onClick={handleSendMessage} />
                </div>
            </div>
        </div>
    );
};

export default ContactForm;