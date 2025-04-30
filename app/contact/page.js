
import { BiBorderRadius } from "react-icons/bi";
import ContactComboBox from "../../components/contactComboBox/contactComboBox";
import ContactPhoneNumberSelection from "../../components/contactPhoneNumberSection/contactPhoneNumberSelection";
import ContactRadioButtonsInput from "../../components/contactRdaioButtonsInput/contactRadioButtonsInput";
import ContactMessage from "../../components/contactMessage/contactMessage";


export default function Contact(){

    return(
       
        <div className="bg-[#FAFAFA]">
          <div className="md:px-4 lg:pt-20 pt-10">
            {/* header */}
            <div className="">
                <div className="flex justify-center text-[44px] leading-normal font-[GT-Super-Ds-Trial] text-[#01261E] py-4">Get in Touch With Us</div>
                <div className="flex justify-center text-[18px] font-[500] text-[#717171] leading-normal">Any question or remarks? Just write us a message!</div>
            </div>

            <div className="py-16 md:px-20 mx-auto">
                <div className="flex space-x-2 bg-[#fff] p-2 rounded-[10px]" style={{ boxShadow: '0px 0px 60px 30px rgba(0, 0, 0, 0.03)' }}
                >
                    {/* left */}
                    <div className=" w-[40.5%] bg-[#01261E] rounded-[10px] px-12 py-10">
                        <div>
                            <h1 className="text-[#fff] text-[28px] leading-normal font-[600] ">Contact Information</h1>
                            <p className="text-[#C9C9C9] text-[18px] font-[400] leading-normal pt-2">Say something to start a live chat!</p>
                        </div>
                        <div className="pt-16">
                            <div className="flex pb-10">
                                <img
                                src="/contact/call.jpg"
                                alt="call"
                                className="w-[24] h-[24]"/>
                                <p className="ml-6 text-[#fff] text-[16px] leading-normal font-[400]">+1012 3456 789</p>
                            </div>
                            <div className="flex pb-10">
                                <img
                                src="/contact/sms.jpg"
                                alt="call"
                                className="w-[24] h-[24]"/>
                                <p className="ml-6 text-[#fff] text-[16px] leading-normal font-[400]">+1012 demo@gmail.com</p>
                            </div>
                            <div className="flex pb-10">
                                <img
                                src="/contact/location.jpg"
                                alt="call"
                                className="w-[24] h-[24]"/>
                                <p className="ml-6 text-[#fff] text-[16px] leading-normal font-[400]">132 Dartmouth Street Boston, Massachusetts 02156 United States</p>
                            </div>

                            {/* flex button */}
                            <div className="">
                            <div className="flex gap-4">
                                <button className="flex  items-center gap-2 px-4 py-2 bg-[#DAEBE8] text-[14px] text-[#01261E] rounded-full leading-normal font-[500]">
                                    <span className="w-2 h-2 bg-[#01261E] rounded-full"></span>
                                    Schedule a call
                                </button>
                                <button className="flex items-center gap-2 px-4 py-2 bg-[#DAEBE8] text-[14px] text-[#01261E] rounded-full leading-normal font-[500]">
                                    Schedule a call
                                    <span className="w-2 h-2 bg-[#01261E] rounded-full"></span>
                                </button>
                                </div>
                            </div> 

                            {/* social icons */}
                        </div>
                    </div>

                    {/* right */}
                    <div className="w-[59.5%] px-12 py-10">
                        <form>
                            {/* row-1 */}
                            <div className="flex flex-col md:flex-row gap-8 text-[#8D8D8D]">
                                <div className="flex-1 pb-10">
                                    <label className="block mb-1 text-[12px] font-[500] leading-[20px]">Full Name <span className="text-[12px] text-[#EB5757]">*</span> </label>
                                    <input
                                        type="text"
                                        placeholder="Enter your full name"
                                        className="w-full text-[14px] border-b border-[#8D8D8D] p-2 focus:outline-none focus:border-b-1 focus:border-[#01261E]"
                                    />
                                    </div>
                                    <div className="flex-1">
                                    <label className="block mb-1 text-[12px] font-[500] leading-[20px]">Email <span className="text-[#EB5757]">*</span></label>
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="w-full text-[14px] border-b border-[#8D8D8D] p-2 focus:outline-none focus:border-b-1 focus:border-[#01261E]"
                                    />
                                    </div>
                                </div>

                                {/* Row 2*/}
                                <div className="flex flex-col md:flex-row gap-8 text-[#8D8D8D]">
                                    <div className="flex-1">
                                    <label className="block mb-1 text-[12px] font-[500] leading-[20px]">Phone Number <span className="text-[#EB5757]">*</span></label>
                                    {/* <input
                                        type="tel"
                                        placeholder="Enter your phone number"
                                        className="w-full text-[14px] border-b border-[#8D8D8D] p-2 focus:outline-none focus:border-b-1 focus:border-[#01261E]"
                                    /> */}
                                    <ContactPhoneNumberSelection/>
                                    </div>
                                    <div className="flex-1">
                                    <label className="block text-[12px] font-[500] leading-[20px]">
                                        How did you find us?
                                    </label>
                                    <ContactComboBox />
                                    </div>

                            </div>
                        </form>

                    {/* contact radio button */}
                    <ContactRadioButtonsInput/>

                    {/*  message */}
                    <div>
                       <ContactMessage/>
                    </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
    )
    
}