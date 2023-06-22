import { HiExternalLink } from "react-icons/hi";

interface ProjectItemProps {
    title: string;
    subtitle: string;
    projectName: string;
    link?: string;
}

export function ProjectItem({ title, subtitle, projectName, link = '' }: ProjectItemProps) {
    return (
        <li className={`group min-h-[180px] flex flex-col items-center justify-center gap-2 rounded-lg from-firstColor to-transparent bg-cover bg-center bg-no-repeat box-shadow bg-[url:theme('backgroundImage.${projectName}')] hover:bg-[url:_theme('backgroundImage.gradient-to-t'),_theme('backgroundImage.${projectName}')]`}>
            <div className="hidden group-hover:flex justify-center items-center flex-col gap-2">
                <h3 className="font-semibold text-base">{subtitle}</h3>
                <h2 className="font-bold text-2xl">{title}</h2>
                <a href={`https://github.com/gabrielnaldi/${link}`} target='_blank' className="flex items-center gap-2 justify-center font-semibold italic">
                    View project <HiExternalLink size={20} />
                </a>
            </div>
        </li>
    )
}