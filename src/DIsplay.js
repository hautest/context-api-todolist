import { TodoContext } from "./todoContext";
import { useContext } from "react";

export function Display() {
  const { todo } = useContext(TodoContext);
  return (
    <ui>
      {todo.map((item) => (
        <li key={String(item.id)}>{item.value}</li>
      ))}
    </ui>
  );
}
