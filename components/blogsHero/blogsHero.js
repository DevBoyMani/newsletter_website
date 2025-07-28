export default function BlogsHero() {
  return (
    <>
      {/* desktop */}
      <div className="hidden lg:block">
        <div className="py-16 md:px-28 bg-[#01261E]">
          {/*part 1 */}
          <div className="flex flex-row justify-between border-b pb-6 pt-20">
            <div className="w-[60%]">
              <h2 className="text-[#FAFAFA]  text-[104px] font-[400] leading-[104%]">
                Sagravia Blogs
              </h2>
            </div>
            <div className="w-[40%] flex justify-end items-end mb-4">
              <p className="text-[#FAFAFA] text-[16px] font-[600] leading-[141%] tracking-[-0.64px]">
                Insights, tips, and tricks to help you grow your
                <br /> newsletter.
              </p>
            </div>
          </div>
          {/*part 2 */}
          <div className="py-10">
            <div className="hidden lg:flex w-full gap-36">
              {/* Left Section */}
              <div className="w-3/5 xl:w-[60%] 2xl:w-[60%] 3xl:w-[60%]">
                <p className="py-4 text-[#FFF] text-[16px] font-[600] leading-[104%]">
                  Featured blogs
                </p>
                <div className="relative overflow-hidden w-full rounded-[5px]">
                  <img
                    src="/blogs/blogs-hero.png"
                    alt="blogs-hero"
                    className="w-full transition duration-300 ease-in-out hover:scale-110"
                  />
                </div>
                <div className="pt-4 pb-2 flex space-x-2">
                  <img
                    src="/blogs/p-1.png"
                    alt="profile-1"
                    className="w-7 object-cover border border-[#D9D9D9] rounded-full"
                  />
                  <p className="flex items-center gap-2 text-[#FFF] text-[16px] font-[400] leading-[104%]">
                    <span>John Cena</span>
                    <span className="text-lg">•</span>
                    <span>Content</span>
                    <span className="text-lg">•</span>
                    <span>5 mins</span>
                  </p>
                </div>
                <p className="text-[#FFF] text-[23px] font-[700] leading-[130%]">
                  Introduction to Newsletter Advertising
                </p>
              </div>

              {/* Right Section */}
              <div className="w-2/5 xl:w-[40%] 2xl:w-[40%] 3xl:w-[40%] flex flex-col justify-start mt-11">
                {[1, 2, 3].map((item, index) => {
                  const data = [
                    {
                      src: "/blogs/hero-h-1.png",
                      tag: "Foundations",
                      time: "8 mins",
                      title:
                        "What's the difference between a newsletter and a blog?",
                      author: "Jeff Hardy",
                    },
                    {
                      src: "/blogs/hero-h-2.png",
                      tag: "SEO",
                      time: "14 mins",
                      title:
                        "How to Create an SEO Newsletter: A Step-by-Step Guide",
                      author: "Bianca Belair",
                    },
                    {
                      src: "/blogs/hero-h-3.png",
                      tag: "Foundations",
                      time: "5 mins",
                      title: "How to Create an Email Newsletter",
                      author: "Rey Mysterio",
                    },
                  ][index];

                  return (
                    <div className={`${index !== 0 ? "mt-4" : ""}`} key={index}>
                      <div
                        className={`flex flex-row space-x-4 items-start ${
                          index !== 2 ? "border-b pb-3" : ""
                        }`}
                      >
                        <div className="w-[98px] h-[98px] shrink-0 relative overflow-hidden rounded-[5px]">
                          <div className="absolute inset-0 transition-transform duration-300 ease-in-out hover:scale-110">
                            <img
                              src={data.src}
                              alt=""
                              className="w-full h-full object-cover block "
                            />
                          </div>
                        </div>

                        <div className="">
                          <div className="">
                            <p className="flex items-center space-x-2 text-[#FFF] text-[14px] font-[400] leading-[104%]">
                              <span>{data.tag}</span>
                              <span className="text-lg">•</span>
                              <span>{data.time}</span>
                            </p>
                          </div>
                          <p className="text-[#FFF] text-[18px] font-[700] leading-[130%] pt-3">
                            {data.title}
                          </p>
                          <div className="flex flex-row space-x-2 items-center pt-3 pb-3">
                            <img
                              src="/blogs/p-1.png"
                              alt="profile-1"
                              className="w-7 object-cover border border-[#D9D9D9] rounded-full"
                            />
                            <p className="text-[#FFF] text-[14px] font-[400] leading-[104%]">
                              {data.author}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* mobile view */}
      <div className="block lg:hidden">
        <div className="pt-[130px] pb-10 px-4 bg-[#01261E]">
          {/*part 1 */}
          <div className=" border-b-[0.5px] border-[#FFFFFF80] pb-6 pt-10">
            <h2 className="text-[#FAFAFA]  text-[30px] font-[400] leading-[104%] pb-8">
              Sagravia Blogs
            </h2>
            <p className="text-[#FAFAFA] text-[14px] font-[400] leading-[160%]">
              Insights, tips, and tricks to help you grow your
              <br /> newsletter.
            </p>
          </div>
          {/*part 2 */}
          <div className="pt-6">
            <div className="">
              <div className="border-b-[0.5px] border-[#FFFFFF80] pb-6">
                <p className="py-4 text-[#FFF] text-[16px] font-[600] leading-[104%]">
                  Featured blogs
                </p>
                <img
                  src="/blogs/blogs-hero.png"
                  alt="blogs-hero"
                  className="w-full object-cover"
                />
                <div className="pt-4 pb-2 flex space-x-2">
                  <img
                    src="/blogs/p-1.png"
                    alt="profile-1"
                    className="w-7 object-cover border border-white rounded-full"
                  />
                  <p className="flex items-center gap-1 text-[#FFF] text-[14px] font-[400] leading-[104%]">
                    <span>John Cena</span>
                    <span className="text-lg">•</span>
                    <span>Content</span>
                    <span className="text-lg">•</span>
                    <span>5 mins</span>
                  </p>
                </div>
                <p className="text-[#FFF] text-[18px] font-[700] leading-[130%]">
                  Introduction to Newsletter Advertising
                </p>
              </div>

              {/* 1 */}
              <div className="pt-6 pb-2">
                <div className="border-b-[0.5px] border-[#FFFFFF80] pb-2">
                  <div>
                    <p className="flex items-center gap-2 text-[#FFF] text-[14px] font-[400] leading-[104%]">
                      <span>Foundations</span>
                      <span className="text-lg">•</span>
                      <span>8 mins</span>
                    </p>
                    <p className="text-[#FFF] text-[18px] font-[700] leading-[130%] ">
                      What's the difference between a newsletter and a blog?
                    </p>
                    <div className="flex flex-row space-x-2 items-center py-2">
                      <img
                        src="/blogs/p-1.png"
                        alt="profile-1"
                        className="w-6 object-cover border border-white rounded-full"
                      />
                      <p className="text-[#FFF] text-[14px] font-[500] leading-[104%] ">
                        Jeff Hardy
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* 2 */}
              <div className=" pb-2">
                <div className="border-b-[0.5px] border-[#FFFFFF80] pb-2">
                  <p className="flex items-center gap-2 text-[#FFF] text-[14px] font-[400] leading-[104%]">
                    <span>SEO</span>
                    <span className="text-lg">•</span>
                    <span>14 mins</span>
                  </p>
                  <p className="text-[#FFF] text-[18px] font-[700] leading-[130%] ">
                    How to Create an SEO Newsletter: A Step-by-Step Guide
                  </p>
                  <div className="flex flex-row space-x-2 items-center py-2">
                    <img
                      src="/blogs/p-1.png"
                      alt="profile-1"
                      className="w-6 object-cover border border-white rounded-full"
                    />
                    <p className="text-[#FFF] text-[14px] font-[500] leading-[104%] ">
                      Bianca Belair
                    </p>
                  </div>
                </div>
              </div>
              {/* 3 */}
              <div className="">
                <div className="">
                  <p className="flex items-center gap-2 text-[#FFF] text-[14px] font-[400] leading-[104%]">
                    <span>Foundations</span>
                    <span className="text-lg">•</span>
                    <span>5 mins</span>
                  </p>
                  <p className="text-[#FFF] text-[18px] font-[700] leading-[130%] ">
                    How to Create an Email Newsletter
                  </p>
                  <div className="flex flex-row space-x-2 items-center py-2">
                    <img
                      src="/blogs/p-1.png"
                      alt="profile-1"
                      className="w-6 object-cover border border-white rounded-full"
                    />
                    <p className="text-[#FFF] text-[14px] font-[500] leading-[104%] ">
                      Rey Mysterio
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
