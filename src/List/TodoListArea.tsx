import React, { ReactNode } from "react";

interface TodoListAreaProps {
  children: ReactNode;
  todoCount: number;
}

// HOC High order component

const TodoListArea = (props: TodoListAreaProps) => {
  if (props.todoCount < 1) {
    return null;
  }
  return <>{props.children}</>;
};

export default TodoListArea;