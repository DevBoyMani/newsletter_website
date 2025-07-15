"use client";
import { useRef, useState } from "react";
import BlogsArticles from "../blogsArticles/blogsArticles";
import BlogsPagination from "../blogsPagination/blogsPagination";
import BlogComboList from "../blogComboList/blogComboList";

export default function BlogsTestimonials() {
  const [activeTab, setActiveTab] = useState(0);

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

  //   const testimonials = [
  //     { name: "View All", component: <ViewAll /> },
  //     { name: "Design", component: <Design /> },
  //     { name: "Engineering", component: <Engineering /> },
  //     { name: "Journalism", component: <Journalism /> },
  //     { name: "Tech", component: <Tech /> },
  //     { name: "Leadership", component: <Leadership /> },
  //     { name: "Marketing", component: <Marketing /> },
  //     { name: "Others", component: <Others /> },
  //   ];

  return (
    <>
      {/* desktop */}
      <div className="hidden lg:block">
        <div className="pb-20 pt-10 md:px-28">
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
                  <a
                    href="/"
                    className="text-white text-[18px] font-[500] text-center bg-[#01261E] rounded-[6px] md:w-[55%] py-2 transition-all hover:bg-[#024b3b]"
                  >
                    Subscribe for free
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* mobile */}
      <div className="block lg:hidden">
        <div className="px-4">
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
                  <div className="flex justify-center">
                    <a
                      href="/"
                      className="text-white text-[16px] font-medium text-center bg-[#01261E] rounded-[6px] w-full max-w-xs py-2.5 transition-all hover:bg-[#024b3b]"
                    >
                      Subscribe for free
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
