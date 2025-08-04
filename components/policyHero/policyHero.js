export default function PolicyHero() {
  return (
    <>
      {/* desktop */}
      <div className="hidden lg:block">
        <div className="pt-10 pb-20 md:px-28 bg-[#01261E]">
          <div className="">
            <div className="flex flex-row justify-between gap-[45px]">
              {/* left */}
              <div className="w-[55%]">
                <div className="pt-20">
                  <img
                    src="/blogs/blogs-hero.png"
                    alt="blogs-hero"
                    className="w-full object-cover"
                  />
                </div>
              </div>

              {/* right */}
              <div className="w-[45%] items-start">
                <div className="pt-20">
                  <div className="py-6">
                    <div>
                      <p className="text-[#FFFFFFB2] text-[14px] font-[400] leading-[160.314%]">
                        Blogs &#62; What's the difference between a newsletter
                        and a blog?
                      </p>
                      <p className="flex items-center gap-2 text-[#FFF] text-[16px] font-[300] leading-[104%] pt-8">
                        <span>Case Study</span>
                        <span className="text-lg">•</span>
                        <span>14 Mar 2025</span>
                        <span className="text-lg">•</span>
                        <span>5 mins</span>
                      </p>
                      <p className="text-[#FFF] text-[50px] font-[600] leading-[112%] w-full">
                        What's the difference between a newsletter and a blog?
                      </p>
                      <div className="flex flex-row space-x-4 pt-2">
                        <div className="pt-4 pb-2 flex space-x-2">
                          <img
                            src="/blogs/p-1.png"
                            alt="profile-1"
                            className="w-7 h-7 object-cover rounded-full border-[0.5px] border-[white]"
                          />
                          <p className="flex items-center gap-2 text-[#FFF] text-[16px] font-[400] leading-[104%]">
                            <span>
                              John Cena <br />
                              <span className="text-[12px] font-[250] leading-[104%]">
                                Writer
                              </span>
                            </span>
                          </p>
                        </div>
                        <div className="pt-4 pb-2 flex space-x-2">
                          <img
                            src="/blogs/p-1.png"
                            alt="profile-1"
                            className="w-7 h-7 object-cover rounded-full border-[0.5px] border-[white]"
                          />
                          <p className="flex items-center gap-2 text-[#FFF] text-[16px] font-[400] leading-[104%]">
                            <span>
                              Rey Mysterio <br />
                              <span className="text-[12px] font-[250] leading-[104%]">
                                Editor
                              </span>
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* mobile */}
      <div className="block lg:hidden">
        <div className="pt-[130px] pb-8 px-4 bg-[#01261E]">
          <div className="">
            <div className="">
              <div className="">
                <p className="text-[11px] text-[#FFFFFFB2] font-[400] leading-[160%] pb-4">
                  Blogs &#62; What's the difference between a newsletter and a
                  blog?
                </p>
                <img
                  src="/blogs/blogs-hero.png"
                  alt="blogs-hero"
                  className="w-full object-cover"
                />
              </div>
              <div className="">
                <div className="">
                  <div>
                    <p className="flex items-center gap-2 text-[#FFF] text-[12px] font-[300] leading-[104%] pt-2">
                      <span>Case Study</span>
                      <span className="text-lg">•</span>
                      <span>14 Mar 2025</span>
                      <span className="text-lg">•</span>
                      <span>5 mins</span>
                    </p>
                    <p className="text-[#FFF] text-[30px] font-[700] leading-normal">
                      Introduction to
                      <br /> Newsletter Advertising
                    </p>
                    <div className="flex flex-row space-x-4 pt-2">
                      <div className="pt-4 pb-2 flex space-x-2">
                        <img
                          src="/blogs/p-1.png"
                          alt="profile-1"
                          className="w-7 h-7 object-cover rounded-full border-[0.5px] border-[white]"
                        />
                        <p className="flex items-center gap-2 text-[#FFF] text-[16px] font-[400] leading-[104%]">
                          <span>
                            John Cena <br />
                            <span className="text-[12px] font-[250] leading-[104%]">
                              Writer
                            </span>
                          </span>
                        </p>
                      </div>
                      <div className="pt-4 pb-2 flex space-x-2">
                        <img
                          src="/blogs/p-1.png"
                          alt="profile-1"
                          className="w-7 h-7 object-cover rounded-full border-[0.5px] border-[white]"
                        />
                        <p className="flex items-center gap-2 text-[#FFF] text-[16px] font-[400] leading-[104%]">
                          <span>
                            Rey Mysterio <br />
                            <span className="text-[12px] font-[250] leading-[104%]">
                              Editor
                            </span>
                          </span>
                        </p>
                      </div>
                    </div>
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
