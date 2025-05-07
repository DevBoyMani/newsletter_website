import { ArrowRight } from "lucide-react";

export default function ReadersNewsletters() {
  const datas = [
    {
      headerButton: "Subscribe",
      image: "/readers/ps.png",
      topic: "News",
      when: "weekly",
      heading: "Presidential Summary",
      paragraph:
        "Through in-depth analysis and well-researched content, we make historical knowledge accessible to professionals, students, and anyone interested in political history.",
      footerButton: "Learn More",
    },
    {
      headerButton: "Subscribe",
      image: "/readers/ps.png",
      topic: "News",
      when: "weekly",
      heading: "Presidential Summary",
      paragraph:
        "Through in-depth analysis and well-researched content, we make historical knowledge accessible to professionals, students, and anyone interested in political history.",
      footerButton: "Learn More",
    },
    {
      headerButton: "Subscribe",
      image: "/readers/ps.png",
      topic: "News",
      when: "weekly",
      heading: "Presidential Summary",
      paragraph:
        "Through in-depth analysis and well-researched content, we make historical knowledge accessible to professionals, students, and anyone interested in political history.",
      footerButton: "Learn More",
    },
    {
      headerButton: "Subscribe",
      image: "/readers/ps.png",
      topic: "News",
      when: "weekly",
      heading: "Presidential Summary",
      paragraph:
        "Through in-depth analysis and well-researched content, we make historical knowledge accessible to professionals, students, and anyone interested in political history.",
      footerButton: "Learn More",
    },
    {
      headerButton: "Subscribe",
      image: "/readers/ps.png",
      topic: "News",
      when: "weekly",
      heading: "Presidential Summary",
      paragraph:
        "Through in-depth analysis and well-researched content, we make historical knowledge accessible to professionals, students, and anyone interested in political history.",
      footerButton: "Learn More",
    },
  ];
  return (
    <>
      <div className="bg-[#FAFAFA]">
        <div className="px-4 md:px-16">
          <p className="text-[#000] font-Manrope text-16px font-[400]">
            Proin et pulvinar risus, quis hendrerit nisi. Vestibulum eget
            sollicitudin odio. Maecenas tellus sem, fermentum id aliquam et,
            auctor id libero. Interdum et malesuada fames ac ante ipsum primis
            in faucibus. Sed eu nulla felis. Quisque eget viverra massa. Donec
            posuere, sapien vel facilisis dictum, turpis mi tempus mauris, in
            ullamcorper libero turpis sed mauris. Nulla eu blandit nunc, ut
            suscipit dolor. Quisque dictum pellentesque tellus sed porta.
          </p>
        </div>

        <div className="px-4 md:px-16 py-10 ">
          <div className="grid gap-6 lg:grid-cols-3">
            {datas.map((data, index) => (
              <div
                key={index}
                className="group/card flex flex-col items-start transition-all duration-300"
              >
                {/* Image wrapper with relative positioning */}
                <div className="w-full max-h-[276px] relative">
                  <img
                    src={data.image}
                    alt={data.heading}
                    className="w-full h-full object-cover rounded-t-lg"
                  />

                  <button className="absolute top-4 left-4 bg-[#FFFFFFB3] text-black rounded-full h-[40px] overflow-hidden transition-all duration-300 ease-in-out flex items-center justify-center w-[120px] group-hover/card:w-[40px] group-hover/card:h-[40px] px-4">
                    <span className="text-[14px] group-hover/card:hidden flex items-center gap-2">
                      Subscribe <span className="text-2xl pb-1">+</span>
                    </span>
                    <span className="text-2xl pb-1 hidden group-hover/card:block">
                      +
                    </span>
                  </button>
                </div>

                {/* Card content */}
                <div className=" w-full border px-4 rounded-b-lg py-4 font-Manrope">
                  <div className="relative h-6 overflow-hidden">
                    <span className="block absolute inset-0 transform transition-transform duration-300 translate-y-0 group-hover/card:-translate-y-6 text-[13px] text-[#000000a8]">
                      {data.topic}
                    </span>
                    <span className="block absolute inset-0 transform transition-transform duration-300 translate-y-6 group-hover/card:translate-y-0 text-[13px] text-[#000000a8]">
                      {data.when}
                    </span>
                  </div>

                  <div className="text-[22px] text-[#2C2C2C]">
                    {data.heading}
                  </div>
                  <div className="w-[85%] text-[15px] font-[400] text-[#5A5A5A] mt-2">
                    {data.paragraph}
                  </div>
                  <div className="mt-4">
                    <button className=" border border-[#01261E] flex items-center justify-between w-[60%] py-2 px-4 rounded-full hover:bg-[#01261E] hover:text-white text-[#01261E]">
                      <span className="font-[400] text-[13px]">
                        {data.footerButton}
                      </span>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 60 32"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-[30px] h-[28px]"
                      >
                        <line x1="10" y1="16" x2="50" y2="16" />
                        <polyline points="42 6 54 16 42 26" />
                      </svg>



                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
