import {
  ReactNode,
  createContext,
  useReducer,
  Dispatch,
  useContext,
} from "react";
import todoInputReducer, {
  TodoInputActionType,
  TodoInputStateType,
} from "./todoInputReducer";
import todoReducer, { TodoActionType, TodoStateType } from "./todoReducer";

interface TodoProviderProps {
  children: ReactNode;
}

const TodoStateContext = createContext<TodoStateType | null>(null);
const TodoDispatchContext = createContext<Dispatch<TodoActionType> | null>(
  null
);
const InputTodoContext = createContext<TodoInputStateType | null>(null);
const InputTodoDispatchContext =
  createContext<Dispatch<TodoInputActionType> | null>(null);

const TodoProvider = (props: TodoProviderProps) => {
  const [inputState, inputDispatch] = useReducer(todoInputReducer, {
    text: "",
  });
  const [todoState, todoDispatch] = useReducer(todoReducer, {
    todos: [],
  });

  return (
    <TodoStateContext.Provider value={todoState}>
      <TodoDispatchContext.Provider value={todoDispatch}>
        <InputTodoContext.Provider value={inputState}>
          <InputTodoDispatchContext.Provider value={inputDispatch}>
            {props.children}
          </InputTodoDispatchContext.Provider>
        </InputTodoContext.Provider>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
};

export const useTodoState = () => {
  const value = useContext(TodoStateContext);

  if (!value) {
    throw new Error("cannot find useTodoState");
  }

  return value;
};

export const useTodoDispatch = () => {
  const value = useContext(TodoDispatchContext);

  if (!value) {
    throw new Error("cannot find todoDispatch");
  }

  return value;
};

export const useInputTodoState = () => {
  const value = useContext(InputTodoContext);

  if (!value) {
    throw new Error("cannot find inputTodo");
  }

  return value;
};

export const useInputTodoDispatch = () => {
  const value = useContext(InputTodoDispatchContext);

  if (!value) {
    throw new Error("cannot find useInputTodoDispatch");
  }

  return value;
};

export default TodoProvider;
