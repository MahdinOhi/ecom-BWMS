import { Link } from 'react-router-dom';

const Logo = () => (
    <Link to="/" className="flex items-center ml-[42px] mt-[12px]">
        <img src="/img/hero/Logo.png" alt="Logo" className="h-32" />
    </Link>
);

export default Logo;
