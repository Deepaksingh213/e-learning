const benefitsData = [
  {
    title: "Online Degrees",
    description: "Earn accredited degrees from the comfort of your home, opening doors to a world of possibilities.",
    iconColor: "text-purple-500 dark:text-purple-400",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-8 h-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 8V4m0 4c-2.5 0-5.5-1-6.5-2m6.5 2c2.5 0 5.5-1 6.5-2M12 4a1 1 0 011-1h8a1 1 0 011 1v16a1 1 0 01-1 1h-8a1 1 0 01-1-1v-4m0-4a1 1 0 011-1h6m-6 0a1 1 0 00-1 1v4m0-4a1 1 0 00-1 1H5a1 1 0 00-1 1v4a1 1 0 001 1h6m0 0v4"
        />
      </svg>
    ),
  },
  {
    title: "Short Courses",
    description: "Enhance your skills with our concise and focused short courses, designed for quick and effective learning.",
    iconColor: "text-pink-500 dark:text-pink-400",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-8 h-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 12h14M12 5v14M7 19l5 5 5-5"
        />
      </svg>
    ),
  },
  {
    title: "Training From Experts",
    description: "Immerse yourself in knowledge with industry experts guiding you through hands-on experience.",
    iconColor: "text-purple-500 dark:text-purple-400",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-8 h-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5.121 13.879l7.071-7.071m0 0l7.071-7.071m-7.071 7.071V21M12 3v2a5.001 5.001 0 00-5 5v3h10v-3a5.001 5.001 0 00-5-5V3z"
        />
      </svg>
    ),
  },
  {
    title: "1.5k+ Video Courses",
    description: "Dive into a vast library of over 1.5k video courses covering many subjects, offering a visual learning experience.",
    iconColor: "text-pink-500 dark:text-pink-400",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-8 h-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15 10l4.5-4.5m0 0L15 1M19.5 5.5L15 10m5-9h-7a2 2 0 00-2 2v6a2 2 0 002 2h7a2 2 0 002-2V3a2 2 0 00-2-2z"
        />
      </svg>
    ),
  },
];

const BenefitsSection = () => {
  return (
    <div className="bg-white dark:bg-gray-900 p-8 md:p-12 lg:p-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
        {/* Left Image Section */}
        <div className="mb-8 lg:mb-0 lg:w-1/2">
          <img src={`/assert/product.svg`} alt="pic" className="h-[380px]"/>
        </div>

        {/* Right Content Section */}
        <div className="lg:w-1/2 space-y-6 text-gray-900 dark:text-gray-100">
          <h2 className="text-3xl font-bold text-purple-500 dark:text-purple-400 mb-6">
            Benefits From Our Online Learning
          </h2>

          {benefitsData.map((benefit, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className={`benefit.iconColor mt-2`}>
                {benefit.icon}
              </div>
              <div>
                <h3 className="font-semibold text-lg">{benefit.title}</h3>
                <p className="text-gray-500 dark:text-gray-400">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;
