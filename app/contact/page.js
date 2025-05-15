"use client";

import { useState } from "react";
import { BiBorderRadius } from "react-icons/bi";
import ContactComboBox from "../../components/contactComboBox/contactComboBox";
import ContactPhoneNumberSelection from "../../components/contactPhoneNumberSection/contactPhoneNumberSelection";
import ContactRadioButtonsInput from "../../components/contactRdaioButtonsInput/contactRadioButtonsInput";
import ContactMessage from "../../components/contactMessage/contactMessage";
import Footer from "../../components/footer/footer";


const socialMediaIcons=[
    {name:"x",src:"/readers/x.png",href:"https://www.presidentialsummary.com/"},
    {name:"insta",src:"/readers/insta.png",href:"https://www.presidentialsummary.com/"},
    {name:"ln",src:"/readers/ln.png",href:"https://www.presidentialsummary.com/"},
    {name:"tiktok",src:"/readers/tiktok.png",href:"https://www.presidentialsummary.com/"},
    {name:"t",src:"/readers/t.png",href:"https://www.presidentialsummary.com/"},
  
  ]


export default function Contact(){

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        foundUsVia: "",
        preferredContact: "",  // from Radio button
        message: "",
      });
    
    const handleChange = (key,value)=>{
        setFormData((prev)=>({
            ...prev,
            [key]: value,
        }))
    
    }
    
    console.log(formData);

    const [errors, setErrors] = useState({});
      
    const handleSubmit = (e) => {
        e.preventDefault();
      
        const newErrors = {};
      
        // Full name validation
        if (!formData.fullName.trim()) {
          newErrors.fullName = "Full name must be at least 3 characters";
        } 
        
        // else if (formData.fullName.length < 3) {
        //   newErrors.fullName = "Full name must be at least 3 characters";
        // }
      
        // Email validation
        if (!formData.email.trim()) {
          newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
          newErrors.email = "Please enter a valid email address";
        }
      
        // Phone validation
        if (!formData.phone.trim()) {
          newErrors.phone = "Phone number is required";
        } else if (!/^\+?[0-9\s-]{7,15}$/.test(formData.phone)) {
          newErrors.phone = "Please enter a valid phone number";
        }
      
        // Optional: Check for preferredContact
        if (!formData.preferredContact.trim()) {
          newErrors.preferredContact = "Please select a preferred contact method";
        }
      
        // Optional: Check for message
        if (!formData.message.trim()) {
          newErrors.message = "Please enter your message";
        }
      
        if (Object.keys(newErrors).length > 0) {
          setErrors(newErrors);
          return;
        }
      
        setErrors({});
        console.log("Submitted data:", formData);
        localStorage.setItem("contactFormData", JSON.stringify(formData));
        alert("Form data saved locally!");
      };
      
      

    return(
       
        <>
        {/* desktop view */}
        <div className="hidden lg:block bg-[#FAFAFA]">
          <div className="md:px-4 lg:pt-20 pt-10">
            {/* header */}
            <div className="">
                <div className="flex justify-center text-[44px] leading-normal font-[GT-Super-Ds-Trial] text-[#01261E] py-4">Get in Touch With Us</div>
                <div className="flex justify-center text-[18px] font-[500] text-[#717171] leading-normal">Any question or remarks? Just write us a message!</div>
            </div>
            {/* contact form */}
            <div className="py-16 md:px-20 mx-auto">
                <div className="flex space-x-2 bg-[#fff] p-2 rounded-[10px]" style={{ boxShadow: '0px 0px 60px 30px rgba(0, 0, 0, 0.03)' }}
                >
                    {/* left */}
                    <div className="relative w-[40.5%] bg-[#01261E] rounded-[10px] px-12 py-10 overflow-hidden">

                        <div className="absolute bottom-0 right-0 h-auto opacity-100 pointer-events-none z-0">
                                <img
                                    src="/contact/contact-background-circle.png"
                                    alt="background logo"
                                    className="w-52"
                                />
                        </div>
                        <div>
                            <h1 className="text-[#fff] text-[28px] leading-normal font-[600] ">Contact Information</h1>
                            <p className="text-[#C9C9C9] text-[18px] font-[400] leading-normal pt-2">Say something to start a live chat!</p>
                        </div>
                        <div className="relative pt-16 z-10">
                            <div className="flex pb-10">
                                <img
                                src="/contact/call.png"
                                alt="call"
                                className="w-[24px] h-[24px]"/>
                                <p className="ml-6 text-[#fff] text-[16px] leading-normal font-[400]">+1012 3456 789</p>
                            </div>
                            <div className="flex pb-10">
                                <img
                                src="/contact/sms.jpg"
                                alt="sms"
                                className="w-[24px] h-[24px]"/>
                                <p className="ml-6 text-[#fff] text-[16px] leading-normal font-[400]">demo@gmail.com</p>
                            </div>
                            <div className="flex pb-10">
                                <img
                                src="/contact/location.jpg"
                                alt="location"
                                className="w-[24px] h-[24px] object-cover"/>
                                <p className="ml-6 text-[#fff] text-[16px] leading-normal font-[400]">132 Dartmouth Street Boston, Massachusetts 02156 United States</p>
                            </div>

                            {/* flex button */}
                       <div className="">
                            <div className="flex flex-wrap md:flex-nowrap w-full gap-2">
                                {/* Left Button */}
                                <button className="group relative flex items-center justify-center md:w-[40%] lg:w-[45%] gap-2 py-2 rounded-full overflow-hidden text-sm md:text-[14px] lg:text-[16px] font-[500] leading-normal text-[#01261E] bg-[#DAEBE8] transition-all duration-500 ease-in-out hover:border-none hover:bg-[#01261E]">
                                {/* Background hover effect */}
                                <span className="absolute left-0 top-0 h-full w-full scale-0 group-hover:scale-100 origin-[24px] rounded-full bg-[#01261E] transition-transform duration-500 ease-in-out z-10" />

                                {/* Dot */}
                                <span className="relative -left-2 z-10 w-2 h-2 bg-[#01261E] rounded-full group-hover:opacity-0 transition-opacity duration-500 ease-in-out"></span>

                                {/* Text wrapper */}
                                <span className="relative flex items-center min-w-0 whitespace-nowrap z-10 overflow-hidden">
                                    {/* Normal state text */}
                                    <span className="block group-hover:opacity-0 ">
                                    Schedule a call
                                    </span>

                                    {/* Hover state sliding text */}
                                    <span className="absolute left-0 top-0 translate-x-full group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out whitespace-nowrap text-white pr-6">
                                    Schedule a call
                                    </span>
                                </span>

                                {/* Arrow */}
                                <span className="relative group-hover:inline hidden z-10 text-[#01261E] group-hover:text-white transition-colors duration-500 ease-in-out">→</span>
                                </button>

                                {/* Right Button */}
                                <button className="group relative flex items-center justify-center md:w-[40%] lg:w-[45%] gap-2 py-2 rounded-full overflow-hidden text-sm md:text-[14px] lg:text-[16px] font-[500] leading-normal text-[#01261E] bg-[#DAEBE8] transition-all duration-500 ease-in-out hover:border-none hover:bg-[#01261E]">
                                {/* Background hover effect */}
                                <span className="absolute right-0 top-0 h-full w-full scale-0 group-hover:scale-100 origin-[155px] rounded-full bg-[#01261E] transition-transform duration-500 ease-in-out z-10" />

                                <span className="relative -left-2 group-hover:inline hidden z-10 text-[#01261E] group-hover:text-white transition-colors duration-500 ease-in-out">→</span>

                                {/* Text wrapper */}
                                <span className="relative flex items-center min-w-0 whitespace-nowrap z-10 overflow-hidden">
                                    {/* Normal state text */}
                                    <span className="block group-hover:opacity-0 ">
                                    Chat with us
                                    </span>

                                    {/* Hover state sliding text */}
                                    <span className="absolute right-0 top-0 flex items-center -translate-x-full group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out whitespace-nowrap text-white">
                                    <span>Chat with us</span>
                                    </span>
                                </span>

                                {/* Dot */}
                                <span className="relative -right-3 z-10 w-2 h-2 bg-[#01261E] rounded-full group-hover:opacity-0 transition-opacity duration-500 ease-in-out"></span>
                                </button>
                            </div>
                            </div>

                            {/* social icons */}
                            <div>
                                <div>
                                    <div className="pt-28 flex justify-start pb-1">
                                            <div className="flex space-x-6 ">
                                                {socialMediaIcons.map((icons, index) => (
                                                    <a key={index} href={icons.href} target="_blank">
                                                        <img
                                                    
                                                    src={icons.src}
                                                    alt={icons.name}
                                                    className="w-6 h-6 cursor-pointer"
                                                    />
                                                    </a>
                                                ))}
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* right */}
                    <div className="w-[59.5%] px-12 py-10">
                        <form>
                            {/* row-1 */}
                            <div className="flex flex-col md:flex-row gap-8 text-[#8D8D8D]">
                                <div className="flex-1 pb-10 group focus-within:text-[#01261E]">
                                    <label className="block mb-2 text-[16px] font-[500] leading-[20px]">Full Name <span className=" text-[#EB5757]">*</span> </label>
                                    <input
                                        type="text"
                                        placeholder="Enter your full name"
                                        className={`w-full text-[14px] border-b border-[#8D8D8D] p-2 focus:outline-none focus:border-b-1 group focus:border-[#01261E] focus:placeholder-transparent ${
                                            formData.fullName ? 'text-[#1A1A1A]' : 'text-[#8D8D8D]'
                                          }`}
                                        value={formData.fullName}
                                        onChange={(e) => handleChange("fullName", e.target.value)}
                                    />
                                    {errors.fullName && <p className="text-red-500 text-[12px]">{errors.fullName}</p>}
                                    </div>
                                    <div className="flex-1 group focus-within:text-[#01261E]">
                                    <label className="block mb-2 text-[16px] font-[500] leading-[20px]">Email <span className="text-[#EB5757]">*</span></label>
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className={`w-full text-[14px] border-b border-[#8D8D8D] p-2 focus:outline-none focus:border-b-1 focus:border-[#01261E] focus:placeholder-transparent ${formData.email ? 'text-[#1A1A1A]' : 'text-[#8D8D8D]' }`}
                                        value={formData.email}
                                        onChange={(e) => handleChange("email", e.target.value)}
                                    />
                                    {errors.email && <p className="text-red-500 text-[12px]">{errors.email}</p>}
                                    </div>
                                </div>

                                {/* Row 2*/}
                                <div className="flex flex-col md:flex-row gap-8 text-[#8D8D8D]">
                                    <div className="flex-1 group focus-within:text-[#01261E]">
                                    <label className="block mb-2 text-[16px] font-[500] leading-[20px]">Phone Number <span className="text-[#EB5757]">*</span></label>
                                    {/* <input
                                        type="tel"
                                        placeholder="Enter your phone number"
                                        className="w-full text-[14px] border-b border-[#8D8D8D] p-2 focus:outline-none focus:border-b-1 focus:border-[#01261E]"
                                    /> */}
                                    <ContactPhoneNumberSelection 
                                    value={formData.phone}
                                    onChange={(val) => handleChange("phone", val)}/>
                                    {errors.phone && <p className="text-red-500 text-[12px]">{errors.phone}</p>}

                                    </div>
                                    <div className="flex-1 group focus-within:text-[#01261E]">
                                    <label className="block text-[16px] font-[500] leading-[20px] mb-2">
                                        How did you find us?
                                    </label>
                                    <ContactComboBox 
                                    value={formData.foundUsVia}
                                    onChange={(val) => handleChange("foundUsVia", val)}/>
                                    </div>

                            </div>
                        </form>

                    {/* contact radio button */}
                    <ContactRadioButtonsInput
                     value={formData.preferredContact}
                     onChange={(val) => handleChange("preferredContact", val)}/>

                    {/*  message */}
                    <div className="">
                       <ContactMessage
                        value={formData.message}
                        onChange={(val) => handleChange("message", val)}/>
                    </div>

                    <div className="flex justify-end mt-4">
                        <button
                        onClick={handleSubmit}
                        className="px-14 py-3.5 bg-[#01261E] text-white text-[16px] font-[500] rounded-full hover:bg-[#014134] transition"
                        >
                        Send message
                        </button>
                    </div>
                    </div>
                </div>
            </div>
          </div>
        </div>

        {/* mobile view */}
        <div className="block lg:hidden bg-[#FAFAFA]">
        <div className="md:px-4 pt-10">
            {/* header */}
            <div className="w-full px-4 sm:px-0 pb-4">
                <div className="text-center">
                    <div className="text-[30px] leading-normal font-[GT-Super-Ds-Trial] text-[#01261E]">
                    Get in Touch With Us
                    </div>
                    <div className="mt-2 text-[14px] font-[500] text-[#717171] leading-normal max-w-[60%] mx-auto">
                    Any question or remarks? Just write us a message!
                    </div>
                </div>
                </div>

            {/* contact form */}
            <div className=" mx-auto px-4 pb-4">
                <div className=" bg-[#fff] p-2 rounded-[10px]" style={{ boxShadow: '0px 0px 60px 30px rgba(0, 0, 0, 0.03)' }}
                >
                   
                <div className=" bg-[#01261E] max-h-[387px] rounded-[5px]">
                        <div className="text-center pt-4">
                            <h1 className="text-[#fff] text-[20px] leading-normal font-[600] ">Contact Information</h1>
                            <p className="text-[#C9C9C9] text-[11px] font-[400] leading-normal pt-2">Say something to start a live chat!</p>
                        </div>
                        <div className="pt-4">
                            <div className="pb-4">
                                <div className="flex justify-center pb-2">
                                <img
                                src="/contact/call.png"
                                alt="call"
                                className="w-[24] h-[24]"/>
                                </div>
                                <div className="flex justify-center">
                                <p className="text-[#fff] text-[12px] leading-normal font-[400]">+1012 3456 789</p>
                                </div>
                            </div>
                            <div className="pb-4">
                                <div className="flex justify-center pb-2">
                                    <img 
                                    src="/contact/sms.jpg" alt="sma" 
                                    srcSet="/contact/sms.jpg" 
                                    className="w-[24] h-[24]" />
                                {/* <img
                                src="/contact/sms.jpg"
                                alt="call"
                                className="w-[24] h-[24]"/> */}
                                </div>
                                <div className="flex justify-center">
                                <p className="text-[#fff] text-[12px] leading-normal font-[400]">+1012 demo@gmail.com</p>
                                </div>
                            </div>
                            <div className="pb-0">
                                <div className="flex justify-center pb-2">
                                <img
                                src="/contact/location.jpg"
                                alt="call"
                                className="w-[24] h-[24]"/>
                                </div>
                                <div className="flex items-center justify-center">
                                    <p className=" text-[#fff] text-center text-[12px] leading-normal font-[400]">
                                        132 Dartmouth Street Boston,<br/> 
                                        Massachusetts 02156 United States</p>
                                </div>
                            </div>

                            {/* social icons */}
                            <div>
                                <div className="relative overflow-hidden pb-0">
                                    {/* Background Image Behind Icons */}
                                    <div className="absolute bottom-2 right-0 h-auto opacity-100 pointer-events-none z-0">
                                    <img
                                        src="/contact/contact-background-circle.png"
                                        alt="background logo"
                                        className="w-24 rounded-[5px]"
                                    />
                                    </div>

                                    {/* Social Icons on top of background */}
                                    <div className="pt-16 flex justify-center pb-6 relative z-10">
                                    <div className="flex space-x-6">
                                        {socialMediaIcons.map((icons, index) => (
                                        <a key={index} href={icons.href} target="_blank">
                                            <img
                                            src={icons.src}
                                            alt={icons.name}
                                            className="w-5 h-5 cursor-pointer"
                                            />
                                        </a>
                                        ))}
                                    </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="px-4 py-10">
                        <form>
                                <div className="text-[#8D8D8D]">
                                    <div className="pb-6 group focus-within:text-[#01261E]">
                                        <label className="block mb-1 text-[16px] font-[500] leading-[20px]">Full Name <span className="text-[12px] text-[#EB5757]">*</span> </label>
                                        <input
                                            type="text"
                                            placeholder="Enter your full name"
                                            className={`w-full text-[14px] border-b border-[#8D8D8D] p-2 focus:outline-none focus:border-b-1 group focus:border-[#01261E] focus:placeholder-transparent ${formData.fullName ? 'text-[#1A1A1A]' : 'text-[#8D8D8D]' }`}
                                            value={formData.fullName}
                                            onChange={(e) => handleChange("fullName", e.target.value)}
                                        />
                                        {errors.fullName && <p className="text-red-500 text-[12px]">{errors.fullName}</p>}
                                        </div>
                                        <div className="pb-6 group focus-within:text-[#01261E]">
                                        <label className="block mb-1 text-[16px] font-[500] leading-[20px]">Email <span className="text-[#EB5757]">*</span></label>
                                        <input
                                            type="email"
                                            placeholder="Enter your email"
                                            className={`w-full text-[14px] border-b border-[#8D8D8D] p-2 focus:outline-none focus:border-b-1 group focus:border-[#01261E] focus:placeholder-transparent ${formData.fullName ? 'text-[#1A1A1A]' : 'text-[#8D8D8D]' }`}
                                            value={formData.email}
                                            onChange={(e) => handleChange("email", e.target.value)}
                                        />
                                        {errors.email && <p className="text-red-500 text-[12px]">{errors.email}</p>}
                                        </div>
                                    </div>

                                    <div className="text-[#8D8D8D]">
                                        <div className="pb-6 focus-within:text-[#01261E]">
                                        <label className="block mb-1 text-[16px] font-[500] leading-[20px]">Phone Number <span className="text-[#EB5757]">*</span></label>
                                        {/* <input
                                            type="tel"
                                            placeholder="Enter your phone number"
                                            className="w-full text-[14px] border-b border-[#8D8D8D] p-2 focus:outline-none focus:border-b-1 focus:border-[#01261E]"
                                        /> */}
                                        <ContactPhoneNumberSelection 
                                        value={formData.phone}
                                        onChange={(val) => handleChange("phone", val)}/>
                                        {errors.phone && <p className="text-red-500 text-[12px]">{errors.phone}</p>}

                                        </div>
                                        <div className="pb-6 focus-within:text-[#01261E]">
                                        <label className="block text-[16px] font-[500] leading-[20px] mb-1">
                                            How did you find us?
                                        </label>
                                        <ContactComboBox 
                                        value={formData.foundUsVia}
                                        onChange={(val) => handleChange("foundUsVia", val)}/>
                                        </div>

                                </div>
                        </form>

                        {/* contact radio button */}
                        <ContactRadioButtonsInput
                        value={formData.preferredContact}
                        onChange={(val) => handleChange("preferredContact", val)}/>

                        {/*  message */}
                        <div>
                        <ContactMessage
                            value={formData.message}
                            onChange={(val) => handleChange("message", val)}/>
                        </div>

                        <div className="flex justify-center  mt-4">
                            <button
                            onClick={handleSubmit}
                            className="w-full py-2.5 bg-[#01261E] text-white text-[16px] font-[500] rounded-[5px] hover:bg-[#014134] transition"
                            >
                            Send message
                            </button>
                        </div>

                        <div>
                            <div className="flex justify-start space-x-2 pt-8">
                                <div>
                                    <img
                                    src="/contact/b-1.jpg"
                                    alt="call"
                                    className="w-[38] h-[38] "/>
                                </div>
                                <div>
                                    <img
                                    src="/contact/b-2.jpg"
                                    alt="call"
                                    className="w-[38] h-[38]"/>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>



        {/* footer */}
        <div>
            <Footer/>
        </div>
        </>
    )
    
}