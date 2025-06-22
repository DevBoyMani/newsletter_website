export default function BlogsHero() {
  return (
    <>
      <div className="py-10 md:px-28 bg-[#01261E]">
        {/*part 1 */}
        <div className="flex flex-row justify-between items-center border-b pb-6 pt-20">
          <div className="w-[70%]">
            <h2 className="text-[#FAFAFA] font-[GT-Super-Ds-Trial] text-[104px] font-[400] leading-[104%]">
              Sagravia Blogs
            </h2>
          </div>
          <div className="w-[30%]">
            <p className="text-[#FAFAFA] text-[16px] font-[600] leading-[141%] tracking-[-0.64px]">
              Insights, tips, and tricks to help you grow your newsletter.
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
              <div className="flex flex-row gap-4 border-b pt-4 items-start pb-2">
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
                  <p className="text-[#FFF] text-[18px] font-[700] leading-[130%] ">
                    What's the difference between a newsletter and a blog?
                  </p>
                  <div className="flex flex-row space-x-2 items-center py-2">
                    <img
                      src="/blogs/p-1.png"
                      alt="profile-1"
                      className="w-7 object-cover"
                    />
                    <p className="text-[#FFF] text-[14px] font-[700] leading-[104%] ">
                      Jeff Hardy
                    </p>
                  </div>
                </div>
              </div>
              {/* 2*/}
              <div className="flex flex-row gap-4 border-b pt-4 items-start pb-2">
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
                  <p className="text-[#FFF] text-[18px] font-[700] leading-[130%] ">
                    How to Create an SEO Newsletter: A Step-by-Step Guide
                  </p>
                  <div className="flex flex-row space-x-2 items-center py-2">
                    <img
                      src="/blogs/p-1.png"
                      alt="profile-1"
                      className="w-7 object-cover"
                    />
                    <p className="text-[#FFF] text-[14px] font-[700] leading-[104%] ">
                      Bianca Belair
                    </p>
                  </div>
                </div>
              </div>
              {/* 3 */}
              <div className="flex flex-row gap-4 border-b pt-4 items-start pb-2">
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
                  <p className="text-[#FFF] text-[18px] font-[700] leading-[130%] ">
                    How to Create an Email Newsletter
                  </p>
                  <div className="flex flex-row space-x-2 items-center py-2">
                    <img
                      src="/blogs/p-1.png"
                      alt="profile-1"
                      className="w-7 object-cover"
                    />
                    <p className="text-[#FFF] text-[14px] font-[700] leading-[104%] ">
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
