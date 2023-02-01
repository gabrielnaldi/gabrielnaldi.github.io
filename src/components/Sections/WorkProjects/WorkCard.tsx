interface WorkCardProps {
    github: string;
    live: string;
    image: string;
}



export function WorkCard({ github, image, live }: WorkCardProps) {
    return (
        <div className="flex flex-col bg-card rounded-2xl p-5 gap-2 items-start justify-center border border-transparent opacity-70 hover:opacity-100 duration-300">
            <div className="rounded-xl overflow-hidden">
                <img src={image} alt="Project Image" />
            </div>
            <div className="mb-1">
                This is the project title.
            </div>
            <div className="ctas flex gap-2 justify-start items-center">
                <a
                    href={github}
                    target='_blank'
                    className="border border-main p-3 font-semibold text-main rounded-xl hover:bg-white hover:border-white hover:text-background duration-300"
                >
                    Github
                </a>
                <a
                    href={live}
                    target='_blank'
                    className="border border-transparent p-3 font-semibold text-background bg-main rounded-xl hover:border-white hover:bg-white duration-300"
                >
                    Live Demo
                </a>
            </div>
        </div>

    )
}