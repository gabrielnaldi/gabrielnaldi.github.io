import { SectionHeader } from "../SectionHeader";
import { BackendSkills } from "./Skills/BackendSkills";
import { FrontendSkills } from "./Skills/FrontendSkills";



export function Skills() {
    return (
        <section id="skills"
            className="w-full px-4 py-6 flex flex-col gap-10"
        >
            <SectionHeader title="My Experience" subtitle="What Skills I Have" />

            <div
                className="container do front e back grid grid-cols-2 gap-10"
            >
                <FrontendSkills />
                <BackendSkills />
            </div>
        </section >
    )
}