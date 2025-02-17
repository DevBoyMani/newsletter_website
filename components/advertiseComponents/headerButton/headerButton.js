const HeaderButton = ({ handleClick }) => {
    return (
      <header className="">
        {/* Button with blur effect */}
        <button
          onClick={() => handleClick("")}
          className="py-1 px-3 rounded-xl text-white bg-white/10 backdrop-blur-md transition hover:bg-white/20"
        >
          Home page
        </button>
      </header>
    );
  };
  
  export default HeaderButton;
  