import React, { useState } from 'react';
import { FiArrowRight } from "react-icons/fi";
import course1 from "../assets/course1.jpg";  
import couse2 from "../assets/couse2.jpg";
import course3 from "../assets/course3.jpg";
import CourseCard from '../components/CourseCard';

// Sample data for different categories
const courseData = {
  Design: [
    {
      title: 'Learn Figma - UI/UX Design Essentials',
      image: course1, 
      rating: 4.5,
      reviews: 6324,
      description: 'This course delves deep into understanding user needs, behaviors, and motivations...',
      price: 45.99
    },
    {
      title: 'Learn Figma - UI/UX Design Essentials',
      image: course1, 
      rating: 4.5,
      reviews: 6324,
      description: 'This course delves deep into understanding user needs, behaviors, and motivations...',
      price: 45.99
    },
    {
      title: 'Learn Figma - UI/UX Design Essentials',
      image: course1, 
      rating: 4.5,
      reviews: 6324,
      description: 'This course delves deep into understanding user needs, behaviors, and motivations...',
      price: 45.99
    },
  ],
  VideoEditing: [
    {
      title: 'Premiere Pro - Video Editing Bootcamp',
      image: couse2, 
      rating: 4.5,
      reviews: 9254,
      description: 'This course typically covers the entire video production pipeline...',
      price: 70.99
    }
  ],
  Programming: [
    {
      title: 'Python Power - Beginner to Coding Mastery',
      image: course3,
      rating: 4.5,
      reviews: 2524,
      description: 'This course is designed for individuals with no prior programming experience...',
      price: 50.99
    }
  ]
};

const Courses = () => {
  const [activeTab, setActiveTab] = useState('Design'); 

  return (
    <div className="py-10 px-5 lg:px-20">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center dark:text-white mb-8">Our Courses</h2>
      
      {/* Tabs */}
      <div className="flex justify-center flex-wrap gap-2 sm:gap-4 mb-8 px-2 md:px-4">
        {Object.keys(courseData).map((category) => (
          <button
            key={category}
            onClick={() => setActiveTab(category)}
            className={`px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 font-semibold rounded ${
              activeTab === category ? "bg-primary text-white" : "bg-secondary text-gray-800"
            } hover:bg-primary hover:text-white transition duration-300`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Course Cards based on Active Tab */}
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {courseData[activeTab].map((course, index) => (
          <CourseCard key={index} {...course} />
        ))}
      </div>

      {/* View All Courses Button */}
      <div className="flex justify-center items-center mt-8">
        <button className="px-6 py-3 border border-primary text-secondary dark:text-secondary font-medium rounded-md hover:bg-primary dark:hover:bg-primary hover:text-white transition flex items-center space-x-2">
          <span>View All Courses</span> 
          <FiArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Courses;
