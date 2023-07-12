import { FormEvent, useCallback, useState } from "react";
import { Input } from "../commons/input";
import { LooseObject } from "../../utils/interfaces";
import { contactFormSchema } from "../../validations/contact-form";
import { toast } from "react-toastify";

interface ContactFormProps {
    onSubmit: (formData: LooseObject) => void;
}

export function ContactForm({ onSubmit }: ContactFormProps) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = useCallback((field: string, value: string) => {
        setFormData({ ...formData, [field]: value });
    }, [formData]);



    const handleSubmit = useCallback((event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setErrors({name: '', email: '', message: ''});
        const result = contactFormSchema.safeParse(formData);

        if(result.success) {
            console.log('FOrm enviado', formData)
            toast.success('Form sent successfully!')
        }        
        else {
            const errorsParsed = result.error.errors.map(err => {
                const { message, path } = err;
                setErrors(state => ({
                    ...state,
                    [path[0]]: message,
                }))
            })
        }
        
        // onSubmit(formData);
    }, [formData, onSubmit])

    return (
        <form onSubmit={handleSubmit} className="px-8 pb-8 max-w-3xl mx-auto">
            <div className="grid grid-cols-1 gap-2">
                <div className="grid grid-cols-1 gap-2 justify-evenly sm:grid-cols-2">
                    <Input name="name" id="name" onInputChange={handleChange} placeholder='Enter your name...' error={errors.name} />
                    <Input name="email" id="email" onInputChange={handleChange} placeholder='Enter your email...' error={errors.email}/>
                </div>
                <Input name="message" id="message" onInputChange={handleChange} inputType="textarea" placeholder='Enter your message...' type="textarea" error={errors.message}/>
            </div>
            <div className="flex mt-12">
                <button type="submit" className="max-w-[180px] w-full mx-auto bg-firstColor p-4 rounded-md font-bold border-[1.4px] border-firstColor hover:bg-white hover:text-firstColor transition-colors duration-300">Send Message</button>
            </div>
        </form>
    )
}