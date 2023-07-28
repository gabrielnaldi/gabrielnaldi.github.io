import { SectionTitle } from "../section-title";
import { ContactForm, ContactFormData } from "../../forms/contact-form";
import emailjs from '@emailjs/browser';
import { toast } from "react-toastify";
import { useState } from "react";
import { Spinner } from "../../spinner";

export function ContactSection() {
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = async (contactFormData: ContactFormData) => {
        try {
            const templateParams = {
                from_name: contactFormData.name,
                email: contactFormData.email,
                message: contactFormData.message,
            };
            setIsLoading(true);
            const response = await emailjs.send(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, templateParams, import.meta.env.VITE_PUBLIC_KEY);
            setIsLoading(false);
            if(response.status === 200) toast.success('Form sent successfully!');
        } catch (error) {
            console.log(error);
            toast.error('Error sending email!')
        }
    };

    return (
        <>
            <section id="contact" className="py-16">
                <div>
                    <SectionTitle title="Contact Me" subtitle="Get in" postSubtitle="Touch" />
                    <ContactForm onSubmit={onSubmit} />
                </div>
            </section>
            
            {isLoading &&
                <div className="fixed flex-col gap-2 font-extrabold text-3xl w-full h-full bg-slate-700 bg-opacity-90 top-0 left-0 z-10 flex items-center justify-center">
                    <div>Sending contact...</div>
                    <Spinner />
                </div>
            }
        </>
    )
}