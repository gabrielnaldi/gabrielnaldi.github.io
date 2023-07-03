import { SectionTitle } from "../section-title";
import { ContactForm } from "../../forms/contact-form";
import { useCallback } from "react";

export function ContactSection() {
    const onSubmit = useCallback((data: any) => {
        console.log(data);
    }, [])

    return (
        <section id="contact" className="border min-h-section py-16">
            <div>
                <SectionTitle title="Contact Me" subtitle="Get in" postSubtitle="Touch" />
                <ContactForm onSubmit={onSubmit} />
            </div>
        </section>
    )
}