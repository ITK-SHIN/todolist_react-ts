import { useState } from "react";
import "./App.css";
import Divider from "./Divider/Divider";
import TodoHeader from "./Header/TodoHeader";
import TodoInput from "./Input/TodoInput";
import TodoList from "./List/TodoList";
import TodoListTools from "./Tools/TodoListTools";
import TodoListArea from "./List/TodoListArea";

export type TodoType = {
  id: number;
  text: string;
  isChecked: boolean;
};

function App() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState<TodoType[]>([]);

  const handleTextChange = (text: string) => {
    setText(text);
  };

  const handleSubmit = () => {
    console.log(Date.now());
    const newTodos = todos.concat({
      id: Date.now(),
      text: text,
      isChecked: false,
    });
    setTodos(newTodos);
    setText("");
  };

  const handleRemove = (id: number) => {
    console.log("remove", id);
  };
  const handleToggle = (id: number) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          isChecked: !todo.isChecked,
        };
      }
      return todo;
    });

    setTodos(newTodos);
  };
  return (
    <main className="App">
      <TodoHeader count={todos.filter((todo) => !todo.isChecked).length} />
      <TodoInput
        text={text}
        onTextChange={handleTextChange}
        onSubmit={handleSubmit}
      />
      <TodoListArea todoCount={todos.length}>
        <TodoListTools />
        <Divider />
        <TodoList
          todos={todos}
          onRemoveClick={handleRemove}
          onToggleClick={handleToggle}
        />
      </TodoListArea>
    </main>
  );
}

export default App;
