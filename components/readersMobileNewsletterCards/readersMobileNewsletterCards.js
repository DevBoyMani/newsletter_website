"use client";

import { useEffect, useState } from "react";
import { Plus, Check } from "lucide-react";
import ReadersNLTest from "../readersNLTest/readersNLTest";

/** -------- helpers (same as desktop version) -------- */
function detectBrowser() {
  const ua = navigator.userAgent;
  if (ua.includes("CriOS")) return "Chrome";
  if (ua.includes("Edg")) return "Microsoft Edge";
  if (ua.includes("Firefox")) return "Mozilla Firefox";
  if (ua.includes("Chrome") && !ua.includes("Edge")) return "Chrome";
  if (ua.includes("Safari") && !ua.includes("Chrome")) return "Safari";
  return "Other Browser";
}

function detectDevice() {
  const ua = navigator.userAgent;
  if (ua.includes("iPad")) return "Tablet";
  if (ua.includes("iPhone") || ua.includes("Android")) return "Mobile";
  return "Desktop";
}

function detectPlatform() {
  if (navigator.userAgentData?.platform) {
    const platform = navigator.userAgentData.platform.toLowerCase();
    if (platform.includes("win")) return "Windows";
    if (platform.includes("mac")) return "MacOS";
    if (platform.includes("linux") && !platform.includes("android"))
      return "Linux";
    if (platform.includes("android")) return "Android";
    if (
      platform.includes("iphone") ||
      platform.includes("ipad") ||
      platform.includes("ipod")
    )
      return "iOS";
    return "Other Platform";
  }

  const ua = navigator.userAgent.toLowerCase();
  if (/windows/.test(ua)) return "Windows";
  if (/macintosh|mac os x/.test(ua)) return "MacOS";
  if (/android/.test(ua)) return "Android";
  if (/iphone|ipad|ipod/.test(ua)) return "iOS";
  if (/linux/.test(ua) && !/android/.test(ua)) return "Linux";
  return "Other Platform";
}

export default function ReadersMobileNewsletterCards() {
  // IMPORTANT: make IDs match your website IDs used everywhere else
  // From your desktop: GS=3, PS=1, DS=7, LS=8
  const newsLetterData = [
    {
      id: 3,
      domain: "Geopolitics",
      name: "Geopolitical Summary",
      image: "/readers/gs.png",
      content:
        "Clear, concise daily overview of global events. Conflicts, power shifts, and diplomacy summarized with care, so you stay informed without wasting hours on the news.",
      learnMore: "https://www.geopoliticalsummary.com/",
      source: "https://www.geopoliticalsummary.com/",
      btnText: "Learn More",
    },
    {
      id: 1,
      domain: "News",
      name: "Presidential Summary",
      image: "/readers/ps.png",
      content:
        "Truthful and unbiased summaries of key events in politics, business, culture, and sports stories shaping our time without drowning in endless headlines.",
      learnMore: "https://www.presidentialsummary.com/",
      source: "https://www.presidentialsummary.com/",
      btnText: "Learn More",
    },
    {
      id: 7,
      domain: "City series",
      name: "Dubai Summary",
      image: "/readers/m-ds.png",
      content:
        "A daily overview of the Dubai’s news, people, business, and culture, intelligently summarised so you stay connected to Dubai’s pulse in one elegant read.",
      learnMore: "https://www.dubaisummary.com/",
      source: "https://www.dubaisummary.com/",
      btnText: "Learn More",
    },
    {
      id: 8,
      domain: "City series",
      name: "London Summary",
      image: "/readers/m-ls.png",
      content:
        "Your window into London’s heartbeat. From markets and policy to culture, Crown and daily life, summarized with clarity and elegance.",
      learnMore: "https://www.londonsummary.com/",
      source: "https://www.londonsummary.com/",
      btnText: "Learn More",
      // If it's actually coming soon, you can set source to "#" and handle it in UI.
    },
  ];

  const [showPopup, setShowPopup] = useState(false);
  const [testInform, setTestInform] = useState(
    newsLetterData.map((item) => ({ ...item, selected: false }))
  );

  const [email, setEmail] = useState("");
  const [details, setDetails] = useState({ ids: [], email: "" });
  const [loading, setLoading] = useState(false);

  const handleAdd = (id) => {
    const newArr = testInform.map((el) =>
      el.id === id ? { ...el, selected: !el.selected } : el
    );
    setTestInform(newArr);

    const selectedIds = newArr.filter((el) => el.selected).map((el) => el.id);
    setDetails((prev) => ({ ...prev, ids: selectedIds }));
  };

  // ✅ popup opens based on selection (same as desktop)
  useEffect(() => {
    const selectedCount = testInform.filter((el) => el.selected).length;
    setShowPopup(selectedCount > 0);
  }, [testInform]);

  const handleEmailChange = (newEmail) => {
    setEmail(newEmail);
    setDetails((prev) => ({ ...prev, email: newEmail }));
  };

  // ✅ this returns { ok, message } so ReadersNLTest can decide success screen
  const handleSubmit = async () => {
    const selectedIds = details.ids;
    const userEmail = details.email.trim().toLowerCase();

    if (!userEmail || selectedIds.length === 0) {
      return {
        ok: false,
        message: "Email and at least one newsletter are required.",
      };
    }

    setLoading(true);

    try {
      // 1) ZeroBounce first
      const zbRes = await fetch(`/api/zero-bounce`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: userEmail }),
      });

      const zbJson = await zbRes.json();
      const zbOk = zbJson?.status === "valid" || zbJson?.status === "catch-all";

      if (!zbOk) {
        return {
          ok: false,
          message: `Invalid email (${zbJson?.status || "unknown"}${
            zbJson?.sub_status ? ` / ${zbJson.sub_status}` : ""
          }).`,
        };
      }

      // 2) add-user only after ZB ok
      const addUserRes = await fetch("/api/add-user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: userEmail,
          websiteIds: selectedIds,

          browser: detectBrowser(),
          device: detectDevice(),
          platform: detectPlatform(),
          referrer: document.referrer,

          zbStatus: zbJson?.status,
          zbSubStatus: zbJson?.sub_status,
          city: zbJson?.city,
          country: zbJson?.countryFromApi ?? zbJson?.country,
          domain: zbJson?.domain,
          firstname: zbJson?.firstname,
          lastname: zbJson?.lastname,
          gender: zbJson?.gender,
          zipcode: zbJson?.zipcode,
          region: zbJson?.region,
          smtp_provider: zbJson?.smtp_provider,
          ip: zbJson?.ip,
        }),
      });

      const addUserJson = await addUserRes.json();

      if (!addUserRes.ok || !addUserJson?.success) {
        return { ok: false, message: addUserJson?.error || "add-user failed." };
      }

      const { userId, uniqueId, websiteIds = [] } = addUserJson;

      // 3) welcome emails per selected newsletter
      const selectedNewsletters = newsLetterData.filter((nl) =>
        websiteIds.includes(nl.id)
      );

      await Promise.all(
        selectedNewsletters.map((nl) => {
          const baseUrl = (nl.source || "").replace(/\/+$/, "");
          const welcomeUrl = `${baseUrl}/api/emails/welcome`;

          return fetch(welcomeUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: userEmail, uniqueId, userId }),
          }).catch((err) =>
            console.error("Welcome email error:", welcomeUrl, err)
          );
        })
      );

      return { ok: true };
    } catch (error) {
      console.error("Error submitting:", error);
      return { ok: false, message: "Something went wrong. Please try again." };
    } finally {
      setLoading(false);
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

      <ReadersNLTest
        count={testInform.filter((el) => el.selected).length}
        email={email}
        setEmail={handleEmailChange}
        mHandleSubmit={handleSubmit}
        showPopup={showPopup}
        setShowPopup={setShowPopup}
        testInform={testInform}
        setTestInform={setTestInform}
        loading={loading}
      />
    </>
  );
}
