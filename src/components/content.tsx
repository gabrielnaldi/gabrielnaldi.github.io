import { AboutSection } from "./sections/about";
import { HomeSection } from "./sections/home";
import { SkillsSection } from "./sections/skills";

export function Content() {
    return (
        <div className="px-8 flex flex-col">
            <HomeSection />
            <AboutSection />
            <SkillsSection />
        </div>
    )
}