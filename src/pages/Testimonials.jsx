import React from 'react';

const testimonials = [
  {
    name: "Jenni Amy",
    location: "Tokyo, Japan",
    review: "This platform has completely transformed my approach to graphic design. The courses are incredibly well-structured, and all the instructors are industry experts.",
    imageUrl: "https://randomuser.me/api/portraits/women/1.jpg",
    rating: 5,
  },
  {
    name: "Devon Lane",
    location: "Paris, France",
    review: "This website offers fantastic UX/UI design courses that are engaging and informative. Loved the whole course a lot.",
    imageUrl: "https://randomuser.me/api/portraits/women/2.jpg",
    rating: 5,
  },
  {
    name: "Esther Howard",
    location: "Grand Canyon, USA",
    review: "I’ve taken several courses on this website, and each one has been fantastic. The lessons are practical, the projects engaging, and the community supportive.",
    imageUrl: "https://randomuser.me/api/portraits/men/3.jpg",
    rating: 5,
  },
  {
    name: "Darlene Robertson",
    location: "Marrakech, Morocco",
    review: "I’ve been using this site to learn more about music production, and the results have been phenomenal. The courses are detailed and cover everything.",
    imageUrl: "https://randomuser.me/api/portraits/women/4.jpg",
    rating: 5,
  },
  {
    name: "Kathryn Murphy",
    location: "Sydney, Australia",
    review: "The web development courses offered here are top-notch. The curriculum covers everything from the basics to advanced techniques.",
    imageUrl: "https://randomuser.me/api/portraits/women/5.jpg",
    rating: 5,
  },
  {
    name: "William Wilson",
    location: "Reykjavik, Iceland",
    review: "I’ve always loved photography but wanted to take my skills to the next level. This website offers excellent courses from amateur to advanced.",
    imageUrl: "https://randomuser.me/api/portraits/men/6.jpg",
    rating: 5,
  },
];

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
      <div className="flex items-center">
        <img
          className="w-12 h-12 rounded-full object-cover"
          src={testimonial.imageUrl}
          alt={`${testimonial.name}'s profile`}
        />
        <div className="ml-4">
          <h3 className="text-lg font-semibold dark:text-white">{testimonial.name}</h3>
          <p className="text-gray-500 dark:text-gray-400 text-sm">{testimonial.location}</p>
        </div>
      </div>
      <div className="mt-4 text-gray-700 dark:text-gray-300 text-sm">
        {testimonial.review}
      </div>
      <div className="mt-3 text-yellow-400">
        {"★".repeat(testimonial.rating)}{"☆".repeat(5 - testimonial.rating)}
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  return (
    <div className=" dark:bg-gray-900 py-12">
      <h2 className="text-center text-2xl font-bold dark:text-white mb-8">Hear From Our Beloved Students</h2>
      
      {/* Custom Grid for Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} testimonial={testimonial} />
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSection;
