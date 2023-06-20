import React from "react";
import { IconType } from "react-icons"

interface Props {
    icon: IconType;
    title: string;
    description: string;
}

export function ServiceItem({ icon, title, description }: Props) {
    return (
        <li className="bg-navColor rounded-xl p-8 flex justify-center items-center flex-col gap-4 box-shadow border-[1.4px] border-navColor transition-all duration-300 hover:border-firstColor">
            {React.createElement(icon)}
            <h3 className="text-center font-semibold text-lg ">{title}</h3>
            <p className="text-sm text-textColor text-center">{description}</p>
        </li>
    )
}