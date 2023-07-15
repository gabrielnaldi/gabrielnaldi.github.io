import { Content } from "../components/content";
import { Footer } from "../components/footer";
import { Header } from "../components/header";

export function HomePage() {
    return (
        <div className="w-full">
            <div className="max-w-6xl ml-auto mr-auto">
                <Header />
                <Content />
            </div>
            <Footer />
        </div>
    )
}