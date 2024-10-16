import React from 'react';

export default function AboutSection() {
  return (
    <>
    <section className="relative bg-cover bg-center bg-no-repeat py-32" style={{ backgroundImage: "url('/assert/laptop1.jpeg')" }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>
      
      {/* Introduction Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center text-white px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight sm:text-5xl">
          Welcome to Our E-learning Platform
        </h2>
        <p className="mt-6 text-lg leading-6">
          We are dedicated to providing a world-class learning experience with a focus on flexibility, expert guidance, and personalized growth. Whether you're learning at your own pace or participating in instructor-led courses, we empower learners to achieve their goals and thrive in their careers.
        </p>
      </div>

      {/* Features Section */}
      <div className="mt-12 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Feature 1: Flexible Learning */}
        <div className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <svg className="w-16 h-16 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-1a9 9 0 11-9-9 9 9 0 019 9z"></path>
          </svg>
          <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
            Flexible Learning
          </h3>
          <p className="mt-2 text-gray-600 dark:text-gray-400 text-center">
            Learn at your own pace, with self-guided or instructor-led courses designed for flexibility.
          </p>
        </div>

        {/* Feature 2: Expert Instructors */}
        <div className="flex flex-col items-center p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
          <svg className="w-16 h-16 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 10l2 2-2 2m-6-2a9 9 0 11-9-9 9 9 0 019 9z"></path>
          </svg>
          <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
            Expert Instructors
          </h3>
          <p className="mt-2 text-gray-600 dark:text-gray-400 text-center">
            Learn from industry experts and gain real-world skills to boost your career.
          </p>
        </div>

        {/* Feature 3: Certifications */}
        <div className="flex flex-col items-center p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
          <svg className="w-16 h-16 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h14a1 1 0 011 1v5a1 1 0 01-1 1H4a1 1 0 01-1-1V4z"></path>
          </svg>
          <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
            Certifications
          </h3>
          <p className="mt-2 text-gray-600 dark:text-gray-400 text-center">
            Earn certificates upon course completion and showcase your achievements.
          </p>
        </div>
      </div>
    </section>
    <section className="bg-gray-200 dark:bg-gray-900 py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
          Platform Features
        </h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Explore the key features that make our e-learning platform stand out.
        </p>
      </div>

      {/* Features grid */}
      <div className="mt-12 grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Feature 1 */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md p-6 text-center">
          <div className="flex justify-center items-center mb-4">
            <svg
              className="w-12 h-12 text-indigo-600 dark:text-indigo-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4l3 3m6-1a9 9 0 11-9-9 9 9 0 019 9z"
              ></path>
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Real-time Learning
          </h3>
          <p className="mt-3 text-gray-600 dark:text-gray-400">
            Engage in real-time sessions with instructors for live feedback and collaboration.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md p-6 text-center">
          <div className="flex justify-center items-center mb-4">
            <svg
              className="w-12 h-12 text-indigo-600 dark:text-indigo-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 10l2 2-2 2m-6-2a9 9 0 11-9-9 9 9 0 019 9z"
              ></path>
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Self-Paced Courses
          </h3>
          <p className="mt-3 text-gray-600 dark:text-gray-400">
            Study at your own pace with flexible schedules and accessible content.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md p-6 text-center">
          <div className="flex justify-center items-center mb-4">
            <svg
              className="w-12 h-12 text-indigo-600 dark:text-indigo-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 4a1 1 0 011-1h14a1 1 0 011 1v5a1 1 0 01-1 1H4a1 1 0 01-1-1V4z"
              ></path>
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Certifications
          </h3>
          <p className="mt-3 text-gray-600 dark:text-gray-400">
            Earn valuable certifications to showcase your skills upon completion of courses.
          </p>
        </div>

        {/* Feature 4 */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md p-6 text-center">
          <div className="flex justify-center items-center mb-4">
            <svg
              className="w-12 h-12 text-indigo-600 dark:text-indigo-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 4h16v16H4z"
              ></path>
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Interactive Content
          </h3>
          <p className="mt-3 text-gray-600 dark:text-gray-400">
            Dive into highly interactive and engaging content, ensuring a practical learning experience.
          </p>
        </div>

        {/* Feature 5 */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md p-6 text-center">
          <div className="flex justify-center items-center mb-4">
            <svg
              className="w-12 h-12 text-indigo-600 dark:text-indigo-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 2l6 6m-6 0l6 6m0-12l6 6m-6 0l6 6"
              ></path>
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Mobile-Friendly
          </h3>
          <p className="mt-3 text-gray-600 dark:text-gray-400">
            Access courses on any device with a mobile-optimized platform.
          </p>
        </div>

        {/* Feature 6 */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md p-6 text-center">
          <div className="flex justify-center items-center mb-4">
            <svg
              className="w-12 h-12 text-indigo-600 dark:text-indigo-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 12h14"
              ></path>
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Community Support
          </h3>
          <p className="mt-3 text-gray-600 dark:text-gray-400">
            Join a vibrant community of learners and instructors for additional support.
          </p>
        </div>
      </div>
    </div>
  </section>
  <section className="bg-gray-200 dark:bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Achievements & Milestones
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Celebrating the success of our learners and the impact of our platform.
          </p>
        </div>

        {/* Achievements grid */}
        <div className="mt-12 grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Milestone 1 */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">500+</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Courses Completed
            </h3>
            <p className="mt-3 text-gray-600 dark:text-gray-400">
              Learners from around the globe have successfully completed over 500 courses.
            </p>
          </div>

          {/* Milestone 2 */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">10,000+</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Happy Students
            </h3>
            <p className="mt-3 text-gray-600 dark:text-gray-400">
              Our platform has supported over 10,000 learners in achieving their goals.
            </p>
          </div>

          {/* Milestone 3 */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">120+</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Certified Instructors
            </h3>
            <p className="mt-3 text-gray-600 dark:text-gray-400">
              Our platform boasts over 120 expert instructors guiding learners.
            </p>
          </div>

          {/* Milestone 4 */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">50+</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Industry Partnerships
            </h3>
            <p className="mt-3 text-gray-600 dark:text-gray-400">
              We collaborate with over 50 industry partners to ensure relevant learning.
            </p>
          </div>

          {/* Milestone 5 */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">1M+</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Hours of Learning
            </h3>
            <p className="mt-3 text-gray-600 dark:text-gray-400">
              Our learners have accumulated over 1 million hours of valuable learning time.
            </p>
          </div>

          {/* Milestone 6 */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">95%</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Satisfaction Rate
            </h3>
            <p className="mt-3 text-gray-600 dark:text-gray-400">
              Our platform has achieved a 95% satisfaction rate from learners.
            </p>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}







