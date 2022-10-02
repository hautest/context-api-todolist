import { createContext, useState } from "react";
import { Content } from "./Content";
import { Input } from "./Input";

const ContextAPI = createContext({ inputValue: "", setInputValue: () => {} });

function Context() {
  const [inputValue, setInputValue] = useState("");
  return (
    <ContextAPI.Provider value={{ inputValue, setInputValue }}>
      <Input />
      <Content />
    </ContextAPI.Provider>
  );
}

export { ContextAPI, Context };
