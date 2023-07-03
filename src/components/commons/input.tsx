import { FormEvent, useCallback } from "react";
import { LooseObject } from "../../utils/interfaces";

type InputType = 'textarea' | 'input';

interface InputProps {
    name: string;
    id: string;
    type?: string;
    inputType?: InputType;
    inputClass?: string;
    placeholder?: string;
    onChange: (key: string, value: string) => void;
}

export function Input({ name, id, placeholder, type = 'text', inputType = 'input', inputClass = '', onChange }: InputProps) {
    const _handleChange = useCallback((event: LooseObject) => {
        onChange(name, event.currentTarget.value);
    }, [onChange])

    switch (inputType) {
        case 'input':
            return (
                <input
                    type={type}
                    id={id}
                    name={id}
                    placeholder={placeholder}
                    onChange={_handleChange}
                    className={`text-white w-full text-sm bg-navColor p-4 outline-none rounded-md border-[1.4px] border-navColor focus:border-firstColor ${inputClass}`}
                />
            )
        case 'textarea':
            return (
                <textarea
                    id={id}
                    name={id}
                    rows={6}
                    placeholder={placeholder}
                    onChange={_handleChange}
                    className={`w-full resize-none outline-none rounded-md p-4 bg-navColor border-[1.4px] border-navColor focus:border-firstColor ${inputClass}`}
                />
            )
        default:
            return (
                <input
                    type={type}
                    id={id}
                    name={id}
                    placeholder={placeholder}
                    onChange={_handleChange}
                    className="text-white w-full text-sm bg-navColor p-4 outline-none rounded-md border-[1.4px] border-navColor focus:border-firstColor"
                />
            )
    }
}