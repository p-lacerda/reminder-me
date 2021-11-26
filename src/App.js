import Home from './pages/Home';

import { ChakraProvider } from "@chakra-ui/react"
import InfoTab from "./components/InfoTab";
import React from "react";

function App() {
  return (
    <ChakraProvider>
      <Home />
    </ChakraProvider>
  );
}

export default App;
