"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronUp, ChevronDown } from "lucide-react";

export default function ViewAll() {
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [activeSection, setActiveSection] = useState(null);
    const [isMobile,setIsMobile] = useState(null);

    const toggleSection = (section) => {
        setActiveSection(activeSection === section ? null : section);
    };

    const images = [
        { name: "Design", title: "Graphic Designer", experience: "Senior", content: "Creating intuitive and engaging user experiences", button: "Apply", theme: "#E19F20" },
        { name: "UX/UI", title: "UX Designer", experience: "Mid-Level", content: "Creating intuitive and engaging user experiences...", button: "Apply", theme: "#582719" },
        { name: "Web Dev", title: "Full-Stack Developer", experience: "Junior", content: "Building responsive and dynamic web applications...", button: "Apply", theme: "#092236" },
        { name: "Design", title: "Graphic Designer", experience: "Senior", content: "Simply dummy text of the printing and typesetting industry...", button: "Apply", theme: "#1A1A1A" },
        { name: "UX/UI", title: "UX Designer", experience: "Mid-Level", content: "Creating intuitive and engaging user experiences", button: "Apply", theme: "#394E65" },
        { name: "Web Dev", title: "Backend Developer", experience: "Junior", content: "Building responsive and dynamic web applications...", button: "Apply", theme: "#657C75" },
        { name: "Software Engineer", title: "Programmer", experience: "Junior", content: "Building responsive and dynamic web applications...", button: "Apply", theme: "#01261E" }
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
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 2xl:grid-cols-6 lg:gap-4 space-x-1 gap-4 ">
                {images.map((item, index) => (
                    <motion.div
                        key={index}
                        className="group relative w-3xs h-[230px] lg:h-[316px] xl:h-[316px] text-white lg:p-4 rounded-lg overflow-hidden flex flex-col justify-between shadow-lg"
                        //  className="relative w-full sm:w-[225px] lg:w-[225px] h-[280px] md:h-[306px] lg:h-[316px] text-white p-4 rounded-lg overflow-hidden flex flex-col justify-between shadow-lg transition-all duration-400"
                        style={{ backgroundColor: item.theme }}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <h2 className="text-sm lg:px-3 px-2 mt-2">{item.name}</h2>
                         {/* Mobile Content */}
                        <div className="block lg:hidden px-2 flex-grow min-h-[160px] max-h-[230px]">
                            <div className="mt-3">
                            <h3 className="text-sm font-semibold">{item.title}</h3>
                            <p className="text-xs text-gray-300">{item.experience}</p>
                            </div>
                            
                            <div className="mt-16">
                            <p className="font-medium text-[9px]">{item.content}</p>
                            <div className="py-4">
                            <button
                                onClick={() => handleImageClick(index)}
                                className="text-sm relative w-full bg-white/25 text-white py-1 rounded-lg"
                            >
                                {item.button}
                            </button>
                            </div>
                            </div>
                        </div>
                        <motion.div
                            className="group relative hidden lg:block left-1/2 -translate-x-1/2 w-full "
                            
                            
                        >
                            <div className="group-hover:hidden hidden lg:block pb-2">
                                <h3 className="text-lg font-semibold px-3">{item.title}</h3>
                                <p className="text-sm text-gray-300 px-3">{item.experience}</p>
                            </div>
                            {hoveredIndex === index && (
                                <motion.div 
                                    className="mt-4 text-sm text-white"
                                    initial={{ opacity: 1, y: 100 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    transition={{ duration: 0.4, ease: "easeOut" }}
                                >
                                    <h3 className="text-lg font-semibold px-3">{item.title}</h3>
                                <p className="text-sm text-gray-300 px-3">{item.experience}</p>
                                    <p className="px-3">{item.content}</p>
                                    <div className="px-3">
                                        <button
                                            onClick={() => handleImageClick(index)}
                                            className="relative w-full bg-white/25 text-white py-2 mt-4 rounded-lg"
                                        >
                                            {item.button}
                                        </button>
                                    </div>
                                </motion.div>
                            )}
                        </motion.div>
                    </motion.div>
                ))}
            </div>

            {selectedIndex !== null && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end items-center z-50 px-4" onClick={closeSidebar}>
                    <div className="w-full md:w-[26%] h-screen bg-white shadow-lg transition-transform duration-300 relative flex flex-col" onClick={(e) => e.stopPropagation()}>
                        <div className="w-full bg-white px-4 py-4 flex justify-between items-center z-10">
                            <h3 className="text-lg md:text-2xl font-semibold text-black">{images[selectedIndex].title}</h3>
                            <button onClick={closeSidebar} className="w-10 h-10 text-xl text-black flex items-center justify-center hover:bg-gray-200 rounded-lg">✕</button>
                        </div>

                        <div className="flex-1 overflow-y-auto px-4 pt-0 pb-20">
                            <p className="text-lg text-black">{images[selectedIndex].name}</p>
                            <h4 className="text-xl font-semibold text-black">Marketing Automation Engineer</h4>
                            <p className="text-sm text-gray-700 mt-2">{images[selectedIndex].content}</p>
                            <p className="text-sm text-gray-700 mt-2">$50,000 - $70,000</p>
                            <p className="text-sm text-black py-2">Design an email nurturing campaign that targets leads who have shown interest in your product/service but have not yet made a purchase. The campaign should use a Marketing Automation Platform (like HubSpot, Marketo, or Pardot) and include the following:</p>
                            <p className="text-sm text-black py-2">Design an email nurturing campaign that targets leads who have shown interest in your product/service but have not yet made a purchase.</p>

                            <div className="flex justify-center space-x-4 text-sm text-black pt-4">
                                <button onClick={() => toggleSection("assignment")} className="flex items-center space-x-2 px-4 py-2  rounded-lg  transition ">
                                    <span>Assignment</span>{activeSection === "assignment" ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                                </button>
                                <button onClick={() => toggleSection("job")} className="flex items-center space-x-2 px-4 py-2 rounded-lg  transition">
                                    <span>Job Description</span>{activeSection === "job" ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                                </button>
                            </div>

                            {activeSection === "assignment" && (
                                <motion.div className="py-2 " initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}>
                                    <div className="text-black">
                                    <h4 className="text-xl font-semibold ">Create an Automated Email Nurturing Campaign</h4>
                                    <p className="text-sm py-2">Design an email nurturing campaign that targets leads who have shown interest in your product/service but have not yet made a purchase. The campaign should use a Marketing Automation Platform (like HubSpot, Marketo, or Pardot) and include the following:</p>
                                    <p className="text-sm py-2">Design an email nurturing campaign that targets leads who have shown interest in your product/service but have not yet made a purchase. The campaign should use a Marketing Automation Platform (like HubSpot, Marketo, or Pardot) and include the following:</p>
                                    <p className="text-sm py-2">Design an email nurturing campaign that targets leads who have shown interest in your product/service but have not yet made a purchase. The campaign should use a Marketing Automation Platform (like HubSpot, Marketo, or Pardot) and include the following:</p>
                                    <p className="text-sm py-2">Design an email nurturing campaign that targets leads who have shown interest in your product/service but have not yet made a purchase. The campaign should use a Marketing Automation Platform (like HubSpot, Marketo, or Pardot) and include the following:</p>
                                    </div>
                                    <div className="text-black py-4">
                                        <a className="text-xl font-bold py-2 cursor-pointer hover:underline">job@sagravia.com</a>
                                    </div>
                                </motion.div>
                            )}

                            {activeSection === "job" && (
                                <motion.div className="py-2 " initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}>
                                    <div className="text-black">
                                    <h4 className="text-xl font-semibold ">Automated Email Nurturing Campaign</h4>
                                    <p className="text-sm py-2">Design an email nurturing campaign that targets leads who have shown interest in your product/service but have not yet made a purchase. The campaign should use a Marketing Automation Platform (like HubSpot, Marketo, or Pardot) and include the following:</p>
                                    <p className="text-sm py-2">Design an email nurturing campaign that targets leads who have shown interest in your product/service but have not yet made a purchase. The campaign should use a Marketing Automation Platform (like HubSpot, Marketo, or Pardot) and include the following:</p>
                                    <p className="text-sm py-2">Design an email nurturing campaign that targets leads who have shown interest in your product/service but have not yet made a purchase. The campaign should use a Marketing Automation Platform (like HubSpot, Marketo, or Pardot) and include the following:</p>
                                    <p className="text-sm py-2">Design an email nurturing campaign that targets leads who have shown interest in your product/service but have not yet made a purchase. The campaign should use a Marketing Automation Platform (like HubSpot, Marketo, or Pardot) and include the following:</p>
                                    </div>
                                    <div className="text-black py-4">
                                        <a className="text-xl font-bold py-2 cursor-pointer hover:underline">job@sagravia.com</a>
                                    </div>
                                </motion.div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>

        
        </>
    );
}