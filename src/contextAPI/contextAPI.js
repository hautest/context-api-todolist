import { createContext, useState } from "react";

const ContextAPI = createContext({ inputValue: "", setInputValue: () => {} });

function ContextProvider({ children }) {
  const [inputValue, setInputValue] = useState("");

  return (
    <ContextAPI.Provider value={{ inputValue, setInputValue }}>
      {children}
    </ContextAPI.Provider>
  );
}

export { ContextAPI, ContextProvider };
