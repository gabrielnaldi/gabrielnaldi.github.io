import { SectionTitle } from "../section-title";
import { ProjectItem } from "./project-item";

export function ProjectsSection() {
    return (
        <section id="projects" className="min-h-section py-16 mb-16">
            <div className="">
                <SectionTitle title="Recent Projects" subtitle="My" postSubtitle="Jobs" />
                <ul className="p-4 grid grid-cols-auto-300 justify-evenly gap-y-6 gap-x-2">
                    <ProjectItem title="Modern website" subtitle="Web" projectName="project-1" />
                    <ProjectItem title="Modern website" subtitle="Web" projectName="project-1" />
                    <ProjectItem title="Modern website" subtitle="Web" projectName="project-1" />
                    <ProjectItem title="Modern website" subtitle="Web" projectName="project-1" />
                    <ProjectItem title="Modern website" subtitle="Web" projectName="project-1" />
                    <ProjectItem title="Modern website" subtitle="Web" projectName="project-1" />
                    <ProjectItem title="Modern website" subtitle="Web" projectName="project-1" />
                </ul>
            </div>
        </section>
    )
}