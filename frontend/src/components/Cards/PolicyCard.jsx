// components/PolicyCard.jsx
import PolicyIcon from '../Policy/PolicyIcon';

export default function PolicyCard({ number, title, description }) {
    return (
        <div className="backdrop-blur-md bg-white/10 border border-white/20 shadow-md rounded-2xl p-4 flex gap-4 items-start">
            <PolicyIcon number={number} />
            <div>
                <h3 className="text-lg font-semibold text-white mb-1">{title}</h3>
                <p className="text-xs text-white/90 leading-relaxed">{description}</p>
            </div>
        </div>
    );
}
