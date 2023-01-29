import { SectionHeader } from "../SectionHeader";
import { BackendExperiences } from "./Experience/BackendExperiences";
import { FrontendExperiences } from "./Experience/FrontendExperiences";



export function Experience() {
    return (
        <section id="experience"
            className="w-full px-4 py-6 flex flex-col gap-10"
        >
            <SectionHeader title="My Experience" subtitle="What Skills I Have" />

            <div
                className="container do front e back grid grid-cols-2 gap-10"
            >
                <FrontendExperiences />
                <BackendExperiences />
            </div>
        </section >
    )
}