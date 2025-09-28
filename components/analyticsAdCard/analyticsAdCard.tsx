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
        <div className="h-[308px] rounded-[20px] p-[40px] bg-gradient-to-br from-[#116150] to-[#01261E] text-[#fff]">
          <h4 className="text-[22px] font-[600] leading-[22px] tracking-[0.5px] font-[manrope] pb-[20px]">
            Advertise with Sagravia
          </h4>
          <p className="text-[14px] font-[400] leading-[139%] text-[#fff] pb-[19px]">
            Promote your brand to a targeted, engaged audience. We offer
            flexible ad options to fit your goals and budget.
          </p>
          <p className="text-[14px] leading-[139%] text-[#fff] lg:pb-[36px]">
            Email us at{" "}
            <span className="font-[700] text-[#fff]">sales@sagravia.com</span>{" "}
            or click the button below.
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
                Contact sales
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
                href={matchedLink.source}
                target={matchedLink.target}
                label="Visit website"
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
      {/* <div className="block lg:hidden pb-[70px]">
        <div className="px-[16px] pt-[16px] rounded-[10px] bg-gradient-to-br from-[#116150] to-[#01261E] text-[#fff]">
          <h4 className="text-[16px] font-[600] leading-[22px] tracking-[0.5px] font-[manrope] ">
            Advertise with Sagravia
          </h4>
          <p className="text-[12px] font-[400] leading-[139%] text-[#fff] pt-[12px]">
            Promote your brand to a targeted, engaged audience. We offer
            flexible ad options to fit your goals and budget.
          </p>
          <p className="text-[14px] leading-[139%] text-[#fff] ">
            Email us at{" "}
            <span className="font-[700] text-[#fff]">sales@sagravia.com</span>{" "}
            or click the button below.
          </p>

          <div className="flex gap-4 pt-[25px] pb-[16px]">
         
            <Link href="/contact">
              <button className="bg-[#fff] text-[#01261E] font-[600] text-[12px] w-[129px] py-[9px] rounded-[57px]  border border-[#fff]">
                Contact sales
              </button>
            </Link>

            
            {matchedLink && (
              <CustomizedHoverButton
                href={matchedLink.source}
                target={matchedLink.target}
                label="Visit website"
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
      </div> */}
    </>
  );
}
