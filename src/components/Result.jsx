import React, { useContext } from "react";
import Loader from "./Loader";
import { Context } from "../context/Context";

const Result = () => {
  const { recentPrompt, resultData } = useContext(Context);
  return (
    <>
      {resultData ? (
        <div className="flex flex-col gap-4 overflow-y-auto">
          <div className="flex gap-4 sm:gap-6 ">
            <i className="ri-account-circle-fill text-3xl sm:text-4xl text-zinc-400"></i>
            <h2 className="text-lg sm:text-xl font-medium text-zinc-300">
              {recentPrompt}
            </h2>
          </div>
          <div className="flex gap-4 items-start">
            <i className="ri-gemini-fill text-3xl sm:text-4xl text-[#3798F2]"></i>
            <div
              className="text-zinc-300 text-sm sm:text-md"
              dangerouslySetInnerHTML={{ __html: resultData }}
            ></div>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Result;