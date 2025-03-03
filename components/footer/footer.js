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
        <>
         {/* desktop footer */}
        <div className="hidden lg:block bg-[#01261E]">
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
                            
                                <div className="">
                                    <ul className="flex flex-col">
                                        <li className="text-xl font-semibold pb-4">
                                            Learn more
                                        </li>


                                        <li className="py-1 text-sm">
                                            <Link href="#" className="">About Us</Link>
                                        </li>
                                        <li className="py-1 text-sm">
                                            <Link href="#" className="">Readers</Link>
                                        </li>
                                        <li className="py-1 text-sm">
                                            <Link href="#" className="">Advertise</Link>
                                        </li>
                                        <li className="py-1 text-sm">
                                            <Link href="#" className="">Analytics</Link>
                                        </li>
                                    </ul>
                                
                                </div>
                           
                            
                                <div className="">
                                    <ul className="flex flex-col ml-4">
                                    <li className="text-xl font-semibold pb-4">
                                        More
                                    </li>


                                    <li className="py-1 text-sm">
                                        <Link href="#" className="">Blog</Link>
                                    </li>
                                    <li className="py-1 text-sm">
                                    <   Link href="#" className="">Careers</Link>
                                    </li>
                                    <li className="py-1 text-sm">
                                        <Link href="#" className="">Privacy Policy</Link>
                                    </li>
                                    <li className="py-1 text-sm">
                                        <Link href="#" className="">Legal</Link>
                                    </li>
                                    </ul>
                                    
                                </div>
                         
                            
                                <div className="">
                                    <ul className="flex flex-col ml-10">
                                    <li className="text-xl font-semibold pb-4">Contact Us</li>

                                    <li href="#" className="py-1 text-sm">
                                        <Link href="#" className="">info@sagravia.com</Link>
                                    </li>
                                    <li href="#" className="py-1 text-sm">
                                        <Link href="#" className="">+1-2345-6789</Link>
                                    </li>
                                    <li href="#" className="py-1 text-sm">
                                        <Link href="#" className="">123 Ave, New York, USA</Link>
                                    </li>
                                    </ul>    
                                </div>
                           
                        </div>
                    </div>
                </div>
                <div className="text-sm text-center text-[#ffffff] py-8">
                    <p>© 2024 Sagravia | All Rights Reserved</p>
                </div>
            </div>
        </div>

        {/*  mobile footer */}
        <div className="block lg:hidden bg-[#01261E]">
        <div className="md:px-14 py-12 ">
                    <div className="px-4 pb-10">
                        <div className="">
                            <Link href="/">
                                <div className="w-32 md:w-48">
                                <img src="/light-logo.png" alt="Logo" />
                                </div>
                            </Link>
                        </div>
                        {/* <div className="text-sm py-1 space-y-2">
                            <p>The place where newsletters live</p>
                            <p>Your trusted messenger</p>
                        </div> */}
                    </div>

                    {/* right */}
                    <div className=" px-6">
                        <div className="flex justify-between">
                            
                                <div className="">
                                    <ul className="flex flex-col">
                                        <li className="text-xl font-semibold pb-4">
                                            Learn more
                                        </li>


                                        <li className="py-1 text-sm">
                                            <Link href="#" className="">About Us</Link>
                                        </li>
                                        <li className="py-1 text-sm">
                                            <Link href="#" className="">Readers</Link>
                                        </li>
                                        <li className="py-1 text-sm">
                                            <Link href="#" className="">Advertise</Link>
                                        </li>
                                        <li className="py-1 text-sm">
                                            <Link href="#" className="">Analytics</Link>
                                        </li>
                                    </ul>
                                
                                </div>
                           
                            
                                <div className="">
                                    <ul className="flex flex-col mr-6">
                                    <li className="text-xl font-semibold pb-4">
                                        More
                                    </li>


                                    <li className="py-1 text-sm">
                                        <Link href="#" className="">Blog</Link>
                                    </li>
                                    <li className="py-1 text-sm">
                                    <   Link href="#" className="">Careers</Link>
                                    </li>
                                    <li className="py-1 text-sm">
                                        <Link href="#" className="">Privacy Policy</Link>
                                    </li>
                                    <li className="py-1 text-sm">
                                        <Link href="#" className="">Legal</Link>
                                    </li>
                                    </ul>
                                    
                                </div>
                         
                            </div>

                            <div className="pt-8 ">
                                    <ul className="flex flex-col ">
                                    <li className="text-xl font-semibold pb-4">Contact Us</li>

                                    <li href="#" className="py-1 text-sm">
                                        <Link href="#" className="">info@sagravia.com</Link>
                                    </li>
                                    <li href="#" className="py-1 text-sm">
                                        <Link href="#" className="">+1-2345-6789</Link>
                                    </li>
                                    <li href="#" className="py-1 text-sm">
                                        <Link href="#" className="">123 Ave, New York, USA</Link>
                                    </li>
                                    </ul>    
                                </div>
                    </div>

                    {/* social icons */}
                    <div>
                        <div className="pt-14 px-4 flex justify-center">
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

                    {/* divider */}
                    <div className="border-b px-4 py-2 mx-6"></div>

                    <div className="text-xs text-center text-[#95A1BB] py-4">
                        <p>© 2024 Sagravia | All Rights Reserved</p>
                    </div>
            </div>
        </div>
        </>
    )
}