import Link from "next/link";

const articleData = [
  {
    id: 1,
    image: "/blogs/image-1.png",
    profileP: "/blogs/p-1.png",
    profileN: "John Cena ",
    profileA: "Foundations",
    when: "8 mins",
    content: "What's the difference between a newsletter and a blog?",
    readMore: "Read more",
  },
  {
    id: 2,
    image: "/blogs/image-2.png",
    profileP: "/blogs/p-1.png",
    profileN: "John Cena ",
    profileA: "Foundations",
    when: "8 mins",
    content: "What's the difference between a newsletter and a blog?",
    readMore: "Read more",
  },
  {
    id: 3,
    image: "/blogs/image-3.png",
    profileP: "/blogs/p-1.png",
    profileN: "John Cena ",
    profileA: "Foundations",
    when: "8 mins",
    content: "What's the difference between a newsletter and a blog?",
    readMore: "Read more",
  },
  {
    id: 4,
    image: "/blogs/image-4.png",
    profileP: "/blogs/p-1.png",
    profileN: "John Cena ",
    profileA: "Foundations",
    when: "8 mins",
    content: "What's the difference between a newsletter and a blog?",
    readMore: "Read more",
  },
  {
    id: 5,
    image: "/blogs/image-5.png",
    profileP: "/blogs/p-1.png",
    profileN: "John Cena ",
    profileA: "Foundations",
    when: "8 mins",
    content: "What's the difference between a newsletter and a blog?",
    readMore: "Read more",
  },
  {
    id: 6,
    image: "/blogs/image-6.png",
    profileP: "/blogs/p-1.png",
    profileN: "John Cena ",
    profileA: "Foundations",
    when: "8 mins",
    content: "What's the difference between a newsletter and a blog?",
    readMore: "Read more",
  },
];
export default function BlogsArticles() {
  return (
    <>
      {/* desktop view */}
      <div className="hidden lg:block ">
        <div className="py-10">
          <div className="">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
              {articleData.map((item, index) => (
                <div key={index} className="">
                  <Link href="/blogs/slug">
                    <div className="relative overflow-hidden w-full rounded-[5px]">
                      <img
                        src={item.image}
                        alt={item.content}
                        className="w-full object-cover transition duration-300 ease-in-out hover:scale-110"
                      />
                    </div>
                  </Link>

                  <div className="pt-4 pb-2 flex space-x-2">
                    <img
                      src={item.profileP}
                      alt={item.profileN}
                      className="w-6 object-cover"
                    />
                    <p className="flex items-center gap-2 text-[#000] text-[14px] font-[400] leading-[104%]">
                      <span>{item.profileN}</span>
                      <span className="text-[14px]">•</span>
                      <span>{item.profileA}</span>
                      <span className="text-[14px]">•</span>
                      <span>{item.when}</span>
                    </p>
                  </div>

                  <p className="text-[18px] text-[#000] font-[700] leading-[130%]">
                    {item.content}
                  </p>

                  <p className="text-[15px] py-4 text-[#000] font-[700] leading-[130%] underline">
                    {item.readMore}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* mobile */}

      <div className="block lg:hidden">
        <div className="pt-10">
          <div>
            <div className="grid grid-cols-1 ">
              {articleData.map((item, index) => (
                <div key={index} className="pt-6">
                  <Link href="/blogs/slug">
                    <div>
                      <img
                        src={item.image}
                        alt={item.content}
                        className="w-full h-[319px] object-cover rounded-[5px]"
                      />
                    </div>
                  </Link>

                  <div className="pt-4 pb-2 flex space-x-2">
                    <img
                      src={item.profileP}
                      alt={item.profileN}
                      className="w-6 object-cover"
                    />
                    <p className="flex items-center gap-2 text-[#000] text-[12px] font-[400] leading-[104%]">
                      <span>{item.profileN}</span>
                      <span className="text-[14px]">•</span>
                      <span>{item.profileA}</span>
                      <span className="text-[14px]">•</span>
                      <span>{item.when}</span>
                    </p>
                  </div>

                  <p className="text-[16px] text-[#000] font-[700] leading-[130%]">
                    {item.content}
                  </p>

                  <p className="text-[15px] pt-[18px] pb-[32px] text-[#000] font-[700] leading-[130%] underline">
                    {item.readMore}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
