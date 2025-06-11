import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {Link} from 'react-router-dom';


const FavoriteButton = () => (
    <Link to="/wishlist">
    <button className="px-5 py-3 rounded-full border border-white hover:bg-white hover:text-purple-800">
        <FavoriteBorderIcon fontSize="small" />
    </button>
    </Link>
);

export default FavoriteButton;
