"use client";
import { useState } from "react";

export default function ViewAll() {
    const [selectedIndex, setSelectedIndex] = useState(null);

    const images = [
        { 
            name: "PS", 
            image: "/socialimgs/s-ps.png", 
            bn: "Presidentials",
            title: "Plant Compounds & Mushrooms",
            heading: "Acerola Cherries",
            content: "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        },
        { name: "GS", image: "/socialimgs/s-gp.png", bn: "Geopoliticals", title: "Geopolitical Insights", heading: "Global Trends", content: "Understanding the impact of geopolitics on markets is crucial. Our analysis helps identify risks and opportunities." },
        { name: "LS", image: "/socialimgs/s-ls.png", bn: "Long & Short", title: "Investment Strategies", heading: "Market Positioning", content: "Learn how to effectively navigate long and short investment strategies in volatile markets." },
        { name: "BH", image: "/socialimgs/s-bh.png", bn: "Business History", title: "Corporate Evolution", heading: "Historic Business Moves", content: "Explore how the biggest companies made critical decisions that shaped their industries." },
        { 
            name: "PS", 
            image: "/socialimgs/s-ps.png", 
            bn: "Presidentials",
            title: "Plant Compounds & Mushrooms",
            heading: "Acerola Cherries",
            content: "Acerola is full of great nutrients. It is one of the richest natural sources of vitamin C...Acerola is full of great nutrients. It is one of the richest natural sources of vitamin C...Acerola is full of great nutrients. It is one of the richest natural sources of vitamin C...Acerola is full of great nutrients. It is one of the richest natural sources of vitamin C...Acerola is full of great nutrients. It is one of the richest natural sources of vitamin C..."
        },
        { name: "GS", image: "/socialimgs/s-gp.png", bn: "Geopoliticals", title: "Geopolitical Insights", heading: "Global Trends", content: "Understanding the impact of geopolitics on markets is crucial. Our analysis helps identify risks and opportunities." },
        { name: "LS", image: "/socialimgs/s-ls.png", bn: "Long & Short", title: "Investment Strategies", heading: "Market Positioning", content: "Learn how to effectively navigate long and short investment strategies in volatile markets." },
        { name: "BH", image: "/socialimgs/s-bh.png", bn: "Business History", title: "Corporate Evolution", heading: "Historic Business Moves", content: "Explore how the biggest companies made critical decisions that shaped their industries." },
    ];

    const handleImageClick = (index) => {
        setSelectedIndex(index);
        document.body.style.overflow = 'hidden'; // Prevent background scroll
    };

    const closeSidebar = () => {
        setSelectedIndex(null);
        document.body.style.overflow = 'auto'; // Restore scroll
    };

    const handleNext = () => {
        if (selectedIndex < images.length - 1) {
            setSelectedIndex(selectedIndex + 1);
        }
    };

    const handlePrev = () => {
        if (selectedIndex > 0) {
            setSelectedIndex(selectedIndex - 1);
        }
    };

    const selectedData = selectedIndex !== null ? images[selectedIndex] : null;

    return (
        <div className="text-white py-20 lg:py-10 mx-auto relative">
            <h2 className="text-black text-4xl w-[80%]">
                We don’t think you should settle for questionable ingredients when it comes to your daily supplement. 
                That's why each ingredient in AG1 is sourced for optimal absorption and nutrient density, and combined for maximum potency.
            </h2>
            <button className="py-3 px-8 mt-10 border bg-[#0C3D3D] text-white text-center rounded-full hover:bg-[#46DE46] hover:text-black">
                Check &rarr;
            </button>

            {/* Image Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-6 py-16">
                {images.map((social, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <button onClick={() => handleImageClick(index)}>
                            <img
                                src={social.image}
                                alt={social.name}
                                className="object-cover rounded-md w-full h-full"
                            />
                        </button>
                        <div className="mt-4 w-full text-left">
                            <h2 className="text-lg font-semibold text-black">{social.bn}</h2>
                        </div>
                    </div>
                ))}
            </div>

            {/* Sliding Panel (Sidebar) */}
            {selectedData && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-50 flex justify-end"
                    onClick={closeSidebar}
                >
                    <div 
                        className="md:w-1/2 w-full mt-14 h-screen lg:mt-20 bg-white shadow-lg transform transition-transform duration-300 relative flex flex-col"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Fixed Header */}
                        <div className="fixed top-0 left-0 w-full bg-white px-4 py-6 flex justify-between items-center z-10">
                        <h3 className="text-2xl font-semibold text-black ">{selectedData.title}</h3>
                            
                            <button
                                onClick={closeSidebar}
                                className="w-12 h-12 text-2xl  text-black flex items-center justify-center hover:bg-[#46DE46] rounded-lg"
                            >
                                ✕
                            </button>
                        </div>

                        {/* Scrollable Content */}
                        <div className="flex-1 overflow-y-auto px-6 md:px-10 pt-20 pb-60">
                        
                            <img src={selectedData.image} alt="Selected" className="w-full h-[492] object-cover mb-4 mt-4 rounded-lg" />
                            <h4 className="text-4xl  text-black">{selectedData.heading}</h4>
                            <p className="text-gray-700 text-lg mt-2">{selectedData.content}</p>
                        </div>

                        {/* Fixed Footer with Navigation */}
                        <div className="fixed bottom-10 lg:bottom-20 left-0 w-full h-24 bg-white flex justify-between items-center px-6 py-4 shadow-md">

                            <div className="flex space-x-4">
                                <button
                                    onClick={handlePrev}
                                    disabled={selectedIndex === 0}
                                    className={`w-12 h-12 text-3xl text-[#0C3D3D] rounded-lg flex items-center justify-center ${
                                        selectedIndex === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-[#46DE46]"
                                    }`}
                                >
                                    ←
                                </button>
                                <button
                                    onClick={handleNext}
                                    disabled={selectedIndex === images.length - 1}
                                    className={`w-12 h-12 text-3xl text-[#0C3D3D] rounded-lg flex items-center justify-center ${
                                        selectedIndex === images.length - 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-[#46DE46]"
                                    }`}
                                >
                                    →
                                </button>
                            </div>
                            <span className="text-lg  text-gray-600">
                                {selectedIndex + 1} of {images.length}
                            </span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
