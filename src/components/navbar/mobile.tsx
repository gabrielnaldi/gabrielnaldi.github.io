import { AiFillCloseCircle, AiOutlineMenu } from 'react-icons/ai'

interface MobileNavbarProps {
    handleMobileNavitemClick: () => void;
}

export const MobileNavbar: React.FC<MobileNavbarProps> = ({ handleMobileNavitemClick }) => {
    return (
        <nav className="nav-container-mobile block sm:hidden">
            <ul className='grid grid-cols-1 gap-6'>
                <li>
                    <a href="#home" className='mobile-nav-item' onClick={handleMobileNavitemClick}>Home</a>
                </li>
                <li>
                    <a href="#about" className='mobile-nav-item' onClick={handleMobileNavitemClick}>About</a>
                </li>
                <li>
                    <a href="#services" className='mobile-nav-item' onClick={handleMobileNavitemClick}>Services</a>
                </li>
                <li>
                    <a href="#projects" className='mobile-nav-item' onClick={handleMobileNavitemClick}>Projects</a>
                </li>
                <li>
                    <a href="#contact" className='mobile-nav-item' onClick={handleMobileNavitemClick}>Contact</a>
                </li>
            </ul>
            <span className="absolute right-8 top-5 cursor-pointer" onClick={handleMobileNavitemClick}>
                <AiFillCloseCircle size={24} />
            </span>
        </nav>
    )
}