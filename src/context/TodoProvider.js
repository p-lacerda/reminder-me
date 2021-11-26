import React, { useState } from 'react';
import TodoContext from './TodoContext';
import {v4 as uuidv4} from "uuid";

function Provider({ children }) {
  const [todoText, setTodoText] = useState('');
  const [todoList, setTodoList] = useState([]);

  const createList = () => {
    const key = uuidv4();
    setTodoList( [ ...todoList, {
      key, text: todoText
    }])
    setTodoText('');
  }

  const removeItem = (key) => {
    const itemsFilter = todoList.filter((todo) => todo.key !== key);
    setTodoList(itemsFilter);
  }

  const editItem = (key, index) => {
    const obj = todoList.filter((item) => item.key === key);

    obj[0].text = window.prompt();

    setTodoList(state => {
      return [
        ...state,
      ];
    });
  }

  const contextValue = {
    setTodoText,
    todoText,
    setTodoList,
    todoList,
    createList,
    editItem,
    removeItem
  };

  return (
    <TodoContext.Provider value={contextValue}>
      { children }
    </TodoContext.Provider>
  );
}

export default Provider;