import React from "react";
import FeedbackCard from "./FeedBackCard";

const feedbacks = [
    {
        profileImage: "https://via.placeholder.com/32",
        name: "Hanah Iesiss",
        date: "02.02.202X",
        content:
            "Lorem ipsum dolor sit amet consectetuer adipiscing elit sed diam nonummy nibh euismod tincidunt ut. Lorem ipsum dolor sit amet consectetuer adipiscing elit sed diam nonummy nibh euismod tincidunt.",
    },
    {
        profileImage: "https://via.placeholder.com/32",
        name: "Hanah Iesiss",
        date: "01.25.202X",
        content:
            "Lorem ipsum dolor sit amet consectetuer adipiscing elit sed diam nonummy nibh euismod tincidunt ut. Lorem ipsum dolor sit amet consectetuer adipiscing elit sed diam nonummy nibh euismod tincidunt.",
    },
    {
        profileImage: "https://via.placeholder.com/32",
        name: "Hanah Iesiss",
        date: "03.15.202X",
        content:
            "Lorem ipsum dolor sit amet consectetuer adipiscing elit sed diam nonummy nibh euismod tincidunt ut. Lorem ipsum dolor sit amet consectetuer adipiscing elit sed diam nonummy nibh euismod tincidunt.",
    },
    {
        profileImage: "https://via.placeholder.com/32",
        name: "Hanah Iesiss",
        date: "04.10.202X",
        content:
            "Lorem ipsum dolor sit amet consectetuer adipiscing elit sed diam nonummy nibh euismod tincidunt ut. Lorem ipsum dolor sit amet consectetuer adipiscing elit sed diam nonummy nibh euismod tincidunt.",
    },
    {
        profileImage: "https://via.placeholder.com/32",
        name: "Hanah Iesiss",
        date: "05.22.202X",
        content:
            "Lorem ipsum dolor sit amet consectetuer adipiscing elit sed diam nonummy nibh euismod tincidunt ut. Lorem ipsum dolor sit amet consectetuer adipiscing elit sed diam nonummy nibh euismod tincidunt.",
    },
];

const FeedbackSection = () => {
    return (
        <div className="w-full py-16 px-4" style={{ marginLeft: '145px' }}>
            <h2 className="text-3xl font-bold mb-8 text-left text-white">FEEDBACKS</h2>
            <div className="flex gap-6 overflow-x-auto pb-4 hide-scrollbar cursor-pointer items-center">
                {feedbacks.map((fb, index) => (
                    <FeedbackCard
                        key={index}
                        profileImage={fb.profileImage}
                        name={fb.name}
                        date={fb.date}
                        content={fb.content}
                    />
                ))}
            </div>
        </div>
    );
};

export default FeedbackSection;
