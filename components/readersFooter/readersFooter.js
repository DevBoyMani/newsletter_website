import { FaStar } from "react-icons/fa";
import { ReadersSubscribe } from "../readersSubscribe/readersSubscribe";

const feedbackData = [
  {
    userName: "Ava Wilson",
    feedback:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.",
  },
  {
    userName: "Jaxx Sanchez",
    feedback:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.",
  },
  {
    userName: "Ava Wilson",
    feedback:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.",
  },
  {
    userName: "Jaxx Sanchez",
    feedback:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.",
  },
];

const socialMediaIcons=[
  {name:"x",src:"/readers/x.png",href:"https://www.presidentialsummary.com/"},
  {name:"insta",src:"/readers/insta.png",href:"https://www.presidentialsummary.com/"},
  {name:"ln",src:"/readers/ln.png",href:"https://www.presidentialsummary.com/"},
  {name:"tiktok",src:"/readers/tiktok.png",href:"https://www.presidentialsummary.com/"},
  {name:"t",src:"/readers/t.png",href:"https://www.presidentialsummary.com/"},

]

export default function ReadersFooter() {
  return (
    <>
      {/* review section */}
    <div className="bg-[#01261E]">
        <div className="px-4 md:px-16 py-10 md:pt-20 mx-auto ">

            <div className="flex flex-col justify-center max-w-[730px] mx-auto text-center pb-10">
                <h2 className="text-[#FAFAFA] text-[56px] leading-[70px] font-[400] font-[GT-Super-Ds-Trial]">
                    Sagravia is trusted by 200,000+ people worldwide
                </h2>
            </div>

            <div className="relative ">
            <div className="absolute top-0 left-0 h-full w-60 "  style={{
            background: "linear-gradient(90deg, #01261E 30.88%, rgba(1, 38, 30, 0) 96.5%)", }} />
        
          <div className="absolute top-0 right-0 h-full w-60" style={{background: "linear-gradient(270deg, #01261E 30.88%, rgba(1, 38, 30, 0) 96.5%)",}}/>

                <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 rounded-lg z-10 ">
                {feedbackData.map((item, index) => (
                    <div key={index} className="bg-[#01261E] p-6 rounded-lg border border-[#FFFFFF33]">
                        <div className="flex justify-center lg:justify-start mb-2">
                            {[...Array(5)].map((_, id) => (
                            <FaStar key={id} className="text-xl text-[#C7A262] mr-2" />
                            ))}
                        </div>
                        <div className="text-[#ffffff]">
                            <p className=" text-[16px] ">{item.feedback}</p>
                            <p className=" text-[16px] py-4">{item.userName}</p>
                        </div>
                    </div>
                ))}
              </div>
            </div>


            {/* footer */}
            <div className="relative bg-[#01261E]">
              {/* Background Logo */}
              <div className="absolute -left-16 top-4 opacity-[100%] z-10">
                <img
                  src="/readers/sagravia-footer-logo.png"
                  alt="background logo"
                  className="w-82"
                />
              </div>

              {/* Foreground Content */}
              <div className="py-20 flex justify-center relative z-10">
                <img
                  src="/readers/sagravia-big-text.png"
                  alt="sagravia"
                  width={1262}
                />
              </div>

              <div className="px-4 py-16 text-white relative z-10">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-10">
                  
                  {/* left section */}
                  <div className="lg:w-1/2">
                    <h2 className="text-[28px] lg:text-[36px] font-[400] mb-6">
                      Subscribe to get tips and tactics to grow the way you want.
                    </h2>
                    <ReadersSubscribe />
                  </div>

                  {/* right section */}
                  <div className="lg:w-1/2 flex justify-end text-[16px]">
                    <ul className="space-y-2">
                      <li>Blog</li>
                      <li>Careers</li>
                      <li>Privacy Policy</li>
                      <li>Legal</li>
                    </ul>
                    <ul className="space-y-2 ml-36">
                      <li>About Us</li>
                      <li>For Readers</li>
                      <li>Advertise</li>
                      <li>Analytics</li>
                      <li>Contact Sales</li>
                    </ul>
                  </div>

                </div>
              </div>
            </div>

              <div>
                <div className="flex justify-end border-b pb-8">
                  {socialMediaIcons.map((item,index)=>(
                    <div className="px-4" key={index}>
                      <a href={item.href}>
                      <img
                      src={item.src}
                      alt={item.name}
                      className="w-[32] h-[32]"/>
                      </a>
                    </div>
                    
                  ))}
                </div>
                <div className="flex justify-center py-10">
                  <p className="text-[14px] text-[#ffffff]">
                  © 2024 Sagravia | All Rights Reserved
                  </p>
                </div>
              </div>
              {/* /footer */}

        </div>
    </div>
    </>
  );
}
