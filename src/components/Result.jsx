import React, { useContext } from "react";
import Loader from "./Loader";
import { Context } from "../context/Context";

const Result = () => {

  const {recentPrompt, resultData} = useContext(Context)
  return (
    <>
      {resultData ? (
        <div className=" flex flex-col gap-3 overflow-y-auto ">
          <div className="flex gap-6">
            <i className="ri-account-circle-fill text-4xl  text-zinc-400"></i>
            <h2 className="text-xl font-medium text-zinc-300">
              {recentPrompt}
            </h2>
          </div>
          <div className="flex gap-4">
            <i className="ri-gemini-fill text-4xl text-[#3798F2]"></i>
            <p
              dangerouslySetInnerHTML={{ __html: resultData }}
              className="text-zinc-300 text-md"
            ></p>
          </div>
        </div>
      ) : (
        <Loader />
      )}
      {/* <div className="flex gap-4">
        <i className="ri-gemini-fill text-4xl text-[#3798F2]"></i>
        <p className="text-zinc-300 text-md">{resultData}</p>
        <p></p>
      </div> */}
    </>
  );
};

export default Result;

{
  /* <i class="ri-gemini-fill"></i> */
}
// 3798F2
