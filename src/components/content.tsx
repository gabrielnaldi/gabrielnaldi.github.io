import { AboutSection } from "./sections/about";
import { HomeSection } from "./sections/home";

export function Content() {
    return (
        <div className="px-8 flex flex-col">
            <HomeSection />
            <AboutSection />
        </div>
    )
}