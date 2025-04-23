
export function ReadersSubscribe() {
  return (
    <form className="flex w-full max-w-sm items-center space-x-1">
      <input
        type="email"
        placeholder="Your email address"
        className="flex h-10 w-full rounded-[5px] border border-gray-300 bg-white px-3 py-2 text-sm placeholder-gray-500 focus:outline-none text-black  focus:ring-green-500"
      />
      <button
        type="submit"
         className="h-10 w-10 flex items-center justify-center rounded-[5px] bg-[#DAEBE8] text-[#01261E] text-2xl font-medium px-6"
      > &rarr;

       {/* <img
       src="/readers/readers-right-arrow-button.png"
       alt="right-arrow"
       /> */}
      </button>
    </form>
  )
}
