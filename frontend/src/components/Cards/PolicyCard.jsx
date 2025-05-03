import { Target, Shield, Tag, Handshake } from "lucide-react";

export default function PolicyCard({ id, icon, title, description }) {
    const getIcon = (iconName) => {
        const icons = {
            "target": Target,
            "shield": Shield,
            "tag": Tag,
            "handshake": Handshake
        };
        const IconComponent = icons[iconName] || Target;
        return <IconComponent size={20} color="white" />;
    };

    return (
        <div className="relative h-[200px] rounded-xl overflow-hidden transition-all duration-300 hover:transform hover:scale-105">
            {/* Static Glass background */}
            <div className="absolute inset-0 bg-purple-900/30 backdrop-blur-md border border-purple-500/30 rounded-xl shadow-lg" />

            {/* Static Border Gradient (no animation, no blur) */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-pink-500/30 to-purple-500/30 z-0" />

            {/* Content */}
            <div className="relative z-10 p-4 h-full flex flex-col">
                <div className="flex items-start space-x-3 mb-3">
                    <div className="bg-red-600 rounded-full p-2 flex items-center justify-center mt-3 shadow-lg">
                        {getIcon(icon)}
                    </div>
                    <h3 className="text-base font-semibold text-white pt-1">
                        {id}. {title}
                    </h3>
                </div>
                <p className="text-gray-200 text-xs leading-tight overflow-hidden text-ellipsis">
                    {description}
                </p>
            </div>
        </div>
    );
}
