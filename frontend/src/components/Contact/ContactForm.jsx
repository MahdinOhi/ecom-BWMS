import React from 'react';

const ContactForm = () => {
    return (
        <form className="space-y-2">
            <div>
                <input
                    type="text"
                    placeholder="Name*"
                    className="w-full bg-gray-100 rounded-md p-3 text-gray-800 placeholder-gray-500 border border-gray-200 text-sm"
                />
            </div>

            <div>
                <input
                    type="email"
                    placeholder="Email*"
                    className="w-full bg-gray-100 rounded-md p-3 text-gray-800 placeholder-gray-500 border border-gray-200 text-sm"
                />
            </div>

            <div>
                <input
                    type="tel"
                    placeholder="Phone Number*"
                    className="w-full bg-gray-100 rounded-md p-3 text-gray-800 placeholder-gray-500 border border-gray-200 text-sm"
                />
            </div>

            <div>
                <textarea
                    placeholder="Describe your thoughts..."
                    rows="4"
                    className="w-full bg-gray-100 rounded-md p-3 text-gray-800 placeholder-gray-500 border border-gray-200 text-sm"
                ></textarea>
            </div>

            <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-md w-full transition duration-300 font-medium flex items-center justify-center text-sm"
            >
                SEND
            </button>
        </form>
    );
};

export default ContactForm;
