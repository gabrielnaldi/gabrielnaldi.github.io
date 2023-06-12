interface Props {
    title: string;
    subtitle: string;
}

export const SectionTitle: React.FC<Props> = ({ title, subtitle }) => {
    return (
        <div className="mb-16">
            <h4 className="text-base font-semibold text-center">My <span className="text-firstColor">{subtitle}</span></h4>
            <h2 className="text-2xl font-extrabold text-center">{title}</h2>
        </div>
    )
}