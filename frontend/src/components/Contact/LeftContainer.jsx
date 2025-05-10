import React from 'react';
import ContactForm from './ContactForm';
import ContactInfoIcons from './ContactInfoIcons';

const LeftContainer = () => {
    return (
        <div className="p-4 md:p-8 flex-1 md:w-3/5">
            <h2 className="text-3xl font-bold text-gray-800">
                Get in <span className="text-purple-500">Touch</span>
            </h2>
            <p className="text-gray-600 text-sm mb-8">
                Have questions or ideas? We're here to listen, support, and collaborate—
                because every great conversation begins with a connection.
            </p>
            <ContactForm />
            <ContactInfoIcons />
        </div>
    );
};

export default LeftContainer;
