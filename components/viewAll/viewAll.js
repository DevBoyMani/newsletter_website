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
                We don’t think you should settle for questionable ingredients...
            </h2>
            <div className="space-x-6">
            <button className="py-3 px-8 mt-10 border bg-[#0C3D3D] text-white text-center rounded-full hover:bg-[#46DE46] hover:text-black">
                Check &rarr;
            </button>
            <button className="py-3 px-8 mt-10 border bg-[#0C3D3D] text-white text-center rounded-full hover:bg-[#46DE46] hover:text-black">
                Click &rarr;
            </button>
            </div>

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
                    className="fixed inset-0 bg-black bg-opacity-50 justify-end flex items-center z-50"
                    onClick={closeSidebar}
                >
                    <div 
                        className="w-full md:w-1/2  lg:mt-0 h-screen bg-white shadow-lg transform transition-transform duration-300 relative flex flex-col"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Fixed Header */}
                        <div className="fixed top-0 left-0 w-full bg-white px-4 py-4 md:py-6 flex justify-between items-center z-10">
                            <h3 className="text-lg md:text-2xl font-semibold text-black">{selectedData.title}</h3>
                            <button
                                onClick={closeSidebar}
                                className="w-10 h-10 md:w-12 md:h-12 text-xl md:text-2xl text-black flex items-center justify-center hover:bg-[#46DE46] rounded-lg"
                            >
                                ✕
                            </button>
                        </div>

                        {/* Scrollable Content */}
                        <div className="flex-1 overflow-y-auto px-4 md:px-10 pt-16 md:pt-20 pb-[calc(7rem+40px)]">
                            <img src={selectedData.image} alt="Selected" className="w-full h-auto max-h-[400px] md:max-h-[492px] object-cover mb-4 mt-4 rounded-lg" />
                            <h4 className="text-xl md:text-4xl text-black">{selectedData.heading}</h4>
                            <p className="text-sm md:text-lg text-gray-700 mt-2">{selectedData.content}</p>
                        </div>

                        {/* Fixed Footer with Navigation */}
                        <div className="fixed bottom-0 md:bottom-0 lg:bottom-0 left-0 w-full h-20 md:h-20 bg-white flex justify-between items-center px-4 md:px-6 py-2 md:py-4 shadow-md">
                            <div className="flex space-x-4">
                                <button
                                    onClick={handlePrev}
                                    disabled={selectedIndex === 0}
                                    className={`w-10 h-10 md:w-12 md:h-12 text-2xl md:text-3xl text-[#0C3D3D] rounded-lg flex items-center justify-center ${
                                        selectedIndex === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-[#46DE46]"
                                    }`}
                                >
                                    ←
                                </button>
                                <button
                                    onClick={handleNext}
                                    disabled={selectedIndex === images.length - 1}
                                    className={`w-10 h-10 md:w-12 md:h-12 text-2xl md:text-3xl text-[#0C3D3D] rounded-lg flex items-center justify-center ${
                                        selectedIndex === images.length - 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-[#46DE46]"
                                    }`}
                                >
                                    →
                                </button>
                            </div>
                            <span className="text-sm md:text-lg text-gray-600">
                                {selectedIndex + 1} of {images.length}
                            </span>
                        </div>
                    </div>
                </div>
            )}
           {/* view all section image */}
           {/* <div className="bg-white text-black px-4 pb-20 pt-20 mx-auto">
            <div className="flex flex-col lg:flex-row ">
                <div className="">
                <h3 className="text-xl ">RESEARCH TIMELINE</h3>
                <h3 className="text-[44px] mt-4">Setting a new standard in research</h3>
                <p className="text-lg">Our in-house team of doctors, scientists, and researchers worked with third-party experts to conduct a set of scientific studies and further validate the benefits of AG1. We followed a universally acknowledged hierarchy of scientific rigor, looking beyond ingredient data to test our complete formula and validate the synergy of how ingredients work together.</p>
                </div>

            <div className="lg:w-1/2">
                <img
                src="/view-all-s-1-img.jpg"
                alt="view all section analytics image"
                className="object-cover rounded-md w-full h-full"
                />
            </div>
            </div>
           </div> */}
           <div className="bg-white text-black px-0 pb-20 pt-20 mx-auto">
            <div className="flex flex-col-reverse lg:flex-row items-center gap-10">
                
                {/* Left Side - Text Content */}
                <div className="lg:w-1/2">
                <h3 className="text-xl lg:text-2xl">RESEARCH TIMELINE</h3>
                <h3 className="text-3xl lg:text-[44px] mt-4 leading-tight">
                    Setting a new standard in research
                </h3>
                <p className="text-lg mt-4 text-gray-700">
                    Our in-house team of doctors, scientists, and researchers worked with third-party experts 
                    to conduct a set of scientific studies and further validate the benefits of AG1. 
                    We followed a universally acknowledged hierarchy of scientific rigor, looking beyond ingredient data 
                    to test our complete formula and validate the synergy of how ingredients work together.
                </p>
                </div>

                {/* Right Side - Image */}
                <div className="lg:w-1/2 w-full">
                <img
                    src="/view-all-s-1-img.jpg"
                    alt="view all section analytics image"
                    className="object-cover rounded-md w-full max-h-[400px] lg:max-h-[500px]"
                />
                </div>

            </div>
            </div>


            <div className="bg-[#F6F5F1] text-white px-4 pb-20 pt-20 lg:py-20 lg:px-16 mx-auto">
                <h3 className="text-black text-2xl text-center">And that's not all.</h3>
                <div className="flex justify-center mt-2">
                    <button className="py-3 px-8 bg-[#0C3D3D] mt-4 sm:text-xl text-white text-center rounded-full hover:bg-[#46DE46] hover:text-black">
                        Speak to sales &rarr;
                    </button>
                </div>
            </div>
            <div className="bg-white text-black px-4 pb-20 pt-20 mx-auto">
    <div className="flex flex-col md:flex-row justify-start space-y-10 md:space-y-0 md:space-x-36">
        <div>
            <h3 className="text-xl py-4 uppercase">Free of</h3>
            <ul className="list-disc pl-5 text-2xl md:text-4xl">
                <li>Artificial sweeteners, flavours,<br/> colourings or preservatives</li>
                <li>Gluten</li>
                <li>Dairy or Lactose</li>
                <li>Egg or Peanuts</li>
            </ul>   
        </div>
        <div >
            <h3 className="text-xl py-4  uppercase">Diet-Friendly</h3>
            <ul className="list-disc pl-5 text-2xl md:text-4xl">
                <li>Vegetarian</li>
                <li>Vegan</li>
                <li>Paleo</li>
                <li>Keto</li>
                <li>Low-carb</li>
                <li>Halal</li>
            </ul>
        </div>
    </div>
</div>

    </div>
    );
}
