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
    <div ref={containerRef} className="overflow-x-auto no-scrollbar whitespace-nowrap flex flex-row">
        
      {testimonials.map((testimonial, index) => ( 
        <button
          key={index}
          onClick={() => handleClick(index)}
          className={` md:text-base uppercase py-2 px-3 lg:mr-4  text-[#0C3D3D] rounded-lg transition-all duration-300 ${
            activeTab === index ? "text-[#0C3D3D] bg-[#CDD2CF] hover:bg-[#46DE46] " : "bg-[#DAEBE8]  hover:text-black hover:bg-[#46DE46]"
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

  return (
    <div className="text-white">
      <div className="md:px-16 px-4 pt-20 mx-auto ">
      <div className="mb-8 text-start ">
        <p className="text-2xl font-semibold text-black px-1 uppercase ">Looking for a new role &</p>
        <div className="w-[46%]">
        <h2 className="text-3xl md:text-7xl text-black py-2 ">
        Ready to make an impact?
        </h2>
        </div>
        <div className="pt-14 border-black border-b pb-4">
          <div className="flex justify-between">
          <div className="text-5xl text-black">
            Open Positions
          </div>
          <div className="">
          <div className="flex text-black text-base space-x-4 mt-8">
            <a  href="" target="_blank">LinkedIn &#8599;</a>
            <a href="" target="_blank">Glassdoor &#8599;</a>
          </div>
          </div>
          </div>
        </div>
      </div>
      </div>

      <div className="w-full md:px-16">
      <Testimonials testimonials={testimonials} activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>

      <div className="mt-0 md:px-16">
        {testimonials[activeTab].component}
      </div>

      <div className="py-10 md:px-16">
        <div className="flex justify-between">
          <div className="md:w-[40%]">
            <div className="text-black text-7xl ">
              How do we work with your application?
            </div>
          </div>

          <div className="md:w-[44%]">
            <div className="text-black">
            <CustomAccordion/>
            </div>
          </div>
        </div>
      </div>
      
      <div className="relative py-10 ">
        <div className="relative lg:h-[530px]">
          <img
            src="/careers/careers-1.png"
            className="w-full h-full object-cover"
            alt="Careers"
          />
          <div className="absolute top-1/4 left-12 lg:w-[35%] lg:h-[50%] space-y-10 md:px-4">
            <div className="text-white text-4xl lg:text-6xl ">
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

     <div className="md:px-16 md:py-8 text-black">
      <div className="flex justify-between items-start gap-8">
        <div className="w-1/2 space-y-4">
          <h2 className="text-5xl pb-2">What we do</h2>
          <div className="flex items-center gap-2 bg-[#DAEBE8] py-4 px-3 rounded-lg">
            <img src="/careers/verified.png" alt="do" className="w-6 h-6" />
            <span>Supportive and collaborative environment</span>
          </div>
          <div className="flex items-center gap-2 bg-[#DAEBE8] py-4 px-3 rounded-lg">
            <img src="/careers/verified.png" alt="do" className="w-6 h-6" />
            <span>Provide flexibility and work-life balance</span>
          </div>
          <div className="flex items-center gap-2 bg-[#DAEBE8] py-4 px-3 rounded-lg">
            <img src="/careers/verified.png" alt="do" className="w-6 h-6" />
            <span>Create opportunities for growth</span>
          </div>
          <div className="flex items-center gap-2 bg-[#DAEBE8] py-4 px-3 rounded-lg">
            <img src="/careers/verified.png" alt="do" className="w-6 h-6" />
            <span>Trust our team</span>
          </div>
        </div>

       
        <div className="border-l border-black h-auto mx-2 -mb-2 mt-16  self-stretch"></div>

        <div className="w-1/2 space-y-4">
          <h2 className="text-5xl pb-2">What we don't do</h2>
          <div className="flex items-center gap-2 bg-[#DAEBE8] py-4 px-3 rounded-lg">
            <img src="/careers/un-verified.png" alt="undo" className="w-6 h-6" />
            <span>Impose unnecessary formalities</span>
          </div>
          <div className="flex items-center gap-2 bg-[#DAEBE8] py-4 px-3 rounded-lg">
            <img src="/careers/un-verified.png" alt="undo" className="w-6 h-6" />
            <span>Micromanage</span>
          </div>
          <div className="flex items-center gap-2 bg-[#DAEBE8] py-4 px-3 rounded-lg">
            <img src="/careers/un-verified.png" alt="undo" className="w-6 h-6" />
            <span>Discourage creativity or new ideas</span>
          </div>
          <div className="flex items-center gap-2 bg-[#DAEBE8] py-4 px-3 rounded-lg">
            <img src="/careers/un-verified.png" alt="undo" className="w-6 h-6" />
            <span>Sacrifice well-being for work</span>
          </div>
        </div>
      </div>
     </div>

    <div className="md:px-16 md:py-8">
      <div className="border-b border-black">
        <div className="text-5xl text-black py-4">What our people have to say</div>
      </div>

      <div>
        <div>
        <div className="flex justify-between py-6">
      {/* Left Side (Small Images & Content) */}
      <div className="w-[60%]">
        {/* Small Images */}
        <div className="flex flex-row space-x-4 md:py-8">
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
                className="w-8 h-8"
              />
            </button>
          ))}
        </div>

        {/* Dynamic Text Content */}
        <div className="text-lg py-6 ">
          <p className="text-black">{selectedImage.text}</p>
        </div>

        {/* Name & Role */}
        <div className="text-black relative top-16">
          <p className="text-lg">{selectedImage.name}</p>
          <p className="text-sm">{selectedImage.role}</p>
        </div>
      </div>

      {/* Right Side (Large Image) */}
      <div className="w-[30%] md:py-8">
        <div>
          <img src={selectedImage.fullSrc} alt="selected" className="w-300" />
        </div>
      </div>
    </div>
          
        </div>
      </div>
    </div>

    </div>
  );
};

export default Careers;