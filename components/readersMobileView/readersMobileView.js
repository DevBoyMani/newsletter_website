import HeadingWithUnderline from "../readersPageComponents/stuff/headingWithUnderline/headingwithUnderline";

export default function ReadersMobileView(){
    return(
        <>
            <div className="bg-[#FAFAFA]">
                <div className="px-4 py-10 mx-auto">
                    <h2 className=" text-[#01261E] text-[44px] leading-[107%] font-[GT-Super-Ds-Trial]">
                    Step into a world of discovery
                    </h2>
                    <p className="text-[#121212] text-[14px] leading-normal font-[400] py-4">
                    Explore different categories. Find the best deals. AG1 is a daily health drink packed with nutrients to help alleviate bloating.
                    </p>
                </div>
                <div className="px-4 py-10 mx-auto">
                    <div className="w-full h-full">
                        <video
                            key="Hero-section-video"
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover"
                            >
                            <source src="/readers/readers-hero-section-bg-video.mp4" type="video/mp4" />
                            {/* <source src="/advertise/advertise-page-video.webm" type="video/webm" /> */}
                        </video>
                    </div>
                </div>

                {/* newsletters section */}
                <div className="px-4 py-10 mx-auto">
                    <HeadingWithUnderline text="Our Newsletters"/>
                    <p className="text-[#121212] text-[14px] leading-normal font-[400] py-4">
                    Proin et pulvinar risus, quis hendrerit nisi. Vestibulum eget sollicitudin odio. Maecenas tellus sem, fermentum id aliquam et, auctor id libero. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed eu nulla felis. Quisque eget viverra massa. Donec posuere, sapien vel facilisis dictum, turpis mi tempus mauris, in ullamcorper libero turpis sed mauris. Nulla eu blandit nunc, ut suscipit dolor. Quisque dictum pellentesque tellus sed porta.
                    </p>
                </div>
            </div>
        </>
    )
}