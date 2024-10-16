import React from "react";

const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-2">
      <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white text-center mb-2">
          SignUp Here
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 text-center mb-6">
          Join our e-learning platform and start learning today!
        </p>
        <form>
          <div className="mb-4">
            <label
              className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="w-full px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 border rounded-md focus:outline-none focus:ring-0 focus:border-gray-400 dark:focus:border-gray-500"
              id="name"
              type="text"
              placeholder="Enter your name"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="w-full px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 border rounded-md focus:outline-none focus:ring-0 focus:border-gray-400 dark:focus:border-gray-500"
              id="email"
              type="email"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="w-full px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 border rounded-md focus:outline-none focus:ring-0 focus:border-gray-400 dark:focus:border-gray-500"
              id="password"
              type="password"
              placeholder="Enter your password"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
              htmlFor="phoneNumber"
            >
              Phone Number
            </label>
            <input
              className="w-full px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 border rounded-md focus:outline-none focus:ring-0 focus:border-gray-400 dark:focus:border-gray-500"
              id="phoneNumber"
              type="tel"
              placeholder="Enter your phone number"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
              htmlFor="about"
            >
              About
            </label>
            <textarea
              className="w-full px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 border rounded-md focus:outline-none focus:ring-0 focus:border-gray-400 dark:focus:border-gray-500"
              id="about"
              placeholder="Tell us about yourself"
            ></textarea>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button
              className="w-full bg-primary dark:bg-primary text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary hover:bg-primary dark:hover:bg-primary"
              type="submit"
            >
              Register
            </button>
            <button
              className="w-full bg-gray-400 dark:bg-gray-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-gray-500 dark:focus:ring-gray-400 hover:bg-gray-600 dark:hover:bg-gray-700"
              type="reset"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
