import { HiExternalLink } from "react-icons/hi";

interface ProjectItemProps {
    title: string;
    subtitle: string;
    image: string;
    link?: string;
}

export function ProjectItem({ title, subtitle, link = '', image }: ProjectItemProps) {
    return (
        <li className={`group relative overflow-hidden min-h-[180px] flex flex-col items-center justify-center gap-2 rounded-lg box-shadow hover:bg-gradient-to-t hover:from-firstColor hover:to-transparent`}>
            <img src={`./projects/${image}`} alt={image} className="absolute object-cover top-0 right-0 left-0 bottom-0 -z-10" />
            <div className="hidden relative z-40 group-hover:flex justify-center items-center flex-col gap-2">
                <h3 className="font-semibold text-base">{subtitle}</h3>
                <h2 className="font-bold text-2xl">{title}</h2>
                <a href={`https://github.com/gabrielnaldi/${link}`} target='_blank' className="flex items-center gap-2 justify-center font-semibold italic">
                    View project <HiExternalLink size={20} />
                </a>
            </div>
        </li>
    )
}