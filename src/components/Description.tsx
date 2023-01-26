import { DownloadBtn } from "./DownloadBtn";

export function Description() {
    return (
        <div className="max-w-md">
            <h5 className="text-white text-2xl font-medium mb-5">
                Hello, I am
            </h5>
            <h1 className="text-white font-bold text-5xl mb-5">
                Gabriel Naldi
            </h1>

            <h6 className="text-white font-medium text-base mb-5">
                I Am Passionate Full-stack <span className="text-main">Developer</span>.
            </h6>

            <p className="text-zinc-300 font-normal max-w-[470px] mb-4">
                I develop services for customers of all sizes, specializing in creating modern websites, web services, mobile apps, APIs and much more.
            </p>

            <DownloadBtn title='Download CV' />

        </div>
    )
}