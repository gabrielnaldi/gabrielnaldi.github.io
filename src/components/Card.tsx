import { FolderSimpleStar, Medal, Users } from "phosphor-react";
import colors from 'tailwindcss/colors'

interface CardProps {
    icon: string;
    title: string;
    subtitle: string;
}

export function Card({ icon, title, subtitle }: CardProps) {

    return (
        <div className="bg-card rounded-xl py-6 px-4 flex justify-center items-center flex-col gap-3">
            {icon === 'start' && <FolderSimpleStar size={32} color={colors.green[500]} />}
            {icon === 'medal' && <Medal size={32} color={colors.green[500]} />}
            {icon === 'users' && <Users size={32} color={colors.green[500]} />}

            <h3 className="text-white font-semibold">{title}</h3>
            <p className="text-zinc-400 text-base">{subtitle}</p>
        </div>
    )
}