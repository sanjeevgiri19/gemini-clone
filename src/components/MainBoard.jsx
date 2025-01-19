import React, { useContext } from "react";
import TopNav from "./TopNav";
import { Context } from "../context/Context";
import Header from "./Header";
import Result from "./Result";

const MainBoard = () => {
  const {
    input,
    setInput,
    recentPrompt,
    setRecentPrompt,
    prevPrompt,
    setPrevPrompt,
    showResult,
    setShowResult,
    loading,
    resultData,
    onSent,
  } = useContext(Context);

  return (
    <div className="bg-[#1f1f1f] w-screen h-screen overflow-hidden ">
      <TopNav />

      <div className=" flex justify-center  flex-col h-[70%] ">
        <div className=" px-6 flex flex-col  gap-3 py-4 mt-20 mx-32 h-[110%] ">
          {!showResult ? (
            // <Result  />
            <Header />
          ) : (
            // <Header />
            <Result />
          )}
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className=" px-2 py-[4px] absolute bottom-8 flex gap-2  border-[1px] border-zinc-500  mt-16  rounded-full  w-[70%] ">
            <i className="ri-image-ai-line cursor-pointer text-zinc-400 mt-1 ml-2 text-[22px]"></i>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className=" text-zinc-400 bg-transparent text-xl outline-none w-[90%] p-2"
              placeholder="Enter a prompt here"
            />
            <i className="ri-mic-line cursor-pointer text-zinc-400 text-[25px]"></i>
            {input ? <i
              onClick={() => onSent()}
              className="ri-arrow-right-double-line cursor-pointer text-zinc-400 text-[28px]"
            ></i>: null}
          </div>
          <p className="text-zinc-400 absolute bottom-2 ">
            Gemini can make mistakes, so double-check it.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainBoard;
