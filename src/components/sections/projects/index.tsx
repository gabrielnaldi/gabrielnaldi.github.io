import { Fade } from "react-awesome-reveal";
import { projectsList } from "../../../data/projects";
import { SectionTitle } from "../section-title";
import { ProjectItem } from "./project-item";

export function ProjectsSection() {
    return (
        <section id="projects" className="py-16 mb-16">
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
                <Fade cascade direction="up" damping={0.25}>
                    <ul className="p-4 grid grid-cols-auto-300 justify-evenly gap-y-6 gap-x-2">
                        {projectsList.map(({title, subtitle, image, link}, index) => {
                            return (
                                <ProjectItem key={`${title}-${index}`} title={title} subtitle={subtitle} image={image} link={link} />
                            )
                        })}
                    </ul>
                </Fade>
            </div>
        </section>
    )
}