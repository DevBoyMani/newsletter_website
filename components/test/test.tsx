
"use client";

import { useState, useEffect } from 'react';

const Test = ({ count, email, setEmail, mHandleSubmit }) => {
  const [error, setError] = useState('');
  const [showSection, setShowSection] = useState(false); 


  useEffect(() => {
    if (count > 0) {
      setShowSection(true);
    } else {
      setShowSection(false); 
    }
  }, [count]); 

  const handleSubmit = () => {
    if (!email) {
      setError('Email address is required');
    } else {
      setError('');
      mHandleSubmit(); 
    }
  };


  if (count === 0) {
    return null; // Hide footer if no newsletters are selected
  }

  return (
    <>
      {/* Desktop View */}
      <div
        className={`z-10 hidden lg:flex fixed left-0 bottom-0 bg-black px-4 py-4 w-full justify-between items-center h-40 transition-all duration-[500ms] ease-out transform ${
          showSection ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
        }`}
      >
        <div className="text-left text-white">
          <h3 className="text-3xl font-bold mb-6">{count} newsletters selected</h3>
          <p className="text-sm">Enter the email address where you'd like to receive these newsletters.</p>
        </div>

        <div className="flex flex-col items-end space-y-2">
          <div className="flex items-center space-x-4 mb-4">
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-white px-4 py-2 bg-black text-white rounded-md text-sm pr-14"
              placeholder="Email address"
            />
            <button
              onClick={handleSubmit}
              className="bg-white text-black px-6 py-2 rounded-md"
            >
              Sign Up
            </button>
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <p className="text-sm text-white">
            By clicking Sign Up, you agree to our Terms and Conditions.
          </p>
        </div>
      </div>
    </>
  );
};

export default Test;

