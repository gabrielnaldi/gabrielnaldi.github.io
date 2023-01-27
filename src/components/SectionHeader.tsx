import Fade from 'react-reveal/Fade';

interface SectionHeader {
    subtitle: string;
    title: string;
}

export function SectionHeader({ subtitle, title }: SectionHeader) {

    return (
        <Fade bottom>
            <div className="flex flex-col justify-center items-center">
                <span className="text-zinc-400">{subtitle}</span>
                <h2 className="text-main font-medium text-2xl">{title}</h2>
            </div>
        </Fade>
    )
}