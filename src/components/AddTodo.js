import React, { useContext } from 'react';
import {IconButton, Input,  Center } from "@chakra-ui/react"
import { AddIcon } from '@chakra-ui/icons'
import { Button, ButtonGroup } from "@chakra-ui/react"
import { Heading } from "@chakra-ui/react"
import TodoContext from "../context/TodoContext";

function AddTodo() {
  const { todoText, setTodoText, createList } = useContext(TodoContext);

  return (
    <Center>
    <form>
      <label htmlFor="newTodo">
        <Heading
          color=""
          as="h3"
          size="lg"
          marginTop="5px"
          textAlign="center"
        >
          Todo App
        </Heading>
        <Input
          placeholder="Add your new todo..."
          marginTop="5px"
          marginRight="5px"
          maxW="230px"
          size="md"
          value={todoText}
          onChange={(e) => (setTodoText(e.target.value))}
        />
      </label>
      <IconButton
        icon={<AddIcon />}
        colorScheme="green"
        variant={ todoText.length > 3 ? "solid" : "outline" }
        disabled={ todoText.length > 3 ? false : true }
        onClick={() => createList()}
      >
        Adicionar tarefa
      </IconButton>
    </form>
    </Center>
  );
}

export default AddTodo;
