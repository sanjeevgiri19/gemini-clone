import React from 'react'

const Header = () => {
  return (
    <div className=' '>
      <div className="mx-6 ">
        <h1 className=" text-[80px]  font-bold bg-gradient-to-r from-[#5392f8f8] via-pink-500 to-[#ff5546] text-transparent bg-clip-text leading-tight">
          Hello, Dev.
        </h1>
        <h2 className=" h2 text-3xl font-bold text-zinc-400">
          Push Gemini to the limits of what Ai can do, powered by GeminiAPI
        </h2>
      </div>

      <div className="flex gap-10 mr-20 mt-24 justify-center relative">
        <div className="bg-[#282a2c] cursor-pointer  w-52 p-3 text-lg rounded-md h-52">
          <h2 className="text-zinc-300">
            Suggest beautiful places to see on ap upcoming road trip
          </h2>
          <i className="ri-safari-line text-zinc-400 absolute bottom-0  p-[2px] bg-[#1f1f1f] rounded-full text-3xl"></i>
        </div>
        <div className="bg-[#282a2c]  cursor-pointer  w-52 rounded-md p-3 text-lg h-52">
          <h2 className="text-zinc-300">
            Trip Ideas: Convert unorganized text into structured tables.
          </h2>
          <i className="ri-lightbulb-line text-zinc-400 absolute bottom-0  p-[2px] bg-[#1f1f1f] rounded-full text-3xl"></i>
        </div>
        <div className="bg-[#282a2c]  w-52 rounded-md p-3 cursor-pointer text-lg h-52">
          <h2 className="text-zinc-300">
            Unit Testing: Add unit tests for a Python function.
          </h2>
          <i className="ri-chat-4-line  text-zinc-400 absolute bottom-0  p-[2px] bg-[#1f1f1f] rounded-full text-3xl"></i>
        </div>
        <div className="bg-[#282a2c]  w-52 rounded-md cursor-pointer p-3 text-lg h-52">
          <h2 className="text-zinc-300">
            Sentiment: Check Analyze the sentiment of texts.
          </h2>
          <i className="ri-code-s-slash-line  text-zinc-400  absolute bottom-0  p-[2px] bg-[#1f1f1f] rounded-full text-3xl"></i>
        </div>
      </div>
    </div>
  );
}

export default Header