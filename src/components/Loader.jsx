import React from "react";

const Loader = () => {
  return (
    <div className="w-screen h-screen gap-5 flex mt-28 ">
      <i className="ri-gemini-fill text-4xl text-[#3798F2]"></i>
      <div className="animate-pulse flex flex-col  w-full gap-4">
        {/* <div className="mx-auto">
          <div className="w-48 h-6 bg-[#3798f2] rounded-md" />
          <div className="w-28 h-4 bg-[#3798f2] mx-auto mt-3 rounded-md" />
        </div> */}
        <div className="h-6 bg-[#3798f2] w-[60%] rounded-md" />
        <div className="h-6 bg-[#3798f2] w-[60%] rounded-md" />
        <div className="h-6 bg-[#3798f2] w-[60%] rounded-md" />
        {/* <div className="h-7 bg-[#3798f2] mx-auto w-1/2 rounded-md" /> */}
      </div>
    </div>
  );
};

export default Loader;
