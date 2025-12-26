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
  loading = false,
}) => {
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const validateEmail = (value) => {
    if (!value) return "Email address is required";
    if (value.length > 254) return "Email address is too long";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!emailRegex.test(value)) return "Please enter a valid email address";
    return "";
  };

  useEffect(() => {
    if (showPopup && count > 0) {
      setSubmitted(false);
      setError("");
    }
  }, [showPopup, count]);

  const handleSubmit = async () => {
    const validationError = validateEmail(email);
    if (validationError) {
      setError(validationError);
      return;
    }

    setError("");

    // ✅ wait for parent result
    const result = await mHandleSubmit();

    // ✅ Only show success screen when ok === true
    if (result?.ok) {
      setSubmitted(true);
    } else {
      setSubmitted(false);
      setError(result?.message || "Invalid email. Please try again.");
    }
  };

  const closePopup = () => {
    setShowPopup(false);
    setEmail("");
    setSubmitted(false);
    setError("");

    const resetSelection = testInform.map((el) => ({ ...el, selected: false }));
    setTestInform(resetSelection);
  };

  if (!showPopup || count === 0) return null;

  return (
    <>
      {/* desktop */}
      <div className="hidden lg:block">
        <AnimatePresence>
          {showPopup && (
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
              <button
                onClick={closePopup}
                aria-label="Close"
                className="absolute top-4 right-4 sm:right-8 w-8 h-8 rounded-full border border-white text-white flex items-center justify-center text-3xl leading-none"
                disabled={loading}
              >
                &times;
              </button>

              <div className="flex flex-col lg:flex-row h-full justify-between items-start gap-6 xl:gap-20 2xl:gap-40 mt-4">
                <div className="text-left text-white w-full lg:w-auto">
                  {!submitted ? (
                    <>
                      <h3 className="text-2xl sm:text-3xl font-bold mb-4 flex items-center gap-2">
                        <span>{count}</span>
                        <span>
                          {count === 1 ? "newsletter" : "newsletters"} selected
                        </span>
                      </h3>
                      <p className="text-xs sm:text-sm max-w-[500px]">
                        Enter the email address where you'd like to receive the
                        newsletters
                      </p>
                    </>
                  ) : null}
                </div>

                <div className="flex flex-col items-start lg:items-end w-full lg:w-auto mt-4 lg:mt-0 space-y-2">
                  {!submitted ? (
                    <>
                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 mb-4 w-full lg:w-auto">
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                          className="border border-white px-4 py-[10px] bg-black text-white rounded-md text-sm w-full sm:w-[250px] lg:w-[280px] xl:w-[300px]"
                          placeholder="Email"
                          disabled={loading}
                        />

                        <button
                          onClick={handleSubmit}
                          disabled={loading}
                          className="bg-white text-black px-3 py-2 rounded-md border hover:text-white hover:bg-black disabled:opacity-60 disabled:cursor-not-allowed"
                        >
                          {loading ? "Validating..." : "Subscribe"}
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
                      <h2 className="text-2xl font-semibold mb-4">
                        One last step!
                      </h2>
                      <div className="space-y-4 text-sm text-gray-300">
                        <p>
                          Please check your{" "}
                          <span className="font-semibold text-white">
                            {email}
                          </span>{" "}
                          email and confirm your free subscription.
                        </p>
                        <p>
                          If you don't see the email, check
                          promotions/spam/other folders.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* mobile (same logic) */}
      <div className="block lg:hidden">
        <AnimatePresence>
          {showPopup && (
            <motion.div
              className="z-10 fixed left-0 bottom-0 bg-black px-4 py-6 w-full h-[40%]"
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
              <button
                onClick={closePopup}
                aria-label="Close"
                className="absolute top-3 right-4 w-6 h-6 rounded-full border border-white text-white flex items-center justify-center text-3xl leading-none"
                disabled={loading}
              >
                &times;
              </button>

              {!submitted ? (
                <>
                  <div className="text-left text-white mb-4">
                    <h3 className="text-xl font-bold mb-2">
                      {count} {count === 1 ? "newsletter" : "newsletters"}{" "}
                      selected
                    </h3>
                    <p className="text-sm">
                      Enter the email address where you'd like to receive the
                      newsletters
                    </p>
                  </div>

                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border border-white px-4 py-2 bg-black text-white rounded-md text-sm"
                    placeholder="Email"
                    disabled={loading}
                  />

                  <button
                    onClick={handleSubmit}
                    disabled={loading}
                    className="w-full bg-white text-black py-2 rounded-md font-medium mt-3 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? "Validating..." : "Subscribe"}
                  </button>

                  {error && (
                    <p className="text-red-500 text-sm mt-2">{error}</p>
                  )}

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
                      <span className="font-semibold text-white">{email}</span>{" "}
                      email and confirm your free subscription.
                    </p>
                    <p className="text-center">
                      If you don't see the email, check promotions/spam/other
                      folders.
                    </p>
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default ReadersNLTest;
