import React from "react";
import GlassCard from "../GlassCard";
import { Phone, MapPin, Mail } from "lucide-react";
import Footer from "../Footer/Footer";
import BagImg from "../../assets/aboutUsBagImage.png";
import Logo from "../../assets/Cominational_Dark_Purple.png";


const AboutPage = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <div className="w-full  max-w-4xl bg-gradient-to-r  overflow-visible shadow-2xl relative">
          {/* Main Card Container with white curved corners */}
          <div className="rounded-3xl overflow-visible border-4 border-purple-700">
            <div className="bg-white rounded-3xl h-[400px] p-8 pt-12 pb-48 relative">
              {/* Top Content - Left Side Text */}
              <div className="max-w-md">
                <h1 className="text-3xl font-bold mb-2">
                  Everyone can get stylish fashion accessories at
                </h1>
                <h2 className="text-3xl font-bold text-purple-700 mb-4">
                  Bro Wheres My Stuff
                </h2>
                <p className="text-sm mb-6">
                  At Bro Where's My Stuff, we believe fashion should never play hide and seek.
                  From stylish bags to essential accessories, we've got the perfect accessories
                  for both kings and queens of style.
                </p>
                <p className="text-sm">
                  So next time you're wondering where your fashion flair went—spoiler alert—
                  it's with us...
                </p>
              </div>

              {/* Logo - Positioned at Top Right */}
              <div className="absolute right-8 top-12">
                <div className="relative">
                  <img
                    src={Logo}
                    alt="Bro Where's My Stuff Logo"
                    className="w-80 h-80"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='128' height='128' viewBox='0 0 128 128'%3E%3Crect width='128' height='128' fill='%236B21A8' rx='10' /%3E%3Ctext x='50%' y='40%' font-family='Arial' font-size='18' fill='white' text-anchor='middle' dominant-baseline='middle'%3EBro%3C/text%3E%3Ctext x='50%' y='60%' font-family='Arial' font-size='14' fill='white' text-anchor='middle' dominant-baseline='middle'%3EWhere's%3C/text%3E%3Ctext x='50%' y='80%' font-family='Arial' font-size='16' fill='white' text-anchor='middle' dominant-baseline='middle'%3EMy Stuff%3C/text%3E%3C/svg%3E";
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Product Image - Positioned to Overlap White and Purple Sections */}
            <div className="absolute left-20 bottom-40 z-10">
              <img
                src={BagImg}
                alt="Fashion Bag"
                className="w-[220px] h-[220px] object-cover rounded-lg shadow-xl border-2 border-purple-700"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='192' height='192' viewBox='0 0 192 192'%3E%3Crect width='192' height='192' fill='%23374151' rx='8' /%3E%3Ctext x='50%' y='50%' font-family='Arial' font-size='18' fill='white' text-anchor='middle' dominant-baseline='middle'%3EFashion Bag%3C/text%3E%3C/svg%3E";
                }}
              />
            </div>

            {/* Bottom Purple Section */}
            <div className="bg-white/5 backdrop-blur-sm shadow-[0_0_25px_5px_rgba(128,0,255,0.5)]  p-8 pt-16 relative h-72">
              {/* About Us Section */}
              <div className="flex justify-end items-start absolute z-10 right-16 bottom-24 ">

                <div className="w-96 text-right ">
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
          </div>
        </div>
        <Footer />
      </div>


    </>
  );
};

export default AboutPage;