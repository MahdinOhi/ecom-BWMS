import { Phone, MapPin, Mail } from "lucide-react";

const AboutBottom = () => {
    return (
        // Bottom Purple Section
        <div className="bg-white/5 backdrop-blur-sm shadow-[0_0_25px_5px_rgba(128,0,255,0.5)] p-8 pt-16 relative h-72">
            {/* About Us Section */}
            <div className="flex justify-end items-start absolute z-10 right-16 bottom-24">
                <div className="w-96 text-right">
                    <h3 className="text-3xl font-bold text-black mb-6">About us</h3>

                    <div className="space-y-2 mb-6">
                        <div className="flex items-center justify-end gap-2">
                            <span className="text-white text-sm">PRE-ORDER BASED</span>
                            <div className="bg-green-500 rounded-full p-1">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                        </div>

                        <div className="flex items-center justify-end gap-2">
                            <span className="text-white text-sm">IMPORTED FROM CHINA</span>
                            <div className="bg-green-500 rounded-full p-1">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                        </div>

                        <div className="flex items-center justify-end gap-1">
                            <div className="text-right">
                                <span className="text-white text-sm">MUST READ TERMS & CONDITIONS BEFORE</span>
                                <br />
                                <span className="text-white text-sm">PLACING YOUR ORDER</span>
                            </div>
                            <div className="bg-green-500 rounded-full p-1">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Shop Now Button */}
                    <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded-md font-medium transition duration-300">
                        Shop now
                    </button>
                </div>
            </div>

            {/* Contact Info */}
            <div className="flex justify-center gap-16 mt-40 text-white">
                <div className="flex items-center gap-2">
                    <div className="bg-white/10 p-2 rounded-full">
                        <Phone size={20} className="text-white" />
                    </div>
                    <div>
                        <p className="text-xs uppercase mb-1">PHONE</p>
                        <p className="text-sm text-red-500">+880 176-456048</p>
                    </div>
                </div>

                <div className="flex items-center gap-2">
                    <div className="bg-white/10 p-2 rounded-full">
                        <MapPin size={20} className="text-white" />
                    </div>
                    <div>
                        <p className="text-xs uppercase mb-1">LOCATION</p>
                        <p className="text-sm text-red-500">address</p>
                    </div>
                </div>

                <div className="flex items-center gap-2">
                    <div className="bg-white/10 p-2 rounded-full">
                        <Mail size={20} className="text-white" />
                    </div>
                    <div>
                        <p className="text-xs uppercase mb-1">EMAIL</p>
                        <p className="text-sm text-red-500">bwmsmail@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutBottom;
