

export default function Socials() {
    const socialMedia = [
        {
            name: "PS",
            image: "/socialimgs/s-ps.png",
            instaProfileLink: "https://www.instagram.com/presidentialsummary/",
            LDN: "@presidential",
            instagramIcon:"/socialimgs/insta-icon-1.jpg",
        },
        {
            name: "GS",
            image: "/socialimgs/s-gp.png",
            instaProfileLink: "https://www.instagram.com/geopoliticalsummary/",
            LDN: "@geopolitical",
            instagramIcon:"/socialimgs/insta-icon-1.jpg",
        },
        {
            name: "LS",
            image: "/socialimgs/s-ls.png",
            instaProfileLink: "https://www.instagram.com/readlongandshort/?igsh=ZzhoeGR3YXZnbzA4#",
            LDN: "@longandshort",
            instagramIcon:"/socialimgs/insta-icon-1.jpg",
        },
        {
            name: "BH",
            image: "/socialimgs/s-bh.png",
            instaProfileLink: "https://www.instagram.com/businesshistory/",
            LDN: "@businesshistory",
            instagramIcon:"/socialimgs/insta-icon-1.jpg",
        },
    ];

    return (
        <div className="bg-[#F6F5F1] text-white px-4 pb-20 pt-20 lg:py-28 lg:px-16  mx-auto">
            {/* Header */}
            <div className="lg:pb-16 pb-6">
                <h2 className="text-4xl font-semibold text-black">
                    12,000 social impressions every day
                </h2>
            </div>

            {/* Portrait Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {socialMedia.map((social, index) => (
                    

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
                                className="object-cover rounded-lg w-full h-full"
                            />
                        </a>
                        {/* Text Section */}
                        <div className="mt-4 w-full text-left">
                            <a
                                href={social.instaProfileLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-2"
                            >
                                
                                <img
                                    src={social.instagramIcon}
                                    alt="Instagram"
                                    className="w-5 h-5"
                                />
                                {/* Text */}
                                <h2 className="text-lg font-semibold text-black">
                                    {social.LDN}
                                </h2>
                            </a>
                        </div>

                    </div>

                ))}
            </div>
        </div>
    );
}
