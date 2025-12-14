import Link from "next/link";
import CustomizedHoverButton from "../customizedHoverButton/customizedHoverButton";
import { useState } from "react";

export default function AnalyticsAdCard({ id = 0 }) {
  const websiteLinks = [
    { id: 1, source: "https://www.presidentialsummary.com/", target: "_blank" },
    { id: 2, source: "https://www.geopoliticalsummary.com/", target: "_blank" },
    { id: 3, source: "https://www.businesshistory.co/", target: "_blank" },
    { id: 4, source: "https://www.longandshort.com/", target: "_blank" },
    { id: 5, source: "https://www.moviesuggestions.com/", target: "_blank" },
    { id: 6, source: "https://www.dubaisummary.com/", target: "_blank" },
  ];
  const matchedLink = websiteLinks.find((link) => link.id === id);

  const [showPopup, setShowPopup] = useState(false);
  const handleCopy = () => {
    const email = "sales@houseofsummary.com";

    navigator.clipboard.writeText(email).then(() => {
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 1500); // Hide after 1.5 seconds
    });
  };

  return (
    <>
      {/* desktop */}
      <div className="lg:block hidden">
        <div className="h-[308px] rounded-[20px] p-[40px] text-[#fff] bg-[url('/analytics/ad-bg.png')] bg-cover bg-center bg-no-repeat shadow-[0px_4px_37px_0px_rgba(0,0,0,0.05)]">
          <h4 className="text-[22px] font-[600] leading-[22px] tracking-[0.5px] font-[manrope] pb-[20px]">
            Advertise with us
          </h4>
          <p className="text-[14px] font-[400] leading-[139%] text-[#fff] pb-[19px]">
            Reach a highly engaged audience that values quality and takes
            action. Schedule a call with the sales team by clicking on the
            button below.
          </p>
          <p className="text-[14px] leading-[139%] text-[#fff] lg:pb-[36px]">
            Email sales at{" "}
            <span className="inline-flex items-center gap-1 font-[700] text-[#fff]">
              <a
                href="mailto:sales@houseofsummary.com"
                className="hover:underline"
              >
                sales@houseofsummary.com
              </a>

              <img
                src="/home/copy.png"
                alt="copy icon"
                className="w-4 h-5 cursor-pointer"
                onClick={handleCopy}
              />
            </span>
            &nbsp; or
            <br /> WhatsApp us at{" "}
            <a
              className="underline underline-offset-4 decoration-[2px]"
              href="https://wa.me/12185000099 "
              target="_blank"
            >
              +1 218 500 0099
            </a>
            .
          </p>
          {/* Popup */}
          {showPopup && (
            <div className="absolute ml-56 -mt-[100px] bg-[#000] text-white text-xs px-3 py-1 rounded-md shadow-md z-50 whitespace-nowrap">
              Email copied!
            </div>
          )}
          <div className="flex gap-4">
            <Link href="/contact">
              <button className="bg-[#fff] text-[#01261E] font-[600] text-[14px] w-[129px] py-[9px] rounded-[57px]  border border-[#fff]">
                Advertise now
              </button>
            </Link>

            {matchedLink && (
              <CustomizedHoverButton
                // href={matchedLink.source}
                // target={matchedLink.target}
                href="/"
                label="Homepage"
                fontSize="14px"
                fontWeight="600"
                width="129px"
                borderColor="#fff"
                hoverBgColor="#fff"
                hoverText="#01261E"
                textColor="#fff"
                padding="py-[9px]"
              />
            )}
          </div>
        </div>
      </div>
      {/* mobile */}
      <div className="block lg:hidden">
        <div className="flex flex-col px-[16px] p-[16px] bg-[url('/analytics/ad-bg.png')] bg-cover bg-center bg-no-repeat text-[#fff] rounded-[10px] shadow-[0px_0px_7.1px_0px_rgba(0,0,0,0.16)]">
          <h4 className="text-[20px] font-[600] leading-[22px] tracking-[0.5px] font-[manrope] ">
            Advertise with us
          </h4>
          <p className="text-[14px] font-[400] leading-[140%] text-[#fff] pt-[20px]">
            Reach a highly engaged audience that values quality and takes
            action. Schedule a call with the sales team by clicking on the
            button below.
          </p>
          <p className="text-[14px] leading-[139%] text-[#fff] pt-[12px]">
            Email sales at{" "}
            <span className="inline-flex items-center gap-1 font-[500] text-[#fff]">
              <a href="mailto:sales@houseofsummary.com" className="">
                sales@houseofsummary.com
              </a>

              <img
                src="/home/copy.png"
                alt="copy icon"
                className="w-3 h-4 cursor-pointer"
                onClick={handleCopy}
              />
            </span>
            or WhatsApp us at{" "}
            <a
              className="underline underline-offset-4 decoration-[1px] font-[400]"
              href="https://wa.me/12185000099 "
              target="_blank"
            >
              +1 218 500 0099
            </a>
            .
          </p>
          {/* Popup */}
          {showPopup && (
            <div className="absolute ml-56 mt-[80px] bg-[#000] text-white text-xs px-3 py-1 rounded-md shadow-md z-50 whitespace-nowrap">
              Email copied!
            </div>
          )}

          <div className="flex gap-[10px] pt-[22px] mt-auto">
            <Link href="/contact">
              <button className="bg-[#fff] text-[#01261E] font-[600] text-[14px] w-[129px] py-[7px] rounded-[57px]  border border-[#fff]">
                Advertise now
              </button>
            </Link>

            {matchedLink && (
              <CustomizedHoverButton
                // href={matchedLink.source}
                // target={matchedLink.target}
                href="/"
                label="Homepage"
                fontSize="14px"
                fontWeight="600"
                width="129px"
                borderColor="#fff"
                hoverBgColor="#fff"
                hoverText="#01261E"
                textColor="#fff"
                padding="py-[7px]"
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
