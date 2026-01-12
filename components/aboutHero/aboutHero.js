export default function AboutHero() {
  return (
    <>
      <div className="hidden lg:block px-[110px]">
        <div className="relative bg-[#FAFAFA]">
          <div className="px-2 pt-[124px]">
            <img
              src="/about/hero-2.webp"
              alt="About us hero"
              className="w-full"
            />
          </div>

          {/* Text overlay (scales with image width) */}
          <div
            className="absolute inset-0 text-[#01261E] leading-none"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {/* LONG */}
            <h1
              className="absolute font-[700]"
              style={{
                left: "1vw",
                top: "36.5vw",
                fontSize: "6.6vw",
                letterSpacing: "0.4vw",
                transform: "translateY(-50%)",
              }}
            >
              LONG
            </h1>

            {/* STORY */}
            <h1
              className="absolute font-[700]"
              style={{
                left: "1.5vw",
                top: "40vw",
                fontSize: "11.7vw",
                letterSpacing: "0.7vw",
              }}
            >
              STORY
            </h1>

            {/* SHORT */}
            <h1
              className="absolute font-[700]"
              style={{
                left: "8.2vw",
                top: "51vw",
                fontSize: "9vw",
                letterSpacing: "0.55vw",
              }}
            >
              SHORT
            </h1>
          </div>

          {/* Paragraph (scales slightly but keeps readability) */}
          <div
            className="absolute"
            style={{
              bottom: "0vw",
              right: "0vw",
              maxWidth: "20vw",
            }}
          >
            <p
              style={{
                fontSize: "1.1vw",
                lineHeight: "1.7",
                fontWeight: 400,
              }}
            >
              There is more information than ever, but not all of it is useful.
              We sort through the noise, focus on the facts and share only what
              matters.
            </p>
          </div>
        </div>
      </div>

      {/* mobile */}
      <div className="block lg:hidden pt-[150px]">
        <div className="relative bg-[#FAFAFA] px-4">
          <div className="px-0">
            <img
              src="/about/hero-2.webp"
              alt="About us hero"
              className="w-full"
            />
          </div>

          {/* Text overlay (scales with image width) */}
          <div
            className="absolute inset-0 text-[#01261E] leading-none"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {/* LONG */}
            <h1
              className="absolute font-[700]"
              style={{
                left: "6vw",
                top: "31.5vw",
                fontSize: "6.6vw",
                letterSpacing: "0.4vw",
                transform: "translateY(-50%)",
              }}
            >
              LONG
            </h1>

            {/* STORY */}
            <h1
              className="absolute font-[700]"
              style={{
                left: "9vw",
                top: "36vw",
                fontSize: "11.7vw",
                letterSpacing: "0.7vw",
              }}
            >
              STORY
            </h1>

            {/* SHORT */}
            <h1
              className="absolute font-[700]"
              style={{
                left: "17vw",
                top: "48vw",
                fontSize: "9vw",
                letterSpacing: "0.55vw",
              }}
            >
              SHORT
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
