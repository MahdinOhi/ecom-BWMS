import React from 'react';
import { Phone, MapPin, Mail } from 'lucide-react'; // Make sure you're importing icons

const ContactInfoIcons = () => {
    return (
        <div className="flex flex-wrap items-center justify-between mt-8">
            <div className="flex items-center gap-2 text-gray-500">
                <div className="flex items-center gap-1">
                    <Phone size={16} className="text-gray-500" />
                </div>
                <span className="text-xs">01605701614</span>
            </div>

            <div className="flex items-center gap-2 text-gray-500">
                <div className="flex items-center gap-1">
                    <Mail size={16} className="text-gray-500" />
                </div>
                <span className="text-xs">browheresmystuff@gmail.com</span>
            </div>
        </div>
    );
};

export default ContactInfoIcons;
