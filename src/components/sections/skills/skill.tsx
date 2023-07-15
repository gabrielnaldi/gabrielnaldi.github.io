import { Fade } from "react-awesome-reveal";

interface Props {
    title: string;
    skillsList: Array<any>;
}

export function Skill({ title, skillsList }: Props) {
    return (
        <Fade>
            <div className="flex justify-center w-full p-8 bg-navColor rounded-xl min-h-[250px] box-shadow">
            <div className="w-full">
                <h2 className="text-center font-semibold text-firstColor text-xl mb-8">{title}</h2>
                <Fade cascade direction="right" damping={0.10}>
                    <ul className="grid grid-cols-auto-100 gap-x-8 justify-evenly">
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
                </Fade>
            </div>
        </div>
        </Fade>
    )
}