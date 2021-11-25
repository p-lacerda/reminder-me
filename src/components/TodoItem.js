import React, {useContext} from 'react';
import {Center, IconButton, Text, ListItem, Checkbox, Box} from "@chakra-ui/react";
import { EditIcon, DeleteIcon, ArrowUpIcon, ArrowDownIcon } from '@chakra-ui/icons'
import TodoContext from "../context/TodoContext";

function TodoItem({ todo, index }) {
  const { editItem, removeItem } = useContext(TodoContext);
  return (
      <Box className="todo" key={ todo.key } padding="10px" boxShadow="base">
        <Box d="flex">
          <Checkbox id={`todo-${todo.key}`} />
          <Text>
            { todo.text }
          </Text>
          <Box>
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
          </Box>
        </Box>
      </Box>
  );
}

export default TodoItem;
