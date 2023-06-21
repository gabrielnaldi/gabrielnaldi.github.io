import { SectionTitle } from "../section-title";
import { HiExternalLink } from 'react-icons/hi'
import { ProjectItem } from "./project-item";

export function ProjectsSection() {
    return (
        <section id="projects" className="min-h-section py-16 mb-16 border">
            <div className="border">
                <SectionTitle title="Recent Projects" subtitle="My" postSubtitle="Jobs" />
                <ul className="border p-4">
                    <ProjectItem title="Modern website" subtitle="Web" projectName="project-1" />
                </ul>
            </div>
        </section>
    )
}