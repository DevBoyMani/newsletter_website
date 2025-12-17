"use client";

import { useState } from "react";
import { Plus, Check } from "lucide-react";
// import ReaderNLTestMobile from "../readerNLTestMobile/readerNLTestMobile";
import ReadersNLTest from "../readersNLTest/readersNLTest";

export default function ReadersMobileNewsletterCards() {
  const newsLetterData = [
    {
      id: 1,
      domain: "Geopolitics",
      name: "Geopolitical Summary",
      image: "/readers/gs.png",
      content:
        "Clear, concise daily overview of global events. Conflicts, power shifts, and diplomacy summarized with care, so you stay informed without wasting hours on the news.",
      learnMore: "https://www.geopoliticalsummary.com/",
      btnText: "Learn More",
    },
    {
      id: 2,
      domain: "News",
      name: "Presidential Summary",
      image: "/readers/ps.png",
      content:
        "Truthful and unbiased summaries of key events in politics, business, culture, and sports stories shaping our time without drowning in endless headlines.",
      learnMore: "https://www.presidentialsummary.com/",
      btnText: "Learn More",
    },

    {
      id: 3,
      domain: "City series",
      name: "Dubai Summary",
      image: "/readers/m-ds.png",
      content:
        "A daily overview of the Dubai’s news, people, business, and culture, intelligently summarised so you stay connected to Dubai’s pulse in one elegant read.",
      learnMore: "https://www.dubaisummary.com/",
      btnText: "Learn More",
    },
    {
      id: 4,
      domain: "City series",
      name: "London Summary",
      image: "/readers/m-ls.png",
      content:
        "Your window into London’s heartbeat. From markets and policy to culture, Crown and daily life, summarized with clarity and elegance.",
      learnMore: "#",
      btnText: "Coming soon",
    },
    // {
    //   id: 5,
    //   domain: "Entertainment",
    //   name: "Movie Suggestions",
    //   image: "/readers/ms.png",
    //   content:
    //     "Through in-depth analysis and well-researched content, we make historical knowledge accessible to professionals, students, and anyone interested in political history.",
    //   learnMore: "https://www.presidentialsummary.com/",
    // },
  ];

  const [showPopup, setShowPopup] = useState(false);
  const [testInform, setTestInform] = useState(
    newsLetterData.map((item) => ({ ...item, selected: false }))
  );

  const [email, setEmail] = useState("");
  const [details, setDetails] = useState({ ids: [], email: "" });

  const handleAdd = (id) => {
    const newArr = testInform.map((el) =>
      el.id === id ? { ...el, selected: !el.selected } : el
    );
    setTestInform(newArr);

    const selectedIds = newArr.filter((el) => el.selected).map((el) => el.id);
    setDetails((prevDetails) => ({ ...prevDetails, ids: selectedIds }));

    // Show/hide popup
    if (selectedIds.length > 0 && !showPopup) {
      setShowPopup(true);
    } else if (selectedIds.length === 0 && showPopup) {
      setShowPopup(false);
    }
  };

  const handleEmailChange = (newEmail) => {
    setEmail(newEmail);
    setDetails((prevDetails) => ({ ...prevDetails, email: newEmail }));
  };

  const handleSubmit = async () => {
    const dataToSend = { email: details.email, ids: details.ids };
    console.log("Submitting Data:", dataToSend);

    try {
      const res = await fetch("/api/sagravia", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataToSend),
      });
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      console.log("Data submitted successfully");
      setShowPopup(true);
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  return (
    <>
      <div className="block lg:hidden space-y-4">
        {testInform.map((item) => (
          <div
            key={item.id}
            className="relative border border-[#E5E5E5] overflow-hidden flex items-start p-[13px] rounded-[2px]"
          >
            <button
              onClick={(e) => {
                e.preventDefault();
                handleAdd(item.id);
              }}
              className="absolute top-3 right-2 w-9 h-9 flex items-center justify-center bg-gray-200 rounded-full"
            >
              {item.selected ? (
                <Check className="w-5 h-5 text-black" />
              ) : (
                <Plus className="w-5 h-5 text-black" />
              )}
            </button>

            <img
              src={item.image}
              alt={item.name}
              className="w-16 h-16 object-cover flex-shrink-0 mt-2"
            />

            <div className="ml-4 flex flex-col justify-between pr-6">
              <div>
                <span className="text-[10px] text-[#000000A8]">
                  {item.domain}
                </span>
                <p className="text-[#2C2C2C] text-[17px] font-[600] leading-[101%] mt-1">
                  {item.name}
                </p>
                <p className="text-[13px] text-[#363636] font-[400] leading-[116%] mt-1">
                  {item.content}
                </p>
              </div>
              <a
                href={item.learnMore}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] text-[#01261E] font-[500] mt-2 underline"
              >
                {item.btnText}
              </a>
            </div>
          </div>
        ))}
      </div>
      {/* 
      <ReaderNLTestMobile
        count={testInform.filter((el) => el.selected).length}
        email={email}
        setEmail={handleEmailChange}
        mHandleSubmit={handleSubmit}
        showPopup={showPopup}
        setShowPopup={setShowPopup}
        testInform={testInform}
        setTestInform={setTestInform}
      /> */}

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
    </>
  );
}
