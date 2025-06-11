import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { Link } from 'react-router-dom';

const ProfileButton = () => (
    <Link to="/useracc">
        <button className="px-5 py-3 rounded-full border border-white hover:bg-white hover:text-purple-800">
            <PersonOutlineIcon fontSize="small" />
        </button>
    </Link>
);

export default ProfileButton;
