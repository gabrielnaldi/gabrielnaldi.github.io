import { AboutSection } from "./sections/about";
import { ContactSection } from "./sections/contact";
import { HomeSection } from "./sections/home";
import { ProjectsSection } from "./sections/projects";
import { ServicesSection } from "./sections/services";
import { SkillsSection } from "./sections/skills";

export function Content() {
    return (
        <div className="px-8 flex flex-col">
            <HomeSection />
            <AboutSection />
            <SkillsSection />
            <ServicesSection />
            <ProjectsSection />
            <ContactSection />
        </div>
    )
}