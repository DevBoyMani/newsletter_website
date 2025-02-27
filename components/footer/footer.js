import Link from "next/link";

export default function Footer(){
    const socialIcons =[
        {name:"instagram",icon:"/icon-instagram.png",url:""},
        {name:"facebook",icon:"/icon-fb.png",url:""},
        {name:"linedIn",icon:"/icon-In.png",url:""},
        {name:"twitter",icon:"/icon-x.png",url:""},
        {name:"youtube",icon:"/icon-yu.png",url:""},
    ]
    return(
        // desktop footer
        <div className="bg-[#01261E]">
            <div className="md:px-14 py-12 ">
                <div className="flex justify-between border-b">
                    {/* left */}
                    <div className="">
                        <div className="pt-2 pb-6">
                            <Link href="/">
                                <div className="w-32 md:w-48">
                                <img src="/light-logo.png" alt="Logo" />
                                </div>
                            </Link>
                        </div>
                        <div className="text-sm py-1 space-y-2">
                            <p>The place where newsletters live</p>
                            <p>Your trusted messenger</p>
                        </div>
                        <div className="py-8">
                            <div className="flex space-x-4">
                                {socialIcons.map((icons, index) => (
                                    <a key={index} href={icons.url} target="_blank">
                                        <img
                                    
                                    src={icons.icon}
                                    alt={icons.name}
                                    className="w-8 h-8 hover:opacity-80 cursor-pointer"
                                    />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* right */}
                    <div className="mr-10">
                        <div className="flex justify-start space-x-8">
                            <div>
                                <div className="flex flex-col">
                                    <h6 className="text-xl font-semibold pb-4">Learn more</h6>
                                    <a href="#" className="py-1 text-sm">About Us</a>
                                    <a href="#" className="py-1 text-sm">Readers</a>
                                    <a href="#" className="py-1 text-sm">Advertise</a>
                                    <a href="#" className="py-1 text-sm">Analytics</a>
                                
                                </div>
                            </div>
                            <div>
                                <div className="flex flex-col ml-4">
                                    <h6 className="text-xl font-semibold pb-4">More</h6>
                                    <a href="#" className="py-1 text-sm">Blog</a>
                                    <a href="#" className="py-1 text-sm">Careers</a>
                                    <a href="#" className="py-1 text-sm">Privacy Policy</a>
                                    <a href="#" className="py-1 text-sm">Legal</a>
                                    
                                </div>
                            </div>
                            <div className="">
                                <div className="flex flex-col ml-10">
                                    <h6 className="text-xl font-semibold pb-4">Contact Us</h6>
                                    <a href="#" className="py-1 text-sm">info@sagravia.com</a>
                                    <a href="#" className="py-1 text-sm">+1-2345-6789</a>
                                    <a href="#" className="py-1 text-sm">123 Ave, New York, USA</a>    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-sm text-center text-[#ffffff] py-8">
                    <p>© 2024 Sagravia | All Rights Reserved</p>
                </div>
            </div>
        </div>
    )
}