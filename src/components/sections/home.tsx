import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { Fade } from 'react-awesome-reveal';

export function HomeSection() {
    return (
        <section id="home" className="mt-16 py-16">
            <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:justify-center">
                <Fade direction="down">
                    <div className="flex flex-col gap-12">
                        <div className="pb-8 relative after-border">
                            <h3 className="text-2xl text-center font-semibold mb-2 md:text-left">
                                Hello! I'm
                            </h3>
                            <h1 className="text-white text-center text-6xl font-bold mb-2 sm:whitespace-nowrap md:text-left">Gabriel {' '}
                                <span className="text-white">
                                    Naldi
                                </span>
                            </h1>
                            <h3 className="text-lg text-center font-medium mb-5 md:text-left">
                                Full-stack {' '}
                                <span className="text-firstColor">Developer</span>
                            </h3>
                            <p className="text-textColor text-center text-sm leading-6 md:text-left">
                                With knowledge in development of modern Websites, Services, mobile Apps and APIs. I offer the best projects resulting in {' '}
                                <span className="text-textColor font-bold text-sm leading-6 whitespace-nowrap">quality work.</span>
                            </p>
                        </div>
                        <div className="flex justify-center w-full md:justify-start">
                            <a href="#contact" className="border-[1.4px] border-firstColor py-3 px-5 bg-firstColor rounded-md font-semibold hover:bg-white hover:text-firstColor transition-colors duration-300">Let's talk</a>
                        </div>
                        <div className="links flex gap-4 justify-center items-center md:justify-start">
                            <a href="https://github.com/gabrielnaldi" target="_blank" className="flex items-center justify-center bg-firstColorAlt p-1 rounded-full hover:-translate-y-1 transition-transform duration-300">
                                <AiFillGithub size={22} />
                            </a>
                            <a href="https://www.instagram.com/gnaldi_/" target="_blank" className="flex items-center justify-center bg-firstColorAlt p-1 rounded-full hover:-translate-y-1 transition-transform duration-300">
                                <AiFillInstagram size={22} />
                            </a>
                            <a href="https://www.linkedin.com/in/gabriel-naldi-69b534193/" target='_blank' className="flex items-center justify-center bg-firstColorAlt p-1 rounded-full hover:-translate-y-1 transition-transform duration-300">
                                <AiFillLinkedin size={22} />
                            </a>
                        </div>
                    </div>
                </Fade>
                <Fade direction="up">
                    <div className="flex justify-center items-center">
                        <img src="./profile-pic.png" className="w-full max-w-xs md:max-w-md" alt="" />
                    </div>
                </Fade>
            </div>
        </section>
    )
}