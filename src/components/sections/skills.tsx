import { frontEndSkills } from "../../data/skills";
import { SectionTitle } from "./section-title";

export function SkillsSection() {
    return (
        <section id='skills' className="mt-16 ">
            <div className="">
                <SectionTitle title='My experience' subtitle="What skills I" postSubtitle="have" />
                <div className="mb-6">
                    <p className="text-center text-textColor">See all my skills and projects below. So that I can start developing your projects.</p>
                </div>
                <div className="mb-12">
                    <a className="flex items-center justify-center max-w-fit mx-auto py-4 px-6 bg-firstColor border-[1.4px] border-firstColor rounded-lg font-bold transition-colors duration-300 hover:bg-white hover:text-firstColor" href="https://github.com/gabrielnaldi">See projects</a>
                </div>
                <div className="pb-12">
                    <div className="bg-navColor rounded-xl py-8 px-12 max-w-lg mx-auto">
                        <h2 className="text-center text-firstColor font-bold text-xl mb-8">Front-end</h2>
                        <ul className="grid grid-cols-auto justify-evenly sm:grid-cols-[150px_150px_150px] gap-2">
                            {frontEndSkills.map((skill, index) => {
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
                </div>
            </div>
        </section>
    )
}