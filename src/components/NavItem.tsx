interface NavItemProps {
    title: string;
    link: string;
}

export function NavItem({ title, link }: NavItemProps) {
    return (
        <li>
            <a
                href={`#${link}`}
                className='text-white px-5 py-3 text-base font-medium hover:bg-main hover:duration-300'
            >
                {title}
            </a>
        </li>
    )
}