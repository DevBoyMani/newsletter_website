"use client";

export default function ViewAll(){
    const images = [
        {
            name: "PS",
            image: "/socialimgs/s-ps.png",
            bn: "Presidentials",
            
        },
        {
            name: "GS",
            image: "/socialimgs/s-gp.png",
            bn: "Geopoliticals",
            
        },
        {
            name: "LS",
            image: "/socialimgs/s-ls.png",
            bn: "Long & Short",
           
        },
        {
            name: "BH",
            image: "/socialimgs/s-bh.png",
            bn: "Business History",
         
        },
        {
            name: "PS",
            image: "/socialimgs/s-ps.png",
            bn: "Presidentials",
            
        },
        {
            name: "GS",
            image: "/socialimgs/s-gp.png",
            bn: "Geopoliticals",
            
        },
        {
            name: "LS",
            image: "/socialimgs/s-ls.png",
            bn: "Long & Short",
           
        },
        {
            name: "BH",
            image: "/socialimgs/s-bh.png",
            bn: "Business History",
         
        },
        {
            name: "PS",
            image: "/socialimgs/s-ps.png",
            bn: "Presidentials",
            
        },
        {
            name: "GS",
            image: "/socialimgs/s-gp.png",
            bn: "Geopoliticals",
            
        },
        {
            name: "GS",
            image: "/socialimgs/s-gp.png",
            bn: "Geopoliticals",
            
        },
        {
            name: "LS",
            image: "/socialimgs/s-ls.png",
            bn: "Long & Short",
           
        },
    ];
    return(
  
    <div className="text-white  py-20 lg:py-10 mx-auto">
        <h2 className="text-black text-4xl w-[80%]">
        We don’t think you should settle for questionable ingredients when it comes to your daily supplement. That's why each ingredient in AG1 is sourced for optimal absorption and nutrient density, and combined for maximum potency.
        </h2>
        <button
            // onClick={() => setEmail("")}
            className="py-3 px-8 mt-10 border bg-[#0C3D3D] text-white text-center rounded-full hover:bg-[#46DE46] hover:text-black"
          >
            Check &rarr;
        </button>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-6 py-16">
                {images.map((social, index) => (
                    

                    <div key={index} className=" flex flex-col items-center">
                 
                        <a
                            href={social.instaProfileLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className=""
                        >
                            <img
                                src={social.image}
                                alt={social.name}
                                className="object-cover rounded-md w-full h-full"
                            />
                        </a>
                        {/* Text Section */}
                        <div className="mt-4 w-full text-left">
                            <h2 className="text-lg font-semibold text-black">
                                        {social.bn}
                            </h2>
                        </div>

                    </div>

                ))}
        </div>
        <div className="bg-[#F6F5F1] text-white px-4 pb-20 pt-20 lg:py-20 lg:px-16  mx-auto">
            <h3 className="text-black text-2xl text-center"> 
            And that's not all.
            </h3>

            <div className="flex justify-center mt-2">
            <button
                className="py-3 px-8 bg-[#0C3D3D] mt-4 sm:text-xl text-white text-center rounded-full hover:bg-[#46DE46] hover:text-black"
            >
                Speak to sales &rarr;
            </button>
            </div>

        </div>
    </div>
        
    )
}