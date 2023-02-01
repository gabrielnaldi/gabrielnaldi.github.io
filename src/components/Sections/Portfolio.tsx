import { SectionHeader } from "../SectionHeader";
import { WorkCard } from "./WorkProjects/WorkCard";
import ProjectImg from '../../assets/project-placeholder.jpg';

const github = 'https://github.com/gabrielnaldi';
const live = 'https://github.com/gabrielnaldi';


export function Portfolio() {
    return (
        <section id="experience"
            className="w-full px-4 py-6 flex flex-col gap-10"
        >
            <SectionHeader title="Portfolio" subtitle="My Recent Work" />

            <div className="grid grid-cols-3 gap-3">
                <WorkCard github={github} image={ProjectImg} live={live} />
                <WorkCard github={github} image={ProjectImg} live={live} />
                <WorkCard github={github} image={ProjectImg} live={live} />
                <WorkCard github={github} image={ProjectImg} live={live} />
                <WorkCard github={github} image={ProjectImg} live={live} />
            </div>

        </section >
    )
}