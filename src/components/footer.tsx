import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiOutlineArrowUp, AiOutlineCopyrightCircle } from "react-icons/ai";

export function Footer() {
    return (
        <section id="footer" className="bg-navColor">
            <div className="relative px-4 py-12 text-center w-full flex flex-col gap-12 justify-center max-w-6xl mx-auto lg:grid lg:grid-cols-3">
                <a href="#home" className="absolute top-0 right-8 flex h-8 w-8 rounded-full items-center justify-center bg-firstColor -translate-y-1/2 hover:brightness-125">
                    <AiOutlineArrowUp size={20} />
                </a>
                <div className="">
                    <h3 className="text-4xl font-semibold mb-1 ">
                        Gabriel <span className="text-firstColor">Naldi</span>
                    </h3>
                    <h5 className="font-bold text-lg">Full-stack Developer</h5>
                </div>
                <div className="flex gap-4 justify-center items-center">
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
                <div className="text-sm flex items-center gap-1 justify-center text-gray-400 whitespace-nowrap">
                    <AiOutlineCopyrightCircle size={14} /> Copyright Gabriel Naldi. All rights reserved.
                </div>
            </div>
        </section>
    )
}