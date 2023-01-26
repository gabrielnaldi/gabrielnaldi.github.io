import { Content } from "../components/Content";
import { Header } from "../components/Header";

export function HomePage() {
    return (
        <div className="max-w-5xl border-2 border-red-500 mx-auto">
            <Header />
            <Content />
        </div>
    )
}