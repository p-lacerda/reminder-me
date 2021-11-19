import React, { useEffect, useState } from 'react';

function Home() {
  const [todoText, setTodoText] = useState('')
  const [todoList, setTodoList] = useState([])
  const [editBool, setEditBool] = useState(false);
  const [editText, setEditText] = useState('');
  const [editedText, setEdited] = useState('');
  const [confirmEdit, setConfirm] = useState(false);

  const createValues = () => {
    if (localStorage.setItem === undefined) {
      localStorage.setItem('todoList');
    }
    const local = localStorage.todoList;
    console.log(local)
  }

  useEffect(() => {
    createValues();
  }, [])

  const createList = () => {
    setTodoList(arr => [...arr, todoText])
    setTodoText('');
  }

  const removeItem = (index) => {
    const itemsFilter = todoList.filter((items, ind) => ind !== index);
    setTodoList(itemsFilter);
  }

  const upOrDownTask = (index) => {

  }

  const editTask = () => {
    setEditBool(!editBool)
  }

  const functionEdit = ({ target }) => {
    setEditText(target.value)
  }

  const confirmFunction = () => {
    setEdited(editText);
    setEditText('');
    setConfirm(!confirmEdit)
    setEditBool(false)
  }

  return (
    <section>
      <form>
        <label htmlFor="newTodo">
          Adicionar nova tarefa
          <input value={todoText} onChange={(e) => (setTodoText(e.target.value))} ></input>
        </label>
        <button type="button" onClick={() => createList()} >Adicionar tarefa</button>
      </form>
      {todoList.map((todo, index) => (
        <ul key={index}>
          <li className="todo"> {todo} </li>
          <input
            type="checkbox"
          />
          {editBool ?
            <div>
              <input
              value={editText}
              onChange={(e) => functionEdit(e)}
              className={`input-${index}`}
              />
              <button
                type="button"
                onClick={ () => confirmFunction() }
              >
                Confirmar
              </button>
            </div> : <button
              type="button"
              onClick={() => editTask()}
            >
              Editar
            </button> 
          }
          <button
            type="button"
            onClick={() => removeItem(index)}
          >
            Remover tarefa
          </button>
          <button
            type="button"
            onClick={() => upOrDownTask(index)}
          >
            Subir tarefa
          </button>
          <button
            type="button"
          >
            Descer tarefa
          </button>
        </ul>
      ))}
    </section>
  );
}

export default Home;
