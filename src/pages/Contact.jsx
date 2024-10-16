import React from 'react';

const ContactForm = () => {
  return (
    <div className="flex items-center justify-center  p-10 bg-slate-200 dark:bg-gray-900">
      {/* Card Container */}
      <div className="bg-gray-200 dark:bg-gray-800 shadow-lg rounded-lg flex flex-col lg:flex-row w-full h-full lg:h-auto  ">
        
        {/* Form Section */}
        <div className="w-full lg:w-1/2 p-10">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Contact us</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Our friendly team would love to hear from you!
          </p>
          <form className="space-y-6">
            <div className="flex space-x-4">
              <input
                type="text"
                placeholder="First name"
                className="w-1/2 p-3 border border-gray-300 rounded-md shadow-sm dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Last name"
                className="w-1/2 p-3 border border-gray-300 rounded-md shadow-sm dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <input
              type="email"
              placeholder="you@company.com"
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="tel"
              placeholder="+1 (555) 000-0000"
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              placeholder="Message"
              rows="4"
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-3 rounded-md shadow-md hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Send message
            </button>
          </form>
        </div>

        {/* Map Section */}
        <div className="w-full lg:w-1/2">
      
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7005.707772380831!2d77.34295368819417!3d28.604159872120555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5110992b491%3A0x2af7233273358e30!2sSector%2055%2C%20Noida%2C%20Uttar%20Pradesh%20201301!5e0!3m2!1sen!2sin!4v1729005488931!5m2!1sen!2sin" allowfullscreen="true" loading="lazy"  className="w-full h-full rounded-r-lg"  referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
