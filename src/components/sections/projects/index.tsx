import { SectionTitle } from "../section-title";
import { ProjectItem } from "./project-item";

export function ProjectsSection() {
    return (
        <section id="projects" className="min-h-section py-16 mb-16">
            <div className="">
                <SectionTitle title="Recent Projects" subtitle="My" postSubtitle="Jobs" />
                <div className="mb-6">
                    <p className="text-center text-textColor">
                        Here are some more recent projects I've developed.
                        For a complete list, feel free to check out my {' '}
                        <span className="text-textColor whitespace-nowrap">
                            GitHub {' '}
                            <a
                                href="http://github.com/gabrielnaldi"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-firstColor font-bold p-1 rounded-md hover:bg-firstColor hover:text-white transition-all duration-300">
                                profile
                            </a>
                            .
                        </span>
                    </p>
                </div>
                <ul className="p-4 grid grid-cols-auto-300 justify-evenly gap-y-6 gap-x-2">
                    <ProjectItem title="Modern website" subtitle="Web" projectName="project-1" link='notifications-service' />
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