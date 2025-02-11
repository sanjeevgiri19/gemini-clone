const TopNav = () => {
  return (
    <div className="flex justify-between h-14 sm:h-16 z-100 px-2">
      <h1 className="text-lg sm:text-2xl my-2 ml-12 px-2 sm:px-3 text-zinc-100 tracking-wide hover:bg-zinc-700 rounded-md">
        Gemini
      </h1>
      <div className="flex gap-2 sm:gap-6 mx-7 sm:mx-10 my-2 sm:my-4">
        <h1 className="text-zinc-400 font-semibold mt-1 sm:text-lg text-xs">
          Try Gemini Advanced
        </h1>
        <i className="ri-account-circle-fill text-2xl sm:text-3xl text-zinc-400"></i>
      </div>
    </div>
  );
};

export default TopNav;
