interface Props {
    title: string;
    skillsList: Array<any>;
}

export function Skill({ title, skillsList }: Props) {
    return (
        <div className="bg-navColor rounded-xl py-8 px-12 max-w-lg mx-auto">
            <h2 className="text-center text-firstColor font-bold text-xl mb-8">{title}</h2>
            <ul className="grid grid-cols-auto justify-evenly sm:grid-cols-[150px_150px_150px] gap-2">
                {skillsList.map((skill, index) => {
                    return (
                        <li key={`${skill.name}-${index}`} className="">
                            <span className="text-firstColor font-semibold">
                                {`${(index + 1).toString().padStart(2, '0')}. `}
                            </span>
                            <span className="font-semibold italic ">
                                {skill.name}
                            </span>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}