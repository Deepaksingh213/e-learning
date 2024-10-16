import React from "react";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-2">
      <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white text-center mb-6">
          Login Here !!
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 text-center mb-6">
          Join our e-learning platform and start learning today!
        </p>
        <form>
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
              className="w-full px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 border rounded-md focus:outline-none focus:ring-0 focus:ring-gray-300 dark:focus:ring-gray-400"
              id="password"
              type="password"
              placeholder="Enter your password"
            />
          </div>

          <div className="flex items-center justify-between mb-2">
            <a
              href="#"
              className="text-sm text-primary dark:text-primary hover:underline"
            >
              Forgot Password?
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button
              className="w-full bg-primary dark:bg-primary text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary hover:bg-primary dark:hover:bg-primary"
              type="submit"
            >
              Login
            </button>
            <button
              className="w-full bg-gray-400 dark:bg-gray-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-gray-500 dark:focus:ring-gray-400 hover:bg-gray-600 dark:hover:bg-gray-700"
              type="reset"
            >
              Reset
            </button>
          </div>
        </form>

        {/* <div className="mt-6 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Or login with</p>
          <button
            className="w-full flex items-center justify-center bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-red-500 dark:focus:ring-red-400"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M21.35 11.1h-9.6v2.7h5.8c-.3 1.5-1.3 2.7-2.7 3.5v2.9h4.3c2.5-2.4 4-6 4-10 0-1-.1-2-.3-2.9z" />
              <path d="M12.75 22c3.3 0 6.1-1.1 8.1-3l-4.3-3h-.1c-1 .6-2.2 1-3.5 1-2.7 0-5-1.8-5.9-4.3h-4.3v2.7c1.9 4.1 6 6.6 10 6.6z" />
              <path d="M6.85 14.5c-.5-1.2-.8-2.5-.8-3.8s.3-2.7.8-3.8v-2.7h-4.3c-1.4 2-2.2 4.5-2.2 7.2s.8 5.2 2.2 7.2l4.3-2.7z" />
              <path d="M12.75 5.3c1.3 0 2.5.4 3.5 1l2.7-2.7c-2-1.8-4.8-3-8.1-3-4 0-7.6 2.5-9.5 6.1l4.3 2.7c.9-2.5 3.2-4.3 5.9-4.3z" />
            </svg>
            Login with Google
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Login;
