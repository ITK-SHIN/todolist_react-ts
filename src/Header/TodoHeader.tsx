import React from "react";
import styles from "./TodoHeader.module.css";

const TodoHeader = () => {
  return (
    <div>
      <header>
        <h1 className={styles.headerTitle}>
          <mark className={styles.todoCount}>5</mark>
          개의 할일
        </h1>
      </header>
    </div>
  );
};

export default TodoHeader;
