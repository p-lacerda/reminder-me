import React, {useEffect, useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

function Home() {
  const [todoText, setTodoText] = useState('')
  const [todoList, setTodoList] = useState([])
  const [copyList, setCopy] = useState([]);
  const [newList, setNewList] = useState([]);
  const [newNumb, setNewNumb] = useState(0);

  const createList = () => {
    const key = uuidv4();
    setTodoList( [ ...todoList, {
      key, text: todoText
    }])
    setCopy( [ ...todoList, {
      key, text: todoText
    }])
    setTodoText('');
  }

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
      <form>
        <label htmlFor="newTodo">
          Adicionar nova tarefa
          <input
            value={todoText}
            onChange={(e) => (setTodoText(e.target.value))}
          />
        </label>
        <button type="button" onClick={() => createList()} >Adicionar tarefa</button>
      </form>
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
