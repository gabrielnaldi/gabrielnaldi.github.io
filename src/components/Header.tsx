import { useState } from 'react'
import { AiFillCloseCircle, AiOutlineMenu } from 'react-icons/ai'
import { MobileNavbar } from './navbar/mobile';

export function Header() {
    const [isMobileNavbarOpen, setIsMobileNavbarOpen] = useState(true);

    const handleMobileNavitemClick = () => {
        setIsMobileNavbarOpen(false);
    }

    return (
        <header className="z-10 fixed w-full bg-containerColor" id='header'>
            <div className="px-8 py-4 flex justify-between items-center max-w-8xl mx-auto">
                <span className='text-2xl font-bold'>
                    Gabriel <span className='text-firstColor'>Naldi</span>
                </span>

                <span className='hover:cursor-pointer block sm:hidden' onClick={() => setIsMobileNavbarOpen(true)}>
                    <AiOutlineMenu size={24} />
                </span>

                <nav className='sm:block hidden'>
                    <ul className='flex items-center gap-6 md:gap-10'>
                        <li>
                            <a href="#home" className='nav-item'>Home</a>
                        </li>
                        <li>
                            <a href="#about" className='nav-item'>About</a>
                        </li>
                        <li>
                            <a href="#services" className='nav-item'>Services</a>
                        </li>
                        <li>
                            <a href="#projects" className='nav-item'>Projects</a>
                        </li>
                        <li>
                            <a href="#contact" className='nav-item'>Contact</a>
                        </li>
                    </ul>
                </nav>

                {isMobileNavbarOpen &&
                    <MobileNavbar handleMobileNavitemClick={handleMobileNavitemClick} />
                }
            </div>

        </header>

    )
}