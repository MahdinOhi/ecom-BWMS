import { useEffect, useState } from 'react';
import Logo from '../Logo';
import NavLinks from './NavLinks';
import IconButtons from './IconButtons';

const Navbar = ({ routes }) => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`w-full h-[115px] sticky top-0 z-50 flex justify-between items-center px-8 transition-all duration-300 ${scrolled
                ? 'backdrop-blur-md bg-[#431640]/70 border-b border-white/10 shadow-md'
                : 'bg-transparent'
                }`}
        >
            <Logo />
            <NavLinks routes={routes} />
            <IconButtons />
        </nav>
    );
};

export default Navbar;
