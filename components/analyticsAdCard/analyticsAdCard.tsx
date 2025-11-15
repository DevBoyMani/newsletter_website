import Link from "next/link";
import CustomizedHoverButton from "../customizedHoverButton/customizedHoverButton";

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

  return (
    <>
      {/* desktop */}
      <div className="lg:block hidden">
        <div className="h-[308px] rounded-[20px] p-[40px] text-[#fff] bg-[url('/analytics/ad-bg.png')] bg-cover bg-center bg-no-repeat">
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
            <span className="font-[700] text-[#fff]">sales@sagravia.com </span>{" "}
            or
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

          <div className="flex gap-4">
            {/* <CustomizedHoverButton
          href="#"
          label="Contact sales"
          fontSize="14px"
          fontWeight="600"
          width="129px"
          height="45px"
          borderColor="#0B4337"
          bgColor="#fff"
          hoverBgColor="#0B4337"
          hoverText="#ffffff"
          textColor="#01261E"
          padding=" py-[9px]"
        /> */}

            <Link href="/contact">
              <button className="bg-[#fff] text-[#01261E] font-[600] text-[14px] w-[129px] py-[9px] rounded-[57px]  border border-[#fff]">
                Advertise now
              </button>
            </Link>

            {/* <CustomizedHoverButton
              href={matchedLink.source}
              target={matchedLink.target}
              label="Visit website"
              fontSize="14px"
              fontWeight="600"
              width="129px"
              // height="45px"
              borderColor="#fff"
              hoverBgColor="#fff"
              hoverText="#01261E"
              textColor="#fff"
              padding="py-[9px]"
            /> */}
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
        <div className="flex flex-col px-[16px] p-[16px] rounded-[10px] bg-[url('/analytics/ad-bg.png')] bg-cover bg-center bg-no-repeat text-[#fff]">
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
            <span className="font-[700] text-[#fff]">sales@sagravia.com </span>{" "}
            or
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
