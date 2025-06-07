"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronUp, ChevronDown, Link } from "lucide-react";

export default function ViewAll() {
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [activeSection, setActiveSection] = useState(null);
    const [isMobile,setIsMobile] = useState(null);

    const toggleSection = (section) => {
        setActiveSection(activeSection === section ? 1 : section);
    };

    const images = [
        { popupSalary:"$50,000 - $70,000",popupVenue: "remote",popupContent1:"Design an email nurturing campaign that targets leads who have shown interest in your product/service but have not yet made a purchase. The campaign should use a Marketing Automation Platform (like HubSpot, Marketo, or Pardot) and include the following:",popupContent2:"Design an email nurturing campaign that targets leads who have shown interest in your product/service but have not yet made a purchase.",name: "Design", title: "Graphic Designer", experience: "Senior", content: "Creating intuitive and engaging user experiences", button: "Apply", theme: "#E19F20",slug:"graphic-designer" },
        { popupSalary:"$40,000 - $80,000",popupVenue: "remote",popupContent1:"Design an email nurturing campaign that targets leads who have shown interest in your product/service but have not yet made a purchase. The campaign should use a Marketing Automation Platform (like HubSpot, Marketo, or Pardot) and include the following:",name: "UX/UI", title: "UX Designer", experience: "Mid-Level", content: "Creating intuitive and engaging user experiences...", button: "Apply", theme: "#582719",slug:"ux-designer" },
        { popupSalary:"$40,000 - $70,000",popupVenue: "remote",popupContent1:"Design an email nurturing campaign that targets leads who have shown interest in your product/service but have not yet made a purchase. The campaign should use a Marketing Automation Platform (like HubSpot, Marketo, or Pardot) and include the following:",popupContent2:"Design an email nurturing campaign that targets leads who have shown interest in your product/service but have not yet made a purchase.",name: "Web Dev", title: "Full-Stack Developer", experience: "Junior", content: "Building responsive and dynamic web applications...", button: "Apply", theme: "#092236",slug:"full-stack" },
        { popupSalary:"$50,000 - $80,000",popupVenue: "remote",popupContent1:"Design an email nurturing campaign that targets leads who have shown interest in your product/service but have not yet made a purchase. The campaign should use a Marketing Automation Platform (like HubSpot, Marketo, or Pardot) and include the following:",popupContent2:"Design an email nurturing campaign that targets leads who have shown interest in your product/service but have not yet made a purchase.",name: "Design", title: "logo Designer", experience: "Senior", content: "Simply dummy text of the printing and typesetting industry...", button: "Apply", theme: "#1A1A1A",slug:"logo-designer" },
        { popupSalary:"$40,000 - $70,000",popupVenue: "remote",popupContent1:"Design an email nurturing campaign that targets leads who have shown interest in your product/service but have not yet made a purchase. The campaign should use a Marketing Automation Platform (like HubSpot, Marketo, or Pardot) and include the following:",popupContent2:"Design an email nurturing campaign that targets leads who have shown interest in your product/service but have not yet made a purchase.",name: "UX/UI", title: "web Designer", experience: "Mid-Level", content: "Creating intuitive and engaging user experiences", button: "Apply", theme: "#394E65",slug:"web-designer" },
        { popupSalary:"$30,000 - $60,000",popupVenue: "remote",popupContent1:"Design an email nurturing campaign that targets leads who have shown interest in your product/service but have not yet made a purchase. The campaign should use a Marketing Automation Platform (like HubSpot, Marketo, or Pardot) and include the following:",popupContent2:"Design an email nurturing campaign that targets leads who have shown interest in your product/service but have not yet made a purchase.",name: "Web Dev", title: "Backend Developer", experience: "Junior", content: "Building responsive and dynamic web applications...", button: "Apply", theme: "#657C75",slug:"backend-dev" },
        { popupSalary:"$50,000 - $80,000",popupVenue: "remote",popupContent1:"Design an email nurturing campaign that targets leads who have shown interest in your product/service but have not yet made a purchase. The campaign should use a Marketing Automation Platform (like HubSpot, Marketo, or Pardot) and include the following:",popupContent2:"Design an email nurturing campaign that targets leads who have shown interest in your product/service but have not yet made a purchase.",name: "Software Engineer", title: "Programmer", experience: "Junior", content: "Building responsive and dynamic web applications...", button: "Apply", theme: "#01261E",slug:"software-engineer" }
    ];

    const handleImageClick = (index) => {
        setSelectedIndex(index);
        document.body.style.overflow = 'hidden';
    };

    const closeSidebar = () => {
        setSelectedIndex(null);
        document.body.style.overflow = 'auto';
    };

    return (
        <>
        <div className="text-white py-10 lg:py-8 mx-auto relative">
            <div className="grid grid-cols-2 sm:grid-cols-2 xl:grid-cols-5 gap-x-4 gap-y-4">
  {images.map((item, index) => (
    <div
      key={index}
      className="group relative w-full h-[230px] lg:h-[316px] text-white p-3 lg:p-4 rounded-lg overflow-hidden flex flex-col justify-between shadow-lg cursor-pointer"
      style={{ backgroundColor: item.theme }}
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <h2 className="text-[14px] mt-2">{item.name}</h2>

      {/* Mobile Content */}
      <div className="block lg:hidden flex-grow min-h-[160px] max-h-[230px]">
        <div className="mt-3">
          <h3 className="text-sm font-semibold">{item.title}</h3>
          <p className="text-xs text-gray-300">{item.experience}</p>
        </div>
        <div className="mt-16">
          <p className="font-medium text-[9px]">{item.content}</p>
          <div className="py-4">
            <button
              onClick={() => handleImageClick(index)}
              className="text-sm w-full bg-white/25 text-white py-1 rounded-lg"
            >
              {item.button}
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Hover Content */}
      <motion.div
        className="relative hidden lg:block w-full"
        layout
      >
        <motion.div layout className="pb-2">
          <h3 className="text-[17px] font-[700] leading-[101%] py-2">{item.title}</h3>
          <p className="text-[14px] text-[#FFFFFF99] leading-[101%]">{item.experience}</p>
        </motion.div>

        <AnimatePresence initial={false}>
          {hoveredIndex === index && (
            <motion.div
              key="hoverContent"
              className="overflow-hidden text-sm text-white"
              initial={{ opacity: 1, height: 0, y: -10 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 1, height: 0, y: -10 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              layout
            >
              <p className="text-[#FAFAFA] text-[12px] font-[500] leading-normal">{item.content}</p>
              <div className="pt-4">
                <button
                  onClick={() => handleImageClick(index)}
                  className="w-full bg-white/25 text-white py-2 rounded-lg"
                >
                  {item.button}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  ))}
</div>


            {selectedIndex !== null && (
                <div className="fixed inset-0 bg-[#121212CC] flex justify-end items-center z-50 px-4 " onClick={closeSidebar}>
                    <div className="w-full md:w-[27%] h-fit bg-[#DAEBE8] shadow-lg transition-transform duration-300 relative flex flex-col mr-4 mt-8 rounded-[10px]" onClick={(e) => e.stopPropagation()}>
                        

                        <div className="flex-1 overflow-y-auto pb-6 px-6 pt-4">
                            <div className="flex justify-end items-center">
                              <button onClick={closeSidebar} className="w-7 h-7 text-xl text-black flex items-center justify-center rounded-lg ">✕</button>
                            </div>
                            <p className="text-[16px] font-[300] leading-[108%] tracking-[0.32px] uppercase text-[#000]">{images[selectedIndex].popupVenue}</p>
                            <h4 className="text-[22px] font-[500] leading-[108%] tracking-[0.88px] text-[#020715] py-2">{images[selectedIndex].title}</h4>
                            {/* <p className="text-sm text-gray-700 mt-2">{images[selectedIndex].content}</p> */}
                            <p className="text-[16px] text-[#000] font-[300] leading-[108%] tracking-[0.64px] ">{images[selectedIndex].popupSalary}</p>
                            <p className="text-[#000] text-[14px] font-[400] leading-[135%] pt-4 pb-4">{images[selectedIndex].popupContent1}<br/></p>
                            <p className="text-sm text-black">{images[selectedIndex].popupContent2}</p>

                            {/*dynamic path button button */}
                          
                              <div className="flex justify-end mt-4">
                                <a
                                  href={`/careers/${images[selectedIndex].slug}`}
                                  className="flex justify-center w-full px-14 py-2 bg-[#01261E] text-white text-[18px] font-[500] rounded-[6px] hover:bg-[#014134] transition"
                                >
                                  Assignment
                                </a>
                              </div>

                          
                            
                        </div>
                    </div>
                </div>
            )}
        </div>

        
        </>
    );
}