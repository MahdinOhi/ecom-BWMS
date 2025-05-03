import React from 'react';
import { Star, StarHalf, StarBorder } from '@mui/icons-material';

const RatingStars = ({ value }) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
        if (value >= i) stars.push(<Star key={i} className="text-yellow-400" />);
        else if (value >= i - 0.5) stars.push(<StarHalf key={i} className="text-yellow-400" />);
        else stars.push(<StarBorder key={i} className="text-yellow-400" />);
    }
    return <div className="flex">{stars}</div>;
};

const Tag = ({ icon: Icon, label, rating }) => (
    <div className="mt-[10px] mb-8 flex items-start gap-4 p-4 rounded-xl transition-transform duration-500 ease-in-out transform hover:scale-105">
        <Icon className="text-yellow-400 text-5xl mt-1" />
        <div className="flex flex-col text-white">
            <span className="text-xl font-medium">{label}</span>
            <RatingStars value={rating} />
        </div>
    </div>
);

export default Tag;
