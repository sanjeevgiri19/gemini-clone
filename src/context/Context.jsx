import { createContext, useState } from "react";
import run from "../config/GeminiApi";

export const Context = createContext();

const ContextProvider = (props) => {

  const [input, setInput] = useState("")    //for ip data
  const [recentPrompt, setRecentPrompt] = useState("")  //when somthing is input, it shores in it
  const [prevPrompt, setPrevPrompt] = useState([])     //all the prev prompts will store here
  const [showResult, setShowResult] = useState(false)   //once it is true, it hides the texts and  boxes in main compponent, and shows the result
  const [loading, setLoading] = useState(false)         // simple loader
  const [resultData, setResultData] = useState("")       //display data on our webpage


  const newChat = () => {
    setLoading(false)
    setShowResult(false)
  }

  //for typing effect
  const delayPara = (index,nextWord) => {
    setTimeout(() => {
      setResultData(prev => prev+nextWord)
    }, 75*index);
  }

  const onSent = async (prompt) => {
    setResultData("")
    setLoading(true)
    setShowResult(true)
let response;
    if (prompt !== undefined) {
      response = await run(prompt)
      setRecentPrompt(prompt)
    } else {
      setPrevPrompt(prev => [...prev, input])
      setRecentPrompt(input)
      response = await run(input)
    }
    // setRecentPrompt(input)
    // setPrevPrompt(prev => [...prev, input])
    // const response = await run(input);
    let responseArray = response.split("**");
    let newResponse="";
    for (let i = 0; i < responseArray.length; i++) {
      if (i === 0 || i%2 !== 1) {
        newResponse += responseArray[i];
      } else {
        newResponse +="<b>"+responseArray[i]+"</b>"
      }
    }
    let newResponse2  = newResponse.split("*").join("</br></br>");
    
    // setResultData(newResponse2);

    let newResponseArray = newResponse2.split(" ");
    for (let i = 0; i < newResponseArray.length; i++) {
      const nextWord = newResponseArray[i];
      delayPara(i,nextWord+ " ")
    };

    setLoading(false)
    setInput("")
    // await run(input)

  }
  // onSent("what is react js")
  // onSent()

  const contextValue = {
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
    newChat,
  };
  
  return (

    <Context.Provider value={contextValue}>
      {props.children}
      </Context.Provider>
  )
};

export default ContextProvider;
