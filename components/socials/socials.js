

// export default function Socials() {
//     const socialMedia = [
//         {
//             name: "PS",
//             image: "/socialimgs/s-ps.png",
//             instaProfileLink: "https://www.instagram.com/presidentialsummary/",
//             LDN:"@XYZABC ",
//         },
//         {
//             name: "GS",
//             image: "/socialimgs/s-gp.png",
//             instaProfileLink: "https://www.instagram.com/geopoliticalsummary/",
//             LDN:"@XYZABC ",
//         },
//         {
//             name: "LS",
//             image: "/socialimgs/s-ls.png",
//             instaProfileLink: "https://www.instagram.com/readlongandshort/?igsh=ZzhoeGR3YXZnbzA4#",
//             LDN:"@XYZABC ",
//         },
//         {
//             name: "BH",
//             image: "/socialimgs/s-bh.png",
//             instaProfileLink: "https://www.instagram.com/businesshistory/",
//             LDN:"@XYZABC ",
//         },
//     ];

//     return (
//         <div className="text-white px-4 md:px-16 py-20 lg:py-4 md:pb-20 lg:pb-20 mx-auto lg:min-h-[650px]">
//             {/* Header */}
//             <div className="mb-16 mt-14">
//                 <h2 className="text-4xl font-semibold text-black">
//                     12,000 social impressions every day
//                 </h2>
//             </div>

//             {/* Four Portrait Cards */}
//             <div className="flex justify-between gap-6">
//                 {socialMedia.map((social, index) => (
//                     <>
//                         <a
//                             key={index}
//                             href={social.instaProfileLink}
//                             target="_blank"
//                             rel="noopener noreferrer"
                            
//                         >
//                             <img
//                                 src={social.image}
//                                 alt={social.name}
//                                 className="object-cover rounded-lg w-full h-full"
//                             />
                            
//                         </a>
                       
//                     </>
//                 ))}
//             </div>
//         </div>
//     );
// }

export default function Socials() {
    const socialMedia = [
        {
            name: "PS",
            image: "/socialimgs/s-ps.png",
            instaProfileLink: "https://www.instagram.com/presidentialsummary/",
            LDN: "@presidential",
            instagramIcon:"/socialimgs/instagram-icon.png",
        },
        {
            name: "GS",
            image: "/socialimgs/s-gp.png",
            instaProfileLink: "https://www.instagram.com/geopoliticalsummary/",
            LDN: "@geopolitical",
            instagramIcon:"/socialimgs/instagram-icon.png",
        },
        {
            name: "LS",
            image: "/socialimgs/s-ls.png",
            instaProfileLink: "https://www.instagram.com/readlongandshort/?igsh=ZzhoeGR3YXZnbzA4#",
            LDN: "@longandshort",
            instagramIcon:"/socialimgs/instagram-icon.png",
        },
        {
            name: "BH",
            image: "/socialimgs/s-bh.png",
            instaProfileLink: "https://www.instagram.com/businesshistory/",
            LDN: "@businesshistory",
            instagramIcon:"/socialimgs/instagram-icon.png",
        },
    ];

    return (
        <div className="bg-[#F6F5F1] text-white px-4 md:px-16 py-20 lg:py-4 md:pb-20 lg:pb-20 mx-auto lg:min-h-[650px]">
            {/* Header */}
            <div className="mb-16 mt-14">
                <h2 className="text-4xl font-semibold text-black">
                    12,000 social impressions every day
                </h2>
            </div>

            {/* Portrait Cards */}
            <div className="flex justify-between gap-6">
                {socialMedia.map((social, index) => (
                    

                    <div key={index} className="w-70 h-[520px] flex flex-col items-center">
                 
                        <a
                            href={social.instaProfileLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full h-full"
                        >
                            <img
                                src={social.image}
                                alt={social.name}
                                className="object-cover rounded-lg w-fit h-full"
                            />
                        </a>
                        {/* Text Section */}
                        <div className="mt-8 w-full text-left">
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
