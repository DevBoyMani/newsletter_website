export default function ReadersNewsletters(){
    const datas=[
        {headerButton:"Subscribe",image:"/readers/ps.png",topic:"News",heading:"Presidential Summary",paragraph:"Through in-depth analysis and well-researched content, we make historical knowledge accessible to professionals, students, and anyone interested in political history.",footerButton:"Learn More"},
        {headerButton:"Subscribe",image:"/readers/ps.png",topic:"News",heading:"Presidential Summary",paragraph:"Through in-depth analysis and well-researched content, we make historical knowledge accessible to professionals, students, and anyone interested in political history.",footerButton:"Learn More"},
        {headerButton:"Subscribe",image:"/readers/ps.png",topic:"News",heading:"Presidential Summary",paragraph:"Through in-depth analysis and well-researched content, we make historical knowledge accessible to professionals, students, and anyone interested in political history.",footerButton:"Learn More"},
        {headerButton:"Subscribe",image:"/readers/ps.png",topic:"News",heading:"Presidential Summary",paragraph:"Through in-depth analysis and well-researched content, we make historical knowledge accessible to professionals, students, and anyone interested in political history.",footerButton:"Learn More"},
        {headerButton:"Subscribe",image:"/readers/ps.png",topic:"News",heading:"Presidential Summary",paragraph:"Through in-depth analysis and well-researched content, we make historical knowledge accessible to professionals, students, and anyone interested in political history.",footerButton:"Learn More"},
    ]
    return(
        <>
            <div>
                <div className="px-4 md:px-16">
                    <p className="text-[#000] font-Manrope text-16px font-[400]">
                    Proin et pulvinar risus, quis hendrerit nisi. Vestibulum eget sollicitudin odio. Maecenas tellus sem, fermentum id aliquam et, auctor id libero. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed eu nulla felis. Quisque eget viverra massa. Donec posuere, sapien vel facilisis dictum, turpis mi tempus mauris, in ullamcorper libero turpis sed mauris. Nulla eu blandit nunc, ut suscipit dolor. Quisque dictum pellentesque tellus sed porta.
                    </p>
                </div>

                {/* <div className="px-4 md:px-16 py-10">
                    <div className="grid gap-6 lg:grid-cols-3">
                        {datas.map((data, index) => (
                        <div key={index} className="flex flex-col items-start">
                          
                            <div className="w-full max-h-[276px] relative">
                            <img
                                src={data.image}
                                alt={data.heading}
                                className="w-full h-full object-cover rounded-t-lg"
                            />

                          
                            <button className="absolute top-4 left-4 group bg-gray-200 text-black px-5 py-2 rounded-full transition-all duration-300 hover:px-2 hover:py-2 hover:w-[30px] hover:h-[30px]">
                                <span className="block group-hover:opacity-0 group-hover:-translate-x-2 ">
                                Subscribe
                                </span>
                                <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:scale-110">
                                +
                                </span>
                            </button>
                            </div>

                            <div className="w-full border px-4 rounded-b-lg py-4 font-Manrope">
                            <div className="text-[13px] text-[#000000a8]">{data.topic}</div>
                            <div className="text-[22px] text-[#2C2C2C]">{data.heading}</div>
                            <div className="w-[85%] text-[15px] font-[400] text-[#5A5A5A] mt-2">
                                {data.paragraph}
                            </div>
                            <div className="mt-4">
                                <button className="group border border-[#01261E] flex items-center justify-between w-[48%] py-3 px-4 rounded-full hover:bg-[#01261E] hover:text-[#fff]">
                                <span className="font-[400] text-[13px] ">{data.footerButton}</span>
                                <img
                                    src="/readers/arrow-right.png"
                                    className="block group-hover:hidden w-[18px] h-[18px]"
                                    alt="arrow"
                                />
                                <img
                                    src="/readers/arrow-right-white.png"
                                    className="hidden group-hover:block w-[18px] h-[18px]"
                                    alt="arrow"
                                />
                                </button>
                            </div>
                            </div>
                        </div>
                        ))}
                    </div>
                </div> */}

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

<button className="absolute top-4 left-4 group bg-gray-200 text-black px-5 py-2 rounded-full transition-all duration-300 hover:px-2 hover:py-2 hover:w-[30px] hover:h-[30px]">
                                <span className="block group-hover:opacity-0 group-hover:-translate-x-2 ">
                                Subscribe
                                </span>
                                <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:scale-110">
                                +
                                </span>
                            </button>
        </div>

        {/* Card content */}
        <div className="w-full border px-4 rounded-b-lg py-4 font-Manrope">
          <div className="text-[13px] text-[#000000a8]">{data.topic}</div>
          <div className="text-[22px] text-[#2C2C2C]">{data.heading}</div>
          <div className="w-[85%] text-[15px] font-[400] text-[#5A5A5A] mt-2">
            {data.paragraph}
          </div>
          <div className="mt-4">
            <button className="group border border-[#01261E] flex items-center justify-between w-[48%] py-3 px-4 rounded-full hover:bg-[#01261E] hover:text-[#fff]">
              <span className="font-[400] text-[13px] ">{data.footerButton}</span>
              <img
                src="/readers/arrow-right.png"
                className="block group-hover:hidden w-[18px] h-[18px]"
                alt="arrow"
              />
              <img
                src="/readers/arrow-right-white.png"
                className="hidden group-hover:block w-[18px] h-[18px]"
                alt="arrow"
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