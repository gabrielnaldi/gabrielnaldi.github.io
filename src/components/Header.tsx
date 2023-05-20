import { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { MobileNavbar } from './navbar/mobile';
import { NavbarWeb } from './navbar/navbar-web';

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

                <NavbarWeb handleNavitemClick={handleMobileNavitemClick} />

                {isMobileNavbarOpen &&
                    <MobileNavbar handleMobileNavitemClick={handleMobileNavitemClick} />
                }
            </div>

        </header>

    )
}