import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { Typewriter } from 'react-simple-typewriter'; // Importing Typewriter
import learning from "../assets/learning.jpg";

const HeroSection = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-500">
      {/* Main Section */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between max-w-7xl mx-auto px-4 py-10">
        {/* Left Content */}
        <div className="text-center lg:text-left lg:max-w-lg">
          <h1 className="text-4xl lg:text-[50px] font-bold text-gray-900 dark:text-white leading-tight">
            Master
            
          </h1>
          <h1 className="text-4xl lg:text-[50px] font-bold text-gray-900 dark:text-white leading-tight"><span className="text-primary dark:text-primary">
              <Typewriter
                words={['Creative Skills', 'Web Development', 'Design Thinking']}
                loop={0} 
                cursor
                cursorStyle="_"
                typeSpeed={250}
                deleteSpeed={80}
                delaySpeed={1000}
              />
            </span></h1>
          <h1 className="text-4xl lg:text-[35px] font-bold text-gray-900 dark:text-white leading-tight">
            and Launch Your Career Now!!
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Unlock your potential. Discover a world of knowledge. Start your journey today. Empower your future with over 100+ courses to choose from.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex items-center space-x-4">
            <button className="px-6 py-3 bg-primary text-white font-medium rounded-md hover:bg-primary transition">
              Join Now
            </button>
            <button className="px-6 py-3 border border-primary text-primary dark:text-primary font-medium rounded-md hover:bg-blue-50 dark:hover:bg-gray-800 transition flex items-center space-x-2">
              <span>Learn More</span> <FiArrowRight />
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/2 lg:pl-10 mt-3">
          <img
            src={learning}
            alt="Student learning"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
