<div className="block lg:hidden">
  <AnimatePresence>
    {showPopup && (
      <>
        {/* Background overlay with fade animation */}
        <motion.div
          className="fixed inset-0 bg-black/50 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          onClick={closePopup}
        />
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
                <h2 className="text-2xl font-semibold mb-2">Thank you!</h2>
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
</div>;

{
  /* mobile */
}
<div className="block lg:hidden">
  <div
    className={`z-10 fixed left-0 bottom-0 bg-black px-4 py-6 w-full h-[40%] transition-all duration-[500ms] ease-out transform translate-y-0 opacity-100`}
  >
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

          <span>{count === 1 ? "newsletter" : "newsletters"} selected</span>
        </h3>
        <p className="text-sm">
          Enter the email address where you'd like to receive the newsletters
        </p>
      </div>
    )}

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
          <h2 className="text-2xl font-semibold mb-2">Thank you!</h2>
          <p className="text-gray-300 text-sm text-center">
            You've successfully subscribed {count} {count === 1 ? "NL" : "NLs"}.
          </p>
        </div>
      )}
    </div>
  </div>
</div>;
