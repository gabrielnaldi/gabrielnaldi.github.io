import { Home } from "./Sections/Home";
import { AboutMe } from "./Sections/AboutMe";
import { Skills } from "./Sections/Skills";
import { Portfolio } from "./Sections/Portfolio";

export function Content() {
    return (
        <div className="w-full flex flex-col gap-32">
            <Home />
            <AboutMe />
            <Skills />
            <Portfolio />
        </div>
    )
}