"use client"

import { useEffect, useRef, useState } from "react";
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

 const steps =[
    {id:1,source:"/careers/step-1.png",name:"step-1"},
    {id:2,source:"/careers/step-2.png",name:"step-2"},
    {id:3,source:"/careers/step-3.png",name:"step-3"},
    {id:4,source:"/careers/step-4.png",name:"step-4"},
    {id:5,source:"/careers/step-5.png",name:"step-5"},
  ]

const Careers = () => {
  const [activeTab, setActiveTab] = useState(0);

   const [hoverIndexDo, setHoverIndexDo] = useState(null);
  const [hoverIndexDont, setHoverIndexDont] = useState(null);
    const [activeStepImage, setActiveStepImage] = useState(steps?.[1] || null);




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

 

  const images = [
    {
      id: 1,
      smallSrc: "/careers/coo.png",
      fullSrc: "/careers/coo-full.png",
      text: "Explore different categories. Find the best deals. AG1 is a daily health drink packed with nutrients to help alleviate bloating.",
      name: "Martine",
      role: "COO",
    },
    {
      id: 2,
      smallSrc: "/careers/ceo.png",
      fullSrc: "/careers/ceo-full.png",
      text: "“Our approach is to stay lean and adaptable, allowing us to swiftly address challenges and seize opportunities in our quest for global reach.“",
      name: "Alan",
      role: "CEO",
    },
    {
      id: 3,
      smallSrc: "/careers/cto.png",
      fullSrc: "/careers/cto-full.png",
      text: "Developing and implementing a technology strategy that aligns with the company's overall business goals.",
      name: "Mark",
      role: "CTO",
    },
  ];

   const [selectedImage, setSelectedImage] = useState(images[2]);

 

const whatWeOfferCol1=[
  {id:1,logo:"/careers/supportive.png",heading:"Supportive and collaborative environment",content:"We believe the best ideas come from teamwork. Everyone is encouraged to share their thoughts, and contributions are recognized and celebrated."},
  {id:2,logo:"/careers/trust.png",heading:"We trust our employees",content:"We trust our employees to deliver results without micromanagement. Once a task is assigned, you have the autonomy to get it done your way."},
  {id:3,logo:"/careers/benefits.png",heading:"Benefits",content:"Competitive salary, insurance, group RRSP with employer participation, four weeks' vacation upon arrival, telemedicine and employee assistance programs, National PayrolI Institute membership, full working equipment, home office allowance..."},
]
const whatWeOfferCol2=[
  {id:1,logo:"/careers/create-opportunities.png",heading:"Create opportunities for growth",content:"We invest in your development by providing opportunities to learn, grow, and take on new challenges. Your success is our success."},
  {id:2,logo:"/careers/flexibility.png",heading:"Flexibility and work-life balance",content:"Our remote-friendly culture allows you to work where you’re most comfortable. We respect your personal time and prioritize a healthy work-life balance."},
  {id:3,logo:"/careers/celebrate-diversity.png",heading:"Celebrate diversity and inclusion",content:"We invest in your development by providing opportunities to learn, grow, and take on new challenges. Your success is our success."},
]

// steps
  const handleStepChange = (stepNumber) => {
  const selected = steps.find((s) => s.id === stepNumber);
  setActiveStepImage(selected);
};
// /steps

// what we offer
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.current.findIndex(
              (ref) => ref === entry.target
            );
            if (index !== -1) {
              setActiveIndex(index);
            }
          }
        });
      },
      {
        rootMargin: "-50% 0px -40% 0px",
        threshold: 0.2,
      }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  // const cardSections = [whatWeOfferCol1, whatWeOfferCol2];
// what we offer

  return (
    <>
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

          {/* desktop faq */}
          <div className="hidden lg:block py-10  md:px-28 flex justify-end">
            <div className="lg:pb-20">
                <div className="px-4 text-[#01261E] lg:text-[56px] text-[51px] font-[GT-Super-Ds-Trial]  font-[400] lg:leading-[104%] leading-[84%] lg:text-right">
                  How do we work with <br/>
                  your application?
                </div>
              </div>
          </div>

            <div className="hidden lg:block py-10 md:px-28 md:pb-24">
              <div className="flex flex-col md:flex-row justify-between ">

                {/* Left side – Image */}
                  <div className="md:w-[46%] lg:py-0 pb-8">
                    {activeStepImage ? (
                      <img
                        src={activeStepImage.source}
                        alt={activeStepImage.name}
                        className="w-[86%] mt-[-80px]"
                        style={{ maxHeight: '80vh', objectFit: 'contain' }}
                      />
                    ) : (
                      <img
                        src="/careers/normal-state-image.png"
                        alt="step doesn't selected"
                        className="w-[86%] mt-[-80px]"
                        style={{ maxHeight: '80vh', objectFit: 'contain' }}
                      />
                    )}
                  </div>


                  {/* Right side – Accordion / mobile too*/}
                  <div className="md:w-[47.5%]">
                    <CustomAccordion onStepChange={handleStepChange} />

                  </div>

              </div>
            </div>

            {/*/ desktop faq */}


            {/* mobile faq */}

             <div className="lg:hidden block py-10">
            <div className=" lg:pb-20">
                <div className="w-[80%] px-4 text-[#01261E] text-[30px]  font-[GT-Super-Ds-Trial]  font-[400] lg:leading-[104%] leading-[84%] ">
                  How do we work with 
                  your application?
                </div>
              </div>
          </div>

            <div className="lg:hidden block ">
              {/* <div className="flex flex-col justify-between "> */}

                {/* Left side – Image */}
                  {/* <div className="md:w-[46%] lg:py-0 pb-8">
                    {activeStepImage ? (
                      <img
                        src={activeStepImage.source}
                        alt={activeStepImage.name}
                        className="w-[66%] mx-auto"
                        style={{ maxHeight: '80vh', objectFit: 'contain' }}
                      />
                    ) : (
                      <img
                        src="/careers/normal-state-image.png"
                        alt="step doesn't selected"
                        className="w-[86%] mt-[-80px]"
                        style={{ maxHeight: '80vh', objectFit: 'contain' }}
                      />
                    )}
                  </div> */}


                  {/* Right side – Accordion / mobile too*/}
                  <div className="">
                    <CustomAccordion onStepChange={handleStepChange} />

                  </div>

              </div>
            {/* </div> */}

            {/*/ faq */}
          

          
          
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
                  <div className="text-white lg:text-[56px] font-[GT-Super-Ds-Trial] leading-[94%]">
                    Your trusted<br/> source for digital<br/> insights
                  </div>
                  {/* <a
                    href="https://www.sagravia.com/"
                    className="inline-block border border-[#DAEBE8] text-[#DAEBE8] lg:text-[14px] font-[600] leading-normal mt-4 px-4 py-2 rounded-full hover:text-black hover:bg-[#DAEBE8]"
                  >
                    Visit Website
                  </a> */}
                  <a
                href="https://www.sagravia.com/"
                className="relative inline-block border border-[#DAEBE8] text-[#DAEBE8] lg:text-[14px] font-[600] leading-normal mt-4 px-4 py-2 rounded-full overflow-hidden group"
              >
                <span className="absolute inset-0 bg-[#DAEBE8] rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 ease-out origin-center z-0"></span>
                <span className="relative z-10 group-hover:text-[#01261E] transition-colors duration-300">Visit Sagravia</span>
              </a>

                </div>
              </div>
            </div>

          {/* Mobile view with fallback image */}
        <div className="block lg:hidden relative py-10">
          <div className="relative h-[470px] w-full">
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
            <div className="absolute top-[4%] left-4 space-y-10 max-w-[80%]">
              <div className="text-white text-[39px] leading-[84%] font-[400] font-[GT-Super-Ds-Trial]">
                Your trusted<br /> source for digital<br /> insights
              </div>
              <a
                href=""
                className="inline-block border border-[#FAFAFA] text-[#FAFAFA] text-[15px] mt-4 px-5 py-2 rounded-[57px] leading-normal"
              >
                About Us
              </a>
            </div>
          </div>
        </div>

      

          {/* What we offer desktop*/}
           <div className="hidden lg:block md:px-28 md:pb-10 md:pt-16">
              <div className="md:flex h-full gap-10">
                {/* Left: Sticky Section */}
                <div className="w-[40%] sticky top-28 h-fit">
                  <div className="text-[#000]">
                    <span className="text-[16px] font-[400] leading-normal ">
                      Become a colleague
                    </span>
                    <h2 className="text-[56px] font-[400] leading-normal font-[GT-Super-Ds-Trial]">
                      What we offer
                    </h2>
                  </div>
                </div>

                {/* Right: Scroll Sections */}
                <div className="w-[60%] space-y-24">
                  <div
                  ref={(el) => (sectionRefs.current[0] = el)}
                    // className="scroll-mt-24"
                   className="flex justify-end space-x-6 scroll-mt-28">
                    {/* col-1 */}
                    <section
                    // ref={(el) => (sectionRefs.current[0] = el)}
                    // className="scroll-mt-24"
                  >
                    <div className="flex gap-6  mt-20">
                      <div className="flex flex-col gap-6">
                        {whatWeOfferCol1.map((item) => (
                          <div
                            key={item.id}
                            className="border p-5 max-w-[280px] bg-[#B6B6B633]"
                          >
                            <img
                              src={item.logo}
                              alt={item.heading}
                              className="w-14 h-14 mb-3"
                            />
                            <h3 className="text-[#000] text-[20px] font-[400] mb-4 leading-[128%]">{item.heading}</h3>
                            <p className="text-[#000] text-[16px] font-[400] pb-2 leading-[149%]">{item.content}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </section>

                {/* col-2 */}
                  <section
                    // ref={(el) => (sectionRefs.current[1] = el)}
                    // className="scroll-mt-24"
                  >
                    <div className="flex gap-6">
                      <div className="flex flex-col gap-6">
                        {whatWeOfferCol2.map((item) => (
                          <div
                            key={item.id}
                            className="border p-5 max-w-[280px] bg-[#B6B6B633]"
                          >
                            <img
                              src={item.logo}
                              alt={item.heading}
                              className="w-14 h-14 mb-3"
                            />
                            <h3 className="text-[#000] text-[20px] font-[400] mb-4 leading-[128%]">{item.heading}</h3>
                            <p className="text-[#000] text-[16px] font-[400] pb-2 leading-[149%]">{item.content}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </section>
                  </div>
                </div>
              </div>
            </div>

            {/* What we offer mobile*/}
           <div className="block lg:hidden px-4 pb-10 pt-10 block md:hidden">
            {/* Top Section: Heading */}
            <div className="mb-10 text-[#000]">
              <span className="text-[16px] font-[400] leading-normal">
                Become a colleague
              </span>
              <h2 className="text-[34px] font-[400] leading-normal font-[GT-Super-Ds-Trial]">
                What we offer
              </h2>
            </div>

              {/* Cards Section: Column 1 */}
              <div className="space-y-6 mb-10">
                {whatWeOfferCol1.map((item) => (
                  <div
                    key={item.id}
                    className="border p-6 bg-[#B6B6B633]"
                  >
                    <img
                      src={item.logo}
                      alt={item.heading}
                      className="w-16 h-16 mb-3"
                    />
                    <h3 className="text-[#000] text-[20px] font-[400] mb-4 leading-[128%]">{item.heading}</h3>
                    <p className="text-[#000] text-[16px] font-[400] pb-2 leading-[149%]">{item.content}</p>
                  </div>
                ))}
              </div>

              {/* Cards Section: Column 2 */}
              <div className="space-y-6">
                {whatWeOfferCol2.map((item) => (
                  <div
                    key={item.id}
                    className="border p-6 bg-[#B6B6B633]"
                  >
                    <img
                      src={item.logo}
                      alt={item.heading}
                      className="w-16 h-16 mb-3"
                    />
                    <h3 className="text-[#000] text-[20px] font-[400] mb-4 leading-[128%]">{item.heading}</h3>
                    <p className="text-[#000] text-[16px] font-[400] pb-2 leading-[149%]">{item.content}</p>
                  </div>
                ))}
              </div>
            </div>


          {/* What our people have to say*/}
        <div className="md:px-28 px-4  py-10 md:pt-12 md:pb-14">
            <div className="border-b border-black">
              <div className="text-[30px] lg:text-[56px] lg:w-full leading-normal lg:font-[400] text-[#01261E] font-[GT-Super-Ds-Trial] ">What our people have to say</div>
            </div>

              <div className="flex justify-between pb-6 pt-8">
                {/* Left Side (Small Images & Content) */}
                <div className="lg:w-[60%]">
                  {/* Small Images */}
                  <div className="flex flex-row space-x-4 md:py-8 py-4">
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
                          className="hidden lg:block w-8 h-8"
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
                    <p className="text-black text-[17px] lg:text-[24px] leading-[130%] font-[400] mb-10 lg:w-[70%]">{selectedImage.text}</p>
                    <p className="text-[17px] lg:text-[24px] leading-[130%] font-[400]">{selectedImage.name}</p>
                    <p className="text-[11px] lg:text-[15px] leading-[130%] font-[300]">{selectedImage.role}</p>
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

        {/* contact our team */}

        <div className="flex flex-col items-center justify-center text-center lg:pt-10 lg:pb-32 pb-16">
              <h2 className="text-[34px] lg:text-[56px] font-[400]" style={{ fontFamily: "GT Super Ds Trial" }}>
                Contact our team
              </h2>

              <div className="lg:w-[30%] mx-auto px-8">
                <p className="text-[12px] font-[400] leading-[150%] tracking-[0.36px] text-center">
                  If you're looking to grow in a dynamic environment and contribute to something greater, we invite you to explore our open positions and become a part of our journey.
                </p>
              </div>

              {/* Moving Text desktop*/}
           
                <a href="/contact" className="hidden lg:block lg:w-[806px] border border-[#01261E] rounded-full overflow-hidden relative group mt-10 hover:bg-[#01261E] hover:text-[#ffffff] text-[#01261E]">
                <span className="flex py-[31px] justify-end items-center  text-[100px] font-[800] whitespace-nowrap transition-transform duration-500 ease-in-out animate-scroll group-hover:pause group ">
                  SPEAKTOSALES SPEAKTOSALES SPEAKTOSALES SPEAKTOSALES SPEAKTOSALES SPEAKTOSALES SPEAKTOSALES SPEAKTOSALES SPEAKTOSALES SPEAKTOSALES SPEAKTOSALES SPEAKTOSALES SPEAKTOSALES SPEAKTOSALES 
                </span>
              </a>
            


{/* Moving Text mobile*/}
             
                <a href="#" className=" block lg:hidden w-full max-w-[269px] border border-[#01261E] rounded-full overflow-hidden relative group mt-10 hover:bg-[#01261E] hover:text-[#ffffff] text-[#01261E] font-[800]">
                <span className="flex py-2 justify-end items-center text-[37px] whitespace-nowrap transition-transform duration-500 ease-in-out animate-scroll-mobile group-hover:pause group ">
                  SPEAKTOSALES SPEAKTOSALES SPEAKTOSALES SPEAKTOSALES SPEAKTOSALES SPEAKTOSALES SPEAKTOSALES SPEAKTOSALES SPEAKTOSALES SPEAKTOSALES SPEAKTOSALES SPEAKTOSALES SPEAKTOSALES SPEAKTOSALES 
                </span>
              </a>
              </div>
         
      

    </>
  );
};

export default Careers;