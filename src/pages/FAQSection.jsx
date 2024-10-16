import React, { useState } from 'react';
import learning from "../assets/learning.jpg"

const FAQSection = () => {
  // State to track which FAQ is open
  const [openIndex, setOpenIndex] = useState(null);

  // Toggle function to open/close an FAQ
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'What types of courses are available on the platform?',
      answer:
        'Our platform offers a wide range of courses in creative fields, including graphic design, creative writing, photography, web development, digital marketing, and more.',
    },
    {
      question: 'What if I need help during the course?',
      answer:
        'You can reach out to our support team or instructors for help at any time during the course.',
    },
    {
      question: 'Can I get a refund if I’m not satisfied with the course?',
      answer:
        'Yes, we offer a 30-day money-back guarantee if you’re not satisfied with the course.',
    },
    {
      question: 'Are the courses accredited or do they offer certifications?',
      answer:
        'Yes, all of our courses offer certificates of completion, and many are accredited.',
    },
  ];

  return (
    <section className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12 py-12 px-6 lg:px-20 bg-gray-50 dark:bg-gray-900">
      {/* Left Section - FAQ */}
      <div className="lg:w-8/12 w-full">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">
          Curious Minds: Your Top Questions Answered!
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow"
            >
              <button
                className="w-full flex justify-between items-center p-4 text-left"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                  {faq.question}
                </h3>
                <span className="text-gray-600 dark:text-gray-300">
                  {openIndex === index ? '-' : '+'}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-4 pb-4 text-gray-600 dark:text-gray-300">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Right Section - Image */}
      <div className="lg:w-4/12 w-full mt-16">
        <img
          src={learning}
          alt="Smiling woman"
          className="rounded-lg shadow-lg object-cover w-full h-full"
        />
      </div>
    </section>
  );
};

export default FAQSection;
