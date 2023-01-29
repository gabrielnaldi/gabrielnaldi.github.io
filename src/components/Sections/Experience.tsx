import { experiencesList, frontendExperiencesList } from "../../utils/experiences";
import { SectionHeader } from "../SectionHeader";
import { ExperienceElement } from "./AboutMe/ExperienceElement";

export function Experience() {
    return (
        <section id="experience"
            className="w-full px-4 py-6 flex flex-col gap-10"
        >
            <SectionHeader title="My Experience" subtitle="What Skills I Have" />

            <div
                className="container do front e back grid grid-cols-2 gap-10"
            >

                <div className="bg-card rounded-3xl flex flex-col gap-8 items-center py-6 px-4 border border-transparent hover:border-main duration-300">
                    <div className="">
                        <h2 className="text-main text-lg font-semibold -tracking-wide">
                            Frontend Development
                        </h2>
                    </div>
                    <div className="grid grid-cols-2 gap-x-10 gap-y-6 max-h-[250px] overflow-y-auto over">
                        {experiencesList.map(experience => {
                            return (
                                <ExperienceElement key={experience.title} title={experience.title} level={experience.level} />
                            )
                        })}
                    </div>
                </div>

                <div className="bg-card rounded-3xl flex flex-col gap-8 items-center py-6 px-4 border border-transparent hover:border-main duration-300">
                    <div className="">
                        <h2 className="text-main text-lg font-semibold -tracking-wide">
                            Backend Development
                        </h2>
                    </div>
                    <div className="grid grid-cols-2 gap-x-10 gap-y-6 max-h-[250px] overflow-y-auto over">
                        {frontendExperiencesList.map(experience => {
                            return (
                                <ExperienceElement key={experience.title} title={experience.title} level={experience.level} />
                            )
                        })}
                    </div>
                </div>
            </div>
        </section >
    )
}