// export default function Research(){
//     return(
//         <>
//         <div className="text-white px-4 md:px-16 lg:py-24 md:pb-20 lg:pb-20 mx-auto lg:min-h-[650px]">
//             <div className="flex flex-col lg:flex-row  justify-between items-start">
//                 {/* reft */}
//                 <div className="flex-1 text-black ">
//                     <h1 className="text-5xl">Researched.<br/> Studied.<br/> Continuously<br/> Improved.<br/></h1>
//                 </div>
//                 {/* right */}
//                 <div className="flext-1 text-black">
//                     <div>
//                         <h6 className="bg-[#46DE46] p-1 ">IN A SINGLE-ARM STUDY†</h6>
//                         <div className="flex px-2 flex flex-col sm:flex-row gap-4">
//                             <div className="flext-1 w-1/2 mt-4">
//                                 <div className="text-6xl">97%</div>
//                                 <div className="py-4 font-bold">of participants felt more energy after 30 days*</div>
//                             </div>
//                             <div className="flext-1 w-2/3 mt-4">
//                                 <div className="text-6xl">80%</div>
//                                 <div className="py-4 font-bold">of participants felt more energy after 30 days*</div>
//                             </div>
//                         </div>
//                         <div className="text-sm"><i>†In a third-party, single-arm study conducted on 35 healthy adults ages 25-48 assessing the self-perceived efficacy of AG1 over 90 days.</i></div>
//                         <button
//                             // onClick={() => setEmail("")}
//                             className="py-3 px-8 mt-10 border border-[#0C3D3D] bg-white text-black text-center rounded-full hover:bg-[#46DE46] w-6/12"
//                             >
//                             Speak to sales &rarr;
//                             </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         </>
//     )
// }

export default function Research() {
    return (
        <>
            <div className="text-white py-10 px-4 md:px-16 lg:py-24 md:pb-20 lg:pb-20 mx-auto lg:min-h-[650px]">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:gap-0">
                    {/* Left Section */}
                    <div className="flex-1 text-black mb-8 lg:mb-0">
                        <h1 className="text-5xl leading-tight">
                            Researched.
                            <br /> Studied.
                            <br /> Continuously
                            <br /> Improved.
                            <br />
                        </h1>
                    </div>

                    {/* Right Section */}
                    <div className="flex-1 text-black">
                        <div>
                            <h6 className="bg-[#46DE46] p-2 mb-4">IN A SINGLE-ARM STUDY†</h6>
                            <div className="flex flex-col sm:flex-row lg:gap-6">
                                <div className="flex-1 w-full sm:w-1/2">
                                    <div className="text-7xl">97%</div>
                                    <div className="py-4 font-bold">
                                        of participants felt more energy after 30 days*
                                    </div>
                                </div>
                                <div className="flex-1 w-full sm:w-1/2">
                                    <div className="text-7xl">80%</div>
                                    <div className="py-4 font-bold">
                                        of participants felt more energy after 30 days*
                                    </div>
                                </div>
                            </div>
                            <div className="text-sm mt-4">
                                <i>
                                    †In a third-party, single-arm study conducted on 35 healthy adults ages 25-48
                                    assessing the self-perceived efficacy of AG1 over 90 days.
                                </i>
                            </div>
                            {/* <div className="flex lg:justify-left justify-center sm:w-full mt-10">
                                <button
                                    className="py-3 px-8 border border-[#0C3D3D] bg-white text-black text-center rounded-full hover:bg-[#46DE46] w-6/12"
                                >
                                    Speak to sales &rarr;
                                </button>
                            </div> */}
                            <div className="flex justify-center lg:justify-start mt-6 lg:mt-10">
                                <button
                                    className="py-3 px-8 border border-[#0C3D3D] bg-white text-black text-center lg:text-left  rounded-full hover:bg-[#46DE46] w-full lg:w-6/12"
                                >
                                    See Our Research Studies
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
