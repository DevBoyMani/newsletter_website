"use client";

import { useEffect } from "react";
import { useRef, useState } from "react";
import BlogsArticles from "../blogsArticles/blogsArticles";
import BlogsPagination from "../blogsPagination/blogsPagination";
import BlogComboList from "../blogComboList/blogComboList";

export default function BlogsTestimonials() {
  const [showPopup, setShowPopup] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({ name: "", email: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const testimonials = [
    { name: "View All" },
    { name: "Basics" },
    { name: "advertising" },
    { name: "analytics" },
    { name: "Tech" },
    { name: "Case study" },
    { name: "Inside Sagravia" },
    { name: "Perspectives" },
  ];

  const Testimonials = ({ testimonials, activeTab, setActiveTab }) => {
    const containerRef = useRef(null);

    const handleClick = (index) => {
      setActiveTab(index);
      const button = containerRef.current.children[index];
      const containerWidth = containerRef.current.offsetWidth;
      const buttonWidth = button.offsetWidth;
      const buttonOffset = button.offsetLeft;
      const scrollPosition =
        buttonOffset - containerWidth / 2 + buttonWidth / 2;
      containerRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
    };

    return (
      <div
        ref={containerRef}
        className="overflow-x-auto no-scrollbar whitespace-nowrap flex flex-row mr-2"
      >
        {testimonials.map((testimonial, index) => (
          <button
            key={index}
            onClick={() => handleClick(index)}
            className={` md:text-[16px] font-[600] uppercase py-2 px-3 lg:mr-4  mr-2  text-[#0C3D3D] rounded-lg transition-all duration-300 ${
              activeTab === index
                ? "text-[#DAEBE8] bg-[#01261E] hover:bg-[#01261E] "
                : "bg-[#DAEBE8]  hover:text-[#DAEBE8] hover:bg-[#01261E]"
            }`}
          >
            {testimonial.name}
          </button>
        ))}
      </div>
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = { name: "", email: "" };

    if (!name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Enter a valid email address";
    }

    setErrors(newErrors);

    // If no errors, save to localStorage and show thank you message
    if (!newErrors.name && !newErrors.email) {
      localStorage.setItem("newsletterName", name);
      localStorage.setItem("newsletterEmail", email);
      setIsSubmitted(true);
    }
  };

  useEffect(() => {
    if (showPopup) {
      document.body.style.overflow = "hidden"; // disable scroll
    } else {
      document.body.style.overflow = ""; // enable scroll
    }

    return () => {
      document.body.style.overflow = ""; // cleanup in case the component unmounts
    };
  }, [showPopup]);

  return (
    <>
      {/* desktop */}
      <div className="hidden lg:block">
        <div className="pb-20 pt-10 md:px-28 bg-[#FAFAFA]">
          {/* tile */}
          <div className="py-4">
            <p className="text-[24px] text-[#000] font-[700] leading-[104%]">
              All articles
            </p>
          </div>
          {/* textimonial */}
          <div className="w-full">
            <Testimonials
              testimonials={testimonials}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          </div>
          {/* blogs */}
          <BlogsArticles />
          {/*pagination*/}
          <BlogsPagination totalPages={25} />
          {/* subscribe */}
          <div className=" py-10 flex justify-center">
            <div className="relative w-full max-w-5xl">
              {/* Background Image */}
              <img
                src="/blogs/blog-bottom-banner.png"
                alt="Newsletter Background"
                className="absolute inset-0 w-full h-full object-cover rounded-[10px] z-0"
              />

              {/* Overlay Content */}
              <div className="relative z-10 rounded-[10px] p-6">
                {/* Newsletter Text */}
                <div className="flex justify-center px-4">
                  <p className="text-[#000] text-[18px] text-center font-[500] leading-[130%] w-full md:w-[55%] pt-4 pb-10">
                    Get Sagravia news – our weekly newsletter packed with
                    insights from our blog, designed to keep Master Marketers
                    ahead with the latest Paid Social updates and innovations.
                  </p>
                </div>

                {/* Subscribe Button */}
                <div className="flex justify-center pb-8">
                  <button
                    onClick={() => setShowPopup(true)}
                    className="text-white text-[18px] font-[500] text-center bg-[#01261E] rounded-[6px] md:w-[55%] py-2 transition-all hover:bg-[#024b3b]"
                  >
                    Subscribe for free
                  </button>
                </div>
                {showPopup && (
                  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="relative bg-[#01261E] w-[90%] max-w-lg px-[35px]">
                      <button
                        onClick={() => setShowPopup(false)}
                        className="absolute top-3 right-3 text-white text-3xl w-7 h-7"
                      >
                        &times;
                      </button>
                      <h2 className="text-white font-[manrope] text-[26px] font-bold text-center pt-[30px] pb-[18px]">
                        Sagravia Weekly Newsletter
                      </h2>
                      {!isSubmitted ? (
                        <>
                          <form
                            onSubmit={handleSubmit}
                            className="bg-white rounded-[14px] pt-[38px] px-[34px] pb-[34px]"
                          >
                            <div className="space-y-[24px]">
                              <div>
                                <input
                                  type="text"
                                  placeholder="Name*"
                                  value={name}
                                  onChange={(e) => setName(e.target.value)}
                                  className="w-full pt-[17px] pb-[18px] pl-[15px] text-[14px] rounded-[10px] bg-[#F7F7F7] placeholder:text-[#757575] font-[500] leading-[130%]"
                                />
                                {errors.name && (
                                  <p className="text-[12px] text-red-500 mt-1 pl-1">
                                    {errors.name}
                                  </p>
                                )}
                              </div>
                              <div>
                                <input
                                  type="email"
                                  placeholder="Enter your email*"
                                  value={email}
                                  onChange={(e) => setEmail(e.target.value)}
                                  className="w-full pt-[17px] pb-[18px] pl-[15px] text-[14px] rounded-[10px] bg-[#F7F7F7] placeholder:text-[#757575] font-[500] leading-[130%]"
                                />
                                {errors.email && (
                                  <p className="text-[12px] text-red-500 mt-1 pl-1">
                                    {errors.email}
                                  </p>
                                )}
                              </div>
                            </div>
                            <div className="mt-[21px]">
                              <button
                                type="submit"
                                className="w-full py-[12px] text-[16px] font-[500] leading-[130%] bg-[#01261E] text-white rounded-[6px] hover:bg-[#024b3b] transition-all"
                              >
                                Subscribe for free
                              </button>
                            </div>
                          </form>
                          <p className="text-white text-[8px] font-[500] leading-[130%] pt-[7px] pb-[26px]">
                            By clicking “Submit” you agree with our{" "}
                            <a
                              href="/terms"
                              className="text-[#C7A262] underline cursor-pointer"
                            >
                              terms of use
                            </a>{" "}
                            and{" "}
                            <a
                              href="/privacy"
                              className="text-[#C7A262] underline cursor-pointer"
                            >
                              privacy policy
                            </a>
                            .
                          </p>
                        </>
                      ) : (
                        <div className="flex flex-col items-center justify-center py-12">
                          <p className="text-white text-[20px] font-[600] leading-[130%] text-center">
                            Thank you for subscribing!
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* mobile */}
      <div className="block lg:hidden">
        <div className="px-4 bg-[#FAFAFA]">
          {/* tile */}
          <div className="pt-10 pb-4">
            <p className="text-[18px] text-[#000] font-[700] leading-[104%]">
              All articles
            </p>
          </div>
          {/* textimonial */}
          {/* <div className="w-full">
            <Testimonials
              testimonials={testimonials}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          </div> */}

          <BlogComboList />
          {/* blogs */}
          <BlogsArticles />
          {/*pagination*/}
          <BlogsPagination />
          {/* subscribe */}
          <div className="">
            <div className="pt-10 pb-[65px] flex justify-center">
              <div className="relative w-full max-w-3xl rounded-[10px] overflow-hidden">
                {/* Background Image */}
                <img
                  src="/blogs/blog-bottom-banner-mobile.png"
                  alt="Newsletter Background"
                  className="absolute inset-0 w-full h-full object-cover z-0"
                />

                {/* Overlay content */}
                <div className="relative z-10 p-[30px]">
                  {/* Newsletter Text */}
                  <div className="flex justify-center">
                    <p className="text-[#000] text-[15px] text-center font-medium leading-[130%] w-full md:w-[80%] pb-6">
                      Get Sagravia news – our weekly newsletter packed with
                      insights from our blog, designed to keep Master Marketers
                      ahead with the latest Paid Social updates and innovations.
                    </p>
                  </div>

                  {/* Subscribe Button */}
                  {/* Subscribe Button */}
                  <div className="flex justify-center">
                    <button
                      onClick={() => {
                        setShowPopup(true);
                        setIsSubmitted(false);
                        setName("");
                        setEmail("");
                        setErrors({ name: "", email: "" });
                      }}
                      className="text-white text-[16px] font-medium text-center bg-[#01261E] rounded-[6px] w-full max-w-xs py-2.5 transition-all hover:bg-[#024b3b]"
                    >
                      Subscribe for free
                    </button>
                  </div>

                  {showPopup && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-4">
                      <div className="relative bg-[#01261E] w-full max-w-md rounded-[14px] overflow-hidden px-[20px] pt-[24px] pb-[30px]">
                        {/* Close Button */}
                        <button
                          onClick={() => setShowPopup(false)}
                          className="absolute top-1 right-3 text-white text-2xl"
                        >
                          &times;
                        </button>

                        <h2 className="text-white font-[manrope] text-[20px] font-bold text-center mb-4">
                          Sagravia Weekly Newsletter
                        </h2>

                        {!isSubmitted ? (
                          <form
                            onSubmit={handleSubmit}
                            className="bg-white rounded-[12px] p-[24px] space-y-[20px]"
                          >
                            <div>
                              <input
                                type="text"
                                placeholder="Name*"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full p-3 text-[14px] rounded-[8px] bg-[#F7F7F7] placeholder:text-[#757575]"
                              />
                              {errors.name && (
                                <p className="text-[12px] text-red-500 mt-1 pl-1">
                                  {errors.name}
                                </p>
                              )}
                            </div>
                            <div>
                              <input
                                type="email"
                                placeholder="Enter your email*"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full p-3 text-[14px] rounded-[8px] bg-[#F7F7F7] placeholder:text-[#757575]"
                              />
                              {errors.email && (
                                <p className="text-[12px] text-red-500 mt-1 pl-1">
                                  {errors.email}
                                </p>
                              )}
                            </div>
                            <button
                              type="submit"
                              className="w-full py-3 bg-[#01261E] text-white rounded-[6px] hover:bg-[#024b3b] transition-all"
                            >
                              Subscribe for free
                            </button>
                          </form>
                        ) : (
                          <div className="flex items-center justify-center py-12">
                            <p className="text-white text-[18px] font-semibold text-center">
                              Thank you for subscribing!
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
