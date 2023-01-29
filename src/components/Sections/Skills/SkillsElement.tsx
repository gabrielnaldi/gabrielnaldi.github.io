import { BsFillPatchCheckFill } from "react-icons/bs";
import { Level } from "../../../utils/interfaces";

interface SkillsElementProps {
    title: string;
    level: Level;
}

export function SkillsElement({ title, level }: SkillsElementProps) {
    return (
        <div className="flex justify-start gap-4 px-4 py-2">
            <div className="mt-1">
                <BsFillPatchCheckFill size={20} fill='#2fbf71' />
            </div>

            <div className="flex flex-col gap-1">
                <h3 className="font-medium text-base ">{title}</h3>
                <h4 className="text-zinc-400 text-sm font-light">{level}</h4>
            </div>
        </div>
    )
}