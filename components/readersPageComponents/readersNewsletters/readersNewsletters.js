"use client";

import { useEffect, useState } from "react";
import { Check } from "lucide-react";
import ReadersNLTest from "../../readersNLTest/readersNLTest";

export default function ReadersNewsletters() {
  const datas = [
    {
      id: 1,
      headerButton: "Subscribe",
      image: "/readers/n-gs.png",
      topic: "News",
      when: "weekly",
      heading: "Geopolitical Summary",
      paragraph:
        "Through in-depth analysis and well-researched content, we make historical knowledge accessible to professionals, students, and anyone interested in political history.",
      footerButton: "Learn More",
    },
    {
      id: 2,
      headerButton: "Subscribe",
      image: "/readers/n-ms.png",
      topic: "News",
      when: "weekly",
      heading: "Movie Suggestions",
      paragraph:
        "Through in-depth analysis and well-researched content, we make historical knowledge accessible to professionals, students, and anyone interested in political history.",
      footerButton: "Learn More",
    },
    {
      id: 3,
      headerButton: "Subscribe",
      image: "/readers/n-ps.png",
      topic: "News",
      when: "weekly",
      heading: "Presidential Summary",
      paragraph:
        "Through in-depth analysis and well-researched content, we make historical knowledge accessible to professionals, students, and anyone interested in political history.",
      footerButton: "Learn More",
    },
    {
      id: 4,
      headerButton: "Subscribe",
      image: "/readers/n-bh.png",
      topic: "News",
      when: "weekly",
      heading: "Business History",
      paragraph:
        "Through in-depth analysis and well-researched content, we make historical knowledge accessible to professionals, students, and anyone interested in political history.",
      footerButton: "Learn More",
    },
    {
      id: 5,
      headerButton: "Subscribe",
      image: "/readers/n-ls.png",
      topic: "News",
      when: "weekly",
      heading: "Long and Short",
      paragraph:
        "Through in-depth analysis and well-researched content, we make historical knowledge accessible to professionals, students, and anyone interested in political history.",
      footerButton: "Learn More",
    },
    {
      id: 6,
      headerButton: "Subscribe",
      image: "/readers/n-ds.png",
      topic: "News",
      when: "weekly",
      heading: "Dubai Summary",
      paragraph:
        "Through in-depth analysis and well-researched content, we make historical knowledge accessible to professionals, students, and anyone interested in political history.",
      footerButton: "Learn More",
    },
  ];

  const aboutOurInfo = [
    {
      id: 1,
      img: "/readers/newsletters.png",
      text: "Newsletters",
      number: "6",
    },
    {
      id: 2,
      img: "/readers/subscribers.png",
      text: "new subscribers sign up per week",
      number: "+10K",
    },
    {
      id: 3,
      img: "/readers/openRate.png",
      text: "of subscribers open our news briefing every day.",
      number: "20%",
    },
  ];

  const [testInform, setTestInform] = useState(datas);
  const [email, setEmail] = useState("");
  const [details, setDetails] = useState({ ids: [], email: "" });
  const [showPopup, setShowPopup] = useState(false);

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
    const dataToSend = { email: details.email, ids: details.ids };
    try {
      const res = await fetch("/api/sagravia", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataToSend),
      });
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      setShowPopup(true);
      setEmail("");
      setTestInform((prev) => prev.map((el) => ({ ...el, selected: false })));
      setDetails({ ids: [], email: "" });
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  useEffect(() => {
    const selectedCount = testInform.filter((el) => el.selected).length;
    if (selectedCount > 0) {
      setShowPopup(true);
    }
  }, [testInform]);

  return (
    <div className="bg-[#FAFAFA]">
      {/* details */}
      <div className="pt-[30px] pb-[56px] md:px-28">
        <div className="w-[46%]">
          <p className="text-[#000] text-[16px] font-[400] leading-[152%]">
            Proin et pulvinar risus, quis hendrerit nisi. Vestibulum eget
            sollicitudin odio. Maecenas tellus sem, fermentum id aliquam et,
            auctor id libero. Interdum et malesuada fames ac ante ipsum primis
            in faucibus.Proin et pulvinar risus, quis hendrerit nisi. Vestibulum
            eget sollicitudin odio. Maecenas tellus sem, fermentu.{" "}
            <a
              href="/contact"
              className="text-[#C7A262] text-[16px] font-[500] leading-[152%] hover:underline"
            >
              Reach out sales team →
            </a>
          </p>
        </div>
        <div className="pt-[56px]">
          <div className="flex flex-row justify-between gap-6">
            {aboutOurInfo.map((item) => (
              <div
                key={item.id}
                className="flex flex-col items-start text-center"
              >
                {/* <img
                  src={item.img}
                  alt={item.text}
                  className="w-18 h-[47px] object-contain"
                /> */}
                <p className="text-[#000] text-[64px] font-[800] tracking-[-5.12px]">
                  {item.number}
                </p>
                <span className=" text-[#000] text-[20px] font-[600] -mt-[16]">
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
                        ? "w-[115px] px-[13px]"
                        : "w-[30px] px-0 group-hover/card:w-[110px] group-hover/card:px-[13px]"
                    }
                  `}
                  >
                    {/* Text */}
                    <span
                      className={`inline-block whitespace-nowrap overflow-hidden align-middle transition-all duration-500
                      ${
                        data.selected
                          ? "max-w-[90px] opacity-100 -ml-6" // ✅ keep width for Selected
                          : "max-w-0 opacity-0 group-hover/card:max-w-[115px] group-hover/card:opacity-100 group-hover/card:mr-10"
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
                          ? "right-1.5 translate-x-2"
                          : "left-1/2 -translate-x-1/2 group-hover/card:left-auto group-hover/card:right-2 group-hover/card:translate-x-3"
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
                  <button className=" border border-[#01261E] flex items-center justify-between w-[60%] py-2 px-4 rounded-full hover:bg-[#0B4337] text-white text bg-[#01261E]">
                    <span className="font-[400] text-[13px]">
                      {data.footerButton}
                    </span>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 60 32"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-[30px] h-[28px]"
                    >
                      <line x1="16" y1="16" x2="50" y2="16" />
                      <polyline points="42 6 54 16 42 26" />
                    </svg>
                  </button>
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
