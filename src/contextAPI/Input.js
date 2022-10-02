import { ContextAPI } from "./contextAPI";
import { useContext } from "react";

export function Input() {
  console.log("input 렌더링");
  const { inputValue, setInputValue } = useContext(ContextAPI);
  return (
    <div>
      <label>ContextAPI input 입니당</label>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </div>
  );
}
