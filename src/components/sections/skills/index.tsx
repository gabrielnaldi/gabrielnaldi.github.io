import { BackEndSkills, frontEndSkills } from "../../../data/skills";
import { SectionTitle } from "../section-title";
import { Skill } from "./skill";

export function SkillsSection() {
    return (
        <section id='skills' className="min-h-section py-16 mb-16">
            <div className="">
                <SectionTitle title='My experience' subtitle="What skills I" postSubtitle="have" />
                <div className="mb-6">
                    <p className="text-center text-textColor">See what skills I have below, so that I can start developing your projects.</p>
                </div>
                <div className="px-6 grid gap-8 md:grid-cols-2">
                    <Skill skillsList={frontEndSkills} title='Front-end' />
                    <Skill skillsList={BackEndSkills} title='Back-end' />
                </div>
            </div>
        </section>
    )
}