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
      content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nunc vestibulum ect"
    },
  ]
  const whatWeDoNotDo = [
    {
    
      icon:"/careers/un-verified.png",
      subHeading:"Environment",
      content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nunc vestibulum ect"
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
    <div className="text-white">
      <div className="md:px-16 px-4 lg:pt-20 pt-10 mx-auto ">
      <div className="mb-8 text-start ">
        <p className="lg:text-2xl text-base font-semibold text-black px-1 uppercase ">Looking for a new role &</p>
        <div className="lg:w-[46%] w-[60%]">
        <h2 className="text-5xl lg:text-7xl text-black py-2 ">
        Ready to make an impact?
        </h2>
        </div>
        <div className="pt-14 border-black border-b pb-4">
          <div className="flex justify-between">
          <div className="lg:text-5xl text-3xl  text-black">
            Open Positions
          </div>
          <div className="">
          <div className="hidden lg:block flex text-black text-base space-x-4 mt-8">
            <a  href="" target="_blank">LinkedIn &#8599;</a>
            <a href="" target="_blank">Glassdoor &#8599;</a>
          </div>
          </div>
          </div>
        </div>
      </div>
      </div>

      <div className="w-full md:px-16 px-3">
      <Testimonials testimonials={testimonials} activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>

      <div className="mt-0 md:px-16 px-4">
        {testimonials[activeTab].component}
      </div>

      <div className="py-10  md:px-16">
        <div className="flex flex-col md:flex-row justify-between px-4">
          <div className="md:w-[40%] lg:py-0 pb-14">
            <div className="text-black lg:text-7xl text-5xl">
              How do we work with your application?
            </div>
          </div>

          <div className="md:w-[44%] ">
            <div className="text-black">
            <CustomAccordion/>
            </div>
          </div>
        </div>
      </div>
      
      <div>
        {/* desktop view */}
        <div className="">
          <div className="hidden lg:block relative py-10 ">
            <div className="relative lg:h-auto">
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

        {/* mobile view */}
        <div className="">
        <div className="block lg:hidden relative py-10 ">
          <div className="relative lg:h-[530px]">
            <img
              src="/careers/Rectangle-image.png"
              className="w-full h-full object-cover"
              alt="Careers"
            />
            <div className="absolute top-0 left-0 w-[80%] space-y-6 pt-6 pl-6">
              <div className="text-white text-4xl lg:text-6xl ">
                Your trusted source for digital insights
              </div>

              <a
                href=""
                className="inline-block border border-white text-white text-lg px-6 py-1 rounded-lg hover:text-black hover:bg-white"
              >
                About Us
              </a>
            </div>
          </div>
      </div>
      </div>
        </div>
      </div>
      

     <div>
      {/* desktop view */}
      <div>
      <div className="hidden lg:block md:px-16 md:py-8 text-black">
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
      </div>

      {/* mobile view */}
      <div className="block lg:hidden flex flex-col space-y-14">
          {/* what we do */}
        <div className="px-4">
          <div className="bg-[#DAEBE8] rounded-lg py-6 ">
            <h4 className="text-3xl text-black text-center py-6">What we do</h4>
            <div>
              <div className="grid grid-cols-2 ">
              {whatWeDo.map((item, index) => (
                  <div key={index} className="grid grid-col-2 text-black text-center gap-2 py-4 px-3 rounded-lg">
                    <img src={item.icon} alt="do" className="w-9 h-9 mx-auto" />
                    <span className="text-lg">{item.subHeading}</span>
                    <span className="text-sm leading-7">{item.content}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* what we do not dp */}
        <div className="px-4">
          <div className="bg-[#DAEBE8] rounded-lg py-6">
            <h4 className="text-3xl text-black text-center py-6">What we don't do</h4>
            <div>
              <div className="grid grid-cols-2 ">
              {whatWeDoNotDo.map((item, index) => (
                  <div key={index} className="grid grid-col-2 text-black text-center gap-2 py-4 px-3 rounded-lg">
                    <img src={item.icon} alt="do" className="w-9 h-9 mx-auto" />
                    <span className="text-lg">{item.subHeading}</span>
                    <span className="text-sm leading-7">{item.content}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
     </div>

    <div className="md:px-16 px-4  py-10 md:pt-8 md:pb-12">
      <div className="border-b border-black">
        <div className="text-5xl text-black py-4">What our people have to say</div>
      </div>

      <div>
        <div>
        <div className="flex justify-between py-6">
      {/* Left Side (Small Images & Content) */}
      <div className="lg:w-[60%]">
        {/* Small Images */}
        <div className="flex flex-row space-x-4 md:py-8 sm:px-4 py-6">
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
                className="w-12 h-12"
              />
            </button>
          ))}
        </div>

        {/* Dynamic Text Content */}
        <div className="text-lg lg:py-6">
          <p className="text-black">{selectedImage.text}</p>
        </div>

        {/* Name & Role */}
        <div className="text-black relative top-6 lg:top-16 py-4">
          <p className="text-lg">{selectedImage.name}</p>
          <p className="text-sm">{selectedImage.role}</p>
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
      </div>
    </div>

    <div>
      <Footer/>
    </div>

    </div>
  );
};

export default Careers;