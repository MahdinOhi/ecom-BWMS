const FeedBackCard = ({ profileImage, name, date, content }) => {
    return (
        <div className="w-[260.4px] min-w-[260px] h-[183.6px] p-[22.4px] bg-white rounded-[16px] shadow-lg flex-shrink-0">
            <div className="flex justify-between items-start mb-[22.4px]">
                <div className="flex items-center">
                    <img
                        src={profileImage}
                        alt="Profile"
                        className="w-[32px] h-[32px] rounded-full mr-[6.72px]"
                    />
                    <span className="font-semibold text-[16px] text-slate-950">{name}</span>
                </div>
                <span className="text-[12px] text-gray-600 mt-[4px]">{date}</span>
            </div>
            <div className="text-[14px] leading-[22px] text-gray-800 line-clamp-4 overflow-hidden">
                {content}
            </div>
        </div>
    );
};

export default FeedBackCard;
