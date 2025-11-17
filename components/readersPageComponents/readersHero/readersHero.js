import Link from "next/link";

export default function ReadersHero() {
  return (
    <>
      <div className="bg-[#FAFAFA] px-12 pt-[100px]">
        <div className="w-full h-full relative overflow-hidden">
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
          <div className="absolute inset-0 flex flex-col items-start justify-start md:px-16">
            <h2
              className="text-[74px] text-[#01261E] font-[400] z-10 w-[550px]  leading-[94%] pt-[20px]"
              style={{ textShadow: " 0px 4px 4px rgba(31, 25, 25, 0.00)" }}
            >
              For the readers still left in the world.
            </h2>
            <p className="w-[35%] z-10 py-8 font- font-[400] leading-[130%] text-[20px] text-[#121212]">
              Our newsletters are written for those who seek meaning, not just
              empty updates.
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
