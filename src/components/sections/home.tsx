import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

export function HomeSection() {
    return (
        <section id="home">
            <div className="container">
                <div className="content flex flex-col gap-8">
                    <div className="first border border-red-200 flex flex-col items-center justify-center gap-12">
                        <div className="texts">
                            <h3 className="text-xl text-center font-semibold mb-2">
                                Hello! {" "}
                                <span className="text-firstColorAlt">I am</span>
                            </h3>
                            <h1 className="text-white text-center text-5xl font-bold mb-2">Gabriel {' '}
                                <span className="text-white">
                                    Naldi
                                </span>
                            </h1>
                            <h3 className="text-lg text-center font-medium mb-5">
                                Full-stack {' '}
                                <span className="text-firstColor">Developer</span>
                            </h3>
                            <p className="text-textColor text-center text-sm leading-6">
                                With knowledge in development of modern Websites, Services, mobile Apps and APIs. I offer the best projects resulting in {' '}
                                <span className="text-textColor font-bold text-sm leading-6 whitespace-nowrap">quality work.</span>
                            </p>
                        </div>
                        <div>
                            <a href="#contact" className="border-[1.4px] border-firstColor py-3 px-5 bg-firstColor rounded-md font-semibold hover:bg-white hover:text-firstColor transition-colors duration-300">Let's talk</a>
                        </div>
                        <div className="links flex gap-4">
                            <a href="https://github.com/gabrielnaldi" target="_blank" className="flex items-center justify-center bg-firstColorAlt p-1 clip-path-bg hover:-translate-y-1 transition-transform duration-300">
                                <AiFillGithub size={20} />
                            </a>
                            <a href="https://www.instagram.com/gnaldi_/" target="_blank" className="flex items-center justify-center bg-firstColorAlt p-1 clip-path-bg hover:-translate-y-1 transition-transform duration-300">
                                <AiFillInstagram size={20} />
                            </a>
                            <a href="https://www.linkedin.com/in/gabriel-naldi-69b534193/" target='_blank' className="flex items-center justify-center bg-firstColorAlt p-1 clip-path-bg hover:-translate-y-1 transition-transform duration-300">
                                <AiFillLinkedin size={20} />
                            </a>
                        </div>
                    </div>
                    <div className="second border border-red-200 flex justify-center">
                        <div className="img-container max-w-[280px] relative">
                            <img src="./profile-pic.png" className="" alt="" />
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}