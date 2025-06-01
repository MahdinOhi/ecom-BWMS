// components/PolicyIcon.jsx
export default function PolicyIcon({ number }) {
    return (
        <div className="w-6 h-6 rounded-full bg-red-500 text-white font-bold flex items-center justify-center p-6">
            {number}
        </div>
    );
}
