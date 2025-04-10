export default function ReadersNewsletters(){
    const datas=[
        {headerButton:"Subscribe",image:"/readers/ps.png",topic:"News",heading:"Presidential Summary",paragraph:"Through in-depth analysis and well-researched content, we make historical knowledge accessible to professionals, students, and anyone interested in political history.",footerButton:"Learn More"}
    ]
    return(
        <>
            <div>
                <div className="px-4 md:px-16">
                    <p className="text-[#000] font-Manrope text-16px font-[400]">
                    Proin et pulvinar risus, quis hendrerit nisi. Vestibulum eget sollicitudin odio. Maecenas tellus sem, fermentum id aliquam et, auctor id libero. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed eu nulla felis. Quisque eget viverra massa. Donec posuere, sapien vel facilisis dictum, turpis mi tempus mauris, in ullamcorper libero turpis sed mauris. Nulla eu blandit nunc, ut suscipit dolor. Quisque dictum pellentesque tellus sed porta.
                    </p>
                </div>
                <div className="px-4 md:px-16 pb-10">
                    <div className=" py-6 h-[554px]">
                        <div className="w-[390px] h-[276px]">
                            <img
                            src="/readers/ps.png"
                            alt=""
                            className="w-full h-full"
                            />
                        </div>
                        <div className="w-[390px] border border-1 px-4 rounded-lg py-4">
                            <div className="py-2">News</div>
                            <div className="py-2">Presidential Summary</div>
                            <div className="py-2">Through in-depth analysis and well-researched content, we make historical knowledge accessible to professionals, students, and anyone interested in political history.</div>
                            <div className="py-2"><button>Learn More</button></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}