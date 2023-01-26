import { Content } from "../components/Content";
import { Header } from "../components/Header";

export function HomePage() {
    return (
        <div className="max-w-5xl mx-auto w-full">
            <Header />
            <Content />
        </div>
    )
}