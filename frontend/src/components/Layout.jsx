// Layout.js for holding the background image
import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div
            style={{
                backgroundImage: 'url(/img/hero/Background.svg)',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                minHeight: '100vh',
            }}
        >
            <Outlet />
        </div>
    );
};

export default Layout;
