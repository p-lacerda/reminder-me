import React, {useContext} from 'react';
import TodoContext from "../context/TodoContext";

function TodoItem({ todo, index }) {
  const { editItem, removeItem } = useContext(TodoContext);
  return (
    <li className="todo" key={ todo.key }>
      <div>
        <input id={`todo-${todo.key}`} type="checkbox" />
        <label htmlFor={`todo-${todo.key}`} id={todo.key}>
          { todo.text }
        </label>
      </div>
      <div>
        <button
          type={"button"}
          onClick={ () => editItem(todo.key, index) }
        >
          Editar
        </button>
        <button
          type="button"
          onClick={() => removeItem(todo.key, index)}
        >
          Remover tarefa
        </button>
        <button
          type="button"
        >
          Subir tarefa
        </button>
        <button
          type="button"
        >
          Descer tarefa
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
