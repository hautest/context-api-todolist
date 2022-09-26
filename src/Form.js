import { TodoContext } from "./todoContext";
import { useContext, useState, useId } from "react";

export function Form() {
  const [inputValue, setInputValue] = useState("");
  const { setTodo } = useContext(TodoContext);
  const handleSumbit = (e) => {
    e.preventDefault();
    setTodo((prev) => [
      ...prev,
      { value: inputValue, id: Math.random() * 1000000 },
    ]);
    setInputValue("");
  };
  return (
    <form onSubmit={handleSumbit}>
      <input
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <button>추가하기</button>
    </form>
  );
}
