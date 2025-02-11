import { createContext, useState } from "react";
import run from "../config/GeminiApi";

export const Context = createContext();

const ContextProvider = (props) => {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPrompt, setPrevPrompt] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");

  const newChat = () => {
    setLoading(false);
    setShowResult(false);
    setResultData("");
  };

  const delayPara = (index, nextWord) => {
    setTimeout(() => {
      setResultData((prev) => prev + nextWord);
    }, 30 * index);
  };

  const onSent = async (prompt) => {
    setResultData("");
    setLoading(true);
    setShowResult(true);
    let response;

    try {
      if (prompt !== undefined) {
        response = await run(prompt);
        setRecentPrompt(prompt);
      } else {
        setPrevPrompt((prev) => [...prev, input]);
        setRecentPrompt(input);
        response = await run(input);
      }

      let formattedResponse = formatResponse(response);
      let responseArray = formattedResponse.split(" ");

      for (let i = 0; i < responseArray.length; i++) {
        const nextWord = responseArray[i];
        delayPara(i, nextWord + " ");
      }
    } catch (error) {
      console.error("Error fetching response:", error);
      setResultData("An error occurred while fetching the response.");
    } finally {
      setLoading(false);
      setInput("");
    }
  };

  const escapeHtml = (str) => {
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  };

const formatResponse = (response) => {
  // Handle code blocks (preserve content inside)
  response = response.replace(/```([\s\S]*?)```/g, (match, code) => {
    return `<pre><code>${code
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")}</code></pre>`;
  });

  // Handle inline code (enclosed in `backticks`)
  response = response.replace(/`([^`]+)`/g, "<code>$1</code>");

  // Handle bold text (**text**)
  response = response.replace(/\*\*([^*]+)\*\*/g, "<b>$1</b>");

  // Handle italic text (*text*)
  response = response.replace(/\*([^*]+)\*/g, "<i>$1</i>");

  // Handle line breaks
  response = response.replace(/\n/g, "<br/>");

  // Handle unordered lists (- or *)
  response = response.replace(/^\s*[-*]\s+(.+)/gm, "<li>$1</li>");
  response = response.replace(/(<li>[\s\S]*?<\/li>)/g, "<ul>$1</ul>");

  // Handle ordered lists (1., 2., etc.)
  response = response.replace(/^\s*\d+\.\s+(.+)/gm, "<li>$1</li>");
  response = response.replace(/(<li>[\s\S]*?<\/li>)/g, "<ol>$1</ol>");

  // Handle headings (#, ##, ###)
  response = response.replace(/^#\s+(.+)/gm, "<h1>$1</h1>");
  response = response.replace(/^##\s+(.+)/gm, "<h2>$1</h2>");
  response = response.replace(/^###\s+(.+)/gm, "<h3>$1</h3>");

  // Handle links ([text](url))
  response = response.replace(
    /\[([^\]]+)\]\(([^)]+)\)/g,
    '<a href="$2" target="_blank">$1</a>'
  );

  // Handle horizontal rules (---)
  response = response.replace(/^\s*---\s*/gm, "<hr/>");

  return response;
};


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
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
