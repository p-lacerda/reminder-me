import React, { useContext } from 'react';
import TodoContext from "../context/TodoContext";

function AddTodo() {
  const { todoText, setTodoText, createList } = useContext(TodoContext);

  return (
    <form>
      <label htmlFor="newTodo">
        Adicionar nova tarefa
        <input
          value={todoText}
          onChange={(e) => (setTodoText(e.target.value))}
        />
      </label>
      <button type="button" onClick={() => createList()} > Adicionar tarefa </button>
    </form>
  );
}

export default AddTodo;
