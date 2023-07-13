import { SectionTitle } from "../section-title";
import { ContactForm, ContactFormData } from "../../forms/contact-form";
import emailjs from '@emailjs/browser';
import { toast } from "react-toastify";

export function ContactSection() {
    const onSubmit = async (contactFormData: ContactFormData) => {
        try {
            const templateParams = {
                from_name: contactFormData.name,
                email: contactFormData.email,
                message: contactFormData.message,
            };

            const response = await emailjs.send(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, templateParams, import.meta.env.VITE_PUBLIC_KEY);

            if(response.status === 200) toast.success('Form sent successfully!');
        } catch (error) {
            console.log(error);
            toast.error('Error sending email!')
        }
    };

    return (
        <section id="contact" className="min-h-section py-16">
            <div>
                <SectionTitle title="Contact Me" subtitle="Get in" postSubtitle="Touch" />
                <ContactForm onSubmit={onSubmit} />
            </div>
        </section>
    )
}