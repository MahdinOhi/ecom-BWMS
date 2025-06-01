import React from 'react';
import { Link } from 'react-router-dom';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const CartButton = ({ count }) => (
    <div className="relative">
        <Link to="/empty-cart">
            <button className="px-5 py-3 rounded-full border border-white hover:bg-white hover:text-purple-800">
                <ShoppingCartOutlinedIcon fontSize="small" />
            </button>
        </Link>
        {count > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {count}
            </span>
        )}
    </div>
);

export default CartButton;
