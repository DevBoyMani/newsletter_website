import Link from "next/link";
import { AnimatePresence, motion, LayoutGroup } from "framer-motion";

export default function BodyRight({
  socialIcons,
  hoveredIndex,
  setHoveredIndex,
  email,
  setEmail,
  handleSubmit,
  showPopup,
  setShowPopup,
}) {
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await Promise.resolve(handleSubmit?.(e));
    } finally {
      setShowPopup(true);
    }
  };

  return (
    <div className="md:w-[24%] w-full sticky top-24 self-start pt-6">
      <p className="text-[14px] pb-[17px] font-[500] text-[#000] leading-[174%] border-b border-[#E8ECF0]">
        Share this article
      </p>

      <div className="pt-[34px] pb-[62px] flex justify-start space-x-6">
        {socialIcons.map((icon, index) => (
          <Link href={icon.source} key={index}>
            <img
              src={hoveredIndex === index ? icon.hoverSrc : icon.defaultSrc}
              alt={icon.alt}
              className="w-8 cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            />
          </Link>
        ))}
      </div>

      <div className="border border-[#01261E] rounded-[10px] relative overflow-hidden">
        <LayoutGroup id="subscribe">
          {/* Content fades out; keep it mounted but non-interactive during popup */}
          <motion.div
            className="py-[16px] px-[15px]"
            initial={false}
            animate={{ opacity: showPopup ? 0 : 1, y: showPopup ? 8 : 0 }}
            style={{ pointerEvents: showPopup ? "none" : "auto" }}
            transition={{ duration: 0.25 }}
          >
            <p className="text-[#01261E] font-[800] text-[16px] leading-normal">
              Sagravia Newsletter
            </p>
            <p className="text-[#01261E] font-[400] text-[12px] leading-[141%] pt-[8px]">
              Do you want to get tips and tactics to grow the way you want?
            </p>

            <form onSubmit={onSubmit} className="pt-[16px] space-y-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
                className="px-2 rounded-[3px] border border-[#9CA3AF] text-[14px] w-full h-[37px] focus:outline-none focus:ring-1 focus:ring-[#01261E]"
                disabled={showPopup}
              />

              {/* Only render the button when NOT showing the popup */}
              {!showPopup && (
                <motion.button
                  type="submit"
                  layoutId="subscribe-expand"
                  className="w-full h-[37px] bg-[#01261E] text-[#FFF] text-[14px] rounded-[3px] hover:bg-[#0B4337] transition"
                >
                  Subscribe for free
                </motion.button>
              )}
            </form>

            <div className="pt-[5px] pl-[2px]">
              <p className="text-[#767676] font-[400] text-[8px] leading-[141%]">
                Unsubscribe at any time.{" "}
                <span className="underline">Terms</span> &{" "}
                <span className="underline">Privacy</span>.
              </p>
            </div>
          </motion.div>

          <AnimatePresence mode="wait" /* wait for exit before re-enter */>
            {showPopup && (
              <motion.div
                key="popup"
                layoutId="subscribe-expand"
                initial={{ borderRadius: 6, opacity: 1 }}
                animate={{ borderRadius: 10, opacity: 1 }}
                exit={{ opacity: 0.98 }} // keeps element around for morph-back
                transition={{ duration: 0.45, ease: [0.25, 0.8, 0.25, 1] }}
                className="absolute inset-0 bg-[#01261E] px-[35px] py-[65px] shadow-lg z-10 flex flex-col justify-center items-center"
              >
                <button
                  onClick={() => setShowPopup(false)}
                  className="absolute top-4 right-4 text-white text-[20px] hover:scale-110 transition"
                  aria-label="Close"
                >
                  ✕
                </button>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ delay: 0.15, duration: 0.35 }}
                  className="text-center"
                >
                  <p className="text-white font-[400] text-[22px] leading-[120%]">
                    Thank you!
                    <br />
                    Check your email
                    <br /> to verify.
                  </p>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </LayoutGroup>
      </div>
    </div>
  );
}
