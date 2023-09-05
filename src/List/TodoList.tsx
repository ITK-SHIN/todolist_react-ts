import TodoItem from "../ListItem/TodoItem";
import styles from "./TodoList.module.css";

const TodoList = () => {
  const arr = ["React", "TypeScript", "JavaScript", "CSS", "HTML"];
  return (
    <section>
      <ol className={styles.olContainer}>
        {arr.map((str, index) => {
          return <TodoItem text={str} key={`${str}_${index}`} />;
        })}
      </ol>
    </section>
  );
};

export default TodoList;
