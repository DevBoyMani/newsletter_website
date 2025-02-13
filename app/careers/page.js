"use client";
import { useState,useEffect } from "react";
export default function Features() {
    const listNames = [
        { name: "Healthy ageing" },
        { name: "Immune defence" },
        { name: "Digestion" },
        { name: "Focus, energy and mood" },
        { name: "High quality standards" },
        { name: "Ingredients you can feel" },
        { name: "Simplicity" },
        { name: "Taste" },
        { name: "Science and research" }
    ];

    const images = [
        { name: "image1", src: "/features/features-1.jpg" },
        { name: "image2", src: "/features/features-2.jpg" },
        { name: "image3", src: "/features/features-3.jpg" }
    ];

    const sectionFir = [
        { content: "AG1 supports mental performance and focus with vitamins C, B6, B12, riboflavin, niacin, pantothenic acid, folate, and zinc." },
        { content: "With thiamine, AG1 supports a healthy heart." },
        { content: "AG1 supports healthy skin, hair, and nails with vitamin A, vitamin C, riboflavin, niacin, biotin, selenium, copper, and zinc." },
        { content: "AG1 helps protect your cells from oxidative stress with vitamins E and C, riboflavin, zinc, copper, manganese, and selenium." },
        { content: "AG1 supports mental performance and focus with vitamins C, B6, B12, riboflavin, niacin, pantothenic acid, folate, and zinc." }
    ];
    

    const sectionImage = { name: "first section image", src: "/features/sections/section1.jpg" };



    return (
        <>
            <div className="text-white px-4 md:px-16 py-10 md:py-20 mx-auto">
                <div className="max-w-4xl">
                    <h2 className="text-3xl md:text-5xl lg:text-6xl text-black text-start">
                        The benefits of taking AG1
                    </h2>
                    <p className="text-black text-lg md:text-xl py-4 md:py-6">
                        Discover the benefits of taking AG1 daily to support your health holistically.
                    </p>
                </div>
            </div>

            <section className="text-white px-4 md:px-16 py-10 md:pb-20 md:pt-14 mx-auto">
                <div className="flex flex-col md:flex-row">
                    {/*main Left Side */}
                    <div className="md:w-1/4 text-black md:pr-10 pr-4 sticky h-screen top-0 overflow-hide">
                        {listNames.map((listName, index) => (
                            <div key={index} className="py-4 px-4 border-b-2 text-lg md:text-xl">
                                {listName.name}
                            </div>
                        ))}
                    </div>

                    {/*main Right Side */}
                    <div className="md:w-3/4 text-black overflow-y-auto h-screen scrollbar-hide">
                        {/* Section 1 */}
                        <div className="pl-0 md:pl-8">
                            {/* Image Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                {images.map((FeatureImage, index) => (
                                    <div key={index} className="w-full">
                                        <img
                                            src={FeatureImage.src}
                                            alt={FeatureImage.name}
                                            className="object-cover rounded-md w-full h-[400px] md:h-[440px]"
                                        />
                                    </div>
                                ))}
                            </div>

                            {/* Description Text */}
                            <div>
                                <p className="text-black text-lg md:text-xl py-6 md:py-10 border-b">
                                    AG1 is here to help you feel strong, vital, and nourished. Filled with high-quality vitamins, minerals, and nutrients from whole food sources, you can feel confident that important areas of your health are being effectively supported. Every day.
                                </p>
                            </div>
                        </div>
                        {/* Section 2 */}
                        <div className="w-full px-8">
                            <div className="flex flex-col md:flex-row border-b md:py-10">
                                {/* Left Side - Text */}
                                <div className="md:w-1/2 text-black md:pr-10 pr-4">
                                    <h2 className="text-3xl md:text-3xl lg:text-4xl text-black text-start md:pb-4">
                                        Healthy Ageing
                                    </h2>
                                    <p className="text-black text-lg md:text-xl md:pb-6">
                                        AG1 lets you face the future with confidence by fueling your cells with nutrients they need to support a sharp mind, a healthy heart, and vibrant skin, hair, and nails.
                                    </p>
                                    <h3 className="text-sm md:text-lg lg:text-lg">WHAT TO EXPECT</h3>
                                    <ul className="lg:text-xl md:py-4 space-y-4">
                                        {sectionFir.map((item, index) => (
                                            <li key={index} className="flex text-lg md:text-xl">
                                                <div className="flex-shrink-0 w-4 h-[2px] mt-[14px] text-[#0C3D3D]">
                                                    <svg 
                                                        className="w-full h-full" 
                                                        fill="currentColor" 
                                                        viewBox="0 0 24 2" 
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <rect width="22" height="2" />
                                                    </svg>
                                                </div>
                                                <p className="ml-6 leading-tight">{item.content}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Right Side - Image */}
                                <div className="md:w-1/2">
                                    <img
                                        src={sectionImage.src}
                                        alt={sectionImage.name}
                                        className="object-cover rounded-md w-full h-full md:max-h-[800px]"
                                    />
                                </div>
                            </div>
                        </div>
                        {/* Section 3 */}
                        <div className="w-full px-8">
                            <div className="flex flex-col md:flex-row border-b md:py-10">
                                {/* Left Side - Text */}
                                <div className="md:w-1/2 text-black md:pr-10 pr-4">
                                    <h2 className="text-3xl md:text-3xl lg:text-4xl text-black text-start md:pb-4">
                                    Digestion
                                    </h2>
                                    <p className="text-black text-lg md:text-xl md:pb-6">
                                        AG1 lets you face the future with confidence by fueling your cells with nutrients they need to support a sharp mind, a healthy heart, and vibrant skin, hair, and nails.
                                    </p>
                                    <h3 className="text-sm md:text-lg lg:text-lg">WHAT TO EXPECT</h3>
                                    <ul className="lg:text-xl md:py-4 space-y-4">
                                        {sectionFir.map((item, index) => (
                                            <li key={index} className="flex text-lg md:text-xl">
                                                <div className="flex-shrink-0 w-4 h-[2px] mt-[14px] text-[#0C3D3D]">
                                                    <svg 
                                                        className="w-full h-full" 
                                                        fill="currentColor" 
                                                        viewBox="0 0 24 2" 
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <rect width="22" height="2" />
                                                    </svg>
                                                </div>
                                                <p className="ml-6 leading-tight">{item.content}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Right Side - Image */}
                                <div className="md:w-1/2">
                                    <img
                                        src={sectionImage.src}
                                        alt={sectionImage.name}
                                        className="object-cover rounded-md w-full h-full md:max-h-[800px]"
                                    />
                                </div>
                            </div>
                        </div>
                         {/* Section 4 */}
                         <div className="w-full px-8">
                            <div className="flex flex-col md:flex-row border-b md:py-10">
                                {/* Left Side - Text */}
                                <div className="md:w-1/2 text-black md:pr-10 pr-4">
                                    <h2 className="text-3xl md:text-3xl lg:text-4xl text-black text-start md:pb-4">
                                    Focus, energy and mood
                                    </h2>
                                    <p className="text-black text-lg md:text-xl md:pb-6">
                                        AG1 lets you face the future with confidence by fueling your cells with nutrients they need to support a sharp mind, a healthy heart, and vibrant skin, hair, and nails.
                                    </p>
                                    <h3 className="text-sm md:text-lg lg:text-lg">WHAT TO EXPECT</h3>
                                    <ul className="lg:text-xl md:py-4 space-y-4">
                                        {sectionFir.map((item, index) => (
                                            <li key={index} className="flex text-lg md:text-xl">
                                                <div className="flex-shrink-0 w-4 h-[2px] mt-[14px] text-[#0C3D3D]">
                                                    <svg 
                                                        className="w-full h-full" 
                                                        fill="currentColor" 
                                                        viewBox="0 0 24 2" 
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <rect width="22" height="2" />
                                                    </svg>
                                                </div>
                                                <p className="ml-6 leading-tight">{item.content}</p>
                                            </li>
                                        ))}
                                    </ul>
                                    <button
                                        // onClick={() => setEmail("")}
                                        className="py-3 px-8 mt-10 border border-[#0C3D3D] bg-white text-black text-center rounded-full hover:bg-[#46DE46]"
                                    >
                                        Learn more &rarr;
                                    </button>
                                </div>

                                {/* Right Side - Image */}
                                <div className="md:w-1/2">
                                    <img
                                        src={sectionImage.src}
                                        alt={sectionImage.name}
                                        className="object-cover rounded-md w-full h-full md:max-h-[800px]"
                                    />
                                </div>
                            </div>
                        </div>
                         {/* Section 5 */}
                         <div className="w-full px-8">
                            <div className="flex flex-col md:flex-row border-b md:py-10">
                                {/* Left Side - Text */}
                                <div className="md:w-1/2 text-black md:pr-10 pr-4">
                                    <h2 className="text-3xl md:text-3xl lg:text-4xl text-black text-start md:pb-4">
                                    High quality standards
                                    </h2>
                                    <p className="text-black text-lg md:text-xl md:pb-6">
                                        AG1 lets you face the future with confidence by fueling your cells with nutrients they need to support a sharp mind, a healthy heart, and vibrant skin, hair, and nails.
                                    </p>
                                    <h3 className="text-sm md:text-lg lg:text-lg">WHAT TO EXPECT</h3>
                                    <ul className="lg:text-xl md:py-4 space-y-4">
                                        {sectionFir.map((item, index) => (
                                            <li key={index} className="flex text-lg md:text-xl">
                                                <div className="flex-shrink-0 w-4 h-[2px] mt-[14px] text-[#0C3D3D]">
                                                    <svg 
                                                        className="w-full h-full" 
                                                        fill="currentColor" 
                                                        viewBox="0 0 24 2" 
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <rect width="22" height="2" />
                                                    </svg>
                                                </div>
                                                <p className="ml-6 leading-tight">{item.content}</p>
                                            </li>
                                        ))}
                                    </ul>
                                    <button
                                        // onClick={() => setEmail("")}
                                        className="py-3 px-8 mt-10 border border-[#0C3D3D] bg-white text-black text-center rounded-full hover:bg-[#46DE46]"
                                    >
                                        Learn more &rarr;
                                    </button>
                                </div>

                                {/* Right Side - Image */}
                                <div className="md:w-1/2">
                                    <img
                                        src={sectionImage.src}
                                        alt={sectionImage.name}
                                        className="object-cover rounded-md w-full h-full md:max-h-[800px]"
                                    />
                                </div>
                            </div>
                        </div>
                         {/* Section 6 */}
                         <div className="w-full px-8">
                            <div className="flex flex-col md:flex-row border-b md:py-10">
                                {/* Left Side - Text */}
                                <div className="md:w-1/2 text-black md:pr-10 pr-4">
                                    <h2 className="text-3xl md:text-3xl lg:text-4xl text-black text-start md:pb-4">
                                    Ingredients you can feel
                                    </h2>
                                    <p className="text-black text-lg md:text-xl md:pb-6">
                                        AG1 lets you face the future with confidence by fueling your cells with nutrients they need to support a sharp mind, a healthy heart, and vibrant skin, hair, and nails.
                                    </p>
                                    <h3 className="text-sm md:text-lg lg:text-lg">WHAT TO EXPECT</h3>
                                    <ul className="lg:text-xl md:py-4 space-y-4">
                                        {sectionFir.map((item, index) => (
                                            <li key={index} className="flex text-lg md:text-xl">
                                                <div className="flex-shrink-0 w-4 h-[2px] mt-[14px] text-[#0C3D3D]">
                                                    <svg 
                                                        className="w-full h-full" 
                                                        fill="currentColor" 
                                                        viewBox="0 0 24 2" 
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <rect width="22" height="2" />
                                                    </svg>
                                                </div>
                                                <p className="ml-6 leading-tight">{item.content}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Right Side - Image */}
                                <div className="md:w-1/2">
                                    <img
                                        src={sectionImage.src}
                                        alt={sectionImage.name}
                                        className="object-cover rounded-md w-full h-full md:max-h-[800px]"
                                    />
                                </div>
                            </div>
                        </div>
                         {/* Section 7*/}
                         <div className="w-full px-8">
                            <div className="flex flex-col md:flex-row border-b md:py-10">
                                {/* Left Side - Text */}
                                <div className="md:w-1/2 text-black md:pr-10 pr-4">
                                    <h2 className="text-3xl md:text-3xl lg:text-4xl text-black text-start md:pb-4">
                                    Simplicity
                                    </h2>
                                    <p className="text-black text-lg md:text-xl md:pb-6">
                                        AG1 lets you face the future with confidence by fueling your cells with nutrients they need to support a sharp mind, a healthy heart, and vibrant skin, hair, and nails.
                                    </p>
                                    <h3 className="text-sm md:text-lg lg:text-lg">WHAT TO EXPECT</h3>
                                    <ul className="lg:text-xl md:py-4 space-y-4">
                                        {sectionFir.map((item, index) => (
                                            <li key={index} className="flex text-lg md:text-xl">
                                                <div className="flex-shrink-0 w-4 h-[2px] mt-[14px] text-[#0C3D3D]">
                                                    <svg 
                                                        className="w-full h-full" 
                                                        fill="currentColor" 
                                                        viewBox="0 0 24 2" 
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <rect width="22" height="2" />
                                                    </svg>
                                                </div>
                                                <p className="ml-6 leading-tight">{item.content}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Right Side - Image */}
                                <div className="md:w-1/2">
                                    <img
                                        src={sectionImage.src}
                                        alt={sectionImage.name}
                                        className="object-cover rounded-md w-full h-full md:max-h-[800px]"
                                    />
                                </div>
                            </div>
                        </div>
                         {/* Section 8 */}
                         <div className="w-full px-8">
                            <div className="flex flex-col md:flex-row border-b md:py-10">
                                {/* Left Side - Text */}
                                <div className="md:w-1/2 text-black md:pr-10 pr-4">
                                    <h2 className="text-3xl md:text-3xl lg:text-4xl text-black text-start md:pb-4">
                                    Taste
                                    </h2>
                                    <p className="text-black text-lg md:text-xl md:pb-6">
                                        AG1 lets you face the future with confidence by fueling your cells with nutrients they need to support a sharp mind, a healthy heart, and vibrant skin, hair, and nails.
                                    </p>
                                    <h3 className="text-sm md:text-lg lg:text-lg">WHAT TO EXPECT</h3>
                                    <ul className="lg:text-xl md:py-4 space-y-4">
                                        {sectionFir.map((item, index) => (
                                            <li key={index} className="flex text-lg md:text-xl">
                                                <div className="flex-shrink-0 w-4 h-[2px] mt-[14px] text-[#0C3D3D]">
                                                    <svg 
                                                        className="w-full h-full" 
                                                        fill="currentColor" 
                                                        viewBox="0 0 24 2" 
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <rect width="22" height="2" />
                                                    </svg>
                                                </div>
                                                <p className="ml-6 leading-tight">{item.content}</p>
                                            </li>
                                        ))}
                                    </ul>
                                    <button
                                        // onClick={() => setEmail("")}
                                        className="py-3 px-8 mt-10 border border-[#0C3D3D] bg-white text-black text-center rounded-full hover:bg-[#46DE46]"
                                    >
                                        Learn more &rarr;
                                    </button>
                                </div>

                                {/* Right Side - Image */}
                                <div className="md:w-1/2">
                                    <img
                                        src={sectionImage.src}
                                        alt={sectionImage.name}
                                        className="object-cover rounded-md w-full h-full md:max-h-[800px]"
                                    />
                                </div>
                            </div>
                        </div>
                         {/* Section 9 */}
                         <div className="w-full px-8">
                            <div className="flex flex-col md:flex-row border-b md:py-10">
                                {/* Left Side - Text */}
                                <div className="md:w-1/2 text-black md:pr-10 pr-4">
                                    <h2 className="text-3xl md:text-3xl lg:text-4xl text-black text-start md:pb-4">
                                    Science and research
                                    </h2>
                                    <p className="text-black text-lg md:text-xl md:pb-6">
                                        AG1 lets you face the future with confidence by fueling your cells with nutrients they need to support a sharp mind, a healthy heart, and vibrant skin, hair, and nails.
                                    </p>
                                    <h3 className="text-sm md:text-lg lg:text-lg">WHAT TO EXPECT</h3>
                                    <ul className="lg:text-xl md:py-4 space-y-4">
                                        {sectionFir.map((item, index) => (
                                            <li key={index} className="flex text-lg md:text-xl">
                                                <div className="flex-shrink-0 w-4 h-[2px] mt-[14px] text-[#0C3D3D]">
                                                    <svg 
                                                        className="w-full h-full" 
                                                        fill="currentColor" 
                                                        viewBox="0 0 24 2" 
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <rect width="22" height="2" />
                                                    </svg>
                                                </div>
                                                <p className="ml-6 leading-tight">{item.content}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Right Side - Image */}
                                <div className="md:w-1/2">
                                    <img
                                        src={sectionImage.src}
                                        alt={sectionImage.name}
                                        className="object-cover rounded-md w-full h-full md:max-h-[800px]"
                                    />
                                </div>
                            </div>
                        </div>



                    </div>
                </div>
            </section>
        </>
    );
}
