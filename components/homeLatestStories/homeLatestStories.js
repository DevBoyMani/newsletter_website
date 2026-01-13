import AdvertiseMotionText from "../../components/advertiseMotionText/advertiseMotionText";

export default function HomeLatestStrories() {
  const blogPosts = [
    {
      id: 1,
      title: "First blog post",
      date: "Oct 25, 2025",
      image: "/home/blog-pic-first.png",
      description:
        "The Return C++ SDK is now fully on par with our two other SDKs in Ptthon. The Return C++ SDK is now fully on par with our two other SDKs in Ptthon. The Return C++ SDK is now fully on par. The Return C++  SDK is now fully on ",
      link: "#",
    },
    {
      id: 2,
      title: "Upgrade to Pro today",
      date: "Oct 26, 2025",
      image: "/home/blog-pic-first.png",
      description:
        "The Return C++ SDK is now fully on par with our two other SDKs in Ptthon. The Return C++",
      link: "#",
    },
    {
      id: 3,
      title: "Computer vision for the blind",
      date: "Oct 27, 2025",
      image: "/home/blog-pic-first.png",
      description:
        "The Return C++ SDK is now fully on par with our two other SDKs in Ptthon. The Return C++ SDK is now fully on par with our two other SDKs in Ptthon. The Return C++ SDK is now fully on par. The Return C++  SDK is now fully on ",
      link: "#",
    },
  ];
  return (
    <>
      {/* desktop */}
      <div className="hidden lg:block bg-[#FAFAFA]">
        <div className="flex flex-col items-center justify-center text-center lg:pt-[70px] lg:pb-[127px] pb-16 bg-[#FAFAFA]">
          <h2
            className="text-[34px] lg:text-[56px] font-[400]"
            style={{ fontFamily: "GT Super Ds Trial" }}
          >
            Advertise with us
          </h2>

          <div className="w-[640px] mx-auto px-8">
            <p className="text-[12px] lg:text-[18px] font-[400] leading-[150%] tracking-[0.36px] text-center">
              Our readers pay attention. They trust what we share and they act
              on it. If your brand aligns with that level of quality, let’s talk
              and see if we’re a good fit.
            </p>
          </div>

          {/* Moving Text desktop*/}

          <AdvertiseMotionText />
        </div>
      </div>

      {/* mobile */}
      <div className="block lg:hidden bg-[#FAFAFA]">
        <div className="pt-[20px] bg-[#FAFAFA]">
          <div className="flex flex-col items-center justify-center text-center pt-[35px] pb-[60px]">
            <div className="">
              <h2
                className="text-[34px] font-[400] leading-[normal]"
                style={{ fontFamily: "GT Super Ds Trial" }}
              >
                Advertise with us
              </h2>
            </div>

            <div className="py-[30px]">
              <p className="px-4 text-[16px] font-[400] leading-[125%] tracking-[0.8px] text-center">
                Our readers pay attention. They trust what we share and they act
                on it. If your brand aligns with that level of quality, let’s
                talk and see if we’re a good fit.
              </p>
            </div>
            {/* Moving Text mobile*/}

            <AdvertiseMotionText />
          </div>
        </div>
      </div>
    </>
  );
}
