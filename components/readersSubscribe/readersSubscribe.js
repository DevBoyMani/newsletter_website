export function ReadersSubscribe() {
  return (
    <form className="flex w-full h-[72px] max-w-[580px] items-center space-x-1">
      <input
        type="email"
        placeholder="Your email address"
        className="flex h-full w-full rounded-[5px] border border-gray-300 bg-white px-3 py-2 text-[18px] placeholder-gray-500 focus:outline-none text-black  focus:ring-green-500"
      />
      <button
        type="submit"
        className="h-[72px] max-w-[580px] flex items-center justify-center rounded-[5px] bg-[#DAEBE8] text-[#01261E] text-2xl font-medium px-6"
      >
        {" "}
        <span className="mb-1 w-6 h-6 text-2xl">&rarr;</span>
        {/* <img
       src="/readers/readers-right-arrow-button.png"
       alt="right-arrow"
       /> */}
      </button>
    </form>
  );
}
