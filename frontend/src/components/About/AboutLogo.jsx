import Logo from "../../assets/Cominational_Dark_Purple.png";

const AboutLogo = () => {
    return (
        // Logo - Positioned at Top Right
        <div className="absolute right-8 top-5">
            <div className="relative">
                <img
                    src={Logo}
                    alt="Bro Where's My Stuff Logo"
                    className="w-80 h-80"
                    onError={(e) => {
                        e.target.onerror = null;
                        e.target.src =
                            "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='128' height='128' viewBox='0 0 128 128'%3E%3Crect width='128' height='128' fill='%236B21A8' rx='10' /%3E%3Ctext x='50%' y='40%' font-family='Arial' font-size='18' fill='white' text-anchor='middle' dominant-baseline='middle'%3EBro%3C/text%3E%3Ctext x='50%' y='60%' font-family='Arial' font-size='14' fill='white' text-anchor='middle' dominant-baseline='middle'%3EWhere's%3C/text%3E%3Ctext x='50%' y='80%' font-family='Arial' font-size='16' fill='white' text-anchor='middle' dominant-baseline='middle'%3EMy Stuff%3C/text%3E%3C/svg%3E";
                    }}
                />
            </div>
        </div>
    );
};

export default AboutLogo;
