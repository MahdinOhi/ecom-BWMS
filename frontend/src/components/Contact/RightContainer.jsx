import React from 'react';
import MapContainer from './MapContainer';

const RightContainer = () => {
    return (
        <div className="p-8 md:p-12 flex-1 md:w-2/5 flex flex-col justify-center items-center">
            {/* Logo Section */}
            <div className="mb-8">
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                    <img
                        src="/logo.png"
                        alt="Bro Where's My Stuff Logo"
                        className="w-24 h-24"
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src =
                                "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%236B21A8' rx='10' /%3E%3Ctext x='50%' y='50%' font-family='Arial' font-size='14' fill='white' text-anchor='middle' dominant-baseline='middle'%3EBro Where's My Stuff%3C/text%3E%3C/svg%3E";
                        }}
                    />
                </div>
            </div>
            <MapContainer />
        </div>
    );
};

export default RightContainer;
