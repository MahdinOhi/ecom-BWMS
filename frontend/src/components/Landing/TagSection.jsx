import React from 'react';
import Tag from './Tag';

const TagSection = ({ tags }) => {
    return (
        <div className="flex justify-center items-center flex-wrap text-white bg-transparent mx-[100px] px-[22px] gap-">
            {tags.map((tag, index) => (
                <Tag key={index} icon={tag.icon} label={tag.label} rating={tag.rating} />
            ))}
        </div>
    );
};

export default TagSection;
