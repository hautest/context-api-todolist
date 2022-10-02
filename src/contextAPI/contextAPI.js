import { createContext, useState } from "react";
import { Context } from "./Context";

const ContextAPI = createContext({ inputValue: "", setInputValue: () => {} });

function ContextProvider() {
  const [inputValue, setInputValue] = useState("");

  return (
    <ContextAPI.Provider value={{ inputValue, setInputValue }}>
      <Context />
    </ContextAPI.Provider>
  );
}

export { ContextAPI, ContextProvider };
