import React, {useContext} from 'react';
import {Center, IconButton, Text, ListItem, Checkbox, Box, Flex} from "@chakra-ui/react";
import { EditIcon, DeleteIcon, ArrowUpIcon, ArrowDownIcon } from '@chakra-ui/icons'
import TodoContext from "../context/TodoContext";
import { createBreakpoints } from "@chakra-ui/theme-tools"

function TodoItem({ todo, index }) {
  const { editItem, removeItem } = useContext(TodoContext);
  const breakpoints = createBreakpoints({
    sm: "25em",
    md: "37em",
    lg: "62em",
    xl: "80em",
    "2xl": "96em",
  });

  return (
      <Flex
        className="todo"
        key={ todo.key }
        padding="15px"
        minWidth={{ sm:"80%", md:"75%", lg:"55%", xl:"40%" }}
        display={"flex"}
        wordBreak="break-word"
        shadow={"base"}
        margin="8px 0"
        alignItems="center"
        justifyContent="space-between"
      >
          <Checkbox id={`todo-${todo.key}`} colorScheme="purple" marginRight={"15px"}/>
          <Text width={"150px"} minWidth={{ sm:"250px", md:"300px", lg:"350px", xl:"400px" }}>
            { todo.text }
          </Text>
          <Box>
            <IconButton
              colorScheme="blue"
              icon={ <EditIcon /> }
              marginRight="5px"
              marginLeft="5px"
              type={"button"}
              onClick={ () => editItem(todo.key, index) }
            >
              Editar
            </IconButton>
            <IconButton
              colorScheme="red"
              icon={ <DeleteIcon /> }
              type="button"
              onClick={() => removeItem(todo.key, index)}
            >
              Remover tarefa
            </IconButton>
          </Box>
      </Flex>
  );
}

export default TodoItem;
