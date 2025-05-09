import { useEffect, useState } from 'react';
import Logo from '../Logo';
import NavLinks from './NavLinks';
import SearchBar from '../SearchBar';
import IconButtons from './IconButtons';

const Navbar = ({ routes }) => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`w-full h-[115px] sticky top-0 z-50 flex justify-between items-center px-8 transition-all duration-300 
            ${scrolled
                    ? 'backdrop-blur-md bg-[#431640]/70 border-b border-white/10 shadow-md'
                    : 'bg-transparent'
                }`}
        >
            <Logo />
            <div className="flex items-center gap-4">
                <NavLinks routes={routes} />
                {scrolled && (
                    <div className="w-[332px] ml-[30px] animate-fade-in">
                        <SearchBar />
                    </div>
                )}
            </div>
            <IconButtons />
        </nav>
    );
};

export default Navbar;
