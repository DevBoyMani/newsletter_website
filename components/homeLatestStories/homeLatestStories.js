export default function HomeLatestStrories() {
  const blogPosts = [
    {
      id: 1,
      title: "First blog post",
      date: "Oct 25, 2025",
      image: "/home/blog-pic-first.png",
      description:
        "The Return C++ SDK is now fully on par with our two other SDKs in Python. The Return C++ SDK is now fully on par with our two other SDKs in Python. The Return C++ SDK is now fully on par. The Return C++ SDK is now fully on.",
      link: "#",
    },
    {
      id: 2,
      title: "Upgrade to Pro today",
      date: "Oct 26, 2025",
      image: "/home/blog-pic-first.png",
      description:
        "The Return C++ SDK is now fully on par with our two other SDKs in Ptthon. The Return C++ SDK is now fully on par with our two other SDKs in Ptthon. The Return C++ SDK is now fully on par. The Return C++  SDK is now fully on ",
      link: "#",
    },
    {
      id: 3,
      title: "Computer vision for the blind",
      date: "Oct 27, 2025",
      image: "/home/blog-pic-first.png",
      description:
        "The Return C++ SDK is now fully on par with our two other SDKs in Ptthon. The Return C++ SDK is now fully on par with our two other SDKs in Ptthon. The Return C++ SDK is now fully on par. The Return C++  SDK is now fully on ",
      link: "#",
    },
  ];
  return (
    <>
      {/* desktop */}
      <div className="bg-[#FAFAFA]">
        {/* latest stories */}
        <div className="px-[110px] pt-[100px] pb-[80px]">
          <div className="">
            <div className="flex flex-col justify-center items-center">
              <h2 className="text-center text-[56px] text-[#01261E] font-[400] leading-[48px] tracking-[-1.2px]">
                Latest stories from the blog
              </h2>
              <p className="pt-[26px] text-center text-[19px] text-[#161C2D] font-[400] leading-[32px] tracking-[-0.03px] w-[39%]">
                Discover hundreds of technical articles & open-source projects
                and radically improve your stack
              </p>
            </div>
          </div>
          {/* cards */}
          {/* <div className="pt-[56px]">
            <div className="flex flex-row gap-[21px]">
       
              <div className="flex-1 bg-[#fff] rounded-[15px] shadow-[0_0_44px_0_rgba(102,102,102,0.25)] group overflow-hidden transition-all duration-500 hover:shadow-[0_0_55px_0_rgba(102,102,102,0.3)] cursor-pointer">
                <div className="flex flex-col items-stretch transition-all duration-500">
                 
                  <div className="px-[8px] pt-[8px] transition-all duration-500">
                    <img
                      src="/home/blog-pic-first.png"
                      alt="blog first pic"
                      className="rounded-[15px] w-full h-[300px] object-cover transition-all duration-500 group-hover:h-[280px]"
                    />
                  </div>

                  <div className="px-[15px] py-[23px] font-[manrope] transition-all duration-500 group-hover:-translate-y-[-4px]">
             
                    <div className="transition-all duration-500">
                      <h3 className="text-[#000] text-[20px] font-[400] leading-[22px] font-[manrope]">
                        First blog post
                      </h3>

                      <p className="text-[#878C91] text-[15px] font-[400] leading-[24px] pt-[20px]">
                        The Return C++ SDK is now fully on par with our two
                        other SDKs in Ptthon. The Return C++ SDK is now fully on
                        par with our two other SDKs in Ptthon. The Return C++
                        SDK is now fully on par. The Return C++ SDK is now fully
                        on.
                      </p>

                   
                      <div className="max-h-0 overflow-hidden transition-all duration-500 ease-out group-hover:max-h-[60px]">
                        <div className="translate-y-[100%] opacity-0 group-hover:translate-y-1 group-hover:opacity-100 transition-all duration-500 ease-in-out delay-250">
                          <div className="flex justify-between items-center pt-[10px]">
                            <p className="text-[#000] text-[15px] font-[400] leading-[24px]">
                              Read more
                            </p>
                            <a href="#">
                              <span className="text-[#000] text-[26px]">
                                &#62;
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

          
              <div className=" bg-[#fff] rounded-[15px] shadow-[0_0_44px_0_rgba(102,102,102,0.25)]">
                <div className="flex flex-col items-stretch">
                  <div className="px-[8px] pt-[8px]">
                    <img
                      src="/home/blog-pic-first.png"
                      alt="blog first pic"
                      className="rounded-[15px]"
                    />
                  </div>
                  <div className="px-[15px] py-[23px]">
                    <div className="flex flex-col ">
                      <h3 className="text-[#000] text-[20px] font-[400] leading-[22px] font-[manrope]">
                        First blog post
                      </h3>
                      <p className="text-[#878C91] text-[15px] font-[400] leading-[24px] pt-[20px]">
                        The Return C++ SDK is now fully on par with our two
                        other SDKs in Ptthon. The Return C++ SDK is now fully on
                        par with our two other SDKs in Ptthon. The Return C++
                        SDK is now fully on par. The Return C++ SDK is now fully
                        on{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 bg-[#fff] rounded-[15px] shadow-[0_0_44px_0_rgba(102,102,102,0.25)] group overflow-hidden transition-all duration-500 hover:shadow-[0_0_55px_0_rgba(102,102,102,0.3)] cursor-pointer">
                <div className="flex flex-col items-stretch transition-all duration-500">
               
                  <div className="px-[8px] pt-[8px] transition-all duration-500">
                    <img
                      src="/home/blog-pic-first.png"
                      alt="blog first pic"
                      className="rounded-[15px] w-full h-[300px] object-cover transition-all duration-500 group-hover:h-[280px]"
                    />
                  </div>

         
                  <div className="px-[15px] py-[23px] font-[manrope] transition-all duration-500 group-hover:-translate-y-[-4px]">
         
                    <div className="transition-all duration-500">
                      <h3 className="text-[#000] text-[20px] font-[400] leading-[22px] font-[manrope]">
                        First blog post
                      </h3>

                      <p className="text-[#878C91] text-[15px] font-[400] leading-[24px] pt-[20px]">
                        The Return C++ SDK is now fully on par with our two
                        other SDKs in Ptthon. The Return C++ SDK is now fully on
                        par with our two other SDKs in Ptthon. The Return C++
                        SDK is now fully on par. The Return C++ SDK is now fully
                        on.
                      </p>

      
                      <div className="max-h-0 overflow-hidden transition-all duration-500 ease-out group-hover:max-h-[60px]">
                        <div className="translate-y-[100%] opacity-0 group-hover:translate-y-1 group-hover:opacity-100 transition-all duration-500 ease-in-out delay-250">
                          <div className="flex justify-between items-center pt-[10px]">
                            <p className="text-[#000] text-[15px] font-[400] leading-[24px]">
                              Read more
                            </p>
                            <a href="#">
                              <span className="text-[#000] text-[26px]">
                                &#62;
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
  
              <div className="flex-1 bg-[#fff] rounded-[15px] shadow-[0_0_44px_0_rgba(102,102,102,0.25)] group overflow-hidden transition-all duration-500 hover:shadow-[0_0_55px_0_rgba(102,102,102,0.3)] cursor-pointer">
                <div className="flex flex-col items-stretch transition-all duration-500">

                  <div className="px-[8px] pt-[8px] transition-all duration-500">
                    <img
                      src="/home/blog-pic-first.png"
                      alt="blog first pic"
                      className="rounded-[15px] w-full h-[300px] object-cover transition-all duration-500 group-hover:h-[280px]"
                    />
                  </div>

        
                  <div className="px-[15px] py-[23px] font-[manrope] transition-all duration-500 group-hover:-translate-y-[-4px]">
                
                    <div className="transition-all duration-500">
                      <h3 className="text-[#000] text-[20px] font-[400] leading-[22px] font-[manrope]">
                        First blog post
                      </h3>

                      <p className="text-[#878C91] text-[15px] font-[400] leading-[24px] pt-[20px]">
                        The Return C++ SDK is now fully on par with our two
                        other SDKs in Ptthon. The Return C++ SDK is now fully on
                        par with our two other SDKs in Ptthon. The Return C++
                        SDK is now fully on par. The Return C++ SDK is now fully
                        on.
                      </p>

              
                      <div className="max-h-0 overflow-hidden transition-all duration-500 ease-out group-hover:max-h-[60px]">
                        <div className="translate-y-[100%] opacity-0 group-hover:translate-y-1 group-hover:opacity-100 transition-all duration-500 ease-in-out delay-250">
                          <div className="flex justify-between items-center pt-[10px]">
                            <p className="text-[#000] text-[15px] font-[400] leading-[24px]">
                              Read more
                            </p>
                            <a href="#">
                              <span className="text-[#000] text-[26px]">
                                &#62;
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <div className="pt-[56px]">
            <div className="flex flex-row gap-[21px] flex-wrap items-stretch">
              {blogPosts.map((post) => (
                <div
                  key={post.id}
                  className="flex-1 min-w-[300px] bg-[#fff] rounded-[15px] shadow-[0_0_44px_0_rgba(102,102,102,0.25)]
        group overflow-hidden transition-shadow duration-500 
        hover:shadow-[0_0_55px_0_rgba(102,102,102,0.3)] cursor-pointer
        h-[490px]"
                >
                  <div className="flex flex-col items-stretch transition-all duration-500 h-full">
                    {/* Image Section */}
                    <div className="px-[8px] pt-[8px] transition-all duration-500">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="rounded-[15px] h-[270px] object-cover transition-all duration-500 group-hover:h-[250px] w-full"
                      />
                    </div>

                    {/* Text Section */}
                    <div className="px-[15px] py-[23px] font-[manrope] flex flex-col flex-1 transition-all duration-500 group-hover:-translate-y-[2px]">
                      {/* Top Content */}
                      <div>
                        <h3 className="text-[#000] text-[20px] font-[500] leading-[22px] font-[manrope]">
                          {post.title}
                        </h3>

                        <p className="text-[#878C91] text-[15px] font-[400] leading-[24px] pt-[20px]">
                          {post.description}
                        </p>
                      </div>

                      {/* Bottom “Read more” section (stays fixed at bottom) */}
                      <div className="mt-auto max-h-0 overflow-hidden transition-all duration-500 ease-out group-hover:max-h-[60px]">
                        <div className="translate-y-[100%]  opacity-0 group-hover:-translate-y-2 group-hover:opacity-100 transition-all duration-500 ease-in-out delay-250">
                          <div className="flex justify-between items-center pt-[10px]">
                            <p className="text-[#000] text-[16px] font-[600] leading-[24px]">
                              Read more
                            </p>
                            <a href={post.link}>
                              <span className="text-[#000] text-[30px]">
                                &#62;
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* need to create separate component */}
        {/* contact our team */}
        <div>
          <div className="flex flex-col items-center justify-center text-center lg:pt-[70px] lg:pb-[127px] pb-16 bg-[#FAFAFA]">
            <h2
              className="text-[34px] lg:text-[56px] font-[400]"
              style={{ fontFamily: "GT Super Ds Trial" }}
            >
              Contact our team
            </h2>

            <div className="lg:w-[50%] mx-auto px-8">
              <p className="text-[12px] lg:text-[18px] font-[400] leading-[150%] tracking-[0.36px] text-center">
                If you're looking to grow in a dynamic environment and
                contribute to something greater, we invite you to explore our
                open positions
                <br /> and become a part of our journey.
              </p>
            </div>

            {/* Moving Text desktop*/}

            <a
              href="/contact"
              className="hidden lg:block lg:w-[806px] border border-[#01261E] rounded-full overflow-hidden relative group mt-10 hover:bg-[#01261E] hover:text-[#ffffff] text-[#01261E]"
            >
              <span className="flex py-[31px] justify-end items-center  text-[100px] font-[800] whitespace-nowrap transition-transform duration-500 ease-in-out animate-scroll group-hover:pause group ">
                SPEAK TO SALES SPEAK TO SALES SPEAK TO SALES SPEAK TO SALES
                SPEAK TO SALES SPEAK TO SALES SPEAK TO SALES SPEAK TO SALES
                SPEAK TO SALES SPEAK TO SALES SPEAK TO SALES SPEAK TO SALES
                SPEAK TO SALES SPEAK TO SALES SPEAK TO SALES SPEAK TO SALES
                SPEAK TO SALES SPEAK TO SALES SPEAK TO SALES SPEAK TO SALES
                SPEAK TO SALES SPEAK TO SALES SPEAK TO SALES SPEAK TO SALES
                SPEAK TO SALES SPEAK TO SALES SPEAK TO SALES SPEAK TO SALES
                SPEAK TO SALES SPEAK TO SALES SPEAK TO SALES SPEAK TO SALES
                SPEAK TO SALES
              </span>
            </a>

            {/* Moving Text mobile*/}

            <a
              href="#"
              className=" block lg:hidden w-full max-w-[269px] border border-[#01261E] rounded-full overflow-hidden relative group mt-10 hover:bg-[#01261E] hover:text-[#ffffff] text-[#01261E] font-[800]"
            >
              <span className="flex py-2 justify-end items-center text-[37px] whitespace-nowrap transition-transform duration-500 ease-in-out animate-scroll-mobile group-hover:pause group ">
                SPEAK TO SALES SPEAK TO SALES SPEAK TO SALES SPEAK TO SALES
                SPEAK TO SALES SPEAK TO SALES SPEAK TO SALES SPEAK TO SALES
                SPEAK TO SALES SPEAK TO SALES SPEAK TO SALES SPEAK TO SALES
                SPEAK TO SALES SPEAK TO SALES SPEAK TO SALES SPEAK TO SALES
                SPEAK TO SALES SPEAK TO SALES SPEAK TO SALES SPEAK TO SALES
                SPEAK TO SALES SPEAK TO SALES SPEAK TO SALES SPEAK TO SALES
                SPEAK TO SALES SPEAK TO SALES SPEAK TO SALES SPEAK TO SALES
                SPEAK TO SALES SPEAK TO SALES SPEAK TO SALES SPEAK TO SALES
                SPEAK TO SALES
              </span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
