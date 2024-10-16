import React from 'react';
import CourseCard from '../components/CourseCard';
import course1 from "../assets/course1.jpg";
 import couse2 from "../assets/couse2.jpg";
 import course3 from "../assets/course3.jpg";
 import { FiArrowRight } from "react-icons/fi";

const courses = [
  {
    title: 'Learn Figma - UI/UX Design Essentials',
    image: course1, 
    rating: 4.5,
    reviews: 6324,
    description: 'This course delves deep into understanding user needs, behaviors, and motivations...',
    price: 45.99
  },
  {
    title: 'Premiere Pro - Video Editing Bootcamp',
    image: couse2, 
    rating: 4.5,
    reviews: 9254,
    description: 'This course typically covers the entire video production pipeline...',
    price: 70.99
  },
  {
    title: 'Python Power - Beginner to Coding Mastery',
    image: course3,
    rating: 4.5,
    reviews: 2524,
    description: 'This course is designed for individuals with no prior programming experience...',
    price: 50.99
  }
];

const Courses = () => {
  return (
    <div className="py-10 px-5">
      <h2 className="text-3xl font-bold text-center dark:text-white mb-8">Our Popular Enrolled Courses</h2>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((course, index) => (
          <CourseCard key={index} {...course} />
        ))}
      </div>
      <div className='flex justify-center items-center mt-8'>
      <button className="px-6 py-3 border border-primary text-primary dark:text-primary font-medium rounded-md hover:bg-blue-50 dark:hover:bg-gray-800 transition flex items-center space-x-2">
          <span>  View All Courses</span> <FiArrowRight />
      </button>
      </div>
    </div>
  );
};

export default Courses;
