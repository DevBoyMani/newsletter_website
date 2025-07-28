"use client";

import { useState, useEffect } from "react";

const ReadersNLTest = ({
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
      setSubmitted(false); // Reset on new open
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
    const resetSelection = testInform.map((el) => ({
      ...el,
      selected: false,
    }));
    setTestInform(resetSelection);
  };

  if (!showPopup || count === 0) return null;

  return (
    <div
      className={`z-10 hidden lg:flex fixed left-0 bottom-0 bg-black px-4 py-12 w-full h-auto justify-between items-center transition-all duration-[500ms] ease-out transform translate-y-0 opacity-100`}
    >
      <button
        onClick={closePopup}
        className="absolute top-1 right-4 text-white text-3xl font-bold"
        aria-label="Close"
      >
        &times;
      </button>

      {!submitted && (
        <div className="text-left text-white">
          <h3 className="text-3xl font-bold mb-6">
            {count} newsletters selected
          </h3>
          <p className="text-sm">
            Enter the email address where you'd like to receive these
            newsletters
          </p>
        </div>
      )}

      <div className="flex flex-col items-end space-y-2 w-full">
        {!submitted ? (
          <>
            <div className="flex items-center space-x-4 mb-4">
              <input
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
          </>
        ) : (
          <div className="flex flex-col items-center justify-center text-white w-full h-full min-h-[200px]">
            <h2 className="text-2xl font-semibold mb-2">Thank you!</h2>
            <p className="text-gray-300 text-sm">
              You've successfully subscribed {count}{" "}
              {count === 1 ? "NL" : "NLs"}.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReadersNLTest;
