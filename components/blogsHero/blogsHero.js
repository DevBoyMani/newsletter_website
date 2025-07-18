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
            <div className="flex flex-row justify-between gap-[134px] items-center ">
              {/* left */}
              <div className="w-[60%]">
                <div>
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
                      className="w-7 object-cover"
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
              </div>
              {/* right */}
              <div className="w-[40%] flex flex-col justify-start">
                {/* 1 */}
                <div className="flex flex-row gap-4 border-b pt-4 items-start">
                  <div>
                    <div className="w-[98px] pt-2">
                      <img
                        src="/blogs/hero-h-1.png"
                        alt=""
                        className="w-full object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="flex items-center gap-2 text-[#FFF] text-[14px] font-[400] leading-[104%]">
                      <span>Foundations</span>
                      <span className="text-lg">•</span>
                      <span>8 mins</span>
                    </p>
                    <p className="text-[#FFF] text-[18px] font-[700] leading-[130%] pt-[16px]">
                      What's the difference between a newsletter and a blog?
                    </p>
                    <div className="flex flex-row space-x-2 items-center pt-[16px] pb-[22px]">
                      <img
                        src="/blogs/p-1.png"
                        alt="profile-1"
                        className="w-7 object-cover"
                      />
                      <p className="text-[#FFF] text-[14px] font-[400] leading-[104%]">
                        Jeff Hardy
                      </p>
                    </div>
                  </div>
                </div>
                {/* 2*/}
                <div className="flex flex-row gap-4 border-b pt-[15px] items-start">
                  <div>
                    <div className="w-[98px] pt-2">
                      <img
                        src="/blogs/hero-h-2.png"
                        alt=""
                        className="w-full object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="flex items-center gap-2 text-[#FFF] text-[14px] font-[400] leading-[104%]">
                      <span>SEO</span>
                      <span className="text-lg">•</span>
                      <span>14 mins</span>
                    </p>
                    <p className="text-[#FFF] text-[18px] font-[700] leading-[130%] pt-[16px]">
                      How to Create an SEO Newsletter: A Step-by-Step Guide
                    </p>
                    <div className="flex flex-row space-x-2 items-center py-2 pt-[16px] pb-[22px]">
                      <img
                        src="/blogs/p-1.png"
                        alt="profile-1"
                        className="w-7 object-cover"
                      />
                      <p className="text-[#FFF] text-[14px] font-[400] leading-[104%] ">
                        Bianca Belair
                      </p>
                    </div>
                  </div>
                </div>
                {/* 3 */}
                <div className="flex flex-row gap-4 pt-[15px] items-start">
                  <div>
                    <div className="w-[98px] pt-2">
                      <img
                        src="/blogs/hero-h-3.png"
                        alt=""
                        className="w-full object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="flex items-center gap-2 text-[#FFF] text-[14px] font-[400] leading-[104%]">
                      <span>Foundations</span>
                      <span className="text-lg">•</span>
                      <span>5 mins</span>
                    </p>
                    <p className="text-[#FFF] text-[18px] font-[700] leading-[130%] pt-[16px]">
                      How to Create an Email Newsletter
                    </p>
                    <div className="flex flex-row space-x-2 items-center py-2 pt-[16px] ">
                      <img
                        src="/blogs/p-1.png"
                        alt="profile-1"
                        className="w-7 object-cover"
                      />
                      <p className="text-[#FFF] text-[14px] font-[400] leading-[104%] ">
                        Rey Mysterio
                      </p>
                    </div>
                  </div>
                </div>
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
              Insights, tips, and tricks to help you grow your newsletter.
            </p>
          </div>
          {/*part 2 */}
          <div className="pt-6">
            <div className="">
              <div>
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
              <div className="pt-10 pb-2">
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
