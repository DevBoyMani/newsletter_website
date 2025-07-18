import Link from "next/link";

export default function ReadersHero() {
  return (
    <>
      <div className="bg-[#FAFAFA] md:px-12">
        <div className="w-full h-full relative overflow-hidden py-10">
          <div className="w-full h-full">
            <video
              key="Hero-section-video"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source
                src="/readers/readers-hero-section-bg-video.mp4"
                type="video/mp4"
              />
              {/* <source src="/advertise/advertise-page-video.webm" type="video/webm" /> */}
            </video>
          </div>
          <div className="absolute inset-0 flex flex-col items-start justify-start pt-20 md:px-16">
            <h2
              className="text-[74px] text-[#01261E] font-[400] z-10 w-[58%]  leading-[94%] "
              style={{ textShadow: " 0px 4px 4px rgba(31, 25, 25, 0.00)" }}
            >
              Step into a world <br /> of discovery
            </h2>
            <p className="w-[35%] z-10 py-8 font- font-[400] leading-[130%] text-[20px] text-[#121212]">
              Explore different categories. Find the best deals. AG1 is a daily
              health drink packed with nutrients to help alleviate bloating.
            </p>
            <Link
              href="/about"
              className="text-[#FAFAFA] w-auto bg-[#01261E] hover:bg-[#0B4337] text-[14px] px-5 py-2 rounded-3xl cursor-pointer"
            >
              About us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
