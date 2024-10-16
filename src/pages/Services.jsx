import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: "User Experience",
    description: "A collection of lessons on design that cover all the latest User Experience in the field.",
    iconBg: "bg-blue-100 dark:bg-blue-700",
    iconAlt: "User Experience",
    iconSrc: "/assert/graduated.png", 
    cardBg: "bg-white dark:bg-gray-800",
  },
  {
    title: "Web Development",
    description: "There are classes in development that cover the most recent advancements in the field of web development.",
    iconBg: "bg-pink-100 dark:bg-pink-700",
    iconAlt: "Web Development",
    iconSrc: "/assert/online.png", 
    cardBg: "bg-primary dark:bg-gray-800 text-white",
  },
  {
    title: "Marketing",
    description: "Courses that cover all aspects of marketing, as well as the most recent marketing trends.",
    iconBg: "bg-white dark:bg-gray-600",
    iconAlt: "Marketing",
    iconSrc: "/assert/people.png", 
    cardBg: "bg-purple-600 dark:bg-purple-800 text-white",
  },
];

const ServicesSection = () => {
  return (
    <div className="bg-white dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-purple-600 dark:text-purple-400 font-bold text-2xl">Our Services</p>
       
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* First Card */}
          <motion.div
            key={0}
            initial={{ opacity: 0, x: 50 }} // Start from right side
            animate={{ opacity: 1, x: 0 }} // Move to the original position
            transition={{ duration: 0.7 }} // Slower animation duration
            className={`${services[0].cardBg} shadow-lg rounded-lg p-6 text-left relative`}
          >
            <div className={`${services[0].iconBg} w-12 h-12 rounded-full flex items-center justify-center mb-4`}>
              <img src={services[0].iconSrc} alt={services[0].iconAlt} className="h-8 w-8" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">{services[0].title}</h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
              {services[0].description}
            </p>
            {services[0].title === "Marketing" && (
              <a href="#" className="absolute right-2 bg-gray-400 dark:bg-gray-600 text-gray-900 dark:text-white px-4 py-2 rounded-lg shadow">
                Learn More
              </a>
            )}
          </motion.div>

          {/* Second Card */}
          <motion.div
            key={1}
            initial={{ opacity: 0, x: 50 }} // Start from right side
            animate={{ opacity: 1, x: 0 }} // Move to the original position
            transition={{ duration: 0.7, delay: 0.3 }} // Slight delay for the second card
            className={`${services[1].cardBg} shadow-lg rounded-lg p-6 text-left relative`}
          >
            <div className={`${services[1].iconBg} w-12 h-12 rounded-full flex items-center justify-center mb-4`}>
              <img src={services[1].iconSrc} alt={services[1].iconAlt} className="h-8 w-8" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">{services[1].title}</h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
              {services[1].description}
            </p>
            {services[1].title === "Marketing" && (
              <a href="#" className="absolute right-2 bg-gray-400 dark:bg-gray-600 text-gray-900 dark:text-white px-4 py-2 rounded-lg shadow">
                Learn More
              </a>
            )}
          </motion.div>

          {/* Last Three Cards */}
          {services.slice(2).map((service, index) => (
            <motion.div
              key={index + 2} // Key should be unique, starting from 2 for the last cards
              initial={{ opacity: 0, x: 50 }} // Start from right side
              animate={{ opacity: 1, x: 0 }} // Move to the original position
              transition={{ duration: 0.7, delay: 0.3 + index * 0.2 }} // Staggered entrance for the last three cards
              className={`${service.cardBg} shadow-lg rounded-lg p-6 text-left relative`}
            >
              <div className={`${service.iconBg} w-12 h-12 rounded-full flex items-center justify-center mb-4`}>
                <img src={service.iconSrc} alt={service.iconAlt} className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">{service.title}</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                {service.description}
              </p>
              {service.title === "Marketing" && (
                <a href="#" className="absolute right-2 bg-gray-400 dark:bg-gray-600 text-gray-900 dark:text-white px-4 py-2 rounded-lg shadow">
                  Learn More
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
