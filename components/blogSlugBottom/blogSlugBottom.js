import Link from "next/link";

const articleData = [
  {
    id: 1,
    image: "/blogs/image-3.png",
    profileP: "/blogs/p-1.png",
    profileN: "John Cena ",
    profileA: "Foundations",
    when: "8 mins",
    content: "What's the difference between a newsletter and a blog?",
    readMore: "Read more",
  },
  {
    id: 2,
    image: "/blogs/image-4.png",
    profileP: "/blogs/p-1.png",
    profileN: "John Cena ",
    profileA: "Foundations",
    when: "8 mins",
    content: "What's the difference between a newsletter and a blog?",
    readMore: "Read more",
  },
  {
    id: 3,
    image: "/blogs/image-5.png",
    profileP: "/blogs/p-1.png",
    profileN: "John Cena ",
    profileA: "Foundations",
    when: "8 mins",
    content: "What's the difference between a newsletter and a blog?",
    readMore: "Read more",
  },
  {
    id: 4,
    image: "/blogs/image-6.png",
    profileP: "/blogs/p-1.png",
    profileN: "John Cena ",
    profileA: "Foundations",
    when: "8 mins",
    content: "What's the difference between a newsletter and a blog?",
    readMore: "Read more",
  },
];

export default function BlogSlugBottom() {
  return (
    <>
      {/* desktop */}
      <div className="hidden lg:block">
        <div className="">
          <div className="pt-[145px]">
            <div className="bg-[#DAEBE8]">
              <div className="flex flex-row justify-between pt-[115px] pb-8 md:px-28 ">
                <div>
                  <p className="text-[#000] text-[30px] font-[700] leading-[130%]">
                    Suggested articles
                  </p>
                </div>
                <div>
                  <p className="text-[#000] text-[18px] font-[400] leading-[104%] hover:underline">
                    <Link href="/blogs">
                      All Posts <span className="">&rarr;</span>
                    </Link>
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 xl:grid-cols-4 2xl:grid-cols-4 gap-8 md:px-28 pt-10 pb-20">
                {articleData.map((item, index) => (
                  <div key={index} className="">
                    <Link href="/blogs/slug">
                      <div className="relative overflow-hidden w-full rounded-[5px]">
                        <img
                          src={item.image}
                          alt={item.content}
                          className="w-full h-auto object-cover rounded-[5px] transition duration-300 ease-in-out hover:scale-110"
                        />
                      </div>
                    </Link>

                    <div className="pt-[21px] pb-[20px] flex items-center gap-2">
                      <img
                        src={item.profileP}
                        alt={item.profileN}
                        className="w-[22px] h-[22px] object-cover rounded-full border border-[#01261E] shrink-0"
                      />
                      <p className="flex flex-wrap items-center gap-x-1 text-[#000] text-[0.875rem] font-[400] leading-[104%]">
                        <span>{item.profileN}</span>
                        <span className="text-[0.875rem]">•</span>
                        <span>{item.profileA}</span>
                        <span className="text-[0.875rem]">•</span>
                        <span>{item.when}</span>
                      </p>
                    </div>

                    <p className="text-[16px] text-[#000] font-[700] leading-[130%] w-[86%] pb-[17px]">
                      {item.content}
                    </p>

                    <p className="text-[15px] text-[#000] font-[700] leading-[130%] underline">
                      {item.readMore}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* mobile */}
      <div className="block lg:hidden">
        <div className="">
          <div className="pt-[60px]">
            <div className="bg-[#DAEBE8] pl-4">
              <div className=" pt-[60px] pb-[30px]">
                <div>
                  <p className="text-[#000] text-[22px] font-[700] leading-[130%]">
                    Suggested articles
                  </p>
                </div>
              </div>

              <div
                className="overflow-x-auto w-full"
                style={{
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                }}
              >
                <div className="flex gap-8 min-w-max">
                  {articleData.map((item, index) => (
                    <div key={index} className="flex-shrink-0 w-[267px]">
                      <Link href="/blogs/slug">
                        <div>
                          <img
                            src={item.image}
                            alt={item.content}
                            className="w-[267px] h-[267px] object-cover"
                          />
                        </div>
                      </Link>

                      <div className="pt-[21px] pb-[19px] flex space-x-2">
                        <img
                          src={item.profileP}
                          alt={item.profileN}
                          className="w-6 h-6 object-cover rounded-full border-[0.5px] border-[#01261E]"
                        />
                        <p className="flex items-center gap-1 text-[#000] text-[14px] font-[400] leading-[104%]">
                          <span>{item.profileN}</span>
                          <span className="text-[14px]">•</span>
                          <span>{item.profileA}</span>
                          <span className="text-[14px]">•</span>
                          <span>{item.when}</span>
                        </p>
                      </div>

                      <p className="text-[14px] text-[#000] font-[700] leading-[130%] pb-[40px]">
                        {item.content}
                      </p>

                      {/* <p className="text-[15px] text-[#000] font-[700] leading-[130%] underline py-4">
                        {item.readMore}
                      </p> */}
                    </div>
                  ))}
                </div>
              </div>

              <div className="pb-[64px]">
                <p className="text-[#000] text-[16px] font-[600] leading-[104%]">
                  <Link href="/blogs">
                    All Posts <span className="">&rarr;</span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
