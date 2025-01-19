import React, { useContext, useState } from "react";
import { Context } from "../context/Context";

const SideBar = () => {
  const [isExtended, setisExtended] = useState(false);

  const { prevPrompt, setRecentPrompt, onSent, newChat } = useContext(Context);

  const loadSidePrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt)
  }

  return (
    <div className="sidebar bg-[#282a2c] flex flex-col  h-screen justify-between  p-5">
      <div className="top flex flex-col   gap-2">
        <i
          onClick={() => setisExtended((prev) => !prev)}
          className="ri-menu-line cursor-pointer text-zinc-400 hover:bg-zinc-700 rounded-full text-2xl block max-w-10 h-10 pl-2 pt-[5px] font-semibold"
        ></i>
        <div className="flex my-4 cursor-pointer text-zinc-400 hover:bg-zinc-700 text-lg p-2 rounded-3xl">
          <i className="ri-add-line text-2xl  "></i>
          {isExtended && <div onClick={() => newChat()} className="w-44">New Chat</div>}
        </div>

        {isExtended && (
          <div className="text-zinc-400">
            <h1 className="text-2xl mb-6 ml-2">Recent</h1>

            {prevPrompt.map((item, index) => (
              <div
                onClick={() => loadSidePrompt(item)}
                className="flex cursor-pointer hover:bg-zinc-700  px-3 text-md py-1 rounded-full gap-3 "
                key="index"
              >
                <i className="ri-chat-4-line "></i>
                <p>{item.length > 16 ? `${item.slice(0, 16)}...` : item} </p>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="bottom flex flex-col text-zinc-400   gap-2 mx-1  font-medium h-52 justify-end">
        <div className="flex text-xl cursor-pointer px-3 py-1 hover:bg-zinc-700 rounded-full gap-3 ">
          <i className="ri-question-line"></i>
          {isExtended && <div>Help</div>}
        </div>
        <div className="flex gap-3 cursor-pointer px-3 py-1 hover:bg-zinc-700  rounded-full text-xl">
          <i className="ri-history-line"></i>
          {isExtended && <div>Activity</div>}
        </div>
        <div className="flex gap-3 hover:bg-zinc-700 px-3 py-1 cursor-pointer rounded-full text-xl">
          <i className="ri-settings-4-line flex gap-2"></i>
          {isExtended && <div>Setting</div>}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
