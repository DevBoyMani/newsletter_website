const AdvertiseSidebar = ({ listNames, activeIndex, handleClick }) => {
  return (
    <div className="h-full px-4 py-2">
      {listNames.map((name, index) => (
        <button
          key={index}
          onClick={() => handleClick(index)}
          className={`block text-left w-full py-2 px-3 rounded-lg transition-all ${
            activeIndex === index ? "bg-gray-700" : "hover:bg-gray-600"
          }`}
        >
          {name}
        </button>
      ))}
    </div>
  );
};

export default AdvertiseSidebar;