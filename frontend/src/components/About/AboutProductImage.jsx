import BagImg from "../../assets/aboutUsBagImage.png";

const AboutProductImage = () => {
    return (
        // Product Image - Positioned to Overlap White and Purple Sections
        <div className="absolute left-9 bottom-36 z-10 mt-40">
            <img
                src={BagImg}
                alt="Fashion Bag"
                className="w-[220px] h-[220px] object-cover rounded-lg shadow-xl border-2 border-purple-700"
                onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='192' height='192' viewBox='0 0 192 192'%3E%3Crect width='192' height='192' fill='%23374151' rx='8' /%3E%3Ctext x='50%' y='50%' font-family='Arial' font-size='18' fill='white' text-anchor='middle' dominant-baseline='middle'%3EFashion Bag%3C/text%3E%3C/svg%3E";
                }}
            />
        </div>
    );
};

export default AboutProductImage;
