
import React from "react";
import GlassCard from "../GlassCard";
import { Phone, MapPin, Mail } from "lucide-react";
import Footer from "../Footer/Footer";

const ContactPage = () => {
  return (
    <>
    <div className="container mx-auto py-10 px-4 w-[1200px]">
      <GlassCard>
        <div className="relative w-full flex flex-col md:flex-row">
          {/* White Background Container */}
          <div className="absolute top-0 bottom-0 left-0 w-3/5 bg-white rounded-l-2xl z-0"></div>
          
          {/* Content Container */}
          <div className="relative z-10 flex flex-col md:flex-row w-full">
            {/* Left Side - Form Section */}
            <div className="p-4 md:p-8 flex-1 md:w-3/5">
              <h2 className="text-3xl font-bold text-gray-800">
                Get in <span className="text-purple-500">Touch</span>
              </h2>
              <p className="text-gray-600 text-sm mb-8">
                Have questions or ideas? We're here to listen, support, and collaborate—
                because every great conversation begins with a connection.
              </p>
              
              {/* Form */}
              <form className="space-y-2">
                <div>
                  <input
                    type="text"
                    placeholder="Name*"
                    className="w-full bg-gray-100 rounded-md p-3 text-gray-800 placeholder-gray-500 border border-gray-200"
                  />
                </div>
                
                <div>
                  <input
                    type="email"
                    placeholder="Email*"
                    className="w-full bg-gray-100 rounded-md p-3 text-gray-800 placeholder-gray-500 border border-gray-200"
                  />
                </div>
                
                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number*"
                    className="w-full bg-gray-100 rounded-md p-3 text-gray-800 placeholder-gray-500 border border-gray-200"
                  />
                </div>
                
                <div>
                  <textarea
                    placeholder="Describe your thoughts..."
                    rows="4"
                    className="w-full bg-gray-100 rounded-md p-3 text-gray-800 placeholder-gray-500 border border-gray-200"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-md w-full transition duration-300 font-medium flex items-center justify-center"
                >
                  SEND
                </button>
              </form>
              
              {/* Contact Info Icons */}
              <div className="flex flex-wrap items-center justify-between mt-8">
                <div className="flex items-center gap-2 text-gray-500">
                  <div className="flex items-center gap-1">
                    <Phone size={16} className="text-gray-500" />
                    <span className="text-xs uppercase">PHONE</span>
                  </div>
                  <span className="text-xs">+8801605-701614</span>
                </div>
                
                <div className="flex items-center gap-2 text-gray-500">
                  <div className="flex items-center gap-1">
                    <MapPin size={16} className="text-gray-500" />
                    <span className="text-xs uppercase">LOCATION</span>
                  </div>
                  <span className="text-xs">Dhaka, Bangladesh</span>
                </div>
                
                <div className="flex items-center gap-2 text-gray-500">
                  <div className="flex items-center gap-1">
                    <Mail size={16} className="text-gray-500" />
                    <span className="text-xs uppercase">EMAIL</span>
                  </div>
                  <span className="text-xs">browheresmystuff@gmail.com</span>
                </div>
              </div>
            </div>
            
            {/* Right Side - Logo & Map Section  */}
            <div className="p-8 md:p-12 flex-1 md:w-2/5 flex flex-col justify-center items-center">
              {/* Logo Section */}
              <div className="mb-8">
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                  <img 
                    src="/logo.png" 
                    alt="Bro Where's My Stuff Logo" 
                    className="w-24 h-24"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%236B21A8' rx='10' /%3E%3Ctext x='50%' y='50%' font-family='Arial' font-size='14' fill='white' text-anchor='middle' dominant-baseline='middle'%3EBro Where's My Stuff%3C/text%3E%3C/svg%3E";
                    }}
                  />
                </div>
              </div>
              
              {/* Map - Floating Effect */}
              <div className="w-full rounded-xl overflow-hidden shadow-lg" style={{ maxWidth: "100%", maxHeight: "450px", marginLeft: "20px" }}>
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
            </div>
          </div>
        </div>
      </GlassCard>
    </div>
    <Footer />
    </>
  );

};

export default ContactPage;