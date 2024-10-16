import React from 'react';
import logo from "../assets/logo.png";

const Footer = () => {
  // Define footer sections and links
  const footerLinks = [
    {
      title: 'Master',
      links: ['About', 'Pricing', 'Jobs'],
    },
    {
      title: 'Details',
      links: ['How to Apply', 'Blogs', 'Course Details'],
    },
    {
      title: 'Help Center',
      links: ['Community', 'Academy', 'Support'],
    },
  ];

  return (
    <footer className="bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 py-12">
      <div className="container mx-auto flex flex-wrap justify-between items-start px-4 lg:px-0">

        {/* Left Section: Logo and Description - 50% width */}
        <div className="w-full lg:w-2/5 mb-8 lg:mb-0">
          <div className="flex items-center space-x-2 mb-4">
            <div className=" text-white p-2 rounded-md">
            <img
          src={logo}
          className="mr-3 h-6 sm:h-8 md:h-10 bg-transparent mix-blend-multiply"
          alt="K.K. Campus Logo"
        />
            </div>
            <span className="font-semibold text-lg">K.K.Campus</span>
          </div>
          <p className="text-gray-500 dark:text-gray-400">
            Where your journey to expertise begins. We’re a cutting-edge online course platform dedicated to empowering learners of all ages and backgrounds with the knowledge and skills.
          </p>
        </div>

        {/* Right Section: Dynamic Footer Links - 50% width */}
        <div className="w-full lg:w-3/5 grid grid-cols-3 gap-2">
          {footerLinks.map((section, index) => (
            <div key={index} className="space-y-4">
              <h4 className="font-semibold text-gray-700 dark:text-gray-200">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-4 text-center text-sm">
        <p>© Copyright 2024 K.K.Campus</p>
      </div>
    </footer>
  );
};

export default Footer;
