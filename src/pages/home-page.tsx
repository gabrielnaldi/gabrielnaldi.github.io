import { Content } from "../components/content";
import { Header } from "../components/header";

export function HomePage() {
    return (
        <div className="w-full pt-16">
            <div className="max-w-6xl ml-auto mr-auto">
                <Header />
                <Content />
            </div>
        </div>
    )
}