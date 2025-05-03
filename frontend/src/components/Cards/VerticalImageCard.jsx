import React from 'react';
import PropTypes from 'prop-types';

const VerticalImageCard = ({ imageSrc, overlayText, textColor, linkHref }) => {
    return (
        <a href={linkHref} className="block group vic">
            <div className="relative w-[292px] h-[374.4px] rounded-[24px] overflow-hidden transform transition duration-300 group-hover:scale-105 group-hover:shadow-lg font-['DynaPuff']">
                <img
                    src={imageSrc}
                    alt="Card"
                    className="w-full h-full object-cover"
                />
                <div
                    className="absolute inset-0 flex items-center justify-center text-center text-[41px]"
                    style={{ color: textColor }}
                >
                    {overlayText}
                </div>

            </div>
        </a>
    );
};

VerticalImageCard.propTypes = {
    imageSrc: PropTypes.string.isRequired,
    overlayText: PropTypes.string.isRequired,
    textColor: PropTypes.string.isRequired,
    linkHref: PropTypes.string.isRequired,
};

export default VerticalImageCard;
