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
                className="fixed left-0 bottom-0 bg-black px-[110px] py-12 w-full h-[30%] z-20"
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
                <div className="flex h-full justify-between items-start gap-40 mt-6">
                  <div className="w-[50%]">
                    <button
                      onClick={closePopup}
                      aria-label="Close"
                      className="absolute top-4 right-8 w-8 h-8 rounded-full border border-white text-white flex items-center justify-center text-3xl leading-none"
                    >
                      &times;
                    </button>

                    {!submitted && (
                      <div className="text-left text-white">
                        <h3 className="text-3xl font-bold mb-6 flex items-center gap-2 overflow-hidden">
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
                        <p className="text-sm">
                          Enter the email address where you'd like to receive
                          the newsletters
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col items-end space-y-2 w-[50%]">
                    {!submitted ? (
                      <>
                        <div className="flex items-center space-x-4 mb-4 w-[450px]">
                          <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="border border-white px-4 py-[10px] bg-black text-white rounded-md text-sm w-full"
                            placeholder="Email"
                          />
                          <button
                            onClick={handleSubmit}
                            className="bg-white text-black px-6 py-2 rounded-md border hover:text-white hover:bg-black"
                          >
                            Subscribe
                          </button>
                        </div>

                        {error && (
                          <p className="text-red-500 text-sm">{error}</p>
                        )}

                        <p className="text-sm text-white pb-10">
                          100% free, unsubscribe anytime
                        </p>
                      </>
                    ) : (
                      <div className="flex flex-col items-center justify-start text-white w-full h-full min-h-[200px]">
                        <h2 className="text-2xl font-semibold mb-2">
                          Thank you!
                        </h2>
                        <p className="text-gray-300 text-sm">
                          You've successfully subscribed {count}{" "}
                          {count === 1 ? "NL" : "NLs"}.
                        </p>
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
                      <h2 className="text-2xl font-semibold mb-2">
                        Thank you!
                      </h2>
                      <p className="text-gray-300 text-sm text-center">
                        You've successfully subscribed {count}{" "}
                        {count === 1 ? "NL" : "NLs"}.
                      </p>
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
