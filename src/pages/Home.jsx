import React, {useEffect, useState, useContext} from 'react';
import AddTodo from "../components/AddTodo";
import TodoContext from "../context/TodoContext";

function Home() {
  const { todoText, setTodoText, todoList, setTodoList } = useContext(TodoContext);
  const [newList, setNewList] = useState([]);
  const [newNumb, setNewNumb] = useState(0);

  const removeItem = (key) => {
    const itemsFilter = todoList.filter((todo) => todo.key !== key);
    setTodoList(itemsFilter);
  }

  const upOrDownTask = (index) => {
  }

  const editFunc = (key, index) => {
    const obj = todoList.filter((item) => item.key === key);
    obj[0].text = window.prompt();

    setTodoList(state => {
      return [
        ...state,
        {
          obj,
        }
      ];
    });
  }

  return (
    <section>
      <AddTodo />
      <ul>
        { todoList !== undefined && todoList.map((todo, index) => (
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
                onClick={ () => editFunc(todo.key, index) }
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
                onClick={() => upOrDownTask()}
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
        ))}
      </ul>
    </section>
  );
}

export default Home;
