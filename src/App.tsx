import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <Button colorScheme={"teal"}>ボタン</Button>
      </ChakraProvider>
    </div>
  );
}

export default App;
