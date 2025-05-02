import Logo from '../Logo';
import NavLinks from './NavLinks';
import IconButtons from './IconButtons';

const Navbar = ({ routes }) => (
    <nav className="w-full sticky top-0 z-50 flex justify-between items-center px-8 py-4 bg-transparent shadow-md">
        <Logo />
        <NavLinks routes={routes} />
        <IconButtons />
    </nav>
);

export default Navbar;
