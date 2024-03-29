import { FormEvent, HTMLAttributes, useCallback, useEffect } from "react";
import { LooseObject } from "../../utils/interfaces";
import { ZodError, ZodIssue } from "zod";

type InputType = 'textarea' | 'input';

interface InputProps {
    name: string;
    id: string;
    type?: string;
    inputType?: InputType;
    inputClass?: string;
    placeholder?: string;
    required?: boolean;
    error?: string;
    value: string;
    onInputChange: (key: string, value: string) => void;
}

export function Input({ name, id, value, placeholder, error, required = false, type = 'text', inputType = 'input', inputClass = '', onInputChange }: InputProps) {
    const _handleChange = useCallback((event: LooseObject) => {
        onInputChange(name, event.currentTarget.value);
    }, [onInputChange])

    switch (inputType) {
        case 'input':
            return (
                <div className="flex flex-col w-full gap-2">
                    <input
                    type={type}
                    id={id}
                    name={id}
                    value={value}
                    placeholder={placeholder}
                    onChange={_handleChange}
                    required={required}
                    className={`text-white w-full text-sm bg-navColor p-4 outline-none rounded-md border-[1.4px] border-navColor focus:border-firstColor ${inputClass}`}
                    />
                    {!!error && (
                        <div className="pl-4 text-sm text-red-500 font-medium">{error}</div>
                    )}
                </div>
            )
        case 'textarea':
            return (
                <div className="flex flex-col w-full gap-2">
                    <textarea
                    id={id}
                    name={id}
                    value={value}
                    rows={6}
                    placeholder={placeholder}
                    required={required}
                    onChange={_handleChange}
                    className={`w-full resize-none outline-none rounded-md p-4 bg-navColor border-[1.4px] border-navColor focus:border-firstColor ${inputClass}`}
                />
                {!!error && (
                    <div className="pl-4 text-sm text-red-500 font-medium">{error}</div>
                )}
                </div>
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