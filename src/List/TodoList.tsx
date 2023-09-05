import { TodoType } from "../App";
import TodoItem from "../ListItem/TodoItem";
import styles from "./TodoList.module.css";

interface TodoListProps {
  todos: TodoType[];
}

const TodoList = (props: TodoListProps) => {
  return (
    <section>
      <ol className={styles.olContainer}>
        {props.todos.map((todo, index) => {
          return (
            <TodoItem
              text={todo.text}
              key={`${todo.id}_${index}`}
              isChecked={todo.isChecked}
            />
          );
        })}
      </ol>
    </section>
  );
};

export default TodoList;
