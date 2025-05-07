'use client';

const FeatureLeftSidebar = ({ sections, activeIndex, handleClick }) => {
  return (
    <div className="w-1/4 space-y-1  sticky top-0">
      {sections.map((item, index) => (
        <button
          key={index}
          onClick={() => handleClick(index)}
          className={`w-full text-left py-4 px-4 border-b text-lg md:text-[18px] cursor-pointer transition-all
            ${index === activeIndex
              ? 'bg-[#01261E] text-white'
              : 'text-black hover:text-white hover:bg-[#01261ee0]'}`}
        >
          {item.title}
        </button>
      ))}
    </div>
  );
};

export default FeatureLeftSidebar;
