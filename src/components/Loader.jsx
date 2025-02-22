const Loader = () => {
  return (
    <div className="w-screen h-screen gap-5 flex mt-10 flex-row  sm:flex-row">
      <i className="ri-gemini-fill text-3xl sm:text-4xl text-[#3798F2]"></i>
      <div className="animate-pulse flex flex-col w-full sm:w-1/2 gap-4">
        <div className="h-4 sm:h-6 bg-[#3798f2] w-[80%] sm:w-[130%] rounded-md"></div>
        <div className="h-4 sm:h-6 bg-[#3798f2] w-[80%] sm:w-[130%] rounded-md"></div>
        <div className="h-4 sm:h-6 bg-[#3798f2] w-[80%] sm:w-[130%] rounded-md"></div>
      </div>
    </div>
  );
};


export default Loader;