import FavoriteButton from './FavoriteButton';
import CartButton from './CartButton';
import ProfileButton from './ProfileButton';

const IconButtons = () => (
    <div className="flex space-x-4 items-center text-white text-xl">
        <FavoriteButton />
        <CartButton count={0} />
        <ProfileButton />
    </div>
);

export default IconButtons;
