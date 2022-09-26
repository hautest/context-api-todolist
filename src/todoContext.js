import { createContext, useState } from "react";

const TodoContext = createContext({ todo: [], setTodo: () => {} });

function TodoProvider({ children }) {
  const [todo, setTodo] = useState([]);

  return (
    <TodoContext.Provider value={{ todo, setTodo }}>
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
