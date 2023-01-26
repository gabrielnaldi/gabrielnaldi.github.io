import { Navbar } from "./Navbar";

export function Header() {
    return (
        <header className="w-full flex justify-between items-center fixed max-w-5xl z-50 bg-background px-4 py-6">
            <span className="text-white text-3xl font-semibold">
                Portfo
                <span className="text-main">
                    lio
                </span>
            </span>
            <Navbar />
        </header>
    )
}