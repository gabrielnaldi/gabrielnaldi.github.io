import { useState } from 'react'
import { AiFillCloseCircle, AiOutlineMenu } from 'react-icons/ai'

export function Header() {
    const [isNavBarOpen, setIsNavbarOpen] = useState(true);

    return (
        <header className="z-10 fixed w-full bg-containerColor">
            <div className="px-6 py-4 flex justify-between items-center">
                <span className='text-2xl font-semibold'>
                    Gabriel <span className='text-firstColor'>Naldi</span>
                </span>

                <span className='hover:cursor-pointer' onClick={() => setIsNavbarOpen(true)}>
                    <AiOutlineMenu size={24} />
                </span>
            </div>
            {isNavBarOpen &&
                <nav className="fixed z-10 top-0 right-0 bottom-0 w-[70%] backdrop-blur-xl pt-16 pl-14">
                    <ul className='grid grid-cols-1 gap-6'>
                        <li>
                            <a href="" className='text-lg font-medium hover:text-firstColor'>Home</a>
                        </li>
                        <li>
                            <a href="" className='text-lg font-medium hover:text-firstColor transition-colors duration-500'>About</a>
                        </li>
                        <li>
                            <a href="" className='text-lg font-medium hover:text-firstColor'>Services</a>
                        </li>
                        <li>
                            <a href="" className='text-lg font-medium hover:text-firstColor'>Projects</a>
                        </li>
                        <li>
                            <a href="" className='text-lg font-medium hover:text-firstColor'>Contact</a>
                        </li>
                    </ul>
                    <span className="absolute right-6 top-5 cursor-pointer" onClick={() => setIsNavbarOpen(false)}>
                        <AiFillCloseCircle size={24} />
                    </span>
                </nav>}
        </header>

    )
}