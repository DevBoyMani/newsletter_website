"use client";

import { useEffect, useRef, useState } from "react";
import { Check } from "lucide-react";
import ReadersNLTest from "../../readersNLTest/readersNLTest";
import HeadingWithUnderline from "../stuff/headingWithUnderline/headingwithUnderline";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function ReadersNewsletters() {
  const data = [
    {
      id: 3,
      headerButton: "Subscribe",
      image: "/readers/n-gs.png",
      topic: "Geopolitics",
      when: "Mon-Sat",
      heading: "Geopolitical Summary",
      paragraph:
        "Clear, concise daily overview of global events. Conflicts, power shifts, and diplomacy summarized with care, so you stay informed without wasting hours on the news.",
      isActive: true,
      btnBg: "#01261E",
      btnHover: "#0B4337",
      textColor: "#fff",
      arrowColor: "#fff",
      border: "#01261E",
      source: "https://www.geopoliticalsummary.com/",
    },
    {
      id: 1,
      headerButton: "Subscribe",
      image: "/readers/n-ps.png",
      topic: "News",
      when: "Mon-Sat",
      heading: "Presidential Summary",
      paragraph:
        "Truthful and unbiased summaries of key events in politics, business, culture, and sports stories shaping our time without drowning in endless headlines.",
      isActive: true,
      btnBg: "#01261E",
      btnHover: "#0B4337",
      textColor: "#fff",
      arrowColor: "#fff",
      border: "#01261E",
      source: "https://www.presidentialsummary.com/",
    },
    {
      id: 7,
      headerButton: "Subscribe",
      image: "/readers/n-ds.png",
      topic: "City series",
      when: "Weekdays",
      heading: "Dubai Summary",
      paragraph:
        "A daily overview of the Dubai’s news, people, business, and culture, intelligently summarised so you stay connected to Dubai’s pulse in one elegant read.",
      isActive: true,
      btnBg: "#01261E",
      btnHover: "#0B4337",
      textColor: "#fff",
      arrowColor: "#fff",
      border: "#01261E",
      source: "https://www.dubaisummary.com/",
    },
    {
      id: 8,
      headerButton: "Subscribe",
      image: "/readers/n-ls.png",
      topic: "City series",
      when: "Weekdays",
      heading: "London Summary",
      paragraph:
        "Your window into London’s heartbeat. From markets and policy to culture, Crown and daily life, summarized with clarity and elegance.",
      isActive: true,
      btnBg: "#01261E",
      btnHover: "#0B4337",
      textColor: "#fff",
      arrowColor: "#fff",
      border: "#01261E",
      // btnBg: "#C6C5C0",
      // btnHover: "#C6C5C0",
      // textColor: "#000",
      // arrowColor: "#000",
      // border: "#C6C5C0",
      source: "https://www.londonsummary.com/",
    },
  ];

  const aboutOurInfo = [
    {
      id: 1,
      img: "/readers/newsletters.png",
      text: "Newsletters",
      number: "4",
    },
    {
      id: 2,
      img: "/readers/subscribers.png",
      text: "New readers join us every week",
      number: "+10K",
    },
    {
      id: 3,
      img: "/readers/openRate.png",
      text: "ad per edition; full focus, no clutter",
      number: "Only 1",
    },
  ];

  const [testInform, setTestInform] = useState(data);
  const [email, setEmail] = useState("");
  const [details, setDetails] = useState({ ids: [], email: "" });
  const [showPopup, setShowPopup] = useState(false);
  const params = useSearchParams();

  // const sectionRefs = useRef([]);
  const handleAdd = (id) => {
    const newArr = testInform.map((el) =>
      el.id === id ? { ...el, selected: !el.selected } : el
    );
    setTestInform(newArr);
    const selectedIds = newArr.filter((el) => el.selected).map((el) => el.id);
    setDetails((prev) => ({ ...prev, ids: selectedIds }));
  };

  const handleEmailChange = (newEmail) => {
    setEmail(newEmail);
    setDetails((prev) => ({ ...prev, email: newEmail }));
  };

  const handleSubmit = async () => {
    const selectedIds = details.ids;
    const userEmail = details.email.trim();

    if (!userEmail || selectedIds.length === 0) {
      console.warn("Email and at least one newsletter are required");
      return;
    }

    const payload = {
      email: userEmail,
      websiteIds: selectedIds,
    };

    try {
      // 1️⃣ Create/update user + subscribers
      const res = await fetch("/api/add-user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const json = await res.json();
      if (!json.success) {
        throw new Error(json.error || "add-user API returned success: false");
      }

      const { userId, uniqueId, websiteIds = [] } = json;

      // 2️⃣ Fire welcome emails for each selected newsletter
      const selectedNewsletters = data.filter((nl) =>
        websiteIds.includes(nl.id)
      );

      await Promise.all(
        selectedNewsletters.map((nl) => {
          // nl.source e.g. "https://www.presidentialsummary.com/"
          const baseUrl = (nl.source || "").replace(/\/+$/, ""); // strip trailing slash
          const welcomeUrl = `${baseUrl}/api/emails/welcome`;

          return fetch(welcomeUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              email: userEmail,
              uniqueId,
              userId,
            }),
          }).catch((err) => {
            console.error("Error sending welcome email to", welcomeUrl, err);
          });
        })
      );

      // 3️⃣ Reset UI
      // setShowPopup(true);
      setEmail("");
      setTestInform((prev) => prev.map((el) => ({ ...el, selected: false })));
      setDetails({ ids: [], email: "" });
    } catch (error) {
      console.error("Error submitting data or sending welcomes:", error);
    }
  };

  useEffect(() => {
    const selectedCount = testInform.filter((el) => el.selected).length;
    if (selectedCount > 0) {
      setShowPopup(true);
    }
  }, [testInform]);

  // smooth scroll the click from home page more nls ( trick pharams)
  useEffect(() => {
    const target = params.get("scrollTo");
    if (!target) return;

    const section = document.querySelector(`#${target}`);
    if (!section) return;

    const yOffset = -100; // your custom offset
    const y =
      section.getBoundingClientRect().top + window.pageYOffset + yOffset;

    setTimeout(() => {
      window.scrollTo({ top: y, behavior: "smooth" });
    }, 200);
  }, [params]);
  return (
    <div id="ourNewsletters" className="bg-[#FAFAFA]">
      {/* details */}
      <div className="px-4 md:px-28 pt-10 w-[58%]">
        <HeadingWithUnderline text="Our newsletters" />
      </div>
      <div className="pt-[30px] pb-[56px] md:px-28">
        <div className="w-[46%]">
          <p className="text-[#000] text-[16px] font-[400] leading-[152%]">
            Our editors review an overwhelming number of sources, remove the
            noise, and surface only what matters. Readers stay informed with
            clarity and precision, without wasting time or attention.{" "}
            <a
              href="/contact"
              className="text-[#C7A262] text-[16px] font-[500] leading-[152%] hover:underline"
            >
              Explore advertising opportunities →
            </a>
          </p>
        </div>
        <div className="pt-[56px]">
          <div className="flex flex-row justify-between">
            {aboutOurInfo.map((item) => (
              <div
                key={item.id}
                className="flex flex-col items-start text-center gap-[0px]"
              >
                {/* <img
                  src={item.img}
                  alt={item.text}
                  className="w-18 h-[47px] object-contain"
                /> */}
                <p className="text-[#000] text-[64px] font-[800] tracking-[-5.12px]">
                  {item.number}
                </p>
                <span className=" text-[#000] text-[20px] font-[600]">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* newsletter */}
      <div className="px-4 md:px-28 py-10">
        <div className="grid gap-6 lg:grid-cols-3">
          {testInform.map((data) => (
            <div
              key={data.id}
              className="group/card flex flex-col items-start cursor-pointer"
            >
              <div className="w-full relative">
                <img
                  src={data.image}
                  alt={data.heading}
                  className="w-full rounded-t-[15px]"
                />
                <div className="group/card">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      handleAdd(data.id);
                    }}
                    className={`absolute top-4 left-4 bg-white text-black rounded-full h-[30px] overflow-hidden transition-all duration-500 ease-in-out
                    ${
                      data.selected
                        ? "w-[115px] px-[32px]"
                        : "w-[30px] px-0 group-hover/card:w-[115px] group-hover/card:px-[13px]"
                    }
                  `}
                  >
                    {/* Text */}
                    <span
                      className={`inline-block whitespace-nowrap overflow-hidden align-middle transition-all duration-500
                      ${
                        data.selected
                          ? "max-w-[90px] opacity-100 -ml-6"
                          : "max-w-0 opacity-0 group-hover/card:max-w-[115px] group-hover/card:opacity-100 group-hover/card:mr-10 -ml-0.5"
                      }
                    `}
                    >
                      {data.selected ? "Selected" : "Subscribe"}
                    </span>

                    {/* Icon */}
                    <span
                      className={`absolute top-0 h-[30px] w-[30px] flex items-center justify-center transition-all duration-500
                      ${
                        data.selected
                          ? "right-3 translate-x-2"
                          : "left-1/2 -translate-x-1/2 group-hover/card:left-auto group-hover/card:right-3 group-hover/card:translate-x-3"
                      }
                    `}
                    >
                      {data.selected ? (
                        <Check size={20} />
                      ) : (
                        <span className="text-2xl">+</span>
                      )}{" "}
                    </span>
                  </button>
                </div>
              </div>
              {/* Card content */}
              <div className=" w-full border px-8 rounded-b-[15px] py-4 font-">
                <div className="relative h-6 overflow-hidden">
                  <span className="block absolute inset-0 transform transition-transform duration-300 translate-y-0 group-hover/card:-translate-y-6 text-[13px] text-[#000000a8]">
                    {data.topic}
                  </span>
                  <span className="block absolute inset-0 transform transition-transform duration-300 translate-y-6 group-hover/card:translate-y-0 text-[13px] text-[#000000a8]">
                    {data.when}
                  </span>
                </div>

                <div className="text-[22px] text-[#2C2C2C] font-[600] leading-[101.19%]">
                  {data.heading}
                </div>
                <div className=" text-[15px] font-[400] text-[#5A5A5A] mt-6 leading-[166%]">
                  {data.paragraph}
                </div>
                <div className="mt-4">
                  <Link href={data.source} target="_blank">
                    <button
                      style={{
                        border: `1px solid ${data.border}`,
                        color: data.textColor,
                        "--bgColor": data.btnBg,
                        "--hoverColor": data.btnHover,
                      }}
                      className="
                      flex items-center justify-between w-[223px] py-2 px-4 rounded-full 
                      [background-color:var(--bgColor)]
                      hover:[background-color:var(--hoverColor)]
                    "
                    >
                      <span className="font-[400] text-[13px]">
                        {data.isActive ? "Learn More" : "Coming Soon"}
                      </span>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 60 32"
                        fill="none"
                        stroke={data.textColor}
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-[30px] h-[28px]"
                      >
                        <line x1="16" y1="16" x2="50" y2="16" />
                        <polyline points="42 6 54 16 42 26" />
                      </svg>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ReadersNLTest
        count={testInform.filter((el) => el.selected).length}
        email={email}
        setEmail={handleEmailChange}
        mHandleSubmit={handleSubmit}
        showPopup={showPopup}
        setShowPopup={setShowPopup}
        testInform={testInform}
        setTestInform={setTestInform}
      />
    </div>
  );
}
