export default function Features() {
    const listNames=[
        {name:"Healthy ageing"},
        {name:"Immune defence"},
        {name:"Digestion"},
        {name:"Healthy ageing"},
        {name:"Immune defence"},
        {name:"Digestion"},
        {name:"Healthy ageing"},
        {name:"Immune defence"},
        {name:"Digestion"}
    ]
    const images=[
        {name:"image1",src:"/features/features-1.jpg"},
        {name:"image2",src:"/features/features-2.jpg"},
        {name:"image3",src:"/features/features-3.jpg"}
    ]
    return (
        <>
        <div className="text-white px-4 md:px-16 py-20 mx-auto">
            <div className="w-[70%]">
                <h2 className="text-3xl md:text-6xl text-black text-start">
                The benefits of taking AG1
                </h2>
                <p className="text-black text-xl py-6">Discover the benefits of taking AG1 daily to support your health holistically.</p>
            </div>
        </div>
        <section className="text-white px-4 md:px-16 py-20 mx-auto">
            <div>
                <div>
                    <div className="flex">
                        {/* left side */}
                        <div className="w-[22%] text-black pr-[18px]">
                            {listNames && listNames.map((listName,index)=>(
                                <div className="py-[20px] pl-[16px] pr-[18px] border-b-2 text-xl" key={index}>{listName.name}</div>
                            ))}
                        </div>

                        {/* right side */}
                        <div className="w-[78%] text-black ">
                            <div className=" pl-[48px]">
                                <div className="grid grid-cols-1 md:grid-cols-3">
                                    {
                                      images.map((FeatureImage,index)=>(
                                        <div key={index} className="w-[332px] h-[475px] ">
                                            <img
                                                src={FeatureImage.src}
                                                alt={FeatureImage.name}
                                                className="object-cover rounded-md w-full h-full"
                                            />

                                        </div>

                                      ))  
                                    }
                                </div>  
                                <div>
                                    <p className="text-black text-xl py-10 border-b">
                                    AG1 is here to help you feel strong, vital, and nourished. Filled with high-quality vitamins, minerals, and nutrients from whole food sources, you can feel confident that important areas of your health are being effectively supported. Every day.
                                    </p>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}
