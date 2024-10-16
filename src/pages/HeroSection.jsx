import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import learning from "../assets/learning.jpg";

const HeroSection = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-500">
      {/* Main Section */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between max-w-7xl mx-auto px-4 py-10">
        {/* Left Content */}
        <div className="text-center lg:text-left lg:max-w-lg">
          <h1 className="text-4xl lg:text-[50px] font-bold text-gray-900 dark:text-white leading-tight">
            Master <span className="text-primary dark:text-primary">Creative Skills</span> and Launch Your Career Now!!
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

          {/* Ratings */}
            {/* <div className="mt-8 flex items-center space-x-3">
        
          <div className="flex -space-x-2">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="avatar"
                className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-900"
              />
              <img
                src="https://randomuser.me/api/portraits/women/34.jpg"
                alt="avatar"
                className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-900"
              />
              <img
                src="https://randomuser.me/api/portraits/men/35.jpg"
                alt="avatar"
                className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-900"
              />
            </div> 
         
            <div className="text-gray-600 dark:text-gray-400">
              <p>
                Trusted by 100k+ students{" "}
                <span className="font-bold text-black dark:text-white">
                  4.5/5
                </span>{" "}
                <span className="text-sm">(25k reviews)</span>
              </p>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
            </div>
          </div>*/}
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

