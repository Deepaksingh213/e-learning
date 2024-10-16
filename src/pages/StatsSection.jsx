import React from 'react';

const statsData = [
  {
    id: 1,
    icon: '/assert/online.png', 
    number: '1200+',
    label: 'Special Courses',
  },
  {
    id: 2,
    icon: '/assert/graduated.png', 
    number: '24200+',
    label: 'Enrolled Students',
  },
  {
    id: 3,
    icon: '/assert/people.png', 
    number: '1000+',
    label: 'Expert Instructors',
  },
];

const StatsSection = () => {
  return (
    <div className=" dark:bg-gray-900 py-10 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 flex flex-wrap justify-center gap-56 text-center">
        {statsData.map((stat) => (
          <div key={stat.id} className="flex flex-col items-center">
            <div className="mb-2">
              {/* Icon */}
              <img src={stat.icon} alt={stat.label} className="h-16 w-16" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              {stat.number}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsSection;
