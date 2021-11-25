import React, { useContext } from 'react';
import {IconButton, Input,  Center, HStack } from "@chakra-ui/react"
import { AddIcon } from '@chakra-ui/icons'
import { Button, ButtonGroup } from "@chakra-ui/react"
import { Heading } from "@chakra-ui/react"
import TodoContext from "../context/TodoContext";

function AddTodo() {
  const { todoText, setTodoText, createList } = useContext(TodoContext);

  return (
    <Center>
      <form>
          <Heading
            color=""
            as="h3"
            marginTop="1.5rem"
            textAlign="center"
          >
            Todo App
          </Heading>
          <HStack mt='5'>
            <Input
              placeholder="Add your new todo..."
              marginRight="5px"
              maxW="230px"
              size="md"
              value={todoText}
              onChange={(e) => (setTodoText(e.target.value))}
            />
        <IconButton
          icon={<AddIcon />}
          colorScheme="green"
          variant={ todoText.length > 3 ? "solid" : "outline" }
          disabled={ todoText.length > 3 ? false : true }
          onClick={() => createList()}
        >
          Adicionar tarefa
        </IconButton>
      </HStack>
    </form>
</Center>
);
}

export default AddTodo;
