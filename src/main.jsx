import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import { Context } from './context/Context.jsx'
// import contextProvider from "./context/Context.jsx"
import ContextProvider, {Context} from "./context/Context.jsx"

createRoot(document.getElementById("root")).render(
  <ContextProvider>
    <App />
  </ContextProvider>
);
