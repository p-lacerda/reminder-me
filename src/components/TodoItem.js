import React, {useContext} from 'react';
import {Center, IconButton, Text, textDecoration} from "@chakra-ui/react";
import { EditIcon, DeleteIcon, ArrowUpIcon, ArrowDownIcon } from '@chakra-ui/icons'
import TodoContext from "../context/TodoContext";

function TodoItem({ todo, index }) {
  const { editItem, removeItem } = useContext(TodoContext);
  return (
    <Center bg="whitesmoke">
    <li className="todo" key={ todo.key }>
      <div>
        <input id={`todo-${todo.key}`} type="checkbox" />
        <label htmlFor={`todo-${todo.key}`} id={todo.key}>
          <Text>
            { todo.text }
          </Text>
        </label>
      </div>
      <div>
        <IconButton
          colorScheme="blue"
          icon={ <EditIcon /> }
          marginRight="5px"
          type={"button"}
          onClick={ () => editItem(todo.key, index) }
        >
          Editar
        </IconButton>
        <IconButton
          colorScheme="red"
          icon={ <DeleteIcon /> }
          marginRight="5px"
          type="button"
          onClick={() => removeItem(todo.key, index)}
        >
          Remover tarefa
        </IconButton>
        <IconButton
          colorScheme="green"
          icon={ <ArrowUpIcon /> }
          marginRight="5px"
          type="button"
        >
          Subir tarefa
        </IconButton>
        <IconButton
          colorScheme="orange"
          icon={ <ArrowDownIcon /> }
          marginRight="5px"
          type="button"
        >
          Descer tarefa
        </IconButton>
      </div>
    </li>
    </Center>
  );
}

export default TodoItem;
