export default function ReadersMobileNewsletterCards() {
    const newsLetterData = [
        {
            domain: "NEWS",
            name: "Presidential Summary",
            image: "/readers/ps-image.png",
            content: "Through in-depth analysis and well-researched content, we make historical knowledge accessible to professionals, students, and anyone interested in political history.",
            learnMore: "https://www.presidentialsummary.com/"
        },
        {
            domain: "Politics",
            name: "Geopolitical Summary",
            image: "/readers/gs-card-for-mobile.jpg",
            content: "By examining key political, economic, and security dynamics, we help readers stay informed about the forces driving international relations and decision-making.",
            learnMore: "https://www.presidentialsummary.com/"
        },
        {
            domain: "Business",
            name: "Business History",
            image: "/readers/bh-card-for-mobile.jpg",
            content: "Our mission is to make historical business knowledge accessible and relevant for entrepreneurs, executives, researchers.",
            learnMore: "https://www.presidentialsummary.com/"
        },
        {
            domain: "Finance",
            name: "Long and Short",
            image: "/readers/ls.jpg",
            content: "We cover key topics such as market trends, investment strategies, risk management, and economic developments, delivering in-depth analysis in a format that is accessible.",
            learnMore: "https://www.presidentialsummary.com/"
        },
        {
            domain: "Entertainment",
            name: "Movie Suggestions",
            image: "/readers/ms-card-for-mobile.jpg",
            content: "Through in-depth analysis and well-researched content, we make historical knowledge accessible to professionals, students, and anyone interested in political history.",
            learnMore: "https://www.presidentialsummary.com/"
        },
    ];

    return (
        <div className="space-y-4">
        {newsLetterData.map((item, index) => (
            <div
                key={index}
                className="relative border border-[#E5E5E5] overflow-hidden flex items-start p-3 rounded-[2px]"
            >
                
                {/* <button className="absolute top-2 right-2 w-6 h-6 flex items-center justify-center bg-gray-200 rounded-full text-lg font-bold text-gray-700">
                    +
                </button> */}
                <button className="absolute top-3 right-2 w-27 h-27 flex items-center justify-center bg-gray-200 rounded-full">
                    <img
                        src="/readers/plus-icon-readers-mobile.jpg"
                        alt="Plus Icon"
                        className="w-27 h-27"
                    />
                </button>

               
                <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover flex-shrink-0 mt-2"
                />

            
                <div className="ml-4 flex flex-col justify-between pr-6">
                    <div>
                        <span className="text-[10px] font-[normal] text-[#000000A8]">{item.domain}</span>
                        <h2 className="text-[#2C2C2C] text-[17px] font-[600] leading-[101%] mt-1">{item.name}</h2>
                        <p className="text-[13px] text-[#363636] font-[400] leading-[116%] mt-1">{item.content}</p>
                    </div>
                    <a
                        href={item.learnMore}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[13px] text-[#01261E] font-[500] mt-2 underline"
                    >
                        Learn more
                    </a>
                </div>
            </div>
        ))}
    </div>
    );
}
