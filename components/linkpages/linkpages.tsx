"use client";
import Image from "next/image";
import { FaStar } from "react-icons/fa";


export default function Linkpages(){
{/* advertise section */}
return(
<div className="bg-[#F6F5F1]">
  <div className="flex  px-4 md:px-0 py-20 lg:py-20 max-w-7xl  lg:min-h-[650px] relative z-10">
    <div className="hidden pt-0 flex-1 lg:block relative">
      <Image
        src="/advertise.png"
        fill
        // objectFit="cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        alt="advertise screen banner image"
      />
    </div>
    <div className="flex-1 pl-20">
      <div className="flex">
        <div className="flex items-center mr-4">
                    
          {[...Array(5)].map((_, index) => (
          <FaStar key={index} className="text-2xl text-[#46DE46] mr-2 mt-1" />
             ))}
        </div>
        <div>
        <h3 className="text-xl mt-0">100 verified 5-star reviews</h3>
        </div>
      </div>
      <h1 className="mt-4 text-nl_background text-4xl sm:text-4xl leading-tight sm:leading-tight">
        ADVERTISE
      </h1>
      <p className="py-6">Advertise on newsletters that cater to your target demographics.</p>
        <ul className="list-none space-y-2">
            <li className="flex items-center">
                <span className="text-black font-bold mr-2">✓</span> Copywriting services included
            </li>
            <li className="flex items-center">
                <span className="text-black font-bold mr-2">✓</span> Ad design included
            </li>
            <li className="flex items-center">
                <span className="text-black font-bold mr-2">✓</span> Performance report included
            </li>
        </ul>
      <p className="py-6">We'll do the legwork, from creating catchy copy to design.</p>
      <button
        onClick={() => setEmail("")}
        className="py-3 px-8  bg-[#0C3D3D] mt-4 sm:text-xl  text-white text-center rounded-full hover:bg-[#46DE46] hover:text-black">
         Speak to sales &rarr;
      </button>
    </div>
  </div>
</div>
);
}