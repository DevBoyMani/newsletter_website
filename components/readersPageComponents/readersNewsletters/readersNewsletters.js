import { ArrowRight } from "lucide-react";



export default function ReadersNewsletters(){
    const datas=[
        {headerButton:"Subscribe",image:"/readers/ps.png",topic:"News",when:"weekly",heading:"Presidential Summary",paragraph:"Through in-depth analysis and well-researched content, we make historical knowledge accessible to professionals, students, and anyone interested in political history.",footerButton:"Learn More"},
        {headerButton:"Subscribe",image:"/readers/ps.png",topic:"News",when:"weekly",heading:"Presidential Summary",paragraph:"Through in-depth analysis and well-researched content, we make historical knowledge accessible to professionals, students, and anyone interested in political history.",footerButton:"Learn More"},
        {headerButton:"Subscribe",image:"/readers/ps.png",topic:"News",when:"weekly",heading:"Presidential Summary",paragraph:"Through in-depth analysis and well-researched content, we make historical knowledge accessible to professionals, students, and anyone interested in political history.",footerButton:"Learn More"},
        {headerButton:"Subscribe",image:"/readers/ps.png",topic:"News",when:"weekly",heading:"Presidential Summary",paragraph:"Through in-depth analysis and well-researched content, we make historical knowledge accessible to professionals, students, and anyone interested in political history.",footerButton:"Learn More"},
        {headerButton:"Subscribe",image:"/readers/ps.png",topic:"News",when:"weekly",heading:"Presidential Summary",paragraph:"Through in-depth analysis and well-researched content, we make historical knowledge accessible to professionals, students, and anyone interested in political history.",footerButton:"Learn More"},
    ]
    return(
        <>
            <div>
                <div className="px-4 md:px-16">
                    <p className="text-[#000] font-Manrope text-16px font-[400]">
                    Proin et pulvinar risus, quis hendrerit nisi. Vestibulum eget sollicitudin odio. Maecenas tellus sem, fermentum id aliquam et, auctor id libero. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed eu nulla felis. Quisque eget viverra massa. Donec posuere, sapien vel facilisis dictum, turpis mi tempus mauris, in ullamcorper libero turpis sed mauris. Nulla eu blandit nunc, ut suscipit dolor. Quisque dictum pellentesque tellus sed porta.
                    </p>
                </div>

<div className="px-4 md:px-16 py-10">
  <div className="grid gap-6 lg:grid-cols-3">
    {datas.map((data, index) => (
      
      <div
        key={index}
        className="group flex flex-col items-start transition-all duration-300"
      >
        {/* Image wrapper with relative positioning */}
        <div className="w-full max-h-[276px] relative">
          <img
            src={data.image}
            alt={data.heading}
            className="w-full h-full object-cover rounded-t-lg"
          />

<button className="absolute top-4 left-4 bg-gray-200 text-black px-5 py-2 rounded-full transition-all duration-300 overflow-hidden group-hover:px-2 group-hover:py-2 group-hover:w-[30px] group-hover:h-[30px] group-hover:rounded-full flex items-center justify-center gap-2">

  <span className="transition-all duration-300 group-hover:opacity-0 group-hover:-translate-x-2">
    Subscribe
  </span>

  <span className="transition-all duration-300 group-hover:absolute group-hover:inset-0 group-hover:flex group-hover:items-center group-hover:justify-center group-hover:scale-110">
    +
  </span>
</button>


{/* <button className="absolute top-4 left-4 bg-gray-200 text-black px-5 py-2 rounded-full transition-all duration-300 overflow-hidden group-hover:px-2 group-hover:py-2 group-hover:w-[30px] group-hover:h-[30px] group-hover:rounded-full flex items-center justify-center ">

  <span className="transition-all duration-300 opacity-100  group-hover:opacity-0 group-hover:-translate-x-2  left-1/2 transform -translate-x-1/2">
    Subscribe
  </span>


  <span className="transition-all duration-300 opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-110  inset-0 flex items-center justify-center">
    +
  </span>
</button> */}



        </div>

        {/* Card content */}
        <div className="w-full border px-4 rounded-b-lg py-4 font-Manrope">
         

          <div className="relative h-6 overflow-hidden">
            <span className="block absolute inset-0 transform transition-transform duration-300 translate-y-0 group-hover:-translate-y-6 text-[13px] text-[#000000a8]">
              {data.topic}
            </span>
            <span className="block absolute inset-0 transform transition-transform duration-300 translate-y-6 group-hover:translate-y-0 text-[13px] text-[#000000a8]">
              {data.when}
            </span>
          </div>

          <div className="text-[22px] text-[#2C2C2C]">{data.heading}</div>
          <div className="w-[85%] text-[15px] font-[400] text-[#5A5A5A] mt-2">
            {data.paragraph}
          </div>
          <div className="mt-4">
  <button className=" border border-[#01261E] flex items-center justify-between w-[48%] py-3 px-4 rounded-full hover:bg-[#01261E] hover:text-white text-[#01261E]">
    <span className="font-[400] text-[13px]">{data.footerButton}</span>
    
    <ArrowRight
      className="w-[18px] h-[18px] transition duration-300 "
    />
  </button>
</div>


        </div>
      </div>
    ))}
  </div>
</div>

                </div>
        </>
    )
}