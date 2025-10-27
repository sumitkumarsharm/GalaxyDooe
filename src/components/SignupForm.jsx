// SignupForm.jsx
import React from "react";

const SignupForm = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/50 bg-opacity-60 flex justify-center items-center z-50">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-80 relative animate-fadeIn">
        <h2 className="text-2xl font-semibold text-center mb-6">Sign Up</h2>

        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Full Name"
            className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
          />
          <input
            type="email"
            placeholder="Email"
            className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
          />
          <input
            type="password"
            placeholder="Password"
            className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
          />
          <button
            type="submit"
            className="bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
          >
            Create Account
          </button>
        </form>

        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-red-500 text-xl"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default SignupForm;
