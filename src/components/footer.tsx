import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiOutlineCopyrightCircle } from "react-icons/ai";

export function Footer() {
    return (
        <div className="px-4 py-12 text-center w-full bg-navColor">
            <div className="mb-8">
                <h3 className="text-3xl font-semibold mb-1">
                    Gabriel <span className="text-firstColor">Naldi</span>
                </h3>
                <h5 className="font-bold text-md">Full-stack Developer</h5>
            </div>
            <div className="mb-8 flex gap-4 justify-center items-center md:justify-start">
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
            <div className="text-sm flex items-center gap-1 justify-center text-gray-400">
                <AiOutlineCopyrightCircle size={14} /> Copyright Gabriel Naldi. All rights reserved.
            </div>
        </div>
    )
}