"use client";

import { useState, useEffect } from "react";

const ReaderNLTestMobile = ({
  count,
  email,
  setEmail,
  mHandleSubmit,
  showPopup,
  setShowPopup,
  testInform,
  setTestInform,
}) => {
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (showPopup && count > 0) {
      setSubmitted(false);
    }
  }, [showPopup, count]);

  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => {
        closePopup();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [submitted]);

  const handleSubmit = () => {
    if (!email) {
      setError("Email address is required");
    } else {
      setError("");
      mHandleSubmit();
      setSubmitted(true);
    }
  };

  const closePopup = () => {
    setShowPopup(false);
    setEmail("");
    setSubmitted(false);
    // Clear selections
    const resetSelection = testInform.map((el) => ({
      ...el,
      selected: false,
    }));
    setTestInform(resetSelection);
  };

  if (!showPopup || count === 0) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 h-1/2 bg-black z-50 flex flex-col justify-center items-center px-4 py-6 lg:hidden ">
      <button
        onClick={closePopup}
        className="absolute top-3 right-4 text-white text-3xl font-bold"
        aria-label="Close"
      >
        &times;
      </button>

      {!submitted ? (
        <div className="text-center text-white w-full">
          <h3 className="text-xl font-bold mb-4">
            {count} newsletter{count > 1 ? "s" : ""} selected
          </h3>
          <p className="text-sm mb-4">
            Enter your email address to receive them:
          </p>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-white bg-black text-white rounded-md mb-3"
            placeholder="Email address"
          />
          <button
            onClick={handleSubmit}
            className="w-full bg-white text-black py-2 rounded-md"
          >
            Sign Up
          </button>
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          <p className="text-xs text-white mt-4">
            By clicking Sign Up, you agree to our{" "}
            <a
              href="#"
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Terms and Conditions
            </a>
            .
          </p>
        </div>
      ) : (
        <div className="text-center text-white">
          <h2 className="text-xl font-semibold mb-2">Thank you!</h2>
          <p className="text-sm">
            You've successfully subscribed to {count} newsletter
            {count > 1 ? "s" : ""}.
          </p>
        </div>
      )}
    </div>
  );
};

export default ReaderNLTestMobile;
