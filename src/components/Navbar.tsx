import { NavItem } from "./NavItem";

export function Navbar() {
    return (
        <ul className="flex">
            <NavItem title="Home" link="home" />
            <NavItem title="About" link="about" />
            <NavItem title="Services" link="services" />
            <NavItem title="Resume" link="resume" />
            <NavItem title="Contact" link="contact" />
        </ul>
    )
}