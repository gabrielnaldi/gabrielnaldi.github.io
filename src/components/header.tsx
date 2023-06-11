import { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { NavbarMobile } from './navbar/navbar-mobile';
import { NavbarWeb } from './navbar/navbar-web';

export function Header() {
    const [isMobileNavbarOpen, setIsMobileNavbarOpen] = useState(false);

    const handleNavitemClick = () => {
        setIsMobileNavbarOpen(false);
    }

    return (
        <header className="z-10 fixed top-0 w-full max-w-6xl h-16 bg-bodyColor" id='header'>
            <div className="px-8 py-4 flex justify-between items-center max-w-8xl mx-auto">
                <span className='text-xl font-bold'>
                    Gabriel <span className='text-firstColor'>Naldi</span>
                </span>

                <span className='hover:cursor-pointer block sm:hidden' onClick={() => setIsMobileNavbarOpen(true)}>
                    <AiOutlineMenu size={24} />
                </span>

                <NavbarWeb handleNavitemClick={handleNavitemClick} />

                {isMobileNavbarOpen &&
                    <NavbarMobile handleMobileNavitemClick={handleNavitemClick} />
                }
            </div>

        </header>

    )
}