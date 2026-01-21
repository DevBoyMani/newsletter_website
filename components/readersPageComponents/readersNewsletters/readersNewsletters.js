"use client";

import { useEffect, useState } from "react";
import { Check } from "lucide-react";
import ReadersNLTest from "../../readersNLTest/readersNLTest";
import HeadingWithUnderline from "../stuff/headingWithUnderline/headingwithUnderline";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import ReadersMobileNewsletterCards from "../../readersMobileNewsletterCards/readersMobileNewsletterCards";

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
  const [loading, setLoading] = useState(false);

  const params = useSearchParams();

  const handleAdd = (id) => {
    const newArr = testInform.map((el) =>
      el.id === id ? { ...el, selected: !el.selected } : el,
    );
    setTestInform(newArr);
    const selectedIds = newArr.filter((el) => el.selected).map((el) => el.id);
    setDetails((prev) => ({ ...prev, ids: selectedIds }));
  };

  const handleEmailChange = (newEmail) => {
    setEmail(newEmail);
    setDetails((prev) => ({ ...prev, email: newEmail }));
  };

  // ✅ popup opens immediately when a newsletter is selected
  useEffect(() => {
    const selectedCount = testInform.filter((el) => el.selected).length;
    setShowPopup(selectedCount > 0);
  }, [testInform]);

  // ✅ mHandleSubmit returns {ok, message}
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

      // ❌ If ZeroBounce fails: do NOT call add-user, do NOT show success screen
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

      // 3) welcome emails
      const selectedNewsletters = data.filter((nl) =>
        websiteIds.includes(nl.id),
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
            console.error("Welcome email error:", welcomeUrl, err),
          );
        }),
      );

      // ✅ Success: allow popup to show "One last step!"
      return { ok: true };
    } catch (err) {
      console.error(err);
      return { ok: false, message: "Something went wrong. Please try again." };
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="hidden lg:block bg-[#FAFAFA]">
        <div className="px-4 md:px-28 pt-10 w-[58%]">
          <HeadingWithUnderline text="Our newsletters" />
        </div>

        <div className="pt-[30px] pb-[56px] md:px-28">
          <div className="w-[46%]">
            <p className="text-[#000] text-[16px] font-[400] leading-[152%]">
              Our editors review an overwhelming number of sources, remove the
              noise, and surface only what matters. Readers stay informed with
              clarity and precision.{" "}
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
                  <p className="text-[#000] text-[64px] font-[800] tracking-[-5.12px]">
                    {item.number}
                  </p>
                  <span className="text-[#000] text-[20px] font-[600]">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="px-4 md:px-28 py-10">
          <div className="grid gap-6 lg:grid-cols-3">
            {testInform.map((card) => (
              <div
                key={card.id}
                className="group/card flex flex-col items-start cursor-pointer"
              >
                <div className="w-full relative">
                  <img
                    src={card.image}
                    alt={card.heading}
                    className="w-full rounded-t-[15px]"
                  />

                  <div className="group/card">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        handleAdd(card.id);
                      }}
                      className={`absolute top-4 left-4 bg-white text-black rounded-full h-[30px] overflow-hidden transition-all duration-500 ease-in-out
                      ${
                        card.selected
                          ? "w-[115px] px-[32px]"
                          : "w-[30px] px-0 group-hover/card:w-[115px] group-hover/card:px-[13px]"
                      }
                    `}
                    >
                      <span
                        className={`inline-block whitespace-nowrap overflow-hidden align-middle transition-all duration-500
                        ${
                          card.selected
                            ? "max-w-[90px] opacity-100 -ml-6"
                            : "max-w-0 opacity-0 group-hover/card:max-w-[115px] group-hover/card:opacity-100 group-hover/card:mr-10 -ml-0.5"
                        }
                      `}
                      >
                        {card.selected ? "Selected" : "Subscribe"}
                      </span>

                      <span
                        className={`absolute top-0 h-[30px] w-[30px] flex items-center justify-center transition-all duration-500
                        ${
                          card.selected
                            ? "right-3 translate-x-2"
                            : "left-1/2 -translate-x-1/2 group-hover/card:left-auto group-hover/card:right-3 group-hover/card:translate-x-3"
                        }
                      `}
                      >
                        {card.selected ? (
                          <Check size={20} />
                        ) : (
                          <span className="text-2xl">+</span>
                        )}
                      </span>
                    </button>
                  </div>
                </div>

                <div className="w-full border px-8 rounded-b-[15px] py-4">
                  <div className="text-[22px] text-[#2C2C2C] font-[600]">
                    {card.heading}
                  </div>
                  <div className="text-[15px] font-[400] text-[#5A5A5A] mt-6 leading-[166%]">
                    {card.paragraph}
                  </div>

                  <div className="mt-4">
                    <Link href={card.source} target="_blank">
                      <button
                        style={{
                          border: `1px solid ${card.border}`,
                          color: card.textColor,
                          "--bgColor": card.btnBg,
                          "--hoverColor": card.btnHover,
                        }}
                        className="flex items-center justify-between w-[223px] py-2 px-4 rounded-full [background-color:var(--bgColor)] hover:[background-color:var(--hoverColor)]"
                      >
                        <span className="font-[400] text-[13px]">
                          {card.isActive ? "Learn More" : "Coming Soon"}
                        </span>
                        <span className="text-white">→</span>
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
          loading={loading}
        />
      </div>

      <div className="block lg:hidden">
        <div className="px-4 py-10 mx-auto">
          <HeadingWithUnderline text="Our Newsletters" />
          <p className="text-[#121212] text-[14px] leading-normal font-[400] py-4">
            Our editors review an overwhelming number of sources, remove the
            noise, and surface only what matters. Readers stay informed with
            clarity and precision, without wasting time or attention.
            <br />
            <a
              href="/contact"
              className="text-[#C7A262] text-[14px] font-[400] hover:underline"
            >
              Explore advertising opportunities →
            </a>
          </p>
          <ReadersMobileNewsletterCards />
        </div>
      </div>
    </>
  );
}
