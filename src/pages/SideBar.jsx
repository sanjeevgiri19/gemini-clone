import React, { useContext, useState, useEffect } from "react";
import { Context } from "../context/Context";

const SideBar = () => {
  const [isExtended, setisExtended] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { prevPrompt, setRecentPrompt, onSent, newChat } = useContext(Context);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth < 768) {
        setisExtended(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const loadSidePrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
    if (isMobile) setisExtended(false);
  };

  const toggleSidebar = () => {
    setisExtended((prev) => !prev);
  };

  return (
    <>
      {isMobile && !isExtended && (
        <button
          onClick={toggleSidebar}
          className="fixed  left-4 z-50 text-zinc-400 mt-4 hover:bg-zinc-700 rounded-full "
        >
          <i className="ri-menu-line text-xl"></i>
        </button>
      )}

      <div
        className={`
        fixed top-0 left-0 h-screen bg-[#27292b]/70
        flex flex-col justify-between pt-4 
        transition-all duration-300 ease-in-out
        ${isExtended ? "w-64" : "w-16"}
        ${isMobile && !isExtended ? "-translate-x-full" : "translate-x-0"}
        z-40
      `}
      >
        <div className="flex flex-col gap-2">
          <div className=" ">
            <i
              onClick={toggleSidebar}
              className="ri-menu-line cursor-pointer px-4 text-zinc-400 w-10 ml-3 pl-2  hover:bg-zinc-700 rounded-full text-xl  block h-10  pt-[6px] font-semibold"
            ></i>
          </div>

          <div className="flex items-center my-2  cursor-pointer text-zinc-400 hover:bg-zinc-700 text-lg py-2  rounded-3xl">
            <i className="ri-add-line text-2xl ml-4"></i>
            {isExtended && (
              <div onClick={() => newChat()} className="ml-2 truncate">
                New Chat
              </div>
            )}
          </div>

          {isExtended && (
            <div className="text-zinc-400 overflow-y-auto max-h-[calc(100vh-300px)]">
              <h1 className="text-2xl mb-4 ml-2">Recent</h1>
              {prevPrompt.map((item, index) => (
                <div
                  onClick={() => loadSidePrompt(item)}
                  className="flex cursor-pointer hover:bg-zinc-700 px-3 text-md py-1 rounded-full gap-3 items-center"
                  key={index}
                >
                  <i className="ri-chat-4-line flex-shrink-0"></i>
                  <p className="truncate">{item}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="bottom flex flex-col mb-12 text-zinc-400 gap-2 mx-1 font-medium">
          {["Help", "Activity", "Setting"].map((item, index) => (
            <div
              key={item}
              className="flex items-center gap-3 cursor-pointer px-3 py-1 hover:bg-zinc-700 rounded-full text-xl"
            >
              <i
                className={`
                ${item === "Help" ? "ri-question-line" : ""}
                ${item === "Activity" ? "ri-history-line" : ""}
                ${item === "Setting" ? "ri-settings-4-line" : ""}
                flex-shrink-0
              `}
              ></i>
              {isExtended && <div className="truncate">{item}</div>}
            </div>
          ))}
        </div>
      </div>

      {isMobile && isExtended && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setisExtended(false)}
        ></div>
      )}
    </>
  );
};

export default SideBar;
