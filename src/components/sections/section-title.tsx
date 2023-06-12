interface Props {
    title: string;
    subtitle: string;
    postSubtitle: string;
}

export const SectionTitle: React.FC<Props> = ({ title, subtitle, postSubtitle }) => {
    return (
        <div className="mb-16">
            <h4 className="text-base font-semibold text-center">{subtitle} <span className="text-firstColor">{postSubtitle}</span></h4>
            <h2 className="text-2xl font-extrabold text-center">{title}</h2>
        </div>
    )
}