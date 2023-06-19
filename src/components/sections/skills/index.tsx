import { BackEndSkills, frontEndSkills } from "../../../data/skills";
import { SectionTitle } from "../section-title";
import { Skill } from "./skill";

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
                <div className="pb-12 grid gap-8">
                    <Skill skillsList={frontEndSkills} title='Front-end' />
                    <Skill skillsList={BackEndSkills} title='Back-end' />
                </div>
            </div>
        </section>
    )
}