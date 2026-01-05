"use client";

import { useEffect, useState } from "react";
import ContactComboBox from "../../components/contactComboBox/contactComboBox";
import ContactPhoneNumberSelection from "../../components/contactPhoneNumberSection/contactPhoneNumberSelection";
import ContactRadioButtonsInput from "../../components/contactRdaioButtonsInput/contactRadioButtonsInput";
import ContactMessage from "../../components/contactMessage/contactMessage";

const socialMediaIcons = [
  {
    name: "x",
    src: "/f-x.png",
    href: "https://x.com/Houseofsummary",
  },
  {
    name: "insta",
    src: "/f-insta.png",
    href: "https://www.instagram.com/houseofsummary/",
  },
  {
    name: "fb",
    src: "/f-fb.png",
    href: "https://www.facebook.com/Houseofsummary/",
  },
  {
    name: "ln",
    src: "/f-ln.png",
    href: "https://www.linkedin.com/company/houseofsummary/",
  },
  {
    name: "threads",
    src: "/f-threads.png",
    href: "https://www.threads.com/@houseofsummary",
  },
];

export default function ContactClient() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    foundUsVia: "", // 👈 string, not object
    preferredContact: "",
    message: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (key, value) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  console.log(formData);

  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name must be at least 3 characters";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\+?[0-9\s-]{7,15}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }
    if (!formData.preferredContact.trim()) {
      newErrors.preferredContact = "Please select a preferred contact method";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});

    // 👇 IMPORTANT: don't manipulate foundUsVia here anymore
    const payload = {
      ...formData,
      source: "contact-page",
    };

    console.log("Submitting payload:", payload); // just to verify

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok || !data.ok) {
        console.error("Contact API error", data);
        setErrors((prev) => ({
          ...prev,
          submit: "Something went wrong. Please try again.",
        }));
        return;
      }

      setFormSubmitted(true);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        foundUsVia: "",
        preferredContact: "",
        message: "",
      });
    } catch (err) {
      console.error("Fetch error:", err);
      setErrors((prev) => ({
        ...prev,
        submit: "Unable to send message right now. Please try again later.",
      }));
    }
  };

  const openChat = () => {
    if (window.Chatra) {
      window.Chatra("show");
      window.Chatra("openChat");
    } else {
      console.warn("Chatra not ready yet");
    }
  };

  // 1. Update state to track which element was clicked
  const [showPopup, setShowPopup] = useState({
    visible: false,
    type: "", // 'phone' or 'email'
    position: { x: 0, y: 0 },
  });

  // 2. Separate handlers for phone and email
  const handleCopyPhone = (e) => {
    const phoneNumber = "+1 218 500 0099";

    navigator.clipboard.writeText(phoneNumber).then(() => {
      const rect = e.target.getBoundingClientRect();
      setShowPopup({
        visible: true,
        type: "phone",
        position: { x: rect.left, y: rect.top },
      });

      setTimeout(() => {
        setShowPopup({ visible: false, type: "", position: { x: 0, y: 0 } });
      }, 1500);
    });
  };

  const handleCopyEmail = (e) => {
    const email = "contact@houseofsummary.com";

    navigator.clipboard.writeText(email).then(() => {
      const rect = e.target.getBoundingClientRect();
      setShowPopup({
        visible: true,
        type: "email",
        position: { x: rect.left, y: rect.top },
      });

      setTimeout(() => {
        setShowPopup({ visible: false, type: "", position: { x: 0, y: 0 } });
      }, 1500);
    });
  };
  return (
    <>
      {/* desktop view */}
      <div className="hidden lg:block bg-[#FAFAFA]">
        <div className="pt-[133px]">
          {/* header */}
          <div className="">
            <div className="flex justify-center text-[44px] leading-normal text-[#01261E]">
              <h1>Let’s connect</h1>
            </div>
            <div className="flex justify-center text-[18px] font-[500] text-[#717171] leading-normal pt-[20px]">
              Our team usually replies within a few hours.
            </div>
          </div>
          {/* contact form */}
          <div className="py-[50px] px-[113px] mx-auto">
            <div
              className="flex space-x-2 bg-[#fff] p-2 rounded-[10px] "
              style={{ boxShadow: "0 0 60px 30px rgba(0, 0, 0, 0.03)" }}
            >
              {/* left */}
              <div className="relative w-[40.5%] bg-[#01261E] rounded-[10px] px-[44px] pt-[40px] overflow-hidden">
                <div className="absolute bottom-0 right-0 h-auto opacity-100 pointer-events-none z-0">
                  <img
                    src="/contact/contact-background-circle.png"
                    alt="background logo"
                    className="w-52"
                  />
                </div>
                <div>
                  <p className="text-[#fff] text-[28px] leading-normal font-[600] ">
                    Contact details
                  </p>
                  <p className="text-[#C9C9C9] text-[18px] font-[400] leading-normal pt-2 w-[377px]">
                    Whether you want to advertise, send feedback, or just say
                    hello, we’d love to hear from you.
                  </p>
                </div>
                <div className="relative pt-16 z-10">
                  <div className="flex pb-10">
                    <img
                      src="/contact/call.png"
                      alt="call"
                      className="w-6 h-6"
                    />
                    <button
                      onClick={handleCopyPhone}
                      className="ml-6 text-[#fff] text-[16px] leading-normal font-[400]"
                    >
                      +1 218 500 0099
                    </button>
                  </div>
                  <div className="flex pb-10">
                    <img src="/contact/sms.jpg" alt="sms" className="w-6 h-6" />
                    <button
                      onClick={handleCopyEmail}
                      className="ml-6 text-[#fff] text-[16px] leading-normal font-[400]"
                    >
                      contact@houseofsummary.com
                    </button>
                    {showPopup.visible && (
                      <div
                        className="fixed bg-[#000] text-white text-xs px-3 py-2 rounded-md shadow-md z-50 whitespace-nowrap"
                        style={{
                          left: `${showPopup.position.x}px`,
                          top: `${showPopup.position.y - 40}px`, // Position above the button
                          transform: "translateX(-50%)",
                        }}
                      >
                        {showPopup.type === "phone"
                          ? "Phone number copied!"
                          : "Email copied!"}
                      </div>
                    )}
                  </div>
                  <div className="flex pb-10">
                    <img
                      src="/contact/location.jpg"
                      alt="location"
                      className="w-6 h-6 object-cover"
                    />
                    <p className="ml-6 text-[#fff] text-[16px] leading-normal font-[400]">
                      30 N Gould St, Ste N, Sheridan, WY,
                      <br /> 82801, United States
                    </p>
                  </div>

                  {/* flex button */}
                  <div className="mt-2">
                    <div className="flex flex-wrap md:flex-nowrap w-full gap-[20px]">
                      {/* Left Button */}
                      <button
                        onClick={() =>
                          window.open("https://cal.com/summary/", "_blank")
                        }
                        className="group relative flex items-center justify-center w-[151px] py-[7px] rounded-full overflow-hidden text-[14px] leading-normal font-[500] bg-[#DAEBE8] text-[#01261E] transition-all duration-500 ease-in-out hover:bg-[#01261E]"
                      >
                        {/* Expanding circle animation */}
                        <span className="absolute left-[19px] top-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0 rounded-full bg-[#01261E] transition-all duration-500 ease-in-out group-hover:w-[160%] group-hover:h-[400%]" />

                        {/* Content wrapper (centered area) */}
                        <span className="relative z-10 flex items-center justify-center w-full overflow-hidden">
                          {/* Normal state (dot + text) */}
                          <span className="flex items-center justify-center gap-[8px] transition-all duration-500 ease-in-out group-hover:translate-x-[-100%] group-hover:opacity-0">
                            <span className="w-2 h-2 bg-[#01261E] rounded-full transition-all duration-500 ease-in-out" />
                            <span className="text-[#01261E]">
                              Schedule a call
                            </span>
                          </span>

                          {/* Hover state (text + arrow) */}
                          <span className="absolute inset-0 flex items-center justify-center gap-[8px] text-white translate-x-[100%] opacity-0 transition-all duration-500 ease-in-out group-hover:translate-x-0 group-hover:opacity-100">
                            <span>Schedule a call</span>
                            <span className="transition-transform duration-500 ease-in-out group-hover:translate-x-[2px]">
                              →
                            </span>
                          </span>
                        </span>
                      </button>

                      {/* Right Button */}
                      <button
                        onClick={openChat}
                        className="group relative flex items-center justify-center w-[135px] py-[7px] rounded-full overflow-hidden text-[14px] leading-normal font-[500] bg-[#DAEBE8] text-[#01261E] transition-all duration-500 ease-in-out hover:bg-[#01261E]"
                      >
                        {/* Expanding circle animation */}
                        <span className="absolute right-[20px] top-1/2 translate-x-1/2 -translate-y-1/2 w-0 h-0 rounded-full bg-[#01261E] transition-all duration-500 ease-in-out group-hover:w-[160%] group-hover:h-[400%]" />

                        {/* Content wrapper */}
                        <span className="relative z-10 flex items-center justify-center w-full overflow-hidden">
                          {/* Normal state (text + dot) */}
                          <span className="flex items-center justify-center gap-[8px] transition-all duration-500 ease-in-out group-hover:translate-x-[100%] group-hover:opacity-0">
                            <span className="text-[#01261E]">Chat with us</span>
                            <span className="w-2 h-2 bg-[#01261E] rounded-full transition-all duration-500 ease-in-out" />
                          </span>

                          {/* Hover state (arrow + text) */}
                          <span className="absolute inset-0 flex items-center justify-center gap-[8px] text-white -translate-x-[100%] opacity-0 transition-all duration-500 ease-in-out group-hover:translate-x-0 group-hover:opacity-100">
                            <span className="transition-transform duration-500 ease-in-out group-hover:translate-x-[2px]">
                              →
                            </span>
                            <span>Chat with us</span>
                          </span>
                        </span>
                      </button>
                    </div>
                  </div>

                  {/* social icons */}

                  <div className="pb-[30px]">
                    <div className="pt-28 flex justify-start">
                      <div className="flex space-x-6 ">
                        {socialMediaIcons.map((icons, index) => (
                          <a key={index} href={icons.href} target="_blank">
                            <img
                              src={icons.src}
                              alt={icons.name}
                              className="w-6 h-6 cursor-pointer"
                            />
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* right */}
              <div className="w-[59.5%] px-[50px] py-[60px]">
                <form>
                  {/* row-1 */}
                  <div className="flex flex-col md:flex-row gap-8 text-[#000]">
                    <div className="flex-1 pb-10 group focus-within:text-[#01261E]">
                      <label className="block mb-2 text-[16px] font-[500] leading-[20px]">
                        Name <span className=" text-[#EB5757]">*</span>{" "}
                      </label>
                      <input
                        type="text"
                        placeholder="John"
                        className={`w-full text-[14px] border-b border-[#8D8D8D] py-2 focus:outline-none focus:border-b-1 group focus:border-[#01261E] focus:placeholder-transparent ${
                          formData.fullName
                            ? "text-[#1A1A1A]"
                            : "text-[#8D8D8D]"
                        }`}
                        value={formData.fullName}
                        onChange={(e) =>
                          handleChange("fullName", e.target.value)
                        }
                      />
                      {errors.fullName && (
                        <p className="text-red-500 text-[12px]">
                          {errors.fullName}
                        </p>
                      )}
                    </div>
                    <div className="flex-1 group focus-within:text-[#01261E]">
                      <label className="block mb-2 text-[16px] font-[500] leading-[20px]">
                        Email <span className="text-[#EB5757]">*</span>
                      </label>
                      <input
                        type="email"
                        placeholder="john@doe.com"
                        className={`w-full text-[14px] border-b border-[#8D8D8D] py-2 focus:outline-none focus:border-b-1 focus:border-[#01261E] focus:placeholder-transparent ${
                          formData.email ? "text-[#1A1A1A]" : "text-[#8D8D8D]"
                        }`}
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-[12px]">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Row 2*/}
                  <div className="flex flex-col md:flex-row gap-8 text-[#000]">
                    <div className="flex-1 group focus-within:text-[#01261E]">
                      <label className="block mb-2 text-[16px] font-[500] leading-[20px]">
                        Phone Number <span className="text-[#EB5757]">*</span>
                      </label>
                      {/* <input
                                        type="tel"
                                        placeholder="Enter your phone number"
                                        className="w-full text-[14px] border-b border-[#8D8D8D] p-2 focus:outline-none focus:border-b-1 focus:border-[#01261E]"
                                    /> */}
                      <ContactPhoneNumberSelection
                        value={formData.phone}
                        onChange={(val) => handleChange("phone", val)}
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-[12px]">
                          {errors.phone}
                        </p>
                      )}
                    </div>
                    <div className="flex-1 group focus-within:text-[#01261E]">
                      <label className="block text-[16px] font-[500] leading-[20px] mb-2">
                        How did you find us?
                      </label>
                      <ContactComboBox
                        value={formData.foundUsVia}
                        onChange={(val) => handleChange("foundUsVia", val)}
                      />
                    </div>
                  </div>
                </form>

                {/* contact radio button */}
                <ContactRadioButtonsInput
                  value={formData.preferredContact}
                  onChange={(val) => handleChange("preferredContact", val)}
                />

                {!formSubmitted && (
                  <>
                    {/* Message input */}
                    <div className="">
                      <ContactMessage
                        value={formData.message}
                        onChange={(val) => handleChange("message", val)}
                      />
                    </div>

                    {/* Submit button */}
                    <div className="flex justify-end mt-4">
                      <button
                        onClick={handleSubmit}
                        className="px-[40px] py-[10px] bg-[#01261E] text-white text-[16px] font-[500] rounded-full hover:bg-[#014134] transition leading-normal"
                      >
                        Send message
                      </button>
                    </div>
                  </>
                )}

                {/* success message - show only if submitted */}
                {formSubmitted && (
                  <>
                    <div className="flex items-start gap-4 mt-[45px] rounded-md transition-opacity duration-500 ease-in-out opacity-100">
                      <div className="w-7 h-7 rounded-full overflow-hidden">
                        <img
                          src="/contact/verified.png"
                          alt="Success"
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="text-[#000] text-[18px] font-[500] leading-[20px] mt-0.5">
                        Message sent
                      </div>
                    </div>
                    <div className="pt-[17px]">
                      <p className="text-[#000] text-[14px] font-[300] leading-[20px]">
                        Thanks for reaching out! We’ll get back to you as soon
                        as possible.
                      </p>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* mobile view */}
      <div className="block lg:hidden bg-[#FAFAFA]">
        <div className="md:px-4 pt-[128px]">
          {/* buttons */}
          <div>
            <div className="flex justify-center space-x-2 pt-[28px] pb-[17px]">
              <button
                onClick={() =>
                  window.open("https://cal.com/summary/", "_blank")
                }
              >
                <img src="/contact/b-1.jpg" alt="call" className="w-8 h-8 " />
              </button>
              <button onClick={openChat}>
                <img src="/contact/b-2.jpg" alt="call" className="w-8 h-8" />
              </button>
            </div>
          </div>
          {/* header */}
          <div className="w-full px-4 sm:px-0 pb-4">
            <div className="text-center">
              <div className="text-[30px] leading-normal  text-[#01261E]">
                <h1>Let’s connect</h1>
              </div>
              <div className="mt-2 text-[14px] font-[500] text-[#717171] leading-normal max-w-[60%] mx-auto">
                Our team usually replies within
                <br /> a few hours.
              </div>
            </div>
          </div>

          {/* contact form */}
          <div className=" mx-auto px-4 pb-4">
            <div
              className=" bg-[#fff] p-2 rounded-[10px]"
              style={{ boxShadow: "0px 0px 60px 30px rgba(0, 0, 0, 0.03)" }}
            >
              <div className=" bg-[#01261E] rounded-[5px]">
                <div className="text-center pt-4">
                  <p className="text-[#fff] text-[20px] leading-normal font-[600] ">
                    Contact details
                  </p>
                  <p className="text-[#C9C9C9] text-[11px] font-[400] leading-normal pt-2 w-[172px] mx-auto">
                    Whether you want to advertise, send feedback, or just say
                    hello, we’d love to hear from you.
                  </p>
                </div>
                <div className="pt-4">
                  <div className="pb-4">
                    <div className="flex justify-center pb-2">
                      <img
                        src="/contact/m-call.png"
                        alt="call"
                        className="w-6 h-6"
                      />
                    </div>
                    <div className="flex justify-center">
                      <button
                        onClick={handleCopyPhone}
                        className="text-[#fff] text-[12px] leading-normal font-[400]"
                      >
                        +1 218 500 0099
                      </button>
                    </div>
                  </div>
                  <div className="pb-4">
                    <div className="flex justify-center pb-2">
                      {/* <img 
                                    src="/contact/sms.jpg" alt="sma" 
                                    srcSet="/contact/sms.jpg" 
                                    className="w-6 h-6" /> */}
                      <img
                        src="/contact/m-sms.png"
                        alt="call"
                        className="w-6 h-6"
                      />
                    </div>
                    <div className="flex justify-center">
                      <button
                        onClick={handleCopyEmail}
                        className="text-[#fff] text-[12px] leading-normal font-[400]"
                      >
                        contact@houseofsummary.com
                      </button>
                    </div>
                  </div>
                  <div className="pb-0">
                    <div className="flex justify-center pb-2">
                      <img
                        src="/contact/m-location.png"
                        alt="call"
                        className="w-6 h-6"
                      />
                    </div>
                    <div className="flex items-center justify-center">
                      <p className=" text-[#fff] text-center text-[12px] leading-normal font-[400]">
                        30 N Gould St, Ste N, Sheridan, WY,
                        <br /> 82801, United States
                      </p>
                    </div>
                  </div>
                  {showPopup.visible && (
                    <div
                      className="fixed bg-[#000] text-white text-xs px-3 py-1 rounded-md shadow-md z-50 whitespace-nowrap"
                      style={{
                        left: `${showPopup.position.x}px`,
                        top: `${showPopup.position.y - 30}px`, // Position above the button
                        transform: "translateX(-50%)",
                      }}
                    >
                      {showPopup.type === "phone"
                        ? "Phone number copied!"
                        : "Email copied!"}
                    </div>
                  )}
                  {/* social icons */}
                  <div>
                    <div className="relative overflow-hidden pb-0">
                      {/* Background Image Behind Icons */}
                      <div className="absolute bottom-2 right-0 h-auto opacity-100 pointer-events-none z-0">
                        <img
                          src="/contact/contact-background-circle.png"
                          alt="background logo"
                          className="w-24 rounded-[5px]"
                        />
                      </div>

                      {/* Social Icons on top of background */}
                      <div className="pt-16 flex justify-center pb-6 relative z-10">
                        <div className="flex space-x-6">
                          {socialMediaIcons.map((icons, index) => (
                            <a key={index} href={icons.href} target="_blank">
                              <img
                                src={icons.src}
                                alt={icons.name}
                                className="w-5 h-5 cursor-pointer"
                              />
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-4 py-10">
                <form>
                  <div className="text-[#8D8D8D]">
                    <div className="pb-6 group focus-within:text-[#01261E]">
                      <label className="block mb-1 text-[16px] font-[500] leading-[20px]">
                        Name{" "}
                        <span className="text-[12px] text-[#EB5757]">*</span>{" "}
                      </label>
                      <input
                        type="text"
                        placeholder="John"
                        className={`w-full text-[14px] border-b rounded-none border-[#8D8D8D] py-2 focus:outline-none focus:border-b-1 group focus:border-[#01261E] focus:placeholder-transparent ${
                          formData.fullName
                            ? "text-[#1A1A1A]"
                            : "text-[#8D8D8D]"
                        }`}
                        value={formData.fullName}
                        onChange={(e) =>
                          handleChange("fullName", e.target.value)
                        }
                      />
                      {errors.fullName && (
                        <p className="text-red-500 text-[12px]">
                          {errors.fullName}
                        </p>
                      )}
                    </div>
                    <div className="pb-6 group focus-within:text-[#01261E]">
                      <label className="block mb-1 text-[16px] font-[500] leading-[20px]">
                        Email <span className="text-[#EB5757]">*</span>
                      </label>
                      <input
                        type="email"
                        placeholder="john@doe.com"
                        className={`w-full text-[14px] border-b rounded-none border-[#8D8D8D] py-2 focus:outline-none focus:border-b-1 group focus:border-[#01261E] focus:placeholder-transparent ${
                          formData.fullName
                            ? "text-[#1A1A1A]"
                            : "text-[#8D8D8D]"
                        }`}
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-[12px]">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="text-[#8D8D8D]">
                    <div className="pb-6 focus-within:text-[#01261E]">
                      <label className="block mb-1 text-[16px] font-[500] leading-[20px]">
                        Phone Number <span className="text-[#EB5757]">*</span>
                      </label>
                      {/* <input
                                            type="tel"
                                            placeholder="Enter your phone number"
                                            className="w-full text-[14px] border-b border-[#8D8D8D] p-2 focus:outline-none focus:border-b-1 focus:border-[#01261E]"
                                        /> */}
                      <ContactPhoneNumberSelection
                        value={formData.phone}
                        onChange={(val) => handleChange("phone", val)}
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-[12px]">
                          {errors.phone}
                        </p>
                      )}
                    </div>
                    <div className="pb-6 focus-within:text-[#01261E]">
                      <label className="block text-[16px] font-[500] leading-[20px] mb-1">
                        How did you find us?
                      </label>
                      <ContactComboBox
                        value={formData.foundUsVia}
                        onChange={(val) => handleChange("foundUsVia", val)}
                      />
                    </div>
                  </div>
                </form>

                {/* contact radio button */}
                <ContactRadioButtonsInput
                  value={formData.preferredContact}
                  onChange={(val) => handleChange("preferredContact", val)}
                />

                {/*  message */}

                {!formSubmitted && (
                  <>
                    <div>
                      <ContactMessage
                        value={formData.message}
                        onChange={(val) => handleChange("message", val)}
                      />
                    </div>

                    <div className="flex justify-center  mt-4">
                      {errors.submit && (
                        <p className="text-red-500 text-[12px] mt-2">
                          {errors.submit}
                        </p>
                      )}
                      <button
                        onClick={handleSubmit}
                        className="w-full py-2.5 bg-[#01261E] text-white text-[16px] font-[500] rounded-[5px] hover:bg-[#014134] transition"
                      >
                        Send message
                      </button>
                    </div>
                  </>
                )}

                {/* success message - show only if submitted */}
                {formSubmitted && (
                  <>
                    <div className="flex items-start gap-4 mt-[26px] rounded-md transition-opacity duration-500 ease-in-out opacity-100">
                      <div className="w-7 h-7 rounded-full overflow-hidden">
                        <img
                          src="/contact/verified.png"
                          alt="Success"
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="text-[#000] text-[18px] font-[500] leading-[20px] mt-0.5">
                        Message sent
                      </div>
                    </div>
                    <div className="pt-[14px]">
                      <p className="text-[#000] text-[14px] font-[300] leading-[20px]">
                        Thanks for reaching out! We’ll get back to you as soon
                        as possible.
                      </p>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
