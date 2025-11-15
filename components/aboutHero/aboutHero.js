export default function AboutHero() {
  return (
    <>
      <div className="hidden lg:block px-[110px]">
        <div className="relative bg-[#FAFAFA]">
          <div className="px-2 pt-[124px]">
            <img
              src="/about/hero-2.png"
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
            <h2
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
            </h2>

            {/* STORY */}
            <h2
              className="absolute font-[700]"
              style={{
                left: "1.5vw",
                top: "40vw",
                fontSize: "11.7vw",
                letterSpacing: "0.7vw",
              }}
            >
              STORY
            </h2>

            {/* SHORT */}
            <h2
              className="absolute font-[700]"
              style={{
                left: "8.2vw",
                top: "51vw",
                fontSize: "9vw",
                letterSpacing: "0.55vw",
              }}
            >
              SHORT
            </h2>
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
              src="/about/hero-2.png"
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
            <h2
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
            </h2>

            {/* STORY */}
            <h2
              className="absolute font-[700]"
              style={{
                left: "9vw",
                top: "36vw",
                fontSize: "11.7vw",
                letterSpacing: "0.7vw",
              }}
            >
              STORY
            </h2>

            {/* SHORT */}
            <h2
              className="absolute font-[700]"
              style={{
                left: "17vw",
                top: "48vw",
                fontSize: "9vw",
                letterSpacing: "0.55vw",
              }}
            >
              SHORT
            </h2>
          </div>

          {/* Paragraph (scales slightly but keeps readability) */}
          {/* <div className="hidden lg:block">
            <div
              className="absolute"
              style={{
                bottom: "6vw",
                right: "7vw",
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
                There is more information than ever, but not all of it is
                useful. We sort through the noise, focus on the facts and share
                only what matters.
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}

// "use client";

// import Image from "next/image";

// const images = [
//   { id: 1, src: "/about/a-h-1.png", height: "h-[320px]" },
//   { id: 2, src: "/about/a-h-2.png", height: "h-[460px]" },
//   { id: 3, src: "/about/a-h-3.png", height: "h-[620px]" },
//   { id: 4, src: "/about/a-h-4.png", height: "h-[540px]" },
// ];

// export default function LongStoryShort() {
//   return (
//     <section className="relative w-full bg-white pt-[65px] overflow-hidden">
//       {/* 4-column image layout with consistent gap */}
//       <div className="grid grid-cols-4 gap-4 px-4 md:px-8 lg:px-[110px]">
//         {images.map((img) => (
//           <div
//             key={img.id}
//             className={`relative overflow-hidden ${img.height}`}
//           >
//             <Image
//               src={img.src}
//               alt={`section-image-${img.id}`}
//               fill
//               className="object-contain object-top"
//               priority
//             />
//           </div>
//         ))}
//       </div>

//       {/* Text overlay - positioned independently with responsive font sizes */}
//       <div
//         className="absolute left-[6%] top-[62%] text-[#01261E] leading-[0.95] transform -translate-y-1/2"
//         style={{ fontFamily: "var(--font-heading)" }}
//       >
//         <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[5vw] xl:text-[80px] font-[700] tracking-[0.03em]">
//           LONG
//         </h2>
//         <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-[7vw] xl:text-[112px] font-[700] tracking-[0.03em]">
//           STORY
//         </h2>
//         <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[6vw] xl:text-[96px] font-[700] tracking-[0.03em] ml-[5%]">
//           SHORT
//         </h2>
//       </div>

//       {/* Bottom paragraph - fixed positioning with max-width constraints */}
//       <div className="absolute bottom-[40px] right-[9%] w-full max-w-[260px] px-4">
//         <p className="text-xs sm:text-sm md:text-[14px] leading-[1.5] text-black/70 font-[400] max-w-full">
//           There is more information than ever, but not all of it is useful. We
//           sort through the noise, focus on the facts and share only what
//           matters.
//         </p>
//       </div>
//     </section>
//   );
// }
