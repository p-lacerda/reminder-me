import React, {useState, useContext} from 'react';
import AddTodo from "../components/AddTodo";
import TodoItem from "../components/TodoItem";
import TodoContext from "../context/TodoContext";

function Home() {
  const { todoList } = useContext(TodoContext);

  return (
    <section>
      <AddTodo />
      <ul>
        { todoList !== undefined && todoList.map((todo, index) => (
          <TodoItem
          key={ todo.key }
          todo={ todo }
          index={ index }
          />
        ))}
      </ul>
    </section>
  );
}

export default Home;
