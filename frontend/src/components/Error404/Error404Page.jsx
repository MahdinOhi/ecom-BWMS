import React from 'react';
import GlassCard from '../GlassCard';
import SingleBox from '../../assets/box.png';
import Boxes from '../../assets/loginBox.png';
import { useNavigate } from 'react-router-dom';

const Error404Page = () => {
    const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-transparent flex items-center justify-center p-4">
     

      <div className="relative z-10 w-full bottom-36  ">
        

        <GlassCard className="p-9  border border-purple-400/30">
          <div className="flex flex-col md:flex-row items-center justify-between w-full mb-5 mt-4">
            {/* Left side - Box image */}
            <div className="flex flex-[1] justify-center md:justify-start  ">
              <img 
                src={Boxes}
                alt="Stacked boxes" 
                className="  object-contain "
              />
            </div>

            {/* Center - Error text and dotted line */}
            <div className="flex-[0.7] text-center ">
                <div className="text-center mb-16 ">
                    <span className="inline-block bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold " >
                        Page not found
                    </span>
                </div>
              {/* Dotted line with circles */}
              <div className="flex items-center justify-center mb-6">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                  <div className="w-1 h-1 bg-cyan-300 rounded-full animate-pulse delay-100"></div>
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse delay-200"></div>
                  <div className="w-1 h-1 bg-cyan-300 rounded-full animate-pulse delay-300"></div>
                  <div className="w-3 h-3 bg-cyan-500 rounded-full animate-pulse delay-400"></div>
                  <div className="w-1 h-1 bg-cyan-300 rounded-full animate-pulse delay-500"></div>
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse delay-600"></div>
                  <div className="w-1 h-1 bg-cyan-300 rounded-full animate-pulse delay-700"></div>
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse delay-800"></div>
                </div>
              </div>

              <div className="text-white">
                <h1 className="text-6xl md:text-6xl font-bold mb-2">404</h1>
                <h2 className="text-3xl md:text-6xl font-bold mb-2">error</h2>
                <p className="text-gray-300 text-lg mb-8">
                  Sorry, we couldn't find the page you are looking for.
                </p>
                
                <button   onClick={() => navigate('/')} className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                  BACK TO HOME
                </button>
              </div>
            </div>

            {/* Right side - Single box image */}
            <div className="flex flex-[0.75] justify-center md:justify-end">
              <img 
                src={SingleBox}
                alt="Single box" 
                className="w-60   object-contain "
              />
            </div>
          </div>
        </GlassCard>
      </div>
    </div>
  );
};

export default Error404Page;