import { Content } from "../components/content";
import { Header } from "../components/header";

export function HomePage() {
    return (
        <div className="w-full pt-16">
            <Header />
            <Content />
        </div>
    )
}