"use client";

import { useState } from "react";
import ReadersNLTest from "../readersNLTest/readersNLTest";
import { Plus, Check } from "lucide-react";

export default function ReadersMobileNewsletterCards() {
  const newsLetterData = [
    {
      id: 1,
      domain: "NEWS",
      name: "Presidential Summary",
      image: "/readers/ps-image.png",
      content:
        "Through in-depth analysis and well-researched content, we make historical knowledge accessible to professionals, students, and anyone interested in political history.",
      learnMore: "https://www.presidentialsummary.com/",
    },
    {
      id: 2,
      domain: "Politics",
      name: "Geopolitical Summary",
      image: "/readers/gs.jpg",
      content:
        "By examining key political, economic, and security dynamics, we help readers stay informed about the forces driving international relations and decision-making.",
      learnMore: "https://www.presidentialsummary.com/",
    },
    {
      id: 3,
      domain: "Business",
      name: "Business History",
      image: "/readers/bh.jpg",
      content:
        "Our mission is to make historical business knowledge accessible and relevant for entrepreneurs, executives, researchers.",
      learnMore: "https://www.presidentialsummary.com/",
    },
    {
      id: 4,
      domain: "Finance",
      name: "Long and Short",
      image: "/readers/ls.jpg",
      content:
        "We cover key topics such as market trends, investment strategies, risk management, and economic developments, delivering in-depth analysis in a format that is accessible.",
      learnMore: "https://www.presidentialsummary.com/",
    },
    {
      id: 5,
      domain: "Entertainment",
      name: "Movie Suggestions",
      image: "/readers/ms.jpg",
      content:
        "Through in-depth analysis and well-researched content, we make historical knowledge accessible to professionals, students, and anyone interested in political history.",
      learnMore: "https://www.presidentialsummary.com/",
    },
  ];

  const [verified, setVerified] = useState({});

  const [testInform, setTestInform] = useState(newsLetterData);
  const [email, setEmail] = useState("");
  const [details, setDetails] = useState({
    ids: [],
    email: "",
  });

  // Handle adding/removing selected cards
  const handleAdd = (id) => {
    const newArr = testInform.map((el) =>
      el.id === id ? { ...el, selected: !el.selected } : el
    );
    setTestInform(newArr);

    const selectedIds = newArr.filter((el) => el.selected).map((el) => el.id);
    setDetails((prevDetails) => ({
      ...prevDetails,
      ids: selectedIds,
    }));
  };

  // Update email and details state
  const handleEmailChange = (newEmail) => {
    setEmail(newEmail);
    setDetails((prevDetails) => ({
      ...prevDetails,
      email: newEmail,
    }));
  };

  // Submit selected data
  const handleSubmit = async () => {
    const dataToSend = { email: details.email, ids: details.ids };
    console.log("Submitting Data:", dataToSend);

    try {
      const apiUrl = "/api/sagravia";
      const res = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataToSend),
      });
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      console.log("Data submitted successfully");
      setShowPopup(true);
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  // Render loading state
  //   if (loading) {
  //     return <div>Loading...</div>;
  //   }
  return (
    <>
      <div className="space-y-4">
        {newsLetterData.map((item, index) => (
          <div
            key={index}
            className="relative border border-[#E5E5E5] overflow-hidden flex items-start p-3 rounded-[2px]"
          >
            {/* <button className="absolute top-2 right-2 w-6 h-6 flex items-center justify-center bg-gray-200 rounded-full text-lg font-bold text-gray-700">
                    +
                </button> */}
            <button
              onClick={(e) => {
                e.preventDefault();
                setVerified((prev) => ({ ...prev, [item.id]: !prev[item.id] }));
                handleAdd(item.id);
              }}
              className="absolute top-3 right-2 w-9 h-9 flex items-center justify-center bg-gray-200 rounded-full"
            >
              {verified[item.id] ? (
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
                <span className="text-[10px] font-[normal] text-[#000000A8]">
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
                Learn more
              </a>
            </div>
          </div>
        ))}
      </div>

      <ReadersNLTest
        count={testInform.filter((el) => el.selected).length}
        email={email}
        setEmail={handleEmailChange}
        mHandleSubmit={handleSubmit}
      />
    </>
  );
}
