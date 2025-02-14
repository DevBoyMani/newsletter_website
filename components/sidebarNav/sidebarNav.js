export default function SidebarNav({ listNames, activeIndex, sectionRefs }) {
    const handleClick = (index) => {
        if (sectionRefs.current[index]) {
            sectionRefs.current[index].scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <div className="top-10 h-screen overflow-hidden pr-10 z-10">
            {listNames.map((name, index) => (
                <div
                    key={index}
                    className={`py-4 px-4 border-b text-lg md:text-xl cursor-pointer transition-all
                        ${index === activeIndex ? "bg-[#CD853F] text-black" : "text-black hover:bg-[#C4A484]"}`}
                    onClick={() => handleClick(index)}
                >
                    {name}
                </div>
            ))}
        </div>
    );
}

