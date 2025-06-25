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
      <div>
        <div className="">
          <div className="pt-20">
            <div className="bg-[#DAEBE8]">
              <div className="flex flex-row justify-between pt-20 pb-8 md:px-28 ">
                <div>
                  <p className="text-[#000] text-[30px] font-[700] leading-[130%]">
                    Suggested articles
                  </p>
                </div>
                <div>
                  <p className="text-[#000] text-[18px] font-[400] leading-[104%]">
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
                      <div>
                        <img
                          src={item.image}
                          alt={item.content}
                          className="w-[267px] h-[267px] object-cover"
                        />
                      </div>
                    </Link>

                    <div className="pt-4 pb-2 flex space-x-2">
                      <img
                        src={item.profileP}
                        alt={item.profileN}
                        className="w-6 object-cover"
                      />
                      <p className="flex items-center gap-1 text-[#000] text-[14px] font-[400] leading-[104%]">
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

                    <p className="text-[15px] text-[#000] font-[700] leading-[130%] underline py-4">
                      {item.readMore}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
