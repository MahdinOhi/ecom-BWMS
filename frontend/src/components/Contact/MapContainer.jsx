import React from 'react';

const MapContainer = () => {
    return (
        <div
            className="w-full rounded-xl overflow-hidden shadow-lg"
            style={{ maxWidth: '100%', maxHeight: '450px', marginLeft: '20px' }}
        >
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233668.38703692693!2d90.27923775453569!3d23.780863208220406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1683660871420!5m2!1sen!2sbd"
                width="95%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location Map"
                className="rounded-xl"
            ></iframe>
        </div>
    );
};

export default MapContainer;
