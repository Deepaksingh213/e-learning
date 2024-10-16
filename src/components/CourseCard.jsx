import React from 'react';

const CourseCard = ({ title, image, rating, reviews, description, price }) => {
  return (
    <div className="bg-gray-200/40 dark:bg-gray-800 shadow-lg rounded-xl p-5 max-w-sm md:max-w-md lg:max-w-lg mx-auto">
      <img src={image} alt={title} className="rounded-t-lg w-full object-cover" />
      <div className="p-4">
        <div className="flex items-center">
          <span className="text-yellow-500 dark:text-yellow-400 text-lg font-bold">{rating}</span>
          <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">({reviews} reviews)</span>
        </div>
        <h3 className="text-xl font-semibold dark:text-white">{title}</h3>
        <p className="text-gray-700 dark:text-gray-300 mt-2">{description}</p>
        <div className="flex justify-between items-center mt-4">
          <button className="bg-primary text-white dark:bg-primary dark:hover:bg-primary px-4 py-2 rounded-md hover:bg-primary transition">Join Now</button>
          <span className="text-lg font-bold dark:text-white">${price}</span>
        </div>
      </div>
   </div>
  );
};

export default CourseCard;
