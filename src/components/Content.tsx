import { Home } from "./Sections/Home";
import { AboutMe } from "./Sections/AboutMe";
import { Experience } from "./Sections/Experience";

export function Content() {
    return (
        <div className="w-full flex flex-col gap-32">
            <Home />
            <AboutMe />
            <Experience />
        </div>
    )
}