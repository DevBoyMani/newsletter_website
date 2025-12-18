"use client";

import { motion, AnimatePresence } from "framer-motion";

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

  const validateEmail = (value) => {
    if (!value) {
      return "Email address is required";
    }

    if (value.length > 254) {
      return "Email address is too long";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!emailRegex.test(value)) {
      return "Please enter a valid email address";
    }

    return "";
  };

  useEffect(() => {
    if (showPopup && count > 0) {
      setSubmitted(false); // Reset on new open
    }
  }, [showPopup, count]);

  // useEffect(() => {
  //   if (submitted) {
  //     const timer = setTimeout(() => {
  //       closePopup();
  //     }, 3000);
  //     return () => clearTimeout(timer);
  //   }
  // }, [submitted]);

  const handleSubmit = () => {
    const validationError = validateEmail(email);

    if (validationError) {
      setError(validationError);
      return;
    }

    setError("");
    mHandleSubmit(); // your existing submit logic
    setSubmitted(true);
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
    <>
      {/* desktop */}
      <div className="hidden lg:block ">
        <AnimatePresence>
          {showPopup && (
            <>
              {/* Popup with slide-up animation */}
              <motion.div
                className="fixed left-0 bottom-0 bg-black px-[110px] py-12 w-full h-[30%] z-50"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "100%" }}
                transition={{
                  type: "spring",
                  damping: 25,
                  stiffness: 200,
                  duration: 0.4,
                }}
              >
                <div className="flex flex-col lg:flex-row h-full justify-between items-start lg:items-start gap-6 lg:gap-10 xl:gap-20 2xl:gap-40 mt-4">
                  <div className="w-full lg:w-auto">
                    <button
                      onClick={closePopup}
                      aria-label="Close"
                      className="absolute top-4 right-4 sm:right-8 w-8 h-8 rounded-full border border-white text-white flex items-center justify-center text-3xl leading-none"
                    >
                      &times;
                    </button>

                    {!submitted && (
                      <div className="text-left text-white">
                        <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 flex items-center gap-2 overflow-hidden">
                          <AnimatePresence mode="wait">
                            <motion.span
                              key={count}
                              initial={{ y: -20, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              exit={{ y: -20, opacity: 0 }}
                              transition={{ duration: 0.25, ease: "easeOut" }}
                              className="inline-block"
                            >
                              {count}
                            </motion.span>
                          </AnimatePresence>

                          <span>
                            {count === 1 ? "newsletter" : "newsletters"}{" "}
                            selected
                          </span>
                        </h3>
                        <p className="text-xs sm:text-sm max-w-[500px] lg:max-w-[400px] xl:max-w-[500px]">
                          Enter the email address where you'd like to receive
                          the newsletters
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col items-start lg:items-end w-full lg:w-auto mt-4 lg:mt-0 space-y-2">
                    {!submitted ? (
                      <>
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:space-x-4 mb-4 w-full lg:w-auto">
                          <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            onKeyDown={(e) => {
                              // Handle Enter key press
                              if (e.key === "Enter") {
                                handleSubmit();
                              }
                            }}
                            className="border border-white px-4 py-[10px] bg-black text-white rounded-md text-sm w-full sm:w-[250px] lg:w-[280px] xl:w-[300px]"
                            placeholder="Email"
                          />
                          <button
                            onClick={handleSubmit}
                            className="bg-white text-black px-3 py-2 rounded-md border hover:text-white hover:bg-black w-fit sm:w-auto !m-0"
                          >
                            Subscribe
                          </button>
                        </div>

                        {error && (
                          <p className="text-red-500 text-sm w-full lg:text-left !mt-0">
                            {error}
                          </p>
                        )}

                        <p className="text-sm text-white pb-6 lg:pb-10 w-full lg:text-start">
                          100% free, unsubscribe anytime
                        </p>
                      </>
                    ) : (
                      <div className="flex flex-col items-center lg:items-start text-white w-full h-full min-h-[200px]">
                        <h2 className="text-2xl font-semibold mb-4 text-center lg:text-left">
                          One last step!
                        </h2>

                        <div className="space-y-4 text-sm text-gray-300">
                          <p className="text-center lg:text-left">
                            Please check your{" "}
                            <span className="font-semibold text-white">
                              {email} {/* Changed to dynamic email */}
                            </span>{" "}
                            email and confirm your free subscription (or we
                            won't be able to get to you).
                          </p>

                          <p className="text-center lg:text-left">
                            If you don't see the email, check your promotions,
                            spam, or other folders in your inbox.
                          </p>
                        </div>

                        <button
                          onClick={() => {
                            // Go back to email input and clear the email
                            setSubmitted(false);
                            setEmail(""); // Optional: clear the email field
                          }}
                          className="mt-4 text-white underline underline-offset-2 py-0 w-full sm:w-auto hover:text-gray-300 hover:border-gray-300 transition-colors"
                        >
                          Subscribe with different email
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
      {/* mobile */}
      <div className="block lg:hidden">
        <AnimatePresence>
          {showPopup && (
            <>
              {/* Popup with slide-up animation */}
              <motion.div
                className="z-10 fixed left-0 bottom-0 bg-black px-4 py-6 w-full h-[40%] transition-all duration-[500ms] ease-out transform translate-y-0 opacity-100"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "100%" }}
                transition={{
                  type: "spring",
                  damping: 25,
                  stiffness: 200,
                  duration: 0.4,
                }}
              >
                <div>
                  {/* Close button */}
                  <button
                    onClick={closePopup}
                    aria-label="Close"
                    className="absolute top-3 right-4 w-6 h-6 rounded-full border border-white text-white flex items-center justify-center text-3xl leading-none"
                  >
                    &times;
                  </button>

                  {!submitted && (
                    <div className="text-left text-white mb-6">
                      <h3 className="text-xl font-bold mb-2 flex items-center gap-2 overflow-hidden">
                        <AnimatePresence mode="wait">
                          <motion.span
                            key={count}
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -20, opacity: 0 }}
                            transition={{ duration: 0.25, ease: "easeOut" }}
                            className="inline-block"
                          >
                            {count}
                          </motion.span>
                        </AnimatePresence>

                        <span>
                          {count === 1 ? "newsletter" : "newsletters"} selected
                        </span>
                      </h3>
                      <p className="text-sm">
                        Enter the email address where you'd like to receive the
                        newsletters
                      </p>
                    </div>
                  )}
                </div>

                <div className="flex flex-col items-start space-y-3 w-full">
                  {!submitted ? (
                    <>
                      {/* Input + button stacked */}
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full border border-white px-4 py-2 bg-black text-white rounded-md text-sm"
                        placeholder="Email"
                      />

                      <button
                        onClick={handleSubmit}
                        className="w-full bg-white text-black py-2 rounded-md font-medium"
                      >
                        Subscribe
                      </button>

                      {error && <p className="text-red-500 text-sm">{error}</p>}

                      <p className="text-sm text-white pt-2">
                        100% free, unsubscribe anytime
                      </p>
                    </>
                  ) : (
                    <div className="flex flex-col items-center justify-center text-white w-full min-h-[150px]">
                      <h2 className="text-2xl font-semibold mb-4 text-center">
                        One last step!
                      </h2>

                      <div className="space-y-3 text-sm text-gray-300">
                        <p className="text-center">
                          Please check your{" "}
                          <span className="font-semibold text-white">
                            {email} {/* Dynamic email */}
                          </span>{" "}
                          email and confirm your free subscription (or we won't
                          be able to get to you).
                        </p>

                        <p className="text-center">
                          If you don't see the email, check your promotions,
                          spam, or other folders in your inbox.
                        </p>
                      </div>

                      <button
                        onClick={() => {
                          setSubmitted(false);
                          setEmail(""); // Optional: clear the email field
                        }}
                        className="mt-4 text-white py-1 w-full underline underline-offset-2"
                      >
                        Subscribe with different email
                      </button>
                    </div>
                  )}
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default ReadersNLTest;
