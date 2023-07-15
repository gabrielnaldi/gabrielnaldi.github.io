interface NavbarWebProps {
    handleNavitemClick: () => void;
}

export function NavbarWeb({ handleNavitemClick }: NavbarWebProps) {
    return (
        <nav className='sm:block hidden'>
            <ul className='flex items-center gap-2 md:gap-8'>
                <li>
                    <a href="#home" className='nav-item' onClick={handleNavitemClick}>Home</a>
                </li>
                <li>
                    <a href="#about" className='nav-item' onClick={handleNavitemClick}>About</a>
                </li>
                <li>
                    <a href="#skills" className='nav-item' onClick={handleNavitemClick}>Skills</a>
                </li>
                <li>
                    <a href="#services" className='nav-item' onClick={handleNavitemClick}>Services</a>
                </li>
                <li>
                    <a href="#projects" className='nav-item' onClick={handleNavitemClick}>Projects</a>
                </li>
                <li>
                    <a href="#contact" className='nav-item' onClick={handleNavitemClick}>Contact</a>
                </li>
            </ul>
        </nav>
    )
}