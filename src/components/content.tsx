import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

export function Content() {
    return (
        <div className="max-w-8xl mx-auto px-8">
            <section id="home" className="">
                <div className="pt-12">
                    <div className="text-center mb-8">
                        <h3 className="text-xl font-semibold mb-2">
                            Hello! {" "}
                            <span className="text-firstColorAlt">I am</span>
                        </h3>
                        <h1 className="text-white text-5xl font-bold mb-2">Gabriel {' '}
                            <span className="text-white">
                                Naldi
                            </span>
                        </h1>
                        <h3 className="text-lg font-medium mb-5">
                            Full-stack {' '}
                            <span className="text-firstColor">Developer</span>
                        </h3>
                        <p className="text-textColor text-sm leading-6">
                            With knowledge in development of modern Websites, Services, mobile Apps and APIs. I offer the best projects resulting in {' '}
                            <span className="text-textColor text-sm leading-6 whitespace-nowrap">quality work.</span>
                        </p>
                    </div>
                    <div className="text-center">
                        <div className="mb-8">
                            <a href="#contact" className="font-medium">Let's talk</a>
                        </div>
                        <div className="flex justify-center items-center gap-4">
                            <a href="https://github.com/gabrielnaldi" target="_blank" className="h-8 w-8 bg-firstColorAlt flex items-center justify-center clip-path-bg">
                                <AiFillGithub size={20} color="#fff" />
                            </a>
                            <a href="https://www.linkedin.com/in/gabriel-naldi-69b534193/" target="_blank" className="h-8 w-8 bg-firstColorAlt flex items-center justify-center clip-path-bg">
                                <AiFillLinkedin size={20} color="#fff" />
                            </a>
                            <a href="https://www.instagram.com/gnaldi_/" target="_blank" className="h-8 w-8 bg-firstColorAlt flex items-center justify-center clip-path-bg">
                                <AiFillInstagram size={20} color="#fff" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}