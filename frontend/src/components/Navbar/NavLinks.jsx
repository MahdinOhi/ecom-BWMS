import { Link } from 'react-router-dom';

const NavLinks = ({ routes }) => (
    <div className="flex space-x-6 text-white text-xl text-[24px]">
        {routes.map(route => (
            <Link key={route.path} to={route.path} className="hover:text-purple-300">
                {route.label}
            </Link>
        ))}
    </div>
);

export default NavLinks;
