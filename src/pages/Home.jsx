import React, {useState, useContext} from 'react';
import { Box, HStack, StackDivider, IconButton, useColorMode } from "@chakra-ui/react"
import { FaSun, FaMoon } from 'react-icons/fa';
import AddTodo from "../components/AddTodo";
import TodoItem from "../components/TodoItem";
import TodoContext from "../context/TodoContext";

function Home() {
  const { todoList } = useContext(TodoContext);
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <section>
      <IconButton
        icon={colorMode === 'light' ? <FaSun /> : <FaMoon />}
        isRound='true'
        size='lg'
        position="fixed"
        right="1rem"
        bottom="1rem"
        alignSelf='flex-end'
        onClick={toggleColorMode}
      />
      <AddTodo />
      <Box spacing={1} w="100%">
        { todoList !== undefined && todoList.map((todo, index) => (
          <HStack key={todo.key}>
          <TodoItem
          key={ todo.key }
          todo={ todo }
          index={ index }
          />
          </HStack>
        ))}
      </Box>
    </section>
  );
}

export default Home;
