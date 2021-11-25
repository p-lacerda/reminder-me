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

  const contextValue = {
    setTodoText,
    todoText,
    setTodoList,
    todoList,
    createList,
  };

  return (
    <TodoContext.Provider value={contextValue}>
      { children }
    </TodoContext.Provider>
  );
}

export default Provider;