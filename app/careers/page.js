"use client"
import React, { useState, useRef } from "react";
import ViewAll from "../../components/viewAll/viewAll";
import Leadership from "../../components/leadership/leadership";
import Others from "../../components/others/others";
import Design from "../../components/design/design";
import Engineering from "../../components/engineering/engineering";
import Journalism from "../../components/journalism/journalism";
import Tech from "../../components/tech/tech";
import Marketing from "../../components/marketing/marketing";
// import {FaqAccordionC} from "../../components/careers/faqAccordionC/faqAccordionC"
import CustomAccordion from "../../components/careers/customAccordion/customAccordion"
import { doCircle, XCircle } from "lucide-react";
import Footer from "../../components/footer/footer"

const Testimonials = ({ testimonials, activeTab, setActiveTab }) => {
  const containerRef = useRef(null);

  const handleClick = (index) => {
    setActiveTab(index);
    const button = containerRef.current.children[index];
    const containerWidth = containerRef.current.offsetWidth;
    const buttonWidth = button.offsetWidth;
    const buttonOffset = button.offsetLeft;
    const scrollPosition = buttonOffset - containerWidth / 2 + buttonWidth / 2;
    containerRef.current.scrollTo({ left: scrollPosition, behavior: "smooth" });
  };

  return (
    <div ref={containerRef} className="overflow-x-auto no-scrollbar whitespace-nowrap flex flex-row mr-2 ml-1">
        
      {testimonials.map((testimonial, index) => ( 
        <button
          key={index}
          onClick={() => handleClick(index)}
          className={` md:text-base uppercase py-2 px-3 lg:mr-4  mr-2  text-[#0C3D3D] rounded-lg transition-all duration-300 ${
            activeTab === index ? "text-[#DAEBE8] bg-[#01261E] hover:bg-[#01261E] " : "bg-[#DAEBE8]  hover:text-[#DAEBE8] hover:bg-[#01261E]"
          }`}
        >
          {testimonial.name}
        </button>
      ))}
    </div>
  );
};

const Careers = () => {
  const [activeTab, setActiveTab] = useState(0);

   const [hoverIndexDo, setHoverIndexDo] = useState(null);
  const [hoverIndexDont, setHoverIndexDont] = useState(null);

  const testimonials = [
    { name: "View All", component: <ViewAll/> },
    { name: "Design", component: <Design/> },
    { name: "Engineering", component: <Engineering/> },
    { name: "Journalism", component: <Journalism /> },
    { name: "Tech", component: <Tech/> },
    { name: "Leadership", component: <Leadership /> },
    {name: "Marketing", component: <Marketing /> },
    { name: "Others", component: <Others /> }
  ];

  const [selectedImage, setSelectedImage] = useState({
    id: 1,
    smallSrc: "/careers/p-1-small.png",
    fullSrc: "/careers/p-1-full.png",
    text: "Explore different categories. Find the best deals. AG1 is a daily health drink packed with nutrients to help alleviate bloating.",
    name: "Martine",
    role: "COO",
  });

  const images = [
    {
      id: 1,
      smallSrc: "/careers/p-1-small.png",
      fullSrc: "/careers/p-1-full.png",
      text: "Explore different categories. Find the best deals. AG1 is a daily health drink packed with nutrients to help alleviate bloating.",
      name: "Martine",
      role: "COO",
    },
    {
      id: 2,
      smallSrc: "/careers/p-2-small.png",
      fullSrc: "/careers/p-2-full.png",
      text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.",
      name: "Alan",
      role: "CEO",
    },
    {
      id: 3,
      smallSrc: "/careers/p-3-small.png",
      fullSrc: "/careers/p-3-full.png",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      name: "Mark",
      role: "CTO",
    },
  ];

  const whatWeDo = [
    {
      
      icon:"/careers/verified.png",
      subHeading:"Environment",
      content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nunc vestibulum ect"
    },
    {
      
      icon:"/careers/verified.png",
      subHeading:"Work-life balance",
      content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nunc vestibulum ect"
    },
    {
      
      icon:"/careers/verified.png",
      subHeading:"Growth",
      content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nunc vestibulum ect"
    },
    {
      
      icon:"/careers/verified.png",
      subHeading:"Trust our team",
      content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nunc vestibulum ect."
    },
  ]
  const whatWeDoNotDo = [
    {
    
      icon:"/careers/un-verified.png",
      subHeading:"Environment",
      content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nunc vestibulum ect."
    },
    {
    
      icon:"/careers/un-verified.png",
      subHeading:"Work-life balance",
      content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nunc vestibulum ect"
    },
    {
    
      icon:"/careers/un-verified.png",
      subHeading:"Growth",
      content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nunc vestibulum ect"
    },
    {
    
      icon:"/careers/un-verified.png",
      subHeading:"Trust our team",
      content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nunc vestibulum ect"
    },
  ]


  return (
    <div className="">
      <div className="md:px-28 px-4 lg:pt-20 pt-10 mx-auto ">
      <div className="mb-8 text-start ">
        <p className="lg:text-2xl text-base font-semibold text-black px-1 uppercase ">Looking for a new role &</p>
        <div className="lg:w-[46%] w-[60%]">
        <h2 className="text-[53px] leading-[84%] lg:text-[80px] lg:leading-[104%] text-[#01261E] py-2 font-[GT-Super-Ds-Trial]">
        Ready to make an impact?
        </h2>
        </div>
        <div className="lg:pt-14 pt-8 border-black border-b lg:pb-0 ">
          <div className="flex justify-between">
          <div className="lg:text-[56px] text-[30px]  text-[#01261E] font-[GT-Super-Ds-Trial] leading-normal">
            Open Positions
          </div>
          <div className="">
          <div className="hidden lg:block flex text-[#020715] text-[17px] space-x-4 mt-8">
            <a  href="" target="_blank" className="hover:underline hover:text-[#01261E]">LinkedIn &#8599;</a>
            <a href="" target="_blank" className="hover:underline hover:text-[#01261E]">Glassdoor &#8599;</a>
          </div>
          </div>
          </div>
        </div>
      </div>
      </div>

      <div className="w-full md:px-28 px-4">
      <Testimonials testimonials={testimonials} activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>

      <div className="mt-0 md:px-28 px-4">
        {testimonials[activeTab].component}
      </div>

      {/* faq */}
      <div className="py-10  md:px-28">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="md:w-[46%] lg:py-0 pb-14">
            <div className="px-4 text-[#01261E] lg:text-[56px] text-[51px] font-[GT-Super-Ds-Trial]  font-[400] lg:leading-[104%] leading-[84%]">
              How do we work with your application?
            </div>
          </div>

          <div className="md:w-[47.5%] ">
            <div className="text-black ">
            <CustomAccordion/>
            </div>
          </div>
        </div>
      </div>
      
      <div>

        {/* desktop view */}
        <div className="">
        {/* Desktop view with fallback image */}
        <div className="hidden lg:block relative py-10">
          <div className="relative lg:h-[530px]">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/careers/careers-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute top-[10%] left-12 w-[42%] space-y-10 md:px-4">
              <div className="text-white lg:text-[88px] font-[GT-Super-Ds-Trial] leading-[94%]">
                Your trusted source for digital insights
              </div>
              <a
                href=""
                className="inline-block border border-white text-white text-lg mt-4 px-6 py-1 rounded-lg hover:text-black hover:bg-white"
              >
                About Us
              </a>
            </div>
          </div>
        </div>

     {/* Mobile view with fallback image */}
      <div className="block lg:hidden relative py-10">
        <div className="relative h-[470px]">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="/careers/career-mobile-video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute top-[4%] left-4 w-full space-y-10 md:px-4">
                  <div className="text-white text-[39px] font-[GT-Super-Ds-Trial] leading-[84%] font-[400]">
                    Your trusted<br/> source for digital<br/> insights
                  </div>
                  <a
                    href=""
                    className="inline-block border border-white text-white text-[15px] mt-4 px-6 py-1 rounded-lg hover:text-black hover:bg-white leading-normal"
                  >
                    About Us
                  </a>
                </div>
        </div>
      </div>
    </div>

      </div>
      

      {/* desktop view */}
      <div>
      <div className="hidden lg:block md:px-28 md:py-8 text-black">
      <div className="flex justify-between items-start gap-8">
        {/* What we do */}
        <div className="w-1/2 space-y-4">
          <h2 className="text-[56px] pb-2 font-[GT-Super-Ds-Trial]">What we do</h2>
          {whatWeDo.map((item, index) => (
          <div
            key={index}
            onMouseEnter={() => setHoverIndexDo(index)}
            onMouseLeave={() => setHoverIndexDo(null)}
            className="bg-[#DAEBE8] py-4 px-3 rounded-lg transition-all duration-300 hover:bg-[#cde0db] group"
          >
            <div className="flex items-center gap-2">
              <img src={item.icon} alt="do" className="w-9 h-9" />
              <span className="text-[20px] font-[400] leading-[104%]">{item.subHeading}</span>
            </div>

            {/* Expanding paragraph */}
            <div
              className={`
                overflow-hidden transition-all duration-700 ease-in-out text-[16px] text-[#12121299] leading-[104%]
                ${hoverIndexDo === index ? 'max-h-40 mt-2' : 'max-h-0'}
              `}
            >
              {item.content}
            </div>
          </div>
        ))}

        </div>

        <div className="border-l border-black h-auto mx-2 -mb-2 mt-24  self-stretch"></div>

        {/* What we don't do */}
        <div className="w-1/2 space-y-4">
          <h2 className="text-[56px] pb-2 font-[GT-Super-Ds-Trial]">What we don't do</h2>
         {whatWeDoNotDo.map((item, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoverIndexDont(index)}
              onMouseLeave={() => setHoverIndexDont(null)}
              className="bg-[#DAEBE8] py-4 px-3 rounded-lg transition-all duration-300 hover:bg-[#cde0db] group"
            >
              <div className="flex items-center gap-2">
                <img src={item.icon} alt="undo" className="w-9 h-9" />
                <span className="text-[20px] font-[400] leading-[104%]">{item.subHeading}</span>
              </div>

              {/* Smooth expand/collapse paragraph */}
              <div
                className={`
                  overflow-hidden transition-all duration-700 ease-in-out text-[16px] text-[#12121299] leading-[104%]
                  ${hoverIndexDont === index ? 'max-h-40 mt-2' : 'max-h-0'}
                `}
              >
                {item.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>


      {/* mobile view */}
      <div className="block lg:hidden flex flex-col space-y-10">
          {/* what we do */}
        <div className="px-4">
          <div className="bg-[#DAEBE8] rounded-[10px] py-6 ">
            <h4 className="text-[34px] text-[#121212] font-[GT-Super-Ds-Trial] font-[400] leading-[24px] text-center py-6">What we do</h4>
            <div>
              <div className="grid grid-cols-2 ">
              {whatWeDo.map((item, index) => (
                  <div key={index} className="grid grid-col-2 text-black text-center gap-2 py-4 px-3 rounded-lg">
                    <img src={item.icon} alt="do" className="w-9 h-9 mx-auto" />
                    <span className="text-[#304659] text-[14px] font-[500] leading-[24px]">{item.subHeading}</span>
                    <span className="text-[#304659] text-[10px] font-[400] leading-[20px]">{item.content}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* what we do not do */}
        <div className="px-4">
          <div className="bg-[#DAEBE8] rounded-lg py-6">
            <h4 className="text-[34px] text-[#121212] font-[GT-Super-Ds-Trial] font-[400] leading-[24px] text-center py-6">What we don't do</h4>
            <div>
              <div className="grid grid-cols-2 ">
              {whatWeDoNotDo.map((item, index) => (
                  <div key={index} className="grid grid-col-2 text-black text-center gap-2 py-4 px-3 rounded-lg">
                    <img src={item.icon} alt="do" className="w-9 h-9 mx-auto" />
                    <span className="text-[#304659] text-[14px] font-[500] leading-[24px]">{item.subHeading}</span>
                    <span className="text-[#304659] text-[10px] font-[400] leading-[20px ]">{item.content}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
     </div>
      
      {/* heading with underline and content */}
    <div className="md:px-28 px-4  py-10 md:pt-12 md:pb-14">
        <div className="border-b border-black">
          <div className="text-[30px] lg:text-[56px] lg:w-full leading-normal lg:font-[400] text-[#01261E] font-[GT-Super-Ds-Trial] ">What our people have to say</div>
        </div>

          <div className="flex justify-between pb-6 pt-8">
            {/* Left Side (Small Images & Content) */}
            <div className="lg:w-[60%]">
              {/* Small Images */}
              <div className="flex flex-row space-x-4 md:py-8 sm:px-4 py-4">
                {images.map((image) => (
                  <button
                    key={image.id}
                    className={`cursor-pointer p-0.5 rounded-full ${
                      selectedImage.id === image.id ? "border border-black rounded-full" : "border-transparent"
                    }`}
                    onClick={() => setSelectedImage(image)}
                    
                  >
                    <img
                      src={image.smallSrc}
                      alt={`image-${image.id}`}
                      className="hidden lg:block w-13 h-13"
                    />
                    <img
                      src={image.smallSrc}
                      alt={`image-${image.id}`}
                      className="block lg:hidden w-12 h-12"
                    />
                  </button>
                ))}
              </div>

              {/* Dynamic Text Content */}
              <div className="lg:py-6">
                <p className="text-black text-[17px] lg:text-[20px] leading-[130%] font-[400]">{selectedImage.text}</p>
              </div>

              {/* Name & Role */}
              <div className="text-black relative top-6 lg:top-16 py-4">
                <p className="text-[17px] lg:text-[24px]">{selectedImage.name}</p>
                <p className="text-[11px] lg:text-[15px]">{selectedImage.role}</p>
              </div>
            </div>

              {/* Right Side (Large Image) */}
              <div className="hidden lg:block w-[30%] md:py-8">
                <div>
                  <img src={selectedImage.fullSrc} alt="selected" className="w-300" />
                </div>
              </div>
          </div>
    </div>
      
       

        <div>
          <Footer/>
        </div>

    </div>
  );
};

export default Careers;