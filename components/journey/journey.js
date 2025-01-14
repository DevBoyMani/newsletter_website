// "use client";
// import Image from "next/image";
// import { useState } from "react";

// export default function Journey() {
//     const [email,setEmail] = useState("");
//     const journey = [
//         {
//             name: "Fashion",
//             author: "MARCHTEE, ELITE T-SHIRT MANUFACTURER",
//             quote: "Sagravia is an exceptional newsletter company that exceeded all expectations! Their advertising strategy was spot-on, helping my company sell out our entire t-shirt inventory in just a few hours during a one-week campaign. Their team is professional, creative, and highly effective at crafting messages that truly resonate with the audience. Sagravia delivers results beyond imagination—I highly recommend them to anyone looking for impactful marketing and incredible sales success!",
//             image: "/w-advertise.png", // Replace with actual image URL
//         },
//     ];

//     return (
//         <>
//             <div className="bg-white text-white px-4 md:px-16 py-20 lg:py-16 md:pb-20 lg:pb-20 mx-auto lg:min-h-[650px]">
//                 {/* Tabs */}
//                 <div className="mb-8">
//                     <h2 className="text-5xl  text-black">
//                     Start your AG1 journey for less<br/> than 3 €/day
//                     </h2>
//                     <p className="text-xl text-black mt-6">
//                     — with 30 days money-back guarantee!
//                     </p>
//                 </div>

//                 {/* Content */}
//                 {journey.map((item, index) => (
//                     <div
//                         key={index}
//                         className="mt-6 flex flex-col md:flex-row items-center md:items-start"
//                     >
//                         {/* Left Contents */}
//                         <div className="md:w-1/2 ">
//                         {/* Left Content1 */}
//                             <div className="flex flex-col">
//                                <div className="flex justify-between">
//                                     <div>
//                                         <p className="text-lg font-semibold text-black mb-2 leading-tight">
//                                         AG1 Pouch
//                                         </p>
//                                         <p className="text-sm text-gray-500 leading-tight">
//                                         30 servings | 2,90 €/day
//                                         </p>
//                                     </div>
//                                     <div>
//                                         <p className="text-lg font-semibold text-black mb-4 leading-tight">
//                                         87€ per Pouch
//                                         </p>
//                                     </div>
//                                 </div>

//                                 {/* divider line */}
//                                 <div style={{ border: "1px solid #d1d5db" }} className="mt-4"></div>
//                             </div>

//                         {/* Left Content2*/}
//                             <div className="flex flex-col ">
//                             <p className="text-sm text-gray-500 leading-tight mt-3 mb-3">
//                             FIRST TIME PURCHASE INCLUDES:
//                                             </p>
//                                <div className="flex justify-between">
//                                     <div>
//                                         <p className="text-lg font-semibold text-black mb-2 leading-tight">
//                                         Welcome Kit
//                                         </p>
//                                         <p className="text-sm text-gray-500 leading-tight mt-1 mb-3">
//                                         AG1 Shaker, Scoop, and Canister
//                                             </p>
//                                     </div>
//                                     <div>
//                                         <p className="text-lg font-semibold text-black mb-4 leading-tight">
//                                         <span className="text-gray-500 line-through">28€</span> Free
//                                         </p>
//                                     </div>
//                                 </div>
//                             </div>

//                             {/* Left Content3*/}
//                             <div className="flex flex-col mt-2">
//                                <div className="flex justify-between">
//                                     <div>
//                                         <p className="text-lg font-semibold text-black mb-2 leading-tight">
//                                         AG1 Travel Packs (5 count)
//                                         </p>
//                                         <p className="text-sm text-gray-500 leading-tight mt-1 mb-3">
//                                         5 individual servings
//                                             </p>
//                                     </div>
//                                     <div>
//                                         <p className="text-lg font-semibold text-black mb-4 leading-tight">
//                                         <span className="text-gray-500 line-through">17€</span> Free
//                                         </p>
//                                     </div>
//                                 </div>
//                             </div>

//                             {/* Left Content4*/}
//                             <div className="flex flex-col mt-2">
//                                <div className="flex justify-between">
//                                     <div>
//                                         <p className="text-lg font-semibold text-black mb-2 leading-tight">
//                                         Vitamin D3+K2 Drops
//                                         </p>
//                                         <p className="text-sm text-gray-500 leading-tight mt-1 mb-3">
//                                         1 Bottle
//                                             </p>
//                                     </div>
//                                     <div>
//                                         <p className="text-lg font-semibold text-black mb-4 leading-tight">
//                                         <span className="text-gray-500 line-through">24€</span> Free 
//                                         </p>
//                                     </div>
//                                 </div>
//                                    {/* divider line */}
//                                    <div style={{ border: "1px solid #d1d5db" }} className="mt-4"></div>
//                             </div>
//                             {/* Left Content5*/}
//                             <div className="flex flex-col ">
//                                <div className="flex justify-between">
//                                     <div>
//                                         <p className="text-lg font-semibold text-black mt-3 mb-2 leading-tight">
//                                         Total
//                                         </p>
//                                     </div>
//                                     <div>
//                                         <p className="text-lg font-semibold text-black mt-3 mb-4 leading-tight">
//                                         <span className="text-gray-500 line-through">156€</span> 87€
//                                         </p>
//                                     </div>
//                                 </div>
//                             </div>
//                             {/* button */}
//                             <button
//                             onClick={() => setEmail("")}
//                             className="py-3 px-8 w-full bg-[#0C3D3D] mt-8 sm:text-xl  text-white text-center rounded-full hover:bg-[#46DE46] hover:text-black">
//                             Speak to sales &rarr;
//                             </button>
//                             {/* check list */}
//                             <div className="flex flex-col mt-2">
//                                <div className="flex justify-center">
//                                     <div>
//                                         <p className="text-sm font-semibold text-black mt-3 mb-2 leading-tight">
//                                         ✓ Free Shipping**
//                                         </p>
//                                     </div>
//                                     <div>
//                                         <p className="text-sm ml-8 font-semibold text-black mt-3 mb-4 leading-tight">
//                                         ✓ Free Shipping**
//                                         </p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Right Image */}
//                         <div className="md:w-1/2 mt-6 md:mt-0 md:pl-8 ml-16">
//                             <img
//                                 src={item.image}
//                                 alt={item.name}
//                                 className="w-[100%] h-auto shadow-md"
//                             />
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </>
//     );
// }

"use client";
import Image from "next/image";
import { useState } from "react";

export default function Journey() {
    const [email, setEmail] = useState("");
    const journey = [
        {
            name: "Fashion",
            author: "MARCHTEE, ELITE T-SHIRT MANUFACTURER",
            quote: "Sagravia is an exceptional newsletter company that exceeded all expectations! Their advertising strategy was spot-on, helping my company sell out our entire t-shirt inventory in just a few hours during a one-week campaign. Their team is professional, creative, and highly effective at crafting messages that truly resonate with the audience. Sagravia delivers results beyond imagination—I highly recommend them to anyone looking for impactful marketing and incredible sales success!",
            image: "/w-advertise.png", // Replace with actual image URL
        },
    ];

    return (
        <>
            <div className="bg-white text-white px-4 md:px-16 py-20 lg:py-16 md:pb-20 lg:pb-20 mx-auto lg:min-h-[650px]">
                {/* Tabs */}
                <div className="mb-8">
                    <h2 className="text-3xl md:text-5xl text-black">
                        Start your AG1 journey for less<br /> than 3 €/day
                    </h2>
                    <p className="text-lg md:text-xl text-black mt-6">
                        — with 30 days money-back guarantee!
                    </p>
                </div>

                {/* Content */}
                {journey.map((item, index) => (
                    <div
                        key={index}
                        className="mt-6 flex flex-col md:flex-row items-center md:items-start"
                    >
                        {/* Right Image for Mobile */}
                        <div className="w-full md:w-1/2 md:pl-8 order-1 md:order-2">
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-auto shadow-md mb-6 md:mb-0"
                            />
                        </div>

                        {/* Left Contents */}
                        <div className="w-full md:w-1/2 order-2 md:order-1">
                            {/* Left Content1 */}
                            <div className="flex flex-col">
                                <div className="flex justify-between">
                                    <div>
                                        <p className="text-lg font-semibold text-black mb-2 leading-tight">
                                            AG1 Pouch
                                        </p>
                                        <p className="text-sm text-gray-500 leading-tight">
                                            30 servings | 2,90 €/day
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-lg font-semibold text-black mb-4 leading-tight">
                                            87€ per Pouch
                                        </p>
                                    </div>
                                </div>
                                <div className="border border-gray-300 mt-4"></div>
                            </div>

                            {/* Left Content2 */}
                            <div className="flex flex-col mt-4">
                                <p className="text-sm text-gray-500 leading-tight mb-3">
                                    FIRST TIME PURCHASE INCLUDES:
                                </p>
                                <div className="flex justify-between">
                                    <div>
                                        <p className="text-lg font-semibold text-black mb-2 leading-tight">
                                            Welcome Kit
                                        </p>
                                        <p className="text-sm text-gray-500 leading-tight">
                                            AG1 Shaker, Scoop, and Canister
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-lg font-semibold text-black">
                                            <span className="text-gray-500 line-through">28€</span> Free
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* Left Content3*/}
                            <div className="flex flex-col mt-2">
                               <div className="flex justify-between">
                                    <div>
                                        <p className="text-lg font-semibold text-black mb-2 leading-tight">
                                        AG1 Travel Packs (5 count)
                                        </p>
                                        <p className="text-sm text-gray-500 leading-tight mt-1 mb-3">
                                        5 individual servings
                                            </p>
                                    </div>
                                    <div>
                                        <p className="text-lg font-semibold text-black mb-4 leading-tight">
                                        <span className="text-gray-500 line-through">17€</span> Free
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Left Content4*/}
                            <div className="flex flex-col mt-2">
                               <div className="flex justify-between">
                                    <div>
                                        <p className="text-lg font-semibold text-black mb-2 leading-tight">
                                        Vitamin D3+K2 Drops
                                        </p>
                                        <p className="text-sm text-gray-500 leading-tight mt-1 mb-3">
                                        1 Bottle
                                            </p>
                                    </div>
                                    <div>
                                        <p className="text-lg font-semibold text-black mb-4 leading-tight">
                                        <span className="text-gray-500 line-through">24€</span> Free 
                                        </p>
                                    </div>
                                </div>
                                   {/* divider line */}
                                   <div style={{ border: "1px solid #d1d5db" }} className="mt-4"></div>
                            </div>
                            {/* Left Content5*/}
                            <div className="flex flex-col ">
                               <div className="flex justify-between">
                                    <div>
                                        <p className="text-lg font-semibold text-black mt-3 mb-2 leading-tight">
                                        Total
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-lg font-semibold text-black mt-3 mb-4 leading-tight">
                                        <span className="text-gray-500 line-through">156€</span> 87€
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* button */}
                            <button
                            onClick={() => setEmail("")}
                            className="py-3 px-8 w-full bg-[#0C3D3D] mt-8 sm:text-xl  text-white text-center rounded-full hover:bg-[#46DE46] hover:text-black">
                            Speak to sales &rarr;
                            </button>
                            {/* check list */}
                            <div className="flex flex-col mt-2">
                               <div className="flex justify-center">
                                    <div>
                                        <p className="text-sm font-semibold text-black mt-3 mb-2 leading-tight">
                                        ✓ Free Shipping**
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-sm ml-8 font-semibold text-black mt-3 mb-4 leading-tight">
                                        ✓ Free Shipping**
                                        </p>
                                    </div>
                                </div>
                            </div>
                            

                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
