export default function SidebarNav({ listNames, activeIndex, sectionRefs }) {
    const handleClick = (index) => {
        if (sectionRefs.current[index]) {
            const section = sectionRefs.current[index];
            const offset = 100; // Adjust this value as needed
            
            // Get the section's position relative to the viewport
            const yOffset = section.getBoundingClientRect().top + window.scrollY - offset;

            // Scroll to the adjusted position
            window.scrollTo({ top: yOffset, behavior: "smooth" });
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
